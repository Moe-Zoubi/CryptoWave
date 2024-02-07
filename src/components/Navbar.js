import twitter from "../images/socials/twitter.png";
import discord from "../images/socials/discord.png";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

function Navbar(){

    const navigate = useNavigate();


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
                <h3 onClick={() => navigate(`/home`)}>CRYPTOWAVE</h3>
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