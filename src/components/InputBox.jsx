import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
}) {
  const amountID = useId();
  return (
    <div className="input-container">
      <label htmlFor={amountID}>{label}</label>
      <input
        id={amountID}
        type="number"
        placeholder="Amount"
        disabled={amountDisable}
        value={amount}
        onChange={(e) => onAmountChange(Number(e.target.value))}
      />
      <select
        value={selectCurrency}
        onChange={(e) => onCurrencyChange(e.target.value)}
        disabled={currencyDisable}
      >
        {currencyOptions.map((currency) => (
          <option key={currency} value={currency}>
            {currency.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}

export default InputBox;
