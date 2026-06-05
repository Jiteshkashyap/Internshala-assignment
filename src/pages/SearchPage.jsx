import Navbar from "../components/layout/Navbar";
import FilterSidebar from "../components/filters/FilterSidebar";
import InternshipList from "../components/internships/InternshipList";
import Loader from "../components/common/Loader";
import useInternships from "../hooks/useInternships";
import { applyFilters } from "../service/filterService";
import { useMemo, useState } from "react";
import {
  getUniqueLocations,
  getUniqueProfiles,
} from "../utils/helper";
import Footer from "../components/layout/Footer";
import FAQ from "../components/common/Faq";
import { INITIAL_FILTERS } from "../constants/filters";

const SearchPage = () => {
  const { internships, loading, error } = useInternships();

  const locations = getUniqueLocations(internships);
  const profiles = getUniqueProfiles(internships);
  const [filters, setFilters] = useState(INITIAL_FILTERS);

  const [sortBy, setSortBy] = useState("");

  const filteredInternships = useMemo(() => {
    return applyFilters(internships, filters);
  }, [internships, filters]);

  const displayedInternships = useMemo(() => {
    const data = [...filteredInternships];

    if (sortBy === "stipend") {
      data.sort((a, b) => {
        const stipendA =
          parseInt(
            (a.stipend?.salary || "").replace(/\D/g, "")
          ) || 0;

        const stipendB =
          parseInt(
            (b.stipend?.salary || "").replace(/\D/g, "")
          ) || 0;

        return stipendB - stipendA;
      });
    }

    if (sortBy === "title") {
      data.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
    }

    return data;
  }, [filteredInternships, sortBy]);

  if (loading) {
  return (
    <>
      <Navbar />

      <div className="bg-[#f8f8f8] min-h-screen">
        <Loader />
      </div>
    </>
  );
}

  if (error) {
    return (
      <div className="text-center py-10 text-red-500">
        {error}
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <div className="bg-[#f8f8f8] min-h-screen py-8">
        <div className="max-w-[1100px] mx-auto px-4">

  <div className="text-center mb-8">

    <h2 className="text-2xl font-semibold text-gray-800">
      {filteredInternships.length} Total Internships
    </h2>

    <p className="text-sm text-gray-500 mt-2">
      Latest Summer Internships
    </p>

  </div>

  <div className="flex flex-col lg:flex-row gap-6 items-start">

    <aside className="w-full lg:w-[320px] shrink-0 lg:sticky lg:top-5">

      <FilterSidebar
        filters={filters}
        setFilters={setFilters}
        locations={locations}
        profiles={profiles}
      />

    </aside>

    <main className="flex-1 w-full min-w-0">

      <div className="bg-white border border-gray-200 rounded-xl px-6 py-4 mb-4 shadow-sm">

        <div className="flex flex-col sm:flex-row gap-4 sm:justify-between sm:items-center">

          <div>

            <h2 className="text-lg font-semibold text-gray-800">
              Latest Internships
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Browse internships based on your preferences
            </p>

          </div>
          <select
            value={sortBy}
            onChange={(e) =>
              setSortBy(e.target.value)
            }
            className=" border border-gray-300 rounded-md px-3 py-2 text-sm bg-white">
            <option value="">
              Sort By
            </option>

            <option value="title">
              Title A-Z
            </option>

            <option value="stipend">
              Highest Stipend
            </option>
          </select>
        </div>
      </div>

      <InternshipList internships={displayedInternships}/>

    </main>
  </div>
 </div>
 <FAQ/>
</div>

      <Footer/>
    </>
  );
};

export default SearchPage;