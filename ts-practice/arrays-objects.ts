let hobbies: Array<string | number> = ['Sports', 'Cooking'];

hobbies.push(58)
hobbies.push('hello');
console.log(hobbies); 

let possibleResults: [number, boolean];

possibleResults = [8, true];

let user: {
    name: string;
    age: number | string;
    hobbies: string[];
    role: {
        description: string;
        id: number;
    }
} = {
    name: 'Kanami',
    age: 42
}