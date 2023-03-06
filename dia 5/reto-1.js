function findLargestPalindrome(words) {
  const palindromeArray = words.filter((word) => {
    return (
      word.toLowerCase() === word.toLowerCase().split('').reverse().join('')
    );
  });
  return palindromeArray.sort((a, b) => b.length - a.length)[0] || null;
}

console.log(findLargestPalindrome(['racecar', 'level', 'world', 'hello']));
console.log(findLargestPalindrome(['Platzi', 'javascript', 'html', 'css']));
