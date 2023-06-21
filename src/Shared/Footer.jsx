import { useContext } from "react";
import { ModeContext } from "../Providers/ModeProvider";

const Footer = () => {
  const { darkMode, handleModeToggle } = useContext(ModeContext)
  return (
    <div className={`${darkMode? 'bg-black': 'bg-blue-300' } text-base-content`}>
      <div >
      <footer className="footer p-10 items-center">
        <div>
          <img src="images/logo.png" className="w-80"></img>

        </div>
        <div>
          <span className={`${darkMode? 'text-white': 'text-black' } font-bold text-xl`}>Services</span>
          <a className={`${darkMode? 'text-white': 'text-black' } link link-hover`}>Explore</a>
          <a className={`${darkMode? 'text-white': 'text-black' } link link-hover`}>Design</a>
          <a className={`${darkMode? 'text-white': 'text-black' } link link-hover`}>Fashion</a>
          <a className={`${darkMode? 'text-white': 'text-black' } link link-hover`}>Advertisement</a>
        </div>
        <div>
          <span className={`${darkMode? 'text-white': 'text-black' } font-bold text-xl`}>Company</span>
          <a className={`${darkMode? 'text-white': 'text-black' } link link-hover`}>About us</a>
          <a className={`${darkMode? 'text-white': 'text-black' } link link-hover`}>Contact</a>
          <a className={`${darkMode? 'text-white': 'text-black' } link link-hover`}>Team</a>
          <a className={`${darkMode? 'text-white': 'text-black' } link link-hover`}>Blog</a>
        </div>
        <div>
          <span className={`${darkMode? 'text-white': 'text-black' } font-bold text-xl`}>Legal</span>
          <a className={`${darkMode? 'text-white': 'text-black' } link link-hover`}>Terms of use</a>
          <a className={`${darkMode? 'text-white': 'text-black' } link link-hover`}>Privacy policy</a>
          <a className={`${darkMode? 'text-white': 'text-black' } link link-hover`}>Cookie policy</a>
          <a className={`${darkMode? 'text-white': 'text-black' } link link-hover`}>FAQs</a>
        </div>

      </footer>

    </div>
    <p className={`${darkMode? 'text-white': 'text-black' } text-center pb-8 mt-10`}>Fashion Fiesta Copyright © 2023 - All right reserved</p>
    </div>
  );
};

export default Footer;