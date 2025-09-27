/* 
Les variables : 
*/

let message; // déclaration de la variable message
message = 'Hello World'; // assignation de la valeur 'Hello World' à la variable message
console.log(message); // affichage de la valeur de la variable message

// on peut également être plus concis :
let message2 = 'Hello World'; // déclaration et assignation de la valeur 'Hello World' à la variable message2
console.log(message2); // affichage de la valeur de la variable message2

// et également déclarer et assigner plusieurs variables en une seule fois :
let message3 = 'Hello World', message4 = 41, message5 = true; // ( mais pas conseillé, pour des raisons de lisibilité )
// -> par défaut en js, nous n'avons pas besoin de déclarer le type de la variable

// dans les scripts un peu plus vieux, on trouve également l'utilisation de 'var'
var message6 = 'Hello World'; // déclaration et assignation de la valeur 'Hello World' à la variable message6
// en réalité, il y a quelques différences entre 'let' et 'var', mais on les verra plus tard ! 

// on a également la possibilité de déclarer une constante :
const message7 = 'Hello World'; // déclaration et assignation de la valeur 'Hello World' à la variable message7
// une constante est une variable dont la valeur ne peut pas être modifiée
// -> on ne peut pas la réassigner
// -> on ne peut pas la déclarer sans assigner une valeur
// -> on ne peut pas la déclarer et la réassigner dans la même instruction
// -> grossièrement c'est comme 'let' mais sans modification possible ! 

// *******************************************************
// *******************************************************

