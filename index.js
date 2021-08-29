console.log('hai');
const fetchfn = new Promise(async(resolve, reject) => {
    await fetch('https://reqres.in/api/users?page=2');
});
setTimeout(() => {
    console.log('set timeout cleared');
}, 5000);
console.log('Results');