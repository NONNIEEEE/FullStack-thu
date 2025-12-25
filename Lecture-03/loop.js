const names = ['Justin ', 'Sarah', 'Christopher'];

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}   

const numbers = [45, 4, 9, 16, 25];

numbers.forEach(function(number) {
    console.log(number);
});

function greet(name) {
    console.log(name);
}
for (let name of names)    {
    console.log(name);
}