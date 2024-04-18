// pure functions requires to avoid mutating the data


// impure functions that mutates data
const numberList = (array, value) => {
    array.push(value);
    return array;
}

// mutates the original array
const num = [1, 2, 3];
console.log(numberList(num, 12));

