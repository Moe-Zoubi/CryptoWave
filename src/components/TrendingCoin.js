import { useEffect, useState } from "react";



function TrendingCoin() {

    const url = `https://api.coingecko.com/api/v3/search/trending`;

    const [data, setData] = useState([]);
    const [loadApi, setLoadApi] = useState(true);

    function currencyFormatter(amount) {
        return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

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

    console.log(topFourCoins()[0])

    return(
        <div className="popular-coins">
            <div className="trending-container">
                {topFourCoins().map((coin) => (
                    <div className="coin" key={coin.coin_id}>
                        <img src={coin.large} alt="coin icon" />
                        <div className="flex-trending">
                            <p>{coin.name}</p>
                            <p 
                            className={
                                parseFloat(coin.data.price_change_percentage_24h.usd.toPrecision(3)) > 0 
                                ? "green-text" 
                                :"red-text"
                            }
                            >
                                {`${parseFloat(coin.data.price_change_percentage_24h.usd.toPrecision(3))}%`}
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