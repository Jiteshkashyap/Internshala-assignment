import {
  FaChevronDown,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">

      <div className="max-w-[1180px] mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center">

          <img
            src="https://internshala.com/static/images/common/new_internshala_logo.svg"
            alt="Internshala"
            className="h-8"
          />
        </div>

        <nav className="flex items-center text-[15px] text-gray-700">

          <button
            className=" h-16 px-6 flex items-center gap-2 border-b-2 border-[#00A5EC] text-gray-800">
            Internships
            <FaChevronDown size={12} />
          </button>

          <button className=" h-16 px-5 flex items-center gap-2 hover:text-black">
            Courses
            <span className=" bg-[#FF8C00] text-white text-[10px] px-1.5 py-[2px] rounded font-semibold">
              OFFER
            </span>

            <FaChevronDown size={12} />
          </button>

          <button className=" h-16 px-5 flex items-center gap-2 hover:text-black">
            Jobs
            <FaChevronDown size={12} />
          </button>

          <button className=" h-16 px-5 flex items-center gap-2 hover:text-black">
            Login / Register
            <FaChevronDown size={12} />
          </button>

        </nav>

      </div>

    </header>
  );
};

export default Navbar;