function mudartudo() {
    let texto = document.getElementById("texto").ariaValueMax;

    // ALerta
    alert("Você digitou", texto);

    //Alterado conteúdo da página
    document.getElementById("resulatado").innerHTML = texto;
}
console.log('4 TIPOS DE DADOS BASICOS PRIMITIVOS')
//CNTRL + F5
// STRINGS/CARACTERES/TEXTO
console.log('isso é um texto')
console.log('10000' * 5)

// NULO
//não existe
console.log(null)

// Indefinido
//Algo que você não sabe
console.log(undefined)

//DADOS BOLEANOS
// resposta a uma condição / dado asceu em uma das duas condições 
console.log('saida', 10>2)
console.log(true)
console.log(false)

// NUMEROS INTEIROS - INTEGER
// idade - ano - quantidade
console.log(20)
console.log(10)
console.log(-1)
console.log(0)

// REAIS FLOATS
// dinheiro - altura - peso
console.log(10.9)
console.log(5.9)
console.log(25.88)
console.log('25.88' %2)

//* Multiplicação, / Divisão, + Adição, - Subtração, ** // , % Resto da conta

//variáveis em JS

//var (não se usa mais)
//let (em algum momento serão alterados)
//algo que varia

//const (uso quando não haverá alteração de dados)

var a = 5;
let b = 6;

console.log(a);
console.log(b);

nome = 'Carlos'
console.log(nome)

//var nome = 'Julia'

let numero = 20
console.log(numero)
// alert(numero)

const nascionalidade = 'Brasil'
nascionalidade = 'americano'

//concatenar ou juntar palavras, numeros ou ambos com o sinal de +

let nome = 'Juliana'
let sobrenome = 'Almeida'

console.log(nome,sobrenome)
