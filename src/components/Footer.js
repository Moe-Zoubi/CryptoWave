import { faDiscord, faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Footer(){


    return(
        <div className="footer">
            <div className="footer-socials">
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faDiscord} />
            </div>
            <p><span>Privacy</span><span>Terms Of Use</span></p>
        </div>
    )
}

export default Footer;