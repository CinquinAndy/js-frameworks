/*
Fetch API et requêtes HTTP en JavaScript
*/

console.log("=== FETCH API ET REQUÊTES HTTP ===");

// Fetch API est la nouvelle façon de faire des requêtes HTTP en JavaScript
// Elle remplace XMLHttpRequest (XHR) et utilise les Promises ( XMLhttpReuquest était l'ancienne version de faire, on 
// la verra pas ici, étant donner que c'est une méthode 'outdated' ;) )
// on peut également utilisé AXIOS ?? -> historiquement, c'était une meilleure façon de faire que XMLhttpRequest, 
// mais depuis la sortie de fetch, en natif en js ce n'est plus si vrai, et dans la plupart des cas fetch est plus léger, natif.
// et tout autant efficace.

console.log("=== INTRODUCTION À FETCH ===");

// Syntaxe de base: fetch(url, options)
// fetch() retourne toujours une Promise

console.log("--- Requête GET simple ---");

async function exempleGetSimple() {
    try {
        // Requête vers une API de test (JSONPlaceholder)
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');

        // Vérifier si la requête a réussi
        if (!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status}`);
        }

        // Convertir la réponse en JSON
        const utilisateur = await response.json();
        console.log("Utilisateur récupéré:", utilisateur);

        return utilisateur;
    } catch (erreur) {
        console.error("Erreur lors de la requête:", erreur.message);
        throw erreur;
    }
}

// Appel de la fonction (sera exécuté seulement si l'API est accessible)
// exempleGetSimple();

console.log("=== MÉTHODES HTTP ===");

// Les principales méthodes HTTP et leur usage

console.log("--- GET : Récupérer des données ---");

async function obtenirUtilisateurs() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        if (!response.ok) {
            throw new Error(`Erreur: ${response.status} ${response.statusText}`);
        }

        const utilisateurs = await response.json();
        console.log(`${utilisateurs.length} utilisateurs récupérés`);

        return utilisateurs;
    } catch (erreur) {
        console.error("Erreur GET:", erreur.message);
        return [];
    }
}

console.log("--- POST : Créer des données ---");

async function creerUtilisateur(nouvelUtilisateur) {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(nouvelUtilisateur)
        });

        if (!response.ok) {
            throw new Error(`Erreur: ${response.status}`);
        }

        const utilisateurCree = await response.json();
        console.log("Utilisateur créé:", utilisateurCree);

        return utilisateurCree;
    } catch (erreur) {
        console.error("Erreur POST:", erreur.message);
        throw erreur;
    }
}

// Exemple d'utilisation
const nouvelUtilisateur = {
    name: "Jean Dupont",
    email: "jean.dupont@example.com",
    phone: "01 23 45 67 89"
};

// creerUtilisateur(nouvelUtilisateur);

console.log("--- PUT : Mettre à jour complètement ---");

async function mettreAJourUtilisateur(id, utilisateur) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(utilisateur)
        });

        const utilisateurMisAJour = await response.json();
        console.log("Utilisateur mis à jour:", utilisateurMisAJour);

        return utilisateurMisAJour;
    } catch (erreur) {
        console.error("Erreur PUT:", erreur.message);
        throw erreur;
    }
}

console.log("--- PATCH : Mettre à jour partiellement ---");

async function mettreAJourPartiel(id, modifications) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(modifications)
        });

        const utilisateurModifie = await response.json();
        console.log("Utilisateur modifié:", utilisateurModifie);

        return utilisateurModifie;
    } catch (erreur) {
        console.error("Erreur PATCH:", erreur.message);
        throw erreur;
    }
}

console.log("--- DELETE : Supprimer des données ---");

async function supprimerUtilisateur(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            console.log(`Utilisateur ${id} supprimé`);
            return true;
        } else {
            throw new Error(`Impossible de supprimer l'utilisateur ${id}`);
        }
    } catch (erreur) {
        console.error("Erreur DELETE:", erreur.message);
        return false;
    }
}

console.log("=== GESTION DES HEADERS ===");

// Les headers permettent d'envoyer des métadonnées avec les requêtes

console.log("--- Headers d'authentification ---");

async function requeteAvecAuth(token) {
    try {
        const response = await fetch('https://api.example.com/protected', {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });

        return await response.json();
    } catch (erreur) {
        console.error("Erreur authentification:", erreur.message);
        throw erreur;
    }
}

console.log("--- Headers personnalisés ---");

async function requeteAvecHeadersCustom() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('X-API-Key', 'ma-clé-secrète');
    headers.append('User-Agent', 'MonApp/1.0');

    try {
        const response = await fetch('https://api.example.com/data', {
            method: 'GET',
            headers: headers
        });

        return await response.json();
    } catch (erreur) {
        console.error("Erreur headers custom:", erreur.message);
        throw erreur;
    }
}

console.log("--- Vérification du statut de réponse ---");
async function verifierStatutReponse(url) {
    try {
        const response = await fetch(url);

        console.log("Statut:", response.status);
        console.log("Statut texte:", response.statusText);
        console.log("URL finale:", response.url);
        console.log("Redirected:", response.redirected);

        // Différents codes de statut
        if (response.status >= 200 && response.status < 300) {
            console.log("✅ Succès");
        } else if (response.status >= 300 && response.status < 400) {
            console.log("↗️ Redirection");
        } else if (response.status >= 400 && response.status < 500) {
            console.log("❌ Erreur client");
        } else if (response.status >= 500) {
            console.log("💥 Erreur serveur");
        }

        return response;
    } catch (erreur) {
        console.error("Erreur réseau:", erreur.message);
        throw erreur;
    }
}

console.log("=== TIMEOUT ET ANNULATION ===");
console.log("--- Timeout avec AbortController ---");

async function requeteAvecTimeout(url, timeoutMs = 5000) {
    // Créer un AbortController pour annuler la requête
    const controller = new AbortController();

    // Programmer l'annulation après le timeout
    const timeoutId = setTimeout(() => {
        controller.abort();
    }, timeoutMs);

    try {
        const response = await fetch(url, {
            signal: controller.signal
        });

        // Annuler le timeout si la requête réussit
        clearTimeout(timeoutId);

        return await response.json();
    } catch (erreur) {
        clearTimeout(timeoutId);

        if (erreur.name === 'AbortError') {
            throw new Error(`Timeout après ${timeoutMs}ms`);
        }
        throw erreur;
    }
}

console.log("--- Annulation manuelle ---");

let controllerGlobal = null;
function demarrerRequeteLongue() {
    controllerGlobal = new AbortController();
    return fetch('https://httpbin.org/delay/10', {
        signal: controllerGlobal.signal
    })
    .then(response => response.json())
    .then(data => console.log("Requête terminée:", data))
    .catch(erreur => {
        if (erreur.name === 'AbortError') {
            console.log("Requête annulée par l'utilisateur");
        } else {
            console.error("Erreur:", erreur.message);
        }
    });
}

function annulerRequete() {
    if (controllerGlobal) {
        controllerGlobal.abort();
        console.log("Annulation demandée");
    }
}
