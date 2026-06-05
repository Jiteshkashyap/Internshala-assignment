import {
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-white mt-16">
      <div className="max-w-6xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              Company
            </h3>

            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <a href="#">About us</a>
              </li>

              <li>
                <a href="#">Careers</a>
              </li>

              <li>
                <a href="#">Contact us</a>
              </li>

              <li>
                <a href="#">Terms & Conditions</a>
              </li>

              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* Internships */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              Internships
            </h3>

            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <a href="#">Summer Internships</a>
              </li>

              <li>
                <a href="#">Work From Home</a>
              </li>

              <li>
                <a href="#">Part Time</a>
              </li>

              <li>
                <a href="#">Engineering</a>
              </li>

              <li>
                <a href="#">Marketing</a>
              </li>
            </ul>
          </div>

          {/* Jobs */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              Jobs
            </h3>

            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <a href="#">Fresher Jobs</a>
              </li>

              <li>
                <a href="#">Remote Jobs</a>
              </li>

              <li>
                <a href="#">IT Jobs</a>
              </li>

              <li>
                <a href="#">HR Jobs</a>
              </li>

              <li>
                <a href="#">Finance Jobs</a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              Connect With Us
            </h3>

            <div className="flex gap-4 text-xl">
              <a href="#">
                <FaInstagram />
              </a>

              <a href="#">
                <FaLinkedin />
              </a>

              <a href="#">
                <FaTwitter />
              </a>

              <a href="#">
                <FaYoutube />
              </a>
            </div>

            <p className="text-gray-400 text-sm mt-6 leading-6">
              Find internships and jobs tailored to
              your interests and kickstart your
              career journey.
            </p>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">

          <p className="text-sm text-gray-400">
            © 2026 InternHub. All rights reserved.
          </p>

          <p className="text-sm text-gray-400 mt-3 md:mt-0">
            Made by Jitesh using React & Tailwind CSS
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;