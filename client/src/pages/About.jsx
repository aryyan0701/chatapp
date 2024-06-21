import { GoQuestion, GoGraph, GoGitPullRequestClosed } from "react-icons/go";
import { BsGear } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { RiWechat2Line } from "react-icons/ri";
import { FaUserLarge } from "react-icons/fa6";

function About() {
  const navigate = useNavigate();
  return (
    <>
      <header className="bg-zinc-800 py-2">
    <div className="container mx-auto pt-2 px-4 sm:px-12 flex flex-col sm:flex-row justify-between items-center z-50">
      <Link to="/" className="flex items-center space-x-1 mb-4 sm:mb-4 select-none">
        <span className="hidden sm:inline text-white font-bold text-3xl select-none">Chattify</span>
      <RiWechat2Line className='hidden sm:inline text-white text-4xl' />
      </Link>
      <nav className="flex items-center font-Hublot">
        <ul className="flex space-x-2 sm:space-x-1 text-gray-300 font-bold select-none">
          <li>
            <Link to="/dashboard" className="px-2 sm:px-4 py-2 block font-bold text-2xl text-white hover:scale-110 hover:text-gray-300 ease-in-out transition-all duration-300">
              Dash
            </Link>
          </li>
          <li>
            <Link to="/profile" className="px-2 sm:px-4 py-2 block font-bold text-xl text-white hover:scale-110 hover:text-gray-300 ease-in-out transition-all duration-300">
              <FaUserLarge className='sm:inline text-white text-2xl'/>
            </Link>
          </li>
          </ul>
      </nav>
    </div>
  </header>
      <div
        className="relative flex justify-center items-center min-h-screen bg-cover bg-center pt-10"
        style={{
          backgroundImage:
            "url('https://cdn.dribbble.com/users/1003944/screenshots/15741863/media/96a2668dbf0b4da82efca00d60011ca8.gif')",
        }}
      >
        <div className="min-h-screen flex items-center justify-center relative pb-32">
          <div className="relative">
            <div className="relative z-10 pt-5 pb-20 text-black">
              <div className="pt-10 max-w-[42rem] px-5">
                <h1 className="text-left font-Mona font-bold text-black text-4xl leading-20 pb-2  ">
                  <GoQuestion className="inline align-bottom text-4xl text-black" /> About RepoFinder
                </h1>
                <div className="  text-left font-Hublottext-lg leading-20 pt-4 pb-4 ">
                RepoFinder is platform where beginners, intermediate, advanced all type of dev's can find the repos as per there interest, knowledge and their personal tech stack to contribute in open source.
                  <p className="text-left font-Hublot  text-lg leading-20 pt-2">   
                As a open source contributors we are facing many problems in our way like not found the exect repo we want, facing trouble to finding repo in our personal knowledge or tech stack to contribute in it. so i started to build this project where devlopers can find the github repos as per their personal interest, knowledge, and tech stack.
                  </p>
                </div>
                <h1 className="pt-10 pb-2 text-left font-Mona font-bold text-black text-4xl leading-20  ">
                  <BsGear className="inline align-bottom " /> How It Works
                </h1>
                <div className="  text-left font-Hublot text-blacktext-lg  leading-20 pt-4 pb-4 ">
                  <h2 className="text-black font-bold text-xl pb-2">1 Choose your tech stack</h2>
                  Start by entering your known/interested tech stack into the search box. Keep in mind that the results reflect the tech stack github Repo has.
                  <h2 className="text-black font-bold text-xl pb-2 pt-4">2 Fetch and Display</h2>
                  Using the relavent API's, the top Repo's are compiled across GitHub, GitLab and BitBucket. As per the users req api's fetch the data and rendered the github Repo's.
                  <h2 className="text-black font-bold text-xl pb-2 pt-4">3 Repo's Insights</h2>
                  Each Repo has their owner's username, Repo name, starred count, fork count, Repo url, live link, description.
                </div>
                <h1 className="pt-10 pb-2 text-left font-Mona font-bold text-black text-4xl leading-20  ">
                  <GoGraph className="inline align-bottom" /> Benefits for Developers
                </h1>
                <div className="  text-left font-Hublot text-black text-lg  leading-20 pt-4 pb-4 ">
                <h2 className="text-black font-bold text-xl pb-1">• Encouragement of Open Source Culture:</h2>
                  By making it easier to find and contribute to projects, the platform lowers the barriers to entry for new open source contributors. The platform promotes the open source culture, encouraging transparency, collaboration, and community-driven development.
                  <h2 className="text-black font-bold text-xl pt-4 pb-1">• Improved Collaboration:</h2>
                  The platform act as bridge between project maintainers and potential contributors to established their connections.
                  Developers can build a community around their projects, fostering collaboration and collective problem-solving.{" "}
                  <h2 className="text-black font-bold text-xl pt-4 pb-1">• Project Improvement:</h2>
                  By attracting more contributors, open source projects can benefit from diverse perspectives and skill sets, leading to higher quality and more innovative solutions. With more contributors, projects can implement new features more rapidly and efficiently.
                  <h2 className="text-black font-bold text-xl pt-4 pb-1">• Learning Opportunities:</h2>
                  Access to Resources: Developers can learn from the codebases of others, improving their own coding practices and knowledge.{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;