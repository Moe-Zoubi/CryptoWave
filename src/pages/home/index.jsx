import "./style.css";
import bitcoin from "../../images/coins/bitcoin.png";
import ethereum from "../../images/coins/ethereum.png";
import TrendingCoin from "../../components/TrendingCoin";


const Home = () => {


    return(
        <div className="home" id="home">
            <div className="home-title">
                <img src={bitcoin} alt="bitcoin icon" />
                <h1>TRACK AND TRADE <br/><span className="highlighted">CRYPTO CURRENCIES</span></h1>
                <img src={ethereum} alt="ethereum icon" />
            </div>
            <TrendingCoin />
        </div>
    )
}

export default Home;
