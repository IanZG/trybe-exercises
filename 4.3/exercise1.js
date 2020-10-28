let n = 5;
let simbolo = "*";
if (n > 0) {
    for (let i = 1; i < n; i += 1) {
        simbolo += "*";
    }
    for (let i = 0; i < n; i += 1) {
        console.log(simbolo);
    }
}
