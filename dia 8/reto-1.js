function createCalculator() {
  let total = 0;

  const add = (value) => {
    total += value;
    return total;
  };

  const subtract = (value) => {
    total -= value;
    return total;
  };

  const multiply = (value) => {
    total *= value;
    return total;
  };

  const divide = (value) => {
    total /= value;
    return total;
  };

  const clear = () => {
    total = 0;
    return total;
  };

  const getTotal = () => total;

  return { add, subtract, multiply, divide, clear, getTotal };
}

// Example 1
const calculator1 = createCalculator();
console.log(calculator1.add(10));

// Example 2
const calculator2 = createCalculator();
calculator2.add(10);
console.log(calculator2.add(-10));
