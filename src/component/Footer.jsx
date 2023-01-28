import React from "react";

function Footer(){
    const today = new Date();
    const year = today.getFullYear();
    return(
            <div className="text-gray-700 text-xs dark:text-white text-center pt-36 pb-10 transition duration-300 ease-in-out">
                © {year} Copyright:
                <a className="text-gray-800 dark:text-gray-500" href="https://github.com/chezapangestu"> vijaychezapangestu</a>
            </div>
    )
}

export default Footer;