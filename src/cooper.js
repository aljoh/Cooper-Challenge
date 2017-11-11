objects = [
  {gender: "man", minAge: 13, maxAge: 14, aboveAverage: 2699, average: 2399, belowAverage: 2199},
  {gender: "man", minAge: 15, maxAge: 16, aboveAverage: 2799, average: 2499, belowAverage: 2299}
];

function evaluate(attr){
  this.age = attr.age;
  this.gender = attr.gender;
  this.distance = attr.distance;
  var object = objects.find(obj => this.age >= obj.minAge && this.age <= obj.maxAge);
  return findAssessment(object, this.distance);
}

function findAssessment(obj, distance) {
  if (distance > obj.aboveAverage) {
    return "Excellent";
  } else if (distance > obj.average) {
    return "Above Average";
  } else if (distance > obj.belowAverage) {
    return "Average";
  } else if (distance > obj.poor) {
    return "Below Average";
  } else if (distance < obj.poor) {
    return "Poor";
  }
}
