const dataSet = {
    INR: 81,
    EUR: 0.91,
    GBP: 0.80,
    HKD: 7.85,
  };
  
  export default currency => {
    if (dataSet[currency]) {
      return Promise.resolve(dataSet[currency]);
    } else {
      return Promise.reject();
    }
  };
  