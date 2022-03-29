const stringLength = (string) => {
  if(string < 1 || string > 10){
    throw new Error("String's length should be between 1 and 10")
  }
  return string.length;
}

module.exports = stringLength;
