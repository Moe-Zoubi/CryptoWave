import twitter from "../images/socials/twitter.png";
import discord from "../images/socials/discord.png";

function Navbar(){


    return(
        <div className="navbar">
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