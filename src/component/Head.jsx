import React from "react";
import PEENGE from "../pict/PEENGE.png";
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Head(){
    return(
        <section id="head">
        <div className="default-body sm:small-body md:medium-body lg:large-body dark:bg-dark-black dark:text-white">
            <section id="head-about">
                <div className="grid grid-cols-1 pt-28 sm:pt-28 md:pt-28 lg:pt-32 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                    <div>
                        <p className="animate-pulse text-sm font-semibold pt-5">👋 currently looking for work</p>
                        <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold mt-6">
                            Vijay Cheza Pangestu
                        </h1>
                        <p className="font-semibold mt-6">is a front-end & software engineer web enthusiast. Passionate about creating products and experiences people love to use. </p>
                            {/* <h1 className="text-2xl mt-8"><em>Front-end Enthusiast</em></h1> */}
                        <div className="mt-6 mb-5">
                            {/* <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">Frontend</span> */}
                            <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900">JavaScript</span>
                            <span className="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">NodeJS</span>
                            <span className="bg-sky-200 text-sky-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-sky-200 dark:text-sky-800">ReactJS</span>
                        </div>
                        {/* <div className="mt-6 mb-5">
                            <span className="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">ExpressJS</span>
                            <span className="bg-orange-100 text-orange-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-orange-700 dark:text-orange-300">Svelte</span>
                            <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-900">Laravel</span>
                            <span className="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">CodeIgniter</span>
                        </div> */}
                        {/* <div className="flex space-x-4 mt-6">
                        <a href="https://www.google.com"><LinkedInIcon /></a>
                        <a href="https://www.google.com"><GitHubIcon /></a>
                        <a href="https://www.google.com"><WhatsAppIcon /></a>
                        </div> */}
                        {/* <span className="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">Dark</span>
                        <span className="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">Red</span>
                        <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-900">Indigo</span>
                        <span className="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900">Purple</span>
                        <span className="bg-pink-100 text-pink-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-pink-200 dark:text-pink-900">Pink</span> */}
                        
                    </div>
                    <div className="mx-auto my-auto sm:mx-auto sm:my-auto md:mx-auto md:my-auto lg:mx-auto lg:my-auto">
                        <img className="bg-auto" src={PEENGE} alt="avatar" />
                    </div>
                    
                </div>
                        <p className="leading-loose text-justify mt-10">
                        I am a graduate student of Telkom University, majoring in Informatics. Throughout college, I discovered my enthusiasm for Web Programming courses. Since then I have studied and focused on website programming.
                        <br /><br />
                        It didn't end there, during my studies I joined many committees and organizations related to design. I also work on website projects. One of the big projects that I have created is the viral. Live website which aims to brand viral products and sell Smarteye Virtual Convention Center (SVCC) products, namely Webinar & Virtual Expo during my internship in PT. Telkom Indonesia in its position as Web developer. The results of the website that I created were able to bring my team (ViReal SVCC 3-2) to become the best team in the SVCC project. 
                        <br /><br />
                        Departing from combining web programming courses and then experience while making designs in committees/organizations and participating in internships, I was able to create a software/website product that has design values by product rules that always keep up with the times.
                        </p>
            </section>
            
            <section id="body-experience">
                <div className="pt-20 sm:pt28 md:pt-28 lg:pt-28">
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 sm:gap-10 lg:gap-16">
                    
                    <section id="work-experience">
                    <ol className="relative"> 
                        <div>                 
                            <h1 className="text-3xl font-bold">
                                Work Experience 📐
                            </h1>
                        </div>
                    <div className="border-l border-gray-200 dark:border-gray-700">
                        <li className="mt-6 mb-10 ml-6">            
                            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                <svg aria-hidden="true" className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                            </span>
                            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Trainer<span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">Latest</span></h3>
                            <p className="dark:text-blue-300">Telkom Indonesia ITDRI</p>
                            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Jul 2022 - Aug 2022</time>
                            <p className="text-sm text-justify font-normal text-gray-500 dark:text-gray-400">
                            The SMK project aims to increase the competitiveness and capability of SMK students so that they can see the digital talent potential of SMK students throughout Indonesia. Project SMK has 5 (five) main products, namely SmartEye, Sprinthink, Tomps, MyDigiLearn, and Ideabox. SmartEye is a digital service provider through the development of virtual reality and augmented reality to provide immersive experiences. Sprintthink is a service provider of mindset transformation and problem solving delivered through training, workshops, or training of trainers. Next, Tomps is a project management tool based on mobile applications and websites that can facilitate the management of a project. MyDigiLearn is a learning platform developed to accommodate corporate learning. Lastly, Ideabox is a website-based application that functions as an innovation crowdsource.
                            </p>
                            {/* <a href="#" className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"><svg className="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clip-rule="evenodd"></path></svg> Download ZIP</a> */}
                        </li>
                        <li className="mb-10 ml-6">
                            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                <svg aria-hidden="true" className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                            </span>
                            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Web Developer Intern</h3>
                            <p className="dark:text-blue-300">Telkom Indonesia ITDRI</p>
                            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Mar 2022 - Jul 2022</time>
                            <p className="text-sm text-justify font-normal text-gray-500 dark:text-gray-400">Working on SVCC (Smarteye Virtual Convention Center) is a project to sell SVCC products throughout Indonesia. SVCC's main goal is to combine immersive worlds with 360° panoramic merging and to present learning content for free. The application of SVCC products includes making an expo and also webinars. In its efforts to develop this, Project SVCC collaborates with five helixes, including the government, universities and academics</p>
                        </li>
                        <li className="ml-6">
                            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                <svg aria-hidden="true" className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                            </span>
                            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Ux Research Intern</h3>
                            <p className="dark:text-blue-300">Telkom Indonesia DXB</p>
                            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Jul 2021 - Aug 2021</time>
                            <div role="list" className="list-disc text-justify space-y-2 pl-4 text-sm">
                                <li className="mb-4 font-normal text-gray-500 dark:text-gray-400">Perform usability testing (UT) and heuristic evaluation (HE) on the application Linkaja Telkom Group</li>
                                <li className="mb-4 font-normal text-gray-500 dark:text-gray-400">Knowing the results of implementing usability testing and heuristic evaluation on the Linkaja Telkom Group application against users</li>  
                            </div>
                        </li>
                        </div>
                    </ol>
                    </section>
                    <section id="org-experience">
                    <ol className="relative">   
                        <div>               
                            <h1 className="text-3xl font-bold">
                                Organizational Experience 📐
                            </h1>
                        </div>
                    <div className=" border-l border-gray-200 dark:border-gray-700">
                        <li className="mt-6 mb-10 ml-6">            
                            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                <svg aria-hidden="true" className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                            </span>
                            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Secretary <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">Latest</span></h3>
                            <p className="dark:text-blue-300">Himpunan Mahasiswa S1 Informatika Telkom University</p>
                            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Jun 2021 - Mar 2022</time>
                            <div role="list" className="list-disc text-justify space-y-2 pl-4 text-sm ">
                                <li className="font-normal text-gray-500 dark:text-gray-400">Responsible and coordinate to the Chair and Deputy Chairperson of HIMA IF</li>
                                <li className="font-normal text-gray-500 dark:text-gray-400">Responsible for and coordinate to the Secretary of each division of BPH HIMA IF</li>  
                                <li className="font-normal text-gray-500 dark:text-gray-400">Making Standard Operating Procedures (SOP) for BPH HIMA IF Secretariat effectively</li>  
                                <li className="font-normal text-gray-500 dark:text-gray-400">Document proposals, accountability reports, incoming and outgoing correspondence from BPH HIMA IF then recap the work program schedule of BPH HIMA IF</li>  
                                <li className="font-normal text-gray-500 dark:text-gray-400">Recap the results of the core meeting and the plenary meeting of BPH HIMA IF</li>  
                            </div>
                            
                        </li>
                        <li className="mb-10 ml-6">
                            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                <svg aria-hidden="true" className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                            </span>
                            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Creative Graphic Designer Staff</h3>
                            <p className="dark:text-blue-300">BUILD A BOT</p>
                            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Oct 2020 - Dec 2020</time>
                            <div role="list" className="list-disc text-justify space-y-2 pl-4 text-sm">
                                <li className="font-normal text-gray-500 dark:text-gray-400">Graphic & design creator, content creator in social media build_a_bot2020</li>
                                <li className="font-normal text-gray-500 dark:text-gray-400">Responsible for the communication, publication and documentation works of BUILD A BOT</li>  
                            </div>
                        </li>
                        <li className="ml-6">
                            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                <svg aria-hidden="true" className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                            </span>
                            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Creative Graphic Designer Staff</h3>
                            <p className="dark:text-blue-300">COPA Tel-U</p>
                            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Oct 2020 - Dec 2020</time>
                            <div role="list" className="list-disc text-justify space-y-2 pl-4 text-sm">
                                <li className="font-normal text-gray-500 dark:text-gray-400">Graphic & design creator, content creator in social media copa_telu</li>
                                <li className="font-normal text-gray-500 dark:text-gray-400">Responsible for the communication, publication and documentation works of COPA Telkom University</li>  
                                <li className="font-normal text-gray-500 dark:text-gray-400">Manage social media of copa_telu</li>  
                            </div>
                        </li>
                        <li className="mb-10 ml-6">
                            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                <svg aria-hidden="true" className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                            </span>
                            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Creative Graphic Designer Staff</h3>
                            <p className="dark:text-blue-300">Software Engineering Quality Leadership 2020</p>
                            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Sep 2020 - Nov 2020</time>
                            <div role="list" className="list-disc text-justify space-y-2 pl-4 text-sm">
                                <li className="font-normal text-gray-500 dark:text-gray-400">Graphic & design creator, content creator in social media accounts</li>
                                <li className="font-normal text-gray-500 dark:text-gray-400">Responsible for the communication, publication and documentation works of Software Engineering Quality Leadership 2020</li>  
                                <li className="font-normal text-gray-500 dark:text-gray-400">Manage social media of Software Engineering Quality Leadership 2020</li>  
                            </div>
                        </li>
                        <li className="mb-10 ml-6">
                            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                <svg aria-hidden="true" className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                            </span>
                            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Creative Graphic Designer Staff</h3>
                            <p className="dark:text-blue-300">Information Security and Programming Competition (iCyption) 2020</p>
                            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">May 2020 - Jul 2020</time>
                            <div role="list" className="list-disc text-justify space-y-2 pl-4 text-sm">
                                <li className="font-normal text-gray-500 dark:text-gray-400">Graphic & design creator, content creator in social media accounts</li>
                                <li className="font-normal text-gray-500 dark:text-gray-400">Responsible for the communication, publication and documentation works of iCyption</li>  
                                <li className="font-normal text-gray-500 dark:text-gray-400">Manage social media of iCyption</li>  
                            </div>
                        </li>
                        <li className="mb-10 ml-6">
                            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                <svg aria-hidden="true" className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                            </span>
                            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Creative Economy Staff</h3>
                            <p className="dark:text-blue-300">Perhimpunan Mahasiswa Bandung Telkom University (PERMIB) </p>
                            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Aug 2020 - Feb 2021</time>
                            <div role="list" className="list-disc text-justify space-y-2 pl-4 text-sm">
                                <li className="font-normal text-gray-500 dark:text-gray-400">Ensuring income for the organization in an attractive, creative and innovative way</li>
                                <li className="font-normal text-gray-500 dark:text-gray-400">Branding and exposing the businesses that owned by this organization</li>  
                                <li className="font-normal text-gray-500 dark:text-gray-400">Organize and manage gold investments</li>  
                            </div>
                        </li>
                        <li className="ml-6">
                            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                <svg aria-hidden="true" className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                            </span>
                            <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Media Information and Communication Staff</h3>
                            <p className="blue-300 dark:text-blue-300">Himpunan Mahasiswa S1 Informatika Telkom University</p>
                            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Mar 2020 - Feb 2021</time>
                            <div role="list" className="list-disc text-justify space-y-2 pl-4 text-sm">
                                <li className="font-normal text-gray-500 dark:text-gray-400">Make SOP for information distribution structurally and efficiently</li>
                                <li className="font-normal text-gray-500 dark:text-gray-400">Managing BPH HIMA IF Telkom University media (himaiftelkomuniv)</li>  
                                <li className="font-normal text-gray-500 dark:text-gray-400">As a distributor of information for S1 Informatics students at Telkom University</li>  
                                <li className="font-normal text-gray-500 dark:text-gray-400">Create creative content to publish as needed</li>  
                                <li className="font-normal text-gray-500 dark:text-gray-400">Doing work documentation of BPH HIMA IF Telkom University</li>  
                            </div>
                        </li>
                    </div>
                    </ol>
                    </section>
                </div>
                </div>
            </section>
            
      </div>
      </section>
    )
}

export default Head;