/* 
    const, let
    arrowFn
    array.forEach()
    array.map()
    filter()
    find()
    findIndex
    for of (array)
    for in (object)
*/

// test1();
// test();

const array = [
  { name: 'ibrahim' },
  { name: 'hamdy' },
  { name: 'ali' },
  { name: 'ibrahim' },
];

const test = array.forEach((el) => {
  return el + 1;
});
// console.log('🚀 ~ test ~ test:', test);

const mapFN = array.map((el) => {
  return el;
});
//  sadasdaconsole.log('🚀 ~ mapFN ~ mapFN:', mapFN);

const filterFn = array.filter((el, idx) => el.name === 'ali');
console.log('🚀 ~ filterFn:', filterFn);
// console.log('🚀 ~ array:', array);

const findFn = array.find((el) => el.name === 'sasdas');
console.log('🚀 ~ findFn:', findFn);

const findIdx = array.findIndex((el) => el.name === 'ali');
console.log('🚀 ~ findIdx:', findIdx);

const arr1 = ['one', 'two', 'three'];

const [one, hamda, tes1] = arr1;

/* console.log('🚀 ~ arr1[0]:', one);
console.log('🚀 ~ arr1[1]:', hamda);
console.log('🚀 ~ arr1[2]:', tes1); */

const obj = { name: 'test', age: 99 };

const { name, age } = obj;

obj.name;
obj['name'];
/* console.log('🚀 ~ name:', name);

console.log('🚀 ~ obj:', obj.name);
 */

/* 
for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
}

for (let hmada of arr1) {
  console.log('🚀 ~ el:', hmada);
}
 */

for (let hmada in obj) {
  console.log('🚀 ~ :', obj[hmada]);
}
