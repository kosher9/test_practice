const stringLength = require("./stringLength");

test("check string lenght", () => {
  expect(stringLength("hello")).toBe(5);
});

test("throw error if lenght is not between 1 and 10", () => {
  expect(() => {
    stringLength("");
  }).toThrow("String's length should be between 1 and 10");
});
