// spread - basically spreads the whole value of an arrays. it is like copying the item
// perfectly works for 1st layer values
const num1 = [1, 2, 3, 4, 6];
const num2 = [2, 3, 1];

const newArr = [...num1, ...num2]; // returns new array with combined both array values
console.log(newArr);



// rest - where i do not know the number of parameters i can receive there i can use rest
function sum(...rest){
    // console.log(rest); // basically a array

    return rest.reduce((total, curr) => total+curr, 0);
    
}
console.log(sum(10, 21, 2, 12));

