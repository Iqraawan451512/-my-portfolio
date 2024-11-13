import Image from "next/image";
import Link from "next/link";

function Home() {
  return (
    <main className="w-full">
      {/* Portfolio Picture and Content */}
      <div className="main flex flex-col md:flex-row bg-[#023047] relative w-full h-[40rem]">
        <div className="relative flex justify-center items-center md:ml-[15rem] mt-[4rem] md:mt-[2rem] ">
          {/* Image */}
          <Image
            src="/imd.jpg"
            alt="picture"
            width={250}
            height={250} // Adjusted to be square, can change based on need
            className=" dp rounded-full "
          />
        </div>

        {/* Content */}
        <div className="content text-center md:text-center md:ml-[2rem] pt-6 md:text-balance md:mt-[15rem]  text-[#adb5bd]">
          <h1 className="font-serif font-extrabold text-[1.6rem] hover:scale-105 hover:text-[#f4d35e] cursor-pointer">
            Hi! I'm IQRA AWAN
          </h1>
          <p className="font-serif text-[0.9rem] hover:text-[#faf0ca] hover:scale-x-105">
            I am currently enrolled in web design programming  <br /> after completing
            my degree in business.
          </p>
          <Link target="_blank" href="./about" className="mt-5">
            <button className="bg-[#0b2545] hover:bg-[#fdfcdc] shadow-2xl shadow-slate-400 hover:text-[#023047] rounded-2xl h-10 w-32 mt-5">
              More Details
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Home;
