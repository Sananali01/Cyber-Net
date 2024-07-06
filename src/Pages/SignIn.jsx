import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'; // Replace faTwitter with faLinkedin
import { LockIcon, UserPlusIcon } from 'lucide-react'; // Import Lucide icons
import logo from "../assets/0.png";

const SignInPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="max-w-md w-full bg-neutral-800 rounded-lg p-8 space-y-8 shadow-lg">
        <div className="text-center">
          <a href="/">
            <img className="mx-auto h-24 w-auto" src={logo} alt="Logo" />
          </a>
          <h2 className="mt-6 text-3xl font-extrabold text-white">
            <LockIcon className="inline-block h-8 w-8 mr-2" /> Log in To Cyber Net
          </h2>
        </div>
        <form className="mt-8 space-y-6">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm space-y-4">
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
                autoComplete="current-password"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-3 border border-neutral-700 placeholder-gray-500 text-white bg-neutral-900 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm">
              <a
                href="/"
                className="flex items-center font-medium text-grey-500 hover:text-red-700"
              >
                <LockIcon className="mr-1 h-4 w-4" /> Forgot your password?
              </a>
            </div>
            <div className="text-sm flex items-center">
              <a
                href="/register"
                className="flex items-center font-medium text-red-500 hover:text-red-700"
              >
                <UserPlusIcon className="mr-1 h-4 w-4" /> Create an account
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-red-500 to-red-800 hover:from-red-700 hover:to-red-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 mt-4"
            >
              <FontAwesomeIcon icon={faSignInAlt} className="mr-2" /> Sign In
            </button>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/5 lg:w-1/4"></span>

            <span className="text-xs text-center text-neutral-300 uppercase">or Sign in with</span>

            <span className="border-b w-1/5 lg:w-1/4"></span>
          </div>

          <div className="flex flex-col sm:flex-row mt-4">
            <button
              type="button"
              className="flex items-center justify-center w-full sm:w-auto py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 mb-2 sm:mb-0"
            >
              <FontAwesomeIcon icon={faGoogle} className="h-5 w-5 mr-2" /> Google
            </button>
            <button
              type="button"
              className="flex items-center justify-center w-full sm:w-auto py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-800 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 ml-0 sm:ml-2"
            >
              <FontAwesomeIcon icon={faFacebook} className="h-5 w-5 mr-2" /> Facebook
            </button>
            <button
              type="button"
              className="flex items-center justify-center w-full sm:w-auto py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 ml-0 sm:ml-2"
            >
              <FontAwesomeIcon icon={faLinkedin} className="h-5 w-5 mr-2" /> LinkedIn
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default SignInPage;
