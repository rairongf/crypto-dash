import React from 'react';
import './style.css';
import { useParams, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { coinMarketDataState } from './states';

export default function DashboardPage() {
  let navigate = useNavigate();
  const { username } = useParams();
  const [coinMarketData, setCoinMarketData] = useRecoilState(coinMarketDataState);

  function signOut() {
    navigate('/', { replace: true })
  }

  async function onOptionClicked(e) {
    const coin = e.target.value;
    const response =
      await fetch(`https://api.coingecko.com/api/v3/coins/${coin}`)
        .then(response => response.json());
    const marketData = response['market_data'];
    const currentPrice = marketData['current_price'];
    const high24h = marketData['high_24h'];
    const low_24h = marketData['low_24h'];
    setCoinMarketData({
      current_price: {
        brl: currentPrice['brl'],
        usd: currentPrice['usd']
      },
      high_24h: {
        brl: high24h['brl'],
        usd: high24h['usd']
      },
      low_24h: {
        brl: low_24h['brl'],
        usd: low_24h['usd']
      },
    });
  }

  return (
    <div id='dashboard-page'>
      <header id='dashboard-header'>
        <div><h2>{username}</h2></div>
        <div><button onClick={signOut}>Sair</button></div>
      </header>
      <main id='dashboard-main'>
        <div className='title'><h1>Dashboard</h1></div>
        <div className='subtitle'><h2>Selecione uma das opções abaixo:</h2></div>
        <div id='grid-container'>
          <div id='option'><button value={'bitcoin'} onClick={onOptionClicked}>Bitcoin</button></div>
          <div id='option'><button value={'ethereum'} onClick={onOptionClicked}>Ethereum</button></div>
          <div id='option'><button value={'dogecoin'} onClick={onOptionClicked}>Dogecoin</button></div>
          <div id='option'><button value={'binancecoin'} onClick={onOptionClicked}>BNB</button></div>
        </div>
        <div id='table-container'>
          <table className='table'>
            <tr>
              <td className='table-header top-left'></td>
              <td className='table-header'>Preço atual</td>
              <td className='table-header'>Menor preço em 24h</td>
              <td className='table-header top-right'>Maior preço em 24h</td>
            </tr>
            <tr>
              <td className='table-header'>Em reais</td>
              <td>{coinMarketData.current_price.brl}</td>
              <td>{coinMarketData.high_24h.brl}</td>
              <td>{coinMarketData.low_24h.brl}</td>
            </tr>
            <tr>
              <td className='table-header bottom-left'>Em dólar</td>
              <td>{coinMarketData.current_price.usd}</td>
              <td>{coinMarketData.high_24h.usd}</td>
              <td>{coinMarketData.low_24h.usd}</td>
            </tr>
          </table>
        </div>
      </main>
    </div>
  );
}