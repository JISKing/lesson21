function maxNumber(a, b) {
  a = prompt("First Number:");
  b = prompt("Second Number");

  a = +a;
  b = +b;

  if (a > b) {
    return a;
  } else if (a < b) {
    return b;
  } else {
    return `${a} = ${b}`;
  }
}

alert(maxNumber());
