const convertToCelsius = function(fah) { 
  return Math.round((fah - 32) * (5 / 9) * 10) / 10;
};

const convertToFahrenheit = function(cel) {
  fah = (9.0 / 5) * cel + 32;
  if (Math.round(fah) == fah) {
    return Math.round(fah);
  } else {
    return Number.parseFloat(fah.toFixed(1));
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
