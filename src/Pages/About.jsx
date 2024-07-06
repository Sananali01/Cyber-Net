import { ShieldCheck } from "lucide-react"; // Import an appropriate shield icon
import { teamMembers } from "../constants"; // Import team member data if available
import Testimonials from "../components/Testimonials";

const AboutPage = () => {
  return (
    <div className="text-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center font-extrabold leading-tight mb-10">
          About Our
          <span className="bg-gradient-to-r from-red-500 to-yellow-500 text-transparent bg-clip-text">
            {" "} Cybersecurity Experts
          </span>
        </h1>
        <p className="mt-6 text-lg text-center text-neutral-300">
          As a leading cybersecurity firm, we are dedicated to safeguarding your digital assets with innovative solutions and expert knowledge.
        </p>
        
        {/* Team Members Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-neutral-800 rounded-lg p-6 flex flex-col items-center transform transition-transform duration-500 hover:scale-105"
              style={{ animationDelay: `${index * 0.2}s`, animation: "fadeInUp 0.5s forwards" }}
            >
              <div className="flex items-center justify-center h-32 w-32 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full overflow-hidden">
                <img src={member.image} alt={member.name} className="h-full w-full object-cover" />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-sm text-neutral-300">{member.position}</p>
                <p className="mt-2 text-sm text-neutral-400">{member.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mission and Vision Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-6 tracking-wide">
            Our Mission
            <span className="bg-gradient-to-r from-red-500 to-yellow-500 text-transparent bg-clip-text">
              {" "} & Vision
            </span>
          </h2>
          <div className="mt-8">
            <p className="text-lg text-neutral-300">
              Our mission is to empower organizations with resilient cybersecurity solutions that protect against evolving threats. We envision a future where digital innovation thrives securely.
            </p>
          </div>
        </div>

        {/* Values and Ethics Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-6 tracking-wide">
            Our Values
            <span className="bg-gradient-to-r from-red-500 to-yellow-500 text-transparent bg-clip-text">
              {" "} & Ethics
            </span>
          </h2>
          <div className="mt-8">
            <ul className="text-lg text-left text-neutral-300">
              <li className="mb-4 flex items-center transition-opacity duration-500 hover:opacity-80">
                <ShieldCheck className="inline-block h-6 w-6 mr-2 text-red-500" />
                Protection First: Safeguarding our clients interests is paramount.
              </li>
              <li className="mb-4 flex items-center transition-opacity duration-500 hover:opacity-80">
                <ShieldCheck className="inline-block h-6 w-6 mr-2 text-red-500" />
                Innovation: Constantly advancing to counter emerging threats.
              </li>
              <li className="mb-4 flex items-center transition-opacity duration-500 hover:opacity-80">
                <ShieldCheck className="inline-block h-6 w-6 mr-2 text-red-500" />
                Integrity: Upholding honesty and transparency in all endeavors.
              </li>
              <li className="mb-4 flex items-center transition-opacity duration-500 hover:opacity-80">
                <ShieldCheck className="inline-block h-6 w-6 mr-2 text-red-500" />
                Collaboration: Fostering teamwork for robust cybersecurity solutions.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Testimonials/>
    </div>
  );
};

export default AboutPage;
