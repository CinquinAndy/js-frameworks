# Architectures logicielles - Guide pratique

## Les architectures principales

### 1. Architecture Monolithique 🏢

**Principe :** Tout dans une seule application.

**Avantages :**

- Simple à développer et déployer
- Débogage facile
- Performance directe (pas de réseau entre composants)

**Inconvénients :**

- Difficile à faire évoluer
- Une panne = tout s'arrête
- Scaling complexe

**Quand l'utiliser :** Petites applications, équipes réduites, MVP

---

### 2. Architecture en Couches (Layered)

**Principe :** Diviser en couches avec des responsabilités claires.

**Couches typiques :**

- Présentation (UI)
- Logique métier (Business Logic)
- Accès aux données (Data Access)

**Avantages :**

- Organisation claire
- Réutilisabilité
- Tests plus faciles

**Quand l'utiliser :** Applications moyennes, équipes structurées

---

### 3. Clean Architecture / Architecture Hexagonale

**Principe :** Séparer la logique métier des détails techniques.

**Structure :**

- Cœur : Logique métier pure
- Couches externes : UI, Base de données, APIs

**Avantages :**

- Logique métier isolée
- Facilite les tests
- Indépendance des frameworks

**Inconvénients :**

- Plus de complexité initiale
- Courbe d'apprentissage

---

### 4. Architecture Microservices 🧩

**Principe :** Diviser en petits services indépendants.

**Avantages :**

- Scalabilité fine
- Technologies différentes par service
- Équipes autonomes

**Inconvénients :**

- Complexité réseau
- Gestion des données distribuées
- Monitoring complexe

**Quand l'utiliser :** Grandes applications, équipes multiples, UNIQUEMENT si ça a un intérêt métier et qu'on peut découpler fortement les couches, si on coupe un Microservices et que l'app démarre pas, c'est que le Microservices ne fonctionne pas !
Les Microservices doivent être fortement découplés !

---

### 5. Architecture MVC/MVP/MVVM (Frontend)

**MVC (Model-View-Controller) :**

- Model : Données
- View : Interface
- Controller : Logique de contrôle

**MVP (Model-View-Presenter) :**

- Presenter remplace Controller
- Vue plus passive

**MVVM (Model-View-ViewModel) :**

- ViewModel lie View et Model
- Data binding automatique

---

### 6. Architecture Orientée Événements 📡

**Principe :** Communication via événements asynchrones.

**Avantages :**

- Découplage fort
- Réactivité
- Extensibilité

**Cas d'usage :** Real-time, IoT, notifications

---

### 7. Serverless / Functions

**Principe :** Fonctions déclenchées par événements.

**Avantages :**

- Pas de gestion serveur
- Scaling automatique
- Paiement à l'usage

**Inconvénients :**

- Cold start
- Dépendance au provider
- Debugging complexe

---

## Comment choisir ?

| Critère | Monolithique | Couches | Microservices | Serverless |
|---------|-------------|---------|---------------|------------|
| **Équipe** | < 5 devs | < 10 devs | Plusieurs équipes | Variable |
| **Complexité** | Faible | Moyenne | Élevée | Faible-Moyenne |
| **Scaling** | Vertical | Vertical | Horizontal | Automatique |
| **Coût initial** | Faible | Moyen | Élevé | Très faible |

---

## Anti-patterns à éviter

- **Big Ball of Mud :** Code sans structure
- **Golden Hammer :** Tout résoudre avec la même solution
- **Over-Engineering :** Compliquer inutilement
- **Premature Optimization :** Optimiser trop tôt

---

## Règle d'or 💡

**Commencez simple.** Évoluez selon les besoins réels, pas les besoins imaginés.

---

### Ressources

- [Awesome Software Architecture](https://github.com/mehdihadeli/awesome-software-architecture)
- [Awesome Architecture](https://awesome-architecture.com/)
