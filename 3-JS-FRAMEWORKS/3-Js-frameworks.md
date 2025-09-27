# JavaScript Frameworks

Dans l'univers des frameworks JavaScript, c'est un sacré bazar, pour rester polis et courtois !

## Qu'est-ce qu'un Framework JavaScript ?

Quand on parle de framework, on parle d'énorme librairie, d'énorme bibliothèque, qui nous permet d'avoir un **cadre de travail** littéralement !

On parle de framework pour React, Vue, Angular, Svelte, Solid... etc. Souvent on les regroupe tous sous le nom de **"framework JS"** !

### Petite précision importante

À proprement parler, **React n'est pas un framework, mais une "librairie" JS** ! Mais on le regroupe avec les autres frameworks JS, car il est très utilisé et très populaire. L'écosystème autour de React est le plus riche et le plus populaire aujourd'hui. Vous cherchez n'importe quoi, il y a de grandes chances qu'une lib ait été créée pour React !

Donc quand je parlerai de Framework JS, je vais inclure React, mais sachez que ce n'est pas vraiment un framework dans la définition pure !

## Pourquoi utiliser un Framework JavaScript ?

Le but à la base est d'éviter de **réinventer la roue** en boucle, et de devoir modifier le DOM à la main à chaque fois ! On part donc sur un framework JS !

## L'état du marché actuel

Aujourd'hui, le marché se dirige très franchement vers React, mais sachez que les autres frameworks JS sont également très utilisés !

Dans ce cours, on va voir les spécificités de React, mais je prendrai le temps de vous fournir des documentations et des cours sur Angular, Vue, Svelte, etc.

### Angular

Angular est très utilisé dans les grandes entreprises et dans les projets les plus complexes (ESN etc.) car proche d'une façon de coder et d'une architecture orientée objet, proche du multicouche (MVC, MVVM, etc.). Les personnes qui maîtrisent Java vont naturellement préférer Angular !

### React

React est quant à lui beaucoup plus léger et plus permissif. Vous pouvez faire très simple, comme très complexe. Il est utilisé très fortement par une très large partie du marché !

📊 **Référence :** [State of JS 2024 - Front-end Frameworks](https://2024.stateofjs.com/en-US/libraries/front-end-frameworks/)

## Aucun n'est meilleur qu'un autre

Basiquement, aucun n'est bon ou mauvais, c'est des goûts et des couleurs. Je pourrais vous accompagner dans l'apprentissage de l'un ou de l'autre, mais en priorité, on va voir React.

## Le concept des composants

L'idée dans tous les frameworks, c'est qu'on va créer des **composants**, des fonctions, des éléments logiques par blocs, en suivant les concepts basiques du JS, où on peut créer facilement des balises custom, des éléments logiques custom.

### Exemple concret

Par exemple, on veut créer un leaderboard. On va créer un composant `Leaderboard`, qui va contenir tout un tas d'éléments, de logique, le design, etc.

```jsx
<Leaderboard />
```

Et on pourra réutiliser ce composant partout dans notre application, sans avoir à le recoder à chaque fois ! On pourra lui passer des props, des événements... etc. On pourra déclencher tout un tas d'actions et de logique via ce composant.

## Les principes fondamentaux

Peu importe le framework, la logique reste la même :

- **Éviter de réinventer la roue**, de recoder la même chose
- Suivre les principes généraux de l'**atomic design**
- Sans le pousser à l'extrême, mais dans l'idée des concepts, découper les éléments le plus petit possible
- Garder la logique au sein même d'un composant, d'une feature

## Les différents frameworks

> **Important :** Ils sont **TOUS** bien, ils ont **TOUS** des particularités, ils ont **TOUS** un intérêt dans certains cas.

Le choix est bon **SI** il répond à votre besoin, et que ce choix ne devient pas un obstacle.

### Les trois principaux

- **Angular** - Framework complet pour les grandes entreprises
- **Vue.js** - Framework progressif et flexible
- **React** - Bibliothèque la plus populaire (avec un écosystème riche)

### Autres frameworks populaires

#### Frameworks complets

- **Svelte** - Framework compilé, très performant
- **Solid** - Framework réactif moderne
- **Preact** - Version légère de React
- **Lit** - Web Components avec TypeScript

#### Meta-frameworks (basés sur React/Vue)

- **Next.js** - React avec SSR/SSG
- **Nuxt** - Vue.js avec SSR/SSG
- **Remix** - React avec focus sur les web standards
- **Gatsby** - React pour sites statiques

#### Frameworks spécialisés

- **Astro** - Framework pour sites statiques
- **Deno Fresh** - Framework moderne pour Deno
- **Docusaurus** - Documentation et blogs
- **Eleventy** - Générateur de sites statiques

#### Frameworks backend/Full-stack

- **Nest.js** - Backend Node.js (inspiré d'Angular)
- **Adonis** - Framework backend Node.js
- **Meteor** - Plateforme full-stack
- **Strapi** - CMS headless

#### Autres solutions

- **Alpine.js** - Framework léger pour l'interactivité
- **HTMX** - Approche différente, pas vraiment un framework JS
- **TanStack** - Suite de librairies React (ex-React Query)
- **Elm** - Langage fonctionnel compilé en JS
- **Stencil** - Compiler pour Web Components
- **Expo** - Plateforme pour React Native
- **Analog** - Framework Angular moderne
- **Qwik** - Framework résumable (pas de JS au chargement)

### Comment choisir ?

Le choix dépend de :

- **Votre expérience** (grossièrement React si débutant, Angular si background Java/entreprise)
( vue est bien si vous préférez la synthaxe également )
- **La taille du projet et surtout la taille de l'équipe** (Svelte pour petits projets, et des besoins spécifiques, Angular pour gros projets avec de grosses équipes)
- **Les performances** (Svelte/Solid pour la vitesse)
- **L'écosystème** (React a la plus grande communauté, et donc la plus grande vitesse de dev, car tout éxiste déjà)
- **Les besoins spécifiques** (Next.js pour le SEO, Astro pour les sites statiques par exemple)

à savoir que pour chaque cas, ce sont des exemples, Vue est capable de tout faire, au même titre que Angular, ou React.

### Quelques ressources

Théo t3.gg ( un youtubeur tech Américain ) qui compare les frameworks : <https://www.youtube.com/watch?v=WJRf7dh5Zws>
Des stats sympa sur 2024 et l'écosystème js : <https://2024.stateofjs.com/en-US/libraries/front-end-frameworks/>
