const capitalize = (string) => {
  if (typeof string !== "string") {
    throw new Error("Parameter should be a string");
  }
  return string.toUpperCase();
};

module.exports = capitalize;
