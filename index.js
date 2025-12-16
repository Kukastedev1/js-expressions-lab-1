//! Start by creating the variables for the data recorded
//* Then work on the conversion of the temperature from Celsius to Fahrenheit (or viceversa)

// Temperature data (as recorded)
const day1TempF = 32;
const day2TempC = 25;
const day3TempF = 70;
const day4TempC = 18;
const day5TempF = 80;
const day6TempC = 15;
const day7TempF = 72;
const day8TempC = 28;
const day9TempF = 68;
const day10TempC = 20;
const day11TempF = 75;
const day12TempC = 23;
const day13TempF = 82;
const day14TempC = 30;
const day15TempF = 65;
const day16TempC = 22;
const day17TempF = 77;
const day18TempC = 26;
const day19TempF = 78;
const day20TempC = 24;
const day21TempF = 73;
const day22TempC = 21;
const day23TempF = 79;
const day24TempC = 27;
const day25TempF = 71;
const day26TempC = 19;
const day27TempF = 74;
const day28TempC = 17;
const day29TempF = 76;
const day30TempC = 29;

// Conversion formulas (as required)
const convertFtoC = (tempInFahrenheit) => (tempInFahrenheit - 32) * 5 / 9;
const convertCtoF = (tempInCelsius) => (tempInCelsius * 9 / 5) + 32;


//! Start the calculation of the total temperatures
//* Then apply the conversion to calculate the total in the other unit of measurement
//* Call the variables: tot_temperature_in_fahrenheit and tot_temperature_in_celsius

const tot_temperature_in_fahrenheit =
  day1TempF +
  convertCtoF(day2TempC) +
  day3TempF +
  convertCtoF(day4TempC) +
  day5TempF +
  convertCtoF(day6TempC) +
  day7TempF +
  convertCtoF(day8TempC) +
  day9TempF +
  convertCtoF(day10TempC) +
  day11TempF +
  convertCtoF(day12TempC) +
  day13TempF +
  convertCtoF(day14TempC) +
  day15TempF +
  convertCtoF(day16TempC) +
  day17TempF +
  convertCtoF(day18TempC) +
  day19TempF +
  convertCtoF(day20TempC) +
  day21TempF +
  convertCtoF(day22TempC) +
  day23TempF +
  convertCtoF(day24TempC) +
  day25TempF +
  convertCtoF(day26TempC) +
  day27TempF +
  convertCtoF(day28TempC) +
  day29TempF +
  convertCtoF(day30TempC);

const tot_temperature_in_celsius =
  convertFtoC(day1TempF) +
  day2TempC +
  convertFtoC(day3TempF) +
  day4TempC +
  convertFtoC(day5TempF) +
  day6TempC +
  convertFtoC(day7TempF) +
  day8TempC +
  convertFtoC(day9TempF) +
  day10TempC +
  convertFtoC(day11TempF) +
  day12TempC +
  convertFtoC(day13TempF) +
  day14TempC +
  convertFtoC(day15TempF) +
  day16TempC +
  convertFtoC(day17TempF) +
  day18TempC +
  convertFtoC(day19TempF) +
  day20TempC +
  convertFtoC(day21TempF) +
  day22TempC +
  convertFtoC(day23TempF) +
  day24TempC +
  convertFtoC(day25TempF) +
  day26TempC +
  convertFtoC(day27TempF) +
  day28TempC +
  convertFtoC(day29TempF) +
  day30TempC;


//! Start the calculation of the average temperatures
//* Call the variables: avg_temperature_in_fahrenheit and avg_temperature_in_celsius

const avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / 30;
const avg_temperature_in_celsius = tot_temperature_in_celsius / 30;


//! Console.log the results for your own inspection if you'd like
// console.log(tot_temperature_in_fahrenheit);
// console.log(tot_temperature_in_celsius);
// console.log(avg_temperature_in_fahrenheit);
// console.log(avg_temperature_in_celsius);


//! After creating the four variables mentioned above, uncomment the following lines
//* This way you can export them to the test file, this is essential for the tests to work

module.exports = {
  tot_temperature_in_fahrenheit,
  tot_temperature_in_celsius,
  avg_temperature_in_fahrenheit,
  avg_temperature_in_celsius
};
