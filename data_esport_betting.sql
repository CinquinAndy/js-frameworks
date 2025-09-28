-- Base de données PostgreSQL pour Plateforme de Paris E-sportifs
-- Données complètes avec équipes et joueurs français d'e-sport et streaming

-- Suppression des tables existantes si elles existent
DROP TABLE IF EXISTS bets CASCADE;
DROP TABLE IF EXISTS matches CASCADE;
DROP TABLE IF EXISTS team_players CASCADE;
DROP TABLE IF EXISTS players CASCADE;
DROP TABLE IF EXISTS teams CASCADE;
DROP TABLE IF EXISTS games CASCADE;
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS tournaments CASCADE;

-- Création de l'extension pour les UUID
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Table des jeux e-sportifs
CREATE TABLE games (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(100) NOT NULL,
    category VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table des équipes
CREATE TABLE teams (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(100) NOT NULL,
    tag VARCHAR(10) NOT NULL UNIQUE,
    country VARCHAR(3) DEFAULT 'FR',
    logo_url VARCHAR(255),
    founded_year INTEGER,
    total_earnings DECIMAL(10,2) DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table des joueurs
CREATE TABLE players (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    username VARCHAR(50) NOT NULL UNIQUE,
    real_name VARCHAR(100),
    country VARCHAR(3) DEFAULT 'FR',
    age INTEGER,
    role VARCHAR(50),
    avatar_url VARCHAR(255),
    total_earnings DECIMAL(10,2) DEFAULT 0,
    twitch_followers INTEGER DEFAULT 0,
    youtube_subscribers INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table de liaison équipes-joueurs
CREATE TABLE team_players (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    team_id UUID REFERENCES teams(id) ON DELETE CASCADE,
    player_id UUID REFERENCES players(id) ON DELETE CASCADE,
    position VARCHAR(50),
    join_date DATE DEFAULT CURRENT_DATE,
    salary DECIMAL(8,2),
    is_active BOOLEAN DEFAULT true,
    UNIQUE(team_id, player_id)
);

-- Table des tournois
CREATE TABLE tournaments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(150) NOT NULL,
    game_id UUID REFERENCES games(id),
    prize_pool DECIMAL(12,2),
    start_date DATE,
    end_date DATE,
    location VARCHAR(100),
    status VARCHAR(20) DEFAULT 'upcoming' CHECK (status IN ('upcoming', 'ongoing', 'completed', 'cancelled'))
);

-- Table des matchs
CREATE TABLE matches (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tournament_id UUID REFERENCES tournaments(id),
    team1_id UUID REFERENCES teams(id),
    team2_id UUID REFERENCES teams(id),
    game_id UUID REFERENCES games(id),
    match_date TIMESTAMP,
    status VARCHAR(20) DEFAULT 'scheduled' CHECK (status IN ('scheduled', 'live', 'completed', 'cancelled')),
    team1_score INTEGER DEFAULT 0,
    team2_score INTEGER DEFAULT 0,
    winner_id UUID REFERENCES teams(id),
    format VARCHAR(50), -- ex: "Bo3", "Bo5", "Bo1"
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table des utilisateurs (pour les paris)
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(255),
    balance DECIMAL(10,2) DEFAULT 0,
    total_bet DECIMAL(10,2) DEFAULT 0,
    total_won DECIMAL(10,2) DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table des paris
CREATE TABLE bets (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id),
    match_id UUID REFERENCES matches(id),
    team_id UUID REFERENCES teams(id),
    amount DECIMAL(8,2) NOT NULL,
    odds DECIMAL(4,2) NOT NULL,
    potential_payout DECIMAL(10,2) NOT NULL,
    status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'won', 'lost', 'cancelled')),
    placed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insertion des jeux e-sportifs populaires
INSERT INTO games (name, category) VALUES
('League of Legends', 'MOBA'),
('Counter-Strike 2', 'FPS'),
('Valorant', 'FPS'),
('Rocket League', 'Sports'),
('Fortnite', 'Battle Royale'),
('Apex Legends', 'Battle Royale'),
('Overwatch 2', 'FPS'),
('FIFA 24', 'Sports'),
('Street Fighter 6', 'Fighting'),
('Tekken 8', 'Fighting');

-- Insertion des équipes françaises d'e-sport réalistes
INSERT INTO teams (name, tag, founded_year, total_earnings, logo_url) VALUES
('Team Vitality', 'VIT', 2013, 2500000.00, 'https://example.com/vitality_logo.png'),
('Karmine Corp', 'KC', 2020, 800000.00, 'https://example.com/kcorp_logo.png'),
('Team LDLC', 'LDLC', 2010, 1200000.00, 'https://example.com/ldlc_logo.png'),
('Team Solary', 'SLY', 2017, 450000.00, 'https://example.com/solary_logo.png'),
('GamersOrigin', 'GO', 2017, 350000.00, 'https://example.com/go_logo.png'),
('MCES', 'MCES', 2021, 200000.00, 'https://example.com/mces_logo.png'),
('Mandatory.gg', 'MDT', 2020, 180000.00, 'https://example.com/mandatory_logo.png'),
('Team BDS', 'BDS', 2018, 900000.00, 'https://example.com/bds_logo.png'),
('Gentle Mates', 'GM', 2021, 300000.00, 'https://example.com/gm_logo.png'),
('Atlético Esports', 'ATL', 2019, 250000.00, 'https://example.com/atletico_logo.png');

-- Insertion des joueurs français d'e-sport et streamers populaires
INSERT INTO players (username, real_name, age, role, total_earnings, twitch_followers, youtube_subscribers) VALUES
-- Joueurs LoL français célèbres
('Caps', 'Rasmus Winther', 24, 'Mid Laner', 800000.00, 120000, 85000),
('Yellowstar', 'Bora Kim', 29, 'Support', 500000.00, 95000, 62000),
('Rekkles', 'Martin Larsson', 27, 'ADC', 750000.00, 180000, 120000),
('sOAZ', 'Paul Boyer', 30, 'Top Laner', 450000.00, 75000, 45000),
('Targamas', 'Raphaël Crabbé', 23, 'Support', 200000.00, 55000, 32000),

-- Joueurs CS français
('ZywOo', 'Mathieu Herbaut', 23, 'AWPer', 600000.00, 250000, 180000),
('shox', 'Richard Papillon', 31, 'Rifler', 800000.00, 180000, 120000),
('NBK', 'Nathan Schmitt', 29, 'IGL', 650000.00, 140000, 95000),
('apEX', 'Dan Madesclaire', 30, 'Entry Fragger', 720000.00, 160000, 110000),
('RpK', 'Cédric Guipouy', 33, 'Support', 550000.00, 120000, 80000),

-- Streamers français populaires
('Squeezie', 'Lucas Hauchard', 28, 'Content Creator', 2000000.00, 800000, 18500000),
('Gotaga', 'Corentin Houssein', 32, 'Streamer/Pro', 1200000.00, 650000, 3200000),
('Zerator', 'Adrien Nougaret', 38, 'Streamer', 800000.00, 420000, 1800000),
('Domingo', 'Thomas Aranega', 30, 'Streamer', 350000.00, 180000, 850000),
('Locklear', 'Théo Kaessmann', 26, 'Streamer', 280000.00, 150000, 620000),
('Jiraya', 'Jiraya', 28, 'Streamer', 220000.00, 125000, 480000),
('MoMaN', 'Morgan Molina', 29, 'Streamer', 200000.00, 110000, 380000),
('Fuze', 'Florian Martin', 25, 'Streamer', 180000.00, 95000, 320000),
('Doigby', 'Dorian', 24, 'Streamer', 150000.00, 85000, 280000),
('Kameto', 'Kamel Kebir', 29, 'Streamer/CEO', 1500000.00, 450000, 2100000),

-- Joueurs Valorant français
('ScreaM', 'Adil Benrlitom', 29, 'Duelist', 400000.00, 320000, 220000),
('Nivera', 'Nivera', 22, 'Sentinel', 250000.00, 85000, 60000),
('AKUMAAAA', 'Akuma', 25, 'Controller', 180000.00, 75000, 45000),
('Bramz', 'Bramz', 24, 'Initiator', 160000.00, 65000, 38000),

-- Joueurs Rocket League français
('Fairy Peak', 'Victor Locquet', 24, 'Striker', 350000.00, 140000, 95000),
('Kaydop', 'Alexandre Courant', 25, 'All-around', 400000.00, 120000, 85000),
('Alpha54', 'Alpha54', 22, 'Striker', 300000.00, 95000, 65000),

-- Autres streamers/joueurs français
('Roro', 'Romain Bigeard', 27, 'Variety Streamer', 190000.00, 115000, 380000),
('Joueur du Grenier', 'Frédéric Molas', 41, 'Content Creator', 500000.00, 200000, 2800000),
('Trash', 'Trash', 26, 'Streamer', 160000.00, 90000, 250000),
('Cyril', 'Cyril Schreiner', 35, 'Streamer', 180000.00, 105000, 420000),
('Tonton', 'Antoine Daniel', 35, 'Content Creator', 300000.00, 150000, 1200000),
('MisterMV', 'Michaël Vendetta', 30, 'Streamer', 140000.00, 80000, 180000);

-- Assignation des joueurs aux équipes
-- Team Vitality
INSERT INTO team_players (team_id, player_id, position, salary, join_date)
SELECT t.id, p.id, 'Mid Laner', 25000.00, '2022-01-15'
FROM teams t, players p
WHERE t.tag = 'VIT' AND p.username = 'Caps';

INSERT INTO team_players (team_id, player_id, position, salary, join_date)
SELECT t.id, p.id, 'AWPer', 30000.00, '2020-09-01'
FROM teams t, players p
WHERE t.tag = 'VIT' AND p.username = 'ZywOo';

-- Karmine Corp
INSERT INTO team_players (team_id, player_id, position, salary, join_date)
SELECT t.id, p.id, 'CEO/Owner', 50000.00, '2020-05-01'
FROM teams t, players p
WHERE t.tag = 'KC' AND p.username = 'Kameto';

INSERT INTO team_players (team_id, player_id, position, salary, join_date)
SELECT t.id, p.id, 'Duelist', 22000.00, '2021-03-15'
FROM teams t, players p
WHERE t.tag = 'KC' AND p.username = 'ScreaM';

-- Team LDLC
INSERT INTO team_players (team_id, player_id, position, salary, join_date)
SELECT t.id, p.id, 'IGL', 20000.00, '2019-06-01'
FROM teams t, players p
WHERE t.tag = 'LDLC' AND p.username = 'NBK';

INSERT INTO team_players (team_id, player_id, position, salary, join_date)
SELECT t.id, p.id, 'Entry Fragger', 23000.00, '2018-08-15'
FROM teams t, players p
WHERE t.tag = 'LDLC' AND p.username = 'apEX';

-- Team Solary
INSERT INTO team_players (team_id, player_id, position, salary, join_date)
SELECT t.id, p.id, 'Content Creator', 35000.00, '2017-03-01'
FROM teams t, players p
WHERE t.tag = 'SLY' AND p.username = 'Gotaga';

-- BDS
INSERT INTO team_players (team_id, player_id, position, salary, join_date)
SELECT t.id, p.id, 'Striker', 18000.00, '2021-01-10'
FROM teams t, players p
WHERE t.tag = 'BDS' AND p.username = 'Fairy Peak';

INSERT INTO team_players (team_id, player_id, position, salary, join_date)
SELECT t.id, p.id, 'All-around', 19000.00, '2020-11-15'
FROM teams t, players p
WHERE t.tag = 'BDS' AND p.username = 'Kaydop';

-- Création des tournois
INSERT INTO tournaments (name, game_id, prize_pool, start_date, end_date, location, status)
VALUES
('LEC Spring 2024', (SELECT id FROM games WHERE name = 'League of Legends'), 250000.00, '2024-01-20', '2024-04-14', 'Berlin, Germany', 'completed'),
('BLAST Premier Spring 2024', (SELECT id FROM games WHERE name = 'Counter-Strike 2'), 425000.00, '2024-01-31', '2024-06-16', 'Copenhagen, Denmark', 'completed'),
('VCT Masters Madrid 2024', (SELECT id FROM games WHERE name = 'Valorant'), 500000.00, '2024-03-14', '2024-03-24', 'Madrid, Spain', 'completed'),
('RLCS Winter Cup 2024', (SELECT id FROM games WHERE name = 'Rocket League'), 100000.00, '2024-12-01', '2024-12-15', 'Los Angeles, USA', 'upcoming'),
('LFL Summer 2024', (SELECT id FROM games WHERE name = 'League of Legends'), 75000.00, '2024-05-28', '2024-08-18', 'Paris, France', 'completed'),
('Trackmania Cup 2024', (SELECT id FROM games WHERE name = 'Fortnite'), 50000.00, '2024-10-15', '2024-10-20', 'Lyon, France', 'upcoming');

-- Création des matchs
INSERT INTO matches (tournament_id, team1_id, team2_id, game_id, match_date, status, team1_score, team2_score, winner_id, format)
VALUES
-- LEC Spring 2024 matches
((SELECT id FROM tournaments WHERE name = 'LEC Spring 2024'),
 (SELECT id FROM teams WHERE tag = 'VIT'),
 (SELECT id FROM teams WHERE tag = 'KC'),
 (SELECT id FROM games WHERE name = 'League of Legends'),
 '2024-02-15 18:00:00', 'completed', 2, 1,
 (SELECT id FROM teams WHERE tag = 'VIT'), 'Bo3'),

((SELECT id FROM tournaments WHERE name = 'LEC Spring 2024'),
 (SELECT id FROM teams WHERE tag = 'KC'),
 (SELECT id FROM teams WHERE tag = 'BDS'),
 (SELECT id FROM games WHERE name = 'League of Legends'),
 '2024-02-22 19:00:00', 'completed', 1, 2,
 (SELECT id FROM teams WHERE tag = 'BDS'), 'Bo3'),

-- BLAST Premier matches
((SELECT id FROM tournaments WHERE name = 'BLAST Premier Spring 2024'),
 (SELECT id FROM teams WHERE tag = 'VIT'),
 (SELECT id FROM teams WHERE tag = 'LDLC'),
 (SELECT id FROM games WHERE name = 'Counter-Strike 2'),
 '2024-03-10 16:00:00', 'completed', 16, 12,
 (SELECT id FROM teams WHERE tag = 'VIT'), 'Bo1'),

-- VCT Masters matches
((SELECT id FROM tournaments WHERE name = 'VCT Masters Madrid 2024'),
 (SELECT id FROM teams WHERE tag = 'KC'),
 (SELECT id FROM teams WHERE tag = 'MCES'),
 (SELECT id FROM games WHERE name = 'Valorant'),
 '2024-03-18 15:30:00', 'completed', 2, 0,
 (SELECT id FROM teams WHERE tag = 'KC'), 'Bo3'),

-- Matchs à venir
((SELECT id FROM tournaments WHERE name = 'RLCS Winter Cup 2024'),
 (SELECT id FROM teams WHERE tag = 'BDS'),
 (SELECT id FROM teams WHERE tag = 'SLY'),
 (SELECT id FROM games WHERE name = 'Rocket League'),
 '2024-12-05 20:00:00', 'scheduled', 0, 0, NULL, 'Bo5'),

((SELECT id FROM tournaments WHERE name = 'RLCS Winter Cup 2024'),
 (SELECT id FROM teams WHERE tag = 'VIT'),
 (SELECT id FROM teams WHERE tag = 'GM'),
 (SELECT id FROM games WHERE name = 'Rocket League'),
 '2024-12-08 19:00:00', 'scheduled', 0, 0, NULL, 'Bo3');

-- Création d'utilisateurs pour les paris
INSERT INTO users (username, email, balance, total_bet, total_won) VALUES
('bet_master_fr', 'betmaster@example.com', 500.00, 1200.00, 800.00),
('esport_fan_69', 'esportfan@example.com', 250.00, 800.00, 920.00),
('gamer_paris', 'gamerparis@example.com', 1000.00, 2500.00, 2100.00),
('vitality_supporter', 'vit_fan@example.com', 150.00, 600.00, 400.00),
('kcorp_believer', 'kc_fan@example.com', 300.00, 950.00, 1150.00),
('cs_addict', 'csaddict@example.com', 750.00, 1800.00, 1950.00),
('lol_expert', 'lolexpert@example.com', 400.00, 1100.00, 850.00),
('rocket_fan', 'rocketfan@example.com', 200.00, 500.00, 380.00);

-- Création de paris sur les matchs
INSERT INTO bets (user_id, match_id, team_id, amount, odds, potential_payout, status) VALUES
-- Paris sur le match VIT vs KC (terminé)
((SELECT id FROM users WHERE username = 'vitality_supporter'),
 (SELECT id FROM matches WHERE team1_id = (SELECT id FROM teams WHERE tag = 'VIT') AND team2_id = (SELECT id FROM teams WHERE tag = 'KC')),
 (SELECT id FROM teams WHERE tag = 'VIT'),
 50.00, 1.85, 92.50, 'won'),

((SELECT id FROM users WHERE username = 'kcorp_believer'),
 (SELECT id FROM matches WHERE team1_id = (SELECT id FROM teams WHERE tag = 'VIT') AND team2_id = (SELECT id FROM teams WHERE tag = 'KC')),
 (SELECT id FROM teams WHERE tag = 'KC'),
 75.00, 2.10, 157.50, 'lost'),

-- Paris sur match KC vs BDS (terminé)
((SELECT id FROM users WHERE username = 'kcorp_believer'),
 (SELECT id FROM matches WHERE team1_id = (SELECT id FROM teams WHERE tag = 'KC') AND team2_id = (SELECT id FROM teams WHERE tag = 'BDS')),
 (SELECT id FROM teams WHERE tag = 'BDS'),
 100.00, 2.25, 225.00, 'won'),

-- Paris sur matchs à venir
((SELECT id FROM users WHERE username = 'rocket_fan'),
 (SELECT id FROM matches WHERE team1_id = (SELECT id FROM teams WHERE tag = 'BDS') AND team2_id = (SELECT id FROM teams WHERE tag = 'SLY')),
 (SELECT id FROM teams WHERE tag = 'BDS'),
 80.00, 1.70, 136.00, 'pending'),

((SELECT id FROM users WHERE username = 'gamer_paris'),
 (SELECT id FROM matches WHERE team1_id = (SELECT id FROM teams WHERE tag = 'VIT') AND team2_id = (SELECT id FROM teams WHERE tag = 'GM')),
 (SELECT id FROM teams WHERE tag = 'VIT'),
 120.00, 1.95, 234.00, 'pending'),

((SELECT id FROM users WHERE username = 'esport_fan_69'),
 (SELECT id FROM matches WHERE team1_id = (SELECT id FROM teams WHERE tag = 'BDS') AND team2_id = (SELECT id FROM teams WHERE tag = 'SLY')),
 (SELECT id FROM teams WHERE tag = 'SLY'),
 60.00, 2.40, 144.00, 'pending');

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

-- Données de statistiques pour le tableau de bord
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
            THEN COUNT(CASE WHEN m.winner_id = t.id THEN 1 END)::decimal / COUNT(CASE WHEN m.status = 'completed' THEN 1 END) * 100
            ELSE 0
        END, 2
    ) as win_rate,
    t.total_earnings
FROM teams t
LEFT JOIN matches m ON (m.team1_id = t.id OR m.team2_id = t.id)
GROUP BY t.id, t.name, t.tag, t.total_earnings
ORDER BY win_rate DESC;

-- Table pour les cotes des matchs
CREATE TABLE match_odds (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    match_id UUID REFERENCES matches(id),
    team_id UUID REFERENCES teams(id),
    odds DECIMAL(4,2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insertion des cotes pour les matchs à venir
INSERT INTO match_odds (match_id, team_id, odds) VALUES
-- Match BDS vs SLY
((SELECT id FROM matches WHERE team1_id = (SELECT id FROM teams WHERE tag = 'BDS') AND team2_id = (SELECT id FROM teams WHERE tag = 'SLY')),
 (SELECT id FROM teams WHERE tag = 'BDS'), 1.70),
((SELECT id FROM matches WHERE team1_id = (SELECT id FROM teams WHERE tag = 'BDS') AND team2_id = (SELECT id FROM teams WHERE tag = 'SLY')),
 (SELECT id FROM teams WHERE tag = 'SLY'), 2.40),

-- Match VIT vs GM
((SELECT id FROM matches WHERE team1_id = (SELECT id FROM teams WHERE tag = 'VIT') AND team2_id = (SELECT id FROM teams WHERE tag = 'GM')),
 (SELECT id FROM teams WHERE tag = 'VIT'), 1.95),
((SELECT id FROM matches WHERE team1_id = (SELECT id FROM teams WHERE tag = 'VIT') AND team2_id = (SELECT id FROM teams WHERE tag = 'GM')),
 (SELECT id FROM teams WHERE tag = 'GM'), 2.15);

-- Fonction pour calculer les gains d'un utilisateur
CREATE OR REPLACE FUNCTION calculate_user_profit(user_uuid UUID)
RETURNS DECIMAL(10,2) AS $$
BEGIN
    RETURN (
        SELECT COALESCE(SUM(
            CASE
                WHEN b.status = 'won' THEN (b.amount * b.odds) - b.amount
                WHEN b.status = 'lost' THEN -b.amount
                ELSE 0
            END
        ), 0)
        FROM bets b
        WHERE b.user_id = user_uuid
    );
END;
$$ LANGUAGE plpgsql;

-- Trigger pour mettre à jour les statistiques des utilisateurs
CREATE OR REPLACE FUNCTION update_user_stats()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.status = 'won' THEN
        UPDATE users
        SET total_won = total_won + (NEW.amount * NEW.odds - NEW.amount),
            balance = balance + (NEW.amount * NEW.odds)
        WHERE id = NEW.user_id;
    ELSIF NEW.status = 'lost' THEN
        -- Le montant a déjà été déduit lors du placement du pari
        NULL;
    END IF;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_update_user_stats
    AFTER UPDATE OF status ON bets
    FOR EACH ROW
    WHEN (OLD.status = 'pending' AND NEW.status IN ('won', 'lost'))
    EXECUTE FUNCTION update_user_stats();

-- Messages de confirmation
SELECT 'Base de données créée avec succès!' as message;
SELECT 'Nombre d''équipes:' as info, COUNT(*) as count FROM teams;
SELECT 'Nombre de joueurs:' as info, COUNT(*) as count FROM players;
SELECT 'Nombre de matchs:' as info, COUNT(*) as count FROM matches;
SELECT 'Nombre de paris:' as info, COUNT(*) as count FROM bets;
SELECT 'Nombre d''utilisateurs:' as info, COUNT(*) as count FROM users;