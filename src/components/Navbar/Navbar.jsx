import React, { useContext } from 'react'
import "./Navbar.css"
import { ArrowUpRight } from 'lucide-react';
import { CoinContext } from '../../context/CoinContext';

const Navbar = () => {

  const {setCurrency} = useContext(CoinContext);

  const currencyChangeHandler = (e) => {
    switch(e.target.value) {
      case 'usd': {
        setCurrency({ name: 'usd', symbol: '$' })
        break;
      }

      case 'eur': {
        setCurrency({ name: 'eur', symbol: '€' })
        break;
      }

      case 'inr': {
        setCurrency({ name: 'inr', symbol: '₹' })
        break;
      }

      default: {
        setCurrency({ name: 'usd', symbol: '$' })
        break
    }
  }
}

  return (
    <div className='navbar'>
        <div className="nav-left">
            <h1 className='logo'>CryptoTracker</h1>
        </div>


        <div className="nav-right">
            <select onChange={currencyChangeHandler}>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="inr">INR</option>
            </select>

            <button>Signup <ArrowUpRight/> </button>
        </div>

    </div>
  )
}

export default Navbar