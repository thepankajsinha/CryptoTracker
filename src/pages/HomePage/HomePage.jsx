import React, { useContext, useEffect, useState } from 'react'
import "./HomePage.css"
import { CoinContext } from '../../context/CoinContext.jsx'

const HomePage = () => {

    const {allCoins, currency} = useContext(CoinContext);
    const [displayCoin, setDisplayCoin] = useState();

    useEffect(() => {
        setDisplayCoin(allCoins)
    }, [allCoins])

  return (
    <div className='home'>
        <div className="hero">
            <h1>Largest <br/> Crypto Marketplace</h1>
            <p>Welcome to the world's largest cryptocurrency marketplace. Sign up to explore more about cryptos.</p>
            <form action="">
                <input type="text" placeholder='Search crypto..' />
                <button type='submit'>Search</button>
            </form>
        </div>

        <div className="crypto-table">
            <div className="table-layout">
                <p>#</p>
                <p>Coins</p>
                <p>Price</p>
                <p style={{textAlign: "center"}}>24H Change</p>
                <p className='market-cap'>Market Cap</p>
            </div>
            {
                displayCoin && displayCoin.slice(0,10).map((coin, index) => (
                    <div className="table-layout" key={index}>
                        <p>{coin.market_cap_rank}</p>
                        
                        <div>
                            <img src={coin.image} alt="" />
                            <p>{coin.name + " - " + coin.symbol}</p>
                        </div>

                        <p>{currency.symbol} {coin.current_price.toLocaleString()}</p>

                        <p className={coin.price_change_percentage_24h > 0 ? "green" : "red"}>
                            {coin.price_change_percentage_24h.toFixed(2)} %
                        </p>

                        <p className='market-cap'>{currency.symbol} {coin.market_cap.toLocaleString()}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default HomePage