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
      <div>
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convertTheAmount();
            }}
          >
            <div>
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)} 
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div>
              <button type="button" onClick={swap}>
                swap
              </button>
            </div>
            <div>
              <InputBox
                label="To"
                amount={convert}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to} 
                amountDisable
                currencyDisable
              />
            </div>
            <button type="submit">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
