/* 
Les scopes : 
*/

// le scope est l'ensemble des variables accessibles dans un bloc de code
// on a 2 types de scopes :
// - global
// - local

// le scope global est l'ensemble des variables accessibles dans le script
// le scope local est l'ensemble des variables accessibles dans un bloc de code

const age = 20;
function sayHello() {
    const name = 'John';
    console.log(`Hello ${name}, you are ${age} years old`);
}

// console.log(`Hello ${name}, you are ${age} years old`); // erreur, name n'est pas accessible ici


// *******************************************************
// *******************************************************

// Différences entre var, let et const

// 1. VAR - Function scoped
function testVar() {
    if (true) {
        var x = 1;
    }
    console.log(x); // 1 - accessible car var est function-scoped
}

// 2. LET - Block scoped
function testLet() {
    if (true) {
        let y = 1;
    }
    // console.log(y); // erreur - y n'est pas accessible ici
}

// 3. CONST - Block scoped, non-reassignable
function testConst() {
    const z = 1;
    // z = 2; // erreur - const ne peut pas être réassigné
}

// Hoisting avec var
console.log(hoistedVar); // undefined (pas d'erreur)
var hoistedVar = "Je suis hoisted";

// Hoisting avec let/const
// console.log(hoistedLet); // erreur - ReferenceError
let hoistedLet = "Je ne suis pas accessible avant déclaration";

// Redéclaration
var a = 1;
var a = 2; // OK avec var

let b = 1;
// let b = 2; // erreur avec let

// Exemples pratiques de scopes

// Global scope
var globalVar = "Je suis global";
let globalLet = "Moi aussi";
const globalConst = "Moi aussi";

function scopeExample() {
    // Function scope
    var functionVar = "Je suis dans la fonction";
    let functionLet = "Moi aussi";
    const functionConst = "Moi aussi";
    
    if (true) {
        // Block scope
        var blockVar = "Je suis accessible partout dans la fonction";
        let blockLet = "Je ne suis accessible que dans ce bloc";
        const blockConst = "Moi aussi";
        
        console.log(globalVar, functionVar, blockVar); // Tous accessibles
        console.log(blockLet, blockConst); // Accessibles dans le bloc
    }
    
    console.log(blockVar); // Accessible car var est function-scoped
    // console.log(blockLet); // erreur - pas accessible hors du bloc
    // console.log(blockConst); // erreur - pas accessible hors du bloc
}

// Boucles et closures
console.log("=== Exemple avec boucles ===");

// Avec var - problème classique
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log("var:", i), 100); // affiche 3, 3, 3
}

// Avec let - comportement attendu
for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log("let:", j), 200); // affiche 0, 1, 2
}

// Temporal Dead Zone
function temporalDeadZone() {
    console.log("Début de la fonction");
    // console.log(tempLet); // ReferenceError - Temporal Dead Zone
    let tempLet = "Maintenant je suis accessible";
    console.log(tempLet);
}

// Objets et const
const obj = { name: "John" };
obj.name = "Jane"; // OK - on modifie le contenu, pas la référence
obj.age = 25; // OK
// obj = {}; // erreur - on ne peut pas réassigner

const arr = [1, 2, 3];
arr.push(4); // OK - on modifie le contenu
// arr = []; // erreur - on ne peut pas réassigner

