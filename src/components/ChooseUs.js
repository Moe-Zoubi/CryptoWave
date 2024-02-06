import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileCircleCheck, faImagePortrait, faLayerGroup, faPen, faSackDollar, faWallet } from "@fortawesome/free-solid-svg-icons";



function ChooseUs(){


    return(
        <div className="choose-us">
            <h2>Why <span className="highlighted">Choose Us</span></h2>
            <div className="choose-container">
                <div className="col">
                    <div className="service">
                        <div className="service-icon"><FontAwesomeIcon icon={faSackDollar} /></div>
                        
                        <div className="service-description">
                            <h3>TAKE A MARKET TO SELL</h3>
                            <p>Discover, collect the right crypto collections to buy or sell.</p>
                        </div>
                    </div>
                    <div className="service">
                        <div className="service-icon"><FontAwesomeIcon icon={faFileCircleCheck} /></div>
                        <div className="service-description">
                            <h3>CONFIRM TRANSACTION</h3>
                            <p>Earn by selling your crypto on our marketplace.</p>
                        </div>
                    </div>
                    <div className="service">
                        <div className="service-icon"><FontAwesomeIcon icon={faLayerGroup} /></div>
                        <div className="service-description">
                            <h3>DRIVE YOUR COLLECTION</h3>
                            <p>We make it easy to Discover, Invest and manage.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="service">
                        <div className="service-icon"><FontAwesomeIcon icon={faPen} /></div>
                        <div className="service-description">
                            <h3>SELECT YOUR QUANTITY</h3>
                            <p>Upload your crypto and set a title, description and price.</p>
                        </div>
                    </div>
                    <div className="service">
                        <div className="service-icon"><FontAwesomeIcon icon={faWallet} /></div>
                        <div className="service-description">
                            <h3>CONNECT YOUR WALLET</h3>
                            <p>Use Trust Wallet, Metamask or to connect to the app.</p>
                        </div>
                    </div>
                    <div className="service">
                        <div className="service-icon"><FontAwesomeIcon icon={faImagePortrait} /></div>
                        <div className="service-description">
                            <h3>RECEIVE YOUR OWN NFTS</h3>
                            <p>Invest all your crypto at one place on one platform.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ChooseUs;