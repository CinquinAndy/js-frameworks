#!/usr/bin/env node

const sqlite3 = require('./node_project-for-sql-export/node_modules/sqlite3/lib/sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, 'esport_betting.db');

// Ouvrir la base de données
const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READONLY, (err) => {
    if (err) {
        console.error('❌ Erreur lors de l\'ouverture de la base:', err.message);
        return;
    }
    console.log('✅ Base de données ouverte en lecture seule');
});

function showTables() {
    console.log('\n📋 Tables disponibles:');
    db.all("SELECT name FROM sqlite_master WHERE type='table'", (err, rows) => {
        if (err) {
            console.error('❌ Erreur:', err.message);
        } else {
            rows.forEach(row => {
                console.log(`   📄 ${row.name}`);
            });
            showSampleData();
        }
    });
}

function showSampleData() {
    console.log('\n🎮 Équipes disponibles:');
    db.all("SELECT tag, name, founded_year, total_earnings FROM teams ORDER BY total_earnings DESC", (err, rows) => {
        if (err) {
            console.error('❌ Erreur:', err.message);
        } else {
            rows.forEach(team => {
                console.log(`   ${team.tag.padEnd(6)} | ${team.name.padEnd(20)} | ${team.founded_year} | ${team.total_earnings}€`);
            });
        }
    });

    console.log('\n⭐ Top streamers:');
    db.all("SELECT username, real_name, twitch_followers, youtube_subscribers FROM players WHERE twitch_followers > 100000 ORDER BY twitch_followers DESC LIMIT 5", (err, rows) => {
        if (err) {
            console.error('❌ Erreur:', err.message);
        } else {
            rows.forEach(player => {
                console.log(`   ${player.username.padEnd(15)} | ${player.real_name?.padEnd(20) || 'N/A'.padEnd(20)} | Twitch: ${player.twitch_followers.toLocaleString().padStart(8)} | YouTube: ${player.youtube_subscribers.toLocaleString()}`);
            });
        }
    });

    console.log('\n🏆 Matchs récents:');
    db.all("SELECT * FROM match_results LIMIT 5", (err, rows) => {
        if (err) {
            console.error('❌ Erreur:', err.message);
        } else {
            rows.forEach(match => {
                const date = new Date(match.match_date).toLocaleDateString('fr-FR');
                console.log(`   ${date} | ${match.team1_tag} ${match.team1_score}-${match.team2_score} ${match.team2_tag} | ${match.game_name} | Winner: ${match.winner_tag}`);
            });
        }
    });

    console.log('\n📅 Prochains matchs:');
    db.all("SELECT * FROM upcoming_matches", (err, rows) => {
        if (err) {
            console.error('❌ Erreur:', err.message);
        } else {
            rows.forEach(match => {
                const date = new Date(match.match_date).toLocaleDateString('fr-FR');
                const time = new Date(match.match_date).toLocaleTimeString('fr-FR', {hour: '2-digit', minute: '2-digit'});
                console.log(`   ${date} ${time} | ${match.team1_tag} vs ${match.team2_tag} | ${match.game_name} | ${match.format}`);
            });
        }
    });

    console.log('\n💰 Paris actifs:');
    db.all("SELECT u.username, b.amount, b.odds, t.tag, b.status FROM bets b JOIN users u ON b.user_id = u.id JOIN teams t ON b.team_id = t.id WHERE b.status = 'pending'", (err, rows) => {
        if (err) {
            console.error('❌ Erreur:', err.message);
        } else {
            rows.forEach(bet => {
                console.log(`   ${bet.username.padEnd(20)} | ${bet.amount}€ sur ${bet.tag} | Cote: ${bet.odds} | ${bet.status}`);
            });
        }
    });

    // Fermer la base après affichage
    setTimeout(() => {
        db.close((err) => {
            if (err) {
                console.error('❌ Erreur lors de la fermeture:', err.message);
            } else {
                console.log('\n✅ Base de données fermée');
                console.log('\n💡 Conseils pour votre projet:');
                console.log('   - Utilisez les vues (upcoming_matches, match_results, etc.) pour simplifier vos requêtes');
                console.log('   - Les IDs sont des chaînes de caractères (TEXT) au lieu d\'UUID PostgreSQL');
                console.log('   - La base contient des données réalistes d\'équipes et joueurs français');
                console.log('   - Vous pouvez modifier les données selon vos besoins');
            }
        });
    }, 500);
}

// Démarrer l'exploration
showTables();
