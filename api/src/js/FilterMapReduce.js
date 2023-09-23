const animals = [
    {name: "bella", type: "cat"},
    {name: "mitsi", type: "cat"},
    {name: "linda", type: "dog"},
    {name: "bob", type: "dog"},
    {name: "bachir", type: "cat"}
];

const filter = animals.filter((animal) => animal.type === "cat");
console.log(filter)

const result = animals.map((animal) => `${animal.name} walk`);
console.log(result)

const bella = animals
    .filter((cat) => cat.name === 'bella')
    .map((bella) => `${bella.name} I love you`)
console.log(bella[0])

const nums = [1, 2, 5, 4];
const sum = nums.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});
console.log(sum)
// accumulator currentValue returned value
//     1            2            3
//     3            5            8
//     8            4            12


const grades = [1, 5, 3, 4];
const max = grades.reduce((accumulator, current) => {
    // return Math.max(accumulator, current);
    return (current > accumulator) ?  current : accumulator;
});
console.log(max)
// accumulator currentValue returned value
//     1            5            5
//     5            3            5
//     5            4            5

// Use reduce to accumulate data into an object