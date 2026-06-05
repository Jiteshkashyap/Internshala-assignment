export const getUniqueLocations = (
  internships
) => {
  const locations = internships.flatMap(
    (item) => item.location_names || []
  );

  return [...new Set(locations)].sort();
};


export const getUniqueProfiles = (
  internships
) => {
  const profiles = internships.map(
    (item) => item.title
  );

  return [...new Set(profiles)].sort();
};