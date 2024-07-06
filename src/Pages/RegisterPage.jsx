import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { UserPlusIcon } from 'lucide-react'; // Import Lucide icons
import logo from "../assets/0.png"; // Example path to your logo

const RegisterPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <div className="max-w-md w-full bg-neutral-800 rounded-lg p-8 space-y-8 shadow-lg">
        <div className="text-center">
          <a href="/">
            <img className="mx-auto h-24 w-auto mb-4" src={logo} alt="Logo" />
          </a>
          <h2 className="mt-2 text-3xl font-extrabold text-white">
            <UserPlusIcon className="inline-block h-8 w-8 mr-2" /> Register for Cyber Net
          </h2>
        </div>
        <form className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-3 border border-neutral-700 placeholder-gray-500 text-white bg-neutral-900 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                placeholder="Username"
              />
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-3 border border-neutral-700 placeholder-gray-500 text-white bg-neutral-900 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-3 border border-neutral-700 placeholder-gray-500 text-white bg-neutral-900 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm">
              <p className="text-gray-400">Already have an account? <a href="/signin" className="text-red-500 hover:text-red-700">Sign in</a></p>
            </div>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-red-500 to-red-800 hover:from-red-700 hover:to-red-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              <FontAwesomeIcon icon={faUserPlus} className="mr-2" /> Register
            </button>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/5 lg:w-1/4"></span>

            <span className="text-xs text-center text-neutral-300 uppercase">or Register with</span>

            <span className="border-b w-1/5 lg:w-1/4"></span>
          </div>

          <div className="flex flex-col sm:flex-row mt-4">
            <button
              type="button"
              className="flex items-center justify-center w-full py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 mb-2 sm:mb-0 sm:mr-2"
            >
              <FontAwesomeIcon icon={faGoogle} className="h-5 w-5 mr-2" /> Google
            </button>
            <button
              type="button"
              className="flex items-center justify-center w-full py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-800 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 mb-2 sm:mb-0 sm:ml-2"
            >
              <FontAwesomeIcon icon={faFacebook} className="h-5 w-5 mr-2" /> Facebook
            </button>
            <button
              type="button"
              className="flex items-center justify-center w-full py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 mb-2 sm:mb-0 sm:ml-2"
            >
              <FontAwesomeIcon icon={faLinkedin} className="h-5 w-5 mr-2" /> LinkedIn
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
