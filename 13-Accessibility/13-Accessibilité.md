# Accessibilité Web - Guide essentiel

## Définition simple

L'accessibilité web consiste à **rendre vos sites utilisables par tout le monde**, peu importe :

- Les handicaps (visuels, auditifs, moteurs, cognitifs)
- Les technologies utilisées (lecteur d'écran, navigation au clavier)
- Le contexte (mobile, connexion lente, environnement bruyant)

**Principe de base :** Si une personne en fauteuil ne peut pas entrer dans un bâtiment, c'est injuste. Si une personne avec des troubles visuels ne peut pas utiliser votre site, c'est pareil.

---

## Obligations légales 2024

### En France (OBLIGATOIRE)

- **Sites publics** : 100% accessibles depuis janvier 2024 ([Source officielle](https://www.numerique.gouv.fr))
- **Sanctions financières** possibles pour non-conformité
- **RGAA (Référentiel Général d'Amélioration de l'Accessibilité)** = norme à suivre

### En Europe

- **European Accessibility Act** : obligation progressive pour tous les sites commerciaux
- **Loi de 2005** : égalité des droits et des chances pour les personnes handicapées

**⚠️ Important :** Ce n'est plus optionnel, c'est légalement obligatoire.

---

## Les 4 principes WCAG (à retenir)

1. **Perceptible** : On doit pouvoir percevoir l'information
2. **Utilisable** : On doit pouvoir utiliser l'interface
3. **Compréhensible** : On doit comprendre l'information et l'interface
4. **Robuste** : Compatible avec les technologies d'assistance

---

## Checklist rapide des essentiels

### Images

```html
<!-- Bon -->
<img src="chart.png" alt="Ventes en hausse de 15% ce trimestre">

<!-- Mauvais -->
<img src="chart.png" alt="graphique">
```

### Navigation au clavier

- Tout doit être accessible au clavier (Tab, Enter, Espace)
- Ordre logique de navigation
- Indicateurs de focus visibles

### Contrastes de couleurs

- **Niveau AA** : 4.5:1 (texte normal) / 3:1 (gros texte)
- **Niveau AAA** : 7:1 (texte normal) / 4.5:1 (gros texte)

### Structure HTML sémantique

```html
<!-- Bon -->
<header>, <nav>, <main>, <section>, <article>, <aside>, <footer>
<h1>, <h2>, <h3> (hiérarchie logique)

<!-- Mauvais -->
<div>, <div>, <div> partout
```

---

## Lecteurs d'écran (à connaître) 🔊

### Gratuits

- **NVDA** (Windows) - Le plus utilisé
- **ChromeVox** (Chrome, multiplateforme)
- **Orca** (Linux)

### Intégrés au système

- **VoiceOver** (Mac/iOS)
- **Narrator** (Windows)
- **TalkBack** (Android)

### Payants

- **JAWS** (Windows) - Standard professionnel
- **Window Eyes** (Windows)

**Conseil pratique :** Testez au minimum avec NVDA (gratuit) ou VoiceOver (si Mac).

---

## Outils de test indispensables

### Automatiques (quick wins)

1. **Lighthouse** (dans Chrome DevTools)

   ```bash
   # Score accessibilité + recommandations
   F12 > Lighthouse > Accessibility
   ```

2. **axe DevTools** ([Extension Chrome](https://chrome.google.com/webstore/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd))

   ```
   Détecte 50%+ des problèmes automatiquement
   ```

3. **WAVE** ([Extension](https://wave.webaim.org/extension/))

   ```
   Visualisation directe des problèmes sur la page
   ```

### Manuel (nécessaire pour les 50% restants)

- **Navigation au clavier uniquement** (débranchez la souris)
- **Test avec lecteur d'écran**
- **Vérification contrastes** avec [Color.review](https://color.review)

### Advanced

- **IBM Accessibility Checker** - Tests plus poussés
- **tota11y** - Visualisation des problèmes
- **PAC2021** - Vérification PDF

---

## Ressources pratiques 📚

### Documentation officielle

- [MDN Accessibilité](https://developer.mozilla.org/fr/docs/Web/Accessibility) - Guide complet français
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/patterns/) - Patterns officiels W3C
- [WebAIM](https://webaim.org/) - Guides pratiques en anglais

### Outils couleurs et contrastes

- [Adobe Color](https://color.adobe.com/fr/accessibility-tools/color-blind-safe) - Palette accessible
- [Color.review](https://color.review/) - Test contrastes rapide
- [Colour Contrast Analyser](https://www.tpgi.com/color-contrast-checker/) - Outil bureau

### Validation

- [Validator W3C HTML](https://validator.w3.org/)
- [Validator W3C CSS](https://jigsaw.w3.org/css-validator/)
- [Can I Use](https://caniuse.com/) - Support navigateurs

---

## Bonnes pratiques par technologie 💡

### HTML

```html
<!-- Titres hiérarchiques -->
<h1>Titre principal</h1>
<h2>Section</h2>
<h3>Sous-section</h3>

<!-- Labels explicites -->
<label for="email">Adresse email</label>
<input type="email" id="email" required>

<!-- Landmarks -->
<main>, <nav>, <aside>, <footer>
```

### CSS

```css
/* Focus visible */
:focus {
  outline: 2px solid #007acc;
  outline-offset: 2px;
}

/* Texte lisible */
body {
  font-size: 16px; /* minimum */
  line-height: 1.5; /* minimum */
}
```

### JavaScript

```javascript
// ARIA pour contenu dynamique
element.setAttribute('aria-live', 'polite');
element.setAttribute('aria-expanded', 'true');

// Gestion du focus
button.addEventListener('click', () => {
  modal.focus();
});
```

---

## Test anti-accessibilité 😈

**[User Inyerface](https://userinyerface.com/)** - Interface volontairement horrible pour comprendre les problèmes d'UX.

---

## Règles d'or 🎯

1. **Testez avec de vrais utilisateurs** (ou au minimum avec les outils)
2. **L'accessibilité se pense dès le design**, pas à la fin
3. **HTML sémantique = 80% du travail fait**
4. **Pas parfait au début ? Commencez et améliorez**

L'accessibilité n'est pas une contrainte, c'est une **meilleure expérience pour tous**.
