import React from "react";

function Contact(){
    return(
        <section id="contact-me">
                <div className="next-section sm:small-body md:medium-body lg:large-body dark:bg-dark-black text-gray-800 dark:text-white pt-16 sm:pt28 md:pt-28 lg:pt-28 transition duration-300 ease-in-out">
                    <h1 className="text-3xl font-bold">
                    Contact
                    </h1>
                    <p className="font-medium text-gray-500 dark:text-whity mt-3 mb-6">Here you can read my <a href="https://drive.google.com/file/d/1-yuIlOLMYUj93rSVWghbsw6Po97iTTlS/view?usp=share_link" className="underline">resume</a> and my other <a href="https://drive.google.com/file/d/1yhE8CMIRHGywiU8HV0e2ysp-4cVwuB2Y/view?usp=share_link" className="underline">editorial design</a>, and you can reach me at:</p>
                        <div role="list" className="list-disc space-y-2 pl-4 text-sm sm:text-sm md:text-lg lg:text-lg">
                            <li className="text-gray-400 dark:text-white"><span className="text-gray-600 dark:text-white">Email - <a className="underline hover:text-gold-500 dark:hover:text-gold-500" href="mailto:vijaycheza@gmail.com">vijaycheza@gmail.com</a></span></li>
                            <li className="text-gray-400 dark:text-white"><span className="text-gray-600 dark:text-white">GitHub - <a className="underline hover:text-gold-500 dark:hover:text-gold-500" href="https://github.com/chezapangestu">github.com/chezapangestu</a></span></li>
                            <li className="text-gray-400 dark:text-white"><span className="text-gray-600 dark:text-white">Instagram - <a className="underline hover:text-gold-500 dark:hover:text-gold-500" href="https://www.instagram.com/vijaychez/">instagram.com/vijaychez/</a></span></li>
                            <li className="text-gray-400 dark:text-white"><span className="text-gray-600 dark:text-white">LinkedIn - <a className="underline hover:text-gold-500 dark:hover:text-gold-500" href="https://www.linkedin.com/in/vijaychezapangestu/">linkedin.com/in/vijaychezapangestu/</a></span></li>
                            <li className="text-gray-400 dark:text-white"><span className="text-gray-600 dark:text-white">Dribble - <a className="underline hover:text-gold-500 dark:hover:text-gold-500" href="https://dribbble.com/senimanmudakreatif">dribbble.com/senimanmudakreatif</a></span></li>
                        </div>
                </div>
        </section>
    )
}

export default Contact;