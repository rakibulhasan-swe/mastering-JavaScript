// const promiseOne = new Promise(function(resolve, reject){
//     // do an async task
//     // DB calls, crypto task, network call

//     setTimeout(function(){
//         console.log('Async task is complete');
//         resolve();
//     }, 1000)
// });

// promiseOne.then(function(){
//     console.log("Promise Consume");
// })


// new Promise(function(resolve, reject){
//     // do an async task
//     // DB calls, crypto task, network call

//     setTimeout(function(){
//         console.log('Async task is complete');
//         resolve();
//     }, 1000)
// }).then(function(){
//     console.log("Promise Consume");
// })


// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: "Rakib", email: "rakib@gmail.com"});
//     }, 1000)
// })

// promiseThree.then(function(user){
//     console.log(user);
// })



// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true;
//         if(!error){
//             resolve({username: "Rakib", password: "12341526"});
//         }else{
//             reject('ERROR: Something went wrong');
//         }
//     }, 1000)
// });

// promiseFour.then((user) => {
//     console.log(user);
//     return user.username;
// }).then((username) => {
//     console.log(username);
// }).catch((err) => {
//     console.log(err);
// }).finally(() => {
//     console.log("All Promise done!!");
// })


// promise with asynce
// const promiseFive = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const error = true;
//         if(!error){
//             resolve({username: "JavaScript", password: "234145"});
//         }else{
//             reject('ERROR: Something went wrong!!');
//         }
//     }, 1000)
// });

// async function consumePromiseFive(){
//     try{
//         const response = await promiseFive;
//         console.log(response);
//     }catch(err){
//         console.log(err);
//     }
// };

// consumePromiseFive();


// async function getAllUsers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = response.json();
//         console.log(data);
//     }catch(err){
//         console.log(err);
//     }
// }
// getAllUsers();


fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((err) => {
    console.log(err);
})

