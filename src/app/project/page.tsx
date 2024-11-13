import Link from "next/link";
import Footer from "../component/header/footer/footer";
import { FaRegArrowAltCircleUp } from "react-icons/fa";

function Project() {
  return (
    <main>
      <div className="main-div bg-[#184e77] p-4 md:p-8">
        <div className="max-w-screen-xl mx-auto">
          <h1 className="text-[2rem] font-serif font-extrabold text-[#ffba08] hover:text-[#b56576] hover:underline pt-9 text-center md:text-left">
            Project
          </h1>
          <p className="text-[1rem] font-serif mt-4 text-[#caf0f8] md:text-center lg:text-left">
            Explore my diverse portfolio, featuring projects that showcase my
            web development expertise: utility tools (Calculator, BMI Calculator), 
            interactive games (Guessing Game), productivity apps (To-Do List), 
            dynamic forms, and secure finance simulations (ATM Card Number Generator).
            Built with HTML, CSS, JavaScript, React, and Node.js, these projects 
            demonstrate my passion for innovative problem-solving and user-centric design.
          </p>

          {/* Project Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-8 mx-4 md:mx-10">
            {/* Project 1: Calculator */}
            <div className="pro bg-[#dedbd2] h-fit rounded-[2rem] shadow-lg">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUND68aefoiFjsy-HA5oXWRD9O6Ex6npqSP297QYvq36sMr7opGxWonOoyVANTjPyJT_s&usqp=CAU"
                alt="Calculator"
                className="w-full h-[14rem] p-4 mt-4 rounded-t-[2rem]"
              />
              <Link href="npm i one-simple-calculator" target="_blank">
                <p className="text-[#432534] pb-3 pl-3 text-center">Calculator</p>
              </Link>
            </div>

            {/* Project 2: Number Guessing Game */}
            <div className="pro bg-[#dedbd2] h-fit rounded-[2rem] shadow-lg">
              <img
                src="https://img.freepik.com/free-photo/resumes-desk_144627-43372.jpg?t=st=1731535505~exp=1731539105~hmac=a093b07c6b56b04bb8b0ca43a5c91ed1aceb0a3cf5b76c16b3e85ea5bc52585f&w=360"
                alt="Resume"
                className="w-full h-[14rem] p-4 mt-4 rounded-t-[2rem]"
              />
              <Link href="https://resume-with-html-and-css-orcin.vercel.app/" target="_blank">
                <p className="text-[#432534] pb-3 pl-3 text-center">Resume</p>
              </Link>
            </div>

            {/* Project 3: ATM Card Number Generator */}
            <div className="pro bg-[#dedbd2] h-fit rounded-[2rem] shadow-lg">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUND68aefoiFjsy-HA5oXWRD9O6Ex6npqSP297QYvq36sMr7opGxWonOoyVANTjPyJT_s&usqp=CAU"
                alt="ATM Card Number Generator"
                className="w-full h-[14rem] p-4 mt-4 rounded-t-[2rem]"
              />
              <Link href="">
                <p className="text-[#432534] pb-3 pl-2 text-center">ATM Card Number Generator</p>
              </Link>
            </div>

            {/* Project 4: Tic Tac Toe */}
            <div className="pro bg-[#dedbd2] h-fit rounded-[2rem] shadow-lg">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs82BgpqV1P3QntaW2LzEGnn6zjx3SBxy26w&s"
                alt="Tic Tac Toe"
                className="w-full h-[14rem] p-4 mt-4 rounded-t-[2rem]"
              />
              <Link href="">
                <p className="text-[#432534] pb-3 pl-3 text-center">Tic Tac Toe</p>
              </Link>
            </div>

            {/* Project 5: Dynamic Form */}
            <div className="pro bg-[#dedbd2] h-fit rounded-[2rem] shadow-lg">
              <img
                src="https://cdn.pixabay.com/photo/2017/06/13/12/28/pen-2398693_640.jpg"
                alt="Dynamic Form"
                className="w-full h-[14rem] p-4 mt-4 rounded-t-[2rem]"
              />
              <Link href="https://millstone-2.vercel.app/" target="_blank">
                <p className="text-[#432534] pb-3 pl-3 text-center">Dynamic Form</p>
              </Link>
            </div>

            {/* Project 6: Ecommerce Website */}
            <div className="pro bg-[#dedbd2] h-fit rounded-[2rem] shadow-lg">
              <img
                src="https://plus.unsplash.com/premium_photo-1684785618727-378a3a5e91c5?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZWNvbW1lcmNlfGVufDB8fDB8fHww"
                alt="Ecommerce Website"
                className="w-full h-[14rem] p-4 mt-4 rounded-t-[2rem]"
              />
              <Link href="https://figma-website-haa2.vercel.app/" target="_blank">
                <p className=" md:text-[1rem] text-[0.8rem] sm:text-lg text-[#432534] pb-3 pl-5 text-center">Ecommerce Website</p>
              </Link>
            </div>
          </div>

          {/* GitHub and Vercel Links */}
          <p className="text-[1rem] font-serif mt-8 text-[#caf0f8] text-center">
            Visit my 
            <Link href="https://github.com/Iqraawan451512" target="_blank" className="font-bold text-red-300">GitHub</Link>, 
            <Link href="https://vercel.com/iqra-awans-projects" target="_blank" className="font-bold text-red-300">Vercel</Link>, or 
            <Link href="" className="font-bold text-red-300">npm</Link> profile for more notable work.
          </p>
        </div>

        {/* Scroll Up Button */}
        <Link href="#" className=" bottom-10 right-10 md:ml-[70rem]  bg-[#eaac8b] rounded-full w-16 h-16 flex justify-center items-center shadow-lg">
          <FaRegArrowAltCircleUp className="text-[2rem] items-center text-slate-500" />
        </Link>
        <Footer/>

      </div>
    </main>
  );
}

export default Project;
