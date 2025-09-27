# Prérequis JavaScript - Ressources et Compétences Nécessaires

Ici je vais surtout vous rediriger vers les ressources intéressantes que vous pouvez apprendre, si vous pensez ne pas être au point. L'idée est que toutes ces compétences sont nécessaires avant de pouvoir continuer sereinement, je vais vous parler ensuite en prenant en compte que tout ça est compris et maîtrisé !

## Internet & Fondamentaux Web

Déjà, on va parler très rapidement de ce que c'est internet, et des grosses bases, si vous les avez et que le plan suivant vous parle, vous pouvez sauter cette partie ;) !

### Internet c'est quoi ?
- **Comprendre les bases du réseau** :
  - [How the Internet Works in 5 Minutes - YouTube](https://www.youtube.com/watch?v=7_LPdttKXPc) : cette vidéo est chouette si vous vous débrouillez en anglais !
  - [Adresses IP : comprendre l'essentiel en 7 minutes - YouTube](https://www.youtube.com/watch?v=Oc7Ts8tVjyE) → cette chaîne en FR est très sympa également !

L'idée, ici c'est juste comprendre très grossièrement tout ça ! Pour ceux qui n'ont pas ces bases là, hésitez pas à aller plus loin et vous informer sur le sujet !
(petit point bibliographie, vous pouvez ajouter dans votre liste de bouquins, un livre qui parle de réseau et de tout ça)

### HTTP c'est quoi ?
- **Protocole de communication web** :
  - [Why do we need HTTPS? - How HTTPS works](https://howhttps.works/why-do-we-need-https/) → petit site en mode illustré pour expliquer tout ça simplement
  - En rentrant dans le détail : [What is HTTP? | Cloudflare](https://www.cloudflare.com/en-gb/learning/ddos/glossary/hypertext-transfer-protocol-http/)

### Les noms de domaines ?
- **Comprendre l'adressage web** :
  - La doc de MDN est très bien pour aller voir ça : [What is a Domain Name? - Learn web development | MDN](https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name)

### Les DNS ?
- **Système de résolution de noms** :
  - En mode comics : [Fonctionnement du DNS. Qu'est-ce qui relie les sites Web aux adresses IP ?](https://howdns.works/fr/ep1/)
  - Version expliquée de chez Cloudflare : [What is DNS? | How DNS works | Cloudflare](https://www.cloudflare.com/en-gb/learning/dns/what-is-dns/)

### Comment un navigateur fonctionne ?
- **Comprendre l'environnement d'exécution** :
  - Les explications sur les différents navigateurs : [What is a Web Browser: Definition, Types, and Features](https://www.ramotion.com/blog/what-is-web-browser/)

## HTML

### Les fondamentaux :
[Toutes les bases du HTML](https://roadmap.sh/ai/course/html-fundamentals-for-beginners)

### L'accessibilité en HTML :
Ça parle de ARIA, de pourquoi c'est important, de la WCAG, des attributes roles, des properties HTML, des states HTML (aria-checked, aria-selected, aria-pressed).
[Voir le cours sur Roadmap.sh en conséquence](https://roadmap.sh/ai/course/html-accessibility-attributes-a-beginners-guide)

### La sémantique HTML :
Ça parle des concepts généraux, pourquoi c'est utile, les différents blocs, leurs utilités, `<section>, <article>, <figure>, <h1>, <h2>`... etc etc...
Ça parle également de Microdata, RDFa, et JSON-LD.
[Le cours sur la sémantique](https://roadmap.sh/ai/course/semantic-html-a-beginners-guide)

## CSS

L'idée ici, c'est de maîtriser quasiment parfaitement les concepts de bases, donc placer un élément, changer sa couleur, changer la taille, faire des flexbox, des grids, la différence entre l'absolu et le fixe etc...

Je vous conseille d'aller voir là si rien ne vous parle :
- https://roadmap.sh/ai/course/css-basics-styling-your-web-pages
- https://roadmap.sh/ai/course/css-layouts-a-beginners-guide
- https://roadmap.sh/ai/course/css-positioning-a-beginners-guide
- https://roadmap.sh/ai/course/css-selectors-and-combinators-a-beginners-guide
- https://roadmap.sh/ai/course/css-variables-a-beginners-guide
- https://roadmap.sh/ai/course/css-media-queries-a-beginners-guide-to-responsive-design

### Apprendre en jouant :

Jouez avec les grenouilles pour apprendre les flexbox :
- [Flexbox Froggy - A game for learning CSS flexbox](https://flexboxfroggy.com/)

Jouez avec des carottes ?! pour apprendre les grid :
- [Grid Garden - A game for learning CSS grid](https://cssgridgarden.com/)

### Ressource complète :
Une grande fiche magique avec 13 millions de liens vers pleins de ressources (export de mon obsidian perso ;) )
- [r2-andycinquin.andy-cinquin.fr/CSS_3_73f6322a7b.pdf](https://r2-andycinquin.andy-cinquin.fr/CSS_3_73f6322a7b.pdf)

## Git

Évidemment, je vais avoir besoin de récupérer votre code dans la suite du cours, donc, tout ce qu'il faut savoir sur git et tout ce qui touche à ça :

- [roadmap.sh/git-github](https://roadmap.sh/git-github)
- Je veux juste que vous puissiez partager votre code directement sur Github (@CinquinAndy sur Github) !
- Je ferais les corrections et donnerai vos notes au fur et à mesure ! ;)

## JavaScript - Compétences Essentielles

Maintenant, la partie JavaScript ! Voici tout ce que vous devez maîtriser avant de continuer :

### 🚀 Setup et premiers pas

**Savoir exécuter du JavaScript** :
- Créer un fichier `.js`
- L'exécuter avec `node nom_du_fichier.js`
- Utiliser `console.log()` pour déboguer

### 📦 Variables et Déclarations

**Maîtriser les différents types de déclarations** :
- `let` pour les variables modifiables
- `const` pour les constantes
- Comprendre pourquoi éviter `var` (scope et hoisting)
- Savoir quand utiliser chaque type

**Exemple crucial** :
```javascript
let message = 'Hello World';        // Variable modifiable
const PI = 3.14159;                 // Constante
let utilisateur, age, email;        // Déclarations multiples
```

### 🏷️ Types de Données

**Connaître tous les types primitifs** :
- `number` (et les cas spéciaux : `Infinity`, `-Infinity`, `NaN`)
- `string` (guillemets simples, doubles, backticks pour l'interpolation)
- `boolean` (`true`/`false`)
- `null` et `undefined` (et leurs différences !)
- `bigint` pour les gros nombres
- `symbol` (plus avancé)

**Comprendre la conversion de types** :
```javascript
console.log(5 == "5");   // true (conversion automatique)
console.log(5 === "5");  // false (pas de conversion)
```

### 🔍 Scopes et Portée

**Comprendre où les variables sont accessibles** :
- Scope global vs local
- Block scope avec `let` et `const`
- Function scope
- Éviter la pollution du scope global

### 🏗️ Objets et Structures

**Manipuler les objets comme un pro** :
- Création d'objets : `{}`, `new Object()`
- Accès aux propriétés : `obj.property` vs `obj['property']`
- Ajouter/supprimer des propriétés
- Vérifier l'existence : `'key' in obj`
- Parcourir : `Object.keys()`, `Object.values()`, `Object.entries()`

**Exemple pratique** :
```javascript
let utilisateur = {
    nom: 'Alice',
    age: 25,
    'email-professionnel': 'alice@entreprise.com'  // Clé avec tiret
};
```

### 🧬 Prototypage (Concept Crucial !)

**Comprendre l'héritage JavaScript** :
- Comment fonctionne la chaîne de prototypes
- `Constructor.prototype`
- Pourquoi `array.push()` fonctionne (héritage de `Array.prototype`)
- Ne jamais remplacer complètement un prototype

**Exemple fondamental** :
```javascript
function Person(name) {
    this.name = name;
}
Person.prototype.greet = function() {
    return `Hello, I'm ${this.name}`;
};
```

### 🏛️ Classes (Syntaxe Moderne)

**Maîtriser la syntaxe ES6+** :
- Constructeur et méthodes
- Héritage avec `extends` et `super`
- Méthodes statiques
- Comprendre que c'est du "sucre syntaxique" sur les prototypes

### ⚡ Opérateurs et Expressions

**Tous les opérateurs essentiels** :
- Arithmétiques : `+`, `-`, `*`, `/`, `%`, `**`
- Comparaison : `<`, `>`, `<=`, `>=`, `==`, `===`, `!=`, `!==`
- Logiques : `&&`, `||`, `!`
- Affectation : `=`, `+=`, `-=`, `*=`, `/=`
- Unaires : `++`, `--`, `+`, `-`
- Ternaire : `condition ? vrai : faux`
- Coalescence : `??` et chaînage optionnel `?.`

### 🔄 Boucles

**Maîtriser toutes les structures itératives** :
- `for` classique (avec index)
- `while` et `do...while`
- `for...in` (pour les objets - clés)
- `for...of` (pour les iterables - valeurs)
- `break` et `continue`
- Labels pour boucles imbriquées

**Savoir quand utiliser quoi** :
```javascript
// Pour les tableaux : for...of
for (let item of array) { }

// Pour les objets : for...in
for (let key in obj) { }

// Quand on a besoin de l'index : for classique
for (let i = 0; i < array.length; i++) { }
```

### 🔀 Conditions

**Toutes les structures conditionnelles** :
- `if`, `else if`, `else`
- `switch...case` (et l'importance du `break`)
- Opérateur ternaire
- Short-circuit evaluation (`&&`, `||`)
- Valeurs truthy/falsy (très important !)

### 🛡️ Gestion d'Erreurs

**Try...catch...finally** :
- Capturer les erreurs sans planter l'app
- Types d'erreurs : `TypeError`, `ReferenceError`, `SyntaxError`, `RangeError`
- Lancer ses propres erreurs avec `throw`
- Créer des classes d'erreurs custom
- Le bloc `finally` qui s'exécute toujours

### 🗂️ Méthodes de Tableaux (Crucial !)

**Les méthodes fonctionnelles indispensables** :
- `map()` : transformer chaque élément
- `filter()` : filtrer selon une condition
- `find()` : trouver le premier élément
- `some()` / `every()` : tester des conditions
- `reduce()` : réduire à une valeur
- `forEach()` : exécuter une action (attention : ne retourne rien !)
- `sort()` : trier (attention : modifie l'original !)
- `includes()` : vérifier la présence

**Chaînage de méthodes** (super important) :
```javascript
let result = users
    .filter(user => user.active)
    .map(user => user.name)
    .sort();
```

### ⏰ Programmation Asynchrone

**Comprendre l'asynchrone** :
- Différence synchrone vs asynchrone
- Callbacks (et le callback hell)
- **Promises** : `new Promise()`, `.then()`, `.catch()`, `.finally()`
- `Promise.all()`, `Promise.race()`, `Promise.allSettled()`
- **async/await** : syntaxe moderne plus lisible
- Gestion d'erreurs avec `try...catch` en async

### 🌐 Requêtes HTTP avec Fetch

**Fetch API moderne** :
- Syntaxe de base : `fetch(url, options)`
- Méthodes HTTP : GET, POST, PUT, PATCH, DELETE
- Headers et authentification
- Gestion des réponses et codes de statut
- Timeout et annulation avec `AbortController`
- Différence avec XMLHttpRequest et Axios

**Exemple type** :
```javascript
async function fetchUserData(id) {
    try {
        const response = await fetch(`/api/users/${id}`);
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Erreur:', error);
        throw error;
    }
}
```

## 🎯 Points Cruciaux à Retenir

### Différences importantes :
- `==` vs `===` (toujours utiliser `===`)
- `var` vs `let` vs `const`
- `for...in` vs `for...of`
- `map()` vs `forEach()` (map retourne, forEach non)
- `null` vs `undefined`

### Pièges classiques :
- Les valeurs falsy : `false`, `0`, `""`, `null`, `undefined`, `NaN`
- `sort()` modifie le tableau original
- Les fonctions fléchées et le `this`
- L'asynchrone ne bloque pas l'exécution

### Bonnes pratiques :
- Toujours gérer les erreurs (try...catch, .catch())
- Utiliser `const` par défaut, `let` si besoin de réassigner
- Préférer les méthodes fonctionnelles aux boucles when possible
- Valider les données avant traitement

---

## ✅ Auto-évaluation

Avant de continuer, assurez-vous de pouvoir répondre à ces questions :

1. **Variables** : Quelle est la différence entre `let`, `const` et `var` ?
2. **Types** : Que retourne `typeof null` et pourquoi ?
3. **Objets** : Comment vérifier si une propriété existe dans un objet ?
4. **Tableaux** : Quelle est la différence entre `map()` et `forEach()` ?
5. **Asynchrone** : Comment gérer plusieurs Promises en parallèle ?
6. **Erreurs** : Que se passe-t-il dans un bloc `finally` ?
7. **Scopes** : Où est accessible une variable déclarée avec `let` dans un `if` ?

Si vous hésitez sur une de ces questions, retournez aux ressources correspondantes !

---

**Une fois tout ça maîtrisé, vous êtes prêts pour les frameworks JavaScript ! 🚀**