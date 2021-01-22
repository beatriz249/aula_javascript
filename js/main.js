

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por Clicar</b>";
    //console.log( document.getElementById("agradecimento"));

   // alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://globallabs.academy/");
   // window.location.href = "https://globallabs.academy/";
}

function trocar(elemento){
   // document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
   // alert("Trocar texto");
   elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
alert("Página Carregada!");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}
/*function soma(n1,n2){
    return n1 + n2;

}

/*function setReplace(frase, nome, novo_nome){
    frase.replace(nome, novo_nome)
    return frase.replace(nome, novo_nome);
}


function validaIdade(idade){
    var validar;
    if(idade>=18){
        validar = true;
    }
    else{
        validar = false;
    }
    return validar;
}
var idade = prompt ("Qual é a sua idade?");
console.log(validaIdade(idade));
*/
//alert(soma(5,10));
//alert(setReplace("Vai Japão", "Japão", "Brasil"));
/*
var d = new Date();
alert(d);
alert(d.getMonth()+1);
alert(d.getDay()+1);
alert(d.getHours()+1);
alert(d.getMinutes()+1);
*/

/*var count;
for(count = 0; count<=5; count ++){
    alert(count);
}
*/

/*var count = 0;
while(count <= 5){
    console.log(count);
    alert(count);
    count++;
}
*/
/*var idade = prompt("Qual sua idade?");
if(idade>=18){
    alert("maior de idade");
}
else{
    alert("menor de idade");
}
*/

/*var frutas =  [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].cor);
*/

/*var fruta =  {nome:"maçã", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/

//var lista = ["maçã", "pêra", "laranja"];
//lista.pop();
//lista.push("uva");
//console.log(lista);
//alert(lista[1].toUpperCase());
//console.log(lista.length);
//console.log(lista.reverse());
//console.log(lista.toString());
//console.log(lista.join(" ou "));