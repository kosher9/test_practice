const capitalize = require('./capitalized_str')

test("check if string is capitalize", () => {
  expect(capitalize("str")).toMatch("STR");
});

test("check if param is string", () => {
  expect(() => {
    capitalize(412);
  }).toThrow("Parameter should be a string");
});
