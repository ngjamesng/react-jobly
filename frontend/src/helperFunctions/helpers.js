function addCommas(num) {
  //I chose to reverse the string/array. I find it easier to work with this way.
  const arr = [...String(num)].reverse();
  //find out if the number is negative. We'll need the prefix later.
  let prefix = arr[arr.length - 1] === "-"
    ? arr.pop()
    : "";

  //here, we start building our string to return.
  let output = "";
  for (let i = 0; i < arr.length; i++) {
    //if the index is divisible by three and not 0th index, then add a comma
    if (i % 3 === 0 && i !== 0) output = "," + output;
    output = arr[i] + output;
  }
  return prefix + output;
}

export { addCommas };