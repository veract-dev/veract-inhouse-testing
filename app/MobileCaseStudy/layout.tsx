"use client";
// import { clearData } from '@/services/dataService';
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { ReactElement } from "react";
import TopnavBar from "../components/topnavbar";
import Tabs from "../components/tab";
import { usePathname } from "next/navigation";
import { send } from "process";
import Footer from "../components/footer";
import { useEffect, useRef, useState } from "react";
import mobileCustomerSuccess from "../mobileCustomerSuccess";

interface MobileCustomerSuccessProps {
  id: string;
  title: string;
  activeIcon: string;
  inActiveIcon: string;
  caseTitle: string;
  caseTitleContent: string;
  caseImage: string;
  challenges: string;
  solution: string;
  services: string[];
  platform: string[];
  techstack: string[];
  clientSpeakName: string;
  clientSpeakCmp: string;
  clientSpeakDesc: string;
}

export default function MobileCaseStudy_Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const scrollableDivRef = useRef(null);

  const id = "1";
  let temp;
  const router = useRouter();
  const pathname = usePathname();
  const firstBtnRef = useRef<HTMLButtonElement | null>(null);

  function sendToRoute(path: string): void {
    router.push(path);
  }
  function scrollToCenter(ref: any) {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }
  const [activePage, setActivePage] = useState("");
  console.log(mobileCustomerSuccess);
  const [selectedPage, setSelectedPage] = useState<MobileCustomerSuccessProps[]>([]);
useEffect(()=>{
  // health
  if(pathname){
    if(pathname.includes("edTech")){
      setActivePage("content1");
      setSelectedPage(
        mobileCustomerSuccess.filter((item) => item.id === 'content1') as MobileCustomerSuccessProps[]
      );
    }
    if(pathname.includes("machinevision")){
      setActivePage("content2");
      setSelectedPage(
        mobileCustomerSuccess.filter((item) => item.id === 'content2') as MobileCustomerSuccessProps[]
      );
    }
    if(pathname === "/customer-success/health/"){
      setActivePage("content3")
      setSelectedPage(
        mobileCustomerSuccess.filter((item) => item.id === 'content3') as MobileCustomerSuccessProps[]
      );
    }
    if(pathname === "/customer-success/industrialPlatform/"){
      setActivePage("content4")
      setSelectedPage(
        mobileCustomerSuccess.filter((item) => item.id === 'content4') as MobileCustomerSuccessProps[]
      );
    }
    if(pathname === "/customer-success/eCommerce/" ){
      setActivePage("content7")
      setSelectedPage(
        mobileCustomerSuccess.filter((item) => item.id === 'content7') as MobileCustomerSuccessProps[]
      );
    }
    if(pathname === "/customer-success/audit/" ){
      setActivePage("content9")
      setSelectedPage(
        mobileCustomerSuccess.filter((item) => item.id === 'content9') as MobileCustomerSuccessProps[]
      );
    }
  }
},[])

  const handleClick = (id: string) => {
    const buttonRef = document.getElementById(id);
    
    buttonRef?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
    
    setActivePage(id);
    setSelectedPage(
      mobileCustomerSuccess.filter((item) => item.id === id) as MobileCustomerSuccessProps[]
    );
  };

  console.log(selectedPage);

  return (
    <div className="fontFamily">
      <div className="w-full h-full ">
        <TopnavBar />
        {/* horizontal-scrollable-container n */}
        {/* ref={scrollableDivRef} */}
        <div className="pt-16 pb-2" style={{}}>
          {/* <div className="buttons"> */}
          <div className="mx-auto md:mx-0">
            <div className="flex parentMobileCaseStudy overflow-x-scroll customScroll hover:cursor-pointer   pl-2 pr-1 ">
              <div className="flex  flex-row justify-around "style={{alignItems:"flex-start"}}>
                {mobileCustomerSuccess.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleClick(item.id)}
                    id={item.id}
                    className={`custom_button w-[150] flex flex-col items-center justify-center
                     ${
                       item.id === activePage ? "text-blue" : "text-gray-400"
                     } cursor-pointer`}
                    ref={item.id === activePage ? (el) => {
                      el?.scrollIntoView({
                        behavior: 'smooth',
                        block: 'nearest',
                        inline: 'center'
                      });
                    } : null}
                  >
                    <img
                    style={{width: item.id === "content1" ? '1.8rem': "1.5rem", height: item.id === "content1" ? '1.8rem' : "1.5rem", margin: item.id === "content1" ? "0" : "0.2rem"}}
                      src={`${
                        item.id === activePage
                          ? item.activeIcon
                          : item.inActiveIcon
                      }`}
                      alt=""
                    />
                    <p>{item.title}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>
          {/* <button id="1"
                    onClick={() => sendToRoute('/customer-success/health')}
                    className={`py-2 px-8 rounded-2xl ${
                        pathname === '/customer-success/health' ? 'bg-orange' : 'bg-gray-200'
                    } ${
                        pathname === '/customer-success/health' ? 'text-blue' : 'text-black'
                    } cursor-pointer`}
                    >
                    Wellness  
                    </button>
                    <button id="2"
                    onClick={()=> sendToRoute("/customer-success/machinevision")}
                    className={`py-2 px-8 rounded-2xl ${
                        pathname === '/customer-success/sales' ? 'bg-orange' : 'bg-gray-200'
                    } ${
                        pathname === '/customer-success/sales' ? 'text-white' : 'text-black'
                    } cursor-pointer`}
                    >
                    Sales
                    </button>
                    <button id="3"
                    onClick={() => sendToRoute("/customer-success/machinevision")}
                    className={`py-2 px-8 rounded-2xl ${
                        pathname === '/customer-success/machinevision' ? 'bg-orange' : 'bg-gray-200'
                    } ${
                        pathname === '/customer-success/machinevision' ? 'text-white' : 'text-black'
                    } cursor-pointer`}
                    >
                    Machine Vision
                    </button>
                    <button id="4"
                    onClick={() => sendToRoute("/customer-success/manufacturing")}
                    className={`py-2 px-8 rounded-2xl ${
                        pathname === '/customer-success/manufacturing' ? 'bg-orange' : 'bg-gray-200'
                    } ${
                        pathname === '/customer-success/manufacturing' ? 'text-white' : 'text-black'
                    } cursor-pointer`}
                    >
                    Manufacturing
                    </button>
                    <button id="5"
                    onClick={() => sendToRoute("/customer-success/agritech")}
                    className={`py-2 px-8 rounded-2xl ${
                        pathname === '/customer-success/agritech' ? 'bg-orange' : 'bg-gray-200'
                    } ${
                        pathname === '/customer-success/agritech' ? 'text-white' : 'text-black'
                    } cursor-pointer`}
                    >
                    Agri Tech
                    </button>
                    <button id="6"
                    onClick={() => sendToRoute("/customer-success/fintech")}
                    className={`py-2 px-8 rounded-2xl ${
                        pathname === '/customer-success/fintech' ? 'bg-orange' : 'bg-gray-200'
                    } ${
                        pathname === '/customer-success/fintech' ? 'text-white' : 'text-black'
                    } cursor-pointer`}
                    >
                    Fin Tech
                    </button> */}
        </div>
        {/* </div> */}
      </div>
      <div className="pt-0">
        {selectedPage && selectedPage.length > 0 && (
          <>
            <div id="portfolioDetails" className="fontFamily">
              <div className="caseDetails_mobile">
                <div className="caseHeader_mobile">
                  <div className="caseHeaderTitle_mobile flex flex-wrap">
                   <h1 className='text-center'> {selectedPage[0].caseTitle}</h1>
                  </div>
                  <div className="caseHeaderIcon_mobile pt-5 pb-5">
                    <p className="px-2"> {selectedPage[0].caseTitleContent}</p>
                  </div>
                </div>
          {  selectedPage[0].caseImage &&  <div className="px-5">
                            <div className='flex flex-col gap-[0.25rem] items-center justify-center'>
                                <img src={selectedPage[0].caseImage} className='' />
                            </div>
                        </div>}
                <div className="ChallengeSolutionContainer_mobile">
                  <div className="ChallengeContainer_mobile">
                    <div className="challenges_mobile">Challenge</div>
                    <div className="challengesContent_mobile">
                      {selectedPage[0].challenges}
                    </div>
                  </div>
                  <div className="ChallengeContainer_mobile">
                    <div className="challenges_mobile">Solution</div>
                    <div className="challengesContent_mobile">
                      {selectedPage[0].solution}
                    </div>
                  </div>
                </div>
                <div className="BottomContainer_mobile">
                  <div className="mainContainer">
                    <div className="serviceContainer_mobile">
                      <div className="ServiceImage">
                        <img src="/caseStudies/vehicle.png" className="w-16" />
                      </div>
                      <div className="serviceHeader_mobile pt-2">Services</div>
                      {selectedPage[0].services.map((item, id) => (
                        <div key={id} className="serviceText_mobile pt-2">
                          {item}
                        </div>
                      ))}
                    </div>
                    <div className="platformContainer_mobile">
                      <div className="ServiceImage">
                        <img src="/caseStudies/web.png" className="w-16" />
                      </div>
                      <div className="serviceHeader_mobile pt-2">Platform</div>
                      {selectedPage[0].platform.map((item, id) => (
                        <div key={id} className="PlatformText_mobile pt-2">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="pl-5 pb-5 pr-5">
                  <div className="techstackContainer_mobile">
                    <div className="techImageTitle_mobile pl-20 pr-20">
                      <div className="ServiceImage">
                        <img
                          src="/caseStudies/tech-service.png"
                          className="w-16 pt-1"
                        />
                      </div>
                      <div className="serviceHeader_mobile pt-2">Techstack</div>
                    </div>
                    <div className="techContent_mobile">
                      <div className="flex flex-row justify-around pt-6">
                        <div className="flex flex-col md:gap-6">
                          {selectedPage[0].techstack
                            .slice(0, selectedPage[0].techstack.length / 2)
                            .map((item, id) => (
                              <div key={id} className="techText_mobile pb-2">
                                {item}
                              </div>
                            ))}
                        </div>
                        <div className="flex flex-col md:gap-6">
                          {selectedPage[0].techstack
                            .slice(
                              selectedPage[0].techstack.length / 2,
                              selectedPage[0].techstack.length
                            )
                            .map((item, id) => (
                              <div key={id} className="techText_mobile pb-2">
                                {item}
                              </div>
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {selectedPage[0].clientSpeakName &&
                  selectedPage[0].clientSpeakCmp &&
                  selectedPage[0].clientSpeakDesc && (
                    <div className="pb-5">
                      <div className="testimonialContainer_mobile">
                        <div className="serviceContainer_mobile md:gap-4">
                          <div className="flex pt-2">
                            <div className="clientsspeak_mobile">
                              Clients Speak
                            </div>
                          </div>
                          <div className="flex pt-2 flex-col md:gap-3">
                            <div className="pb-5 pl-5">
                              <i className="quotes"></i>
                            </div>
                            <div className="flex flex-col items-center pb-5">
                              <div className="title_mobile whitespace-nowrap">
                                {selectedPage[0].clientSpeakName}
                              </div>
                              <div className="title_mobile highlight">
                                {selectedPage[0].clientSpeakCmp}
                              </div>
                            </div>
                          </div>
                          <div className="clientscontent_mobile flex-wrap pb-2">
                            {selectedPage[0].clientSpeakDesc}
                          </div>

                          <div className="w-[100%] flex justify-end">
                            <img
                              src="/caseStudies/right_quote.svg"
                              className="m-3 w-60"
                              alt=""
                            />{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
              </div>
            </div>
          </>
        )}
      </div>

      <Footer />
      {/* <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
                    <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                        <ul className="space-y-2 font-medium">
                            <li>
                                <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                        <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                        <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                                    </svg>
                                    <span className="ml-3 ">Dashboard</span>
                                </a>
                            </li>
                            <li>
                                <a onClick={() => { sendToRoute("/admin/home/blogs/list") }} className="flex active:text-indigo-600  items-center p-2 text-gray-900 rounded-lg dark:text-white  hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                        <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                                    </svg>
                                    <span className="flex-1 ml-3 whitespace-nowrap">
                                        Blogs
                                    </span>
                                </a>
                            </li>


                            <li>
                                <a className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3" />
                                    </svg>
                                    <span className="flex-1 ml-3 whitespace-nowrap" onClick={logout}>Logout</span>
                                </a>
                            </li>

                        </ul>
                    </div>
                </aside > */}

      {/* <div className="p-4 sm:ml-64 m-11 ">
                    {children}


                </div> */}
    </div>
  );
}
