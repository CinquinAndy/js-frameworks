# Applications Desktop & Mobile avec JavaScript

## Applications Desktop

### 1. Electron (Le standard historique)

**Principe :** Chrome + Node.js empaquetés dans une app native

**Exemples célèbres :**

- VS Code, Discord, Slack, WhatsApp Desktop, Figma

**Avantages :**

- Écosystème énorme
- Réutilise le code web existant
- APIs natives complètes

**Inconvénients :**

- Consommation mémoire importante (Chrome entier)
- Taille des apps (~150MB minimum)
- Performance moindre qu'une app native

```bash
npm create electron-app@latest mon-app
```

---

### 2. Tauri (L'alternative moderne recommandée)

**Principe :** Rust backend + WebView système + Frontend JS

**Avantages :**

- **10x plus léger** qu'Electron (~10MB vs 150MB)
- **Performance native** (Rust)
- **Sécurité renforcée** (sandboxing)
- Utilise le WebView système (pas Chrome entier)

**Inconvénients :**

- Plus récent (écosystème en développement)
- Courbe d'apprentissage Rust

```bash
npm create tauri-app@latest
```

**Apps connues :** GitKraken (migration en cours), plusieurs startups

---

### 3. PWA Desktop (Web moderne)

**Principe :** Application web installable comme app native

**Avantages :**

- Code unique web/desktop
- Mise à jour automatique
- Pas d'app store nécessaire

```javascript
// manifest.json
{
  "name": "Mon App",
  "display": "standalone",
  "start_url": "/",
  "theme_color": "#000000"
}
```

**Limitatoins :** Accès système limité

---

## Applications Mobile

### 1. React Native (Leader du marché)

**Principe :** JavaScript → Composants natifs (pas WebView)

**Exemples :** Facebook, Instagram, Uber, Airbnb, Tesla

**Avantages :**

- Performance quasi-native
- Code partagé iOS/Android (80%+)
- Écosystème React gigantesque
- Hot reload en développement

**Inconvénients :**

- Courbe d'apprentissage spécifique
- Parfois besoin de code natif

```bash
npx react-native@latest init MonApp
# ou avec Expo (recommandé)
npx create-expo-app MonApp
```

---

### 2. Expo (React Native simplifié)

**Principe :** React Native + outils de développement intégrés

**Avantages :**

- **Développement ultra rapide**
- Pas besoin d'Android Studio/Xcode
- Test sur device via QR code
- OTA (Over-The-Air) updates

**Inconvénients :**

- Moins de contrôle sur les modules natifs
- Taille d'app plus importante

```bash
npx create-expo-app@latest MonApp
npx expo start
```

---

### 3. Ionic + Capacitor (Web to Mobile)

**Principe :** App web + plugins natifs

**Avantages :**

- Réutilise skills web (HTML/CSS/JS)
- Un code → Web + iOS + Android
- Framework agnostique (React, Vue, Angular)

**Inconvénients :**

- Performance WebView (moins fluide)
- Look moins natif

```bash
npm install -g @ionic/cli
ionic start monApp tabs --type=react
ionic capacitor add ios android
```

---

### 4. PWA Mobile (Web apps installables)

**Principe :** Site web installable comme app

**Avantages :**

- Code unique web/mobile
- Pas d'app store
- Mise à jour instantanée

**Limitations :**

- APIs limitées (surtout iOS)
- Performance moindre

```javascript
// Service Worker pour offline
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js');
}
```

---

### 5. NativeScript (Vue/Angular natif)

**Principe :** Vue/Angular → Composants natifs

**Avantages :**

- Performance native
- Réutilise skills Vue/Angular

**Inconvénients :**

- Écosystème plus petit
- Moins populaire
