module.exports = function check(str, bracketsConfig) {
  let strBrackets = bracketsConfig.reduce((acc, cur) => acc + `|${isNaN(cur[0]) ? '\\' + cur[0] : cur[0]}${isNaN(cur[1]) ? '\\' + cur[1] : cur[1]}`, '');
  let reg = new RegExp(`(${strBrackets.slice(1)})`, 'g');
  for (let i = 0; i < str.length; i++) {
    if (reg.test(str)) {
      str = str.replace(reg, '');
      i--;
    }
  }
  return str.length ? false : true;
}