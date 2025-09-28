#!/usr/bin/env node

const sqlite3 = require('./node_project-for-sql-export/node_modules/sqlite3/lib/sqlite3').verbose();
const fs = require('fs');
const path = require('path');

// Chemin vers le fichier SQL
const sqlFilePath = path.join(__dirname, 'data_esport_betting_sqlite.sql');
const dbPath = path.join(__dirname, 'esport_betting.db');

// Supprimer la base existante si elle existe
if (fs.existsSync(dbPath)) {
    fs.unlinkSync(dbPath);
    console.log('🗑️  Ancienne base de données supprimée');
}

// Créer une nouvelle base de données
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('❌ Erreur lors de la création de la base:', err.message);
        return;
    }
    console.log('✅ Base de données SQLite créée');
});

// Lire le fichier SQL
const sqlScript = fs.readFileSync(sqlFilePath, 'utf8');

console.log('📝 Exécution du script SQL...');

// Exécuter le script complet en mode série
db.serialize(() => {
    db.exec(sqlScript, function(err) {
        if (err) {
            console.error('❌ Erreur lors de l\'exécution du script:', err.message);
        } else {
            console.log('🎉 Script SQL exécuté avec succès!');
        }
        
        // Tests de vérification
        runTests();
    });
});

function runTests() {
    console.log('\n🧪 Exécution des tests...\n');
    
    // Test 1: Vérifier le nombre d'équipes
    db.get("SELECT COUNT(*) as count FROM teams", (err, row) => {
        if (err) {
            console.error('❌ Test équipes échoué:', err.message);
        } else {
            console.log(`✅ Équipes: ${row.count}`);
        }
    });

    // Test 2: Vérifier le nombre de joueurs
    db.get("SELECT COUNT(*) as count FROM players", (err, row) => {
        if (err) {
            console.error('❌ Test joueurs échoué:', err.message);
        } else {
            console.log(`✅ Joueurs: ${row.count}`);
        }
    });

    // Test 3: Vérifier les matchs à venir
    db.all("SELECT * FROM upcoming_matches", (err, rows) => {
        if (err) {
            console.error('❌ Test matchs à venir échoué:', err.message);
        } else {
            console.log(`✅ Matchs à venir: ${rows.length}`);
            rows.forEach(match => {
                console.log(`   📅 ${match.team1_tag} vs ${match.team2_tag} - ${match.game_name}`);
            });
        }
    });

    // Test 4: Vérifier les résultats de matchs
    db.all("SELECT * FROM match_results LIMIT 3", (err, rows) => {
        if (err) {
            console.error('❌ Test résultats échoué:', err.message);
        } else {
            console.log(`✅ Résultats de matchs: ${rows.length}`);
            rows.forEach(match => {
                console.log(`   🏆 ${match.team1_tag} ${match.team1_score}-${match.team2_score} ${match.team2_tag} (Winner: ${match.winner_tag})`);
            });
        }
    });

    // Test 5: Vérifier les paris
    db.all("SELECT * FROM user_bet_history LIMIT 3", (err, rows) => {
        if (err) {
            console.error('❌ Test paris échoué:', err.message);
        } else {
            console.log(`✅ Historique des paris: ${rows.length}`);
            rows.forEach(bet => {
                console.log(`   💰 ${bet.username}: ${bet.amount}€ sur ${bet.team_tag} (${bet.status})`);
            });
        }
    });

    // Test 6: Statistiques des équipes
    db.all("SELECT * FROM team_stats ORDER BY win_rate DESC LIMIT 5", (err, rows) => {
        if (err) {
            console.error('❌ Test stats équipes échoué:', err.message);
        } else {
            console.log(`✅ Top 5 équipes par taux de victoire:`);
            rows.forEach(team => {
                console.log(`   📊 ${team.tag}: ${team.wins}W-${team.losses}L (${team.win_rate}%)`);
            });
        }
    });

    // Fermer la base de données après les tests
    setTimeout(() => {
        db.close((err) => {
            if (err) {
                console.error('❌ Erreur lors de la fermeture:', err.message);
            } else {
                console.log('\n✅ Base de données fermée');
                console.log(`📁 Base de données créée: ${dbPath}`);
                console.log('\n🚀 Vous pouvez maintenant utiliser cette base dans votre projet!');
            }
        });
    }, 1000);
}

// Le script démarre automatiquement avec db.serialize()
