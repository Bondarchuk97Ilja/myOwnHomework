function concatObject(...rest) {
    return rest.reduce((init, item) => {
        return {
            ...init,
            ...item
        }
    }, {})
}

const result = concatObject({isSmart:true}, {name:'Vasya'},{age:21})

console.log(result);
