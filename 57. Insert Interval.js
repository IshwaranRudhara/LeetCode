var insert = function (oldI, newI) {
  let temp = [...oldI];
  temp.push(newI);
  temp.sort((a, b) => a[0] - b[0]);
  let ans = [];
  temp.forEach((e) => {
    if (ans.length === 0 || ans[ans.length - 1][1] < e[0])
      ans.push(e); // [...[2,3]]->e:[4,5]
    else ans[ans.length - 1][1] = Math.max(ans[ans.length - 1][1], e[1]); // [...[2,5]]->e:[3,5]
  });
  return ans;
};
