import { useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrenyInfo"; 

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convert, setConvert] = useState(0);

  const currencyInfo = useCurrencyInfo(from);  
  const options = Object.keys(currencyInfo);   
  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convert);
    setConvert(amount);
  };

  const convertTheAmount = () => {
    setConvert(amount * currencyInfo[to]);  
  };

  return (
    <div className="container">
      <div className="converter-box">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convertTheAmount();
          }}
        >
          <div className="input-group">
            <InputBox
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setFrom(currency)}
              selectCurrency={from}
              onAmountChange={(amount) => setAmount(amount)}
            />
          </div>
          <button type="button" onClick={swap} className="swap-btn">
            Swap
          </button>
          <div className="input-group">
            <InputBox
              label="To"
              amount={convert}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              selectCurrency={to}
              amountDisable
              currencyDisable
            />
          <button type="submit" className="convert-btn">
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
