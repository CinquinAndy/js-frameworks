/*
Les méthodes avancées pour les tableaux : map, filter, reduce, find, etc.


*/




// ══════════════════════════════════════════════════════════════
// ══════════════════════════════════════════════════════════════

const resistanceAuGommage = [85, 92, 78, 96, 89, 73, 91, 88];
const expeditionnaires = [
    { nom: 'Gustave', resistance: 85, role: 'Ingénieur' },
    { nom: 'Maelle', resistance: 92, role: 'Exploratrice' },
    { nom: 'Lune', resistance: 78, role: 'Chercheuse' },
    { nom: 'Sciel', resistance: 96, role: 'Enseignante' },
    { nom: 'Verso', resistance: 89, role: 'Mystérieux' },
    { nom: 'Renoir', resistance: 73, role: 'Sauveur' },
    { nom: 'Monoco', resistance: 91, role: 'Gestral' }
];

// =========================================================================
console.log("1. MAP() - Transformer chaque élément");
// But: Crée un nouveau tableau en appliquant une fonction à chaque élément
// ATTENTION: Ne modifie PAS le tableau original
// =========================================================================

const resistanceRenforcee = resistanceAuGommage.map(resistance => resistance + 10);
console.log("Résistance après entraînement:", resistanceRenforcee);

const codesLumiere = expeditionnaires.map(membre => membre.nom.toUpperCase());
console.log("Codes de Lumière:", codesLumiere);

const fichesExpedition = expeditionnaires.map((membre, index) => 
    `#${index + 1}: ${membre.nom} - ${membre.resistance}/100 résistance (${membre.role})`
);
console.log("Fiches anti-Gommage:", fichesExpedition);

// =========================================================================
console.log("2. FILTER() - Filtrer selon une condition");
// But: Retourne un nouveau tableau avec les éléments qui passent le test
// ATTENTION: Ne modifie PAS le tableau original
// =========================================================================

const survivantsElite = resistanceAuGommage.filter(resistance => resistance >= 90);
console.log("Survivants (≥90):", survivantsElite);

const chercheurs = expeditionnaires.filter(membre => membre.role === 'Chercheuse');
console.log("Équipe de recherche:", chercheurs);

const veteransLumiere = expeditionnaires.filter(membre => membre.resistance > 85 && membre.nom.length > 4);
console.log("Vétérans de Lumière:", veteransLumiere);

// =========================================================================
console.log("3. REDUCE() - Réduire à une seule valeur");
// But: Accumule les éléments du tableau en une seule valeur
// Paramètres: (accumulateur, valeurActuelle, index, tableau)
// =========================================================================

const moyenneResistance = resistanceAuGommage.reduce((somme, resistance) => somme + resistance, 0) / resistanceAuGommage.length;
console.log("Résistance moyenne:", moyenneResistance.toFixed(2));

const meilleureResistance = resistanceAuGommage.reduce((max, resistance) => resistance > max ? resistance : max, 0);
console.log("Meilleure résistance:", meilleureResistance);

const repartitionRoles = expeditionnaires.reduce((compteur, membre) => {
    compteur[membre.role] = (compteur[membre.role] || 0) + 1;
    return compteur;
}, {});
console.log("Répartition par rôle:", repartitionRoles);

// =========================================================================
console.log("4. FOREACH() - Exécuter une action sur chaque élément");
// But: Exécute une fonction pour chaque élément
// ATTENTION: Ne retourne RIEN (undefined)
// =========================================================================

console.log("Rapport de mission:");
expeditionnaires.forEach((membre, position) => {
    const statut = membre.resistance >= 90 ? "Héros" : 
                   membre.resistance >= 80 ? "Combattant" : "En danger";
    console.log(`   ${position + 1}. ${membre.nom}: ${membre.resistance}/100 ${statut}`);
});

// =========================================================================
console.log("5. FIND() - Trouver le premier élément correspondant");
// But: Retourne le PREMIER élément qui satisfait la condition
// Retourne undefined si rien n'est trouvé
// =========================================================================

const premierHeros = resistanceAuGommage.find(resistance => resistance >= 95);
console.log("Premier héros (≥95):", premierHeros);

const membreGustave = expeditionnaires.find(membre => membre.nom === 'Gustave');
console.log("Ingénieur Gustave:", membreGustave);

const gestral = expeditionnaires.find(membre => membre.role === 'Gestral');
console.log("Guerrier Gestral:", gestral);

// =========================================================================
console.log("6. SOME() - Vérifier si AU MOINS UN élément correspond");
// But: Retourne true si AU MOINS UN élément satisfait la condition
// =========================================================================

const aDesHeros = resistanceAuGommage.some(resistance => resistance >= 95);
console.log("Y a-t-il des héros (≥95)?", aDesHeros);

const aDesGestrals = expeditionnaires.some(membre => membre.role === 'Gestral');
console.log("Y a-t-il des Gestrals dans l'équipe?", aDesGestrals);

// =========================================================================
console.log("7. EVERY() - Vérifier si TOUS les éléments correspondent");
// But: Retourne true si TOUS les éléments satisfont la condition
// =========================================================================

const tousSurvivront = resistanceAuGommage.every(resistance => resistance >= 70);
console.log("Tous survivront-ils au Gommage (≥70)?", tousSurvivront);

const tousOntResistance = expeditionnaires.every(membre => membre.resistance > 0);
console.log("Tous ont-ils une résistance?", tousOntResistance);

// =========================================================================
console.log("8. INCLUDES() - Vérifier la présence d'une valeur");
// But: Vérifie si le tableau contient une valeur spécifique
// =========================================================================

const artefactsLumiere = ['Pinceau', 'Toile', 'Luminoïde', 'Cristal', 'Ombre'];
console.log("Artefacts de Lumière:", artefactsLumiere);
console.log("Contient 'Pinceau'?", artefactsLumiere.includes('Pinceau'));
console.log("Contient 'Gommage'?", artefactsLumiere.includes('Gommage'));

// =========================================================================
console.log("9. INDEXOF() - Trouver l'index d'une valeur");
// But: Retourne l'index d'une valeur, ou -1 si non trouvé
// =========================================================================

const zones = ['Lumière', 'Ombre', 'Clair-Obscur', 'Néant'];
console.log("Zones explorées:", zones);
console.log("Index de 'Clair-Obscur':", zones.indexOf('Clair-Obscur'));
console.log("Index de 'Paradis':", zones.indexOf('Paradis')); // -1

// =========================================================================
console.log("10. SPLIT() - Diviser une chaîne en tableau");
// But: Divise une chaîne de caractères en tableau
// ATTENTION: C'est une méthode de String, pas de Array!
// =========================================================================

const prophétie = "La Peintresse gommera tous les habitants de Lumière";
const mots = prophétie.split(" ");
console.log("Prophétie:", prophétie);
console.log("Mots de la prophétie:", mots);

const coordonnees = "Expédition@Lumière.monde";
const [mission, lieu] = coordonnees.split("@");
console.log(`Mission: ${mission}, Lieu: ${lieu}`);

// =========================================================================
console.log("11. JOIN() - Joindre les éléments en chaîne");
// But: Joint les éléments du tableau en une chaîne
// =========================================================================

const pouvoirs = ['Résistance', 'Vision', 'Combat', 'Magie'];
const arsenal = pouvoirs.join(" • ");
console.log("Arsenal de l'expédition:", arsenal);

const parcours = ['Lumière', 'Ombre', 'Clair-Obscur', 'Repaire-Peintresse'];
const route = parcours.join(" > ");
console.log("Route de l'expédition:", route);

// =========================================================================
console.log("12. SPLICE() - Modifier le tableau en place");
// But: Ajoute/supprime des éléments du tableau
// ATTENTION: MODIFIE le tableau original !
// Syntaxe: splice(début, nombreÀSupprimer, ...élémentsÀAjouter)
// =========================================================================

const menaces = ['Gommage', 'Ombre', 'Peintresse', 'Néant'];
console.log("Menaces avant:", [...menaces]);

// Remplacer 'Peintresse' par 'Espérance'
const neutralisées = menaces.splice(2, 1, 'Espérance');
console.log("Menaces après neutralisation:", menaces);
console.log("Menaces neutralisées:", neutralisées);

// Ajouter une nouvelle menace
menaces.splice(2, 0, 'Corruption');
console.log("Après découverte:", menaces);

// =========================================================================
console.log("13. SLICE() - Extraire une portion");
// But: Retourne une copie superficielle d'une portion du tableau
// ATTENTION: Ne modifie PAS le tableau original
// =========================================================================

const chronologie = ['Création', 'Apogée', 'Déclin', 'Gommage', 'Résistance', 'Expédition'];
console.log("Histoire complète:", chronologie);

const origines = chronologie.slice(0, 3);
console.log("3 premières époques:", origines);

const finDesTemps = chronologie.slice(-3);
console.log("3 dernières époques:", finDesTemps);

const criseActuelle = chronologie.slice(2, 5);
console.log("Crise actuelle:", criseActuelle);

// =========================================================================
console.log("14. SET - Collection de valeurs uniques");
// But: Stocke uniquement des valeurs uniques (pas de doublons)
// ATTENTION: Ce n'est pas une méthode de Array, mais très utile avec !
// =========================================================================

const temoignagesGommage = [85, 90, 85, 92, 90, 88, 92, 85];
console.log("Témoignages avec doublons:", temoignagesGommage);

const temoignagesUniques = new Set(temoignagesGommage);
console.log("Set de témoignages uniques:", temoignagesUniques);

// Reconvertir en tableau
const preuves = [...temoignagesUniques];
console.log("Preuves sans doublons:", preuves);

// Vérifier la présence
console.log("Les preuves contiennent 90?", temoignagesUniques.has(90));
console.log("Nombre de preuves uniques:", temoignagesUniques.size);

// =========================================================================
console.log("15. OBJECT.KEYS() / VALUES() / ENTRIES()");
// But: Extraire les clés, valeurs, ou paires clé-valeur d'un objet
// =========================================================================

const missionPeintresse = {
    nom: 'Expédition-33',
    cible: 'Peintresse',
    statut: 'En-cours',
    difficulté: 5,
    urgent: true
};

console.log("Mission:", missionPeintresse);
console.log("Clés mission:", Object.keys(missionPeintresse));
console.log("Détails mission:", Object.values(missionPeintresse));
console.log("Données complètes:", Object.entries(missionPeintresse));

// Rapport de mission
const rapportMission = Object.entries(missionPeintresse)
    .map(([clé, valeur]) => `${clé}: ${valeur}`)
    .join(' | ');
console.log("Rapport formaté:", rapportMission);

// =========================================================================
console.log("16. FLAT() - Aplatir les tableaux imbriqués");
// But: Aplatit les tableaux imbriqués
// =========================================================================

const hierarchieLumiere = [
    ['Citoyens', 'Artisans'],
    ['Expéditionnaires', ['Gustave', 'Maelle']],
    [['Verso', 'Sciel'], 'Peintresse']
];

console.log("Hiérarchie imbriquée:", hierarchieLumiere);
console.log("Aplati niveau 1:", hierarchieLumiere.flat());
console.log("Tous les acteurs:", hierarchieLumiere.flat(2));

// Nettoyer les rangs
const rangsMélangés = [
    ['Novice', 'Apprenti'],
    [],
    ['Vétéran'],
    ['Maître', ['Légende', 'Mythe']]
];
const tousRangs = rangsMélangés.flat(2).filter(rang => rang);
console.log("Tous les rangs:", tousRangs);
