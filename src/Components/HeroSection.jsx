import Ranjith from "../assets/Ranjith.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import NavButtons from "./NavButtons";
import ContentSection from "./ContentSection";
import { Link } from "react-scroll";
//import { useState } from "react";

function HeroSection() {
  /*   const [highlight, setHighlight] = useState("");
  console.log(highlight); */
  const experienceList = [
    "Working on the project Model-based development of digital twins for cyber-physical production systems",
    "Ranjith",
    "Krishnamurthy",
    "Research Associate at Fraunhofer IEM Paderborn",
    "lorum ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  ];
  /*   const handleHighlight = (to) => {
    setHighlight(to);
  }; */

  return (
    <div className="flex flex-col justify-center rounded-lg h-auto mb-60 ">
      <div className="flex flex-col items-center justify-center h-[600px] mt-20">
        <div className="bg-[#464646] flex flex-col items-center justify-center shadow-2xl rounded-2xl w-full xl:max-w-[1200px] lg:max-w-[1000px] md:max-w-[700px] sm:max-w-[500px] mx-auto">
          <div className="w-48 h-48 mt-10 rounded-full overflow-hidden shadow-2xl">
            <img
              src={Ranjith}
              alt="Profile Picture"
              className="w-full h-full object-cover"
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
              href="https://www.linkedin.com/in/ranjith-krishnamurthy-67a600103/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#5c5b5b] flex items-center justify-center text-white font-semibold w-12 h-12 px-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300"
            >
              <FontAwesomeIcon icon={faLinkedinIn} size="xl" />
            </a>
            <a
              href="https://github.com/ranjithkris"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#5c5b5b] flex items-center justify-center text-white font-semibold w-12 h-12 px-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300"
            >
              <FontAwesomeIcon icon={faGithub} size="xl" />
            </a>

            <a
              href="https://github.com/ranjithkris"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#5c5b5b] flex items-center justify-center text-white font-semibold w-12 h-12 px-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300"
            >
              <FontAwesomeIcon icon={faGithub} size="xl" />
            </a>
          </div>
        </div>
      </div>

      <header className="bg-[#000000] h-[70px] sm:w-screen sm:overflow-x-auto md:w-screen md:overflow-x-auto lg:w-full lg:overflow-x-auto xl:max-w-[1200px] lg:max-w-[1000px] md:max-w-[700px] sm:max-w-[500px] flex items-center justify-center rounded-lg mx-auto shadow-2xl fixed top-0 left-0 right-0 z-50 mt-2 scrollbar scrollbar-thin scrollbar-thumb-gray-600">
        <nav className="flex gap-10 container rounded-lg px-4 py-2 shadow-2xl xl:justify-center">
          <Link
            activeClass="bg-[#5c5b5b] shadow-2xl rounded-lg"
            to="experience"
            smooth={true}
            duration={500}
            spy={true}
          >
            <NavButtons buttonText="Experience" />
          </Link>
          <Link
            to="education"
            activeClass="bg-[#5c5b5b] shadow-2xl rounded-lg"
            spy={true}
            smooth={true}
            duration={500}
          >
            <NavButtons buttonText="Education" />
          </Link>
          <Link
            to="publications"
            activeClass="bg-[#5c5b5b] shadow-2xl rounded-lg"
            spy={true}
            smooth={true}
            duration={500}
          >
            <NavButtons buttonText="Publications" />
          </Link>
          <Link
            to="projects"
            activeClass="bg-[#5c5b5b] shadow-2xl rounded-lg"
            spy={true}
            smooth={true}
            duration={500}
          >
            <NavButtons buttonText="Projects" />
          </Link>
          <Link
            to="teaching"
            activeClass="bg-[#5c5b5b] shadow-2xl rounded-lg"
            spy={true}
            smooth={true}
            duration={500}
          >
            <NavButtons buttonText="Teaching" />
          </Link>
          <NavButtons buttonText="Technologies" />
          <NavButtons buttonText="Interests" />
        </nav>
      </header>

      <div
        id="experience"
        className="bg-[#464646] h-auto py-8 w-full xl:max-w-[1200px] lg:max-w-[1000px] md:max-w-[700px]  sm:max-w-[500px] rounded-lg mx-auto shadow-2xl mt-10"
      >
        <h1
          className="
         font-bold text-4xl text-white  text-left mt-20 ml-20"
        >
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
      <div
        id="education"
        className="bg-[#464646] h-auto py-8 w-full lg:max-w-[1200px] md:max-w-[700px]  sm:max-w-[500px] rounded-lg mx-auto shadow-2xl mt-10"
      >
        <h1 className="font-bold text-4xl text-white  text-left mt-20 ml-20">
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

      <div
        id="publications"
        className="bg-[#464646] h-auto py-8 w-full lg:max-w-[1200px] md:max-w-[700px]  sm:max-w-[500px] rounded-lg mx-auto shadow-2xl mt-10"
      >
        <h1 className="font-bold text-4xl text-white  text-left mt-20 ml-20">
          Publications
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
      <div
        id="projects"
        className="bg-[#464646] h-auto py-8 w-full lg:max-w-[1200px] md:max-w-[700px]  sm:max-w-[500px] rounded-lg mx-auto shadow-2xl mt-10"
      >
        <h1 className="font-bold text-4xl text-white  text-left mt-20 ml-20">
          Projects
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

      <div
        id="teaching"
        className="bg-[#464646] h-auto py-8 w-full lg:max-w-[1200px] md:max-w-[700px]  sm:max-w-[500px] rounded-lg mx-auto shadow-2xl mt-10"
      >
        <h1 className="font-bold text-4xl text-white  text-left mt-20 ml-20">
          Teaching
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
