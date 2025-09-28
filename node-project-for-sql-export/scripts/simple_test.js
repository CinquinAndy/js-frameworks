// Test simple de connexion à la base de données
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./esport_betting.db', (err) => {
    if (err) {
        console.error('❌ Erreur de connexion:', err.message);
    } else {
        console.log('✅ Connexion réussie à la base SQLite');
        
        // Test simple : compter les équipes
        db.get("SELECT COUNT(*) as count FROM teams", (err, row) => {
            if (err) {
                console.error('❌ Erreur requête:', err.message);
            } else {
                console.log(`📊 Nombre d'équipes: ${row.count}`);
            }
            
            db.close();
        });
    }
});
