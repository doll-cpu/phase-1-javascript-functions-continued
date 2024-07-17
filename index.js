// code your solution here
// Function for Saturday fun
function saturdayFun(activity = 'roller-skate') {
  return `This Saturday, I want to ${activity}!`;
}

// Function for Monday work
function mondayWork(task = 'go to the office') {
  return `This Monday, I will ${task}.`;
}

// Function to wrap an adjective with flair
function wrapAdjective(flair = '*') {
  return function(adjective = 'special') {
    return `You are ${flair}${adjective}${flair}!`;
  };
}

// Example usage:
console.log(saturdayFun()); // "This Saturday, I want to roller-skate!"
console.log(saturdayFun('cook')); // "This Saturday, I want to cook!"

console.log(mondayWork()); // "This Monday, I will go to the office."
console.log(mondayWork('work from home')); // "This Monday, I will work from home."

const encouragingPromptFunction = wrapAdjective('!!!');
console.log(encouragingPromptFunction('a dedicated programmer')); // "You are !!!a dedicated programmer!!!!"

console.log(wrapAdjective('%')('a dedicated programmer')); // "You are %a dedicated programmer%!"
