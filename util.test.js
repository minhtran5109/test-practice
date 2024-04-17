import {
  capitalise,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./util";
import { describe } from "node:test";

const str1 = "abc";
const str2 = "Hello World!";
const str3 = "abc!.&*";

test("capitalising a string", () => {
  expect(capitalise(str1)).toBe("ABC");
  expect(capitalise(str2)).toBe("HELLO WORLD!");
});

test("reversing a string", () => {
  expect(reverseString(str1)).toBe("cba");
  expect(reverseString(str2)).toBe("!dlroW olleH");
});

describe("calculator functions", () => {
  const a = 123;
  const b = 100;
  test("adding two number", () => {
    expect(calculator.add(a, b)).toEqual(223);
  });
  test("subtracting", () => {
    expect(calculator.subtract(a, b)).toEqual(23);
    expect(calculator.subtract(b, a)).toEqual(-23);
  });
  test("multiplying", () => {
    expect(calculator.multiply(a, b)).toEqual(12300);
  });
  test("dividing", () => {
    expect(calculator.divide(a, b)).toEqual(1.23);
    expect(calculator.divide(b, a)).toEqual(0.81);
  });
});

test("encoding a string with Ceasar cipher", () => {
  const shift = 13;
  expect(caesarCipher(str1, shift)).toBe("nop");
  // expect(caesarCipher(capitalise(str1), shift)).toBe("NOP");
  expect(caesarCipher(capitalise(str3), shift)).toBe("NOP!.&*");
  expect(caesarCipher(str2, shift)).toBe("Uryyb Jbeyq!");
});

test("analysing an array", () => {
  const array = [1, 8, 3, 4, 2, 6];
  const obj = analyzeArray(array);
  expect(obj.average).toEqual(4);
  expect(obj.min).toEqual(1);
  expect(obj.max).toEqual(8);
  expect(obj.length).toEqual(6);
});
