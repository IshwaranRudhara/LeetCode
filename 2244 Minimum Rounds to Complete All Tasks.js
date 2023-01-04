// https://leetcode.com/problems/minimum-rounds-to-complete-all-tasks/description/

/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function (tasks) {
  let map = {};
  let ans = 0;
  for (let e of tasks) {
    if (!map[e]) {
      map[e] = 1;
    } else {
      map[e] += 1;
    }
  }
  for (let e in map) {
    if (map[e] == 1) {
      return -1;
    } else {
      ans += Math.ceil(map[e] / 3);
    }
  }
  return ans;
};
