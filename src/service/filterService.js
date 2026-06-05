export const applyFilters = (
  internships,
  filters
) => {
  return internships.filter((internship) => {
    const profileMatch =
      !filters.profile ||
      internship.title
        ?.toLowerCase()
        .includes(
          filters.profile.toLowerCase()
        );

    const locationMatch =
      !filters.location ||
      internship.location_names?.some(
        (location) =>
          location
            .toLowerCase()
            .includes(
              filters.location.toLowerCase()
            )
      );

    const durationMatch =
      !filters.duration ||
      internship.duration ===
        filters.duration;

    const stipendAmount =
      internship.stipend?.salaryValue1 ||
      0;

    const stipendMatch =
      stipendAmount >=
      filters.stipend;

    const searchText = filters.search.toLowerCase();

 const searchMatch =
  !filters.search ||
  internship.title?.toLowerCase().includes(searchText) ||
  internship.company_name?.toLowerCase().includes(searchText) ||
  internship.location_names?.some((location) =>
  location.toLowerCase().includes(searchText)
  );

    const workFromHomeMatch =
      !filters.workFromHome ||
      internship.work_from_home;

    const jobOfferMatch =
      !filters.jobOffer ||
      internship.ppo_label_value;

    const startDateMatch =
      !filters.startDate ||
      new Date(
        internship.start_date1
      ) >=
        new Date(filters.startDate);

    return (
      profileMatch &&
      locationMatch &&
      durationMatch &&
      stipendMatch &&
      searchMatch &&
      workFromHomeMatch &&
      jobOfferMatch &&
      startDateMatch
    );
  });
};