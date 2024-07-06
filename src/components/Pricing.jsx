import { CheckCircle2, DollarSign, ArrowRight } from "lucide-react"; // Importing icons from Lucide React
import { pricingOptions } from "../constants";

const Pricing = () => {
  return (
    <div className="">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide flex items-center justify-center">
        <DollarSign className="text-red-700 mr-4 text-lg" /> Pricing Plans
      </h2>
      <div className="flex flex-wrap justify-center">
        {pricingOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="h-full flex flex-col justify-between  border border-red-700 rounded-xl">
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
                <a
                  href="#"
                  className="inline-flex justify-center items-center text-center h-12 p-5 mt-8 bg-gradient-to-r from-red-500 to-red-700 hover:from-red-700 hover:to-red-900 text-white border border-red-700 rounded-lg transition duration-200"
                >
                  Buy {option.title} <ArrowRight className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
