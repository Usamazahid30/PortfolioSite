import logo from "../assets/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img
          className="mx-2 w-[80px] lg:w-[150px] md:w-[100px]"
          src={logo}
          alt="Logo"
        />
      </div>
      <div className="m-8 flex items-center  justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/muhammadusama22"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/usamazahid30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <FaSquareXTwitter />
        <a
          href="https://www.instagram.com/musama_2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
