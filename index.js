const input = document.getElementById("input");
const btn = document.getElementById("button");

btn.addEventListener("click", () => {
    findFibWithIt(input.value);
});

const findFibWithIt = (n) => {
    let a = 0; // first num in sequence
    let b = 1; // second num in sequence
    let c; // sum of a and b

    let sequence = [];

    sequence.push(a, b)

    for (let i = 0; i < n; i++) {
        c = a + b;

        a = b; 
        b = c;
        // c = a + b;
        sequence.push(c);
    }

    console.log(sequence);
}

