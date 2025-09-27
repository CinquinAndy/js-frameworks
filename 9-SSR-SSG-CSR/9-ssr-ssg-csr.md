# SSR & SSG & CSR

## Les différents modes de rendu web

### CSR - Client-Side Rendering (Rendu côté client)

Le CSR charge d'abord une page HTML minimale, puis JavaScript s'exécute dans le navigateur pour générer le contenu. C'est l'approche traditionnelle des SPAs (Single Page Applications).

**Avantages :**

- Navigation fluide entre les pages
- Interactivité riche
- Moins de charge serveur

**Inconvénients :**

- Premier chargement plus lent
- SEO plus difficile
- Dépendance au JavaScript activé

**Frameworks :** React, Vue.js, Angular (mode SPA)

---

### SSR - Server-Side Rendering (Rendu côté serveur)

Le SSR génère le HTML complet sur le serveur avant de l'envoyer au navigateur. Chaque page est construite à la demande lors de la requête.

**Avantages :**

- Chargement initial rapide
- Excellent pour le SEO
- Fonctionne sans JavaScript
- Bon pour les appareils lents

**Inconvénients :**

- Plus de charge serveur
- Navigation entre pages plus lente
- Complexité de développement

**Frameworks :** Next.js (React), Nuxt.js (Vue), SvelteKit

---

### SSG - Static Site Generation (Génération de sites statiques)

Le SSG pré-génère toutes les pages en HTML au moment du build. Les fichiers statiques sont ensuite servis directement.

**Avantages :**

- Performance maximale
- Très sécurisé
- Hébergement simple et peu coûteux
- Excellent SEO

**Inconvénients :**

- Contenu statique uniquement
- Rebuild nécessaire pour les mises à jour
- Moins adapté au contenu dynamique

**Outils :** Gatsby, Next.js (mode static), Hugo, Jekyll, Eleventy

---

### ISR - Incremental Static Regeneration

Hybride entre SSG et SSR : pages statiques régénérées à la demande selon des règles définies.

---

### Quand utiliser quoi ?

- **SSG** : Blogs, sites vitrine, documentation
- **SSR** : E-commerce, applications avec contenu personnalisé
- **CSR** : Applications web complexes, dashboards
- **Hybride** : Combinaison selon les besoins de chaque page

---

### Ressources

- [Roadmap.sh - SSR/SSG/CSR](https://roadmap.sh/ai/course/understanding-modern-web-development-ssr-ssg-and-csr)
