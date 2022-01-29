const nome = prompt ('Digite o seu nome completo')

document.body.innerHTML += ` O seu nome é: ${nome} <br /br>`;
document.body.innerHTML += ` Seu nome tem ${nome.length} letras  <br /br>`;
document.body.innerHTML += ` A segunda letra do seu nome é: ${nome.charAt(1)} <br /br>`;
document.body.innerHTML += ` Qual o primeiro indice da letra a no seu nome? ${nome.indexOf('a')} <br /br>`;
document.body.innerHTML += ` Qual o ultimo indice da letra a no seu nome? ${nome.lastIndexOf('A')} <br /br>`;
document.body.innerHTML += ` As 3 ultimas letras do seu nome são: ${nome.slice(-3)}<br /br>`;
document.body.innerHTML += ` As palavras do seu nome são: ${nome.split(' ', 3)}<br /br>`;
document.body.innerHTML += ` Seu nome com letras maiusculas é: ${nome.toUpperCase()} <br /br>` ;
document.body.innerHTML += ` Seu nome com letras minusculas é: ${nome.toLowerCase()}`;


//Matheus Pereira Alves Afonso