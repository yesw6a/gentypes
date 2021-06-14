// 值找对象
module.exports = (arrO = [], arrV = [], key = '') => {
  let map = new Map();
  const res = [];
  for (let i = 0; i < arrV.length; i++) {
    map.set(arrV[i], arrV[i]);
  }
  for (let j = 0; j < arrO.length; j++) {
    if (map.has(arrO[j][key])) {
      res.push(arrO[j]);
      continue;
    }
  }
  return res;
};
