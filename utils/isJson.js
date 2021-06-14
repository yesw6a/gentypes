// 判断 obj 是否为 json 对象
module.exports = (obj) => {
  const isJson =
    typeof obj === 'object' &&
    Object.prototype.toString.call(obj).toLowerCase() === '[object object]' &&
    !obj.length;
  return isJson;
};
