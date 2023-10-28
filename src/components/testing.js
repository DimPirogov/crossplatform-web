// const sum = (a, b) => {
//   return a + b;
// }
// const sum2 = (a, b) =>  a+b;
// const getPerson = ( firstname, lastname, birthyear) => ({firstname, lastname, birthyear});
const cats = [
  {
      "name": "Misse",
      "birthyear": 2020
  },
  {
      "name": "John",
      "birthyear": 2013
  },
  {
      "name": "Monica",
      "birthyear": 2017
  }
]
// console.log(cats.filter((cat)=> cat.birthyear >= 2017 ));
// console.log(cats.filter(cat => cat.name.toLocaleLowerCase().startsWith('m')));
// console.log(cats.map(cat => (`${cat.name} är född ${cat.birthyear}`)));
// const sort1 = cats.sort((a, b) => a.birthyear - b.birthyear )
// const sort2 =
// cats.sort((a,b) => b.name.toLowerCase() > a.name.toLowerCase() ? -1 : 1)
// const [ cat1, cat2, cat3] = cats;
// const {name, birthyear} = cats[0];
// const logCat = ({name, color}) => {
//   console.log(`Det kom en ${color} katt som hette ${name}`)
// }
// logCat({"name": "Misse", "color": "svart"});
console.log("<ul>" + cats.map( cat => `<li>${cat.name},${cat.birthyear}</li>`) + "</ul>")
