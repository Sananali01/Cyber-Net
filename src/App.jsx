import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Pricing from "./components/Pricing";
import SignInPage from "./Pages/SignIn";
import RegisterPage from "./Pages/RegisterPage";
import ErrorPage from "./Pages/ErrorPage";
import AboutPage from "./Pages/About";
import FAQPage from "./Pages/FAQPage";
import ServicesPage from "./Pages/Services";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/*"
            element={
              <>
                <Navbar />
                <div className="max-w-7xl mx-auto pt-10 px-6">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/faq" element={<FAQPage />} />
                    <Route path="/services" element={<ServicesPage />} />
                  </Routes>
                </div>
                <Footer />
              </>
            }
          />

          <Route path="/signin" element={<SignInPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
