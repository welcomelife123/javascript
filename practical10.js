const prompt = require('prompt-sync')();

const number = parseInt(prompt('Enter a number: '));

console.log('Multiplication Table (For Loop):');
for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}

console.log('\nMultiplication Table (While Loop):');
let i = 1;
while (i <= 10) {
    console.log(`${number} x ${i} = ${number * i}`);
    i++;
}

console.log('\nMultiplication Table (Do-While Loop):');
i = 1;
do {
    console.log(`${number} x ${i} = ${number * i}`);
    i++;
} while (i <= 10);
