import { useEffect, useState } from 'react'

import data from '../utils/data.json';
import '../style/global.css';
import React from 'react';
import '../style/bootstrap/jquery-3.4.1.min.js';
import '../style/bootstrap/bootstrap.js';


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [isClicked, setIsClicked] = useState(false);

  const handleMenuClick = (label) => {
    setActiveMenu(label);
  };

  const handleClickMenu = () => {
    setIsClicked(!isClicked);
  }

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      setIsScrolled(winScroll > 50);
    };

    window.addEventListener('scroll', handleScroll);

  }, []);
  const menuItems = [
    { label: data.header.menus.menu1, urls: data.header.menus.urls.accueil },
    { label: data.header.menus.menu2, urls: data.header.menus.urls.about },
    { label: data.header.menus.menu3, urls: data.header.menus.urls.course },
    { label: data.header.menus.menu4, urls: data.header.menus.urls.contact }
  ];

  const buttonItems = [
    { label: data.header.buttons[1], className: "btn-1", urls: data.header.buttons.urls[1] },
    { label: data.header.buttons[2], className: "btn-2", urls: data.header.buttons.urls[2] },
  ];
// 
  return (
    <div>
      <nav
        className={
          isClicked ?
          "colored-bk navbar navbar-b navbar-trans navbar-expand-md fixed-top"
          :
          isScrolled ? 
          "colored-bk navbar navbar-b navbar-trans navbar-expand-md fixed-top" 
          : 
          "navbar navbar-b navbar-trans navbar-expand-md fixed-top"
        }
        id="mainNav"
      >
        <div className="container">
          <a className="navbar-brand js-scroll" href="">{data.header.logo}</a>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarDefault"
            aria-controls="navbarDefault"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={handleClickMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className="navbar-collapse collapse justify-content-end" id="navbarDefault">
            <ul className="navbar-nav active">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className={`nav-item ${activeMenu === item.label ? "active" : ""}`}
                  onClick={() => handleMenuClick(item.label)}
                >
                  <a className="nav-link js-scroll" href={item.urls}>
                    {item.label}
                  </a>
                </li>
              ))}

              {buttonItems.map((button, index) => (
                <li key={index} className="nav-item btn-box">
                  <a
                    className={`nav-link ${button.className}`}
                    href={button.urls}>
                    {button.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}



export default Header;