import { useParams } from "react-router-dom";
import "./style.css"
import { useEffect, useState } from "react";
import DOMPurify from "dompurify";


const Coin = () => {

    const { id } = useParams();

    const [coinInfo, setCoinInfo] = useState([]);

    const url = `https://api.coingecko.com/api/v3/coins/${id}`;

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(url);
            if (!response.ok) {
              throw new Error("Error!");
            }
            const json = await response.json();
            setCoinInfo(json);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchData();
      }, [url]);

      console.log(coinInfo)

    return(
        <div className="coin-page">
            {coinInfo.length === 0 
                ?<h2>Loading...</h2> 
                :<div className="coin-container">
                    <div className="coin-ranking">
                        <img src={coinInfo.image.large} alt="coin icon" />
                        <h3>{coinInfo.name}</h3>
                        <p>Market Cap Rank: {coinInfo.market_cap_rank}</p>
                    </div>
                    <div className="coin-description">
                        <div className="coin-headings">
                            <h5>Price: <span className="green-text">${coinInfo.market_data.current_price.usd.toFixed(2)}</span></h5>
                            <h5>Symbol: <span>{coinInfo.symbol}</span></h5>
                            <h5>24h Change: <span className={
                                    parseFloat(coinInfo.market_data.price_change_percentage_24h) > 0 
                                    ? "green-text" 
                                    :"red-text"
                                }>
                                    {coinInfo.market_data.price_change_percentage_24h.toFixed(2)}%
                                </span>
                            </h5>
                        </div>
                        <p dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(
                        coinInfo.description ? coinInfo.description.en : ""
                        ),
                    }}></p>
                    </div>
                </div>
            }
            
        </div>
    )
}

export default Coin;
