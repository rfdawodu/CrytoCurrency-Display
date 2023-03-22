import React, { useState, useEffect } from "react";
import "./App.css";
// import { useState } from "react";

export default function App() {
  const [btcData, setBtcData] = useState({});

  const fetchUrl = () => {
    fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`)
      .then((res) => res.json())
      .then((jsonData) => setBtcData(jsonData.bpi.USD))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchUrl();
  }, []);
  return Object.keys(btcData).length !== 0 ? (
    <div className="App">
      <h1>Current BTC/USD data</h1>
      <div>
        <h3>Data returned:</h3>
      </div>

      <p>Code:{btcData.code}</p>
      <p>Symbol: {btcData.symbol}</p>
      <p>Rate: {btcData.rate}</p>
      <p>Description: {btcData.description}</p>
      <p>Rate Float: {btcData.rate_float}</p>
    </div>
  ) : (
    <h3>Data pending...</h3>
  );
}
