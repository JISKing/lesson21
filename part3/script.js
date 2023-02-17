number = prompt("Enter the number to multiply it:");
count = prompt("How many times to add the number 3?:");

function three(number, count) {
  return number + 3 * count;
}

alert(three(+number, +count));
