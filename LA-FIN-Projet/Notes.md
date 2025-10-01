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

---

petit conseil pour ceux qui savent pas par ou commencer quand on arrive dans un nouveau projet, avec une demande par un client comme celle ci :

- On prend la demande
- On analyse le besoin
- Dans notre cas, on a besoin d'une partie "donnée", une partie "visuelle"
  - Donc on a besoin d'un backend et d'un frontend
  - On choisi la techno de notre backend, la techno de notre frontend
  - On développe notre backend
    - Ici, deux choix, soit vous faites l'api à la main, et dans ce cas, on part sur du nest, adonis, hono, fastify, express...
    - Soit on part sur un CMS qui va nous permettre de faire l'api en quelques secondes, (très très très utile lorsqu'on fait un CRUD, donc sans calculs mathématique ou logique métier compliquée, si c'est juste du traitement de donnée, je vous conseille de partir là dessus), dans ce cas, on part sur Strapi, Payload,  Directus, Pocketbase, au choix ! (ils sont tous bien !) (et il en existe pleins d'autres !)
  - après qu'on ai choisis le backend, et la technos et tout ça, on prépare nos endpoints, on prépare les infos importantes, et les features importantes.
- Après avoir préparer tout ça, pareil, on choisi la technos du front, dans la même vibe, on va choisir en fonction de nos envies, de nos besoins, de nos compétences, des avantages et inconvénients, et on va essayer d'avoir un maximum de recul !
- Après ça, on développe le frontend, donc on commence par choisir quel architecture de fichier, et quelle architecture logicielle parmis toutes celles qui existe, <https://awesome-architecture.com/>, souvent le framework choisi va nous donner des bonnes pratiques sur ça, et dans ce cas là, on va essayer de suivre ces bonnes pratiques là. Par exemple, Nextjs vous propose directement une façon de ranger vos fichiers et d'organiser vos pensées, que vous pouvez trouver facilement dans la doc, pareil pour react !
- Une fois qu'on sait l'architecture logicielle, on passe au design system (comme on va faire l'interface utilisateur !)
  - soit on a une équipe qui s'en occupe pour nous (assez rare), soit on le fait nous même, dans ce cas, on fait du blocking, un peu comme pour les jeux vidéos (<https://balsamiq.com/> // <https://wireframe.cc/> ) par exemple
  - on fait valider notre blocking, (via ce genre d'outils, ou alors excalidraw par exemple )
  - une fois la version moche validée, qu'on a une idée du contenu qu'on va afficher dans les grandes lignes et de comment on va display nos éléments, et ou on va les display, alors on part sur la suite
  - Maintenant, on choisis notre design system, donc moodboard, ( on récupère une idée des couleurs, une idée de la typographie à choisir, une idée de quelle format utilisés, quelles animations faire etc. ) et grossièrement les technos qui nous permettrons de faire ce genre d'éléments et de design
  - à ce moment là, on a une idée global de :
    - quoi afficher ( notre wireframe )
    - comment l'afficher ( notre moodboard / maquette )
    - ou l'afficher ( notre wireframe )
    - comment récupérer ces données ( notre backend )
    - et comment traiter ces données ( notre backend )
    - comment organiser nos fichiers ( notre choix de software architecture )
  - Ensuite, deux possibilités,
    - soit vous êtes archi confiant, et vous voulez aller vite: dans ce cas là, on part coder le front directement, et on fait au feeling, ça fonctionne, vous pouvez faire ça, je ne vous en tiendrais pas rigueur
    - soit vous êtes un peu moins confiant, dans ce cas là, et dans 99% des cas, on partira sur une maquette, figma, adobe xd, sketch... etc ... peu importe, et on fera valider cette maquette au client, pour pouvoir continuer !
- Maintenant plus qu'a dev le front, on part du fonctionnel, on display les éléments importants, on connecte le back et le front, on met en place les briques importantes, et ensuite on s'attarde sur le design et les détails. ( pas avant )
- On fait le design, et les animations à la fin, et pas avant, le principal c'est que ça fonctionne !
- ENSUITE, on débug, on ajoute des tests
- ENSUITE, on met en prod / pré-prod, on déploie ça, dans un système qui va vite à déployer ! (ex: coolify // dokploy // vercel )
  - Evidemment, le système dépend de ce qu'on peut faire ou non, de notre entreprise et du contexte
  - Ceci dit, en étude, je vous conseille fortement un coolify / dokploy sur un VPS de votre côté si vous voulez apprendre à mettre en prod quelque chose ( tuto ici : <https://andy-cinquin.fr/blog/installation-netcup-vps-coolify> )
- après tout ça, on monitore, on mesure, on surveille, on ajoute des tests, on debug, et on peaufine
- Et seulement à partir de là on peut commencer les optimisations, pas avant !
