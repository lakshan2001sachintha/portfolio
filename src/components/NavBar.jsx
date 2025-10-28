import React from 'react';
import MenuLink from './MenuLink';
import 'devicon/devicon.min.css';

function NavBar() {
  return (
    <nav className="hidden sm:flex sm:flex-row sm:justify-center sm:items-center sm:gap-24 sm:pt-14 sm:pb-16 font-bold">
      <MenuLink linkname="Home" url="#home" />
      <MenuLink linkname="About" url="#about" />
      <MenuLink linkname="Skills" url="#skills" />
      <MenuLink linkname="Projects" url="#projects" />
      <MenuLink linkname="Certifications" url="#certifications" />
    </nav>
  );
}

export default NavBar;
