/*
Les package manager : 
*/

// On ne veut pas réinventer la roue en boucle, on veut utiliser des packages, des librairies, des frameworks, etc...
// pour nous faciliter la vie !

// on a plusieurs package manager :
// - npm
// - yarn
// - pnpm
// - bun
// - deno
// - ...

// npm est le package manager par défaut de node.js
// c'est celui qui est installé par défaut ! 

// vous pouvez l'utiliser simplement avec la commande : 
// npm init
// ça va vous demander quelques informations, et créer un fichier package.json
// vous pouvez ensuite l'utiliser pour installer des packages
// npm install [nom_du_package]
// ça va installer le package dans le dossier node_modules
// vous pouvez ensuite l'utiliser dans votre code

// vous pouvez également utiliser la commande : 
// npm install [nom_du_package] --save-dev
// ça va installer le package dans le dossier node_modules, et l'ajouter dans le fichier package.json
// vous pouvez ensuite l'utiliser dans votre code

// pour utiliser une librairie, vous pouvez importer le package dans votre code avec la syntaxe :
// import { nom_du_package } from 'nom_du_package';
// ou
// const { nom_du_package } = require('nom_du_package'); // pour les versions antérieures à 2015 
// (dans les vieilles librairies, on retrouve ça parfois)

// npm init 
// npm install three

// exemple de code avec three.js
// import { Three } from 'three';

// let scene = new Three.Scene();
// let camera = new Three.Camera();
// let renderer = new Three.Renderer();

// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// renderer.render(scene, camera);
