export function add(x, y) {
  return x + y;
}

export function subtract(x, y) {
  return x - y;
}

export function multiply(x, y) {
  return x * y;
}

export function divide(x, y) {
  if (y == 0) {
    return null;
  }
  return x / y;
}

export function power(base, exponent) {
  if (exponent < 0) {
    return power(1/base, -exponent);
  } else if (exponent == 0) {
    return 1;
  } else {
    return base * power(base, exponent-1);
  }
}

// 기본 모듈로 내보내기
export default {
  add: add,
  subtract: subtract,
  multiply: multiply,
  divide: divide,
  power : power
};
