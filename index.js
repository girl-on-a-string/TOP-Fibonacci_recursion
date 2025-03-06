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

// take 2 already sorted arrays and combine them

const merge = (left, right) => {
    let arr = []

    // break out of loop if one array becomes empty

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift());
        } else {
            arr.push(right.shift());
        }
    }

    return [...arr, ...left, ...right] // concatenate leftovers
}



const mergeSort = (sample) => {

    let half = sample.length / 2;

    if (sample.length < 2) {
        return sample
    }

    const left = sample.splice(0, half);
    return merge(mergeSort(left), mergeSort(sample));
}

let sampleArray = [21, 37, 52, 33, 19, 32, 72, 72];
console.log(mergeSort(sampleArray))
