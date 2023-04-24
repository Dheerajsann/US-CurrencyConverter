import { useState, useEffect } from "react";
import getRates from "../services/getRates";

const CurrencyConverter = ({ amount, currency, children }) => {

    const [result, setResult] = useState(1);
  
    const [error, setError] = useState(null);
  
    useEffect(() => {
  
      getRates(currency)
  
        .then(rate => {
  
          setResult(rate * amount);
  
          setError(null);
  
        })
  
        .catch(() => {
  
          setError(true);
  
          setResult(1);
  
        });
  
    }, [amount, currency]);
  
    return children({ error, result });
  
  };
  
   
  
  export default CurrencyConverter;