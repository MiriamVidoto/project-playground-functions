// Desafio 1
// JavaScript possui um operador lógico &&, o qual recebe dois valores e retorna true se ambos os valores são verdadeiros, e retorna false se algum dos valores não o for.
// Considerando isso, implemente na função compareTrue, um código que ao receber dois parâmetros booleanos deve:
// Retornar true se ambos os valores forem verdadeiros;
// Retornar false se um ou ambos os parâmetros forem falsos.
// Faça a função somente utilizando o operador &&.code 

function compareTrue(value1, value2) {
    if (value1 && value2) {
    return true ;   
    }
    return false;
}
// Retorne true quando se chamar a função compareTrue com dois parâmetros de valor true
// console.log(compareTrue(true, true));
// Retorne false quando se chamar a função compareTrue com um parâmetro de valor false e outro de valor true
// console.log(compareTrue(true, false));
// Retorne false quando se chamar a função compareTrue com dois parâmetros de valor false
// console.log(compareTrue(false, false));

// Desafio 2
// Crie uma função que calcule a área de um triângulo
// Escreva uma função com o nome calcArea que receba um valor de base (chamado base) e outro de altura (chamado height) de um triângulo e retorne o cálculo da sua área.
// Lembre-se que a área de um triângulo é calculada através da seguinte fórmula: (base * altura) / 2.

function calcArea(base, height) {
return (base * height) / 2;
}
// Retorne o valor 250 quando a funcão calcArea é chamada com o parâmetro base com o valor 10 e o parâmetro height com o valor 50
// console.log(calcArea(10, 50));
// Retorne o valor 5 quando a funcão calcArea é chamada com o parâmetro base com o valor 5 e o parâmetro height com o valor 2 espera-se como resultado 5
// console.log(calcArea(5, 2));
// Retorne o valor 25.5 quando a funcão calcArea é chamada com o parâmetro base com o valor 51 e o parâmetro height com o valor 1 espera-se como resultado 25.5
// console.log(calcArea(51, 1));

// Desafio 3
// Crie uma função que divida a frase
// Escreva uma função com o nome splitSentence, a qual receberá uma string e retornará uma array de strings separadas por cada espaço na string original.
// Exemplo: se a função receber a string "go Trybe", o retorno deverá ser ['go', 'Trybe'].

function splitSentence(string) {
  return string.split(' ');
}
// Retorne o valor ['go', 'Trybe'] se a função receber a string 'go Trybe'
// console.log(splitSentence('go Tribe'));
// Retorne o valor ['vamo', 'que', 'vamo']. se a função receber a string 'vamo que vamo'
// console.log(splitSentence('vamo que vamo'));
// Retorne o valor ['foguete'] se a função receber a string 'foguete'
// console.log(splitSentence('foguete'));

// Desafio 4
//  Crie uma função que use concatenação de strings
// Escreva uma função com o nome concatName que, ao receber uma array de strings, retorne uma string com o formato 'ÚLTIMO ITEM, PRIMEIRO ITEM', independente do tamanho da array.
// Isso quer dizer que, caso o parâmetro passado para concatName seja a Array ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'], a função deverá retornar Paolillo, Lucas.

function concatName(fullName) {
return fullName[fullName.length - 1] + ', ' + fullName[0];
}
// Retorne 'Paolillo, Lucas' quando o parâmetro passado na funcão concatName seja ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']
//  console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
// Retorne 'ré, foguete' quando o parâmetro passado na funcão concatName seja ['foguete', 'não', 'tem', 'ré']
//  console.log(concatName(['foguete', 'não', 'tem', 'ré']);
// Retorne 'captain, captain' quando o parâmetro passado na funcão concatName seja ['captain', 'my', 'captain']
//  console.log(concatName( ['captain', 'my', 'captain']));


// Desafio 5
// Crie uma função que calcule a quantidade de pontos no futebol
// Escreva uma função com o nome footballPoints que receba o número de vitórias (esse parâmetro deverá se chamar wins) e o número de empates (esse parâmetro deverá se chamar ties) e retorne a quantidade de pontos que o time marcou em um campeonato.
// Para tanto, considere que cada vitória vale 3 pontos e cada empate vale 1 ponto.

function footballPoints(wins, ties) {
 return (wins * 3) + ties;
}
// Retorne 50 pontos quando o time tenha 14 vitórias e 8 empates
// console.log(footballPoints(14, 8));
// Retorne 5 pontos quando o time tenha 1 vitória e 2 empates
// console.log(footballPoints(1, 2));
// Retorne 0 pontos quando o time tenha 0 vitórias e 0 empates
// console.log(footballPoints(0, 0));

// Desafio 6
// Crie uma função que calcule a repetição do maior número
// Escreva uma função chamada highestCount que, ao receber uma array de números, retorne a quantidade de vezes que o maior deles se repete.
// Exemplo: caso o parâmetro de highestCount seja uma array com valores [9, 1, 2, 3, 9, 5, 7], a função deverá retornar 2, que é a quantidade de vezes que o número 9 (maior número do array) se repete.
function highestCount(numbers) {
  let biggerNumber = numbers[0];
  let count = 0;
  for (let num of numbers){
    if (num > biggerNumber) {
      biggerNumber = num;
    }
  }
  for (let number of numbers){
    if (number === biggerNumber){
      count += 1;
    }
  }
  return count;
 }
// Retorne 2 quando o parâmetro passado na função highestCount seja [9, 1, 2, 3, 9, 5, 7]
// console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
// Retorne 1 quando o parâmetro passado na função highestCount seja [0, 4, 4, 4, 9, 2, 1]
// console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));
// Retorne 3 quando o parâmetro passado na função highestCount seja [0, 0, 0]
// console.log(highestCount([0, 0, 0]]));

// Desafio 7
// Crie uma função de Caça ao Rato
// Imagine que existem dois gatos, os quais chamaremos de cat1 e cat2, e que ambos estão caçando um mesmo rato chamado mouse. Imagine que os animais estão em uma reta, cada um em uma posição representada por um número.
// Sabendo disso, crie uma função chamada catAndMouse que, ao receber a posição de mouse, cat1 e cat2, nessa ordem, calcule as distâncias entre o rato e cada um dos gatos, em seguida, retorne qual dos felinos irá alcançar o rato primeiro (aquele que estiver mais perto do rato).
// Exemplo: caso o gato cat2 esteja a 2 unidades de distância do rato, e cat1 esteja a 3 unidades, sua função deverá retornar "cat2".
// Caso os gatos estejam na mesma distância do rato, a função deverá retornar a string "os gatos trombam e o rato foge".

function catAndMouse(mouse, cat1, cat2) {
  let c1 = Math.abs(cat1 - mouse);
  let c2 = Math.abs(cat2 - mouse);
  if (c1 < c2 ){
    return 'cat1';
  } else if (c2 < c1) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge'
  }
}
// Retorne a string 'cat2' caso a função catAndMouse receba os parâmetros onde gato cat2 esteja a 2 unidades de distância do rato e cat1 esteja a 3 unidades de distância do rato
// console.log(catAndMouse(6,9,4));
// Retorne a string 'cat1' caso a função catAndMouse receba os parâmetros onde gato cat1 esteja a 6 unidades de distância do rato e cat2 esteja a 12 unidades de distância do rato
// console.log(catAndMouse(4,10,16));
// Retorne a string 'os gatos trombam e o rato foge' caso a função catAndMouse receba os parâmetros onde os gatos estejam na mesma distância do rato
// console.log(catAndMouse(5,6,4));

// Desafio 8
// Crie uma função FizzBuzz
// Crie uma função chamada fizzBuzz que receba uma array de números e retorne uma array da seguinte forma:
// Para cada número do Array que seja divisível apenas por 3, apresente uma string "fizz";
// Para cada número do Array que seja divisível apenas por 5, apresente uma string "buzz";
// Caso o número seja divisível por 3 e 5, retorne a string "fizzBuzz";
// Caso o número não possa ser dividido por 3 nem por 5, retorne a string "bug!";
// Exemplo: caso o parâmetro seja [2, 15, 7, 9, 45], sua função deverá retornar ["bug!", "fizzBuzz", "bug!", "fizz", "fizzBuzz"].

function fizzBuzz(numbers) {
  const newArray = []
  for(let position of numbers) {
   if (position % 3 === 0 && position % 5 === 0){
     newArray.push('fizzBuzz');
   } else if (position % 5 === 0) {
     newArray.push('buzz');
   } else if (position % 3 === 0)  {
     newArray.push('fizz');
   } else{
    newArray.push('bug!');
   }
 }
 return newArray
}
// Retorne as strings ['bug!', 'fizzBuzz', 'bug!', 'fizz', 'fizzBuzz'] quando é passado os parâmetros [2, 15, 7, 9, 45] para a função fizzBuzz
// console.log(fizzBuzz([2,15,7,9,45]));
// Retorne as strings ['bug!', 'fizz'] quando é passado os parâmetros [7, 9] para a função fizzBuzz
// console.log(fizzBuzz([7, 9]));
// Retorne as strings ['fizz', 'buzz'] quando é passado os parâmetros [9, 25] para a função fizzBuzz
// console.log(fizzBuzz([9, 25]));

// Desafio 9
// Crie uma função que Codifique e Decodifique
// Crie duas funções: a primeira deverá se chamar encode e, ao receber uma string como parâmetro, deverá trocar todas as vogais minúsculas por números, de acordo com o formato a seguir:
// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5
// Ou seja, caso o parâmetro de encode seja "hi there!", o retorno deverá ser "h3 th2r2!".
// A segunda função deverá se chamar decode e faz o contrário de encode - ou seja, recebe uma string contendo números no lugar de letras minúsculas e retornará uma string com vogais minúsculas no lugar dos números (então, caso o parâmetro de decode seja "h3 th2r2!", o retorno deverá ser "hi there!").
// O que será verificado:
// Retorne uma string codificada quando a função encode for utilizada

function encode(string) {
  return string.replace(/a/g, '1').replace(/e/g, '2').replace(/i/g, '3').replace(/o/g, '4').replace(/u/g, '5');
}
console.log(encode('hi there!'));
// Retorne uma string decodificada quando a função decode for utilizada

function decode(string) {
  return string.replace(/1/g, 'a').replace(/2/g, 'e').replace(/3/g, 'i').replace(/4/g, 'o').replace(/5/g, 'u');
}
// console.log(decode('h3 th2r2!'));

// Desafio 10
// Crie uma função de Lista de Tecnologias
// Crie uma função que recebe um array de nomes de tecnologias que você quer aprender. Essa função deve receber também um segundo parâmetro chamado name com um nome.
// Para cada tecnologia no array, crie um objeto com a seguinte estrutura:
// {
//   tech: "NomeTech",
//   name: name
// }
// Estes objetos devem ser inseridos em uma nova lista em ordem alfabética a partir do campo tech no objeto.
// A saída da sua função deve ser uma lista de objetos ordenada pelo campo tech dos objetos com o formato acima.

function techList(tec, yourName) {
  let newArray = tec.sort();
  let teste =[]
    for (let position of newArray) {
      let object = {
        tech:'',
        name:''
      };
      object.name = yourName;
      object.tech = position;
      teste.push(object)
    }
  return (teste);
}
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"));

// Exemplo:
// Entradas da função:
// ["React", "Jest", "HTML", "CSS", "JavaScript"]
// "Lucas"
// Saída:
// [
//   {
//     tech: "CSS",
//     name: "Lucas"
//   },
//   {
//     tech: "HTML",
//     name: "Lucas"
//   },
//   {
//     tech: "JavaScript",
//     name: "Lucas"
//   },
//   {
//     tech: "Jest",
//     name: "Lucas"
//   },
//   {
//     tech: "React",
//     name: "Lucas"
//   }
// ]
// Caso o array venha vazio sua função deve retornar 'Vazio!'
// O que será verificado:
// Retorne uma lista de objetos ordenados quando é passada uma lista com 5 tecnologias
// Retorne a mensagem de erro 'Vazio!' quando a lista não tiver tecnologias


// Desafio 11
// Crie uma função de Número de Telefone
// Crie uma função chamada generatePhoneNumber que receba uma array com 11 números e retorne um número de telefone, respeitando parênteses, traços e espaços.
// Exemplo: caso o parâmetro da função seja [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1], generatePhoneNumber deverá retornar (12) 34567-8901.
// Se a função receber um array com tamanho diferente de 11, a mesma deve retornar "Array com tamanho incorreto.".
// Caso algum dos números da array seja menor que 0, maior que 9 ou se repita 3 vezes ou mais, generatePhoneNumber deverá retornar a string "não é possível gerar um número de telefone com esses valores".

function generatePhoneNumber() {
  // seu código aqui
}

// O que será verificado:
// Retorne a string "Array com tamanho incorreto." caso o array tenha o tamanho diferente de 11
// Retorne a string "não é possível gerar um número de telefone com esses valores" caso algum dos números do array seja menor que 0
// Retorne a string "não é possível gerar um número de telefone com esses valores" caso algum número do array seja maior que 9
// Retorne a string "não é possível gerar um número de telefone com esses valores" caso algum número do array se repetir 3 vezes ou mais
// Retorne um número de telefone, respeitando parênteses, traços e espaços caso os números do array estejam de acordo com as especificações

// Desafio 12
// Crie uma função de Condição de existência de um triângulo
// Um triângulo é composto de três linhas: lineA, lineB e lineC. Crie uma função chamada triangleCheck que deverá receber as três linhas como parâmetro e retornar se é possível formar um triângulo com os valores apresentados de cada linha.
// Para tanto, tenha em mente algumas considerações:
// Para que seja possível formar um triângulo, é necessário que a medida de qualquer um dos lados seja menor que a soma das medidas dos outros dois e maior que o valor absoluto da diferença entre essas medidas.
// Para obter o valor absoluto de um número em JavaScript, pesquise pela função Math.abs.
// O retorno da sua função deverá ser um booleano.
// Exemplo: o retorno de triangleCheck(10, 14, 8) deverá ser true.
function triangleCheck() {
  // seu código aqui
}

// O que será verificado:
// Retorne false quando a medida de qualquer um dos lados seja maior que a soma das medidas dos outros dois.
// Retorne false quando a medida de qualquer um dos lados seja menor que o valor absoluto da diferença entre essas medidas.
// Retorne true quando a medida de qualquer um dos lados seja menor que a soma das medidas dos outros dois e maior que o valor absoluto da diferença entre essas medidas.

// Desafio 13
// Crie uma função de boas vindas ao Bar da Trybe!
// Segundo as regras desse bar, a cada bebida deve-se beber um copo de água para que não se tenha ressaca.
// Crie a função hydrate que recebe uma string, e retorne a sugestão de quantos copos de água você deve beber. 

function hydrate() {
  // seu código aqui
}

// Exemplos:
// String recebida:
//   "1 cerveja"
// String retornada:
//   "1 copo de água"

// String recebida:
//   "1 cachaça, 5 cervejas e 1 copo de vinho"
// String retornada:
//   "7 copos de água"

// String recebida:
//   "1 cachaça, 5 cervejas e 1 copo de vinho"
// String retornada:
//   "7 copos de água"

// Notas
// Para simplificar, consideraremos que qualquer coisa com um número à frente é uma bebida e que a sua string sempre virá com o formato quantidade (em número) + tipo da bebida.
// O número na frente de cada bebida está no intervalo entre 1 e 9.
// Dica: pesquise por algo similar a get all integers inside a string js.
// O que será verificado:
// Retorne a sugestão de quantos copos de água deve-se beber ao receber uma string
