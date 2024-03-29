import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
 
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo"/> 
        </div>
        <div className="gpt3__navbar-links_container">
          <p><a href="https://www.biblegateway.com/passage/?search=Revelation+3%3A2-3&version=NIV" target="_blank" rel="noreferrer">"Wake Up & Repent"</a></p>
          <p><a href="#home">Home</a></p>
          <p><a href="#wgpt3">What is GPT3?</a></p>
          <p><a href="#possibility">Open AI</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#blog">Library</a></p>
        </div>
      </div> 
      <div className="gpt3__navbar-sign">
        <a href="https://chat.openai.com/auth/login" target="_blank" rel="noreferrer">
          <button type="button">Sign up</button>
        </a>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p><a href="https://www.biblegateway.com/passage/?search=Revelation+3%3A2-3&version=NIV" target="_blank" rel="noreferrer">"Wake Up & Repent"</a></p>
            <p><a href="#home">Home</a></p>
            <p><a href="#wgpt3">What is GPT3?</a></p>
            <p><a href="#possibility">Open AI</a></p>
            <p><a href="#features">Case Studies</a></p>
            <p><a href="#blog">Library</a></p>
          </div>
        </div>
        )}  
      </div>
    </div> 
  );
};

export default Navbar

