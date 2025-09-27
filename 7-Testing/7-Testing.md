# Stratégies de Tests

Une **stratégie de tests** est un plan détaillé qui définit comment les tests doivent être conçus, mis en place et exécutés pour valider le bon fonctionnement d'un système ou d'une application. Elle permet de définir les objectifs, les scénarios, les cas de test et les outils nécessaires pour assurer la qualité du système.

## Pourquoi une stratégie de tests ?

### 🎯 **Objectifs**

- **Validation du fonctionnement** - S'assurer que l'application fonctionne comme attendu
- **Détection précoce des bugs** - Identifier les problèmes avant la production
- **Confiance en déploiement** - Permettre les déploiements automatiques
- **Documentation vivante** - Les tests servent de spécifications
- **Régression prevention** - Éviter la réintroduction de bugs

### 📋 **Étapes principales**

1. **Définition des objectifs** - Critères de validation du système
2. **Planification** - Scénarios, cas de test, environnements
3. **Conception** - Scripts, outils, mise en place
4. **Exécution** - Lancement des tests et collecte des résultats
5. **Analyse** - Évaluation des résultats et identification des défauts
6. **Gestion des anomalies** - Correction, retest, documentation

## Types de tests

### 📊 **Classification générale**

#### 🔍 **Tests Statiques** (Sans exécution)

- **Analyse de code** - Linters, analyseurs statiques
- **Code review** - Relecture par les pairs
- **Analyse de qualité** - SonarQube, ESLint

#### ⚡ **Tests Dynamiques** (Avec exécution)

- **Tests fonctionnels** - Validation des fonctionnalités
- **Tests non-fonctionnels** - Performance, sécurité, compatibilité

### 🏗️ **Pyramide des tests**

```
        /\
       /  \
      / E2E \     ← Peu nombreux, lents, coûteux
     /______\
    /        \
   /Integration\ ← Moyennement nombreux
  /____________\
 /              \
/   Unit Tests   \  ← Très nombreux, rapides, peu coûteux
/________________\
```

### 🧪 **Tests Unitaires**

Tests des plus petites unités de code (fonctions, méthodes, composants).

```javascript
// Exemple avec Jest
describe('Calculator', () => {
  test('should add two numbers correctly', () => {
    const result = add(2, 3)
    expect(result).toBe(5)
  })
  
  test('should handle negative numbers', () => {
    const result = add(-2, 3)
    expect(result).toBe(1)
  })
  
  test('should throw error for invalid input', () => {
    expect(() => add('a', 2)).toThrow('Invalid input')
  })
})

// React Testing Library
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from './Button'

test('should call onClick when clicked', async () => {
  const handleClick = jest.fn()
  render(<Button onClick={handleClick}>Click me</Button>)
  
  const button = screen.getByRole('button', { name: /click me/i })
  await userEvent.click(button)
  
  expect(handleClick).toHaveBeenCalledTimes(1)
})
```

### 🔗 **Tests d'Intégration**

Tests de l'interaction entre différents modules ou services.

```javascript
// Test d'API avec Supertest
import request from 'supertest'
import app from '../app'

describe('User API', () => {
  test('POST /users should create a new user', async () => {
    const userData = {
      name: 'John Doe',
      email: 'john@example.com'
    }
    
    const response = await request(app)
      .post('/users')
      .send(userData)
      .expect(201)
    
    expect(response.body).toMatchObject({
      id: expect.any(Number),
      name: 'John Doe',
      email: 'john@example.com'
    })
  })
})

// Test d'intégration React
test('should display user data after fetch', async () => {
  // Mock API response
  server.use(
    rest.get('/api/users/1', (req, res, ctx) => {
      return res(ctx.json({ id: 1, name: 'John Doe' }))
    })
  )
  
  render(<UserProfile userId={1} />)
  
  expect(await screen.findByText('John Doe')).toBeInTheDocument()
})
```

### 🌐 **Tests End-to-End (E2E)**

Tests complets du parcours utilisateur dans l'application réelle.

```javascript
// Cypress
describe('User Login Flow', () => {
  it('should allow user to login and access dashboard', () => {
    cy.visit('/login')
    
    cy.get('[data-testid=email]').type('user@example.com')
    cy.get('[data-testid=password]').type('password123')
    cy.get('[data-testid=login-button]').click()
    
    cy.url().should('include', '/dashboard')
    cy.get('[data-testid=welcome-message]')
      .should('contain', 'Welcome back!')
  })
})

// Playwright
import { test, expect } from '@playwright/test'

test('user can complete purchase', async ({ page }) => {
  await page.goto('/products')
  
  await page.click('[data-testid=add-to-cart]')
  await page.click('[data-testid=cart-icon]')
  await page.click('[data-testid=checkout-button]')
  
  await page.fill('[data-testid=card-number]', '4242424242424242')
  await page.click('[data-testid=pay-button]')
  
  await expect(page.locator('[data-testid=success-message]'))
    .toContainText('Payment successful')
})
```

## Approches de test

### 📦 **Black Box Testing**

Test sans connaissance du code interne (API, interface utilisateur).

```javascript
// Test d'API sans connaître l'implémentation
describe('Authentication API', () => {
  test('should return 401 for invalid credentials', async () => {
    const response = await request(app)
      .post('/auth/login')
      .send({
        email: 'wrong@example.com',
        password: 'wrongpassword'
      })
    
    expect(response.status).toBe(401)
    expect(response.body.error).toBe('Invalid credentials')
  })
})
```

### 🔍 **White Box Testing**

Test avec connaissance complète du code source.

```javascript
// Test avec mock des dépendances internes
jest.mock('../services/emailService')

test('should call email service when user registers', async () => {
  const mockSendEmail = jest.fn()
  emailService.sendWelcomeEmail = mockSendEmail
  
  await userService.registerUser({
    email: 'test@example.com',
    password: 'password123'
  })
  
  expect(mockSendEmail).toHaveBeenCalledWith('test@example.com')
})
```

## Types de tests spécialisés

### 🎭 **Property-Based Testing**

```javascript
// Avec fast-check
import fc from 'fast-check'

test('reverse of reverse should be identity', () => {
  fc.assert(fc.property(
    fc.array(fc.integer()),
    (arr) => {
      const reversed = reverse(reverse(arr))
      expect(reversed).toEqual(arr)
    }
  ))
})
```

### 💨 **Smoke Testing**

Tests basiques pour vérifier que l'application démarre.

```javascript
describe('Smoke Tests', () => {
  test('app should start without crashing', () => {
    render(<App />)
    expect(screen.getByTestId('app-container')).toBeInTheDocument()
  })
  
  test('main routes should be accessible', async () => {
    const routes = ['/', '/about', '/contact']
    
    for (const route of routes) {
      const response = await request(app).get(route)
      expect(response.status).toBe(200)
    }
  })
})
```

### 🧠 **Sanity Testing**

Tests rapides après déploiement pour vérifier les fonctionnalités critiques.

```javascript
describe('Sanity Tests', () => {
  test('critical user journey works', async () => {
    // Login
    await page.goto('/login')
    await page.fill('[data-testid=email]', 'test@example.com')
    await page.fill('[data-testid=password]', 'password')
    await page.click('[data-testid=login-button]')
    
    // Navigate to main feature
    await page.click('[data-testid=main-feature]')
    
    // Verify it loads
    await expect(page.locator('[data-testid=feature-content]'))
      .toBeVisible()
  })
})
```

### 👥 **User Acceptance Testing (UAT)**

```javascript
// Gherkin avec Cucumber
Feature: User Registration
  As a new user
  I want to register an account
  So that I can access the application

  Scenario: Successful registration
    Given I am on the registration page
    When I fill in "Email" with "user@example.com"
    And I fill in "Password" with "securepassword"
    And I click "Register"
    Then I should see "Registration successful"
    And I should be redirected to the dashboard
```

### 🔥 **Fuzz Testing**

```javascript
// Test avec données aléatoires
describe('Fuzz Testing', () => {
  test('API should handle malformed input gracefully', async () => {
    const malformedInputs = [
      null,
      undefined,
      '',
      '<script>alert("xss")</script>',
      'A'.repeat(10000),
      { malformed: { deeply: { nested: 'object' } } }
    ]
    
    for (const input of malformedInputs) {
      const response = await request(app)
        .post('/api/data')
        .send(input)
      
      // Should not crash (500) but handle gracefully
      expect(response.status).not.toBe(500)
    }
  })
})
```

## Configuration et outils

### ⚙️ **Jest Configuration**

```javascript
// jest.config.js
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/index.js',
    '!src/**/*.d.ts'
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  },
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}'
  ]
}
```

### 🎯 **Cypress Configuration**

```javascript
// cypress.config.js
import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    supportFile: 'cypress/support/e2e.js',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    video: false,
    screenshotOnRunFailure: true,
    
    setupNodeEvents(on, config) {
      // Plugins et tâches personnalisées
    }
  },
  
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite'
    }
  }
})
```

### 🎭 **Playwright Configuration**

```javascript
// playwright.config.js
import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure'
  },
  
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
    { name: 'mobile', use: { ...devices['iPhone 12'] } }
  ]
})
```

## Stratégies avancées

### 📊 **Code Coverage**

```javascript
// Configuration de seuils de couverture
{
  "jest": {
    "collectCoverage": true,
    "coverageThreshold": {
      "global": {
        "branches": 80,
        "functions": 80,
        "lines": 80,
        "statements": 80
      },
      "./src/components/": {
        "branches": 90,
        "statements": 90
      }
    }
  }
}
```

### 🔄 **Test-Driven Development (TDD)**

```javascript
// 1. Écrire le test (qui échoue)
test('should calculate total price with tax', () => {
  const items = [{ price: 100 }, { price: 200 }]
  const total = calculateTotalWithTax(items, 0.2)
  expect(total).toBe(360) // 300 + 20% tax
})

// 2. Écrire le code minimum pour passer
function calculateTotalWithTax(items, taxRate) {
  const subtotal = items.reduce((sum, item) => sum + item.price, 0)
  return subtotal * (1 + taxRate)
}

// 3. Refactorer si nécessaire
```

### 🏭 **Test Factories**

```javascript
// Factory pour créer des données de test
const userFactory = (overrides = {}) => ({
  id: Math.random(),
  name: 'John Doe',
  email: 'john@example.com',
  role: 'user',
  ...overrides
})

// Utilisation
test('admin user should have access', () => {
  const admin = userFactory({ role: 'admin' })
  expect(hasAccess(admin, 'admin-panel')).toBe(true)
})
```

### 🎯 **Test Doubles (Mocks, Stubs, Spies)**

```javascript
// Mock complet
jest.mock('../services/apiService', () => ({
  fetchUser: jest.fn(() => Promise.resolve({ id: 1, name: 'John' }))
}))

// Spy sur méthode existante
const consoleSpy = jest.spyOn(console, 'error').mockImplementation()

// Stub avec valeur de retour
const mockFetch = jest.fn()
mockFetch.mockResolvedValueOnce({ ok: true, json: () => ({ data: 'test' }) })
```

## Intégration Continue (CI)

### 🔄 **GitHub Actions**

```yaml
# .github/workflows/test.yml
name: Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run unit tests
        run: npm run test:unit
      
      - name: Run integration tests
        run: npm run test:integration
      
      - name: Run E2E tests
        run: npm run test:e2e
      
      - name: Upload coverage
        uses: codecov/codecov-action@v3
```

### 📊 **Quality Gates**

```javascript
// Scripts package.json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "test:unit": "jest --testPathPattern=unit",
    "test:integration": "jest --testPathPattern=integration",
    "test:e2e": "cypress run",
    "test:all": "npm run test:unit && npm run test:integration && npm run test:e2e",
    
    "quality:check": "npm run lint && npm run test:coverage && npm run type-check",
    "pre-commit": "lint-staged && npm run test:unit"
  }
}
```

## Outils et écosystème

### 🧪 **Frameworks de test**

- **Jest** - Framework complet pour JavaScript
- **Vitest** - Alternative rapide à Jest (compatible Vite)
- **Mocha** - Framework flexible avec Chai/Sinon
- **Jasmine** - Framework BDD

### 🌐 **E2E Testing**

- **Cypress** - Framework moderne et intuitif
- **Playwright** - Multi-navigateur par Microsoft
- **Puppeteer** - Contrôle de Chrome/Chromium
- **Selenium** - Standard historique

### 📊 **Code Quality**

- **SonarQube** - Analyse de qualité complète
- **ESLint** - Linting JavaScript/TypeScript
- **Prettier** - Formatage de code
- **Husky** - Git hooks pour automatisation

### 🎯 **Test Utilities**

- **React Testing Library** - Tests React centrés utilisateur
- **Vue Test Utils** - Utilitaires pour tester Vue.js
- **Supertest** - Tests d'API HTTP
- **MSW** - Mock Service Worker pour APIs

## Bonnes pratiques

### ✅ **Do's**

```javascript
// ✅ Tests descriptifs et lisibles
describe('UserService', () => {
  describe('when creating a new user', () => {
    test('should send welcome email to valid email address', () => {
      // Test implementation
    })
  })
})

// ✅ Arrange, Act, Assert pattern
test('should calculate discount correctly', () => {
  // Arrange
  const price = 100
  const discountPercent = 20
  
  // Act
  const finalPrice = applyDiscount(price, discountPercent)
  
  // Assert
  expect(finalPrice).toBe(80)
})

// ✅ Test des cas limites
test('should handle edge cases', () => {
  expect(divide(10, 0)).toBe(Infinity)
  expect(divide(0, 10)).toBe(0)
  expect(divide(-10, 2)).toBe(-5)
})
```

### ❌ **Don'ts**

```javascript
// ❌ Tests trop complexes
test('should do everything', () => {
  // 50 lignes de code testant plusieurs choses
})

// ❌ Tests fragiles (dépendants de l'implémentation)
test('should call internal method', () => {
  const spy = jest.spyOn(service, '_internalMethod')
  service.publicMethod()
  expect(spy).toHaveBeenCalled() // Fragile !
})

// ❌ Tests sans assertions
test('should not crash', () => {
  service.doSomething() // Pas d'assertion !
})
```

## Stratégie recommandée

### 🎯 **Priorisation**

1. **Tests unitaires** (70%) - Rapides, fiables, bon ROI
2. **Tests d'intégration** (20%) - Points critiques
3. **Tests E2E** (10%) - Parcours utilisateur essentiels

### 📋 **Checklist qualité**

- [ ] **Couverture de code** > 80% sur le code critique
- [ ] **Tests automatisés** dans la CI/CD
- [ ] **Tests de régression** pour chaque bug corrigé
- [ ] **Tests de performance** sur les API critiques
- [ ] **Tests de sécurité** sur les points d'entrée
- [ ] **Tests d'accessibilité** sur l'interface utilisateur

### 🚀 **Mise en place progressive**

1. **Commencer simple** - Tests unitaires sur les fonctions pures
2. **Ajouter l'intégration** - Tests des API et composants
3. **Automatiser** - CI/CD avec tests obligatoires
4. **Optimiser** - Parallélisation, cache, sélection de tests
5. **Monitorer** - Métriques de qualité et temps d'exécution

## Ressources pour aller plus loin

- 📚 [Jest Documentation](https://jestjs.io/docs/getting-started)
- 🌐 [Cypress Documentation](https://docs.cypress.io/)
- 🎭 [Playwright Documentation](https://playwright.dev/)
- 📖 [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- 🔍 [SonarQube](https://www.sonarqube.org/)
- 📊 [ISTQB - Standards de test](https://www.istqb.org/)
- 🥒 [Cucumber/Gherkin](https://cucumber.io/docs/gherkin/)
- 🎯 [Test Pyramid](https://martinfowler.com/articles/practical-test-pyramid.html)

Une bonne stratégie de tests est essentielle pour maintenir la qualité du code et permettre des déploiements en confiance. L'objectif est de trouver le bon équilibre entre couverture, vitesse d'exécution et maintenance des tests.
