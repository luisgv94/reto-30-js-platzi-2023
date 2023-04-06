export function removeDuplicates(values) {
  let set = new Set();
  values.forEach((element) => {
    set.add(element);
  });
  return Array.from(set);

  // return Array.from(new Set(values))
}
