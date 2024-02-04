import "./style.css";
import bitcoin from "../../images/coins/bitcoin.png";
import ethereum from "../../images/coins/ethereum.png";
import TrendingCoin from "../../components/TrendingCoin";
import Market from "../../components/Market";


const Home = () => {


    return(
        <div className="home" id="home">
            <div className="hero">
                <div className="home-title">
                    <img src={bitcoin} alt="bitcoin icon" />
                    <h1>TRACK AND TRADE <br/><span className="highlighted">CRYPTO CURRENCIES</span></h1>
                    <img src={ethereum} alt="ethereum icon" />
                </div>
                <TrendingCoin />
            </div>
            <Market />
        </div>
    )
}

export default Home;
