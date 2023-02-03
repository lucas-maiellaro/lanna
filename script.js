const naoButton = document.getElementById("nao");
let texto = document.getElementById("texto");
let nao2 = document.getElementById("nao2");
let nao3 = document.getElementById("nao3");
let counter = 0;

nao2.style.visibility = "hidden";
nao3.style.visibility = "hidden";

function typeWriter(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach(function(letra, i){
        setTimeout(function(){
            elemento.innerHTML += letra;
        }, 35 * i)
    })
}

function sim () {
    window.open("./sim/sim.html",'_self');
}

function nao() {
    switch (counter) {
        case 0:
            texto.innerHTML = "vc não tem coragem de clicar aí de novo";
            typeWriter(texto);
            counter++;
            break;
        case 1:
            texto.innerHTML = "que audácia a sua, vc não pode fazer isso";
            typeWriter(texto);
            counter++;
            break;
        case 2:
            texto.innerHTML = "se vc clicar aí de novo, vou ter que tomar providências drásticas";
            typeWriter(texto);
            counter++;
            break;
        case 3:
            naoButton.style.visibility = "hidden"
            nao2.style.visibility = "visible";
            texto.innerHTML = "hahaha sumi com o botao, agora pode clicar no sim por favor? :)";
            typeWriter(texto);
            counter++;
            break;
        case 4:
            naoButton.style.visibility = "visible"
            nao2.style.visibility = "hidden";
            texto.innerHTML = "vc só pode estar de brincadeira. por favor, clique no sim";
            typeWriter(texto);
            counter++;
            break;
        case 5:
            texto.innerHTML = "quem foi o programador que colocou esse botão de NÃO?";
            typeWriter(texto);
            counter++;
            break;
        case 6:
            texto.innerHTML = "vc gosta de brincar né? então quero ver vc clicar nesse botão mais uma vez";
            typeWriter(texto);
            counter++;
            break;
        case 7:
            naoButton.style.visibility = "hidden"
            texto.innerHTML = "HAHAHAHAHA! agora eu desapareci completamente com o seu botão";
            typeWriter(texto);
            setTimeout(function(){
                nao3.style.visibility = "visible";
            }, 10000)
            counter++;
            break;
        case 8:
            naoButton.style.visibility = "visible"
            nao3.style.visibility = "hidden";
            texto.innerHTML = "O QUE??? ESSES PROGRAMADORES NÃO CONSEGUEM FAZER UM ÚNICO SISTEMA SEM BUGS?";
            typeWriter(texto);
            counter++;
            break;
        case 9:
            texto.innerHTML = "já chega!";
            typeWriter(texto);
            counter++;
            break;
        case 10:
            texto.innerHTML = "se vc continuar apertando esse botão eu vou ser obrigado a usar meu último truque";
            typeWriter(texto);
            counter++;
            break;
        case 11:
            texto.innerHTML = "esse é meu último aviso";
            typeWriter(texto);
            counter++;
            break;
        case 12:
            window.open("./nao/nao.html",'_self');
            break;
    }
}