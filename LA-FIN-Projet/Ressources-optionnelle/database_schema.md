# Schéma de Base de Données - Plateforme de Paris E-sportifs
<!-- Si vous souhaitez utiliser une db, allez dans le dosser db, et prennez le fichier qui correspond à votre besoin, script, db sqlite directement, peut importe ! vous êtes libre sur ce choix également. -->
<!-- Ceux qui ne savent pas quoi prendre, partez sur la db sqlite (le fichier en '.db') -->

```mermaid
erDiagram
    GAMES {
        uuid id PK
        varchar name
        varchar category
        timestamp created_at
    }

    TEAMS {
        uuid id PK
        varchar name
        varchar tag UK
        varchar country
        varchar logo_url
        integer founded_year
        decimal total_earnings
        timestamp created_at
    }

    PLAYERS {
        uuid id PK
        varchar username UK
        varchar real_name
        varchar country
        integer age
        varchar role
        varchar avatar_url
        decimal total_earnings
        integer twitch_followers
        integer youtube_subscribers
        timestamp created_at
    }

    TEAM_PLAYERS {
        uuid id PK
        uuid team_id FK
        uuid player_id FK
        varchar position
        date join_date
        decimal salary
        boolean is_active
    }

    TOURNAMENTS {
        uuid id PK
        varchar name
        uuid game_id FK
        decimal prize_pool
        date start_date
        date end_date
        varchar location
        varchar status
    }

    MATCHES {
        uuid id PK
        uuid tournament_id FK
        uuid team1_id FK
        uuid team2_id FK
        uuid game_id FK
        timestamp match_date
        varchar status
        integer team1_score
        integer team2_score
        uuid winner_id FK
        varchar format
        timestamp created_at
    }

    USERS {
        uuid id PK
        varchar username UK
        varchar email UK
        varchar password_hash
        decimal balance
        decimal total_bet
        decimal total_won
        timestamp created_at
    }

    BETS {
        uuid id PK
        uuid user_id FK
        uuid match_id FK
        uuid team_id FK
        decimal amount
        decimal odds
        decimal potential_payout
        varchar status
        timestamp placed_at
    }

    MATCH_ODDS {
        uuid id PK
        uuid match_id FK
        uuid team_id FK
        decimal odds
        timestamp created_at
        timestamp updated_at
    }

    %% Relations
    TEAMS ||--o{ TEAM_PLAYERS : "has"
    PLAYERS ||--o{ TEAM_PLAYERS : "belongs_to"

    GAMES ||--o{ TOURNAMENTS : "features"
    GAMES ||--o{ MATCHES : "played_in"

    TOURNAMENTS ||--o{ MATCHES : "contains"

    TEAMS ||--o{ MATCHES : "team1"
    TEAMS ||--o{ MATCHES : "team2"
    TEAMS ||--o{ MATCHES : "winner"

    USERS ||--o{ BETS : "places"
    MATCHES ||--o{ BETS : "bet_on"
    TEAMS ||--o{ BETS : "bet_for"

    MATCHES ||--o{ MATCH_ODDS : "has_odds"
    TEAMS ||--o{ MATCH_ODDS : "odds_for"

    %% Views (Virtual Tables)
    UPCOMING_MATCHES {
        view "Matches with status scheduled"
    }

    MATCH_RESULTS {
        view "Completed matches with results"
    }

    USER_BET_HISTORY {
        view "User betting history"
    }

    TEAM_STATS {
        view "Team statistics and win rates"
    }
```

## Relations Principales

### 1. **Teams ↔ Players** (Many-to-Many)

- Table de liaison : `team_players`
- Un joueur peut appartenir à plusieurs équipes (historique)
- Une équipe a plusieurs joueurs

### 2. **Tournaments ↔ Matches** (One-to-Many)

- Un tournoi contient plusieurs matchs
- Chaque match appartient à un tournoi

### 3. **Teams ↔ Matches** (Multiple Relations)

- `team1_id` : Première équipe du match
- `team2_id` : Deuxième équipe du match
- `winner_id` : Équipe gagnante (nullable)

### 4. **Users ↔ Bets** (One-to-Many)

- Un utilisateur peut placer plusieurs paris
- Chaque pari appartient à un utilisateur

### 5. **Matches ↔ Bets** (One-to-Many)

- Un match peut avoir plusieurs paris
- Chaque pari concerne un match spécifique

## Vues SQL Créées

- **`upcoming_matches`** : Matchs à venir avec détails des équipes
- **`match_results`** : Résultats des matchs terminés
- **`user_bet_history`** : Historique complet des paris utilisateurs
- **`team_stats`** : Statistiques des équipes (victoires, défaites, taux de réussite)
