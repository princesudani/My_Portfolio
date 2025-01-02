import React, { useRef, useState, useEffect } from "react";
import {
  FaBootstrap,
  FaCss3Alt,
  FaDownload,
  FaHtml5,
  FaReact,
  FaArrowUp,
  FaGithub,
} from "react-icons/fa";
import pdf from "./assets/Prince Sudani CV.pdf";
import img from "./assets/logo.png";
import {
  IoArrowBackSharp,
  IoLanguage,
  IoLogoJavascript,
} from "react-icons/io5";
import { TbApi, TbBrandRedux } from "react-icons/tb";
import { SiJest, SiMui, SiTailwindcss, SiTestinglibrary, SiTypescript } from "react-icons/si";
import "./index.css";
import { Link } from "react-router-dom";
import { DiResponsive } from "react-icons/di";

const Cv = () => {
  const [progressWidth, setProgressWidth] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const scrollableContainerRef = useRef(null);

  const handleScroll = () => {
    if (scrollableContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } =
        scrollableContainerRef.current;
      const percentScrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;
      setProgressWidth(percentScrolled);
      setShowScrollTop(scrollTop > 300); // Show button if scrolled more than 200px
    }
  };

  const scrollToTop = () => {
    if (scrollableContainerRef.current) {
      scrollableContainerRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const container = scrollableContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => {
        container.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <>
      <div className="progress1">
        <div
          className="progress-value1"
          style={{ width: `${progressWidth}%` }}
        ></div>
      </div>
      <div
        className="App text-white h-screen overflow-auto scrollable-content"
        ref={scrollableContainerRef}
      >
        <div className="py-4 mx-auto max-w-4xl">
          <div className="font-bold">
            <Link
              to="/"
              className="fixed p-3 bg-blue-600 text-white rounded-full shadow-lg transition hover:bg-blue-700"
            >
              <IoArrowBackSharp />{" "}
            </Link>
          </div>
          <nav className="flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="py-6 text-3xl text-[#e2ebf8] font-medium font-['Fonarto']">
              <img src={img} alt="logo" />
            </div>
          </nav>
          <main className="py-1 px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-lg font-medium mt-4">
              Welcome, Here you can download my resume and see my professional
              background. I am a skilled web development professional with a
              passion for creating visually appealing and functional websites.
            </p>
            <a href={pdf} download>
              <button className="flex font-bold justify-center items-center w-40 gap-x-2 transition duration-300 rounded-full text-base bg-[#be4444] text-[#fff] hover:text-[#be4444] hover:bg-[#fff] m-4 p-2 mx-auto">
                <FaDownload /> Get Resume
              </button>
            </a>

            <div className="text-white">
              <div className="mx-auto max-w-4xl">
                <main className="px-4 sm:px-6 lg:px-8">
                  <div className="text-center">
                    <h1 className="text-2xl text-white font-semibold mt-9 title_lines">
                      About Me
                    </h1>
                    <p className="text-lg font-medium mt-2">
                      I am currently pursuing a BCA from Dollyben Desai
                      Institute of Computer and Allied Sciences. I have
                      experience in frontend development using HTML, CSS,
                      JavaScript, and React JS.
                    </p>
                    <h1 className="text-2xl text-white font-semibold mt-9 title_lines">
                      Contact
                    </h1>
                    <ul className="list-none mt-4 text-lg">
                      <li>64, Vraj Villa Society, Umra Velanja, Surat</li>
                      <li>Mobile: +91 6354 598 076</li>
                      <li>Email: princesudani0610@gmail.com</li>
                    </ul>
                    <h1 className="text-2xl text-white font-semibold mt-9 title_lines">
                      Skills
                    </h1>
                    <ul className="flex flex-wrap justify-center gap-2 list-none p-0 mt-5 font-bold">
                      <li className="flex justify-center items-center w-32 gap-x-2 transition duration-300 rounded-full text-base bg-[#be4495] text-[#fff] hover:text-[#be4495] hover:bg-[#fff] m-2 p-2">
                        <FaHtml5 />
                        HTML
                      </li>
                      <li className="flex justify-center items-center w-32 gap-x-2 transition duration-300 rounded-full text-base bg-[#0072b1] text-[#fff] hover:text-[#0072b1] hover:bg-[#fff] m-2 p-2">
                        <FaCss3Alt />
                        CSS
                      </li>
                      <li className="flex justify-center items-center w-32 gap-x-2 transition duration-300 rounded-full text-base bg-[#10151a] text-[#fff] hover:text-[#10151a] hover:bg-[#fff] m-2 p-2">
                        <FaBootstrap />
                        Bootstrap
                      </li>
                      <li className="flex justify-center items-center w-32 gap-x-2 transition duration-300 rounded-full text-base bg-[#be4444] text-[#fff] hover:text-[#be4444] hover:bg-[#fff] m-2 p-2">
                        <IoLogoJavascript />
                        JavaScript
                      </li>
                      <li className="flex justify-center items-center w-32 gap-x-2 transition duration-300 rounded-full text-base bg-[#EA4C89] text-[#fff] hover:text-[#EA4C89] hover:bg-[#fff] m-2 p-2">
                        <FaReact />
                        React JS
                      </li>
                      <li className="flex justify-center items-center w-32 gap-x-2 transition duration-300 rounded-full text-base bg-[#0a7ff5] text-[#fff] hover:text-[#0a7ff5] hover:bg-[#fff] m-2 p-2">
                        <TbBrandRedux />
                        Redux
                      </li>
                      <li className="flex justify-center items-center w-32 gap-x-2 transition duration-300 rounded-full text-base bg-[#1ecc18] text-[#fff] hover:text-[#1ecc18] hover:bg-[#fff] m-2 p-2">
                        <SiJest />
                        Jest
                      </li>
                      <li className="flex justify-center items-center w-32 gap-x-2 transition duration-300 rounded-full text-base bg-[#be4495] text-[#fff] hover:text-[#be4495] hover:bg-[#fff] m-2 p-2">
                        <SiTailwindcss />
                        Tailwind
                      </li>
                      <li className="flex justify-center items-center w-32 gap-x-2 transition duration-300 rounded-full text-base bg-[#10151a] text-[#fff] hover:text-[#10151a] hover:bg-[#fff] m-2 p-2">
                        <SiTypescript />
                        TypeScript
                      </li>
                      <li className="flex justify-center items-center w-32 gap-x-2 transition duration-300 rounded-full text-base bg-[#be4444] text-[#fff] hover:text-[#be4444] hover:bg-[#fff] m-2 p-2">
                        <SiTestinglibrary />
                        RTL
                      </li>
                      <li className="flex justify-center items-center w-32 gap-x-2 transition duration-300 rounded-full text-base bg-[#10151a] text-[#fff] hover:text-[#10151a] hover:bg-[#fff] m-2 p-2">
                        <SiMui />
                        Material UI
                      </li>
                      <li className="flex justify-center items-center w-32 gap-x-2 transition duration-300 rounded-full text-base bg-[#EA4C89] text-[#fff] hover:text-[#EA4C89] hover:bg-[#fff] m-2 p-2">
                        <FaGithub />
                        GitHub
                      </li>
                      <li className="flex justify-center items-center w-32 gap-x-2 transition duration-300 rounded-full text-base bg-[#0a7ff5] text-[#fff] hover:text-[#0a7ff5] hover:bg-[#fff] m-2 p-2">
                        <TbApi />
                        APIs
                      </li>
                      <li className="flex justify-center items-center w-32 gap-x-2 transition duration-300 rounded-full text-base bg-[#1ecc18] text-[#fff] hover:text-[#1ecc18] hover:bg-[#fff] m-2 p-2">
                        <DiResponsive />
                        UI Design
                      </li>
                      <li className="flex justify-center items-center w-32 gap-x-2 transition duration-300 rounded-full text-base bg-[#be4495] text-[#fff] hover:text-[#be4495] hover:bg-[#fff] m-2 p-2">
                        <SiTestinglibrary />
                        Enyzme
                      </li>
                    </ul>
                    <h1 className="text-2xl text-white font-semibold mt-9 title_lines">
                      Experience
                    </h1>
                    <div className="flex flex-wrap justify-around items-center mt-4 text-left">
                      <div>
                        <h2 className="text-xl font-bold">BlueSoft Infotech</h2>
                        <p className="text-lg font-medium">
                          Internship, April 2023 - Present
                        </p>
                      </div>
                      <ul className="list-disc ml-6 mt-2">
                        <li>Frontend API implementation</li>
                        <li>Creative Responsive Design</li>
                        <li>Create Design Using Figma</li>
                      </ul>
                    </div>
                    <h1 className="text-2xl text-white font-semibold mt-9 title_lines">
                      Education
                    </h1>
                    <ul className="list-none text-left ml-5 mt-4">
                      <li className="mb-2">
                        <h2 className="text-xl font-bold">BCA</h2>
                        <p className="text-lg font-medium">
                          Dollyben Desai Institute of Computer and Allied
                          Sciences, VNSGU, 2020 - 2023
                        </p>
                      </li>
                      <li className="mb-2">
                        <h2 className="text-xl font-bold">
                          12<sup>th</sup>
                        </h2>
                        <p className="text-lg font-medium">
                          Harekrushna Vidhyalaya & Science School, March 2019-20
                        </p>
                      </li>
                      <li>
                        <h2 className="text-xl font-bold">
                          10<sup>th</sup>
                        </h2>
                        <p className="text-lg font-medium">
                          Nalanda Vidhyalay-2, March 2017-18
                        </p>
                      </li>
                    </ul>
                    <h1 className="text-2xl text-white font-semibold mt-9 title_lines">
                      Languages
                    </h1>
                    <ul className="flex flex-wrap justify-center gap-2 list-none p-0 font-bold mt-3 pb-10">
                      <li className="flex justify-center items-center w-32 gap-x-2 transition duration-300 rounded-full text-base bg-[#be4495] text-[#fff] hover:text-[#be4495] hover:bg-[#fff] m-2 p-2">
                        <IoLanguage />
                        English
                      </li>
                      <li className="flex justify-center items-center w-32 gap-x-2 transition duration-300 rounded-full text-base bg-[#0072b1] text-[#fff] hover:text-[#0072b1] hover:bg-[#fff] m-2 p-2">
                        <IoLanguage />
                        Hindi
                      </li>
                      <li className="flex justify-center items-center w-32 gap-x-2 transition duration-300 rounded-full text-base bg-[#be4444] text-[#fff] hover:text-[#be4444] hover:bg-[#fff] m-2 p-2">
                        <IoLanguage />
                        Gujarati
                      </li>
                    </ul>
                  </div>
                </main>
              </div>
            </div>
          </main>
        </div>
      </div>
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 p-3 bg-blue-600 text-white rounded-full shadow-lg transition hover:bg-blue-700"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
};

export default Cv;
