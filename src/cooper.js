men = [
  {gender: "man", minAge: 13, maxAge: 14, aboveAverage: 2699, average: 2399, belowAverage: 2199, poor: 2100},
  {gender: "man", minAge: 15, maxAge: 16, aboveAverage: 2799, average: 2499, belowAverage: 2299, poor: 2200},
  {gender: "man", minAge: 17, maxAge: 19, aboveAverage: 2999, average: 2699, belowAverage: 2499, poor: 2300},
  {gender: "man", minAge: 20, maxAge: 29, aboveAverage: 2799, average: 2399, belowAverage: 2199, poor: 1600},
  {gender: "man", minAge: 30, maxAge: 39, aboveAverage: 2699, average: 2299, belowAverage: 1999, poor: 1500},
  {gender: "man", minAge: 40, maxAge: 49, aboveAverage: 2499, average: 2099, belowAverage: 1699, poor: 1400},
  {gender: "man", minAge: 50, maxAge: 99, aboveAverage: 2399, average: 1999, belowAverage: 1599, poor: 1300}
];
women = [
  {gender: "woman", minAge: 13, maxAge: 14, aboveAverage: 1999, average: 1899, belowAverage: 1599, poor: 1500},
  {gender: "woman", minAge: 15, maxAge: 16, aboveAverage: 2099, average: 1999, belowAverage: 1699, poor: 1600},
  {gender: "woman", minAge: 17, maxAge: 19, aboveAverage: 2299, average: 2099, belowAverage: 1799, poor: 1700},
  {gender: "woman", minAge: 20, maxAge: 29, aboveAverage: 2699, average: 2199, belowAverage: 1799, poor: 1500},
  {gender: "woman", minAge: 30, maxAge: 39, aboveAverage: 2499, average: 1999, belowAverage: 1699, poor: 1400},
  {gender: "woman", minAge: 40, maxAge: 49, aboveAverage: 2299, average: 1899, belowAverage: 1499, poor: 1200},
  {gender: "woman", minAge: 50, maxAge: 99, aboveAverage: 2199, average: 1699, belowAverage: 1399, poor: 1100}
];

function evaluate(person){
  if(person.gender == "man") {
    var ageGroup = men.find(obj => person.age >= obj.minAge && person.age <= obj.maxAge);
  } else if (person.gender == "woman") {
    var ageGroup = women.find(obj => person.age >= obj.minAge && person.age <= obj.maxAge);
  }
  return findAssessment(ageGroup, person.distance);
}

var findAssessment = function(obj, distance) {
  if (distance > obj.aboveAverage) {
    return "Excellent";
  } else if (distance > obj.average) {
    return "Above Average";
  } else if (distance > obj.belowAverage) {
    return "Average";
  } else if (distance >= obj.poor) {
    return "Below Average";
  } else if (distance < obj.poor) {
    return "Poor";
  }
};
