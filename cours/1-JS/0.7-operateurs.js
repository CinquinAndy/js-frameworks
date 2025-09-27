/*
Les opérateurs et expressions JavaScript
*/


console.log("=== INCRÉMENTATION / DÉCRÉMENTATION ===");

let compteur = 5;
console.log(compteur++); // 5 (puis compteur devient 6)
console.log(++compteur); // 7 (compteur devient 7 puis on affiche)
console.log(compteur--); // 7 (puis compteur devient 6)
console.log(--compteur); // 5 (compteur devient 5 puis on affiche)

console.log("=== OPÉRATEURS UNAIRES ===");

let texte = "123";
console.log(+texte); // 123 (conversion en nombre car c'est un string et qu'on applique une opération arithmétique)
console.log(-texte); // -123 (conversion puis négation)

console.log(!true); // false (NON logique)
console.log(~5); // -6 (NON binaire)
// L'opérateur binaire NON (~) prend l'opposé de chaque bit de son opérande et fournit la valeur ainsi obtenue. 
// À l'instar des autres opérateurs binaires, il convertit son opérande en un entier signé sur 32 bits.
// const a = 5; // 00000000000000000000000000000101
// const b = -3; // 11111111111111111111111111111101

// console.log(~a); // 11111111111111111111111111111010
// Expected output: -6

// console.log(~b); // 00000000000000000000000000000010
// Expected output: 2

console.log("=== OPÉRATEURS ARITHMÉTIQUES ===");

console.log(10 + 5); // 15 (addition)
console.log(10 - 5); // 5 (soustraction)
console.log(10 * 5); // 50 (multiplication)
console.log(10 / 5); // 2 (division)
console.log(10 % 3); // 1 (reste/modulo)
console.log(2 ** 3); // 8 (exponentielle: 2^3)

console.log("=== OPÉRATEURS DE COMPARAISON ===");

console.log(5 < 10); // true
console.log(5 > 10); // false
console.log(5 <= 5); // true
console.log(5 >= 10); // false

console.log("=== OPÉRATEURS D'ÉGALITÉ ===");

console.log(5 == "5"); // true (égalité avec conversion)
console.log(5 === "5"); // false (égalité stricte, pas de conversion)
console.log(5 != "6"); // true (inégalité avec conversion)
console.log(5 !== "5"); // true (inégalité stricte)

console.log("=== OPÉRATEURS LOGIQUES ===");

console.log(true && false); // false (ET logique)
console.log(true || false); // true (OU logique)
console.log(null ?? "défaut"); // "défaut" (coalescence des nuls)

let nom = null;
let affichage = nom || "Anonyme"; // "Anonyme"
console.log(affichage);

console.log("=== OPÉRATEUR TERNAIRE ===");

let age = 18;
let statut = age >= 18 ? "majeur" : "mineur";
console.log(statut); // "majeur"

// Ternaire imbriqué
let note = 85;
let mention = note >= 90 ? "excellent" : note >= 70 ? "bien" : "à améliorer";
console.log(mention); // "bien"

console.log("=== CHAÎNAGE OPTIONNEL ===");

let client = {
    nom: "Jean",
    adresse: {
        ville: "Paris"
    }
};

console.log(client?.nom); // "Jean"
console.log(client?.adresse?.ville); // "Paris"
console.log(client?.telephone?.numero); // undefined (pas d'erreur!)

console.log("=== OPÉRATEURS D'AFFECTATION ===");

let x = 10;
x += 5; // équivalent à x = x + 5
console.log(x); // 15

x -= 3; // x = x - 3
console.log(x); // 12

x *= 2; // x = x * 2
console.log(x); // 24

x /= 4; // x = x / 4
console.log(x); // 6

x **= 2; // x = x ** 2
console.log(x); // 36

// Affectation avec décomposition
let [premier, second] = [10, 20];
console.log(premier, second); // 10 20

let {nom: nomClient, age: ageClient} = {nom: "Sophie", age: 25};
console.log(nomClient, ageClient); // "Sophie" 25

console.log("=== OPÉRATEURS BINAIRES ===");

console.log(5 & 3); // 1 (ET binaire: 101 & 011 = 001)
console.log(5 | 3); // 7 (OU binaire: 101 | 011 = 111)
console.log(5 ^ 3); // 6 (OU exclusif: 101 ^ 011 = 110)

console.log(5 << 1); // 10 (décalage gauche: 101 -> 1010)
console.log(5 >> 1); // 2 (décalage droite: 101 -> 10)
