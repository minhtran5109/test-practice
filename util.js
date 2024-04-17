function capitalise(str) {
  return str.toUpperCase();
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

const calculator = {
  add: (a, b) => {
    return a + b;
  },
  subtract: (a, b) => {
    return a - b;
  },
  divide: (a, b) => {
    return Math.round((a / b) * 100) / 100;
  },
  multiply: (a, b) => {
    return a * b;
  },
};

function doShift(code, lower, upper, shift) {
  return String.fromCharCode(
    code + shift <= upper
      ? code + shift
      : ((code + shift) % upper) + (lower - 1)
  );
}

function caesarCipher(str, shift) {
  let arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    let code = str.charCodeAt(i);

    if (code >= 65 && code <= 90) {
      arr[i] = doShift(code, 65, 90, shift);
    } else if (code >= 97 && code <= 122) {
      arr[i] = doShift(code, 97, 122, shift);
    }
    // console.log(arr[i]);
  }
  return arr.join("");
}

function analyzeArray(arr) {
  const len = arr.length;
  const avg = arr.reduce((prev, cur) => prev + cur, 0) / len;
  return {
    average: avg,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: len,
  };
}

export { capitalise, reverseString, calculator, caesarCipher, analyzeArray };
