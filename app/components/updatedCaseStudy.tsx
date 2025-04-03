'use client'
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'
import '../styles/styles.css';
import '../styles/mediaQuery.css'
import '../styles/testimonials.css';

export default function UpdatedCaseStudy() {

    const searchParams = useSearchParams();
    const router = useRouter();
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [selectedTab, setSelectedTab] = useState<number>(1);
    const [showsite,setShowSite]=useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const contentRefs = useRef<(HTMLElement | null)[]>([]);
    const [isSidebarCentered, setIsSidebarCentered] = useState(false);

    const scrollToSection = (sectionId: string) => {
        const sectionRef = contentRefs.current.find(ref => ref?.id === sectionId); // Find the section by ref
        if (sectionRef) {
            sectionRef.scrollIntoView({ behavior: 'smooth' }); // Scroll to the section
        } else {
            console.error(`Section with ID ${sectionId} not found.`); // Log if the section is not found
        }
    };

    const handleMenuClick = (sectionId: string) => {
        const removePrefix = sectionId.replace('content', '');
        const parseToInt = parseInt(removePrefix, 10);
        
        // Immediately set the selected tab
        setSelectedTab(parseToInt);
        
        // Find and scroll to section
        const sectionRef = contentRefs.current.find(ref => ref?.id === sectionId);
        if (sectionRef) {
            // Scroll to the top of the section instead of centering it
            const yOffset = sectionRef.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
                top: yOffset,
                behavior: 'smooth'
            });
        }
        window.history.pushState(null, '', `/customer-success/?category=content${parseToInt}`);

    };

   
    
    const sideNavDetails = [
        {
            id: 'content1',
            title: 'Ed Tech',
            titleImage: '/updatedCaseStudiesIcon/edTech.svg',
            selectedTitleImage: '/updatedCaseStudiesIcon/edTech_new_icon.svg',
            hasAi: true,
        },
        {
            id: 'content2',
            title: 'Machine Vision',
            titleImage: '/updatedCaseStudiesIcon/machinVision.svg',
            selectedTitleImage: '/updatedCaseStudiesIcon/machineVisionSelected.svg',
            hasAi: true,
        },
        {
            id: 'content3',
            title: 'Wellness',
            titleImage: '/updatedCaseStudiesIcon/wellness.svg',
            selectedTitleImage: '/updatedCaseStudiesIcon/wellnessSelected.svg',
            hasAi: false,
        },
        {
            id: 'content4',
            title: 'Industry Platform',
            titleImage: '/updatedCaseStudiesIcon/social.svg',
            selectedTitleImage: '/updatedCaseStudiesIcon/socialSelected.svg',
            hasAi: false,
        },
        {
            id: 'content5',
            title: 'Manufacturing',
            titleImage: '/updatedCaseStudiesIcon/manufacturring.svg',
            selectedTitleImage: '/updatedCaseStudiesIcon/manufacturingSelected.svg',
            hasAi: false,
        },
        {
            id: 'content6',
            title: 'Agri Tech',
            titleImage: '/updatedCaseStudiesIcon/agriTech.svg',
            selectedTitleImage: '/updatedCaseStudiesIcon/agriTechSelected.svg',
            hasAi: false,
        },
        {
            id: 'content7',
            title: 'E-Commerce',
            titleImage: '/updatedCaseStudiesIcon/eCom.svg',
            selectedTitleImage: '/updatedCaseStudiesIcon/eComSelected.svg',
            hasAi: false,
        },
        {
            id: 'content8',
            title: 'Sales',
            titleImage: '/updatedCaseStudiesIcon/sales.svg',
            selectedTitleImage: '/updatedCaseStudiesIcon/salesSelected.svg',
            hasAi: false,
        },
        {
            id: 'content9',
            title: 'Audit',
            titleImage: '/updatedCaseStudiesIcon/audit.svg',
            selectedTitleImage: '/updatedCaseStudiesIcon/auditSelected.svg',
            hasAi: true,
        },
        {
            id: 'content10',
            title: 'Fin Tech',
            titleImage: '/updatedCaseStudiesIcon/fintechInactive.webp',
            selectedTitleImage: '/updatedCaseStudiesIcon/fintechWhite.webp',
            hasAi: false,
        },
        {
            id: 'content11',
            title: 'Thermal Vision',
            titleImage: '/caseStudies/thermal_gray_icon.svg',
            selectedTitleImage: '/caseStudies/thermalGraySelectedWhite.svg',
            hasAi: false,
        },
    ];
    const portfolio = [
        {
            id: 'content1',
            caseTitle: ' AI-enabled Edtech Platform',
            caseTitleContent: (
        <span>
            <span style={{ color: '#4285F4', fontWeight:'bold' }}>Evo11ve</span> is an edtech platform that revolutionizes augmented learning
        </span>
    ),
            stampImage: "",
            caseImage: '/updatedCaseStudiesIcon/edBookPurple.svg',
            challenges: 'A custom-built, voice-to-text enabled personalized AI coach.',
            challengePoints: ' ',
            solution: 'Veract team designed and developed a desktop application with integrated voice-to-text functionality, implementing advanced noise cancellation features and incorporating seamless chat capabilities.',
            solutionPoints: '',
            services: 'Software architecture, Technology consulting,Front end development,Back end development,Deployment',
            platform: 'Desktop application,Web',
            techstack: 'Next JS,Electron,NodeJS,MongoDB,Express,Elastic Search',
            name: "",
            designation: "",
            company: "",
            clientSpeak: "",
            seperator: <hr className='separatorPortfolio'></hr>,
            referenceImage: [
                // {
                //     id: 1,
                //     image: '/output/portfolio_one.svg',
                // }
                {
                    id: 1,
                    image: '/caseStudyReflectionImages/Evollve_new_img.svg',
                }
            ]
        },
        {
            id: 'content2',
            caseTitle: 'Automated Machine Vision Inspection',
            caseTitleContent: 'A sheet metal pressings manufacturing company.',
            stampImage: "/portfolio/artificial-intelligence.png",
            caseImage: '/updatedCaseStudiesIcon/machineVisionPurple.svg',
            challenges: 'Over 5 million parts must undergo a comprehensive visual inspection each month. Manual inspection proved to be tedious, and as inspector fatigue set in, accuracy levels declined.',
            challengePoints: '',
            solution: "Veract developed a proprietary AI-powered visual inspection tool that significantly boosts productivity and helps prevent part rejections and recalls. The manufacturer deemed the solution a complete success, citing its cost-effectiveness as a key factor.",
            solutionPoints: '',
            services: 'Software architecture, Technology consulting, Software development, Deployment, End to end vision systems',
            platform: 'Web',
            techstack: 'Python, Keras, TensorFlow, PyTorch',
            name: "",
            designation: "",
            company: "",
            clientSpeak: "",
            seperator: <hr className='separatorPortfolio'></hr>
        },
        {
            id: 'content3',
            caseTitle: 'Health and Wellness Tech',
            caseTitleContent: (
                <span>
                    <span style={{ color: '#4285F4', fontWeight:'bold' }}>Anyo</span> is a health and wellness app that addresses the significant issue of mental health.
                </span>
            ),
            stampImage: "",
            caseImage: '/updatedCaseStudiesIcon/wellnessPurple.svg',
            challenges: 'The founders of Anyo were looking for a one-stop shop for technical advice and development of their live chat-enabled platform with streaming audio, video and chatbots.',
            challengePoints: '',
            solution: `Within five months, Veract's team of architects and developers successfully designed and deployed:  four online portals, the Anyo mobile app. Key technical decisions included:  architecture selection, framework choice.`,
            solutionPoints: '',
            services: 'Software architecture, Technology consulting, Software development, Deployment',
            platform: 'Mobile, Web ',
            techstack: 'Flutter, Angular, LoopBack, MongoDB, Elasticsearch',
            name: "",
            designation: "",
            company: "",
            clientSpeak: "",
            seperator: <hr className='separatorPortfolio'></hr>,
            referenceImage: [
                // {
                //     id: 1,
                //     image: '/output/portfolio_wellness.svg'
                // }, 
                {
                    id: 1,
                    image: '/caseStudyReflectionImages/anyo_new_img.svg'
                },                
                {
                    id: 2,
                    image: '/output/anyo_image.svg'
                }
            ]
        },
        {
            id: 'content4',
            caseTitle: 'Data Center Innovation Platform',
            caseTitleContent: (
                <span>
                    <span style={{ color: '#4285F4', fontWeight:'bold' }}>Data Center Mart</span> is an initiative of IBITS.
                </span>
            ),
            stampImage: "",
            caseImage: '/updatedCaseStudiesIcon/socialPurple.svg',
            challenges: 'Challenged with creating a comprehensive platform tailored specifically for the data center industry including post content, comment, like, and share within the community, with a integrated marketplace for products and services and a directory of suppliers specializing in data center solutions.',
            challengePoints: ' ',
            solution: ' Developed a robust e-commerce  and social  platform tailored. The site features a robust backend system for managing product listings and user accounts. It includes functionalities like marketplace, quote requests, product filtering, and content management.',
            solutionPoints: '',
            services: 'Design Software architecture,Technology consulting,Front end development,Back end development,Deployment',
            platform: 'Web',
            techstack: 'Next JS,Node JS,Mongo DB',
            name: "Bijoy KT",
            designation: "CEO",
            company: "Data Center Mart",
            clientSpeak: "Our engagement with veract for Datacenter Mart project has been a fantastic experience. The team was very prompt and supportive throughout the project. We are very happy with the outcome and we expect to start the second phase soon. This is a very complex project because we did not have an exact comparison to show them but they grasped the requirements well and was able to deliver what we expected.",
            seperator: <hr className='separatorPortfolio'></hr>,
            referenceImage: [
                {
                    id: 1,
                    image: '/caseStudyReflectionImages/DCM_new_img.svg'
                },
            ]
        },
        {
            id: 'content5',
            caseTitle: 'Quality Documentation for Metal Foundry',
            caseTitleContent: 'An automated quality report generation system for Grey Iron and Ductile Iron Foundry.',
            stampImage: "",
            caseImage: '/output/quality_documetation_logo.svg',
            challenges: 'Submission of parts necessitates the submission of high-quality documentation on spectrometer readings, pouring properties, mould properties and sand properties.',
            challengePoints: ' ',
            solution: 'A one-stop shop that combines machine maintenance, defect prediction, CAPA follow-up, test certificate and other quality documents.',
            solutionPoints: '',
            services: 'Software architecture, Technology consulting, Software development, Deployment',
            platform: 'Web',
            techstack: 'Bootstrap,Express.js,jQuery,MongoDB,Redis,IndexedDB,Google APIs',
            name: "",
            designation: "",
            company: "",
            clientSpeak: "",
            seperator: <hr className='separatorPortfolio'></hr>
        },
        {
            id: 'content6',
            caseTitle: 'Agriculture Finance Ecosystem',
            caseTitleContent: (
                <span>
                   Agrosperity <span style={{ color: '#4285F4', fontWeight:'bold' }}>KiVi</span> is a phygital platform in the area of agri supply chain and financing.
                </span>
            ),
            stampImage: "",
            caseImage: '/updatedCaseStudiesIcon/agriTechPurple.svg',
            challenges: 'KiVi was seeking a development partner to fully assume responsibility for the design, development and implementation of Vision to text, Map interfaces for loan eligibility data, loan documents automation, dashboards with multiple authentication levels.',
            challengePoints: '',
            solution: 'Veract architects set up the platform and assumed complete ownership of the product and made critical choices of architecture, framework to enable rapid development.',
            solutionPoints: '',
            services: 'Software architecture, Technology consulting, Software development, Deployment',
            platform: 'web',
            techstack: 'Java, Spring Boot, PostgreSQL,Nginx,Kafka,Elasticsearch,Google APIs,CI/CD,Angular,Kibana',
            name: "Salil Nair",
            designation: "CTO",
            company: "Agrosperity Tech Solutions",
            clientSpeak: "We engaged with Veract team from an early stage and they helped build out our 'KiViStar' App from basic day one concept. Their choice of architecture, framework and ability to deliver the product helped us go to market quickly. This helped us focus on our core work.",
            seperator: <hr className='separatorPortfolio'></hr>
        },
        {
            id: 'content7',
            caseTitle: 'E-Commerce for Seasonal Produce',
            caseTitleContent: (
                <span>
                    <span style={{ color: '#4285F4', fontWeight:'bold' }}>Beanstalk Farmers</span> operates in the exciting farm-to-table space.
                </span>
            ),
            stampImage: "",
            caseImage: '/updatedCaseStudiesIcon/eComPurple.svg',
            challenges: 'Payment enabled e-commerce site in time for customers produce season.',
            challengePoints: ' ',
            solution: 'Veract team developed and deployed a payment enabled custom designed web application. ',
            solutionPoints: '',
            services: 'Software architecture,Technology consulting,Front end development,Back end development ,Deployment',
            platform: 'Web',
            techstack: 'Next JS,Express JS,Node JS,Redis,PostgreSQL,Razorpay',
            name: "",
            designation: "",
            company: "",
            clientSpeak: "",
            seperator: <hr className='separatorPortfolio'></hr>,
            referenceImage: [
                // {
                //     id: 1,
                //     image: '/output/portfoilio_beanstalk.svg',
                // 
                            // }                
                {
                    id: 1,
                    image: '/caseStudyReflectionImages/Beanstalk_new_img.svg',
                }
            ]

        },
        {
            id: 'content8',
            caseTitle: 'Sales Enquiry and Quote Management',
            caseTitleContent: (
                <span>
                <span style={{ color: '#4285F4', fontWeight:'bold' }}>Rajdeep</span> is a distributor of industrial products with multiple principals, multiple products, in multiple locations.
            </span>
            ),
            stampImage: "",
            caseImage: '/portfolio/salesPurple.png',
            challenges: "Salesman attrition, inconsistent data, quotation production and reporting were the client's pain concerns. Customer was searching for a solution that would operate with SAP integration and fit into their usual routine.",
            challengePoints: '',
            solution: 'Veract created a mobile and online application that seamlessly integrated with the customers existing software.',
            solutionPoints: '',
            services: 'Software architecture, Technology consulting, Software development, Deployment',
            platform: 'Mobile,Web',
            techstack: 'Redis,Bootstrap,Express.js,IndexedDB,MongoDB,Google APIs,jQuery',
            name: "ANAND SHAH",
            designation: "DIRECTOR",
            company: "RAJDEEP INDUSTRIAL PRODUCTS",
            clientSpeak: "Excellent prompt support in spite of remote location.",
            seperator: <hr className='separatorPortfolio'></hr>,
            referenceImage: [
                {
                    id: 1,
                    image: '/caseStudyReflectionImages/CRM_new_img.svg',
                }
            ]
        },
        {
            id: 'content9',
            caseTitle: 'Data Extraction for the Audit Industry',
            caseTitleContent: (
                <span>
                    <span style={{ color: '#4285F4', fontWeight:'bold' }}>Financial audit</span> firm with over 100 associates
                </span>
            ),
            stampImage: "",
            caseImage: '/updatedCaseStudiesIcon/auditPurple.svg',
            challenges: 'Audit firm looking to reduce manual data entry processes required for compliance.',
            challengePoints: ' ',
            solution: 'Veract team developed and deployed a easy to use Large language model +OCR based custom trained data extraction capability ',
            solutionPoints: '',
            services: 'Software architecture,Technology consulting,Front end development,Back end development ,Deployment',
            platform: 'Web',
            techstack: 'Python,Fast API',
            name: "",
            designation: "",
            company: "",
            clientSpeak: "",
            seperator: <hr className='separatorPortfolio'></hr>
        },
        {
            id: 'content10',
            caseTitle: ' Credit Risk Assessment and Risk Profiling ',
            caseTitleContent: (
                <span>
                    <span style={{ color: '#4285F4', fontWeight:'bold' }}>Northern Arc Capital</span> is a financial services platform that was established primarily to meet various credit needs of businesses and households that are underserved.
                </span>
            ),
            stampImage: "",
            caseImage: '/updatedCaseStudiesIcon/fintechActivePurple.svg',
            challenges: 'For the construction of their investor portal, Northern Arc Capital required a team with technical and financial domain experience. They needed to reduce risk by using risk analytics, risk profiles, etc.',
            challengePoints: ' ',
            solution: 'Veract implemented risk profiling in their investor tracking portal by fusing their core development skills with their expertise in financial domain.',
            solutionPoints: '',
            services: 'Software architecture, Technology consulting, Software development, Deployment',
            platform: 'Web',
            techstack: 'Angular,Spring Boot,PostgreSQL,Kibana,Elasticsearch,Node.js',
            name: "",
            designation: "",
            company: "",
            clientSpeak: "",
            seperator: <hr className='separatorPortfolio'></hr>
        },
        {
            id: 'content11',
            caseTitle: ' Infrared Thermography',
            caseTitleContent: 'The Institute of Buffalo Science focuses on improving buffalo health monitoring by tracking key parameters and mapping udder thermal profiles to detect early onset of mastitis in dairy animals.',
            stampImage: "",
            caseImage: '/updatedCaseStudiesIcon/thermalPurple.svg',
            challenges: 'Integration of the thermal imaging camera with the monitoring system and IOT. Ensuring real-time data capture and processing. Compatibility between the camera hardware and software solutions. Reliable data transfer protocols to minimize latency.',
            challengePoints: ' ',
            solution: 'Software Development: Created custom software for real-time analysis and visualization of udder thermal profiles and camera control through a user-friendly interface.',
            solutionPoints: '',
            services: 'Software architecture, Technology consulting, Front end development, Back end development, Deployment',
            platform: 'Web',
            techstack: 'Dotnet,Angular,MongoDB,Express.js,Windows,Node.js',
            name: "",
            designation: "",
            company: "",
            clientSpeak: "",
            seperator: <div className="pb-16"></div>,
            referenceImage: [
                {
                    id: 1,
                    image: '/caseStudyReflectionImages/Thermal_new_img.svg',
                }
            ]
        },
    ]

    useEffect(() => {
        document.title = "Veract";
        const section = searchParams?.get("category") ?? "";

        if (section) {
            // Just set the selected tab without scrolling
            const removePrefix = section.replace('content', '');
            const parseToInt = parseInt(removePrefix, 10);
            setSelectedTab(parseToInt);
            // Delay the scroll slightly to ensure the tab is selected first
            setTimeout(() => {
                handleMenuClick(section);
            }, 100);
        } else {
            setSelectedTab(1);
        }


        // window.history.replaceState(null, '', '/cutomer-success');
    }, [searchParams]);
    
    useEffect(() => {
        let scrollTimeout: NodeJS.Timeout;
        
        const handleScroll = () => {
            // Clear the previous timeout
            if (scrollTimeout) {
                clearTimeout(scrollTimeout);
            }
            
            // Set a new timeout
            scrollTimeout = setTimeout(() => {
                const viewportMiddle = window.innerHeight / 2;
                
                // Find the section closest to the middle of the viewport
                let closestSection = null;
                let closestDistance = Infinity;
                
                contentRefs.current.forEach((ref, index) => {
                    if (ref) {
                        const rect = ref.getBoundingClientRect();
                        const sectionMiddle = (rect.top + rect.bottom) / 2;
                        const distance = Math.abs(sectionMiddle - viewportMiddle);
                        
                        if (distance < closestDistance) {
                            closestDistance = distance;
                            closestSection = index + 1;
                        }
                    }
                });
                
                if (closestSection !== null && closestSection !== selectedTab) {
                    setSelectedTab(closestSection);
                    console.log(closestSection)
                    window.history.pushState(null, '', `/customer-success/?category=content${closestSection}`);
                }
            }, 100); // Debounce time of 100ms
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (scrollTimeout) {
                clearTimeout(scrollTimeout);
            }
        };
    }, [selectedTab]);

    useEffect(() => {
        const handleScroll = () => {
            // Check if the user has scrolled to the bottom of the page
            const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
            setIsSidebarCentered(isAtBottom);
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
          const scrollTop = window.scrollY;
          const triggerPoint = window.innerHeight * 0.05; // Adjust this value as needed
          setIsVisible(scrollTop > triggerPoint);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div>
            {isLoading ? (
                <div className="loader">Loading...</div>
            ) : (
                <div className="desktopCaseStudy">
                    <div id="portfolioDetails" className='fontFamily'>
                        <div className={`dashboard h-[74.5vh] transition-all duration-300 ${isVisible ? 'translate-y-[-10%]' : ''} overflow-auto `} id="container">
                            {sideNavDetails.map((item: any, index: any) => (
                                <div key={index} className='menuRowDetails' onClick={() => { handleMenuClick(item.id) }}>
                                    <img src={`${selectedTab === index + 1 ? `${item.selectedTitleImage}` : `${item.titleImage}`}`} className="w-8" />
                                    <div className={`flex items-center ${selectedTab === index + 1 ? `text-white` : `text-[#7F7F7F]`}`}>{item.title}</div>
                                    {item.hasAi && (
                                        <img src='/updatedCaseStudiesIcon/aiStamp.svg' alt='' className='' />
                                    )}
                                </div>
                            ))}
                        </div>
                        {portfolio.map((item, index) => (
                            <section  className='ml-[4%]' key={item.id} id={`content${index + 1}`} ref={(el) => { contentRefs.current[index] = el; }}>
                                <div className={`caseDetails ${selectedTab === index + 1 ? 'pt-[10%]' : 'pt-[5%]'}`}>
                                    <div className='w-[95%] flex flex-col gap-[1rem] mt-[2rem] pb-[1rem]'>
                                        <div className='flex flex-row gap-[2.688rem] items-center mt-[0.5rem]'>
                                            <img src={item.caseImage} alt="" className='w-[4.563rem] aspect-square' />
                                             <div className='text-[32px] font-semibold text-[#4285f4]'>{item.caseTitle}</div>
                                        </div>
                                        <div className='text-[18px] font-normal text-black'>{item.caseTitleContent}</div>
                                    </div>
                                    <div className='w-[95%] flex flex-row justify-between'>
                                        <div className='w-[45%] p-[2rem] bg-white rounded-[26px] flex flex-col gap-[0.5rem] caseStudyContainerBoxShadow'>
                                            <div className='text-[18px] text-[#4285f4] font-semibold text-center'>Challenge</div>
                                            <div className='text-[16px] text-black font-normal'>{item.challenges}</div>
                                        </div>
                                        <div className='w-[45%] p-[2rem] bg-white rounded-[26px] flex flex-col gap-[0.5rem] caseStudyContainerBoxShadow'>
                                            <div className='text-[18px] text-[#4285f4] font-semibold text-center'>Solution</div>
                                            <div className='text-[16px] text-black font-normal'>{item.solution}</div>
                                        </div>
                                    </div>
                                    <div className='w-[95%] flex flex-row justify-between mt-[2rem]'>
                                        <div className='w-[30%] max-h-[17rem] p-[2rem] bg-white rounded-[26px] flex flex-col items-center gap-[0.5rem] caseStudyContainerBoxShadow'>
                                            <img src="/caseStudies/vehicle.png" className='w-[3.625rem] aspect-square' />
                                            <div className='text-[18px] text-[#4285f4] font-semibold text-center'>Services</div>
                                            <div className='flex flex-col'>
                                                {item.services.split(',').map((service, index) => (
                                                    <div key={index} className='text-[16px] text-black font-normal text-center'>{service}</div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className='w-[30%] max-h-[17rem] p-[2rem] bg-white rounded-[26px] flex flex-col items-center gap-[0.5rem] caseStudyContainerBoxShadow'>
                                            <img src="/caseStudies/web.png" className='w-[3.625rem] aspect-square' />
                                            <div className='text-[18px] text-[#4285f4] font-semibold text-center'>Platform</div>
                                            <div className='flex flex-col gap-[0.25rem] mt-[0.25rem]'>
                                                {item.platform.split(',').map((temp, index) => (
                                                    <div key={index} className='PlatformText'>{temp}</div>
                                                ))}
                                            </div>
                                        </div>
                                        
                                        <div className='w-[30%] max-h-[17rem] p-[2rem] bg-white rounded-[26px] flex flex-col items-center gap-[0.5rem] caseStudyContainerBoxShadow'>
                                            <img src="/caseStudies/tech-service.png" className='w-[3.625rem] aspect-square' />
                                            <div className='text-[18px] text-[#4285f4] font-semibold text-center'>Techstack</div>
                                            <div className='flex flex-row gap-[1.25rem]'>
                                                <div className='flex flex-col gap-[0.25rem]'>
                                                        {item.techstack.split(',').slice(0, Math.ceil(item.techstack.split(',').length/2)).map((stack, index) => (
                                                            <div key={index} className='techText text-center'>{stack}</div>
                                                        ))}
                                                </div>
                                                <div className='flex flex-col gap-[0.25rem]'>
                                                    {item.techstack.split(',').slice(Math.ceil(item.techstack.split(',').length/2), item.techstack.split(',').length).map((stack, index) => (
                                                        <div key={index} className='techText text-center'>{stack}</div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {item.clientSpeak?.length !== 0 && (
                                        <div className='testimonialContainer rounded-[26px] caseStudyContainerBoxShadow'>
                                            <div className='clientContainer border-none md:gap-4'>
                                                <div className='flex pt-6'>
                                                    <div className="challenges"><span className='font-semibold'> Clients Speak</span></div>
                                                </div>
                                                <div className='flex pt-2 flex-row md:gap-3'>
                                                <div className=""><i className="quotes"></i></div>

                                                    <div className='flex items-center'><span className='title whitespace-nowrap'>{item.name} - {item.designation}, </span><span className='title highlight '>{item.company}</span></div>
                                                </div>

                                                <div className="challengesContent pl-2 pr-2 flex-wrap pb-2">{item.clientSpeak}</div>
                                                <div className="flex justify-end"><i className="quotesEnd"></i></div>

                                            </div>
                                        </div>
                                    )}
                                    {item.referenceImage?.map((item: any, index: any) => (
                                        <div key={index} className="pl-5">
                                            <div className='flex items-center justify-center'>
                                                <img src={item.image} className='' />
                                            </div>
                                        </div>
                                    ))}
                                    {item.seperator}
                                </div>
                            </section>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}
