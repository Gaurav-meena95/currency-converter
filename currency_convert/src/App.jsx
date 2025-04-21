import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  let api = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/usd.json`
  async function apicalling() {
    try {
      let response = await fetch(api);
      let data  = await response.json();
      console.log(data.usd)
    } catch (error) {
      console.log('er')
    }
  }
  apicalling();
  return <></>;
}

export default App;
