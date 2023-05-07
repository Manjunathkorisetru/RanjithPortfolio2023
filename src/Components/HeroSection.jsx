import Ranjith from "../assets/Ranjith.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import NavButtons from "./NavButtons";
import ContentSection from "./ContentSection";
import { Link } from "react-scroll";

function HeroSection() {
  const experienceList = [
    "Working on the project Model-based development of digital twins for cyber-physical production systems",
    "Ranjith",
    "Krishnamurthy",
    "Research Associate at Fraunhofer IEM Paderborn",
    "lorum ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  ];

  return (
    <div className="flex flex-col justify-center border-2 border-gray-500 border-opacity-50 rounded-lg h-auto">
      <div className="bg-[#F5F5F5] flex flex-col items-center justify-center h-[600px]">
        <div className="bg-[#464646] flex flex-col items-center justify-center shadow-2xl rounded-2xl w-full lg:max-w-[1200px] md:max-w-[500px] sm:max-w-[500px] mx-auto">
          <div className="w-48 h-48 mt-10 rounded-full overflow-hidden shadow-2xl">
            <img
              src={Ranjith}
              alt="Profile Picture"
              className="object-cover w-full h-full"
            />
          </div>

          <div className="container mx-auto py-14 px-4 sm:px-6 lg:px-8 ">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white">
                <span className="hover:transform hover:perspective hover:rotate-x-12 hover:translate-y-1 transition-transform duration-300">
                  Ranjith Krishnamurthy
                </span>
              </h1>
              <p className="mt-4 text-lg font-bold leading-6 text-white">
                Research Associate at Fraunhofer IEM, Paderborn
              </p>
            </div>
          </div>

          <div className="flex flex-row mt-1 mb-10 gap-4">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#5c5b5b] flex items-center justify-center text-white font-semibold w-12 h-12 px-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300"
            >
              <FontAwesomeIcon icon={faLinkedinIn} size="xl" />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#5c5b5b] flex items-center justify-center text-white font-semibold w-12 h-12 px-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300"
            >
              <FontAwesomeIcon icon={faGithub} size="xl" />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#5c5b5b] flex items-center justify-center text-white font-semibold w-12 h-12 px-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300"
            >
              <FontAwesomeIcon icon={faGithub} size="xl" />
            </a>
          </div>
        </div>
      </div>
      <header className="bg-[#464646] h-[70px] w-full lg:max-w-[1200px] md:max-w-[500px]  sm:max-w-[500px] flex flex-col items-center justify-center rounded-lg mx-auto shadow-2xl">
        <nav className="flex items-center justify-center gap-10 container mx-auto px-4 py-2 shadow-2xl ">
          <Link to="experience" smooth={true} duration={500}>
            <NavButtons buttonText="Experience" />
          </Link>
          <Link to="education" smooth={true} duration={500}>
            <NavButtons buttonText="Education" />
          </Link>
          <NavButtons buttonText="Publications" />
          <NavButtons buttonText="Projects" />
          <NavButtons buttonText="Teaching" />
          <NavButtons buttonText="Tools & Technologies" />
          <NavButtons buttonText="Interests" />
        </nav>
      </header>
      <div
        id="experience"
        className="bg-[#464646] h-auto py-8 w-full lg:max-w-[1200px] md:max-w-[500px]  sm:max-w-[500px] rounded-lg mx-auto shadow-2xl mt-10"
      >
        <h1 className="font-bold text-4xl text-white  text-left mt-10 ml-20">
          Experience
        </h1>
        <ContentSection
          sectionName="Heinz Nixdorf Institute – University of Paderborn"
          sectionSubName="Research Associate and Ph.D. Candidate – September 2020 - Current"
          items={experienceList}
        />
        <ContentSection
          sectionName="Heinz Nixdorf Institute – University of Paderborn"
          sectionSubName="Research Associate and Ph.D. Candidate – September 2020 - Current"
          items={experienceList}
        />
      </div>

      <div className="bg-[#464646] h-auto py-8 w-full lg:max-w-[1200px] md:max-w-[500px]  sm:max-w-[500px] rounded-lg mx-auto shadow-2xl mt-10">
        <h1
          id="education"
          className="font-bold text-4xl text-white  text-left mt-10 ml-20"
        >
          Education
        </h1>
        <ContentSection
          sectionName="Heinz Nixdorf Institute – University of Paderborn"
          sectionSubName="Research Associate and Ph.D. Candidate – September 2020 - Current"
          items={experienceList}
        />
        <ContentSection
          sectionName="Heinz Nixdorf Institute – University of Paderborn"
          sectionSubName="Research Associate and Ph.D. Candidate – September 2020 - Current"
          items={experienceList}
        />
      </div>
    </div>
  );
}

export default HeroSection;
