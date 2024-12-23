import { CheckCircle2, ArrowRight } from "lucide-react"; // Importing icons from Lucide React
import { pricingOptions } from "../constants";
import { Link } from 'react-router-dom';

const Pricing = () => {
  return (
    <div className="py-20 px-4">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center font-extrabold leading-tight mb-10">
        Take a look at{" "}
        <br />
        <span className="bg-gradient-to-r from-red-500 to-yellow-500 text-transparent bg-clip-text">
          Pricing Plan
        </span>
      </h1>

      <div className="flex flex-wrap justify-center">
        {pricingOptions.map((option, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/3 p-2 transition-transform transform hover:scale-105 duration-500"
            style={{ animationDelay: `${index * 0.2}s`, animation: "fadeInUp 0.5s forwards" }}
          >
            <div className="h-full flex flex-col justify-between border border-red-700 rounded-xl">
              <div className="p-10 flex flex-col justify-between flex-grow">
                <div>
                  <p className="text-4xl mb-8">
                    {option.title}
                    {option.title === "Pro" && (
                      <span className="bg-gradient-to-r from-red-500 to-yellow-500 text-transparent bg-clip-text text-xl mb-4 ml-2">
                        (Most Popular)
                      </span>
                    )}
                  </p>
                  <p className="mb-8">
                    <span className="text-3xl mt-6 mr-2">{option.price}</span>
                    <span className="text-neutral-400 tracking-tight">/Month</span>
                  </p>
                  <ul>
                    {option.features.map((feature, index) => (
                      <li key={index} className="mt-8 flex items-center">
                        <CheckCircle2 className="text-red-700" />
                        <span className="ml-2">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  to="/payment"  // Replace with the actual route to your payment page
                  className="inline-flex justify-center items-center text-center h-12 p-5 mt-8 bg-gradient-to-r from-red-500 to-red-700 hover:from-red-700 hover:to-red-900 text-white border border-red-700 rounded-lg transition duration-200 transform hover:scale-110"
                >
                  Buy {option.title} <ArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
