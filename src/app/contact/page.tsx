import Link from "next/link";
import Footer from "../component/header/footer/footer";
import Button from "../component/header/button/button";

function Contact() {
  return (
    <main>
      <div className=" bg-[#ade8f4]">
        <div className="">
          <h1 className=" pt-10 font-extrabold font-serif text-[2rem] pl-[13rem] hover:underline hover:text-[#db7c26] text-[#03045e]">
            Contact
          </h1>
          <p className="text-balance w-[60rem] ml-[13rem] pt-[1rem] text-[1rem] hover:text-[#183a37] text-[#457b9d]  font-serif font-semibold">
            I'M excited to collaborate with you! wheather you have a project in
            mind , want to discuss web development solutions,any accounting and
            managnment problems or just want to say Hello, you May , I'M here to
            listen.
          </p>
        </div>
        {/*div one */}
        <div className="flex ">
          <div className=" border-solid border-black w-[30rem]  h-[full] ">
            <ul className=" one text-[#22333b] ml-[13rem] pt-[4rem] font-serif ">
              <li className="pb-2">
                <span className="font-bold text-[#00296b] cursor-pointer">
                  ~ Phone:{" "}
                </span>{" "}
                <span className="col">+9203341437768</span>
              </li>
              <li className="pb-2">
                <span className="font-bold text-[#00296b]"> ~ Email: </span>
                <Link
                  href="https://mail.google.com/mail"
                  target="_blank"
                  className="col"
                >
                  {" "}
                  <br /> Iqraawan4512@gmail.com
                </Link>
              </li>
              <li className="pb-2">
                <span className="font-bold text-[#00296b]"> ~ GitHub: </span>{" "}
                <Link
                  href="https://github.com/Iqraawan451512"
                  target="_blank"
                  className="col"
                >
                  {" "}
                  Iqraawan451512@gmail.com
                </Link>
              </li>
              <li className="pb-2">
                <span className="font-bold text-[#00296b]"> ~ LinkedIn:</span>
                <br />
                <Link
                  href="https://mail.google.com/mail/u/0/#inbox"
                  className="col"
                >
                  {" "}
                  iqraawan451512@gmail.com
                </Link>
              </li>
              <li className="pb-2">
                <span className="font-bold text-[#00296b] mb-4">
                  {" "}
                  ~ Location:{" "}
                </span>{" "}
                Karachi
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462118.02491053584!2d67.15546194999999!3d25.193202399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Karachi%20City%2C%20Sindh!5e0!3m2!1sen!2s!4v1729687023809!5m2!1sen!2s"
                  width="270"
                  height="250"
                  style={{ border: 0 }}
                  className="mt-5 rounded-md border-solid shadow-orange-300 cursor-pointer"
                ></iframe>
              </li>
            </ul>
          </div>

          {/*   div tow */}
          <div className="  two  ml-[14rem] mt-[5rem]">
            <div className="">
              <p className="mt-14 font-serif pl-3 pb-2">your name</p>
              <input
                type="text"
                placeholder=" "
                className="w-[18rem] h-[2rem] rounded-lg required border-none pl-5 "
              />
              <p className="mt-2 font-serif pl-3 pb-2">subject</p>
              <input
                type="text"
                placeholder=" "
                className="w-[18rem] h-[2rem] rounded-lg required pl-5"
              />
              <p className="mt-2 font-serif pl-3 pb-2">Message</p>
              <input
                type="text"
                placeholder=""
                className="w-[18rem] h-[14rem] rounded-lg required pl-5 pb-[10rem]"
              />
              <br />
              {/**   <input type="button" value="Send message" className="button" />*/}

              <Button text="Send message" />
            </div>
          </div>
          
          
        </div>

        <Footer />
      </div>
    </main>
  );
}
export default Contact;
