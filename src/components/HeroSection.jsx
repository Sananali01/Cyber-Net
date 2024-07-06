import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center  text-white py-20 px-4">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center font-extrabold leading-tight">
        Advanced Cybersecurity Solutions
        <span className="bg-gradient-to-r from-red-500 to-yellow-500 text-transparent bg-clip-text">
          {" "}
          for Enterprises
        </span>
      </h1>
      <p className="mt-6 text-lg text-center text-neutral-300 max-w-2xl">
        Protect your business from cyber threats with our cutting-edge cybersecurity tools. Stay ahead of attackers and secure your digital assets with our comprehensive protection suite.
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center mt-10 space-y-4 sm:space-y-0 sm:space-x-4">
        <a
          href="/pricing"
          className="bg-gradient-to-r from-red-500 to-red-700 py-3 px-6 rounded-md text-lg font-semibold transform transition duration-300 hover:scale-105 hover:shadow-lg"
        >
          Get Started
        </a>
        <a
          href="/services"
          className="border border-red-700 py-3 px-6 rounded-md text-lg font-semibold transform transition duration-300 hover:scale-105 hover:shadow-lg"
        >
          Learn More
        </a>
      </div>
      <div className="flex flex-col lg:flex-row justify-center mt-16 space-y-6 lg:space-y-0 lg:space-x-6">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-full lg:w-1/2 shadow-lg"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-full lg:w-1/2 shadow-lg"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
