let userName: string;
let userAge = 38;

userName = 'Kanami';

console.log(userAge);

function add(a: number, b = 5) {
    return a + b;
}

add(10);
add(10, 6);

let age: string | number = 36;
age = '37';
age = 46;