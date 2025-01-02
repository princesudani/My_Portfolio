import { useEffect, useState, useRef } from "react";
import {
  FaFacebookF,
  FaGithub,
  FaStar,
  FaUserAlt,
  FaLinkedinIn,
  FaComments,
  FaInstagram,
  FaDownload,
  FaUserFriends,
  FaArrowUp,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { SiGmail } from "react-icons/si";
import img from "./assets/logo.png";
import pdf from "./assets/Prince Sudani CV.pdf";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Cv from "./Cv";

function Home() {
  const [user, setUser] = useState({});
  const [userRepo, setUserRepo] = useState([]);
  const [progressWidth, setProgressWidth] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const reposPerPage = 5;
  const githubUsername = "princesudani";
  const scrollableContainerRef = useRef(null);

  const fetchData = async () => {
    const userResponse = await fetch(
      `https://api.github.com/users/${githubUsername}`
    );
    const userData = await userResponse.json();
    setUser(userData);

    const repoResponse = await fetch(
      `https://api.github.com/users/${githubUsername}/repos`
    );
    const repoData = await repoResponse.json();
    const sortedRepos = repoData
      .filter((repo) => !repo.fork)
      .sort((a, b) => b.stargazers_count - a.stargazers_count);
    setUserRepo(sortedRepos);
  };

  useEffect(() => {
    fetchData();
    AOS.init({
      once: true,
    });
  }, []);

  const handleScroll = (event) => {
    const { scrollTop, scrollHeight, clientHeight } = event.target;
    const percentScrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;
    setProgressWidth(percentScrolled);
    setShowScrollTop(scrollTop > 300); // Show button if scrolled more than 300px
  };

  const scrollToTop = () => {
    if (scrollableContainerRef.current) {
      scrollableContainerRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  const currentRepos = userRepo.slice(indexOfFirstRepo, indexOfLastRepo);

  const totalPages = Math.ceil(userRepo.length / reposPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
        onScroll={handleScroll}
        data-aos="fade-down"
        data-aos-duration="800"
        ref={scrollableContainerRef}
      >
        <div className="py-4 mx-auto max-w-4xl ">
          <nav className="flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="py-6 text-3xl text-[#e2ebf8] font-medium font-['Fonarto']">
              <img src={img} alt="logo" />
            </div>
          </nav>
          <main className="py-10 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row gap-5">
              <div className="flex-none w-40 h-50 mx-auto sm:mx-0">
                <img
                  src={user.avatar_url}
                  className="w-40 h-40 rounded-full border-4 backdrop-blur-md transition duration-300 border-[#182b42]/30"
                  alt="Profile"
                />
                <span className="flex font-semibold items-center justify-center mt-2">
                  <FaUserFriends className="text-[#05BFDB] mr-2" />
                  {user.followers} followers
                </span>
                <Link to="/Cv" className="flex justify-center font-bold">
                  <button className="flex justify-center items-center w-32 gap-x-2 transition duration-300 rounded-full text-base bg-[#0a7ff5] text-[#fff] hover:text-[#0a7ff5] hover:bg-[#fff] m-2 p-2">
                    <ImProfile />
                    Show CV
                  </button>
                </Link>
              </div>

              <div className="flex flex-col  ">
                <div className="mt-2">
                  <h1 className="text-3xl text-[#ffffff] font-medium font-['Fonarto']">
                    Hi, I'm {user.name} 👋
                  </h1>
                </div>
                <p className="text-lg font-medium">
                I am a skilled web developer who enjoys creating visually appealing and functional websites. Using HTML, CSS, and JavaScript, I transform designs into interactive web pages. I am always learning and staying up-to-date with the latest trends in web development.
                </p>
                <div className="flex flex-wrap justify-center py-8 font-bold">
                  <a href={pdf} download>
                    <button className="flex justify-center items-center w-32 gap-x-2 transition duration-300 rounded-full text-base bg-[#be4495] text-[#fff] hover:text-[#be4495] hover:bg-[#fff] m-2 p-2">
                      <FaDownload /> Resume
                    </button>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/prince-sudani-b411842a2/"
                    target="_blank"
                  >
                    <button className="flex justify-center items-center w-32 gap-x-2 transition duration-300 rounded-full text-base bg-[#0072b1] text-[#fff] hover:text-[#0072b1] hover:bg-[#fff] m-2 p-2">
                      <FaLinkedinIn />
                      LinkedIn
                    </button>
                  </a>
                  <a href="mailto:princesudani0610@gmail.com" target="_blank">
                    <button className="flex justify-center items-center w-32 gap-x-2 transition duration-300 rounded-full text-base bg-[#be4444] text-[#fff] hover:text-[#be4444] hover:bg-[#fff] m-2 p-2">
                      <SiGmail /> Gmail
                    </button>
                  </a>
                  <a href="https://github.com/princesudani" target="_blank">
                    <button className="flex justify-center items-center w-32 gap-x-2 transition duration-300 rounded-full text-base bg-[#10151a] text-[#fff] hover:text-[#10151a] hover:bg-[#fff] m-2 p-2">
                      <FaGithub /> GitHub
                    </button>
                  </a>
                  <a
                    href="https://www.facebook.com/prince.sudani.58"
                    target="_blank"
                  >
                    <button className="flex justify-center items-center w-32 gap-x-2 transition duration-300 rounded-full text-base bg-[#0a7ff5] text-[#fff] hover:text-[#0a7ff5] hover:bg-[#fff] m-2 p-2">
                      <FaFacebookF />
                      Facebook
                    </button>
                  </a>
                  <a href="https://wa.me/6354598076" target="_blank">
                    <button className="flex justify-center items-center w-32 gap-x-2 transition duration-300 rounded-full text-base bg-[#1ecc18] text-[#fff] hover:text-[#1ecc18] hover:bg-[#fff] m-2 p-2">
                      <FaWhatsapp />
                      Whatsapp
                    </button>
                  </a>
                  <a
                    href="https://www.instagram.com/princesudani06/"
                    target="_blank"
                  >
                    <button className="flex justify-center items-center w-32 gap-x-2 transition duration-300 rounded-full text-base bg-[#EA4C89] text-[#fff] hover:text-[#EA4C89] hover:bg-[#fff] m-2 p-2">
                      <FaInstagram />
                      Instagram
                    </button>
                  </a>
                  <a href="https://t.me/princesudani06" target="_blank">
                    <button className="flex justify-center items-center w-32 gap-x-2 transition duration-300 rounded-full text-base bg-[#0a7ff5] text-[#fff] hover:text-[#0a7ff5] hover:bg-[#fff] m-2 p-2">
                      <FaTelegramPlane />
                      Telegram
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-2xl text-white font-semibold mt-9">
                Featured Projects 🤗
              </h1>
              <p className="fp-paragraph">
                A collection of some side projects that have shipped recently.
              </p>
              <ul className="py-6 flex flex-col items-center justify-center">
                {currentRepos.map((repo, index) => (
                  <div
                    className="rounded-lg mt-2 max-h-md px-6 py-6 w-full border-2 border-blue-900 backdrop-blur-md transition duration-300 bg-[#182b42]/30 hover:bg-[#182b42]/80"
                    key={repo.id}
                  >
                    <div
                      // href={repo.html_url}
                      className="relative block overflow-hidden rounded-lg p-4 sm:p-4 lg:py-px"
                      // key={repo.id}
                      // target="_blank"
                    >
                      <div className="sm:flex sm:justify-between sm:gap-2">
                        <div>
                          <h3 className="text-lg font-bold text-white sm:text-xl">
                            {index + 1 + (currentPage - 1) * reposPerPage}.{" "}
                            {repo.name.replaceAll("-", " ")}
                          </h3>
                          <p className="mt-1 text-xs font-medium text-gray-400">
                            By {repo.owner.login}
                          </p>
                        </div>
                        <div className="hidden sm:block sm:shrink-0">
                          <img
                            src={repo.owner.avatar_url}
                            className="h-16 w-16 rounded-lg object-cover shadow-sm"
                          />
                        </div>
                      </div>
                      <div className="mt-1">
                        <p className="max-w-[90ch] font-semibold text-sm text-gray-200">
                          {repo.description}
                        </p>
                      </div>
                      <dl className="mt-6 flex gap-4 sm:gap-6">
                        <div className="flex flex-col">
                          <dt className="text-sm font-semibold text-gray-400 flex items-center">
                            <FaStar className="mr-1 text-[#ffffff]" />
                            {repo.stargazers_count} Stars
                          </dt>
                          <dd className="text-sm mt-2 text-gray-400 font-semibold flex justify-center items-center">
                            <FaComments className="mr-1 text-[#ffffff]" />
                            {repo.open_issues_count} Issues
                          </dd>
                        </div>
                        <div className="flex flex-col">
                          <dt className="text-sm font-semibold text-gray-400 flex items-center">
                            <FaUserAlt className="mr-1 text-[#ffffff]" />
                            {repo.forks_count} Forks
                          </dt>
                        </div>
                      </dl>

                      <div className="flex justify-end mt-2 space-x-2">
                        <a
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-2 py-1 text-s font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600"
                        >
                          Show Code
                        </a>
                        {repo.homepage && (
                          <a
                            href={repo.homepage}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-2 py-1 text-s font-semibold text-white bg-green-500 rounded-md hover:bg-green-600"
                          >
                            Live Demo
                          </a>
                        )}
                        {repo.language && (
                          <span className="inline-flex items-center px-2 py-1 text-s font-semibold text-white bg-[#182b42]/20 border border-[#05BFDB] rounded-md">
                            {repo.language}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </ul>
              {/* Pagination Controls */}
              <div className="flex justify-center mt-8 mb-4">
                <button
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-4 py-2 mx-1 bg-blue-600 text-white font-semibold rounded-md transition hover:bg-blue-700 disabled:bg-gray-500"
                >
                  Prev
                </button>
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index + 1}
                    onClick={() => paginate(index + 1)}
                    className={`px-4 py-2 mx-1 font-semibold rounded-md transition ${
                      currentPage === index + 1
                        ? "bg-blue-800 text-white"
                        : "bg-blue-500 text-white hover:bg-blue-600"
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
                <button
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 mx-1 bg-blue-600 text-white font-semibold rounded-md transition hover:bg-blue-700 disabled:bg-gray-500"
                >
                  Next
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
      {/* Scroll to Top Button */}
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
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cv" element={<Cv />} />
      </Routes>
    </Router>
  );
}

export default App;
