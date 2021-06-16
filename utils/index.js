// 判断 obj 是否为 json 对象
exports.isJson = (obj) => {
  const isJson =
    typeof obj === 'object' &&
    Object.prototype.toString.call(obj).toLowerCase() === '[object object]' &&
    !obj.length;
  return isJson;
};

// 值找对象
exports.valueFindObject = (arrO = [], arrV = [], key = '') => {
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
