function stringChop(str, size) {
  let res = [];
  if (str === null) {
    return res;
  }

  let startIndex = 0;
  let endIndex = 0;

  while (endIndex < str.length) {
    startIndex = endIndex;
    endIndex = startIndex + Number(size);

    if (endIndex > str.length) {
      endIndex = str.length;
      
    }

    res.push(str.substring(startIndex, endIndex));
  }
  return res;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
