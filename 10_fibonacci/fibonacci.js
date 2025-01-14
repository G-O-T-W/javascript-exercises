const fibonacci = function(index) {
  index = parseInt(index);
  let t1 = 1;
  let t2 = 1;
  let sum = 0;
  if (index == 0) {
    return 0;
  } else if (index < 0) {
    return "OOPS";
  } else if (index == 1 || index == 2) {
    return t1;
  } else {
    for (let i = 3; i <= index; i++) {
        sum = t1 + t2;
        t1 = t2;
        t2 = sum;
        if (i === index) {
            return sum;
        }
    }
  } 
};

// Do not edit below this line
module.exports = fibonacci;
