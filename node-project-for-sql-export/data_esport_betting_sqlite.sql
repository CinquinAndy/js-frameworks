-- Base de données SQLite pour Plateforme de Paris E-sportifs
-- Données complètes avec équipes et joueurs français d'e-sport et streaming

-- Suppression des tables existantes si elles existent
DROP TABLE IF EXISTS bets;
DROP TABLE IF EXISTS match_odds;
DROP TABLE IF EXISTS matches;
DROP TABLE IF EXISTS team_players;
DROP TABLE IF EXISTS players;
DROP TABLE IF EXISTS teams;
DROP TABLE IF EXISTS games;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS tournaments;

-- Table des jeux e-sportifs
CREATE TABLE games (
    id TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))),
    name VARCHAR(100) NOT NULL,
    category VARCHAR(50) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Table des équipes
CREATE TABLE teams (
    id TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))),
    name VARCHAR(100) NOT NULL,
    tag VARCHAR(10) NOT NULL UNIQUE,
    country VARCHAR(3) DEFAULT 'FR',
    logo_url VARCHAR(255),
    founded_year INTEGER,
    total_earnings DECIMAL(10,2) DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Table des joueurs
CREATE TABLE players (
    id TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))),
    username VARCHAR(50) NOT NULL UNIQUE,
    real_name VARCHAR(100),
    country VARCHAR(3) DEFAULT 'FR',
    age INTEGER,
    role VARCHAR(50),
    avatar_url VARCHAR(255),
    total_earnings DECIMAL(10,2) DEFAULT 0,
    twitch_followers INTEGER DEFAULT 0,
    youtube_subscribers INTEGER DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Table de liaison équipes-joueurs
CREATE TABLE team_players (
    id TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))),
    team_id TEXT REFERENCES teams(id) ON DELETE CASCADE,
    player_id TEXT REFERENCES players(id) ON DELETE CASCADE,
    position VARCHAR(50),
    join_date DATE DEFAULT CURRENT_DATE,
    salary DECIMAL(8,2),
    is_active BOOLEAN DEFAULT 1,
    UNIQUE(team_id, player_id)
);

-- Table des tournois
CREATE TABLE tournaments (
    id TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))),
    name VARCHAR(150) NOT NULL,
    game_id TEXT REFERENCES games(id),
    prize_pool DECIMAL(12,2),
    start_date DATE,
    end_date DATE,
    location VARCHAR(100),
    status VARCHAR(20) DEFAULT 'upcoming' CHECK (status IN ('upcoming', 'ongoing', 'completed', 'cancelled'))
);

-- Table des matchs
CREATE TABLE matches (
    id TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))),
    tournament_id TEXT REFERENCES tournaments(id),
    team1_id TEXT REFERENCES teams(id),
    team2_id TEXT REFERENCES teams(id),
    game_id TEXT REFERENCES games(id),
    match_date DATETIME,
    status VARCHAR(20) DEFAULT 'scheduled' CHECK (status IN ('scheduled', 'live', 'completed', 'cancelled')),
    team1_score INTEGER DEFAULT 0,
    team2_score INTEGER DEFAULT 0,
    winner_id TEXT REFERENCES teams(id),
    format VARCHAR(50), -- ex: "Bo3", "Bo5", "Bo1"
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Table des utilisateurs (pour les paris)
CREATE TABLE users (
    id TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))),
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(255),
    balance DECIMAL(10,2) DEFAULT 0,
    total_bet DECIMAL(10,2) DEFAULT 0,
    total_won DECIMAL(10,2) DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Table des paris
CREATE TABLE bets (
    id TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))),
    user_id TEXT REFERENCES users(id),
    match_id TEXT REFERENCES matches(id),
    team_id TEXT REFERENCES teams(id),
    amount DECIMAL(8,2) NOT NULL,
    odds DECIMAL(4,2) NOT NULL,
    potential_payout DECIMAL(10,2) NOT NULL,
    status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'won', 'lost', 'cancelled')),
    placed_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Table pour les cotes des matchs
CREATE TABLE match_odds (
    id TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))),
    match_id TEXT REFERENCES matches(id),
    team_id TEXT REFERENCES teams(id),
    odds DECIMAL(4,2) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Insertion des jeux e-sportifs populaires
INSERT INTO games (id, name, category) VALUES
('game_lol', 'League of Legends', 'MOBA'),
('game_cs2', 'Counter-Strike 2', 'FPS'),
('game_valorant', 'Valorant', 'FPS'),
('game_rl', 'Rocket League', 'Sports'),
('game_fortnite', 'Fortnite', 'Battle Royale'),
('game_apex', 'Apex Legends', 'Battle Royale'),
('game_ow2', 'Overwatch 2', 'FPS'),
('game_fifa', 'FIFA 24', 'Sports'),
('game_sf6', 'Street Fighter 6', 'Fighting'),
('game_tekken8', 'Tekken 8', 'Fighting');

-- Insertion des équipes françaises d'e-sport réalistes
INSERT INTO teams (id, name, tag, founded_year, total_earnings, logo_url) VALUES
('team_vit', 'Team Vitality', 'VIT', 2013, 2500000.00, 'https://example.com/vitality_logo.png'),
('team_kc', 'Karmine Corp', 'KC', 2020, 800000.00, 'https://example.com/kcorp_logo.png'),
('team_ldlc', 'Team LDLC', 'LDLC', 2010, 1200000.00, 'https://example.com/ldlc_logo.png'),
('team_sly', 'Team Solary', 'SLY', 2017, 450000.00, 'https://example.com/solary_logo.png'),
('team_go', 'GamersOrigin', 'GO', 2017, 350000.00, 'https://example.com/go_logo.png'),
('team_mces', 'MCES', 'MCES', 2021, 200000.00, 'https://example.com/mces_logo.png'),
('team_mdt', 'Mandatory.gg', 'MDT', 2020, 180000.00, 'https://example.com/mandatory_logo.png'),
('team_bds', 'Team BDS', 'BDS', 2018, 900000.00, 'https://example.com/bds_logo.png'),
('team_gm', 'Gentle Mates', 'GM', 2021, 300000.00, 'https://example.com/gm_logo.png'),
('team_atl', 'Atlético Esports', 'ATL', 2019, 250000.00, 'https://example.com/atletico_logo.png');

-- Insertion des joueurs français d'e-sport et streamers populaires
INSERT INTO players (id, username, real_name, age, role, total_earnings, twitch_followers, youtube_subscribers) VALUES
-- Joueurs LoL français célèbres
('player_caps', 'Caps', 'Rasmus Winther', 24, 'Mid Laner', 800000.00, 120000, 85000),
('player_yellowstar', 'Yellowstar', 'Bora Kim', 29, 'Support', 500000.00, 95000, 62000),
('player_rekkles', 'Rekkles', 'Martin Larsson', 27, 'ADC', 750000.00, 180000, 120000),
('player_soaz', 'sOAZ', 'Paul Boyer', 30, 'Top Laner', 450000.00, 75000, 45000),
('player_targamas', 'Targamas', 'Raphaël Crabbé', 23, 'Support', 200000.00, 55000, 32000),

-- Joueurs CS français
('player_zywoo', 'ZywOo', 'Mathieu Herbaut', 23, 'AWPer', 600000.00, 250000, 180000),
('player_shox', 'shox', 'Richard Papillon', 31, 'Rifler', 800000.00, 180000, 120000),
('player_nbk', 'NBK', 'Nathan Schmitt', 29, 'IGL', 650000.00, 140000, 95000),
('player_apex', 'apEX', 'Dan Madesclaire', 30, 'Entry Fragger', 720000.00, 160000, 110000),
('player_rpk', 'RpK', 'Cédric Guipouy', 33, 'Support', 550000.00, 120000, 80000),

-- Streamers français populaires
('player_squeezie', 'Squeezie', 'Lucas Hauchard', 28, 'Content Creator', 2000000.00, 800000, 18500000),
('player_gotaga', 'Gotaga', 'Corentin Houssein', 32, 'Streamer/Pro', 1200000.00, 650000, 3200000),
('player_zerator', 'Zerator', 'Adrien Nougaret', 38, 'Streamer', 800000.00, 420000, 1800000),
('player_domingo', 'Domingo', 'Thomas Aranega', 30, 'Streamer', 350000.00, 180000, 850000),
('player_locklear', 'Locklear', 'Théo Kaessmann', 26, 'Streamer', 280000.00, 150000, 620000),
('player_jiraya', 'Jiraya', 'Jiraya', 28, 'Streamer', 220000.00, 125000, 480000),
('player_moman', 'MoMaN', 'Morgan Molina', 29, 'Streamer', 200000.00, 110000, 380000),
('player_fuze', 'Fuze', 'Florian Martin', 25, 'Streamer', 180000.00, 95000, 320000),
('player_doigby', 'Doigby', 'Dorian', 24, 'Streamer', 150000.00, 85000, 280000),
('player_kameto', 'Kameto', 'Kamel Kebir', 29, 'Streamer/CEO', 1500000.00, 450000, 2100000),

-- Joueurs Valorant français
('player_scream', 'ScreaM', 'Adil Benrlitom', 29, 'Duelist', 400000.00, 320000, 220000),
('player_nivera', 'Nivera', 'Nivera', 22, 'Sentinel', 250000.00, 85000, 60000),
('player_akuma', 'AKUMAAAA', 'Akuma', 25, 'Controller', 180000.00, 75000, 45000),
('player_bramz', 'Bramz', 'Bramz', 24, 'Initiator', 160000.00, 65000, 38000),

-- Joueurs Rocket League français
('player_fairy', 'Fairy Peak', 'Victor Locquet', 24, 'Striker', 350000.00, 140000, 95000),
('player_kaydop', 'Kaydop', 'Alexandre Courant', 25, 'All-around', 400000.00, 120000, 85000),
('player_alpha54', 'Alpha54', 'Alpha54', 22, 'Striker', 300000.00, 95000, 65000),

-- Autres streamers/joueurs français
('player_roro', 'Roro', 'Romain Bigeard', 27, 'Variety Streamer', 190000.00, 115000, 380000),
('player_jdg', 'Joueur du Grenier', 'Frédéric Molas', 41, 'Content Creator', 500000.00, 200000, 2800000),
('player_trash', 'Trash', 'Trash', 26, 'Streamer', 160000.00, 90000, 250000),
('player_cyril', 'Cyril', 'Cyril Schreiner', 35, 'Streamer', 180000.00, 105000, 420000),
('player_tonton', 'Tonton', 'Antoine Daniel', 35, 'Content Creator', 300000.00, 150000, 1200000),
('player_mistermv', 'MisterMV', 'Michaël Vendetta', 30, 'Streamer', 140000.00, 80000, 180000);

-- Assignation des joueurs aux équipes
INSERT INTO team_players (team_id, player_id, position, salary, join_date) VALUES
-- Team Vitality
('team_vit', 'player_caps', 'Mid Laner', 25000.00, '2022-01-15'),
('team_vit', 'player_zywoo', 'AWPer', 30000.00, '2020-09-01'),

-- Karmine Corp
('team_kc', 'player_kameto', 'CEO/Owner', 50000.00, '2020-05-01'),
('team_kc', 'player_scream', 'Duelist', 22000.00, '2021-03-15'),

-- Team LDLC
('team_ldlc', 'player_nbk', 'IGL', 20000.00, '2019-06-01'),
('team_ldlc', 'player_apex', 'Entry Fragger', 23000.00, '2018-08-15'),

-- Team Solary
('team_sly', 'player_gotaga', 'Content Creator', 35000.00, '2017-03-01'),

-- BDS
('team_bds', 'player_fairy', 'Striker', 18000.00, '2021-01-10'),
('team_bds', 'player_kaydop', 'All-around', 19000.00, '2020-11-15');

-- Création des tournois
INSERT INTO tournaments (id, name, game_id, prize_pool, start_date, end_date, location, status) VALUES
('tour_lec2024', 'LEC Spring 2024', 'game_lol', 250000.00, '2024-01-20', '2024-04-14', 'Berlin, Germany', 'completed'),
('tour_blast2024', 'BLAST Premier Spring 2024', 'game_cs2', 425000.00, '2024-01-31', '2024-06-16', 'Copenhagen, Denmark', 'completed'),
('tour_vct2024', 'VCT Masters Madrid 2024', 'game_valorant', 500000.00, '2024-03-14', '2024-03-24', 'Madrid, Spain', 'completed'),
('tour_rlcs2024', 'RLCS Winter Cup 2024', 'game_rl', 100000.00, '2024-12-01', '2024-12-15', 'Los Angeles, USA', 'upcoming'),
('tour_lfl2024', 'LFL Summer 2024', 'game_lol', 75000.00, '2024-05-28', '2024-08-18', 'Paris, France', 'completed'),
('tour_tm2024', 'Trackmania Cup 2024', 'game_fortnite', 50000.00, '2024-10-15', '2024-10-20', 'Lyon, France', 'upcoming');

-- Création des matchs
INSERT INTO matches (id, tournament_id, team1_id, team2_id, game_id, match_date, status, team1_score, team2_score, winner_id, format) VALUES
-- LEC Spring 2024 matches
('match_vit_kc', 'tour_lec2024', 'team_vit', 'team_kc', 'game_lol', '2024-02-15 18:00:00', 'completed', 2, 1, 'team_vit', 'Bo3'),
('match_kc_bds', 'tour_lec2024', 'team_kc', 'team_bds', 'game_lol', '2024-02-22 19:00:00', 'completed', 1, 2, 'team_bds', 'Bo3'),

-- BLAST Premier matches
('match_vit_ldlc', 'tour_blast2024', 'team_vit', 'team_ldlc', 'game_cs2', '2024-03-10 16:00:00', 'completed', 16, 12, 'team_vit', 'Bo1'),

-- VCT Masters matches
('match_kc_mces', 'tour_vct2024', 'team_kc', 'team_mces', 'game_valorant', '2024-03-18 15:30:00', 'completed', 2, 0, 'team_kc', 'Bo3'),

-- Matchs à venir
('match_bds_sly', 'tour_rlcs2024', 'team_bds', 'team_sly', 'game_rl', '2024-12-05 20:00:00', 'scheduled', 0, 0, NULL, 'Bo5'),
('match_vit_gm', 'tour_rlcs2024', 'team_vit', 'team_gm', 'game_rl', '2024-12-08 19:00:00', 'scheduled', 0, 0, NULL, 'Bo3');

-- Création d'utilisateurs pour les paris
INSERT INTO users (id, username, email, balance, total_bet, total_won) VALUES
('user_betmaster', 'bet_master_fr', 'betmaster@example.com', 500.00, 1200.00, 800.00),
('user_esportfan', 'esport_fan_69', 'esportfan@example.com', 250.00, 800.00, 920.00),
('user_gamerparis', 'gamer_paris', 'gamerparis@example.com', 1000.00, 2500.00, 2100.00),
('user_vitfan', 'vitality_supporter', 'vit_fan@example.com', 150.00, 600.00, 400.00),
('user_kcfan', 'kcorp_believer', 'kc_fan@example.com', 300.00, 950.00, 1150.00),
('user_csaddict', 'cs_addict', 'csaddict@example.com', 750.00, 1800.00, 1950.00),
('user_lolexpert', 'lol_expert', 'lolexpert@example.com', 400.00, 1100.00, 850.00),
('user_rocketfan', 'rocket_fan', 'rocketfan@example.com', 200.00, 500.00, 380.00);

-- Création de paris sur les matchs
INSERT INTO bets (user_id, match_id, team_id, amount, odds, potential_payout, status) VALUES
-- Paris sur le match VIT vs KC (terminé)
('user_vitfan', 'match_vit_kc', 'team_vit', 50.00, 1.85, 92.50, 'won'),
('user_kcfan', 'match_vit_kc', 'team_kc', 75.00, 2.10, 157.50, 'lost'),

-- Paris sur match KC vs BDS (terminé)
('user_kcfan', 'match_kc_bds', 'team_bds', 100.00, 2.25, 225.00, 'won'),

-- Paris sur matchs à venir
('user_rocketfan', 'match_bds_sly', 'team_bds', 80.00, 1.70, 136.00, 'pending'),
('user_gamerparis', 'match_vit_gm', 'team_vit', 120.00, 1.95, 234.00, 'pending'),
('user_esportfan', 'match_bds_sly', 'team_sly', 60.00, 2.40, 144.00, 'pending');

-- Insertion des cotes pour les matchs à venir
INSERT INTO match_odds (match_id, team_id, odds) VALUES
-- Match BDS vs SLY
('match_bds_sly', 'team_bds', 1.70),
('match_bds_sly', 'team_sly', 2.40),

-- Match VIT vs GM
('match_vit_gm', 'team_vit', 1.95),
('match_vit_gm', 'team_gm', 2.15);

-- Création d'index pour améliorer les performances
CREATE INDEX idx_matches_date ON matches(match_date);
CREATE INDEX idx_matches_status ON matches(status);
CREATE INDEX idx_bets_user ON bets(user_id);
CREATE INDEX idx_bets_match ON bets(match_id);
CREATE INDEX idx_bets_status ON bets(status);
CREATE INDEX idx_team_players_team ON team_players(team_id);
CREATE INDEX idx_team_players_player ON team_players(player_id);

-- Vues utiles pour l'application
CREATE VIEW upcoming_matches AS
SELECT
    m.id,
    m.match_date,
    t1.name as team1_name,
    t1.tag as team1_tag,
    t2.name as team2_name,
    t2.tag as team2_tag,
    g.name as game_name,
    tour.name as tournament_name,
    m.format
FROM matches m
JOIN teams t1 ON m.team1_id = t1.id
JOIN teams t2 ON m.team2_id = t2.id
JOIN games g ON m.game_id = g.id
JOIN tournaments tour ON m.tournament_id = tour.id
WHERE m.status = 'scheduled'
ORDER BY m.match_date ASC;

CREATE VIEW match_results AS
SELECT
    m.id,
    m.match_date,
    t1.name as team1_name,
    t1.tag as team1_tag,
    t1.logo_url as team1_logo,
    m.team1_score,
    t2.name as team2_name,
    t2.tag as team2_tag,
    t2.logo_url as team2_logo,
    m.team2_score,
    tw.name as winner_name,
    tw.tag as winner_tag,
    g.name as game_name,
    tour.name as tournament_name
FROM matches m
JOIN teams t1 ON m.team1_id = t1.id
JOIN teams t2 ON m.team2_id = t2.id
LEFT JOIN teams tw ON m.winner_id = tw.id
JOIN games g ON m.game_id = g.id
JOIN tournaments tour ON m.tournament_id = tour.id
WHERE m.status = 'completed'
ORDER BY m.match_date DESC;

CREATE VIEW user_bet_history AS
SELECT
    u.username,
    b.amount,
    b.odds,
    b.potential_payout,
    b.status,
    b.placed_at,
    t.name as team_name,
    t.tag as team_tag,
    m.match_date,
    t1.name as opponent1,
    t2.name as opponent2
FROM bets b
JOIN users u ON b.user_id = u.id
JOIN teams t ON b.team_id = t.id
JOIN matches m ON b.match_id = m.id
JOIN teams t1 ON m.team1_id = t1.id
JOIN teams t2 ON m.team2_id = t2.id
ORDER BY b.placed_at DESC;

CREATE VIEW team_stats AS
SELECT
    t.id,
    t.name,
    t.tag,
    COUNT(m.id) as total_matches,
    COUNT(CASE WHEN m.winner_id = t.id THEN 1 END) as wins,
    COUNT(CASE WHEN m.status = 'completed' AND m.winner_id != t.id THEN 1 END) as losses,
    ROUND(
        CASE
            WHEN COUNT(CASE WHEN m.status = 'completed' THEN 1 END) > 0
            THEN CAST(COUNT(CASE WHEN m.winner_id = t.id THEN 1 END) AS REAL) / COUNT(CASE WHEN m.status = 'completed' THEN 1 END) * 100
            ELSE 0
        END, 2
    ) as win_rate,
    t.total_earnings
FROM teams t
LEFT JOIN matches m ON (m.team1_id = t.id OR m.team2_id = t.id)
GROUP BY t.id, t.name, t.tag, t.total_earnings
ORDER BY win_rate DESC;

-- Messages de confirmation
SELECT 'Base de données créée avec succès!' as message;
SELECT 'Nombre d''équipes:' as info, COUNT(*) as count FROM teams;
SELECT 'Nombre de joueurs:' as info, COUNT(*) as count FROM players;
SELECT 'Nombre de matchs:' as info, COUNT(*) as count FROM matches;
SELECT 'Nombre de paris:' as info, COUNT(*) as count FROM bets;
SELECT 'Nombre d''utilisateurs:' as info, COUNT(*) as count FROM users;
