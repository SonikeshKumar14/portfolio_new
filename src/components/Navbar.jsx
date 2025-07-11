import { useScroll } from "@/ScrollContext";
import React, { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import git from "../assets/git.png";
import linkin from "../assets/linkin.png";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setScrollTarget } = useScroll();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sidebarRef = useRef();
  const [showNavbar, setShowNavbar] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const isAtTop = scrollTop === 0;

      setIsScrolled(!isAtTop);

      const isDesktop = window.innerWidth >= 768;

      if (isAtTop || !isDesktop) {
        setShowNavbar(true);
        clearTimeout(scrollTimeoutRef.current);
        return;
      }

      setShowNavbar(true);

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      scrollTimeoutRef.current = setTimeout(() => {
        if (!isMenuOpen) {
          setShowNavbar(false);
        }
      }, 4000);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [isMenuOpen]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const handleScrollOrNavigate = (e, sectionId) => {
    e.preventDefault();

    if (location.pathname === "/") {
      const el = document.getElementById(sectionId);
      el?.scrollIntoView({ behavior: "smooth" });
    } else {
      setScrollTarget(sectionId);
      navigate("/");
    }
    setIsMenuOpen(false); // Close menu after click
  };

  const navLinks = (
    <>
      <li>
        <a
          onClick={(e) => {
            e.preventDefault();
            navigate("/");
            setIsMenuOpen(false);
          }}
          className="dm-sans text-[20px] text-[#666666] font-medium"
          href="/"
        >
          Home
        </a>
      </li>
      <li>
        <a
          onClick={(e) => {
            e.preventDefault();
            navigate("/about");
            setIsMenuOpen(false);
          }}
          className="dm-sans text-[20px] text-[#666666] font-medium"
          href="/about"
        >
          About
        </a>
      </li>
      <li>
        <a
          onClick={(e) => handleScrollOrNavigate(e, "techstack")}
          className="dm-sans text-[20px] text-[#666666] font-medium"
          href="#techstack"
        >
          Tech Stack
        </a>
      </li>
      <li>
        <a
          onClick={(e) => handleScrollOrNavigate(e, "projects")}
          className="dm-sans text-[20px] text-[#666666] font-medium"
          href="#projects"
        >
          Projects
        </a>
      </li>
      <li>
        <a
          onClick={(e) => handleScrollOrNavigate(e, "contact")}
          className="dm-sans text-[20px] text-[#666666] font-medium"
          href="#contact"
        >
          Contact
        </a>
      </li>
      <li>
        <a
          href="https://github.com/SonikeshKumar14"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={git} className="w-[25px] h-[25px]" alt="GitHub" />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/sonikeshkumar-7101b621b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkin} className="w-[28px] h-[28px]" alt="LinkedIn" />
        </a>
      </li>
    </>
  );

  return (
    <nav
      className={`fixed top-0 left-0 w-full transition-opacity duration-500 z-50 px-4 py-4 bg-white ${
        showNavbar ? "opacity-100" : "opacity-0 pointer-events-none"
      } ${isScrolled ? "border-b border-gray-200 shadow-md" : ""}`}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="md:ml-15 flex flex-col items-center">
          <p
            className="md:text-[35px] text-2xl font-medium bg-clip-text text-transparent w-fit leading-none"
            style={{
              background: "linear-gradient(45deg, #00C0FD, #E70FAA)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {"{005}"}
          </p>
          <p
            className="md:text-[18px] text-[14px] font-medium bg-clip-text text-transparent w-fit"
            style={{
              background: "linear-gradient(45deg, #00C0FD, #E70FAA)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            sonikesh
          </p>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-[#666666]"
          >
            {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6 mr-16">
          {navLinks}
        </ul>
      </div>

      {/* Mobile Sidebar */}
      {isMenuOpen && (
        <div
          ref={sidebarRef}
          className="md:hidden fixed top-0 right-0 w-2/3 h-full bg-white shadow-lg z-50 p-6"
        >
          <ul className="flex flex-col space-y-6">{navLinks}</ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
