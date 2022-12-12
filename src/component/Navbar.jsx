import React, { useState, useEffect } from "react";

function Navbar(){
    const [theme, setTheme] = useState("light");

    useEffect(() => {
      if (theme ==="dark"){
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark')
      }
    }, [theme]);
  
    const handleThemeSwitch = () =>{
      setTheme(theme === "dark" ? "light" : "dark");
    };

    const handleClickScroll = (event) => {
        const element = document.getElementById(event.target.value);

        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };


    return( <div>

      <nav className="bg-white px-2 sm:px-4 py-2.0 dark:bg-black-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-400 backdrop-filter backdrop-blur-lg bg-opacity-20">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
          <div className="flex items-center">
          <button onClick={handleClickScroll} value="head" className="self-center tracking-[-.10em] text-2xl font-bold whitespace-nowrap dark:text-white py-3 pl-5 mb-1">vijaycheza.</button>
              {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" /> */}
              {/* <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-white  pl-5 mb-2">cheza's</span> */}
          </div>
          {/* <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false"> */}
          {/* <span className="sr-only">Open main menu</span> */}
          {/* <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg> */}
          {/* </button> */}
          {/* <div className="hidden w-full md:block md:w-auto" id="navbar-default"> */}
          <ul className="flex flex-row font-medium text-xs text-right mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:border-gray-500 mb-4 sm:mb-4 md:mb-0 lg:mb=0">
              <li>
              <button onClick={handleClickScroll} value="body-experience" className="py-2 px-2 rounded text-gray-700 dark:text-white hover:text-blue-300 dark:hover:text-blue-300 ">Experience</button>
              </li>
              <li>
              <button onClick={handleClickScroll} value="portfolio" className="py-2 px-2 rounded text-gray-700 dark:text-white hover:text-blue-300 dark:hover:text-blue-300 ">Projects</button>
              </li>
              <li>
              <button onClick={handleClickScroll} value="contact-me" className="py-2 px-2 rounded text-gray-700 dark:text-white hover:text-blue-300 dark:hover:text-blue-300 ">Contact</button>
              </li>

              <li>
                {/* <div className="mt-2 sm:mt-2 md:mt-0 lg:mt-0 pl-3 pr-4"> */}
                  <label class="inline-flex relative items-center cursor-pointer mt-1.5 ml-5 lg:mt-2 mr-2">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div onClick={handleThemeSwitch} className="w-9 h-5 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-gray-500 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white dark:after:bg-white-500 after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-dark-black"></div>
                    {/* <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle me</span> */}
                    </label>
                  {/* </div> */}
              </li>

          </ul>
          {/* </div> */}
      </div>
      </nav>

      </div>
    )
}

export default Navbar;