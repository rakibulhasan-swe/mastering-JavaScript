// reduce - 

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const initialValue = 0;
const sum = numbers.reduce(function (acc, curr) {
    return acc+curr;
}, initialValue);

console.log(sum);

const courseList = [
    {
        courseName: "JavaScript for beginners",
        price: 8900
    },
    {
        courseName: "GO for beginners",
        price: 9000
    },
    {
        courseName: "RUST for beginners",
        price: 7900
    },
    {
        courseName: "Node JS for beginners",
        price: 8000
    }
];

const totalCostOFCourses = courseList.reduce((acc, curr) => acc+curr?.price, 0);
console.log(totalCostOFCourses);