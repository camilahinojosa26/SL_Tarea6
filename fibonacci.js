function fibonacci_1000() {
    let num1 = 0;
    let num2 = 1;
    let siguiente;
    let secuencia = [num1, num2];

    console.log("1. Secuencia de Fibonacci entre 0 y 1000:");
    console.log(num1); 
    console.log(num2); 

    while (true) {
        siguiente = num1 + num2;
        if (siguiente > 1000) break;
        
        console.log(siguiente);
        secuencia.push(siguiente);
        
        num1 = num2;
        num2 = siguiente;
    }
    
    return secuencia;
}

function fibonacciPares(secuencia) {
    console.log("\n2. Números pares de la secuencia de Fibonacci hasta 1000:");
    for (let i = 0; i < secuencia.length; i++) {
        if (secuencia[i] % 2 === 0) {
            console.log(secuencia[i]);
        }
    }
}

function fibonacciImpares(secuencia) {
    console.log("\n3. Números impares de la secuencia de Fibonacci hasta 1000:");
    for (let i = 0; i < secuencia.length; i++) {
        if (secuencia[i] % 2 !== 0) {
            console.log(secuencia[i]);
        }
    }
}

let secuenciaCompleta = fibonacci_1000();
fibonacciPares(secuenciaCompleta);
fibonacciImpares(secuenciaCompleta);