/*
DOM : Document Object Model
*/

// Le DOM est la représentation en mémoire de la structure d'un document HTML.
// Il est utilisé pour manipuler le document HTML avec des objets JavaScript.

// Le DOM est une arborescence de noeuds, qui représente la structure d'un document HTML.
// Chaque élément HTML est un noeud, et chaque noeud a des propriétés et des méthodes.

// Exemple : 
<html>
    <head>
        <title>Mon titre</title>
        <meta charset="UTF-8"></meta>
    </head>
    <body>
        <h1>Mon titre</h1>
        <p>Mon paragraphe</p>
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ul>
    </body>
</html>

// Le DOM est donc l'ensemble des objets JavaScript qui représentent la structure d'un document HTML.

// On peut accéder aux éléments du DOM avec la propriété document.
// On peut accéder aux propriétés et méthodes de ces éléments avec la propriété .

// Exemple : 
console.log(document.title); // Mon titre
console.log(document.body); // <body>Mon titre</body>
console.log(document.body.children); // [<h1>, <p>, <ul>]
// etc...

// On peut également modifier le DOM avec des objets JavaScript.
// Exemple : 
document.title = "Nouveau titre";
document.body.children[0].innerHTML = "Nouveau titre";
document.body.children[1].innerHTML = "Nouveau paragraphe";
document.body.children[2].innerHTML = "Nouveau item 1";
document.body.children[3].innerHTML = "Nouveau item 2";
document.body.children[4].innerHTML = "Nouveau item 3";

// Donc si on a une page html, on peut accéder à ses éléments, et les modifiers avec le JS. 
// c'est ce qu'on fait quand on veut de l'interactivité sur une page web ! 
// car modifier une valeur sans modifier le DOM, c'est pas possible ! il faut absoluement modifier le DOM ou refresh la page !

// On peut également ajouter des éléments au DOM avec des objets JavaScript.
// Exemple : 
document.body.appendChild(document.createElement("h1"));
document.body.children[0].innerHTML = "Nouveau titre";

// On peut également supprimer des éléments du DOM avec des objets JavaScript.
// Exemple : 
document.body.removeChild(document.body.children[0]);

// sauf que dès qu'on veux faire des choses complexes, on veut éviter de taper 400 lignes de codes juste pour update les états 
// de la page, et update les valeurs directement. on veux juste que la valeur se mettre à jour automatiquement.
// pour régler ce problème et permettre de faire des choses complexes, c'est ici qu'intervient les fameux 'framework JS' !