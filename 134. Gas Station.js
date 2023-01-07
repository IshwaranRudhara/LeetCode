var canCompleteCircuit = function (gas, cost) {
  const len = gas.length;

  let tank = 0;
  let s = 0;
  let diff = 0;
  for (let i = 0; i < len; i++) {
    tank = gas[i] - cost[i] + tank;
    if (tank < 0) {
      s = i + 1;
      diff = diff + tank;
      tank = 0;
    }
  }

  return tank + diff >= 0 ? s : -1;
};
