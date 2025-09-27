/*
La gestion d'erreurs avec try...catch 
*/

console.log("=== GESTION D'ERREURS AVEC TRY...CATCH ===");

// La gestion d'erreurs permet de traiter les erreurs sans faire planter l'application
// Syntaxe de base: try { code_qui_peut_échouer } catch (erreur) { traitement_erreur }

console.log("--- Exemple de base ---");

try {
    let objetInexistant = null;
    console.log(objetInexistant.propriete);
} catch (erreur) {
    console.log("Une erreur s'est produite:", erreur.message);
}

console.log("Le programme continue après l'erreur");

console.log("=== TYPES D'ERREURS COURANTES ===");

// TypeError: quand on utilise une valeur d'un type incorrect
console.log("--- TypeError ---");
try {
    let nombre = null;
    nombre.toUpperCase(); // TypeError: cannot read property of null
} catch (erreur) {
    console.log(`Type d'erreur: ${erreur.name}`);
    console.log(`Message: ${erreur.message}`);
}

// ReferenceError: quand on utilise une variable non déclarée
console.log("--- ReferenceError ---");
try {
    console.log(variableInexistante); // ReferenceError
} catch (erreur) {
    console.log(`Type d'erreur: ${erreur.name}`);
    console.log(`Message: ${erreur.message}`);
}

// SyntaxError: erreur de syntaxe (généralement détectée avant l'exécution)
console.log("--- SyntaxError (simulation) ---");
try {
    // SyntaxError ne peut pas être attrapée avec try...catch car elle empêche l'exécution
    // Exemple: eval() avec du code invalide
    eval("let x = ;"); // Code JavaScript invalide
} catch (erreur) {
    console.log(`Type d'erreur: ${erreur.name}`);
    console.log(`Message: ${erreur.message}`);
}

// RangeError: quand une valeur est hors de la plage acceptable
console.log("--- RangeError ---");
try {
    let array = new Array(-1); // Taille négative impossible
} catch (erreur) {
    console.log(`Type d'erreur: ${erreur.name}`);
    console.log(`Message: ${erreur.message}`);
}

console.log("=== TRY...CATCH...FINALLY ===");

// Le bloc finally s'exécute TOUJOURS, qu'il y ait erreur ou non
console.log("--- Exemple avec finally ---");

function exempleFinally(casErreur) {
    try {
        console.log("Début du traitement");

        if (casErreur) {
            throw new Error("Erreur simulée");
        }

        console.log("Traitement réussi");
        return "Succès";
    } catch (erreur) {
        console.log("Erreur capturée:", erreur.message);
        return "Échec";
    } finally {
        console.log("Nettoyage (finally s'exécute toujours)");
    }
}

console.log("Résultat sans erreur:", exempleFinally(false));
console.log("Résultat avec erreur:", exempleFinally(true));

console.log("=== LANCER DES ERREURS CUSTOM (THROW) ===");

// On peut lancer nos propres erreurs avec throw
function diviser(a, b) {
    try {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new TypeError("Les paramètres doivent être des nombres");
        }

        if (b === 0) {
            throw new Error("Division par zéro impossible");
        }

        return a / b;
    } catch (erreur) {
        console.log(`Erreur dans diviser(): ${erreur.message}`);
        throw erreur; // Re-lancer l'erreur pour le code appelant
    } finally {
        console.log("Nettoyage (finally s'exécute toujours)");
    }
}
