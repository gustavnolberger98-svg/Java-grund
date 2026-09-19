let text = "#";
let counter = 1;
for (counter; counter<7; counter = counter + 1) {
    console.log(text);
    text = text + "#";
}

let number = 1;
let fizz = 3;
let buzz = 5;

while (number<101) {
    if (number % 3 === 0 && number % 5 === 0)
    console.log("fizzbuzz")

    else if (number % fizz === 0)
    console.log("fizz")

    else if (number % buzz === 0)
    console.log("buzz")

    else console.log(number)
    number = number + 1;
}

let chess = "";
let siffra = 0;
let rad = 0;

while (rad < 8) {

    siffra = 0;

    while (siffra < 8) {
        if (siffra % 2 === 0) 
            chess = chess + "#"
        else 
            chess = chess + " "
            siffra = siffra + 1;
    }
    chess = chess + "\n";

    rad = rad + 1;            
}

console.log(chess);
