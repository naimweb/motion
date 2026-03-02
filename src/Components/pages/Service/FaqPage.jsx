import React, { useState } from "react";

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "The timeline depends on the complexity of the project. Simple websites can take 2-4 weeks, while larger projects may take 2-3 months.",
  },
  {
    question: "Do you provide post-launch support?",
    answer:
      "Yes! We offer maintenance and support packages to ensure your website or app runs smoothly after launch.",
  },
  {
    question: "Can you redesign our existing website?",
    answer:
      "Absolutely. We can revamp your current website to be more modern, responsive, and user-friendly.",
  },
  {
    question: "Do you offer SEO services?",
    answer:
      "Yes, we provide SEO optimization services to improve your website ranking and visibility on search engines.",
  },
];

const FAQItem = ({ faq, index, openIndex, setOpenIndex }) => {
  const isOpen = index === openIndex;

  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
        onClick={() => setOpenIndex(isOpen ? null : index)}
      >
        <span className="text-lg font-medium">{faq.question}</span>
        <span className={`transform transition-transform duration-300 ${isOpen ? "rotate-45" : "rotate-0"} text-2xl`}>+</span>
      </button>
      {isOpen && (
        <p className="text-gray-600 pb-4">{faq.answer}</p>
      )}
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="bg-white shadow-lg rounded-xl divide-y divide-gray-200">
        {faqs.map((faq, idx) => (
          <FAQItem
            key={idx}
            faq={faq}
            index={idx}
            openIndex={openIndex}
            setOpenIndex={setOpenIndex}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQSection;