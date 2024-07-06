import { Shield, Lock, Monitor, Globe, Key, Database, ShieldAlert, Cloud, ShieldCheck } from "lucide-react"; // Import appropriate icons for your services
import serviceImage1 from "../assets/Services/1.jpg"; // Import service images
import serviceImage2 from "../assets/Services/2.jpg"; 
import serviceImage3 from "../assets/Services/3.png"; 
import serviceImage4 from "../assets/Services/4.png"; 
import serviceImage5 from "../assets/Services/1.jpg"; 
import serviceImage6 from "../assets/Services/1.jpg"; 
import serviceImage7 from "../assets/Services/1.jpg"; 
import serviceImage8 from "../assets/Services/1.jpg";
import serviceImage9 from "../assets/Services/1.jpg";

const services = [
  {
    title: "Advanced Threat Protection",
    description: "Protect your business from sophisticated cyber threats with our advanced threat detection and response solutions.",
    icon: <Shield className="h-10 w-10 text-red-700" />,
    image: serviceImage1,
  },
  {
    title: "Data Encryption",
    description: "Ensure the safety of your sensitive information with our robust encryption solutions, keeping your data secure.",
    icon: <Lock className="h-10 w-10 text-red-700" />,
    image: serviceImage2,
  },
  {
    title: "Network Monitoring",
    description: "Monitor your network traffic in real-time to detect and mitigate potential threats before they cause damage.",
    icon: <Monitor className="h-10 w-10 text-red-700" />,
    image: serviceImage3,
  },
  {
    title: "Global Cybersecurity",
    description: "Our global cybersecurity solutions offer comprehensive protection across all regions, ensuring your data is safe worldwide.",
    icon: <Globe className="h-10 w-10 text-red-700" />,
    image: serviceImage4,
  },
  {
    title: "Access Management",
    description: "Control and manage who has access to your sensitive information with our advanced access management solutions.",
    icon: <Key className="h-10 w-10 text-red-700" />,
    image: serviceImage5,
  },
  {
    title: "Database Security",
    description: "Secure your databases against unauthorized access and ensure data integrity with our database security solutions.",
    icon: <Database className="h-10 w-10 text-red-700" />,
    image: serviceImage6,
  },
  {
    title: "Incident Response",
    description: "Be prepared for any cyber incident with our comprehensive incident response services, minimizing damage and recovery time.",
    icon: <ShieldAlert className="h-10 w-10 text-red-700" />,
    image: serviceImage7,
  },
  {
    title: "Cloud Security",
    description: "Protect your cloud infrastructure with our cutting-edge cloud security solutions, ensuring your data remains secure.",
    icon: <Cloud className="h-10 w-10 text-red-700" />,
    image: serviceImage8,
  },
  {
    title: "Cyber Intelligence",
    description: "Leverage our cyber intelligence services to stay ahead of potential threats and safeguard your business.",
    icon: <ShieldCheck className="h-10 w-10 text-red-700" />,
    image: serviceImage9,
  },
];

const ServicesPage = () => {
  return (
    <div className="text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center font-extrabold leading-tight">
          Our{" "}
          <span className="bg-gradient-to-r from-red-500 to-yellow-500 text-transparent bg-clip-text">
            Services
          </span>
        </h1>
        <p className="mt-6 text-lg text-center text-neutral-300">
          Discover our range of cybersecurity services designed to protect your business from cyber threats and ensure your digital security.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-neutral-800 rounded-lg p-6 flex flex-col items-center transform transition duration-300 hover:scale-105 hover:shadow-lg"
            >
              <div className="relative w-full h-40 overflow-hidden rounded-t-lg">
                <img src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <div className="flex items-center justify-center h-16 w-16 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full mt-6">
                {service.icon}
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-2xl font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm text-neutral-400">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
