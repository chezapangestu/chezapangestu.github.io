import React from "react";

function Footer(){
    const today = new Date();
    const year = today.getFullYear();
    return(
            <div class="text-gray-700 text-xs dark:bg-dark-black dark:text-white text-center pt-36 pb-10">
                © {year} Copyright:
                <a class="text-gray-800 dark:text-gray-500" href="https://github.com/chezapangestu"> vijaychezapangestu</a>
            </div>
    )
}

export default Footer;