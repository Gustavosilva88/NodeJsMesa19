let Pessoas = require('./modulos/dados');
// console.log(Pessoas);

let lista = {
  maiorMenorAltura: function (array) {
    let menor = array[0].altura;
    let maior = array[0].altura;


    for (let i = 1; i < array.length; i++) {
      let altAux = array[i];

      if (altAux.altura < menor) {
        menor = altAux.altura;

      } else if (altAux.altura > maior) {
        maior = altAux.altura;

      }
    }
    return 'A maior altura é: ' + maior + ' e a menor altura é: ' + menor;
  },

  mediaAltura: function (array) {
    let media = 0;
    let qtdF = 0;
    let altSoma = 0;

    for (i = 0; i < array.length; i++) {
      let sexAux = array[i]

      if (sexAux.sexo === 'F') {
        qtdF++;
        altSoma = sexAux.altura + altSoma
      }

      media = altSoma / qtdF

    }
    return ' A média de todas alturas é: ' + media;
  },
  qtdHomens: function (array) {
    let qtdM = 0;

    for (i = 0; i < array.length; i++) {
      let sexAux = array[i]

      if (sexAux.sexo === 'M') {
        qtdM++;
      }


    }
    return 'A quantidade total de Homens é:' + qtdM;
  }

};

console.log(lista.maiorMenorAltura(Pessoas));
console.log(lista.mediaAltura(Pessoas));
console.log(lista.qtdHomens(Pessoas));