import React from "react";
import { motion } from "framer-motion"

function Contact(){
    return(
        <section id="contact-me">
                <motion.div 
                className="default-body sm:small-body md:medium-body lg:large-body text-gray-800 dark:text-white pt-20 sm:pt28 md:pt-28 lg:pt-28 transition duration-300 ease-in-out"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                >
                    <h1 className="text-3xl font-bold font-mark">
                    About Me
                    </h1>
                    <p className="leading-loose font-circular text-lg text-justify text-gray-500 dark:text-whity mt-3 mb-6">
                        I am a graduate student of <a href="https://telkomuniversity.ac.id/" className="underline">Telkom University</a>, majoring in Informatics. Throughout college, I discovered my enthusiasm for Web Programming courses. Since then I have studied and focused on website programming.
                        <br /><br />
                        It didn't end there, during my studies I joined many committees and organizations related to design. I also work on website projects. One of the big projects that I have created is the <a href="http://vireal.live/" className="underline">ViReal</a>. Live website which aims to brand ViReal products and sell <a href="https://svcc.io/" className="underline">Smarteye Virtual Convention Center (SVCC)</a> products, namely Webinar & Virtual Expo during my internship in <a href="https://www.telkom.co.id/sites" className="underline">PT. Telkom Indonesia</a> in its position as Web developer. The results of the website that I created were able to bring my team <a href="https://www.instagram.com/virealbysvcc/" className="underline">(ViReal SVCC 3-2)</a> to become the best team in the SVCC project. 
                        <br /><br />
                        Departing from combining web programming courses and then experience while making designs in committees/organizations and participating in internships, I was able to create a software/website product that has design values by product rules that always keep up with the times.
                    </p>
                    <h1 className="text-3xl font-bold font-mark">
                    Contact
                    </h1>
                    <p className="font-medium font-circular text-lg text-gray-500 dark:text-whity mt-3 mb-6">Here you can read my <a href="https://drive.google.com/file/d/1-yuIlOLMYUj93rSVWghbsw6Po97iTTlS/view?usp=share_link" className="underline">resume</a> and my other <a href="https://drive.google.com/file/d/1yhE8CMIRHGywiU8HV0e2ysp-4cVwuB2Y/view?usp=share_link" className="underline">editorial design</a>, and you can reach me at:</p>
                        <div role="list" className="list-disc space-y-2 pl-4 text-sm sm:text-sm md:text-lg lg:text-lg">
                            <li className="text-gray-400 font-circular dark:text-white"><span className="text-gray-600 dark:text-white">Email - <a className="underline hover:text-gold-500 dark:hover:text-gold-500" href="mailto:vijaycheza@gmail.com">vijaycheza@gmail.com</a></span></li>
                            <li className="text-gray-400 font-circular dark:text-white"><span className="text-gray-600 dark:text-white">GitHub - <a className="underline hover:text-gold-500 dark:hover:text-gold-500" href="https://github.com/chezapangestu">chezapangestu</a></span></li>
                            <li className="text-gray-400 font-circular dark:text-white"><span className="text-gray-600 dark:text-white">Instagram - <a className="underline hover:text-gold-500 dark:hover:text-gold-500" href="https://www.instagram.com/vijaychez/">vijaychez</a></span></li>
                            <li className="text-gray-400 font-circular dark:text-white"><span className="text-gray-600 dark:text-white">LinkedIn - <a className="underline hover:text-gold-500 dark:hover:text-gold-500" href="https://www.linkedin.com/in/vijaychezapangestu/">vijaychezapangestu</a></span></li>
                            <li className="text-gray-400 font-circular dark:text-white"><span className="text-gray-600 dark:text-white">Dribble - <a className="underline hover:text-gold-500 dark:hover:text-gold-500" href="https://dribbble.com/senimanmudakreatif">senimanmudakreatif</a></span></li>
                        </div>
                </motion.div>
        </section>
    )
}

export default Contact;