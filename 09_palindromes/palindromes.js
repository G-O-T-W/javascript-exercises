const palindromes = function (str) {
  const regExp = /[a-zA-Z0-9]/;
  str = str.toLowerCase();
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    let ch = str.charAt(i);
    arr.push(ch);
  }
  arr = arr.filter(item => regExp.test(item));

  if ( arr.join('') === arr.reverse().join('')) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
