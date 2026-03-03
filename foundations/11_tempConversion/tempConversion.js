const convertToCelsius = function(temp, decimalPlaces = 1) {
  const factor = Math.pow(10, decimalPlaces);
  let convertedTemp = (temp - 32) * 5/9;
  return Math.round(convertedTemp * factor) / factor;
};

const convertToFahrenheit = function(temp, decimalPlaces = 1) {
  const factor = Math.pow(10, decimalPlaces);
  let convertedTemp = (temp * 9/5 + 32);
  return Math.round(convertedTemp * factor) / factor;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
