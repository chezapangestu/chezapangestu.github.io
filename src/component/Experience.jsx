import { motion } from "framer-motion";
import telkomLogo from "../pict/telkom-logo.png";
import himaifLogo from "../pict/himaif-logo.png";
import buildabotLogo from "../pict/buildabot-logo.png"
import copaLogo from "../pict/copa-logo.png";
import sqlLogo from "../pict/sql-logo.png";
import icyptionLogo from "../pict/icyption-logo.png";
import permibLogo from "../pict/permib-logo.png";
import ExperienceList from "./ExperienceList";

function Experience(){
    return(
        <section id="body-experience">
            <motion.div 
            className="next-section sm:small-body md:medium-body lg:large-body dark:bg-dark-black text-gray-800 dark:text-white pt-20 sm:pt28 md:pt-28 lg:pt-28 transition duration-300 ease-in-out"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 0.2}}
            >
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 sm:gap-10 lg:gap-16">
                    
                    <section id="work-experience">
                    <ol className="relative"> 
                        <div>                 
                            <h1 className="text-3xl font-bold font-mark">
                            Work Experience 
                            </h1>
                        </div>
                    <div className="border-l border-gray-200 dark:border-gray-700 ml-3.5">
                        <li className="mt-6 mb-10 ml-6">            
                            <span className="flex absolute left-0.5 justify-center items-center w-6 h-6 bg-white rounded-lg ring-8 ring-white dark:ring-night-500 dark:bg-white">
                                {/* <svg aria-hidden="true" className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg> */}
                                <img src={telkomLogo} alt="company-logo"></img>
                            </span>
                            <h3 className="flex items-center mb-1 text-lg font-semibold font-circular text-gray-900 dark:text-white">Web Developer Intern - Telkom Indonesia ITDRI<span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">Latest</span></h3>
                            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Mar 2022 - Jul 2022</time>
                            <p className="text-md text-justify font-medium font-circular text-gray-600 dark:text-gray-300">Working on SVCC (Smarteye Virtual Convention Center) is a project to sell SVCC products throughout Indonesia. SVCC's main goal is to combine immersive worlds with 360° panoramic merging and to present learning content for free. The application of SVCC products includes making an expo and also webinars. My area of responsibilities:</p>
                            <div role="list" className="list-disc text-justify space-y-2 pl-4 mt-3 text-sm">
                                <ExperienceList>Helping the SVCC 3-2 squad to achieve one of the best squads in SVCC project by increasing the MERIT score from 73.56 to 87.14 in 1 sprint (2 weeks).</ExperienceList>
                                <ExperienceList>Created six initial designs of Instagram feeds, which had an average of 53 likes per post and 343 engagements, which exceeded the objective key result of 10 likes per post and 100 engagements.</ExperienceList>
                                <ExperienceList>Help create golden circles, product concepts, and websites that allow squads to qualify for exclusive coaching three times in a row.</ExperienceList> 
                                <ExperienceList>Be able to emerge as the best squad at the checkpoint prototype website with a fully functional website deployed and hosted. The website that was built within three days completed the login, register, landing page, product order forms, and prototype page features which were divided into two products, namely virtual expos and webinars. Also, integrating chatbot crisp APIs and admin management pages (CMS) to manage product order form data.</ExperienceList>
                            </div>
                            <div className="mt-3">
                                <span className="bg-blue-200 text-blue-900 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">PHP</span>
                                <span className="bg-orange-200 text-orange-900 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">CodeIgniter4</span>
                            </div>
                            {/* <a href="#" className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"><svg className="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd"></path></svg> Download ZIP</a> */}
                        </li>
                        <li className="mb-10 ml-6">
                            <span className="flex absolute left-0.5 justify-center items-center w-6 h-6 bg-white rounded-lg ring-8 ring-white dark:ring-night-500 dark:bg-white">
                                {/* <svg aria-hidden="true" className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg> */}
                                <img src={telkomLogo} alt="company-logo"></img>
                            </span>
                            <h3 className="text-lg font-semibold font-circular text-gray-900 dark:text-white">Trainer Intern - Telkom Indonesia ITDRI</h3>
                            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Jul 2022 - Jun 2022</time>
                            <p className="text-md text-justify font-medium font-circular text-gray-600 dark:text-gray-300">Incorporated into the SMK Project at Al-Huda Sariwangi Vocational High School Tasikmalaya, Jawa Barat. The SMK project aims to increase the competitiveness and capability of SMK students so that they can see the digital talent potential of SMK students throughout Indonesia. Project SMK has 5 (five) main products, namely SmartEye VR, Sprinthink, Tomps, MyDigiLearn, and Ideabox. My area of responsibilities: </p>
                            <div role="list" className="list-disc text-justify space-y-2 pl-4 mt-3 text-sm">
                                <ExperienceList>Teaching 20 people divided into two groups to solve wicked problems around vocational school children by solving the Sprintthink method. Successfully raised one of the main topics, namely the MyHair application, the search app for the nearest barbershop, to be developed and made into an actual project</ExperienceList>
                                <ExperienceList>Create a virtual tour using the SmartEye VR product method to show the situation and internal conditions of Al Huda Sariwangi Vocational High School that have never been covered anywhere.</ExperienceList>  
                                <ExperienceList>Teaching students to use computers in school labs with product materials from MyDigiLearn, namely learning applications with interactive videos that contain soft skills for work, Ideabox, which is used as an innovative social media to convey ideas and collaborate to develop them, and also TOMPS which is an application for mobile and web-based project management to be able to manage and monitor a project anywhere and anytime.</ExperienceList>  
                                <ExperienceList>Looking for digital talent and succeeded in donating four students in the group to become the best talent in VR Smarteye learning.</ExperienceList>  
                            </div>
                            <div className="mt-3">
                                <span className="bg-gray-200 text-gray-900 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">SmartEye VR</span>
                                <span className="bg-yellow-200 text-yellow-900 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Sprinthink</span>
                            </div>
                            <div className="mt-1">
                                <span className="bg-red-200 text-red-900 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">MyDigiLearn</span>
                                <span className="bg-orange-200 text-orange-900 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Tomps</span>
                                <span className="bg-sky-200 text-sky-900 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Ideabox</span>
                            </div>
                        </li>
                        <li className="ml-6">
                            <span className="flex absolute left-0.5 justify-center items-center w-6 h-6 bg-white rounded-lg ring-8 ring-white dark:ring-night-500 dark:bg-white">
                                {/* <svg aria-hidden="true" className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg> */}
                                <img src={telkomLogo} alt="company-logo"></img>
                            </span>
                            <h3 className="text-lg font-semibold font-circular text-gray-900 dark:text-white">UX Research Intern - Telkom Indonesia DXB</h3>
                            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Jul 2021 - Aug 2021</time>
                            <div role="list" className="list-disc text-justify space-y-2 pl-4 text-sm">
                                <ExperienceList>Analyzing the Heuristic Evaluation on the LinkAja application to look for negative findings, determine the severity rating scale, and make a final report in the form of a conclusion and recommendations. Managed to find four negative findings.</ExperienceList>
                                <ExperienceList>Conducted usability testing with Surveymonkey and LookbackParticipate tools on five users who were previously new and had used the LinkAja application intending to see how the user's experience was in using the LinkAja application.</ExperienceList>  
                            </div>
                            <div className="mt-3">
                                <span className="bg-green-200 text-green-900 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">SurveyMonkey</span>
                                <span className="bg-blue-200 text-blue-900 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">LookbackParticipate</span>
                            </div>
                            <div className="mt-1">
                                <span className="bg-red-200 text-red-900 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">LinkAja</span>
                            </div>
                        </li>
                        </div>
                    </ol>
                    </section>
                    <section id="org-experience">
                    <ol className="relative">   
                        <div>               
                            <h1 className="text-3xl font-bold font-mark">
                                Organizational Experience 
                            </h1>
                        </div>
                    <div className=" border-l border-gray-200 dark:border-gray-700 ml-3.5">
                        <li className="mt-6 mb-10 ml-6">            
                            <span className="flex absolute left-0.5 justify-center items-center w-6 h-6 bg-white rounded-lg ring-8 ring-white dark:ring-night-500 dark:bg-white">
                                {/* <svg aria-hidden="true" className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg> */}
                                <img src={himaifLogo} alt="company-logo"></img>
                            </span>
                            <h3 className="flex items-center mb-1 text-lg font-semibold font-circular text-gray-900 dark:text-white">Secretary - Himpunan Mahasiswa S1 Informatika Telkom University<span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">Latest</span></h3>
                            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Jun 2021 - Mar 2022</time>
                            <div role="list" className="list-disc text-justify space-y-2 pl-4 text-sm ">
                                <ExperienceList>Recording minutes and documenting activities are covering 11 divisions.</ExperienceList>
                                <ExperienceList>Be in charge of the secretary regarding external affairs such as relations and establish cooperation with other external groups.</ExperienceList>  
                                <ExperienceList>Creating a complete database along with student personal information for 128 staff.</ExperienceList>  
                                <ExperienceList>Managed to organize 77 incoming and 83 outgoing letters during one complete management.</ExperienceList>  
                                <ExperienceList>Designing association logos, booklets, and Instagram feeds for association cabinet campaigns.</ExperienceList>  
                                <ExperienceList>Created 252 PPT slides which included a recapitulation of the performance results of 11 divisions and calculated the achievement of the realization of success parameters in percentage form.</ExperienceList>  
                            </div>
                            
                        </li>
                        <li className="mb-10 ml-6">
                            <span className="flex absolute left-0.5 justify-center items-center w-6 h-6 bg-white rounded-lg ring-8 ring-white dark:ring-night-500 dark:bg-white">
                                {/* <svg aria-hidden="true" className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg> */}
                                <img src={buildabotLogo} alt="company-logo"></img>
                            </span>
                            <h3 className="text-lg font-semibold font-circular text-gray-900 dark:text-white">Creative Graphic Designer Staff - BUILD A BOT</h3>
                            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Oct 2020 - Dec 2020</time>
                            <div role="list" className="list-disc text-justify space-y-2 pl-4 text-sm">
                                <ExperienceList>Graphic & design creator, content creator in social media build_a_bot2020.</ExperienceList>
                                <ExperienceList>Responsible for the communication, publication and documentation works of BUILD A BOT.</ExperienceList>  
                            </div>
                            <div className="mt-3">
                                <span className="bg-blue-200 text-blue-900 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">AdobePhotoshop</span>
                                <span className="bg-yellow-200 text-yellow-900 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">AdobeIlustrator</span>
                            </div>
                        </li>
                        <li className="mb-10 ml-6">
                            <span className="flex absolute left-0.5 justify-center items-center w-6 h-6 bg-white rounded-lg ring-8 ring-white dark:ring-night-500 dark:bg-white">
                                {/* <svg aria-hidden="true" className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg> */}
                                <img src={copaLogo} alt="company-logo"></img>
                            </span>
                            <h3 className="mb-1 text-lg font-semibold font-circular text-gray-900 dark:text-white">Creative Graphic Designer Staff - COPA Tel-U</h3>
                            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Oct 2020 - Dec 2020</time>
                            <div role="list" className="list-disc text-justify space-y-2 pl-4 text-sm">
                                <ExperienceList>Graphic & design creator, content creator in social media copa_telu.</ExperienceList>
                                <ExperienceList>Responsible for the communication, publication and documentation works of COPA Telkom University.</ExperienceList>  
                                <ExperienceList>Manage social media of copa_telu.</ExperienceList>  
                            </div>
                            <div className="mt-3">
                                <span className="bg-blue-200 text-blue-900 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">AdobePhotoshop</span>
                                <span className="bg-yellow-200 text-yellow-900 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">AdobeIlustrator</span>
                            </div>
                        </li>
                        <li className="mb-10 ml-6">
                            <span className="flex absolute left-0.5 justify-center items-center w-6 h-6 bg-white rounded-lg ring-8 ring-white dark:ring-night-500 dark:bg-white">
                                {/* <svg aria-hidden="true" className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg> */}
                                <img src={sqlLogo} alt="company-logo"></img>
                            </span>
                            <h3 className="mb-1 text-lg font-semibold font-circular text-gray-900 dark:text-white">Creative Graphic Designer Staff - Software Engineering Quality Leadership</h3>
                            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Sep 2020 - Nov 2020</time>
                            <div role="list" className="list-disc text-justify space-y-2 pl-4 text-sm">
                                <ExperienceList>Graphic & design creator, content creator in social media accounts.</ExperienceList>
                                <ExperienceList>Responsible for the communication, publication and documentation works of Software Engineering Quality Leadership 2020.</ExperienceList>  
                                <ExperienceList>Manage social media of Software Engineering Quality Leadership 2020.</ExperienceList>  
                            </div>
                            <div className="mt-3">
                                <span className="bg-blue-200 text-blue-900 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">AdobePhotoshop</span>
                                <span className="bg-yellow-200 text-yellow-900 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">AdobeIlustrator</span>
                            </div>
                        </li>
                        <li className="mb-10 ml-6">
                            <span className="flex absolute left-0.5 justify-center items-center w-6 h-6 bg-white rounded-lg ring-8 ring-white dark:ring-night-500 dark:bg-white">
                                {/* <svg aria-hidden="true" className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg> */}
                                <img src={icyptionLogo} alt="company-logo"></img>
                            </span>
                            <h3 className="mb-1 text-lg font-semibold font-circular text-gray-900 dark:text-white">Creative Graphic Designer Staff - Information Security and Programming Competition (iCyption)</h3>
                            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">May 2020 - Jul 2020</time>
                            <div role="list" className="list-disc text-justify space-y-2 pl-4 text-sm">
                                <ExperienceList>Making posters for a competition attended by more than 100+ students from all over universities in Indonesia.</ExperienceList>
                                <ExperienceList>Create assets consisting of icons on the competition website with the theme of competitive programming and capture the flag, favicon, statue with isometric designs, and twibbon, as well as the cover rules book of the competition to be used by all contest participants.</ExperienceList>  
                                <ExperienceList>Assisted in the publication and documentation of the first year's national Competitive programming and Captured the Flag competitions at Telkom University in conducting national-level programming competitions.</ExperienceList>  
                            </div>
                            <div className="mt-3">
                                <span className="bg-blue-200 text-blue-900 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">AdobePhotoshop</span>
                                <span className="bg-yellow-200 text-yellow-900 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">AdobeIlustrator</span>
                            </div>
                        </li>
                        <li className="mb-10 ml-6">
                            <span className="flex absolute left-0.5 justify-center items-center w-6 h-6 bg-white rounded-lg ring-8 ring-white dark:ring-night-500 dark:bg-white">
                                {/* <svg aria-hidden="true" className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg> */}
                                <img src={permibLogo} alt="company-logo"></img>
                            </span>
                            <h3 className="mb-1 text-lg font-semibold font-circular text-gray-900 dark:text-white">Creative Economy Staff - Perhimpunan Mahasiswa Bandung Telkom University (PERMIB)</h3>
                            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Aug 2020 - Feb 2021</time>
                            <div role="list" className="list-disc text-justify space-y-2 pl-4 text-sm">
                                <ExperienceList>Ensuring income for the organization in an attractive, creative and innovative way.</ExperienceList>
                                <ExperienceList>Branding and exposing the businesses that owned by this organization.</ExperienceList>  
                                <ExperienceList>Organize and manage gold investments.</ExperienceList>  
                            </div>
                            <div className="mt-3">
                                <span className="bg-blue-200 text-blue-900 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">AdobePhotoshop</span>
                                <span className="bg-green-200 text-green-900 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">Bibit</span>
                            </div>
                        </li>
                        <li className="ml-6">
                            <span className="flex absolute left-0.5 justify-center items-center w-6 h-6 bg-white rounded-lg ring-8 ring-white dark:ring-night-500 dark:bg-white">
                                {/* <svg aria-hidden="true" className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg> */}
                                <img src={himaifLogo} alt="company-logo"></img>
                            </span>
                            <h3 className="mb-1 text-lg font-semibold font-circular text-gray-900 dark:text-white">Media Information and Communication Staff - Himpunan Mahasiswa S1 Informatika Telkom University</h3>
                            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Mar 2020 - Feb 2021</time>
                            <div role="list" className="list-disc text-justify space-y-2 pl-4 text-sm">
                                <ExperienceList>Being in charge of the Open house, a big event introducing associations, laboratories, and community entities in the Informatics major to new students which 350+ new students successfully attended.</ExperienceList>
                                <ExperienceList>Be in charge of Seputar-IF which is information related to the world of informatics presented in the form of feeds and video posts on the Instagram platform which has managed to have an average of 110 likes and 1100+ viewers.</ExperienceList>  
                                <ExperienceList>Created a donation poster design for HIMA IF Cares Against Covid 19 which managed to raise funds of Rp. 10.151.173.</ExperienceList>  
                                <ExperienceList>Became the secretary of the MIK division who succeeded in documenting and recapitulating each division's internal plenary meeting online during a pandemic.</ExperienceList>  
                                <ExperienceList>Successfully made 187 designs in 1 year of management consisting of posters, certificates, Instagram feeds/stories, OA Lines, Youtube thumbnails, ppt slides.</ExperienceList>  
                            </div>
                            <div className="mt-3">
                                <span className="bg-blue-200 text-blue-900 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">AdobePhotoshop</span>
                                <span className="bg-purple-200 text-purple-900 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">AdobePremierePro</span>
                            </div>
                        </li>
                    </div>
                    </ol>
                    </section>
                </div>
            </motion.div>
        </section>
    )
}

export default Experience;