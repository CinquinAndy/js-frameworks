/* 
Les types : 
*/

// en JS , le type est dynamique, et défini à la compilation, en fonction de la valeur assignée à la variable
// on peut donc assigner une valeur de n'importe quel type à une variable
// on peut également changer le type de la variable en fonction de la valeur assignée
// on peut également déclarer une variable sans assigner une valeur, et la définir plus tard

// on a différents types de variables :
// - number
// on a des "special numerics values"
// - Infinity
// - -Infinity 
// - NaN -> provient d'une opération mathématique invalide

// !!! à savoir, que les maths sont 'safe' en JS, on ne peut pas faire crash le script, le pire des cas, c'est que le résultat soit 'NaN'
// ça vient également avec le fait qu'il faut faire attention à ce qu'on fait, car le code ne nous préviendra pas ! 

// également, les nombres en JS, sont quasiment sans limites, on peut aller jusqu'à 2^53 - 1
// mais arrivé à ce point, on perd en précision, et on peut avoir des erreurs de calculs ! 
// ensuite la limite réelle actuelle est `1.7976931348623157 * 10^308` d'après la documentation de MDN
// si on a la particularité de dépassé la limite, on peux ajouter le 'n' à la fin du nombre pour le rendre 'bigint'
const bigInt = 1234567890123456789012345678901234567890n; // c'est un 'bigint'
const bigInt2 = 1234567890123456789012345678901234567890; // c'est un 'number'


// - string
// plusieurs moyens d'avoir des strings 
let string1 = 'Hello World'; // string entre guillemets simples
let string2 = "Hello World"; // string entre guillemets doubles
let string3 = `Hello World et on peut insérer des variables ${string1}`; // string entre backticks + interpolation de variables

// - boolean
// true ou false
const boolean1 = true;
const boolean2 = false;

// - null
// null est un objet qui représente une valeur nulle
// c'est la valeur par défaut quand ça existe pas ! ( aucune initialisation, ou une clé d'un objet qui n'existe pas par exemple )

// - undefined
// undefined est un objet qui représente une valeur undefined
// c'est la valeur par défaut de toutes les variables non initialisées

// - object
// on verra ça plus tard ! 


// - function
function function3 () {
    console.log('Hello World');
}
// ou on peux mettre une fonction dans une variable
const function1 = function() {
    console.log('Hello World');
};
// ou mettre une fonction fléchée dans une variable
const function2 = () => {
    console.log('Hello World');
};


// *******************************************************
// *******************************************************

let variable1 = 'Hello World';
const variable2 = 'Hello World';
var variable3 = 'Hello World';

let variable4 = {};
let variable5 = [];
let variable6 = function() {};
let variable7 = () => {};
let variable8 = 1;
let variable9;