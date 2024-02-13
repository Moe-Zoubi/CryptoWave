import bitcoin from "../images/coins/bitcoin.png";
import ethereum from "../images/coins/ethereum.png";

function Join(){


    return(
        <div className="join-us" id="join">
            <div className="join-title">
                <img src={bitcoin} alt="bitcoin icon" />
                <h2>JOIN US ON <br/><span className="highlighted">DISCORD</span></h2>
                <img src={ethereum} alt="ethereum icon" />
            </div>
            <p>Invest and manage all your crypto at one place.</p>
            <button>Join Via Discord</button>
        </div>
    )
}

export default Join;