import { useState } from "react";
import {
  FaFilter,
  FaChevronDown,
  FaChevronUp,
  FaSearch,
 FaTimes
} from "react-icons/fa";
import { INITIAL_FILTERS } from "../../constants/filters";
import FilterSelect from "./FilterSelect";

const FilterSidebar = ({
  filters,
  setFilters,
  locations,
  profiles,
}) => {
  const [showMoreFilters, setShowMoreFilters] =
    useState(false);
  const [searchInput, setSearchInput] = useState("");

  const updateFilter = (key, value) => {
  setFilters((prev) => ({
    ...prev,
    [key]: value,
  }));
};

  return (
    <div>

      {/* Filter card */}

      <div className="bg-white border border-gray-200 rounded-xl p-6 overflow-y-auto
       max-h-[75vh] pr-3">
        <div className="flex items-center justify-center gap-2 mb-6">
          <FaFilter className="text-blue-400" />

          <h2 className="text-lg font-semibold text-gray-700">
            Filters
          </h2>
        </div>

        {/* Profile */}

        <FilterSelect
         label="Profile"
         value={filters.profile}
         options={profiles}
         placeholder="e.g. Marketing"
         onChange={(e) =>updateFilter("profile",e.target.value)}/>

        {/* Location */}

        <FilterSelect
         label="Location"
         value={filters.location}
         options={locations}
         placeholder="e.g. Delhi"
         onChange={(e) =>
         updateFilter("location",e.target.value)}/>

        {/* Work From Home */}

        <label className="flex items-center gap-3 mb-4 cursor-pointer">

          <input
            type="checkbox"
            checked={filters.workFromHome}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                workFromHome:
                  e.target.checked,
              }))
            }
          />

          <span className="text-gray-700">
            Work from home
          </span>

        </label>

        {/* Part Time */}

        <label className="flex items-center gap-3 mb-6 cursor-pointer">

          <input
            type="checkbox"
            checked={filters.partTime}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                partTime: e.target.checked,}))
              }
          />

          <span className="text-gray-700">
            Part-time
          </span>

        </label>

        {/* Stipend */}

        <div className="mb-6">

          <label className="block text-sm font-medium text-gray-700 mb-4">
            Desired minimum monthly stipend (₹)
          </label>

          <input
            type="range"
            min="0"
            max="10000"
            step="2000"
            value={filters.stipend}
            onChange={(e) =>updateFilter("stipend", Number(e.target.value))}
            className="w-full accent-[#00A5EC]"
          />

          <div className="flex justify-between text-gray-500 text-sm mt-2">
            <span>0</span>
            <span>2K</span>
            <span>4K</span>
            <span>6K</span>
            <span>8K</span>
            <span>10K</span>
          </div>

        </div>

        {/* View More */}

        <button
          onClick={() =>setShowMoreFilters(!showMoreFilters) }
          className=" flex items-center gap-2 text-blue-400 font-medium text-sm">

          {showMoreFilters ? "View less filters" : "View more filters"}
          {showMoreFilters ? (
            <FaChevronUp size={12} />
          ) : (
            <FaChevronDown size={12} />
          )}
        </button>
        {/* EXTRA FILTERS */}

        {showMoreFilters && (

          <div className="mt-6 space-y-5">

            <div>
              <label className="block text-sm font-medium mb-2">
                Starting from (or after)
              </label>

              <input
                type="date"
                value={filters.startDate}
                onChange={(e) =>setFilters((prev) => ({
                    ...prev,
                    startDate:
                      e.target.value,
                  }))
                }
                className=" w-full border border-gray-300 rounded-md px-3 py-3"/>
            </div>

          {/* Max duration */}
            <FilterSelect
             label="Max. duration (months)"
             value={filters.duration}
             options={[
               "1 Month",
               "2 Months",
               "3 Months",
               "6 Months",]}
             placeholder="Choose duration"
             onChange={(e) =>updateFilter("duration",e.target.value)}/>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.jobOffer}
                onChange={(e) =>
                  setFilters((prev) => ({
                    ...prev,
                    jobOffer:
                      e.target.checked,
                  }))
                }
              />

              <span>
                Internships with job offer
              </span>

            </label>

          </div>

        )}

        {/* Clear */}

        <div className="flex justify-end mt-8">

          <button
            onClick={() =>
              setFilters(INITIAL_FILTERS)
            }
            className="text-blue-400 font-medium"
          >
            Clear all
          </button>

        </div>

      </div>
      <div className="mt-4"></div>

<div className="bg-white border border-gray-200 rounded-xl p-5">

  <h3 className="text-center text-lg font-semibold text-gray-700 mb-5">
    Keyword Search
  </h3>

  <div className="flex overflow-hidden rounded-md">

  <input
    type="text"
    placeholder="e.g. Design, Mumbai, Infosys"
    value={searchInput}
    onChange={(e) => setSearchInput(e.target.value)}
    className="flex-1 border border-gray-300 border-r-0 px-3 py-3 outline-none text-sm"
  />

  {filters.search ? (
    <button
      onClick={() => {
        setSearchInput("");
        setFilters((prev) => ({
          ...prev,
          search: "",
        }));
      }}
      className="bg-red-600 text-white px-5 flex items-center justify-center"
    >
      <FaTimes />
    </button>
  ) : (
    <button
      onClick={() =>
        setFilters((prev) => ({
          ...prev,
          search: searchInput,
        }))
      }
      className="bg-[#00A5EC] text-white px-5 flex items-center justify-center"
    >
      <FaSearch />
    </button>
  )}

</div>
 </div>
</div>
  );
};

export default FilterSidebar;