"use client";
import PortfolioDetails from "../components/portfolioDetails";
import Footer from "../components/footer";
import TopnavBar from "../components/topnavbar";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { getCategory } from "../globalState";
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

const Page = () => {
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const { category, setCategory } = getCategory();
    const [selectedPage, setSelectedPage] = useState<MobileCustomerSuccessProps[]>([]);
    const [isContentLoaded, setIsContentLoaded] = useState<boolean>(false);
    const router = useRouter();
    const searchParams = useSearchParams();

    // Check screen size
    const checkScreenDimension = () => {
        if (typeof window !== "undefined") {
            setIsMobile(window.innerWidth <= 768);
        }
    };

    useEffect(() => {
        checkScreenDimension();
        window.addEventListener("resize", checkScreenDimension);
        return () => {
            window.removeEventListener("resize", checkScreenDimension);
        };
    }, []);

    // Get category from URL and update Zustand state
    useEffect(() => {
        const queryCategory = searchParams ? searchParams.get("category") : null;
        if (queryCategory) {
            setCategory(queryCategory);
            setSelectedPage(
                mobileCustomerSuccess.filter((item) => item.id === queryCategory) as MobileCustomerSuccessProps[]
            );
        }
    }, [searchParams]);

    // Update the selected page when category changes
    useEffect(() => {
        if (category) {
            setSelectedPage(
                mobileCustomerSuccess.filter((item) => item.id === category) as MobileCustomerSuccessProps[]
            );
            setIsContentLoaded(true);
        }
    }, [category]);

    const handleClick = (id: string) => {
        setCategory(id);
        router.push(`/CaseStudy?category=${id}`);
        setSelectedPage(
            mobileCustomerSuccess.filter((item) => item.id === id) as MobileCustomerSuccessProps[]
        );
    };
    if (!isContentLoaded) {
        return null; 
    }

    return isMobile ? (
        <div className="pt-0">
          <div className="fontFamily">
            <div className="w-full h-full ">
              <TopnavBar />
              <div className="pt-16 pb-2">
                <div className="mx-auto md:mx-0">
                  <div className="flex parentMobileCaseStudy overflow-x-scroll customScroll hover:cursor-pointer pl-2 pr-1">
                    <div
                      className="flex flex-row justify-around"
                      style={{ alignItems: "flex-start" }}
                    >
                      {mobileCustomerSuccess.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => handleClick(item.id)}
                          id={item.id}
                          className={`custom_button w-[150] flex flex-col items-center justify-center
                         ${
                           item.id === category ? "text-blue" : "text-gray-400"
                         } cursor-pointer`}
                          ref={
                            item.id === category
                              ? (el) => {
                                  el?.scrollIntoView({
                                    behavior: "smooth",
                                    block: "nearest",
                                    inline: "center",
                                  });
                                }
                              : null
                          }
                        >
                          <img
                            style={{
                              width: item.id === "content1" ? "1.8rem" : "1.5rem",
                              height: item.id === "content1" ? "1.8rem" : "1.5rem",
                              margin: item.id === "content1" ? "0" : "0.2rem",
                            }}
                            src={`${
                              item.id === category
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
              </div>
            </div>
            <div className="pt-0">
              {selectedPage && selectedPage.length > 0 && (
                <>
                  <div id="portfolioDetails" className="fontFamily">
                    <div className="caseDetails_mobile">
                      <div className="caseHeader_mobile">
                        <div className="caseHeaderTitle_mobile flex flex-wrap">
                          <h1 className="text-center">
                            {selectedPage[0].caseTitle}
                          </h1>
                        </div>
                        <div className="caseHeaderIcon_mobile pt-5 pb-5">
                          <p className="px-2">
                            {selectedPage[0].caseTitleContent}
                          </p>
                        </div>
                      </div>
                      {selectedPage[0].caseImage && (
                        <div className="px-5">
                          <div className="flex flex-col gap-[0.25rem] items-center justify-center">
                            <img src={selectedPage[0].caseImage} className="" alt="Case study" />
                          </div>
                        </div>
                      )}
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
                              <img
                                src="/caseStudies/vehicle.png"
                                className="w-16"
                                alt="Services icon"
                              />
                            </div>
                            <div className="serviceHeader_mobile pt-2">
                              Services
                            </div>
                            {selectedPage[0].services.map((item, id) => (
                              <div key={id} className="serviceText_mobile pt-2">
                                {item}
                              </div>
                            ))}
                          </div>
                          <div className="platformContainer_mobile">
                            <div className="ServiceImage">
                              <img src="/caseStudies/web.png" className="w-16" alt="Platform icon" />
                            </div>
                            <div className="serviceHeader_mobile pt-2">
                              Platform
                            </div>
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
                                alt="Tech stack icon"
                              />
                            </div>
                            <div className="serviceHeader_mobile pt-2">
                              Techstack
                            </div>
                          </div>
                          <div className="techContent_mobile">
                            <div className="flex flex-row justify-around pt-6">
                              <div className="flex flex-col md:gap-6">
                                {selectedPage[0].techstack
                                  .slice(0, Math.ceil(selectedPage[0].techstack.length / 2))
                                  .map((item, id) => (
                                    <div key={id} className="techText_mobile pb-2">
                                      {item}
                                    </div>
                                  ))}
                              </div>
                              <div className="flex flex-col md:gap-6">
                                {selectedPage[0].techstack
                                  .slice(
                                    Math.ceil(selectedPage[0].techstack.length / 2),
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
                                    alt="Right quote"
                                  />
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
          </div>
        </div>
      ) : (
        <div>
          <TopnavBar />
          <PortfolioDetails />
          <Footer />
        </div>
      );
};

export default Page;
