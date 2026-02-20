let cadastro = prompt('Digite seu nome para iniciar o cadastro')
let num_pessoas = Number(prompt('Digite o número de pessoas(max 3)'))
if(num_pessoas == 3){
    let nome = prompt('Digite o nome da 1º pessoa')
    let nome2 = prompt('Digite o nome da 2º pessoa')
    let nome3 = prompt('Digite o nome da 3º pessoa') 
}else if(num_pessoas == 2){
    let name = prompt('Digite o nome 1º pessoa')
    let name2 = prompt('Digite o nome 2º pessoa')
}else{
    console.log('Cadastro feito com sucesso')
}

    let mesa = prompt('Escolha entre "mesa_comum_50", "mesa_vip_80" ou "varanda_100"')
const mesa_comum_50 = 50.0
const mesa_vip_80 = 80.0
const varanda_100 = 100.0

if (mesa == 'mesa_comum_50'){
    console.log('Consumo mínimo p/pessoa = 50R$')}
else if(mesa == 'mesa_vip_80'){
    console.log('Consumo mínimo p/pessoa = 80R$')
}else{
    console.log('Consumo mínimo p/pessoa = 100R$')}


if(num_pessoas *  mesa_comum_50 === 150){
    console.log('O valor total é 150R$')
}else if(num_pessoas * mesa_comum_50 === 100){
    console.log('O valor total é 100R$')
}else if(num_pessoas * mesa_comum_50 === 50){
    console.log('O valor total é 50R$')
}else if(num_pessoas * mesa_vip_80 === 240){
    console.log('O valor total é 240R$')
}else if(num_pessoas * mesa_vip_80 === 160){
    console.log('O valor total é 160R$')
}else if(num_pessoas * mesa_vip_80 === 80){
    console.log('O valor total é 80R$')
}else if(num_pessoas * varanda_100 === 300){
    console.log('O valor total é 300R$')
}else if(num_pessoas * varanda_100 === 200){
    console.log('O valor total é 200R$')
}else if(num_pessoas * varanda_100 === 100){
    console.log('O valor total é 100R$')
}
    



