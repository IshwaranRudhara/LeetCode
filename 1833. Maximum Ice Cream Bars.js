var maxIceCream = function (costs, coins) {
  costs.sort((a, b) => a - b);
  const len = costs.length;
  let count = 0;
  for (let i = 0; i < len; i++) {
    if (costs[i] <= coins) {
      count++;
      coins = coins - costs[i];
    } else {
      break;
    }
  }

  return count;
};
