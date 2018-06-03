// Code your solution in this file!
function distanceFromHqInBlocks (someValue) {
  //returns the number of blocks given a value
  return (Math.abs(someValue - 42));
}

function distanceFromHqInFeet (someValue) {
  return 264*distanceFromHqInBlocks(someValue);
  // calls distanceFromHqInBlocks from inside the distanceFromHqInFeet function, passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  //the return value of distanceFromHqInBlocks can then be used to calculate feet
}

function distanceTravelledInFeet(someValue) {
  return (Math.abs(someValue - 42)*264);
  
}