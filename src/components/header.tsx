import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-black text-white p-3 flex justify-between items-center flex-wrap">
      <h1 className="text-2xl">Umme Roman Blog&apos;s</h1>
      <nav className="flex gap-10 items-center mt-2 sm:mt-0">
        <FaFacebookSquare className="text-white text-xl"/>
        <FaGithub  className="text-white text-xl"/>
        <AiOutlineMail className="text-white text-xl" />
        <FaLinkedin className="text-white text-xl"/>
      </nav>
    </header>
  )
}

export default Header
