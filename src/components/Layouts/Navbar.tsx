import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import m from '../../assets/M.svg';

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const handleLogoClick = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="col-sm-auto bg-opacity-50 sticky-top font-sans lg:w-14 lg:col-sm-auto lg:bg-light lg:sticky-top md:w-14 md:col-sm-auto md:sticky-top">
      <div className="d-flex w-full flex-sm-column flex-row flex-nowrap bg-slate-950 bg-opacity-50 align-items-center sticky-top">
      <a
          className="d-block p-3 text-decoration-none cursor-pointer"
          title=""
          onClick={handleLogoClick}
        >
          <img className="w-20" src={m} alt="" />
        </a>
        <ul className="nav nav-pills nav-flush flex-sm-column flex-row flex-nowrap mb-auto text-center align-items-center gap-5 my-4 -pl-8">
          <li className="nav-item">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-140}
              duration={500}
            >
              <p className=" cursor-pointer text-white lg:rotate-90 lg:text-3xl text-xl md:rotate-90 md:text-3xl">
                About
              </p>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <p className="cursor-pointer text-white lg:rotate-90 lg:text-3xl text-xl mt-3 md:rotate-90 md:text-3xl">
                Projects
              </p>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-200}
              duration={500}
            >
              <p className="cursor-pointer text-white lg:rotate-90 lg:text-3xl text-xl mt-4 md:rotate-90 md:text-3xl">
                Contact
              </p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
