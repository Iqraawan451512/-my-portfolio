import Link from "next/link";
import Footer from "../component/header/footer/footer";
import { FaRegArrowAltCircleUp } from "react-icons/fa";

function Project() {
  return (
    <main>
      <div className="main-div bg-[#184e77]">
        <div>
          <h1 className="Project text-[2rem] font-serif font-extrabold ml-12 text-[#ffba08]  hover:text-[#b56576] hover:underline   pt-9">
            Project
          </h1>
          <p className="  text-[1rem] font-serif ml-[8rem] mt-4 text-balance text-[#caf0f8]">
            'Explore my diverse portfolio, featuring projects that showcase my
            web development expertise: utility tools (Calculator, BMI
            Calculator), interactive games (Guessing Game), productivity apps
            (To-Do List), dynamic forms, and secure finance simulations (ATM
            Card Number Generator). Built with HTML, CSS, JavaScript, React, and
            Node.js, these projects demonstrate my passion for innovative
            problem-solving and user-centric design.'
          </p>
          {/* project*/}
          <div className=" flex flex-wrap  gap-10 ml-[6rem] w-[60rem] mt-[2rem]">
            <div className=" pro bg-[#dedbd2] h-fit w-[18rem] rounded-[2rem]">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUND68aefoiFjsy-HA5oXWRD9O6Ex6npqSP297QYvq36sMr7opGxWonOoyVANTjPyJT_s&usqp=CAU"
                alt="its a picture"
                className="w-[18rem] h-[14rem] p-4  mt-4 rounded-[2rem]"
              />
              <Link href="npm i one-simple-calculator" target='_blank'>
                {" "}
                <p className="text-[#432534] pb-3 pl-10">Calculater</p>
              </Link>
            </div>

            {/*p-2 */}

            <div className=" pro bg-[#dedbd2]  w-[18rem] h-fit rounded-[2rem]">
              <img
                src="https://www.shutterstock.com/image-illustration/words-know-number-on-ball-260nw-156226862.jpg"
                alt="its a picture"
                className="w-[18rem] h-[14rem] p-4  mt-4 rounded-[2rem]"
              />
              <Link href="">
                {" "}
                <p className="text-[#432534] pb-3 pl-10">Number Gassing Game</p>
              </Link>
            </div>
            {/*p-2 */}

            <div className=" pro bg-[#dedbd2] w-[18rem] h-fit rounded-[2rem]">
              <img
                src="data:image/jpeg;base64,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"
                alt="its a picture"
                className="w-[18rem] h-[14rem] p-4  mt-4 rounded-[2rem]"
              />
              <Link href="">
                {" "}
                <p className="text-[#432534] pb-3 pl-10">Atm</p>
              </Link>
            </div>
            {/*p-2 */}

            <div className=" pro bg-[#dedbd2] h-fit w-[18rem] rounded-[2rem]">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs82BgpqV1P3QntaW2LzEGnn6zjx3SBxy26w&s"
                alt="its a picture"
                className="w-[18rem] h-[14rem] p-4  mt-4 rounded-[2rem]"
              />
              <Link href="">
                {" "}
                <p className="text-[#432534] pb-3 pl-10">tick Take TOE </p>
              </Link>
            </div>
            {/*p-2 */}

            <div className=" pro bg-[#dedbd2] h-fit w-[18rem] rounded-[2rem]">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOLxtGZaz56iKKFWhmOc8ppSyyBkCiW7e4-zIgexRQ9uIwdZFVaAq7n36Ixq8uc40QdDI&usqp=CAU"
                alt="its a picture"
                className="w-[18rem] h-[14rem] p-4  mt-4 rounded-[2rem]"
              />
              <Link href="https://millstone-2.vercel.app/" target="_blank">
                {" "}
                <p className="text-[#432534] pb-3 pl-10">Dynamic form</p>
              </Link>
            </div>
            {/*p-2 */}

            <div className=" pro bg-[#dedbd2]  h-fit w-[18rem] rounded-[2rem]">
              <img
                src="https://plus.unsplash.com/premium_photo-1684785618727-378a3a5e91c5?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZWNvbW1lcmNlfGVufDB8fDB8fHww"
                alt="its a picture"
                className="w-[18rem] h-[14rem] p-4  mt-4 rounded-[2rem]"
              />
              <Link href="">
                {" "}
                <p className="text-[#432534] pb-3 pl-10">Ecommerce website</p>
              </Link>
            </div>
            <p className="  text-[1rem] font-serif ml-[8rem] mt-4 text-balance text-[#caf0f8]" >
            Visit my <Link href="https://github.com/Iqraawan451512" target="_blank" className="font-bold text-red-300">GitHub</Link>
            ,<Link href="https://vercel.com/iqra-awans-projects"target="_blank" className="font-bold text-red-300">Versal</Link>, or <Link href="" className="font-bold text-red-300">npm</Link> profile for
            more notable view of my work.
            </p>
          </div>

          <Link href="" className="ml-[75rem] bg-[#eaac8b] rounded-full w-32 h-20 mt-5" >
        <FaRegArrowAltCircleUp className=" arrow  ml-[70rem]  rounded-full font-extrabold text-[3rem] text-slate-500 w-[8rem] mt-5" />
        </Link>
        </div>
        
        <Footer />
      </div>
    </main>
  );
}
export default Project;
