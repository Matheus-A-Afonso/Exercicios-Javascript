
//if = Se (numero >=0 && numero <=5) isso ocorrer, faça isso {código}
//else = se não, então faça isso {código}

/*const numero = 10;

if (numero >=0 && numero <=5) {
    console.log('O número está entre 0 e 5');
} else {
    console.log('O numero não está entre 0 e 5');
}*/

const numero = 10;

if (numero >=0 && numero <=5) {
    console.log('O número está entre 0 e 5');
} else if (numero >= 6 && numero <=8) {
    console.log('O numero está emtre 9 e 11');
} else if(numero >= 9 && numero <=11) {                                // vai entregar os valores verdadeiros e só executa até a 1° verdadeira econtrada
    console.log('O numero está entre 9 e 11');
} else {
    console.log('o numero está entre 0 e 11');
}