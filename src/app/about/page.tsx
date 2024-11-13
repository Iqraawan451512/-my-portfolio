import Image from "next/image";
import Footer from "../component/header/footer/footer";
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import Link from "next/link";

function About() {
  return (
    <main className="w-full bg-[#355070]">
      <div className="p-4 sm:p-8">
        {/* About Header */}
        <h1 className="text-[#ffb703] font-serif font-bold hover:underline hover:text-[#a9d6e5] text-[2rem] sm:text-[2.5rem] text-center sm:text-left mb-6">
          About
        </h1>
        <p className="text-[#d3d3d3] ml-4 sm:ml-8 text-base sm:text-lg leading-relaxed">
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
        
        {/* Profile Image and Personal Info */}
        <div className="relative mt-8 sm:mt-12 flex flex-col items-center sm:items-start sm:flex-row sm:justify-start">
          <Image
            src="/imd.jpg"
            alt="its a picture"
            width="370"
            height="370"
            className="rounded-2xl border-cyan-800"
          />
          <div className="ml-4 sm:ml-8 mt-4 sm:mt-0 text-center sm:text-left">
            <h1 className="text-[#d8973c] text-[1.5rem] sm:text-[2rem] font-serif font-bold">
              IQRA AWAN
            </h1>
            <p className="text-[#f9dbbd] text-base sm:text-lg font-serif">
              Having earned a Master's degree in commerce, I am now expanding
              my skills in web development and Artificial Intelligence.
            </p>
            <ul className="text-[#d3d3d3] font-serif pt-5 text-sm sm:text-base">
              <li><span className="font-bold text-[#e3f2fd]">~ Birthday:</span> 24 April</li>
              <li><span className="font-bold text-[#e3f2fd]">~ Degree:</span> Master's in Commerce</li>
              <li><span className="font-bold text-[#e3f2fd]">~ Phone:</span> +923341357769</li>
              <li><Link href="https://mail.google.com/mail " target="_blank"><span className="font-bold text-[#e3f2fd]">~ Email:</span> iqraawan451512@gmail.com </Link></li>
              <li><span className="font-bold text-[#e3f2fd]">~ City:</span> Karachi</li>
            </ul>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-16 sm:mt-20">
          <h2 className="text-3xl text-[#fbb13c] font-serif font-bold text-center md:ml-[32rem]  sm:text-left mb-6">
            Skills
          </h2>

          {/* Skill Bars */}
          {[
            { name: "HTML", percentage: 100 },
            { name: "CSS", percentage: 100 },
            { name: "JavaScript", percentage: 70 },
            { name: "Node.js", percentage: 70 },
            { name: "TypeScript", percentage: 70 },
            { name: "Core Knowledge of Accounts", percentage: 100 },
            { name: "Knowledge of Business", percentage: 100 },
          ].map((skill, index) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between  md:ml-[16rem]">
                <span className="text-white text-[0.7rem] sm:text-xl font-small">{skill.name}</span>
                <span className="text-sm font-semibold text-white md:mr-[21rem]">{skill.percentage}%</span>
              </div>
              <div className=" md:w-[40rem] md:ml-[15rem] h-2 bg-white rounded-full mt-2">
                <div className="h-full bg-[#86bbd8] rounded-full" style={{ width: `${skill.percentage}%` }}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Back to Top Button */}
        <Link href="" className="ml-auto flex justify-center bg-[#eaac8b] rounded-full w-10 h-10 mt-10 sm:mt-20">
          <FaRegArrowAltCircleUp className="font-extrabold text-[2.2rem] text-gray-500 w-10 h-10" />
        </Link>
      </div>

      <Footer />
    </main>
  );
}

export default About;
