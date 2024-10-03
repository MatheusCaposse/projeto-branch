// Estrutura de repetição

//for (let i=0; i < 10; i ++)
    //console.log(i)


//let f = 0;
//while (f<10){
    //console.log(f)
    //f++
//}

//do while
let w = 0;

do {
    console.log(w);
    w++
}
while(w<5)

//funções 

function ola(nome){
    console.log(`seja bem vindo a ${nome}` ); //strings literal ou template $() chama a varivavel
    //alert(`seja bem vindo a ${nome}`)
    document.write(`seja bem vindo a ${nome}`)
}
ola("fiap")

//Arrow Function

const hello=()=>(console.log("função arrow function"))

hello()

//Array[], Objeto{} e Metodos()

let jogadores =[
    {nome:"huguinho", idade: 17},
    {nome:"zezinho", idade: 18},
    {nome:"luizinho", idade:19},
]

let listarJogadores = jogadores.map(function(item){
    return item.idade;
}) 
console.log(listarJogadores)
