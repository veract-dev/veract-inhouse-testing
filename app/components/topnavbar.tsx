"use client";
import "../styles/styles.css";
import "../styles/mediaQuery.css";
import React from "react";
import { useEffect, useState } from "react";
import { Transform } from "stream";
import Link from "next/link";
import { useRouter } from "next/navigation";
// import { useRouter } from 'next/router';

import { usePathname } from "next/navigation";
import Contacts from "./contacts";

export default function TopnavBar() {
  const router = useRouter();
  const pathnames = usePathname();

  const scrollToElement = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    console.log(section);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToSection = (sectionId: string) => {
    if (pathnames !== "/") {
      router.push(`/?sectionId=${sectionId}`);
      // router.push({
      //   pathname:"/",
      //   query:{
      //     "section":"Text"
      //   }
      // })
      const section = document.getElementById(sectionId);
      console.log(section);
      scrollToElement(sectionId);
    } else {
      scrollToElement(sectionId);
    }
  };
  // const [isScrolling, setIsScrolling] = useState(false);
  // useEffect(() => {
  //     const handleScroll = () => {
  //         setIsScrolling(true);
  //         setTimeout(() => setIsScrolling(false), 1000);
  //     };

  //     window.addEventListener('scroll', handleScroll);

  //     return () => {
  //       window.removeEventListener('scroll', handleScroll);
  //     };
  //   }, []);
  const handleReload = () => {
    window.location.reload();
  };
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsopen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleToggle = (e: { stopPropagation: () => void }) => {
    if (typeof window !== "undefined") {
      if (window.innerWidth <= 768) {
        e.stopPropagation();
        setIsopen(!isOpen);
      }
    }
  };
  const handleNavList = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth <= 768) {
        setTimeout(() => {
          setIsLoaded(true);
        }, 500);
      } else {
        setIsLoaded(true);
      }
    }
  };

  useEffect(() => {
    handleNavList();
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const triggerPoint = window.innerHeight * 0.05; // Adjust this value as needed
      setIsVisible(scrollTop > triggerPoint);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const pathname = usePathname();

  const [activeSection, setActiveSection] = useState(
    pathname === "/"
      ? "Home"
      : pathname === "/updatedCaseStudy/"
      ? "CustomerSuccess"
      : ""
  );

  console.log("activeSection", activeSection);
  console.log("pathname", pathname);
  return (
    <div className={`navbar ${isOpen ? " padding" : "padding"}`}>
      {/* <div className="p-4 border-2  rounded-lg border-primary   bg-primary " > */}
      <div className="flex flex-row justify-between flex-nowrap items-center ">
        <Link href="/">
          {/* <button> */}
          <div
            className={`transitionEffect ${
              isVisible ? "afterScroll" : "beforeScroll"
            }`}
          >
            <span className="font-semibold">ver</span>
            <span className="textColorLogo">act</span>
          </div>
          {/* <div className={`transitionEffect ${isVisible ? 'navbar_afterScroll ' : 'navbar_beforeScroll' }`}></div> */}
          {/* </button> */}
        </Link>
        {/* <div><img src="/logo.png"></img></div> */}

        <div className="mobileAppointment pl-20">
          {/* <div className=" flex items-center justify-center whitespace-nowrap fontFamily"><a href="">Fix an appointment</a></div>  */}
          <div
            className="fix-appointment1 flex navbarCursor  whitespace-nowrap fontFamily"
            onClick={() => scrollToSection("ContactUS")}
          >
            <a>Talk to us</a>
          </div>
        </div>
        {/* <div className={`menu-links ${isOpen ? "open":" "}`}>
                  <div className="flex flex-end fontFamilyNav md:gap-10">
                    <a href="#section1" className="home">Home</a>
                    <a href="#section2" className="founder">Founder's desk</a>
                    <a href="#section3" className="services">Services</a>    
                    <a href="#section4" className="caseMain">Portfolio</a>
                    <a href="#section5" className="testMain">Testimonials</a>    
                  </div>
                </div> */}

        <nav className="pt-4 pb-4">
          {isLoaded && (
            <ul>
              <div className={`nav-list ${isOpen ? "open" : "MediaHidden"}`}>
                <div className="flex nav-list fontFamilyNav  navFonts md:gap-10">
                  <div className="w-full">
                    <li
                      className={`nav-item ${
                        isOpen ? "visible" : "MediaHidden"
                      } ${activeSection === "Home" ? "active" : ""}`}
                    >
                      <div
                        className={`nav-align ${
                          isOpen ? "visible" : "MediaHidden"
                        }`}
                      >
                        <div
                          className="flex items-center justify-center navbarCursor whitespace-nowrap menu-item"
                          onClick={(e) => {
                            handleToggle(e);
                            scrollToSection("Home");
                            setActiveSection("Home");
                          }}
                        >
                          <a href="/" className="home" onClick={handleToggle}>
                            Home
                          </a>
                        </div>
                        <div>
                          <hr className="seperator"></hr>
                        </div>
                      </div>
                    </li>
                  </div>
                  <div className="w-full">
                    <li
                      className={`nav-item ${
                        isOpen ? "visible" : "MediaHidden"
                      } ${activeSection === "Founder" ? "active" : ""}`}
                    >
                      <div
                        className={`nav-align ${
                          isOpen ? "visible" : "MediaHidden"
                        }`}
                      >
                        <div
                          className="flex items-center founder justify-center navbarCursor whitespace-nowrap menu-item"
                          onClick={(e) => {
                            handleToggle(e);
                            setActiveSection("Founder");
                          }}
                        >
                          <a
                            onClick={() => {
                              scrollToSection("Founder's");
                            }}
                          >
                            Founder's Desk
                          </a>
                        </div>
                        <div>
                          <hr className="seperator"></hr>
                        </div>
                      </div>
                    </li>
                  </div>
                  <div className="w-full">
                    <li
                      className={`nav-item ${
                        isOpen ? "visible" : "MediaHidden"
                      } ${activeSection === "Services" ? "active" : ""}`}
                    >
                      <div
                        className={`nav-align ${
                          isOpen ? "visible" : "MediaHidden"
                        }`}
                      >
                        <div
                          className="flex items-center justify-center navbarCursor whitespace-nowrap menu-item"
                          onClick={(e) => {
                            handleToggle(e);
                            setActiveSection("Services");
                          }}
                        >
                          <a
                            className="services "
                            onClick={() => {
                              scrollToSection("Services");
                            }}
                          >
                            Services
                          </a>
                        </div>
                        <div>
                          <hr className="seperator"></hr>
                        </div>
                      </div>
                    </li>
                  </div>
                  <div className="caseMain_mobile">
                    <div className="w-full">
                      <li
                        className={`nav-item ${
                          isOpen ? "visible" : "MediaHidden"
                        } ${
                          activeSection === "CustomerSuccess" ? "active" : ""
                        }`}
                      >
                        <div
                          className={`nav-align ${
                            isOpen ? "visible" : "MediaHidden"
                          }`}
                        >
                          <div
                            className="flex items-center justify-center navbarCursor whitespace-nowrap menu-item"
                            onClick={(e) => {
                              handleToggle(e);
                              setActiveSection("CustomerSuccess");
                            }}
                          >
                            <a
                              className="customer "
                              href="/customer-success/?category=content1"
                            >
                              Customer Success
                            </a>
                          </div>

                          {/* <div  className="caseMain_mobile " onClick={handleToggle}><div className='desktopPortfolioText flex items-center justify-center navbarCursor  whitespace-nowrap menu-item' onClick={() => scrollToSection("CustomerSuccess")} >Customer Success</a></div> */}
                          <div>
                            <hr className="testimonialsHr"></hr>
                          </div>
                        </div>
                      </li>
                    </div>
                  </div>
                  <div className="caseMain_desktop">
                    <li
                      className={`nav-item ${
                        isOpen ? "visible" : "MediaHidden"
                      } ${activeSection === "CustomerSuccess" ? "active" : ""}`}
                    >
                      <div
                        className={`nav-align ${
                          isOpen ? "visible" : "MediaHidden"
                        }`}
                      >
                        <div
                          className="caseMain_desktop "
                          onClick={(e) => {
                            handleToggle(e);
                            setActiveSection("CustomerSuccess");
                          }}
                        >
                          <a
                            className="desktopPortfolioText flex items-center justify-center navbarCursor  whitespace-nowrap menu-item"
                            href="/customer-success/?category=content1"
                          >
                            Customer Success
                          </a>
                        </div>
                        <div>
                          <hr className="seperator"></hr>
                        </div>
                      </div>
                    </li>
                  </div>
                  <div className="w-full">
                    <li
                      className={`nav-item ${
                        isOpen ? "visible" : "MediaHidden"
                      } ${activeSection === "Testimonials" ? "active" : ""}`}
                    >
                      <div
                        className={`nav-align ${
                          isOpen ? "visible" : "MediaHidden"
                        }`}
                      >
                        <div
                          className="flex items-center justify-center navbarCursor whitespace-nowrap menu-item"
                          onClick={(e) => {
                            handleToggle(e);
                            setActiveSection("Testimonials");
                          }}
                        >
                          <a
                            className="customer "
                            onClick={() => {
                              scrollToSection("Testimonials");
                            }}
                          >
                            Clients Speak
                          </a>
                        </div>

                        {/* <div className='flex items-center founder justify-center navbarCursor whitespace-nowrap menu-item'onClick={handleToggle}><div  onClick={() => scrollToSection("Testimonials")}>Clients Speak</div></div> */}
                        <div>
                          <hr className="seperator"></hr>
                        </div>
                      </div>
                    </li>
                  </div>
                  <div className="w-full">
                    <li
                      className={`nav-item ${
                        isOpen ? "visible" : "MediaHidden"
                      } ${activeSection === "ContactUS" ? "active" : ""}`}
                    >
                      <div
                        className={`nav-align ${
                          isOpen ? "visible" : "MediaHidden"
                        }`}
                      >
                        <div
                          className="caseMain caseMain_mobile pl-3"
                          onClick={(e) => {
                            handleToggle(e);
                            setActiveSection("ContactUS");
                          }}
                        >
                          <div className="desktopPortfolioText flex items-center justify-center navbarCursor  whitespace-nowrap menu-item">
                            <a onClick={() => scrollToSection("ContactUS")}>
                              Contact Us
                            </a>
                          </div>
                        </div>
                        <div>
                          <hr className="testimonialsHr1"></hr>
                        </div>
                      </div>
                    </li>
                  </div>

                  <div>
                    <li
                      className={`nav-item ${
                        isOpen ? "visible pl-8" : "MediaHidden"
                      }`}
                    >
                      <div className="mobileTalk">
                        <div
                          className="fix-appointment flex navbarCursor whitespace-nowrap fontFamily"
                          onClick={() => scrollToSection("ContactUS")}
                        >
                          <a onClick={handleToggle}>Talk to us</a>
                        </div>
                      </div>
                    </li>
                  </div>
                </div>
              </div>
            </ul>
          )}
        </nav>
        <div className="hamburger-icon " onClick={handleToggle}>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
          <div className={`bar ${isOpen ? "open" : ""}`}></div>
        </div>
      </div>
    </div>
  );
}

{
  /* <nav className="pt-4 pb-4">
          <ul >
            <div className={`nav-list ${isOpen ? "open" : "MediaHidden"}`}>
              <div className="flex nav-list fontFamilyNav  navFonts md:gap-10">
                <div className="">
                <li className={`nav-item ${isOpen ? "visible" : "MediaHidden"}`}>
                  <div className={`nav-align ${isOpen ? "visible" : "MediaHidden"}`}>
                    <div className="flex items-center justify-center navbarCursor whitespace-nowrap menu-item" onClick={() => scrollToSection('Home')}><Link href="/" className="home" onClick={handleToggle}>Home</Link></div>
                    <div><hr className="homeHr"></hr></div>
                  </div>
                </li>
                </div>
                <div className="">
                <li className={`nav-item ${isOpen ? "visible" : "MediaHidden"}`}>
                  <div className={`nav-align ${isOpen ? "visible" : "MediaHidden"}`}>
                     <div className='flex items-center founder justify-center navbarCursor whitespace-nowrap  menu-item'onClick={handleToggle}><div  onClick={() => scrollToSection("Founder's")}>Founder's Desk</div></div>
                    <div> <hr className="founderHr"></hr></div>
                  </div>
                </li>
                </div>
                <div  className="">
                <li className={`nav-item ${isOpen ? "visible" : "MediaHidden"}`}>
                  <div className={`nav-align ${isOpen ? "visible" : "MediaHidden"}`}>
                    <div className="flex items-center justify-center navbarCursor whitespace-nowrap menu-item" onClick={() => scrollToSection("Services")}><a  className="services " onClick={handleToggle}><span onClick={() => scrollToSection("Services")}>Services</span></a></div>
                    <div><hr className="serviceHr"></hr></div>
                  </div>
                </li>
                </div>
                <div className="">
                  <div className="caseMain_Mobile">
                  <li className={`nav-item ${isOpen ? "visible" : "MediaHidden"}`}>
                    <div className={`nav-align ${isOpen ? "visible" : "MediaHidden"}`}>
                      <div  className="caseMain_Mobile " onClick={handleToggle}><div className='desktopPortfolioText flex items-center justify-center navbarCursor  whitespace-nowrap menu-item' ><Link href="/customer-success/machinevision" className="caseMain">Customer Success</Link></div></div>
                      <div><hr className="testimonialsHr"></hr></div>
                    </div>
                  </li>
                  </div>
                </div>
                <div className="">
                  <div className="caseMain_desktop">
                  <li className={`nav-item ${isOpen ? "visible" : "MediaHidden"}`}>
                    <div className={`nav-align ${isOpen ? "visible" : "MediaHidden"}`}>
                      <div  className="caseMain_desktop " onClick={handleToggle}><div className='desktopPortfolioText flex items-center justify-center navbarCursor  whitespace-nowrap' ><Link href="/customer-successPage" className="caseMain">Customer Success</Link></div></div>
                      <div><hr className="testimonialsHr"></hr></div>
                    </div>
                  </li>
                  </div>
                </div>
                <div className="">
                <li className={`nav-item ${isOpen ? "visible" : "MediaHidden"}`}>
                  <div className={`nav-align ${isOpen ? "visible" : "MediaHidden"}`}>
                  <div className='flex items-center founder justify-center navbarCursor whitespace-nowrap  menu-item'onClick={handleToggle}><div  onClick={() => scrollToSection("Testimonials")}>Clients Speak</div></div>
                  <div><hr className="testimonialsHr"></hr></div>
                  </div>
                </li>
                </div>
                <div className="">
                <li className={`nav-item ${isOpen ? "visible" : "MediaHidden"}`}>
                  <div className={`nav-align ${isOpen ? "visible" : "MediaHidden"}`}>
                  <div className='flex items-center founder justify-center navbarCursor whitespace-nowrap  menu-item'onClick={handleToggle}><div  onClick={() => scrollToSection("ContactUS")}>Contact Us</div></div>
                  <div><hr className="testimonialsHr"></hr></div>
                  </div>
                </li>
                </div>
                <div>
                  <li className={`nav-item ${isOpen ? "visible pl-8" : "MediaHidden"}`}>
                  <div className="mobileTalk">
                  <div className="fix-appointment flex navbarCursor whitespace-nowrap fontFamily"  onClick={() => scrollToSection("ContactUS")}><a onClick={handleToggle}>Talk to us</a></div>
                  </div>
                </li>
                </div>
              </div>

            </div>
          </ul>
        </nav> */
}
