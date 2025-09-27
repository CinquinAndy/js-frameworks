/**
 * Les frameworks JS :
 */

// Maintenant que l'on a vu les bases de JS, on va pouvoir voir les frameworks JS.

// Quand on parle de framework, on parle d'énorme librairie, d'énorme bibliothèque, qui nous permet d'avoir
// un 'cadre de travail' littéralement ! 
// on parle de framework, pour React, Vue, Angular, Svelte, Solid... etc...
// Souvent on les regroupes tous sous le nom de 'framework JS' ! 
// Petite précision, que à proprement parler, React n'est pas un framework, mais un 'librairie' JS !
// Mais on le regroupe avec les autres frameworks JS, car il est très utilisé, et très populaire !
// et que l'ecosystème autour de React est le plus riche, et le plus populaire, aujourd'hui, vous cherchez nimporte quoi, 
// il y a de grande chance qu'une lib aie été créée pour React ! 
// donc quand je parlerai de Framework JS, je vais inclure React, mais sachez que ce n'est pas vraiment un framework dans la définition pure !

// le but à la toute base est d'éviter de réinventer la roue en boucle, et de devoir modifier le dom à la main à chaque fois ! 
// on part donc sur un framework JS ! 

// Aujourd'hui, le marché se dirige très franchement vers le React, mais sachez que les autres frameworks JS sont également très utilisés !
// Dans ce cours, on va voir les spécificités de React, mais je prendrais le temps de vous fournir des documentations, et des cours sur Angular, Vue, Svelte, etc...

// Basiquement, Angular est très utilisé dans les grandes entreprises, et dans les projets les plus complexes ! ( ESN etc )
// car proche d'une façon de coder, et d'une architecture orientée objet ! et proche du multicouche ( MVC, MVVM, etc... )
// donc les personnes qui maitrise JAVA, vont naturellement préférer Angular ! 

// React est quand à lui beaucoup plus léger, et plus permissif, vous pouvez faire très simple, comme très complexe. 
// Il est utilisé très fortement par une très large partie du marché ! 
// -> https://2024.stateofjs.com/en-US/libraries/front-end-frameworks/

// Basiquement, aucun n'est bon, ou mauvais, c'est des goûts et des couleurs, 
// je pourrais vous accompagner dans l'apprentissage de l'un ou de l'autre, mais en priorité, on va voir React. 

// l'idée dans tout les frameworks, c'est qu'on va créer des 'composants', et des fonctions, des éléments logiques par blocs
// en suivant les concepts basiques du js, ou on peut créer facilement des balises custom, des éléments logiques custom. 
// par exemple, on veux créer un leaderboard. 
// on va créer un composant 'leaderboard', qui va contenir tout un tas d'éléments, de logique, le design, etc.
// <Leaderboard/>
// et on pourra réutiliser ce composant partout dans notre application, sans avoir à le recoder à chaque fois !
// on pourra lui passer des props, des événements... etc...
// on pourra déclencher tout un tas d'actions, et de logique via ce composant. 
// peut importe le framework, la logique reste la même : 

// -> éviter de réinventer la roue, de recoder la même chose, en suivant les principes généraux de l'atomic design.
// sans le pousser à l'extreme, mais dans l'idée des concepts, de découper les éléments le plus petit psosible, en gardant la logique au sein
// même d'un composant, d'une feature. 
