/** @format */

// PROBLEM -1
/*
we work for a vompany building a smart home thermometer. Our most recent task is this: 
"Given an array of temperature of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error".
*/

const temperature = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// 1- understanding the problem
// - what is temp amplitute ? answer: defference between highest and lowest temp
// -how to compute max and min temperature
// -what's a sensor error and what to do ?

// 2- breaking up into sub-problems
// -how to ignore errors ?
// -find max value in temp array
// -find min value in temp array
// -subtract min from max (amplitute) and return it

const calcTempAmplitute = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];

    if (typeof currentTemp !== "number") continue;

    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }
  console.log(max, min);
};
const amplitute = calcTempAmplitute(temperature);
console.log(amplitute);

// PROBLEM -2
// function should recieve to arrays of temps

// understanding the problem
// -with 2 arrays, should we implement fuctionality twich ? No, just merge two arrays

// Breaking into sub-problems
// -Merge 2 arrays

calcTempAmplituteNew = function (arr1, arr2) {
  const temps = arr1.concat(arr2);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];

    if (typeof temps[i] !== "number") continue;

    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplituteNew = calcTempAmplituteNew([2, 5, 3, 9], [9, 3, 5, 8]);
console.log(amplituteNew);
