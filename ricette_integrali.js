// =====================================================================
//  IL FORNO DI MAURO E FRANCESCA - DATABASE RICETTE
//  Categoria: PANI INTEGRALI
// =====================================================================
//
// Questo file aggiunge le ricette di questa categoria all'array
// globale "databaseRicette" (dichiarato in index.html prima di
// caricare i file delle categorie).
//
// PER AGGIUNGERE UNA NUOVA RICETTA IN QUESTA CATEGORIA:
// 1. Copia il modello dal file "_modello_ricetta.js" e incollalo
//    qui dentro, come nuovo elemento di databaseRicette.push(...).
// 2. Il campo "numero" e' FISSO E PERMANENTE: usa il prossimo numero
//    libero in assoluto (controlla _modello_ricetta.js per saperlo)
//    e non cambiarlo mai piu', anche spostando la ricetta.
// 3. All'avvio dell'app, validaDatabaseRicette() segnala in console
//    eventuali numeri/id duplicati o categorie/programmi non validi.
//
// CATEGORIA: integrali
// Farine integrali, multicereali, segale, farro, grano saraceno.
// Ricette con alta percentuale di crusca, germe di grano, fibre.
//
databaseRicette.push(
    // Le prime ricette integrali verranno aggiunte qui.
    // Esempio di struttura (copia da _modello_ricetta.js):
    //
    // {
    //     numero: 22,
    //     id: "pane_integrale_classico",
    //     immagine: "pane_integrale_classico.jpg",
    //     titolo: "Pane Integrale Classico",
    //     categoria: "integrali",
    //     programma: "2. Integrale",
    //     doratura: "MEDIO",
    //     storia: "<p>...</p>",
    //     dosiBase: { acqua: 300, farina: 500, sale: 1.5, zucchero: 1, lievito: 7 },
    //     tipoFarina: "Farina Integrale",
    //     isBrioche: false,
    //     note: ""
    // }
);
