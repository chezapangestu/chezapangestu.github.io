import React from "react";

function Contact(){
    return(
        <section id="contact-me">
                <div className="next-section sm:small-body md:medium-body lg:large-body dark:bg-dark-black dark:text-white pt-16 sm:pt28 md:pt-28 lg:pt-28">
                    <h1 className="text-3xl font-bold mb-6">
                    🔗 Contact me
                    </h1>
                        <div role="list" className="list-disc space-y-2 pl-4 text-sm sm:text-sm md:text-lg lg:text-lg">
                            <li className="text-gray-400 dark:text-white"><span className="text-gray-600 dark:text-white">Email: <a className="underline hover:text-black dark:hover:text-blue-300" href="mailto:vijaycheza@gmail.com">vijaycheza@gmail.com</a></span></li>
                            <li className="text-gray-400 dark:text-white"><span className="text-gray-600 dark:text-white">GitHub: <a className="underline hover:text-black dark:hover:text-blue-300" href="https://github.com/chezapangestu">github.com/chezapangestu</a></span></li>
                            <li className="text-gray-400 dark:text-white"><span className="text-gray-600 dark:text-white">Instagram: <a className="underline hover:text-black dark:hover:text-blue-300" href="https://www.instagram.com/vijaychez/">instagram.com/vijaychez/</a></span></li>
                            <li className="text-gray-400 dark:text-white"><span className="text-gray-600 dark:text-white">LinkedIn: <a className="underline hover:text-black dark:hover:text-blue-300" href="https://www.linkedin.com/in/vijaychezapangestu/">linkedin.com/in/vijaychezapangestu/</a></span></li>
                            <li className="text-gray-400 dark:text-white"><span className="text-gray-600 dark:text-white">Dribble: <a className="underline hover:text-black dark:hover:text-blue-300" href="https://dribbble.com/senimanmudakreatif">dribbble.com/senimanmudakreatif</a></span></li>
                        </div>
                            
                        {/* </ul>
                        <li class="text-gray-400"><span class="text-gray-600">Hand cut and sewn locally</span></li>

                        <li class="text-gray-400"><span class="text-gray-600">Dyed with our proprietary colors</span></li>

                        <li class="text-gray-400"><span class="text-gray-600">Pre-washed &amp; pre-shrunk</span></li>

                        <li class="text-gray-400"><span class="text-gray-600">Ultra-soft 100% cotton</span></li>
                        </ul> */}
                </div>
        </section>
    )
}

export default Contact;