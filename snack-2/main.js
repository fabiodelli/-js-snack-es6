/* Snack 2

A partire da un array di stringhe, crea un secondo array formattando le stringhe 
del primo array in minuscolo e con l’iniziale maiuscola.

Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’] */

const listaAuto =[ "PAnDA","moDEl-y","t-ROc" ]

const listaAutoCorrect = listaAuto.map(stringa => {
  const minuscolo = stringa.toLowerCase();
  return minuscolo.charAt(0).toUpperCase() + minuscolo.slice(1);
});

console.log(listaAutoCorrect);