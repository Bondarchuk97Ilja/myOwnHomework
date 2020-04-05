
const objectList = [
    { name: 'Oleh',
        age: 32},
    { name: 'Ilja',
        age: 22},
    { name: 'Andrej',
        age: 30},
    { name: 'Igor',
        age: 12}
];

const filterByAge = (list,startVal,endVal) => {
    return list.filter(({age}) => age > startVal && age <= endVal)
};

const filteredByAge = filterByAge(objectList,10,30);
console.log(filteredByAge);

//check smthn