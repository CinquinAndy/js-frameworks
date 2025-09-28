# TypeScript

TypeScript a un univers à lui, des particularités propres, et en gros, c'est un langage qui se base sur le JavaScript. Il vient rajouter tout un tas de types, tout un tas de features, pour pouvoir être capable de déterminer le type des données, et s'assurer de ne pas avoir d'erreur dans notre code.

**Ressource :** [TypeScript Roadmap](https://roadmap.sh/typescript)

## Pourquoi TypeScript ?

- **Détection d'erreurs à la compilation** - Plutôt qu'à l'exécution
- **Meilleur IntelliSense** - Autocomplétion et suggestions dans l'IDE
- **Code plus maintenable** - Surtout sur de gros projets
- **Documentation vivante** - Les types servent de documentation

## Les types de base

### Types primitifs

```ts
// Types de base
let name: string = 'bernard';
let age: number = 25;
let isActive: boolean = true;
let value: null = null;
let notDefined: undefined = undefined;

// BigInt et Symbol (moins courants)
let bigNumber: bigint = 123n;
let uniqueId: symbol = Symbol('id');
```

### Arrays (Tableaux)

```ts
// Différentes syntaxes pour les tableaux
let numbers: number[] = [1, 2, 3, 4];
let names: Array<string> = ['Alice', 'Bob', 'Charlie'];
let mixed: (string | number)[] = ['hello', 42, 'world'];

// Tableau en lecture seule
let readonlyNumbers: readonly number[] = [1, 2, 3];
```

### Objects

```ts
// Objet simple
let user: { name: string; age: number } = {
  name: 'John',
  age: 30
};

// Propriétés optionnelles
let config: { host: string; port?: number } = {
  host: 'localhost'
  // port est optionnel
};

// Index signature (clés dynamiques)
let scores: { [key: string]: number } = {
  math: 95,
  english: 87
};
```

## Types avancés

### Interfaces

```ts
// Définition d'une interface
interface User {
  id: number;
  name: string;
  email: string;
  isActive?: boolean; // Propriété optionnelle
  readonly createdAt: Date; // Propriété en lecture seule
}

// Utilisation
const user: User = {
  id: 1,
  name: 'Alice',
  email: 'alice@example.com',
  createdAt: new Date()
};

// Extension d'interface
interface AdminUser extends User {
  permissions: string[];
  lastLogin?: Date;
}
```

### Types Union et Intersection

```ts
// Union (OU) - peut être l'un ou l'autre
type Status = 'pending' | 'approved' | 'rejected';
type ID = string | number;

let currentStatus: Status = 'pending';
let userId: ID = 123; // ou "user_123"

// Intersection (ET) - doit avoir les deux
type Person = { name: string; age: number };
type Employee = { company: string; salary: number };
type WorkingPerson = Person & Employee;

const worker: WorkingPerson = {
  name: 'Bob',
  age: 30,
  company: 'TechCorp',
  salary: 50000
};
```

### Enums

```ts
// Enum numérique
enum Direction {
  Up,    // 0
  Down,  // 1
  Left,  // 2
  Right  // 3
}

// Enum avec valeurs personnalisées
enum StatusCode {
  Success = 200,
  NotFound = 404,
  ServerError = 500
}

// Enum string
enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue'
}

// Utilisation
let direction: Direction = Direction.Up;
let response: StatusCode = StatusCode.Success;
```

### Tuples

```ts
// Tuple - tableau avec types et taille fixes
let coordinate: [number, number] = [10, 20];
let userInfo: [string, number, boolean] = ['Alice', 25, true];

// Tuple avec labels (plus lisible)
let point: [x: number, y: number] = [10, 20];

// Tuple optionnel
let rgb: [number, number, number?] = [255, 0]; // Le bleu est optionnel
```

## Fonctions

### Typage des fonctions

```ts
// Fonction simple
function add(a: number, b: number): number {
  return a + b;
}

// Fonction fléchée
const multiply = (a: number, b: number): number => a * b;

// Paramètre optionnel
function greet(name: string, title?: string): string {
  return title ? `Hello ${title} ${name}` : `Hello ${name}`;
}

// Paramètre par défaut
function createUser(name: string, role: string = 'user'): User {
  return { id: Date.now(), name, email: '', createdAt: new Date() };
}

// Rest parameters
function sum(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}
```

### Types de fonctions

```ts
// Type de fonction
type MathOperation = (a: number, b: number) => number;

const add: MathOperation = (a, b) => a + b;
const subtract: MathOperation = (a, b) => a - b;

// Interface pour fonction
interface Calculator {
  (operation: string, a: number, b: number): number;
}
```

## Generics (Types génériques)

```ts
// Generic simple
function identity<T>(arg: T): T {
  return arg;
}

let stringResult = identity<string>('hello'); // Type: string
let numberResult = identity<number>(42);      // Type: number

// Generic avec contraintes
interface Lengthwise {
  length: number;
}

function logLength<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

logLength('hello');     // ✅ string a une propriété length
logLength([1, 2, 3]);   // ✅ array a une propriété length
// logLength(123);      // ❌ number n'a pas de propriété length

// Generic avec interfaces
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

type UserResponse = ApiResponse<User>;
type UsersResponse = ApiResponse<User[]>;
```

## Types utilitaires

```ts
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

// Partial - toutes les propriétés deviennent optionnelles
type PartialUser = Partial<User>;
// { id?: number; name?: string; email?: string; password?: string; }

// Required - toutes les propriétés deviennent obligatoires
type RequiredUser = Required<PartialUser>;

// Pick - sélectionner certaines propriétés
type PublicUser = Pick<User, 'id' | 'name' | 'email'>;
// { id: number; name: string; email: string; }

// Omit - exclure certaines propriétés
type UserWithoutPassword = Omit<User, 'password'>;
// { id: number; name: string; email: string; }

// Record - créer un type avec des clés et valeurs spécifiques
type Roles = Record<string, string[]>;
// { [key: string]: string[]; }
```

## Classes

```ts
class Animal {
  protected name: string; // Accessible dans la classe et ses enfants
  private age: number;    // Accessible uniquement dans cette classe
  public species: string; // Accessible partout (par défaut)

  constructor(name: string, age: number, species: string) {
    this.name = name;
    this.age = age;
    this.species = species;
  }

  // Méthode publique
  public makeSound(): void {
    console.log(`${this.name} makes a sound`);
  }

  // Getter
  get info(): string {
    return `${this.name} is ${this.age} years old`;
  }

  // Setter
  set updateAge(newAge: number) {
    if (newAge > 0) {
      this.age = newAge;
    }
  }
}

// Héritage
class Dog extends Animal {
  private breed: string;

  constructor(name: string, age: number, breed: string) {
    super(name, age, 'Dog');
    this.breed = breed;
  }

  public makeSound(): void {
    console.log(`${this.name} barks!`);
  }
}

// Classe abstraite
abstract class Shape {
  abstract area(): number;
  
  display(): void {
    console.log(`Area: ${this.area()}`);
  }
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  area(): number {
    return Math.PI * this.radius ** 2;
  }
}
```

## Types littéraux et conditionnels

```ts
// Types littéraux
type Theme = 'light' | 'dark';
type Size = 'small' | 'medium' | 'large';

// Types conditionnels
type NonNullable<T> = T extends null | undefined ? never : T;

type Example1 = NonNullable<string | null>; // string
type Example2 = NonNullable<number | undefined>; // number

// Mapped types
type Optional<T> = {
  [P in keyof T]?: T[P];
};

type ReadOnly<T> = {
  readonly [P in keyof T]: T[P];
};
```

## Exemples pratiques

### API avec TypeScript

```ts
// Types pour une API REST
interface CreateUserRequest {
  name: string;
  email: string;
  password: string;
}

interface User {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

interface ApiError {
  code: string;
  message: string;
  details?: any;
}

// Service API
class UserService {
  async createUser(userData: CreateUserRequest): Promise<User> {
    const response = await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    });

    if (!response.ok) {
      const error: ApiError = await response.json();
      throw new Error(error.message);
    }

    return response.json();
  }

  async getUsers(): Promise<User[]> {
    const response = await fetch('/api/users');
    return response.json();
  }
}
```

### État d'application avec TypeScript

```ts
// Types pour un state management
interface AppState {
  user: User | null;
  loading: boolean;
  error: string | null;
  theme: Theme;
}

type Action = 
  | { type: 'SET_USER'; payload: User }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string }
  | { type: 'SET_THEME'; payload: Theme };

function appReducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    case 'SET_THEME':
      return { ...state, theme: action.payload };
    default:
      return state;
  }
}
```

## Configuration TypeScript

### tsconfig.json basique

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "lib": ["ES2020", "DOM"],
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "moduleResolution": "node",
    "allowSyntheticDefaultImports": true,
    "noEmit": true,
    "jsx": "preserve"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

## Conseils pratiques

### ✅ Bonnes pratiques

```ts
// ✅ Utilisez des noms explicites
interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
}

// ✅ Préférez les interfaces aux types pour les objets
interface Config {
  apiUrl: string;
  timeout: number;
}

// ✅ Utilisez des types union pour les valeurs limitées
type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

// ✅ Documentez avec des commentaires JSDoc
/**
 * Calcule la distance entre deux points
 * @param point1 Premier point
 * @param point2 Deuxième point
 * @returns Distance en pixels
 */
function calculateDistance(
  point1: [number, number], 
  point2: [number, number]
): number {
  // Implementation...
  return 0;
}
```

### ❌ À éviter

```ts
// ❌ Évitez 'any' autant que possible
let data: any = fetchData(); // Perd tous les bénéfices de TypeScript

// ❌ N'abusez pas des assertions de type
let user = data as User; // Dangereux si data n'est pas vraiment un User

// ❌ Évitez les types trop complexes
type ComplexType<T, U, V> = T extends U ? V extends string ? boolean : never : T;
```

TypeScript peut sembler intimidant au début, mais il devient vite indispensable pour maintenir du code JavaScript robuste et évolutif !

