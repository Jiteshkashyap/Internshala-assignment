import { useState } from "react";
import {
  FaPlus,
  FaMinus,
  FaChevronUp,
  FaChevronDown,
} from "react-icons/fa";

const faqs = [
  {
    question:
      "How do I search for internships in my preferred category/profile?",
    answer:
      "Use the filters on the search page to select your preferred category or profile and find relevant internships.",
  },
  {
    question:
      "How can I apply for an internship on Internshala?",
    answer:
      "Open an internship and click on the Apply Now button.",
  },
  {
    question:
      "Do I need to pay to apply for an internship on Internshala?",
    answer:
      "No, applying for internships is completely free.",
  },
  {
    question:
      "What all internships are available on Internshala?",
    answer:
      "Internships are available across various domains including engineering, marketing, finance, HR, design and more.",
  },
  {
    question:
      "Are there any courses that offer a placement?",
    answer:
      "Some courses include placement assistance and hiring support.",
  },
  {
    question:
      "How do I get certified online?",
    answer:
      "Complete an online certification course and pass the required assessments.",
  },
];

const FAQ = () => {
  const [showFaqs, setShowFaqs] = useState(true);
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">

      <div className="flex justify-center mb-12">

        <button
          onClick={() => setShowFaqs(!showFaqs)}
          className="px-6 py-3 border border-[#00A5EC] rounded text-[#00A5EC] font-semibold flex items-center gap-2 hover:bg-blue-50 transition">
          Frequently asked questions

          {showFaqs ? (
            <FaChevronUp size={12} />
          ) : (
            <FaChevronDown size={12} />
          )}
        </button>

      </div>

      {/* FAQ LIST */}
      <div
        className={`overflow-hidden transition-all duration-500 ${showFaqs ? "max-h-[2000px]" : "max-h-0"}`}>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-200">
            <button
              onClick={() =>
                setOpenIndex( openIndex === index ? null : index)}
              className="w-full py-8 flex justify-between items-center text-left">
            <span
              className={`text-base md:text-[18px] transition-colors duration-300
            ${openIndex === index ? "text-black font-medium" : "text-gray-700"}`}>
              Q. {faq.question}
            </span>

              {openIndex === index ? (
                <FaMinus className="text-[#00A5EC]" />
              ) : (
                <FaPlus className="text-[#00A5EC]" />
              )}
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out
                ${openIndex === index ? "max-h-40 pb-8": "max-h-0"}`}>
              <p className="text-gray-600 text-lg leading-8 pr-12">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;