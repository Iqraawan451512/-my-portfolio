import Link from "next/link";

function Header() {
    return (
        <main className="w-full">
            <div className="flex bg-[#023047] w-full h-16 items-center justify-between px-4">
                <h1 className="logo font-serif text-[#adb5bd]">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmSkI_QAZH_h_Ur4dbhqJqeTn8BtndL8g4-my8_6_Jw6kKWn_fkHUewmxkPZxHY365llo&usqp=CAU"
                        alt="Logo"
                        className="w-[10rem] rounded-xl"
                    />
                </h1>

                {/* Navigation Links */}
                <ul className="flex gap-10 text-[#dee2ff] font-serif ml-auto">
                    <Link href="/">
                        <li className="hover:text-[#f4d35e] transition duration-300">Home</li>
                    </Link>
                    <Link href="./about">
                        <li className="hover:text-[#f4d35e] transition duration-300">About</li>
                    </Link>
                    <Link href="./contact">
                        <li className="hover:text-[#f4d35e] transition duration-300">Contact</li>
                    </Link>
                    <Link href="./project">
                        <li className="hover:text-[#f4d35e] transition duration-300">Project</li>
                    </Link>
                </ul>
            </div>
        </main>
    );
}

export default Header;
