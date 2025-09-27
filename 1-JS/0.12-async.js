/*
La programmation asynchrone en JavaScript : Promises, async/await
*/

console.log("=== PROGRAMMATION ASYNCHRONE ===");

// JavaScript est mono-thread mais peut gérer l'asynchrone
// Cela permet de ne pas bloquer l'exécution pendant les opérations longues

console.log("=== RAPPEL : SYNCHRONE VS ASYNCHRONE ===");

console.log("--- Code synchrone (bloquant) ---");
console.log("1. Début");
console.log("2. Traitement");
console.log("3. Fin");

console.log("--- Code asynchrone (non-bloquant) ---");
console.log("1. Début");

setTimeout(() => {
    console.log("2. Traitement asynchrone (dans 1ms)");
}, 1);

console.log("3. Fin (s'affiche avant le traitement async!)");

console.log("=== CALLBACKS (ANCIEN STYLE) ===");

// Les callbacks étaient la première façon de gérer l'asynchrone
// Problème: "Callback Hell" avec l'imbrication

console.log("--- Exemple de callback simple ---");

function operationAsync(callback) {
    setTimeout(() => {
        const resultat = Math.random() > 0.5 ? "Succès" : "Erreur";
        callback(resultat);
    }, 100);
}

operationAsync((resultat) => {
    console.log("Résultat du callback:", resultat);
});

console.log("--- Problème du Callback Hell ---");

// ❌ Code difficile à lire et maintenir
function callbackHell() {
    setTimeout(() => {
        console.log("Étape 1");
        setTimeout(() => {
            console.log("Étape 2");
            setTimeout(() => {
                console.log("Étape 3");
                // Et ça continue... 😱
            }, 100);
        }, 100);
    }, 100);
}

callbackHell();

console.log("=== PROMISES (ES6) ===");

// Les Promises résolvent le problème du callback hell
// États d'une Promise: pending, fulfilled (resolved), rejected

console.log("--- Création d'une Promise ---");

function creerPromise(succes = true) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (succes) {
                resolve("Opération réussie!");
            } else {
                reject(new Error("Opération échouée!"));
            }
        }, 100);
    });
}

console.log("--- Utilisation avec .then() et .catch() ---");

creerPromise(true)
    .then(resultat => {
        console.log("Succès:", resultat);
        return "Données transformées";
    })
    .then(donnees => {
        console.log("Transformation:", donnees);
    })
    .catch(erreur => {
        console.error("Erreur:", erreur.message);
    })
    .finally(() => {
        console.log("Nettoyage (always executed)");
    });

console.log("--- Gestion des erreurs ---");

creerPromise(false)
    .then(resultat => {
        console.log("Cette ligne ne s'exécutera pas");
    })
    .catch(erreur => {
        console.error("Erreur capturée:", erreur.message);
    });

console.log("=== PROMISE.ALL, PROMISE.RACE, ETC. ===");

// Promise.all: attend que TOUTES les promises se terminent
console.log("--- Promise.all ---");

const promiseA = creerPromise(true);
const promiseB = new Promise(resolve => setTimeout(() => resolve("B"), 150));
const promiseC = new Promise(resolve => setTimeout(() => resolve("C"), 200));

Promise.all([promiseA, promiseB, promiseC])
    .then(resultats => {
        console.log("Tous les résultats:", resultats); // ["Opération réussie!", "B", "C"]
    })
    .catch(erreur => {
        console.error("Une des promises a échoué:", erreur);
    });

// Promise.race: retourne le résultat de la PREMIÈRE promise qui se termine
console.log("--- Promise.race ---");

const promiseLente = new Promise(resolve => setTimeout(() => resolve("Lente"), 300));
const promiseRapide = new Promise(resolve => setTimeout(() => resolve("Rapide"), 100));

Promise.race([promiseLente, promiseRapide])
    .then(resultat => {
        console.log("Premier résultat:", resultat); // "Rapide"
    });

// Promise.allSettled: attend toutes les promises, même en cas d'erreur
console.log("--- Promise.allSettled ---");

const promiseSuccess = Promise.resolve("Succès");
const promiseError = Promise.reject(new Error("Erreur"));

Promise.allSettled([promiseSuccess, promiseError])
    .then(resultats => {
        console.log("Tous les résultats (settled):", resultats);
        // [{ status: "fulfilled", value: "Succès" }, { status: "rejected", reason: Error }]
    });

console.log("=== ASYNC/AWAIT (ES2017) ===");

// async/await rend le code asynchrone plus lisible
// Une fonction async retourne toujours une Promise

console.log("--- Fonction async basique ---");

async function fonctionAsync() {
    try {
        console.log("Début de la fonction async");

        const resultat1 = await creerPromise(true);
        console.log("Résultat 1:", resultat1);

        const resultat2 = await new Promise(resolve =>
            setTimeout(() => resolve("Deuxième résultat"), 100)
        );
        console.log("Résultat 2:", resultat2);

        return "Fonction terminée";
    } catch (erreur) {
        console.error("Erreur dans fonction async:", erreur.message);
        throw erreur; // Re-lancer l'erreur
    }
}

// Appel d'une fonction async
fonctionAsync()
    .then(resultat => console.log("Retour de la fonction:", resultat))
    .catch(erreur => console.error("Erreur finale:", erreur.message));

console.log("--- Comparaison Promises vs async/await ---");

// Avec Promises (chaînage)
function avecPromises() {
    return creerPromise(true)
        .then(resultat1 => {
            console.log("Promise - Résultat 1:", resultat1);
            return creerPromise(true);
        })
        .then(resultat2 => {
            console.log("Promise - Résultat 2:", resultat2);
            return "Terminé avec Promises";
        });
}

// Avec async/await (plus lisible)
async function avecAsyncAwait() {
    const resultat1 = await creerPromise(true);
    console.log("Async - Résultat 1:", resultat1);

    const resultat2 = await creerPromise(true);
    console.log("Async - Résultat 2:", resultat2);

    return "Terminé avec async/await";
}
