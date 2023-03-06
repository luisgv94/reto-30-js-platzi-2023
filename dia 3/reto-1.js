function isLeapYear(year) {
  const isPositiveIntNumber = year % 1 === 0 && year > 0;
  const isDivisible4 = year % 4 === 0;
  const isDivisible100 = year % 100 == 0;
  const isDivisible400 = year % 400 == 0;
  return (
    isPositiveIntNumber && isDivisible4 && (!isDivisible100 || isDivisible400)
  );
}

console.log(isLeapYear(2000));
console.log(isLeapYear(-2024));
console.log(isLeapYear(1984.25));
