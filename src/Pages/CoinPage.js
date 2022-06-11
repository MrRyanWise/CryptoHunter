import { Axios } from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'; 
import CoinInfo from '../components/CoinInfo';
import { SingleCoin } from '../config/api';
import { CryptoState } from '../CryptoContext';

const CoinPage = () => {
  const {id} = useParams();
  const [coin, setCoin] = useState();

  
  const {currency, symbol} = CryptoState();

  const fetchCoins = async () =>{
    const {data} = await Axios.get(SingleCoin(id));

    setCoin(data);
  }

  useEffect(() =>{
    fetchCoins();
  }, []);

  return (
    <div 
        style={{
          display:"flex",
          // [theme.breakpoints.down("md")] : {
          //   flexDirection:"column",
          //   alignItems:"center",
          // },
        }}
    >
       <div 
         style={{
           width:"30%",
          //  [theme.breakpoints.down("md")] : {
          //    width:"100%",
          //  },
           display:"flex",
           flexDirection:"column",
           alignItems:"center",
           marginTop:25,
           borderRight:"2px solid grey",
         }}
       >
      </div>

         <img 
            src={coin?.image.large}
            alt={coin?.name}
            height="200"
            style={{marginBottom:20}}
          />

       {/* Chart  */}
    <CoinInfo coin={coin} />


    </div>
  )
}

export default CoinPage