/** @format */
// Ex- 1
const jonasObject = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthyear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  calcAge: function (birthyear) {
    return 2037 - birthyear;
  },
};
console.log(jonasObject.calcAge(1991));
console.log(jonasObject["calcAge"](1991));

// Ex -2
const jonasObject2 = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthyear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  calcAge: function () {
    return 2037 - this.birthyear;
  },
};
console.log(jonasObject2.calcAge());
// no need to write the value of birthyear because we used this keyword

// Ex -3
const jonasObject3 = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthyear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  calcAge: function () {
    this.age = 2037 - this.birthyear;
    return this.age;
  },
};
console.log(jonasObject3.calcAge.age);

//CHALLENGE
// Jonas is a 46 year old teacher and he has a driver's license

const jonasChallenge = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthyear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  calcAge: function () {
    this.age = 2037 - this.birthyear;
    return this.age;
  },

  getSummery: function () {
    return `${this.firstName} is a ${this.calcAge()} years old ${
      jonasChallenge.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's License`;
  },
};
console.log(jonasChallenge.getSummery());
