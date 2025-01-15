import { use, useEffect } from "react";
import { createContext, useState } from "react";


export const CoinContext = createContext();

const CoinContextProvider = ({ children }) => {

    const [allCoins, setAllCoins] = useState([])
    const [currency, setCurrency] = useState({
        name: 'usd',
        symbol: '$'
    })

    const fetchAllCoins = async () => {
        const options = {
            method: 'GET',
            headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-K2Tpp11awwTczfF58v9hkEmw'}
          };
          
          fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
            .then(res => res.json())
            .then(res => setAllCoins(res))
            .catch(err => console.error(err));
    }

    useEffect(() => {
        fetchAllCoins()
    }, [currency])


    const contextValue = {
        allCoins,
        currency,
        setCurrency
    }

    return (
        <CoinContext.Provider value={contextValue}>
            {children}
        </CoinContext.Provider>
    )
}

export default CoinContextProvider