// Learn forEach usage with Maps.
let recipeMap = new Map([
  ['cucumber', 500],
  ['tomatoes', 350],
  ['onion', 50],
]);

recipeMap.forEach((value, key) => console.log(key, value));
