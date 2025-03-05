const input = document.getElementById("input");
const btn = document.getElementById("button");

btn.addEventListener("click", () => {
    f(parseInt(input.value));
    fR(parseInt(input.value));
});

// iterative vers

const f = (n) => {
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

// recursive vers

const fR = (n) => {

    if (n <= 1) return n;

    let sequence = [];
    sequence[n] = fR(n - 1) + fR(n - 2);

    console.log(sequence[n])

}

// merge sort 




