function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    // console.log(document.getElementById("agradecimento"));
}

function redirecionar(){
    window.open("https://globallab.org/en/");
    // window.location.href = "https://globallab.org/en/";
}

function trocar(elemento){
    // document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    // alert("trocar texto");
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
    // document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página carregada")
}

function change(elemento){
    console.log(elemento.value)
}

// function soma(n1, n2){
//     return n1 + n2;
// }

// var validar = 0;

// function validaIdade(idade){
//     if (idade >=18){
//         validar = true;
//     }else{
//         validar = false;
//     }
//     return validar
// }

// var idade = prompt("Qual sua idade?");
// validaIdade(idade)
// console.log(validar);


// var d = new Date();

// alert(d.getDate())


// var lista = [“Alemanha”, “Inglaterra”, “Escócia”]/
// lista.push(“Polônia”);
// lista.pop(“Inglaterra”);



// var d = new Date();
// alert(d.getMinutes());
// alert(d.getDay());
// alert(d.getHours());
// alert(d.getMinutes());


// console.log("Hoje é  " + d.getDate() + "/" + d.getMonth()+1);

// var count;
// for(count=1; count <= 5; count++){
//     alert(count);
// };


// var count = 0;
// while (count <= 5){
//     console.log(count);
//     alert(count);
//     count++;
// }

// var idade = prompt("Qual a sua idade?");
// // var idade = 18;
// if (idade >= 18){
//     alert("Maior de idade");
// }else{
//     alert("Menor de idade")
// }





// var frutas = [{nome: "maça", cor: "vermelha"}, {nome: "uva", cor: "roxa"}];
// console.log(frutas);
// alert(frutas[1].nome);

// [{}] = listas de dicionários
// {} = dicionários
// [] = listas

// var fruta = {nome: "maça", cor: "vermelha"};
// console.log(fruta.nome);
// alert(fruta.cor);

// var lista = ["maça", "pêra", "laranja"];
// lista.push("uva")
// // lista.pop();
// console.log(lista);
// console.log(lista[0]);
// console.log(lista.toString()[0]);
// console.log(lista.join(" - "))

// console.log(lista.reverse());
// console.log(lista.toString());

// var nome = "Leandro G. Araujo";
// var n1 = 5;
// var n2 = 3;
// var frase = "Japão é o melhor time do mundo";
// //alert(nome + " tem " + idade + " anos");
// //alert(idade + idade2)
// console.log(nome);
// console.log(n1*n2);
// console.log(frase.toLowerCase());
// alert(frase.replace("Japão", "Brasil"));
