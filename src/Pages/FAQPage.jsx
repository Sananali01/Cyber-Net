import { useState } from 'react';
import { HelpCircle } from 'lucide-react';
import { faqs } from '../constants'; // Import faqs array from constants

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen py-12 text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <HelpCircle className="inline-block h-12 w-12 text-red-600 mb-4 animate-bounce" />
          <h2 className="text-3xl font-extrabold">Frequently Asked Questions</h2>
          <p className="mt-2 text-lg">
            Here are some common questions about our services. If you have other questions, please{' '}
            <a href="/contact" className="text-red-600 hover:underline">
              contact us
            </a>
            .
          </p>
        </div>
        <div className="mt-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-gray-800 rounded-lg mb-4 overflow-hidden transition-all duration-500 ${
                activeIndex === index ? 'max-h-full' : 'max-h-24'
              }`}
            >
              <div
                className={`p-6 cursor-pointer ${
                  activeIndex === index ? 'bg-gray-700' : 'hover:bg-gray-700'
                }`}
                onClick={() => toggleAccordion(index)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium text-grey-100">{faq.question}</h3>
                  <svg
                    className={`h-6 w-6 transform ${
                      activeIndex === index ? 'rotate-180 text-yellow-400' : 'rotate-0 text-gray-400'
                    } transition-transform duration-300`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={activeIndex === index ? 'M19 9l-7 7-7-7' : 'M5 15l7-7 7 7'}
                    />
                  </svg>
                </div>
              </div>
              {activeIndex === index && (
                <div className="p-6 border-t border-gray-700 animate-fadeIn">
                  <p className="text-base text-gray-300">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
