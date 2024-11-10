import Image from "next/image";
import Link from "next/link";
function Home() {
  return (
    <main className="w-full  ">
      {/* portfolio picture */}

      <div className="main flex bg-[#023047] relative w-[full]  h-[40rem]">
        <div className=" relative ml-[10rem] mt-[10rem]">
          <Image
            src="/imd.jpg"
            alt="picture"
            width="250"
            height="50"
            className="rounded-full   absolute"
          ></Image>
          <div className="content  ml-[17rem] pt-[4rem]   text-[#adb5bd]">
            <h1 className="font-serif font-extrabold text-[1.6rem] hover:scale-105 hover:text-[#f4d35e] cursor-pointer">
              {" "}
              Hi!I'M IQRA AWAN
            </h1>
            <br />
            <p className="font-serif text-[0.9rem] hover:text-[#faf0ca] hover:scale-x-105">
              I am currently enrolled in web designing programming after
              completing <br />
              my degree in business.
            </p>
            <Link
              target="_blank"
              href="./about"
              className="ml-[10rem] mt-[2rem] "
            >
              <button className=" bg-[#0b2545] hover:bg-[#fdfcdc] shadow-2xl shadow-slate-400 hover:text-[#023047] rounded-2xl h-10 w-32 mt-5">
                More Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Home;
