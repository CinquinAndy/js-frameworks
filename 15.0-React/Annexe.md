# React - Annexe des Liens et Ressources

Dans la deuxième partie de ce fichier, j'ai mis la liste des technos que j'utilise aujourd'hui en prod / dans mon quotidien, et tout ce que je vous conseillerai à chaud comme ça, j'ai essayer de vous donner un maximum d'informations et un maximum de cas d'usage et les outils que j'utilise personnelement ;) !

## React Core

- [React Documentation](https://react.dev/learn) - Documentation officielle React
- [React API Reference](https://react.dev/reference/react) - Référence complète des APIs
- [Thinking in React](https://react.dev/learn/thinking-in-react) - Guide conceptuel

## Vite

- [Vite Documentation](https://vite.dev/guide/) - Guide officiel Vite -> à utiliser grossièrement pour React classique
- [Vite React Plugin](https://github.com/vitejs/vite/tree/main/packages/plugin-react) - Plugin React pour Vite

---

## 🎯 Hooks - Documentation et Guides

### Hooks de Base

- [useState Documentation](https://react.dev/reference/react/useState) - Gestion d'état local
- [useEffect Documentation](https://react.dev/reference/react/useEffect) - Effets de bord
- [useRef Documentation](https://react.dev/reference/react/useRef) - Références DOM/valeurs mutables

### Hooks de Performance

-> attention on optimise pas trop tot ! ça risque de créer des dingueries sinon !

- [useMemo Documentation](https://react.dev/reference/react/useMemo) - Mémorisation des calculs
- [useCallback Documentation](https://react.dev/reference/react/useCallback) - Mémorisation des fonctions

### Hooks de Gestion d'État

- [useReducer Documentation](https://react.dev/reference/react/useReducer) - État complexe
- [useContext Documentation](https://react.dev/reference/react/useContext) - Partage de données

### Hooks Avancés

-> utilisation carrément plus rare !

- [useLayoutEffect Documentation](https://react.dev/reference/react/useLayoutEffect) - Effets synchrones
- [useId Documentation](https://react.dev/reference/react/useId) - Identifiants uniques
- [useTransition Documentation](https://react.dev/reference/react/useTransition) - Transitions non-bloquantes
- [useDeferredValue Documentation](https://react.dev/reference/react/useDeferredValue) - Valeurs différées
- [useImperativeHandle Documentation](https://react.dev/reference/react/useImperativeHandle) - API personnalisées

### Hooks Personnalisés

- [Building Custom Hooks](https://react.dev/learn/reusing-logic-with-custom-hooks) - Créer ses propres hooks
- [Rules of Hooks](https://react.dev/warnings/invalid-hook-call-warning) - Règles des hooks

---

## 🛠️ Outils et Écosystème

### Routage

- [React Router Documentation](https://reactrouter.com/) - Navigation SPA
- [React Router Tutorial](https://reactrouter.com/en/main/start/tutorial) - Tutoriel complet
- [TanStack Router](https://tanstack.com/router/latest) - Alternative moderne
- [Next.js Routing](https://nextjs.org/docs/app/building-your-application/routing) - Système de routage Next.js

### Next.js

- [Next.js Documentation](https://nextjs.org/docs) - Framework React full-stack

### Performance et Optimisation

- [React Performance](https://react.dev/learn/render-and-commit) - Optimisation des performances
- [React DevTools Profiler](https://react.dev/blog/2018/09/10/introducing-the-react-profiler) - Outil de profiling

---

## 📖 Guides et Tutoriels Avancés

### Concepts Fondamentaux

- [Rendu et Commit](https://react.dev/learn/render-and-commit) - Cycle de vie React
- [State Management](https://react.dev/learn/managing-state) - Gestion d'état
- [Passing Data Deeply with Context](https://react.dev/learn/passing-data-deeply-with-context) - Context API
- [Extracting State Logic into a Reducer](https://react.dev/learn/extracting-state-logic-into-a-reducer) - useReducer

### Patterns et Bonnes Pratiques

- [useState vs useReducer](https://kentcdodds.com/blog/should-i-usestate-or-usereducer) - Quand utiliser quoi
- [When to useMemo and useCallback](https://kentcdodds.com/blog/usememo-and-usecallback) - Optimisation
- [How to use React Context effectively](https://kentcdodds.com/blog/how-to-use-react-context-effectively) - Context best practices
- [useReact.memo wisely](https://dmitripavlutin.com/use-react-memo-wisely/) - React.memo

### Guides Hooks Avancés

- [A Complete Guide to useEffect](https://overreacted.io/a-complete-guide-to-useeffect/) - Guide complet useEffect
- [Manipulating the DOM with Refs](https://react.dev/learn/manipulating-the-dom-with-refs) - Refs et DOM
- [Referencing Values with Refs](https://react.dev/learn/referencing-values-with-refs) - Valeurs avec refs

---

## 🔧 Bibliothèques et Outils Utiles

### Hooks Collections

- [useHooks.com](https://usehooks.com/) - Collection de hooks utiles -> ça peut être utile, à utilisé avec parcimonie
- [useHooks.ts](https://usehooks-ts.com/) - Hooks TypeScript
- [React Hook Libraries](https://github.com/rehooks/awesome-react-hooks) - Liste de bibliothèques

### Formulaires

- [React Hook Form](https://react-hook-form.com/) - Gestion de formulaires performante
- [TanStack Form](https://tanstack.com/form/latest) - une SUPER LIB pour les formulaires

### API et Data Fetching

- [TanStack Query](https://tanstack.com/query) - Hooks pour l'API et cache
- [SWR](https://swr.vercel.app/) - Alternative à TanStack Query
- [Apollo](https://www.apollographql.com/) - GraphQL data fetching
- USE FETCH OVER AXIOS ! si on a des besoins simple, fetch sera toujours mieux, et plus léger, si on commence à avoir des besoin complexes, on se dirigera vers des options plus optis et modernes, axios est rarement un très bon choix !

### UI et Composants

- [Material-UI](https://mui.com/) - Composants Material Design
- [Chakra UI](https://chakra-ui.com/) - Composants simples et modulaires
- [Ant Design](https://ant.design/) - Design system complet
- [Shadcn](https://ui.shadcn.com/) - une des lib les plus à la mode aujourd'hui

---

## 🚀 Roadmaps et Apprentissage

### Roadmaps

- [React Roadmap](https://roadmap.sh/react) - Parcours d'apprentissage React
- [Frontend Roadmap](https://roadmap.sh/frontend) - Roadmap frontend général

### State of JS

- [State of JS 2024](https://2024.stateofjs.com/en-US) - Tendances JavaScript 2024

---

## 🎨 Design et UX

### Design Systems

- "js-frameworks/Bonus-Webdesign" - LISEZ ÇA ! LA BIBLE DU DESIGN !
- [Design System Checklist](https://designsystemchecklist.com/) - Checklist design system
- [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) - Méthodologie de design

### Accessibilité

- [Web Content Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/) - WCAG 2.1
- [React Accessibility](https://react.dev/learn/accessibility) - Accessibilité en React
- "js-frameworks/13-Accessibility" voir le dossier accessibilité: 2 super pdf avec pleins de liens !

---

## 🔍 Debugging et Outils

### Outils de Développement

- [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) - Extension Chrome
- [React DevTools Profiler](https://react.dev/blog/2018/09/10/introducing-the-react-profiler) - Profiling des performances

### Testing

- [Testing Library](https://testing-library.com/docs/react-testing-library/intro/) - Tests React
- [Jest](https://jestjs.io/) - Framework de tests
- [Playwright](https://playwright.dev/) - Tests plus modernes

---

## 📊 Performance et Monitoring

### Performance

- [React Performance](https://react.dev/learn/render-and-commit) - Optimisation
- [Web Vitals](https://web.dev/vitals/) - Métriques de performance web

### Monitoring

- [Sentry](https://sentry.io/for/react/) - Monitoring d'erreurs
- [LogRocket](https://logrocket.com/) - Session replay et monitoring

---

Mini tuto de veille :

Si vous souhaitez explorer des librairies particulières et répondre aux différents besoins que vous allez avoir professionnelement

- Faites des recherches avec "Awesome librairie Github" sur google.
  - ex: vous voulez voir les design system : Awesome Design system github : <https://github.com/alexpate/awesome-design-systems>
  - ex: vous cherchez des librairies open source - selfhostable : Awesome selfhostable github : <https://github.com/awesome-selfhosted/awesome-selfhosted>
- Si vous avez un doute tapez "what's the best framework js, reddit" : vous aurez une guerre interminable de gens qui veulent absolument avoir raison sur reddit, c'est très interessant car vous voyez la version hardcore de chaque extrême des pensées de chacun sur chaque frameworks / chaque technos, vous pouvez faire la même chose pour tout vos choix futurs et doutes, ça marche très bien
- J'adoooore le "Roadmap.sh" qui permet d'avoir des directions à prendre
- Checkez "app.daily.dev" pour faire de la veille
- Baladez vous sur Youtube, il y a pleins de youtubeur chouette dans la tech, surtout chez les américains / anglais.

---

## 💼 La stack que j'utilise

Cette section regroupe les outils et bibliothèques utilisés de mon côté !

### 🚢 Infrastructure & Déploiement

- [Coolify](https://coolify.io/) - Self-hosted PaaS alternative à Vercel/Netlify
- [Dokploy](https://dokploy.com/) - Open-source PaaS avec Docker ( alternative à coolify )
- [Homer](https://github.com/bastienwirtz/homer) - Dashboard pour services self-hosted
- [Cloudflare DNS](https://www.cloudflare.com/dns/) - DNS management -> mes noms de domaines sont sur cloudflare
- [Cloudflare R2](https://www.cloudflare.com/products/r2/) - S3-compatible storage (gratuit jusqu'à 15GB) -> on met nos saves de coolify et tout ça là dessus ça fonctionne super bien, et c'est du storage vraiment pas cher
- [Cloudflare Tunnel](https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/) - Expose local services -> utilisable pour exposer votre localhost au web, très utile pour utiliser les webhooks.
- [Ngrok](https://ngrok.com/) - Tunneling pour dev local
- [Svix](https://www.svix.com/) - Webhooks as a service

### 🗄️ Backend & Databases

- [Prisma](https://www.prisma.io/) - ORM TypeScript
- [Pocketbase](https://pocketbase.io/) - Backend-as-a-Service open-source ( CMS ) -> API EN 5s
- [Strapi](https://strapi.io/) - Headless CMS -> API EN 5s
- [Payload CMS](https://payloadcms.com/) - TypeScript-first CMS ( intégrer à NextJS ) -> API EN 5s
- [Apollo](https://www.apollographql.com/) - GraphQL platform -> API EN 5s

### 🔐 Authentification & Sécurité

- [Better Auth](https://www.better-auth.com/) - Modern auth library -> LA MEILLEURE solution pour du custom auth in app
- [Clerk](https://clerk.com/) - Authentication & user management -> si vous voulez faire une auth en 5s , avec un service ultra efficace et efficient ! Mon petit chouchou
- [Keycloak](https://www.keycloak.org/) - Open-source identity management -> SSO open source !
- [Infisical](https://infisical.com/) - Secret management platform -> tout les passwords à un endroit, pour les applications, permet de faire de la rotation de .env et tout ça, au même endroit, sans devoir copier / coller les .env et tout ça ! ( hyper utile en équipe ! )
- [Vaultwarden](https://github.com/dani-garcia/vaultwarden) - Self-hosted Bitwarden server -> permet de faire gestionnaire de mot de passe (comme dashlane par exemple )
- [CrowdSec](https://www.crowdsec.net/) - Collaborative security engine -> alternative à fail2ban, permet de faire de la sécurité sur les accès à un server, ban les spam et tout ça

### 📊 Monitoring & Analytics

- [Sentry](https://sentry.io/) - Error tracking & performance monitoring -> permet de track les erreurs de nos app
- [Umami](https://umami.is/) - Privacy-focused analytics -> Google analytics mais en mieux !
- [Metabase](https://www.metabase.com/) - Open-source BI & analytics platform -> Donner un super dashboard pour les commerciaux et qu'ils peuvent check les données de la db sans faire chier les dev ! ( vraiment un banger )
- [Kuma Uptime](https://uptime.kuma.pet/) - Self-hosted monitoring -> permet de gerer une page d'uptime et tracker les différentes app, savoir ce qui tourne et ce qui est down
- [BetterUptime](https://betteruptime.com/) - Uptime monitoring & status pages -> comme kuma, mais en SaaS ( payant )
- [LogRocket](https://logrocket.com/) - Session replay (déjà mentionné)

### 🤖 AI & Automatisation

- [Vercel AI SDK](https://sdk.vercel.ai/) - AI toolkit pour applications -> tip top pour gérer les requêtes vers des IA
- [NextLLM](https://nextllm.dev/) - LLM integration framework -> faire sa propre interface chatgpt like
- [n8n](https://n8n.io/) - Workflow automation -> automatisation
- [Postiz](https://postiz.com/) - Social media scheduling -> gérer pleins de réseaux sociaux et faire des multipost / multi réseaux

### 🎨 UI & Design Systems

- [Shadcn UI](https://ui.shadcn.com/) - Re-usable components -> mon chouchou de design
- [21st.dev](https://21st.dev/) - Premium UI components -> pour trouver des banger déjà fait par des gens en terme de design, permet de partir sur des belles bases !
- [ReactBits](https://www.reactbits.dev/) - Pleins de composants archi stylés !
- [Acertinity](https://ui.aceternity.com/) - Pleins de composants archi stylés !
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework ( mon chouchou aussi )
- [Tailwind UI](https://tailwindui.com/) - Official Tailwind component library -> lib payante de tailwind
- [Headless UI](https://headlessui.com/) - Unstyled accessible components -> super lib d'utilitaires !
- [Radix UI](https://www.radix-ui.com/) - Low-level UI primitives -> pareil, super lib d'utilitaires !
- [Chakra UI](https://chakra-ui.com/) - Same -> pas mal de contenu !

### 🎬 Animation & Graphics

- [Motion](https://motion.dev/) - Modern animation library (Framer Motion) -> animation de fou
- [GSAP](https://gsap.com/) - Professional animation library -> pareil pleins d'animations
- [Lottie](https://lottiefiles.com/) - JSON-based animations -> très poussés des animations, on peut faire du after effect -> web
- [Rive](https://rive.app/) - Interactive vector animations -> animation banger premium ++++++ , rust etc
- [AOS](https://michalsnik.github.io/aos/) - Animate On Scroll library -> transition de bloc et de pages
- [Three.js](https://threejs.org/) - 3D graphics library -> 3d , mais arhci difficile
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/) - React renderer pour Three.js -> amélioraiton de three js

### 📝 Formulaires & Validation

- [Zod](https://zod.dev/) - TypeScript-first schema validation - validation poussées des données, bonne pratique
- [Valibot](https://valibot.dev/) - Alternative légère à Zod - très chouette aussi

### 🧪 Testing & Quality

- [Playwright](https://playwright.dev/) - End-to-end testing ( le top du top de mon côté )
- [Cypress](https://www.cypress.io/) - E2E testing framework
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) - Performance auditing
- [Unlighthouse](https://unlighthouse.dev/) - Lighthouse scanning à l'échelle - pleins de lighthouse sur pleins de page d'un coup
- [IBM Accessibility Checker](https://www.ibm.com/able/toolkit/verify/automated/) - Vérification accessibilité -> banger archi pas connu !
- [Wappalyzer](https://www.wappalyzer.com/) - Technology profiler -> check les technos d'un site / app

### 🛠️ Outils de Développement

- [Prettier](https://prettier.io/) - Code formatter
- [ESLint](https://eslint.org/) - Linter JavaScript
- [Biome](https://biomejs.dev/) - Alternative à Prettier + ESLint ( ça a l'air d'être une folie ! )
- [Husky](https://typicode.github.io/husky/) - Git hooks -> execution des hooks git, scripts quand on push / commits
- [Renovate](https://docs.renovatebot.com/) - Dependency updates automation -> mise à jour automatique sur les dépendances
- [Lazygit](https://github.com/jesseduffield/lazygit) - Terminal UI pour Git ( git en mode terminal mais + stylé )
- [Lazydocker](https://github.com/jesseduffield/lazydocker) - Terminal UI pour Docker ( docker terminal mais  + stylé )
- [Insomnia](https://insomnia.rest/) - API client
- [Bruno](https://www.usebruno.com/) - Open-source API client -> gérer des api call , mais sauvegarder sur des fichiers directement, et donc rendre l'utilsiation d'une api versionnable ! ( tests partageable )
- [Neovim](https://neovim.io/) - Éditeur de texte extensible -> si vous aimez les cartes graphiques (version hardcore de vim / d'un IDE )
- [Tmux](https://github.com/tmux/tmux) - Terminal multiplexer -> plusieurs CLI en une seule fenetre
- [Obsidian](https://obsidian.md/) - l'outil de prise de note de mon côté !
- [Syncthing](https://syncthing.net/) - Synchro des fichiers ! ( j'ai un VPS chez netcup qui sync mes fichiers entre mon pc fixe, mon pc portable, et mon serveur, sur certains dossier uniquement ) 5€ j'ai un multi drive sans bug

### 📦 Build & Bundling

- [Vite](https://vite.dev/) -> il fait module bundler et opti aussi
- [Rollup](https://rollupjs.org/) - Module bundler -> dinguerie avec vite pour faire de l'opti d'app react

### 📧 Email & Communication

- [Resend](https://resend.com/) - Email API pour développeurs -> SaaS de mail
- [Mailgun](https://www.mailgun.com/) - Email delivery service -> SaaS de mail

### 🎯 Icônes & Assets

- [Lucide](https://lucide.dev/) - Beautiful icon library -> pleins d'icones
- [Font Awesome](https://fontawesome.com/) - Icon library -> encore des icones
- [Sharp](https://sharp.pixelplumbing.com/) - Image processing -> opti des images
- [cwebp](https://developers.google.com/speed/webp/docs/cwebp) - WebP converter -> format ultra modernes pour baisser DRASTIQUEMENT la taille des images

### 🔄 State Management & Data Fetching

- [Zustand](https://zustand-demo.pmnd.rs/) - Lightweight state management -> state management
- [TanStack Query](https://tanstack.com/query) - dinguerie
- [TanStack Router](https://tanstack.com/router) - dinguerie  
- [TanStack Table](https://tanstack.com/table) - Headless table library
- [TanStack Ecosystem](https://tanstack.com/) - Suite complète d'outils

### 🧰 Utilitaires

- [Luxon](https://moment.github.io/luxon/) - Date & time library
- [Nuqs](https://nuqs.47ng.com/) - Type-safe URL search params -> à utiliser pour mirroring des useState dans les params d'une page.
- [Number Flow](https://number-flow.barvian.me/) - Animated number transitions -> ça fait des jolis chiffres
- [Remark](https://remark.js.org/) - Markdown processor -> markdown to js / html

### 💳 Paiements

- [Stripe](https://stripe.com/) - Payment processing platform
