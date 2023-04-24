import React, { useState } from "react";
import "./App.css";
import CurrencyConverter from "./components/CurrencyConverter";

const App = () => {
  const [amount, setAmount] = useState(1);
  const [currency, setCurrency] = useState("INR");
  return (
    <div className="app">
      <h2>Convert US Dollars</h2>
      <input
        type="number"
        id="amount-to-convert"
        value={amount}
        onChange={e => setAmount(e.target.value)}
      />
      <select
        id="target-currency"
        value={currency}
        onChange={e => setCurrency(e.target.value)}
      >
        <option value="INR">Indian Rupees</option>
        <option value="EUR">Euro</option>
        <option value="GBP">British Pound</option>
        <option value="HKD">Hong Kong Dollar</option>
      </select>
      <CurrencyConverter amount={amount} currency={currency}>

     {({ error, result }) =>

    !error ? (
      <div id="result">
        {amount} USD = {result} {currency}
      </div>
       ) : (

        "<h3>We could not fetch any data</h3>"
  
      )
  
    }
  
  </CurrencyConverter>
    </div>
  );
};

export default App;
