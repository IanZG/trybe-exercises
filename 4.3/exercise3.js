let n = 5;
let simbolo = "*";
let espaco = " ";
if (n > 0) {
    for (let i = 0; i < n; i += 1) {
        espaco += " ";
    }
    
    for (let i = 0; i < n; i += 1) {
        
        console.log(espaco + simbolo);
        simbolo += "*";
        espaco -= " ";
    }
 
}