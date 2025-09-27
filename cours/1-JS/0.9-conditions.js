/*
Les conditions JavaScript
*/

console.log("=== CONDITIONS IF / ELSE ===");

// Syntaxe de base: if (condition) { ... }
let age = 18;

if (age >= 18) {
    console.log("Vous êtes majeur");
}

// if...else: exécuter du code alternatif
let temperature = 15;

if (temperature > 20) {
    console.log("Il fait chaud");
} else {
    console.log("Il fait froid");
}

// Chaîner plusieurs conditions avec else if
let note = 85;

if (note >= 90) {
    console.log("Excellent");
} else if (note >= 80) {
    console.log("Très bien");
} else if (note >= 70) {
    console.log("Bien");
} else if (note >= 60) {
    console.log("Passable");
} else {
    console.log("Insuffisant");
}

console.log("=== OPÉRATEURS DE COMPARAISON ===");

// Égalité faible (==) vs égalité stricte (===)
console.log("--- Égalité faible vs stricte ---");
console.log(5 == "5");   // true - conversion automatique
console.log(5 === "5");  // false - types différents

console.log(null == undefined);   // true
console.log(null === undefined);  // false

console.log(0 == false);   // true
console.log(0 === false);  // false

// CONSEIL: utilisez toujours === et !== pour éviter les surprises !

// Autres opérateurs de comparaison
let a = 10;
let b = 20;

console.log("--- Opérateurs de comparaison ---");
console.log(`${a} < ${b}: ${a < b}`);     // true
console.log(`${a} > ${b}: ${a > b}`);     // false
console.log(`${a} <= ${b}: ${a <= b}`);   // true
console.log(`${a} >= ${b}: ${a >= b}`);   // false
console.log(`${a} !== ${b}: ${a !== b}`); // true

console.log("=== OPÉRATEURS LOGIQUES ===");

// && (ET logique) - toutes les conditions doivent être vraies
let utilisateurConnecte = true;
let ageUtilisateur = 25;

if (utilisateurConnecte && ageUtilisateur >= 18) {
    console.log("Accès autorisé");
}

// || (OU logique) - au moins une condition doit être vraie
let estAdmin = false;
let estModerator = true;

if (estAdmin || estModerator) {
    console.log("Vous pouvez modérer le contenu");
}

// ! (NON logique) - inverse la valeur
let estInactif = false;

if (!estInactif) {
    console.log("L'utilisateur est actif");
}

console.log("=== VALEURS TRUTHY ET FALSY ===");

// En JavaScript, certaines valeurs sont considérées comme "falsy"
let valeursFalsy = [false, 0, "", null, undefined, NaN];

// Toutes les autres valeurs sont "truthy"
console.log("--- Valeurs truthy ---");
let valeursTruthy = [true, 1, "hello", [], {}, "0", " "];

console.log("=== CONDITION TERNAIRE ===");

// Syntaxe: condition ? valeurSiVrai : valeurSiFaux
// C'est un raccourci pour if...else simple

let pointsVie = 75;
let statutSante = pointsVie > 50 ? "En bonne santé" : "Blessé";
console.log(`Statut: ${statutSante}`);

// Ternaire imbriquée (à utiliser avec modération)
let score = 85;
let mention = score >= 90 ? "Excellent" :
              score >= 80 ? "Très bien" :
              score >= 70 ? "Bien" : "Peut mieux faire";
console.log(`Mention: ${mention}`);

console.log("=== SWITCH / CASE ===");

// Utile quand on compare une même variable à plusieurs valeurs
let jourSemaine = "mardi";

switch (jourSemaine) {
    case "lundi":
        console.log("Début de semaine, courage !");
        break;
    case "mardi":
    case "mercredi":
    case "jeudi":
        console.log("Milieu de semaine");
        break;
    case "vendredi":
        console.log("Presque le weekend !");
        break;
    case "samedi":
    case "dimanche":
        console.log("Weekend ! 🎉");
        break;
    default:
        console.log("Jour non reconnu");
}

// Exemple avec des nombres
let mois = 3;
let nomMois;

switch (mois) {
    case 1: nomMois = "Janvier"; break;
    case 2: nomMois = "Février"; break;
    case 3: nomMois = "Mars"; break;
    case 4: nomMois = "Avril"; break;
    case 5: nomMois = "Mai"; break;
    case 6: nomMois = "Juin"; break;
    default: nomMois = "Mois invalide";
}

console.log(`Mois ${mois}: ${nomMois}`);

console.log("=== SHORT-CIRCUIT EVALUATION ===");

// && peut être utilisé pour exécuter du code conditionnellement
let user = { nom: "Alice", estConnecte: true };
user.estConnecte && console.log(`Bienvenue ${user.nom}!`);
// Équivalent à: if (user.estConnecte) { console.log(`Bienvenue ${user.nom}!`); }

// || peut être utilisé pour définir des valeurs par défaut
let nomUtilisateur = null;
let nomAffiche = nomUtilisateur || "Invité";
console.log(`Bonjour ${nomAffiche}!`);

// ?? (nullish coalescing) - seulement pour null et undefined
let config = { theme: null };
let theme = config.theme ?? "clair";
console.log(`Thème: ${theme}`);

// Différence entre || et ??
let valeur1 = 0;
console.log("Avec ||:", valeur1 || "défaut");    // "défaut" (car 0 est falsy)
console.log("Avec ??:", valeur1 ?? "défaut");    // 0 (car 0 n'est ni null ni undefined)