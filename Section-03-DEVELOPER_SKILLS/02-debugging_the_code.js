/** @format */

const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    value: Number(prompt("Degrees celsius")),
  };
  //   console.log(measurement);
  console.table(measurement);

  const kelvin = measurement.value + 237;
  return kelvin;
};
console.log(measureKelvin());
