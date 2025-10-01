# La.les note.s

Sur la façon de noté ça va ressembler grossièrement à ça :

## Grille de Notation du Projet (Total : 20/20)

*à savoir que certains axes pourront avoir des points bonus, et les rendus en cours également pourront vous permettre d'avoir des points bonus, en fonction de votre implication.*
La note finale est répartie sur quatre grands axes, couvrant la qualité technique, l'expérience utilisateur et l'organisation du travail.

### 1. Fonctionnalité et Code (11 points)

Cette catégorie évalue la robustesse, la logique et la propreté du code produit. C'est l'axe le plus important.

| Critère                                                                          | Points    | Explication                                                                                                                                                                                                                     |
| -------------------------------------------------------------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Code Fonctionnel**                                                             | **5 pts** | Évaluation des fonctionnalités implémentées. **Attention :** le principe est simple, un "code qui ne fonctionne pas = pas de point" pour la fonctionnalité concernée.                                                           |
| **Architecture et Structure**                                                    | **2 pts** | Évaluation de l'organisation du projet : organisation claire des fichiers et des dossiers, et **séparation des responsabilités** (chaque module ou composant a un rôle unique et défini).                                       |
| **Gestion des Erreurs**                                                          | **1 pt**  | Mise en place de mécanismes pour gérer les erreurs (ex: `Try/Catch`), et validation systématique des **inputs** utilisateurs.                                                                                                   |
| **Performance de base**                                                          | **1 pt**  | Le code doit être efficace : absence de **fuites mémoire** et utilisation d'**algorithmes cohérents** et appropriés pour les tâches.                                                                                            |
| **Présence du .env et <br>possibilités de tester l'app passer de temps à debug** | **2 pt**  | Je dois pouvoir lancer facilement l'application, sans avoir à passer du temps à la débuguer ! ( .env si nécessaire, et accès simple à votre code. ) |
|                                                                                  |           |                                                                                                                                                                                                                                 |

### 2. Bonnes Pratiques de Développement (*Dev*) (3 points)

Cette section évalue la rigueur professionnelle et la manière dont le projet est mené.

|Critère|Points|Explication|
|---|---|---|
|**Git et Versioning**|**1 pt**|Utilisation professionnelle de Git : **historique des commits cohérent**, messages de commit **explicites et clairs**, fréquence et granularité des commits appropriées (petits changements logiques et réguliers).|
|**Qualité du Code**|**1 pt**|Le code doit être facilement compréhensible (**lisibilité**), avec un système de **nommage** clair pour les variables/fonctions, et respectant des **conventions** de style (indentation, espacement, etc.).|
|**Documentation Technique**|**1 pt**|Fourniture d'un fichier **README** complet (installation, lancement, fonctionnalités) et présence de **commentaires pertinents** dans le code.|

### 3. Choix Technique et Justification (4 points)

L'évaluation porte ici sur votre capacité à choisir les bons outils et à justifier vos décisions.

|Critère|Points|Explication|
|---|---|---|
|**Pertinence du Framework**|**2 pts**|Le framework ou la librairie choisi(e) doit être le plus adapté au contexte et aux objectifs du projet.|
|**Justification écrite du choix**|(inclus)|Une justification claire de vos choix techniques doit être fournie (souvent dans un document type `framework.md`).|
|**Utilisation Appropriée des Outils**|**1 pt**|Maîtrise des outils annexes : utilisation correcte d'un **Package manager** (npm, Yarn), de **bundles** (Webpack, Vite), etc.|
|**Sécurité de base**|**1 pt**|Prise en compte des mesures de sécurité fondamentales : **Validation** et **Sanitization** des données pour prévenir les failles.|

### 4. Interface et Expérience Utilisateur (*UX/UI*) (2 points + Bonus)

Ce dernier axe concerne l'aspect visuel et la facilité d'utilisation de l'application.

|Critère|Points|Explication|
|---|---|---|
|**Interface et Expérience Utilisateur**|**2 pts**|L'interface doit être agréable et l'expérience utilisateur intuitive. Cela inclut : **Ergonomie**, design **responsive** (adapté à toutes les tailles d'écran) et **accessibilité**.|
|**Créativité / Originalité**|**Bonus**|Un bonus est accordé pour les **approches innovantes** ou une solution particulièrement créative ou originale.|

---

Si vous avez une question sur un point en particulier, n'hésitez pas !

---

Ce que j'attend de vous :

J'ai besoin, en plus de code fonctionnel, et plus de ce que je demande dans le sujet,
d'un fichier qui explique les choses suivantes :

- Une explication ( faite à la main svp ), des choix de techno. Pourquoi vous avez choisis ce framework.
- Une mini liste des features que vous avez ajoutés en plus / des choses dont vous êtes fières, qui mériterait des points bonus à vos yeux
- Une partie qui explique et montre les ressources dont j'ai besoin pour lancer votre projet et avoir le même rendu que vous !
- Le partage de TOUT les accès nécessaires à vos yeux, des screens, les variables d'environnements, et accès à des ressources etc.
- Des schémas d'explications, pour l'architecture de fichier / architecture logicielle / les communications entre les applications.
