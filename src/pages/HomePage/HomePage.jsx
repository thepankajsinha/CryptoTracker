import React, { useContext, useEffect, useState } from 'react'
import "./HomePage.css"
import { CoinContext } from '../../context/CoinContext.jsx'
import { Link } from 'react-router-dom';

const HomePage = () => {

    const {allCoins, currency} = useContext(CoinContext);
    const [displayCoin, setDisplayCoin] = useState();
    const [input, setInput] = useState('');

    const inputHandler = (e) => {
        setInput(e.target.value)
        if(e.target.value === '') setDisplayCoin(allCoins)
    }

    const searchHandler = async (e) => {
        e.preventDefault();
        const filteredCoins = allCoins.filter(coin => coin.name.toLowerCase().includes(input.toLowerCase()))
        setDisplayCoin(filteredCoins)
    }

    useEffect(() => {
        setDisplayCoin(allCoins)
    }, [allCoins])

  return (
    <div className='home'>
        <div className="hero">
            <h1>Largest <br/> Crypto Marketplace</h1>
            <p>Welcome to the world's largest cryptocurrency marketplace. Sign up to explore more about cryptos.</p>
            <form onSubmit={searchHandler}>
                <input onChange={inputHandler} value={input} type="text" placeholder='Search crypto..' required/>
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
                    <Link to={`/coin/${coin.id}`} className="table-layout" key={index}>
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
                    </Link>
                ))
            }
        </div>
    </div>
  )
}

export default HomePage