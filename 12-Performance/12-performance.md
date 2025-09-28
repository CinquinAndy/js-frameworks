# Performance Web - Guide pratique

## Les 3 métriques essentielles

- **LCP (Largest Contentful Paint)** : < 2.5s (temps de chargement principal)
- **FID (First Input Delay)** : < 100ms (réactivité)
- **CLS (Cumulative Layout Shift)** : < 0.1 (stabilité visuelle)

---

## Outils de mesure et audit

### 1. Google Lighthouse (Gratuit et intégré)

```bash
# Via Chrome DevTools : F12 > Lighthouse
# Ou en CLI
npm install -g lighthouse
lighthouse https://monsite.com
```

### 2. Unlighthouse (Version boostée)

Scanne tout votre site automatiquement (lighthouse multiple)

```bash
npx unlighthouse --site https://monsite.com
```

[GitHub Unlighthouse](https://github.com/harlan-zw/unlighthouse)

### 3. Extensions utiles

- **Web Vitals** : Monitoring en temps réel ([Chrome Extension](https://chrome.google.com/webstore/detail/web-vitals/ahfhijdlegdabablpippeagghigmibma))
- **Screaming Frog** : Audit SEO technique complet

---

## Optimisations Images

### Formats recommandés (par ordre de préférence)

1. **WebP** : -25% à -35% vs JPEG
2. **AVIF** : -50% vs JPEG (support limité)
3. **JPEG optimisé** : Qualité 80-85%

### Techniques

```html
<!-- Responsive + formats modernes -->
<picture>
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="Description" loading="lazy">
</picture>
```

### Outils d'optimisation

- **Squoosh.app** (Google) - Interface web
- **ImageOptim** (Mac) / **TinyPNG** (Web)
- **Sharp** (Node.js) pour automatiser

---

## Optimisations Code

### CSS

```css
/* Minification automatique via build tools */
```

### JavaScript

```javascript
// Code splitting automatique
// Tree shaking pour virer le code mort
// Minification + compression gzip/brotli
```

### Lazy Loading

```html
<!-- Images -->
<img src="image.jpg" loading="lazy" alt="">

<!-- Scripts -->
<script src="script.js" defer></script>
```

---

## Stratégies de Cache 💾

### Cache Browser

```html
<!-- Cache statique (1 an) -->
<meta http-equiv="Cache-Control" content="max-age=31536000">
```

### Service Worker (Cache programmable)

```javascript
// Cache-first pour assets statiques
// Network-first pour contenu dynamique
```

### CDN + Edge Caching

- **Cloudflare** (gratuit de base)
- **AWS CloudFront** (par exemple)
- **Vercel Edge** (auto avec Next.js)

---

## Outils accessibilité bonus

- **WAVE** : Audit accessibilité automatique
- **IBM Accessibility Checker** : Tests plus poussés
- **axe DevTools** : Extension Chrome/Firefox

---

## Ressources avancées

- [The Ultimate Guide to Web Performance](https://youtu.be/0fONene3OIA) - Vidéo complète
- [Web.dev Performance](https://web.dev/performance/) - Google
