import Image from "next/image";
import Footer from "../component/header/footer/footer";
import { FaRegArrowAltCircleUp } from "react-icons/fa";

import Link from "next/link";
function About() {
  return (
    <main className="w-full bg-[#355070]">
      <div className="">
        {/*   <div className="career ml-[25rem] mt-16 w-[38rem]">
    <h1 className="ml-[8rem] text-[1.7rem] font-serif font-bold">CAREER OBJECT </h1>
    <p className="text-balance font-serif">To acquire a good position in financial sector
         where I could   utilize my good analytical and quick
          calculation skills for the  profitability of the organization.
         Currentlly enrolled  in the web  developnment and  AI Artifficial intelligance 
    </p>
</div>  */}
        <div className="">
          <h1 className="ml-10 pt-3 text-[#ffb703] font-serif font-bold hover:underline hover:text-[#a9d6e5] text-[2rem]">
            About
          </h1>
          <p className="text-balance text-[#d3d3d3] ml-4">
            "As a multifaceted web developer, I seamlessly merge commerce
            expertise with technical prowess, leveraging HTML, CSS, JavaScript,
            React, and Node.js to craft intuitive, data-driven web applications.
            With a Master's in Commerce, I bring a unique understanding of
            business needs, driving solutions that optimize user experience and
            fuel growth. Proficient in front-end development, back-end
            architecture, I excel at building scalable, responsive interfaces.
            My expertise in React enables me to harness state management, hooks,
            and component-driven design, while Node.js allows me to orchestrate
            efficient server-side logic. I'm poised to deliver impactful web
            solutions that harmonize commerce and technology."
          </p>
        </div>
        <div className="relative">
          <div className="absolute">
            <Image
              src="/imd.jpg"
              alt="its a picture"
              width="370"
              height="100"
              className="  absolute rounded-2xl mt-6 ml-16  border-cyan-800"
            ></Image>
            <h1 className="  text-[#d8973c] mt-[6rem] ml-[35rem]  text-[2rem] font-serif font-bold ">
              {" "}
              IQRA AWAN
            </h1>
            <p className="  text-[#f9dbbd] ml-[30rem] font-serif text-balance">
              Having earned a Master's degree in commerce , i am now expanding
              my skills in web development and Artifficial Intelligence
            </p>
            <ul className=" text-[#d3d3d3] ml-[30rem] font-serif pt-5 ">
              <li>
                {" "}
                <span className="font-bold text-[#e3f2fd]">~ Birthday: </span>24 Aprail
              </li>
              <li>
                {" "}
                <span className="font-bold text-[#e3f2fd]"> ~ Degree: </span>Master's in Commerce
              </li>
              <li>
                {" "}
                <span className="font-bold text-[#e3f2fd]"> ~ phone: </span>+923341347769
              </li>
              <li>
                {" "}
                <span className="font-bold text-[#e3f2fd]"> ~ Email: </span>
                iqraawan451512@gmail.com
              </li>
              <li>
                {" "}
                <span className="font-bold text-[#e3f2fd]"> ~ City: </span>Karachi{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/*skills */}

      <div className="   w-[40rem] mt-[30rem]">
        <div className=" ml-[30rem]  ">
        <h1 className="text-3xl text-[#fbb13c] font-serif font-bold ">Skills</h1>
        </div>
        <div className=" flex">
        <div className="   mt-2 ml-[10rem]">
          {/* html */}
          <div className="flex w-[30rem] mt-5 gap-[24rem] mr-10 mb-2">
            <span className=" text-white text-lg font-medium">Html</span>
            <span className="text-sm  text-white font-semibold ">100%</span>
          </div>
          <div className="w-[30rem] h-2 bg-gray-200 rounded-full">
            {/* Fill */}
            <div className="h-full w-[30rem] bg-[#86bbd8] rounded-full"></div>
          </div>

          {/* css */}
          <div className="flex  gap-[25rem]  mb-2">
            <span className="text-lg font-medium text-white">css</span>
            <span className="text-sm font-semibold text-white">100%</span>
          </div>
          <div className="w-[30rem] h-2 bg-white rounded-full">
            {/* Fill */}
            <div className="h-full w-[30rem] bg-[#86bbd8] rounded-full"></div>
          </div>

          {/* jawascript */}
          <div className="  flex gap-[22rem] mb-2">
            <span className="text-[1rem]  ml-2 font-medium text-white" >jawascript</span>
            <span className="text-sm font-semibold text-white">70%</span>
          </div>
          <div className="w-[30rem]  h-2 bg-white rounded-full">
            {/* Fill */}
            <div className="h-full w-[24rem] bg-[#86bbd8] rounded-full"></div>
          </div>
          {/* Nodejs */}
          <div className=" flex gap-[24rem]  items-center mb-2">
            <span className="text-lg  ml-2 font-medium text-white">JodeJs</span>
            <span className="text-sm font-semibold text-white ">70%</span>
          </div>
          <div className="w-[30rem] h-2  bg-white rounded-full">
            {/* Fill */}
            <div className="h-full w-[24rem] bg-[#86bbd8] rounded-full"></div>
          </div>
          </div>
          <div className=" ">
          {/* typescript */}
          <div className="flex mt-10  gap-[22rem] mb-2">
            <span className="text-[1rem] text-white ml-2 font-medium">Typescript</span>
            <span className="text-sm font-semibold text-white">70%</span>
          </div>
          <div className="w-[30rem] h-2 bg-white rounded-full">
            {/* Fill */}
            <div className="h-full w-[24rem] bg-[#86bbd8] rounded-full"></div>
          </div>
          

          {/* Core knowledge of accounts */}
          <div className=" flex gap-[16rem]  items-center mb-2">
            <span className="text-[0.8rem] text-white ml-1 font-bold">
              Core knowledge of accounts
            </span>
            <span className="text-sm text-white font-semibold">100%</span>
          </div>
          <div className="w-[30rem] h-2 bg-white rounded-full">
            {/* Fill */}
            <div className="h-full w-[30rem] bg-[#86bbd8] rounded-full"></div>
          </div>
          {/* excellennce knowladge of commerce subject */}
          <div className=" flex gap-[19rem] items-center mb-2">
            <span className="text-[0.8rem] text-white font-bold">
              knowladge of Business
            </span>
            <span className="text-sm text-white font-semibold ">100%</span>
          </div>
          <div className="w-[30rem] h-2 mb-10 bg-white rounded-full">
            {/* Fill */}
            <div className="h-full w-[30rem] bg-[#86bbd8]  rounded-full"></div>
          </div>

        </div>

        </div>
        <Link href="" className="ml-[75rem] bg-[#eaac8b] rounded-full w-32 h-20 mt-5" >
        <FaRegArrowAltCircleUp className=" arrow  ml-[70rem]  rounded-full font-extrabold text-[3rem] text-gray-500 w-[8rem] mt-5" />
        </Link>
              </div>
              <Footer/>
    </main>
  );
}
export default About;
