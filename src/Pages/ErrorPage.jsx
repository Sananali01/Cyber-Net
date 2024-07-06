import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-white">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-4">
        Oops! Something went wrong.
      </h1>
      <p className="text-lg mb-8">The page you are looking for could not be found.</p>
      <Link
        to="/"
        className="bg-gradient-to-r from-red-500 to-red-700 py-3 px-6 rounded-md text-lg font-semibold transform transition duration-300 hover:scale-105 hover:shadow-lg"
      >
        Go Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
