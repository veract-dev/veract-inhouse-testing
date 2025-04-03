"use client";
import Link from "next/link";
import "../styles/styles.css";
import "../styles/mediaQuery.css";
import { useEffect, useRef, useState } from "react";
import { link } from "fs";
import { useRouter } from "next/router";
import { useInView } from "react-intersection-observer";
import { getCategory } from "../globalState";
// import RotatingCircle from './rotatingCases'

export default function Casestudies() {
  const router = useRouter();
  const { category, setCategory } = getCategory();
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const [isVisible, setIsVisible] = useState(false);

  // useEffect(() => {
  //     const handleScroll = () => {
  //         const scrollTop = window.scrollY;
  //         const triggerPoint = window.innerHeight * 2.0; // Adjust this value as needed
  //         setIsVisible(scrollTop > triggerPoint);
  //     };

  //     window.addEventListener('scroll', handleScroll);
  //     return () => {
  //         window.removeEventListener('scroll', handleScroll);
  //     };
  // }, []);

  const { ref: sectionRef, inView: sectionInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  useEffect(() => {
    setIsVisible(sectionInView);
  }, [sectionInView]);

  const button1Ref = useRef<HTMLButtonElement | null>(null);
  const button2Ref = useRef<HTMLButtonElement | null>(null);

  const handleScrollToButton = (buttonId: string) => {
    let buttonRef: React.RefObject<HTMLButtonElement> | null = null;

    if (buttonId === "button1") {
      buttonRef = button1Ref;
    } else if (buttonId === "button2") {
      buttonRef = button2Ref;
    }

    if (buttonRef && buttonRef.current) {
      buttonRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const portfolio = [
    {
      id: "content1",
      img: "/portfolio/Group.svg",
      heading: "EDTECH",
      desc: "AI driven e learning application with state of the art voice to text and large language model capabilities.",
    },
    {
      id: "content3",
      img: "/portfolio/healthCaseStudy.svg",
      heading: "WELLNESS",
      desc: "Empowering individuals through personalized mental health and wellness solutions in a user-friendly app.",
    },
    {
      id: "content2",
      img: "/portfolio/carbon_industry.svg",
      heading: "MACHINE VISION",
      desc: "AI-driven defect detection system, optimizing manufacturing processes for higher efficiency and accuracy.",
    },
    {
      id: "content4",
      img: "/portfolio/socialCaseStudy.svg",
      heading: "INDUSTRIAL PLATFORM",
      desc: "Specialized social platform connecting professionals in the data center industry for collaboration and networking.",
    },
    {
      id: "content7",
      img: "/portfolio/eCommerceCaseStudy.svg",
      heading: "E-COMMERCE",
      desc: "E-commerce platform enabling farmers to sell fresh produce directly to consumers, bridging the gap in the supply chain.",
    },
    {
      id: "content9",
      img: "/portfolio/invoiceCaseStudy.svg",
      heading: "AUDIT",
      desc: "Advanced data extraction tool for precise, efficient audit processes, ensuring accuracy and compliance.",
    },
  ];

  return (
    <div className="pt-12 pb-12 " id="CustomerSuccess">
      <div className="flex flex-col  case-studies portfolioFonts ">
        <div className="flex flex-col case-studies-content   ">
          <div
            ref={sectionRef}
            className={`scroll-animationPortfolio ${
              isVisible ? "visiblesectionName" : ""
            }`}
          >
            <div className=" case-studies-content-top items-center justify-center flex flex-row md:gap-6 ">
              <hr className="separator"></hr>
              <div className="section-title mobilePaddingHeader">
                CUSTOMER{" "}
                <span className="section-title-highlight"> SUCCESS</span>
              </div>
              <hr className="separator"></hr>
            </div>
            {/* <div className='section-desc'>
                            We simply want to make sure your brand is getting the nourishment it needs and that our service is providing the best bang for your buck.
                        </div> */}
          </div>
        </div>
        <div className="desktopPortfolio">
          <div className="items-list flex  flex-wrap pt-1 pb-4   ">
            {/* manufacturingHover */}
            <div className="flex flex-row flex-wrap">
              {portfolio.map((item) => (
                <div
                  key={item.id}
                  className="item flex flex-col contentWidth navbarCursor manufacturingHover md:w-1/3 p-4"
                >
                  <div
                    onClick={() => {
                      {
                        getCategory.setState({ category: item.id });
                        router.push({
                          pathname: "/customer-success",
                          query: { category: item.id },
                        });
                      }
                    }}
                  >
                    <div
                      className={`scroll-animationPortfolio ${
                        isVisible ? "visibleManufacturing" : ""
                      }`}
                    >
                      <div className="flex flex-row justify-between mb-2">
                        <div className="flex flex-row">
                          <div className="w-8 ">
                            <img src={item.img} />
                          </div>
                          <div className="item-title flex textColorLogo pl-4 ">
                            {item.heading}
                          </div>
                        </div>
                        <div className="ml-4">
                          <img
                            src="/images/info.png"
                            className="w-6 h-6 "
                          ></img>
                        </div>
                      </div>
                      <div className="flex flex-row item-desc manufacturingDesc">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                  {/* <div className='manufacturingArrow  '> <img src="portfolio/rightArrow.png" className="w-8 " /></div> */}
                </div>
                // </div>
              ))}
            </div>
            {/* <div className='item flex flex-col contentWidth navbarCursor manufacturingHover md:w-1/3 p-4'>
                        <Link href="/customer-successPage">
                        <div className={`scroll-animationPortfolio ${isVisible ? 'visibleManufacturing' : ''}`}>

                            
                     
                            <div className='flex flex-row justify-between mb-2'>
                                <div className='flex flex-row'>
                                <div className='w-8 '><img src="portfolio/manufacturingOrange.png" /></div>
                                <div className='item-title flex textColorLogo pl-4 '>MANUFACTURING</div>
                                </div>
                                <div className=''>
                                <img src="images/info.png" className='w-6 h-6'></img> 
                                </div>
                            </div>
                            <div className='flex flex-row item-desc manufacturingDesc'>
                                Digitizing manufacturing process in low tech adoption workforce in high dust & temp environment.</div>        
                        </div>
                        </Link>                          
                    </div> */}
            {/* wellnessHover */}
            {/* <div className='item flex flex-col contentWidth navbarCursor manufacturingHover  md:w-1/3 p-4' >
                        <Link href="/customer-successPage">
                            <div className={`scroll-animationPortfolio ${isVisible ? 'visibleSales' : ''}`}>
                                <div className='flex flex-row justify-between mb-2'>
                                <div className='flex flex-row'>
                                <div className='w-8 '><img src="portfolio/wellnessOrange.png" /></div>
                                <div className='item-title flex textColorLogo pl-4 '>WELLNESS</div>
                                </div>
                                <div className=''>
                                <img src="images/info.png" className='w-6 h-6'></img> 
                                </div>
                            </div>
                            <div className='flex flex-row item-desc manufacturingDesc'>
                            New age startup looking to launch mental health and wellness app.</div>        
                            </div>
                        </Link>
                    </div> */}
            {/* salesHover */}
            {/* <div className='item flex flex-col contentWidth navbarCursor salesHover md:w-1/3 p-4' >
                        <Link href="/customer-successPage">
                        <div className={`scroll-animationPortfolio ${isVisible ? 'visibleSales' : ''}`}>
                            <div className='flex flex-row  justify-between mb-2'>
                                <div className='flex flex-row'>
                                <div className='w-8 '><img src="portfolio/salesOrange.png" /></div>
                                <div className='item-title flex textColorLogo pl-4'>SALES</div>
                                </div>
                                <div className=''>
                                  <img src="images/info.png" className='w-6 h-6'></img> 
                                </div>
                            </div>
                            <div className='flex flex-row item-desc salesDesc'>
                                Sales resource attrition leads to lost opportunities. Improved key metrics in a multi product, location sales environment.</div>
                        </div>
                        </Link>
                      
                    </div> */}
            {/* agriHover */}
            {/* <div className='item flex flex-col contentWidth navbarCursor agriHover md:w-1/3 p-4'>
                        <Link href="/customer-successPage">
                        <div className={`scroll-animationPortfolio ${isVisible ? 'visibleAgri' : ''}`}>
                            <div className='flex flex-row  justify-between mb-2'>
                                <div className='flex flex-row'>
                                <div className='w-8 '><img src="portfolio/agriOrange.png" /></div>
                                <div className='item-title flex textColorLogo pl-4' >AGRI TECH</div>
                                </div>
                                <div className=''>
                                  <img src="images/info.png" className='w-6 h-6'></img> 
                                </div>
                            </div>
                            <div className='flex flex-row item-desc agriDesc'>
                                End  to end solution in the exciting area of farmer supply chain.</div>
                        </div>
                        </Link>
                    </div> */}
            {/* hrHover */}
            {/* <div className='item flex flex-col contentWidth navbarCursor machinevisionHover md:w-1/3 p-4'>
                        <Link href="/customer-successPage">
                        <div className={`scroll-animationPortfolio ${isVisible ? 'visibleMachinevision' : ''}`}>
                            <div className='flex flex-row justify-between mb-2'>
                                <div className="flex flex-row">
                                <div  className='w-8 '><img src="portfolio/manufacturingOrange.png" /></div>
                                <div className='item-title flex textColorLogo pl-4'>MACHINE VISION</div>
                                </div>
                                <div className=''>
                                  <img src="images/info.png" className='w-6 h-6'></img> 
                                </div>
                            </div>
                            <div className='flex flex-row item-desc machinevisionDesc'>
                            Digitizing manufacturing process in low tech adoption workforce in high dust & temp environment.
                                </div>
                        </div>
                        </Link>
                       
                    </div> */}
            {/* fintechHover */}
            {/* <div className='item flex flex-col contentWidth navbarCursor fintechHover md:w-1/3 p-4 '>
                        <Link href="/customer-successPage">
                        <div className={`scroll-animationPortfolio ${isVisible ? 'visibleFintech' : ''}`}>
                            <div className='flex flex-row justify-between mb-2'>
                                <div className='flex flex-row'>
                                <div className='w-8 ' ><img src="portfolio/fintechOrange.png"/></div>
                                <div className='item-title flex textColorLogo pl-4'>FINTECH</div>
                                </div>
                                <div className=''>
                                 <img src="images/info.png" className='w-6 h-6'></img> 
                                </div>
                            </div>
                            <div className='flex flex-row item-desc fintechDesc'>
                                Implementation with well established finance and micro lending company.</div>
                               
                        </div>
                        </Link>
                 
                    </div> */}
          </div>
        </div>
        {/* <div className='desktopPortfolio' id="Testimonials"></div> */}
        <div className="mobilePortfolio">
          <div className="items-list flex  flex-wrap pt-1 pb-4   ">
            {/* manufacturingHover */}

            <div
              onClick={() => {
                {
                  setCategory("content1");
                  router.push("/customer-success");
                }
              }}
              className="item flex flex-col contentWidth manufacturingHover md:w-1/3 p-4"
            >
              {/* <div className={`scroll-animationPortfolio ${isVisible ? 'visibleManufacturing' : ''}`}> */}

              <div className="flex flex-row justify-between mb-2">
                <div className="flex flex-row">
                  <div className="w-8">
                    <img src="/portfolio/Group.svg" />
                  </div>
                  <div className="item-title flex textColorLogo pl-4 ">
                    EDTECH
                  </div>
                </div>
                <div className="infoIconMobile ">
                  {/* <Link href="/customer-success/edTech"> */}
                  <img
                    src="/images/info.png"
                    className="flex items-center justify-center  w-4 h-4"
                  ></img>
                  {/* </Link> */}
                </div>
              </div>
              <div className="flex flex-row item-desc manufacturingDesc">
                AI driven e learning application with state of the art voice to
                text and large language model capabilities .
              </div>
              {/* </div> */}

              {/* <div className='manufacturingArrow  '> <img src="portfolio/rightArrow.png" className="w-8 " /></div> */}
            </div>
            {/* wellnessHover */}
            <div
              onClick={() => {
                {
                  getCategory.setState({ category: "content3" });
                  router.push({
                    pathname: "/customer-success",
                    query: { category: "content3" },
                  });
                }
              }}
              className="item flex flex-col contentWidth manufacturingHover md:w-1/3 p-4"
            >
              {/* <div className={`scroll-animationPortfolio ${isVisible ? 'visibleManufacturing' : ''}`}> */}

              <div className="flex flex-row justify-between mb-2">
                <div className="flex flex-row">
                  <div className="w-8 ">
                    <img src="/portfolio/healthCaseStudy.svg" />
                  </div>
                  <div className="item-title flex textColorLogo pl-4 ">
                    WELLNESS
                  </div>
                </div>
                <div className="infoIconMobile ">
                  {/* <Link href="/customer-success/health"> */}
                  <img
                    src="/images/info.png"
                    className="flex items-center justify-center  w-4 h-4"
                  ></img>
                  {/* </Link> */}
                </div>
              </div>
              <div className="flex flex-row item-desc manufacturingDesc">
                New age startup looking to launch mental health and wellness
                app.
              </div>
              {/* </div> */}

              {/* <div className='manufacturingArrow  '> <img src="portfolio/rightArrow.png" className="w-8 " /></div> */}
            </div>
            {/* <div className='item flex flex-col contentWidth wellnessHover  md:w-1/3 p-4' >
                       
                        <div className={`scroll-animationPortfolio ${isVisible ? 'visibleWellness' : ''}`}>
                            <div className='flex flex-row justify-between mb-2'>
                                <div className='flex flex-row'>
                                <div className='w-8 '><img src="portfolio/wellnessOrange.png" /></div>
                                <div className='item-title flex textColorLogo pl-4'>WELLNESS</div>
                                </div>
                                <div className='infoIconMobile'>
                                    <Link href="/customer-success/health">
                                    <img src="images/info.png" className='flex items-center justify-center  w-4 h-4'></img>
                                    </Link>
                                  
                                </div>
                            </div>
                            <div className='flex flex-row item-desc wellnessDesc'>
                                New age startup looking to launch mental health and wellness app.
                            </div>
                        </div>
                    </div> */}
            {/* salesHover */}
            <div
              onClick={() => {
                {
                  getCategory.setState({ category: "content2" });
                  router.push({
                    pathname: "/customer-success",
                    query: { category: "content2" },
                  });
                }
              }}
              className="item flex flex-col contentWidth salesHover md:w-1/3 p-4"
            >
              {/* <div className={`scroll-animationPortfolio ${isVisible ? 'visibleSales' : ''}`}> */}
              <div className="flex flex-row  justify-between mb-2">
                <div className="flex flex-row">
                  <div className="w-8 ">
                    <img src="/portfolio/carbon_industry.svg" />
                  </div>
                  <div className="item-title flex textColorLogo pl-4">
                    MACHINE VISION
                  </div>
                </div>
                <div className="infoIconMobile">
                  {/* <Link href="/customer-success/machinevision"> */}
                  <img src="/images/info.png" className="w-4 h-4"></img>
                  {/* </Link> */}
                </div>
              </div>
              <div className="flex flex-row item-desc salesDesc">
                AI-driven defect detection system, optimizing manufacturing
                processes for higher efficiency and accuracy.
              </div>
              {/* <div className='salesArrow'> <img src="portfolio/rightArrow.png" className="w-8 " /></div> */}
            </div>
            {/* agriHover */}
            <div
              onClick={() => {
                {
                  getCategory.setState({ category: "content4" });
                  router.push({
                    pathname: "/customer-success",
                    query: { category: "content4" },
                  });
                }
              }}
              className="item flex flex-col contentWidth agriHover md:w-1/3 p-4"
            >
              {/* <div className={`scroll-animationPortfolio ${isVisible ? 'visibleAgri' : ''}`}> */}
              <div className="flex flex-row  justify-between mb-2">
                <div className="flex flex-row">
                  <div className="w-8 ">
                    <img src="/portfolio/socialCaseStudy.svg" />
                  </div>
                  <div className="item-title flex textColorLogo pl-4">
                    INDUSTRIAL PLATFORM
                  </div>
                </div>
                <div className="infoIconMobile">
                  {/* <Link href="/customer-success/industrialPlatform"> */}
                  <img src="/images/info.png" className="w-4 h-4"></img>
                  {/* </Link> */}
                </div>
              </div>
              <div className="flex flex-row item-desc agriDesc">
                Specialized social platform connecting professionals in the data
                center industry for collaboration and networking.
              </div>
              {/* </div> */}

              {/* <div className='agriArrow'> <img src="portfolio/rightArrow.png" className="w-8 " /></div> */}
            </div>
            {/* hrHover */}
            {/* <div className='item flex flex-col contentWidth hrHover md:w-1/3 p-4'>
                        
                        <div className={`scroll-animationPortfolio ${isVisible ? 'visibleHr' : ''}`}>
                            <div className='flex flex-row justify-between mb-2'>
                                <div className="flex flex-row">
                                <div  className='w-8 '><img src="portfolio/hrOrange.png" /></div>
                                <div className='item-title flex textColorLogo pl-4'>HR TECH</div>
                                </div>
                                <div className='infoIconMobile'>
                                    <Link href="/hrtech">
                                    <img src="images/info.png" className='w-4 h-4'></img>
                                    </Link>
                                   
                                </div>
                            </div>
                            <div className='flex flex-row item-desc hrDesc'>
                                Seamless integration of recruitment process.</div>
                        </div>
                    </div> */}
            {/* fintechHover */}
            <div
              onClick={() => {
                {
                  getCategory.setState({ category: "content5" });
                  router.push({
                    pathname: "/customer-success",
                    query: { category: "content5" },
                  });
                }
              }}
              className="item flex flex-col contentWidth fintechHover md:w-1/3 p-4 "
            >
              {/* <div className={`scroll-animationPortfolio ${isVisible ? 'visibleFintech' : ''}`}> */}
              <div className="flex flex-row justify-between mb-2">
                <div className="flex flex-row">
                  <div className="w-8 ">
                    <img src="/portfolio/eCommerceCaseStudy.svg" />
                  </div>
                  <div className="item-title flex textColorLogo pl-4">
                    E-COMMERCE
                  </div>
                </div>
                <div className="infoIconMobile">
                  {/* <Link href="/customer-success/eCommerce"> */}
                  <img src="/images/info.png" className="w-4 h-4"></img>
                  {/* </Link> */}
                </div>
              </div>
              <div className="flex flex-row item-desc fintechDesc">
                E-commerce platform enabling farmers to sell fresh produce
                directly to consumers, bridging the gap in the supply chain.
              </div>

              {/* </div> */}

              {/* <div className='fintechArrow'> <img src="portfolio/rightArrow.png" className="w-8 " /></div> */}
            </div>
            <div
              onClick={() => {
                {
                  getCategory.setState({ category: "content6" });
                  router.push({
                    pathname: "/customer-success",
                    query: { category: "content6" },
                  });
                }
              }}
              className="item flex flex-col contentWidth manufacturingHover md:w-1/3 p-4"
            >
              {/* <div className={`scroll-animationPortfolio ${isVisible ? 'visibleMachinevision' : ''}`}> */}

              <div className="flex flex-row justify-between mb-2">
                <div className="flex flex-row">
                  <div className="w-8">
                    <img src="/portfolio/invoiceCaseStudy.svg" />
                  </div>
                  <div className="item-title flex textColorLogo pl-4 ">
                    AUDIT
                  </div>
                </div>
                <div className="infoIconMobile ">
                  {/* <Link href="/customer-success/audit"> */}
                  <img
                    src="/images/info.png"
                    className="flex items-center justify-center  w-4 h-4"
                  ></img>
                  {/* </Link> */}
                </div>
              </div>
              <div className="flex flex-row item-desc manufacturingDesc">
                Advanced data extraction tool for precise, efficient audit
                processes, ensuring accuracy and compliance.
              </div>
              {/* </div> */}

              {/* <div className='manufacturingArrow  '> <img src="portfolio/rightArrow.png" className="w-8 " /></div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="" id="Testimonials"></div>
    </div>
  );
}
