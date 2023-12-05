nums = [1, 2, 3, 4, 5, -6]

sumar(nums)
mediana(nums)
maximo(nums)
minimo(nums)

function sumar(nums) {
    let suma = 0
    nums.forEach(num => {
        suma += num
    });
    console.log("Su suma es: " + suma);
}

function mediana(nums) {
    let suma = 0
    nums.forEach(num => {
        suma += num
    });
    mediana = suma / nums.length
    console.log("Su mediana es: " + mediana);
}

function maximo(nums) {
    maximo = Math.max(...nums)
    console.log("El máximo es: " + maximo);
}

function minimo(nums) {
    minimo = Math.min(...nums)
    console.log("El mínimo es: " + minimo);
}