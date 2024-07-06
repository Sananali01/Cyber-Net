import { Menu, X} from "lucide-react"; // Import appropriate icons for Services and FAQ
import { useState } from "react";
import logo from "../assets/0.png";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 bg-neutral-900 b">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <a href="/">
              <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
            </a>
            <span className="text-xl tracking-tight text-white">Cyber Net</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            <li>
              <a href="/" className="text-white hover:text-red-500">
                Home
              </a>
            </li>
            <li>
              <a href="/pricing" className="text-white hover:text-red-500">
                Pricing
              </a>
            </li>
            <li>
              <a href="/about" className="text-white hover:text-red-500">
                About
              </a>
            </li>
            <li>
              <a href="/services" className="text-white hover:text-red-500">
                Services
              </a>
            </li>
            <li>
              <a href="/faq" className="text-white hover:text-red-500">
                FAQ
              </a>
            </li>
            <li>
              <a href="/contact" className="text-white hover:text-red-500">
                Contact
              </a>
            </li>
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href="/signin" className="py-2 px-3 border border-white rounded-md text-white hover:bg-red-700 hover:text-white signin-btn">
              Sign In
            </a>
            <a
              href="/register"
              className="bg-gradient-to-r from-red-500 to-red-800 py-2 px-3 rounded-md text-white hover:from-red-700 hover:to-red-900 create-account-btn"
            >
              Create an account
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar} className="text-white">
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul className="space-y-6">
              <li>
                <a href="/" className="text-white hover:text-red-500">
                  Home
                </a>
              </li>
              <li>
                <a href="/pricing" className="text-white hover:text-red-500">
                  Pricing
                </a>
              </li>
              <li>
                <a href="/about" className="text-white hover:text-red-500">
                  About
                </a>
              </li>
              <li>
                <a href="/services" className="text-white hover:text-red-500">
                  Services
                </a>
              </li>
              <li>
                <a href="/faq" className="text-white hover:text-red-500">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white hover:text-red-500">
                  Contact
                </a>
              </li>
            </ul>
            <div className="flex space-x-6 mt-8">
              <a href="/signin" className="py-2 px-3 border border-white rounded-md text-white hover:bg-red-700 signin-btn">
                Sign In
              </a>
              <a
                href="/register"
                className="py-2 px-3 rounded-md bg-gradient-to-r from-red-500 to-red-800 text-white hover:from-red-700 hover:to-red-900 create-account-btn"
              >
                Create an account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
