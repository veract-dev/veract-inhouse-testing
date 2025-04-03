'use client';
import React, { useState, useEffect } from 'react';


import DashboardDetails from './dashboardPortfolio';

import '../styles/styles.css';
import '../styles/mediaQuery.css'
import '../styles/testimonials.css';
import { usePathname, useSearchParams, useRouter } from 'next/navigation'

export default function PortfolioDetails() {

    const router = useRouter();
    const searchParams = useSearchParams()
    useEffect(() => {
        document.title = "Veract"
        const section = searchParams?.get("id") ?? "";
        console.log("from portfolio : ", section);
        if (section) {
            handleMenuClick(section);
        }
        // window.history.replaceState(null, '', '/customer-successPage')
    }, []);

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        console.log(section, "section to scroll");
        if (section) {
            section.scrollIntoView();
        }
    };

    const handleMenuClick = (sectionId: string) => {
        scrollToSection(sectionId);
    };


    const portfolio = [
        {
            id: 'content1',
            caseTitle: ' AI-enabled Edtech platform',
            caseTitleContent: 'Evolve is an edtech platform that revolutionizes augmented learning',
            stampImage: "",
            caseImage: '/portfolio/edTechCaseImage.png',
            challenges: 'A custom-built, voice-to-text enabled personalized AI coach',
            challengePoints: ' ',
            solution: 'Veract team designed and Developed a desktop app with integrated voice-to-text functionality.Implemented noise cancellation features.Included chat capabilities.',
            solutionPoints: '',
            services: 'Software architecture, Technology consulting,Front end development,Back end development,Deployment',
            platform: 'Desktop application',
            techstack: 'Next JS,Electron,NodeJS,MongoDB,Express,Elastic Search',
            name: "",
            designation: "",
            company: "",
            clientSpeak: "",
            seperator: <hr className='separatorPortfolio'></hr>,
            referenceImage: [
                {
                    id: 1,
                    image: '/output/updateEvo11veSitePoster.svg',
                }
            ]
        },
        {
            id: 'content2',
            caseTitle: 'Machine Vision for Manufacturing Quality Control',
            caseTitleContent: 'A sheet metal pressings manufacturing company.',
            stampImage: "/portfolio/artificial-intelligence.png",
            caseImage: '/factoryCase.png',
            challenges: 'Over 5 million pieces of parts must go through a comprehensive visual inspection each month. Hand inspection was tedious and, as inspector fatigue set in, accuracy levels dropped',
            challengePoints: '',
            solution: "Veract created a proprietary AI-powered visual inspection tool to increase productivity and stop problems with part rejections and recalls later on. For the manufacturer, the solution was a complete success due to its cost-effectiveness.",
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
            caseTitle: 'Health and Wellness Web and Mobile App',
            caseTitleContent: 'Anyo is a health and wellness app that addresses the significant issue of mental health.',
            stampImage: "",
            caseImage: '/portfolio/wellnessPurple.png',
            challenges: 'The founders of Anyo were looking for a one-stop shop for technical advice and development for their live chat-enabled platform with streaming audio, video along with chatbots.',
            challengePoints: '',
            solution: "Within five months, Veract's team of architects and developers created their four online portals and the Anyo mobile app making crucial choices on architecture, framework etc",
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
                {
                    id: 1,
                    image: '/output/anyoFinalOutput.png'
                },
                {
                    id: 2,
                    image: '/output/anyo_image.svg'
                }
            ]
        },
        {
            id: 'content4',
            caseTitle: 'Social platform for the fast-growing data center businesses.',
            caseTitleContent: 'Data Center Mart is an initiative of IBITS',
            stampImage: "",
            caseImage: '/portfolio/network.png',
            challenges: 'comprehensive platform tailored for the data center industry. This site will enable users to create posts, comment, like, and share content. Additionally, it will feature a marketplace for products and services and a directory of suppliers specializing in data center solutions.',
            challengePoints: ' ',
            solution: 'Developed a robust e-commerce  and social  platform tailored. The site features a robust backend system for managing product listings and user accounts. It includes functionalities like marketplace, quote requests, product filtering, and content management.',
            solutionPoints: '',
            services: 'Design Software architecture,Technology consulting,Front end development,Back end development,Deployment',
            platform: 'Web application',
            techstack: 'Next JS,Node JS,Mongo DB',
            name: "Bijoy KT",
            designation: "CEO",
            company: "Data Center Mart",
            clientSpeak: "Developed a robust e-commerce  and social  platform tailored. The site features a robust backend system for managing product listings and user accounts. It includes functionalities like marketplace, quote requests, product filtering, and content management.",
            seperator: <hr className='separatorPortfolio'></hr>
        },
        {
            id: 'content5',
            caseTitle: 'Quality Documentation for Metal Foundry',
            caseTitleContent: 'An automated quality report generation system was needed by the Grey Iron and Ductile Iron Foundry in order to submit reports to customers.',
            stampImage: "",
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
            caseTitle: 'Agriculture Finance Ecosystem Web Application ',
            caseTitleContent: 'Agrosperity KiVi is a phygital platform that makes it easy for farmers and other rural and agribusiness owners to obtain funds quickly and effectively.',
            stampImage: "",
            caseImage: '/portfolio/agriPurple.png',
            challenges: 'Kivi was seeking a development partner to fully assume responsibility for the design, development and implementation of Vision to text, Map interfaces for loan eligibility data, loan documents automation, dashboards with multiple authentication levels',
            challengePoints: '',
            solution: 'Veract architects set up the platform and assumed complete ownership of the product and made critical choices of architecture, framework to enable rapid development.',
            solutionPoints: '',
            services: 'Software architecture, Technology consulting, Software development, Deployment',
            platform: 'web',
            techstack: ' Java,Spring Boot,PostgreSQL,Nginx,Kafka,Elasticsearch,Google APIs,CI/CD,Angular,Kibana',
            name: "Salil Nair",
            designation: "CTO",
            company: "Agrosperity Tech Solutions",
            clientSpeak: "We engaged with Veract team from an early stage and they helped build out our 'KiViStar' App from basic day one concept. Their choice of architecture, framework and ability to deliver the product helped us go to market quickly. This helped us focus on our core work.",
            seperator: <hr className='separatorPortfolio'></hr>
        },
        {
            id: 'content7',
            caseTitle: 'E-commerce site for agricultural produce',
            caseTitleContent: 'Beanstalk operates in the exciting farm-to-table space',
            stampImage: "",
            caseImage: '/portfolio/grocery-store.png',
            challenges: 'Payment enabled E-COM site in time for customers produce season',
            challengePoints: ' ',
            solution: 'Veract team developed and deployed a payment enabled custom designed web application ',
            solutionPoints: '',
            services: 'Software architecture,Technology consulting,Front end development,Back end development ,Deployment',
            platform: 'Responsive web application',
            techstack: 'Next JS,Express,Node JS,Redis,PostgreSQL,Razorpay',
            name: "",
            designation: "",
            company: "",
            clientSpeak: "",
            seperator: <hr className='separatorPortfolio'></hr>,
            referenceImage: [
                {
                    id: 1,
                    image: '/output/updatedBeanstalkPoster.svg',
                }
            ]
        },
        {
            id: 'content8',
            caseTitle: 'Sales Enquiry and Quote Management',
            caseTitleContent: 'Rajdeep is a pune-based distributor of industrial products with multiple principals, multiple products, in multiple locations.',
            stampImage: "",
            caseImage: '/portfolio/salesPurple.png',
            challenges: "Salesman attrition, inconsistent data, quotation production and reporting were the client's pain concerns. Customer was searching for a solution that would operate with SAP integration and fit into their usual routine. On top is the complete offline functionality due to poor network connectivity phases.",
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
                    image: '/output/sales.png',
                }
            ]
        },
        {
            id: 'content9',
            caseTitle: 'Data extraction for the audit industry',
            caseTitleContent: 'Financial audit firm with over 100 associates',
            stampImage: "",
            caseImage: '/portfolio/invoice.png',
            challenges: 'Audit firm looking to reduce manual data entry processes required for compliance.',
            challengePoints: ' ',
            solution: 'Veract team developed and deployed a easy to use Large language model +OCR based custom trained data extraction capablity ',
            solutionPoints: '',
            services: 'Software architecture,Technology consulting,Front end development,Back end development ,Deployment',
            platform: 'Web application',
            techstack: 'Python,Fast API,Next JS,React JS',
            name: "",
            designation: "",
            company: "",
            clientSpeak: "",
            seperator: <hr className='separatorPortfolio'></hr>
        },
        {
            id: 'content10',
            caseTitle: ' Credit Risk Assessment and Risk Profiling ',
            caseTitleContent: 'Northern Arc Capital is a financial services platform that was established primarily to meet various credit needs of businesses and households that are underserved.',
            stampImage: "",
            caseImage: '/portfolio/fintechPurple.png',
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
            seperator: <div className="pb-16"></div>
        },
    ]
    
    const [manufacturingColor_1, setManufacturingColor_1] = useState('#7f7f7f');
    const [manufacturingImage_1, setManufacturingImage_1] = useState('/dashboard/manufacturingGrey.png');
    const [manufacturingColor_2, setManufacturingColor_2] = useState('#7f7f7f');
    const [manufacturingImage_2, setManufacturingImage_2] = useState('/dashboard/manufacturingGrey.png');
    const [wellnessColor, setWellnessColor] = useState('white');
    const [wellnessImage, setWellnessImage] = useState('/dashboard/wellnessWhite.png');
    const [salesColor, setSalesColor] = useState('#7f7f7f');
    const [salesImage, setSalesImage] = useState('/dashboard/salesGrey.png');
    const [agriColor, setAgriColor] = useState('#7f7f7f');
    const [agriImage, setAgriImage] = useState('/dashboard/agriGrey.png');
    const [hrColor, setHrColor] = useState('#7f7f7f');
    const [hrImage, setHrImage] = useState('/dashboard/hrGrey.png');
    const [finColor, setFinColor] = useState('#7f7f7f');
    const [finImage, setFinImage] = useState('/dashboard/finGrey.png');

    const [edTechColor, setEdTechColor] = useState('#7f7f7f');
    const [edTechImage, setEdTechImage] = useState('/portfolio/edTechTabImage.png');
    const [industrialPlatformColor, setIndustrialPlatformColor] = useState('#7f7f7f');
    const [industrialPlatformImage, setIndustrialPlatformImage] = useState('/portfolio/network (1).png');
    const [eComColor, setEcomColor] = useState('#7f7f7f');
    const [eComImage, setEcomImage] = useState('/portfolio/grocery-store (1).png');
    const [auditColor, setAuditColor] = useState('#7f7f7f');
    const [auditImage, setAuditImage] = useState('/portfolio/invoice (1).png');
    const [isVisible, setIsVisible] = useState(false);

    const section1 = () => {
        const windowHeight = window.innerHeight;
        const scrollPosition = window.scrollY;
        const middlePosition = scrollPosition + windowHeight * 0.75;

        const activeMenu = portfolio.find((item) => {
            const element = document.getElementById(item.id);
            if (element) {
                const elementTop = element.offsetTop;
                const elementBottom = elementTop + element.offsetHeight;
                return elementTop <= middlePosition && middlePosition <= elementBottom;
            }
            return false;
        });

        if (activeMenu) {

            activeMenu.id == 'content1' ? setEdTechColor("white") : setEdTechColor("#7f7f7f");
            activeMenu.id == 'content1' ? setEdTechImage('/portfolio/edTechTabImageSelected.png') : setEdTechImage('/portfolio/edTechTabImage.png');

            activeMenu.id == 'content2' ? setManufacturingColor_1("white") : setManufacturingColor_1("#7f7f7f");
            activeMenu.id == 'content2' ? setManufacturingImage_1("/dashboard/manufacturingWhite.png") : setManufacturingImage_1("/dashboard/manufacturingGrey.png");

            activeMenu.id == 'content3' ? setWellnessColor("white") : setWellnessColor("#7f7f7f");
            activeMenu.id == 'content3' ? setWellnessImage('/dashboard/wellnessWhite.png') : setWellnessImage('/dashboard/wellnessGrey.png');

            activeMenu.id == 'content4' ? setIndustrialPlatformColor("white") : setIndustrialPlatformColor("#7f7f7f");
            activeMenu.id == 'content4' ? setIndustrialPlatformImage("/portfolio/network (2).png") : setIndustrialPlatformImage("/portfolio/network (1).png");

            activeMenu.id == 'content5' ? setManufacturingColor_2("white") : setManufacturingColor_2("#7f7f7f");
            activeMenu.id == 'content5' ? setManufacturingImage_2("/dashboard/manufacturingWhite.png") : setManufacturingImage_2("/dashboard/manufacturingGrey.png");

            activeMenu.id == 'content6' ? setAgriColor("white") : setAgriColor("#7f7f7f");
            activeMenu.id == 'content6' ? setAgriImage("/dashboard/agriWhite.png") : setAgriImage("/dashboard/agriGrey.png");

            activeMenu.id == 'content7' ? setEcomColor("white") : setEcomColor("#7f7f7f");
            activeMenu.id == 'content7' ? setEcomImage("/portfolio/grocery-store (2).png") : setEcomImage("/portfolio/grocery-store (1).png");

            activeMenu.id == 'content8' ? setSalesColor("white") : setSalesColor("#7f7f7f");
            activeMenu.id == 'content8' ? setSalesImage("/dashboard/salesWhite.png") : setSalesImage("/dashboard/salesGrey.png");

            activeMenu.id == 'content9' ? setAuditColor("white") : setAuditColor("#7f7f7f");
            activeMenu.id == 'content9' ? setAuditImage("/portfolio/invoice (2).png") : setAuditImage("/portfolio/invoice (1).png");

            activeMenu.id == 'content10' ? setFinColor("white") : setFinColor("#7f7f7f");
            activeMenu.id == 'content10' ? setFinImage("/dashboard/finWhite.png") : setFinImage("/dashboard/finGrey.png");
        }
    }


    useEffect(() => {
        section1();
        window.addEventListener("scroll", section1);
    })

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
            <div className="desktopCaseStudy">
                <div id="portfolioDetails" className='fontFamily'>
                    <div className={`dashboard ${isVisible ? 'h-[86.75vh]' : 'h-[74.5vh]'}`} id="container" style={{ overflow: "auto" }}>
                        {/* <div className='menuDetails'> */}
                        <div className='menuRowDetails' onClick={() => handleMenuClick('content1')}>
                            <div><img src={edTechImage} className="w-8" /></div>
                            {/* <div className='relative'> */}
                                <div style={{ color: edTechColor }} className='flex items-center'>Ed Tech</div>
                                {/* <img src="/portfolio/ai_stamp.png" alt="" className='absolute top-0 right-0 w-[1rem] h-[1rem]' />
                            </div> */}
                        </div>
                        <div className='menuRowDetails ' onClick={() => handleMenuClick('content2')}>
                            <div><img src={manufacturingImage_1} className="w-8" /></div>
                            <div style={{ color: manufacturingColor_1 }} className='flex items-center'>Machine Vision</div>
                        </div>
                        <div className='menuRowDetails' onClick={() => handleMenuClick('content3')}>
                            <div><img src={wellnessImage} className="w-8" /></div>
                            <div style={{ color: wellnessColor }} className='flex items-center'>Wellness</div>
                        </div>
                        <div className='menuRowDetails' onClick={() => handleMenuClick('content4')}>
                            <div><img src={industrialPlatformImage} className="w-8" /></div>
                            <div style={{ color: industrialPlatformColor }} className='flex items-center text-left'>Social</div>
                        </div>
                        <div className='menuRowDetails ' onClick={() => handleMenuClick('content5')}>
                            <div><img src={manufacturingImage_2} className="w-8" /></div>
                            <div style={{ color: manufacturingColor_2 }} className='flex items-center'>Manufacturing</div>
                        </div>
                        <div className='menuRowDetails' onClick={() => handleMenuClick('content6')}>
                            <div><img src={agriImage} className="w-8" /></div>
                            <div style={{ color: agriColor }} className='flex items-center'>Agri Tech</div>
                        </div>
                        <div className='menuRowDetails' onClick={() => handleMenuClick('content7')}>
                            <div><img src={eComImage} className="w-8" /></div>
                            <div style={{ color: eComColor }} className='flex items-center'>E-Commerce</div>
                        </div>
                        <div className='menuRowDetails' onClick={() => handleMenuClick('content8')}>
                            <div><img src={salesImage} className="w-8" /></div>
                            <div style={{ color: salesColor }} className='flex items-center'>Sales</div>
                        </div>
                        <div className='menuRowDetails' onClick={() => handleMenuClick('content9')}>
                            <div><img src={auditImage} className="w-8" /></div>
                            <div style={{ color: auditColor }} className='flex items-center'>Audit</div>
                        </div>
                        <div className='menuRowDetails' onClick={() => handleMenuClick('content10')}>
                            <div><img src={finImage} className="w-8" /></div>
                            <div style={{ color: finColor }} className='flex items-center'>Fin Tech</div>
                        </div>
                        {/* </div> */}
                    </div>
                    {portfolio.map((item) => (
                        //  id={item.id}
                        <section key={item.id} id={item.id} >
                            <div className={`caseDetails ${item.id === 'content1' ? 'pt-[10%]' : 'pt-[5%]'}`}>
                                <div className='caseHeader'>
                                    <div className='caseHeaderIconContent '>
                                        <div className="flex flex-row-reverse">
                                        </div>
                                        <div className='caseHeaderTitle w-[80%] flex-wrap'>{item.caseTitle} </div>
                                        <div className='caseHeaderIcon'>{item.caseTitleContent}</div>
                                    </div>
                                    <div className='caseHeaderContent'><img src={item.caseImage} className='w-24 pt-5' /></div>
                                </div>
                                <div className='ChallengeSolutionContainer'>
                                    <div className='ChallengeContainer'>
                                        <div className="challenges">Challenges</div>
                                        <div className='challengesContent'>{item.challenges}</div>
                                        <div className='flex flex-col '>
                                            {item.challengePoints.split(',').map((challenge, index) => (
                                                <div key={index} className='challengePoints'>{challenge}</div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className='ChallengeContainer'>
                                        <div className="challenges">Solution</div>
                                        <div className='challengesContent'>{item.solution} </div>
                                        <div className='flex flex-col '>
                                            {item.solutionPoints.split(',').map((solution, index) => (
                                                <div key={index} className='solutionPoints'>{solution}</div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                {item.referenceImage?.map((item: any, index: any) => (
                                    <div key={index} className="pl-5">
                                        <div className='flex items-center justify-center'>
                                            <img src={item.image} className='' />
                                        </div>
                                    </div>
                                ))}
                                <div className='BottomContainer'>
                                    <div className='mainContainer'>
                                        <div className='serviceContainer'>
                                            <div className='ServiceImage'><img src="/caseStudies/vehicle.png" className='w-16' /></div>
                                            <div className='serviceHeader'>Services</div>
                                            <div className='flex flex-col'>
                                                {item.services.split(',').map((service, index) => (
                                                    <div key={index} className='challengePoints'>{service}</div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className='platformContainer'>
                                            <div className='ServiceImage pt-12'><img src="/caseStudies/web.png" className='w-16' /></div>
                                            <div className='serviceHeader'>Platform</div>

                                            {item.platform.split(',').map((temp, index) => (

                                                <div key={index} className='PlatformText'>{temp}</div>

                                            ))}
                                        </div>
                                    </div>
                                    <div className="techstackContainer">
                                        <div className='techImageTitle '>
                                            <div className='ServiceImage'><img src="/caseStudies/tech-service.png" className='w-16 pt-1' /></div>
                                            <div className='serviceHeader'>Techstack</div>
                                        </div>
                                        <div className='techContent '>
                                            {item.techstack.split(',').map((stack, index) => (

                                                <div key={index} className='techText'>{stack}</div>

                                            ))}
                                        </div>
                                    </div>
                                </div>
                                {/* {item.referenceImage?.map((item: any, index: any) => (
                                    <div key={index} className="pl-5">
                                        <div className='flex items-center justify-center'>
                                            <img src={item.image} className='' />
                                        </div>
                                    </div>
                                ))} */}

                                {item.clientSpeak?.length !== 0 && (
                                    <div className='testimonialContainer'>

                                        <div className='clientContainer md:gap-4'>
                                            <div className='flex pt-2'>
                                                <div className="challenges">Clients Speak</div>
                                            </div>
                                            <div className='flex pt-2 flex-row md:gap-3'>
                                                <div className=""><i className="quotes"></i></div>
                                                <div className='flex items-center'><span className='title whitespace-nowrap'>{item.name} - {item.designation}, </span><span className='title highlight '>{item.company}</span></div>
                                            </div>
                                            <div className="challengesContent pl-2 pr-2 flex-wrap pb-2">{item.clientSpeak}</div>
                                        </div>
                                    </div>
                                )}
                                {item.seperator}
                            </div>
                        </section>
                    ))}

                </div>
            </div>


            <div className="mobileCaseStudy">
                <div id="portfolioDetails" className='fontFamily'>
                    {portfolio.map((item) => (
                        <div key={item.id} className='caseDetails_mobile' id={item.id}>
                            <div className='caseHeader_mobile'>
                                <div className='caseHeaderTitle_mobile flex flex-wrap pl-5'>{item.caseTitle} </div>
                                <div className='caseHeaderIcon_mobile pt-5 pb-11 pl-5'>{item.caseTitleContent}</div>

                            </div>
                            <div className='ChallengeSolutionContainer_mobile'>
                                <div className='ChallengeContainer_mobile'>
                                    <div className="challenges_mobile">Challenges</div>
                                    <div className='challengesContent_mobile'>{item.challenges}</div>
                                    <div className='flex flex-col '>
                                        {item.challengePoints.split(',').map((challenge, index) => (
                                            <div key={index} className='challengePoints_mobile'>{challenge}</div>
                                        ))}
                                    </div>
                                </div>
                                <div className='ChallengeContainer_mobile'>
                                    <div className="challenges_mobile">Solution</div>
                                    <div className='challengesContent_mobile'>{item.solution} </div>
                                    <div className='flex flex-col '>
                                        {item.solutionPoints.split(',').map((solution, index) => (
                                            <div key={index} className='solutionPoints_mobile'>{solution}</div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className='BottomContainer_mobile pt-10'>
                                <div className='mainContainer'>
                                    <div className='serviceContainer_mobile'>
                                        <div className='ServiceImage'><img src="/caseStudies/vehicle.png" className='w-16' /></div>
                                        <div className='serviceHeader_mobile pt-2'>Services</div>
                                        <div className='serviceText_mobile pt-2'>Software architecture consulting </div>
                                        <div className='serviceText_mobile pt-2'>Software development</div>
                                        <div className='serviceText_mobile pt-2'>Deployment</div>
                                    </div>
                                    <div className='platformContainer_mobile'>
                                        <div className='ServiceImage'><img src="/caseStudies/web.png" className='w-16' /></div>
                                        <div className='serviceHeader_mobile pt-2'>Platform</div>
                                        <div className='PlatformText_mobile pt-2'>Mobile</div>
                                        <div className='PlatformText_mobile pt-2'>and</div>
                                        <div className='PlatformText_mobile pt-2'>Web applications</div>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-2.5 pl-5 pr-5 pb-10">
                                <div className="techstackContainer_mobile">
                                    <div className='techImageTitle_mobile pl-20 pr-20'>
                                        <div className='ServiceImage'><img src="/caseStudies/tech-service.png" className='w-16 pt-1' /></div>
                                        <div className='serviceHeader_mobile pt-2'>Techstack</div>
                                    </div>
                                    <div className='techContent_mobile'>
                                        {item.techstack.split(',').map((stack, index) => (

                                            <div key={index} className='techText_mobile'>{stack}</div>

                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="pb-5">
                                {item.clientSpeak?.length !== 0 && (
                                    <div className='testimonialContainer_mobile'>
                                        <div className='clientContainer md:gap-4'>
                                            <div className='flex pt-2'>
                                                <div className="challenges_mobile">Clients Speak</div>
                                            </div>
                                            <div className='flex pt-2 flex-col md:gap-3'>
                                                <div className="pb-5"><i className="quotes"></i></div>
                                                <div className='flex flex-col items-center pb-5'>
                                                    <div className='title_mobile whitespace-nowrap'>{item.name} - {item.designation}, </div>
                                                    <div className='title_mobile highlight pl-3'>{item.company}</div>
                                                </div>
                                            </div>
                                            <div className="challengesContent_mobile pl-2 pr-2 flex-wrap pb-2">{item.clientSpeak}</div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* {item.id === "content2" && (
                                <div className="pl-5">
                                    <div className='flex items-center justify-center'>
                                        <img src="/output/sales.png" className='' />
                                    </div>
                                </div>


                            )}
                            {item.id === "content1" && (
                                <div className="pl-5">
                                    <div className='flex items-center justify-center'>
                                        <img src="/output/anyoFinalOutput.png" className='' />
                                    </div>
                                </div>
                            )} */}
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}