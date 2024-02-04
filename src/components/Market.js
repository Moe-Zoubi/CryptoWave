import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';


function Market() {

    const navigate = useNavigate();

    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${currentPage}&sparkline=false&locale=en`;

    function currencyFormatter(amount) {
        return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }

    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch(url);
          const json = await response.json();
          setData(json);
        };
        fetchData();
      }, [url]);

console.log(data)

      const marketTable = () => {
        if(data !== undefined){
            return (
                <div className="table-container">
                  <table>
                    <thead>
                      <tr>
                        <th>Coin</th>
                        <th>Price</th>
                        <th>24h Change</th>
                        <th>Market Cap</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((coin) => (
                        <tr key={coin.id} className="coin-row" onClick={() => navigate(`/coin/:${coin.id}`)}>
                          <td>
                            <img src={coin.image} alt="coin icon" />
                            {coin.name}
                        </td>
                          <td>$ {parseFloat(coin.current_price).toFixed(2)}</td>
                          <td>
                              <span 
                              className={
                                  parseFloat(coin.market_cap_change_percentage_24h.toFixed(2)) > 0 
                                  ? "green-text" 
                                  :"red-text"
                              }>
                                 {parseFloat(coin.market_cap_change_percentage_24h).toFixed(2)} % 
                              </span>
                          </td>
                          <td>${currencyFormatter(coin.market_cap)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              );
        }
      };

    return(
        <div className="market">
            <h2>Market Update</h2>
            {marketTable()}
            <div className="page">
                <button className={currentPage === 1 ? "active" : "" } onClick={() => setCurrentPage(1)}>1</button>
                <button className={currentPage === 2 ? "active" : "" } onClick={() => setCurrentPage(2)}>2</button>
                <button className={currentPage === 3 ? "active" : "" } onClick={() => setCurrentPage(3)}>3</button>
                <button className={currentPage === 4 ? "active" : "" } onClick={() => setCurrentPage(4)}>4</button>
                <button className={currentPage === 5 ? "active" : "" } onClick={() => setCurrentPage(5)}>5</button>
            </div>
        </div>
    )
}

export default Market;