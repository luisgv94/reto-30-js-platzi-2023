function findFamousCats(cats) {
  // create a new array object with totals of followers and name {name, totalFollowers}
  const catsWithTotals = cats.map((cat) => {
    const { name, followers } = cat;
    const totalFollowers = followers.reduce(function (acum, numFollowers) {
      return acum + numFollowers;
    }, 0);
    return {
      name,
      totalFollowers,
    };
  });

  // get the max value of totalFollowers using rest operator and map
  const maxNumFollowers = Math.max(
    ...catsWithTotals.map((cat) => cat.totalFollowers)
  );

  // once we have max value of totalFollowers, filter the cats that have that totalFollowers
  // then map that array to only return cat 'name'
  return catsWithTotals
    .filter((cat) => cat.totalFollowers === maxNumFollowers)
    .map((cat) => cat.name);
}

const cats1 = [
  { name: 'Mimi', followers: [320, 120, 70] },
  { name: 'Milo', followers: [400, 300, 100, 200] },
  { name: 'Gizmo', followers: [250, 750] },
];

const cats2 = [
  {
    name: 'Luna',
    followers: [500, 200, 300],
  },
  {
    name: 'Michi',
    followers: [100, 300],
  },
];

console.log(findFamousCats(cats1));
console.log(findFamousCats(cats2));
