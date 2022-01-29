//array como uma lista de coisas
//O ideal é apenas um tipo de informação por array                                     0     1      2
//Arrays diferentemente de stings são indexados por elemento EXEMPLO: const alunos = ['Luiz, Maria, João'];



const nome = 'Matheus Afonso'
const alunos = ['Luiz', 'Maria', 'João'];

console.log(typeof alunos); // array é um objeto 
console.log(alunos instanceof Array); //bolean 

//Isso pode

    const array = [1, 2, 3, 4, 5];
    array.pop();
    array[0] = 1024;
    console.log(array); // [ 1024, 2, 3, 4 ]
     

//Isso NÃO pode

    const array = [1, 2, 3, 4, 5];
    array = 'Legal'; // Assignment to constant variable.



/*
alunos.push('Luiza');
alunos.push('Matheus'); //melhor forma de adicionar elementos numa Array

console.log(alunos.slice(0, 3));*/

//delete alunos[1];
//console.log(alunos[50]);

/*const removido = alunos.pop(); //remove o ultimo elemento da array//.shift() remove o primeiro elemento
console.log(alunos);
console.log(removido);*/




//alunos.unshift('Luiza'); //adiciona ao inicio
//alunos.unshift('fabio'); //fabio sera mostrado primeiro no indice 0



//alunos.push('Igor'); //colocar no final


//alunos[alunos.length] = 'Fabiana'
//alunos[alunos.length] = 'Fabiana' //colocar no final




//alunos[0] = 'Matheus'; //posso alterar elementos nas arrays desta forma   //Altera elementos
//alunos[3] = 'Jessica'; //adicionar elementos desta forma




//console.log(alunos[0]);