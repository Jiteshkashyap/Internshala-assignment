import {
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaCalendarAlt,
  FaRegClock,
  FaBuilding,
  FaClock,
} from "react-icons/fa";
import {
  HiOutlineClock,
  HiLightningBolt,
} from "react-icons/hi";

const InternshipCard = ({ internship }) => {
  return (
    <div className=" bg-white rounded-2xl border border-gray-200 p-5 shadow-sm cursor-pointer transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:border-[#00A5EC] ">

      {/* Header */}

      <div className="flex justify-between items-start">

        <div>

          <h2 className="text-xl text-gray-800 font-medium">
            {internship.title}
          </h2>

          <div className="flex items-center gap-3 mt-2">

            <p className="text-gray-500 text-[15px] font-medium ">
              {internship.company_name}
            </p>

            <span className=" text-[12px] border border-blue-400 text-blue-500 px-3 py-[2px] rounded-full font-medium ">
              Actively hiring
            </span>
          </div>
        </div>

        <div className=" w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center">
          <FaBuilding
            className="text-blue-200"
            size={24}
          />
        </div>

      </div>

      {/* Details */}

      <div className="flex flex-wrap gap-6 mt-4 text-gray-600 text-[15px]">

        <div className="flex items-center gap-2">
          <FaMapMarkerAlt size={13} />

          <span>
            {internship.work_from_home
              ? "Work from home"
              : internship.location_names?.join(", ")}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <FaMoneyBillWave size={13} />

          <span>
            {internship.stipend?.salary}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <FaCalendarAlt size={13} />

          <span>
            {internship.duration}
          </span>
        </div>

      </div>

      {/* Start Date */}

      {internship.start_date && (
        <div className="mt-4 text-sm text-gray-600">
          {internship.start_date}
        </div>
      )}

      {/* Tags */}

      <div className="flex flex-wrap gap-2 mt-5">

        {internship.labels_app_in_card?.map(
          (label) => (
            <span key={label}
     className=" bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full ">
              {label}
            </span>
          )
        )}

        {internship.is_international_job && (
          <span className=" bg-purple-50 text-purple-700 text-xs px-3 py-1 rounded-ful "
          >
            International
          </span>
        )}
      </div>

      {/* Footer */}

      <div className="flex justify-between items-center mt-3 pt-2">

  <div className="flex flex-wrap items-center gap-2">

    {/* Posted */}

    {internship.posted_by_label && (
      <span
        className=" bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full flex items-center gap-1">
        <HiOutlineClock size={14} />
        {internship.posted_by_label}
      </span>
    )}

    {/* Early Applicant */}

    <span
      className=" bg-[#FFF4E5] text-[#8A5A00] text-xs px-3 py-1 rounded-full flex items-center gap-1">
      <HiLightningBolt size={14} />
      Be an early applicant
    </span>


    {internship.ppo_label_value && (
          <span className=" bg-orange-50 text-orange-700 text-xs px-3 py-1 rounded-ful ">
              {internship.ppo_label_value}
          </span>
        )}

  </div>

  {/* Days Left */}

  {internship.expiring_in && (
    <span
      className=" text-orange-500 font-medium text-sm whitespace-nowrap">
      {internship.expiring_in}
    </span>
  )}

</div>

    </div>
  );
};

export default InternshipCard;