
import './App.css';
import {Api} from "./Api/Api";
import {useEffect, useState} from "react";
import Coin from "./Coin";

function App() {

    const [data , setData] = useState([]);
    const [value , setValue] = useState('');
    // const [newdata , setNewData] = useState([]);

    useEffect(() => {
        const fetchapi = async () => {
            setData(await Api())
        }
        fetchapi()
    } , [])


    // console.log(data[0].current_price.toString().includes(1))

    const newdata = data.filter(item => item.name.toUpperCase().includes(value.toUpperCase()) || item.symbol.toUpperCase().includes(value.toUpperCase()) || item.current_price.toString().includes(value));
  return (

      <div>
          <div>
              <input className={"input-group-text m-auto mt-5 w-25 shadow"} placeholder={"Search"} value={value} onChange={event => setValue(event.target.value)}/>
          </div>
          <div className={"py-2 px-5"}>
              {
                  newdata.map(coin => <Coin
                      key={coin.id}
                      id={coin.id}
                      symbol={coin.symbol}
                      name={coin.name}
                      image={coin.image}
                      rang={coin.market_cap_change_percentage_24h}
                      price={coin.current_price}
                   />)
              }

          </div>
      </div>
  );
}

export default App;
