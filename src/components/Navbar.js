import twitter from "../images/socials/twitter.png";
import discord from "../images/socials/discord.png";
import { useState } from "react";

function Navbar(){

    const [navBg, setNavBg] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 150) {
            setNavBg(true);
        } else {
            setNavBg(false);
        }
      };

      window.addEventListener("scroll", handleScroll);

    return(
        <div className={navBg ? "navbar nav-bg" : "navbar"} >
            <div className="nav-container">
                <h3>CRYPTOWAVE</h3>
                <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#market">Market</a></li>
                    <li><a href="#join">Join</a></li>
                </ul>
                <div className="nav-socials">
                    <img src={twitter} alt="twitter icon" />
                    <img src={discord} alt="discord icon"/>
                </div>
            </div>
        </div>
    )
}

export default Navbar;