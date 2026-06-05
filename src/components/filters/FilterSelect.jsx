import { FaChevronDown } from "react-icons/fa";

const FilterSelect = ({
  label,
  value,
  options,
  placeholder,
  onChange,
}) => {
  return (
    <div className="mb-5">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>

      <div className="relative">
        <select
          value={value}
          onChange={onChange}
          className=" w-full border border-gray-300 rounded-md px-3 py-3 text-sm appearance-none bg-white focus:border-[#00A5EC] focus:ring-2 focus:ring-blue-100 outline-none">
          <option value="">
            {placeholder}
          </option>

          {options.map((option) => (
            <option
              key={option}
              value={option}
            >
              {option}
            </option>
          ))}
        </select>

        <FaChevronDown
          size={12}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
        />
      </div>
    </div>
  );
};

export default FilterSelect;