import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';



function TrendingCoin() {

    const navigate = useNavigate();
    
    const url = `https://api.coingecko.com/api/v3/search/trending`;

    const [data, setData] = useState([]);

    function decimalPlace(amountText) {
        const amount = parseFloat(amountText.replace(/\$/g, ''));
    
        if (isNaN(amount)) {
            return "Invalid amount";
        }
    
        const roundedAmount = Math.round(amount * 100) / 100;
    
        const formattedAmount = roundedAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    
        return formattedAmount;
    }
    
    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch(url);
          const json = await response.json();
          setData(json);
        };
        fetchData();
      }, [url]);


    const topFourCoins = () => {
        let topFour = []
        if(data.coins !== undefined){
            for(let i = 0 ; i < 4 ; i++){
                topFour.push(data.coins[i].item)
            }
        }
        return topFour;
    }

    return(
        <div className="popular-coins">
            <div className="trending-container">
                {topFourCoins().map((coin) => (
                    <div className="coin" key={coin.coin_id} onClick={() => navigate(`/coin/:${coin.id}`)}>
                        <img src={coin.large} alt="coin icon" />
                        <div className="flex-trending">
                            <p>{coin.name}</p>
                            <p 
                            className={
                                parseFloat(coin.data.price_change_percentage_24h.usd.toFixed(2)) > 0 
                                ? "green-text" 
                                :"red-text"
                            }
                            >
                                {`${parseFloat(coin.data.price_change_percentage_24h.usd.toFixed(2))}%`}
                            </p>
                        </div>
                        <p>{`$${decimalPlace(coin.data.price)}`}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TrendingCoin;