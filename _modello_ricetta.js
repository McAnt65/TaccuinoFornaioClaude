// =====================================================================
//  IL FORNO DI MAURO E FRANCESCA - MODELLO PER NUOVE RICETTE
// =====================================================================
//
// Questo file NON viene caricato dall'app. Serve solo come modello
// da copiare quando si aggiunge una nuova ricetta.
//
// COME PROCEDERE:
// 1. Copia il blocco tra "INIZIO MODELLO" e "FINE MODELLO" qui sotto.
// 2. Incollalo dentro databaseRicette.push( ... ) nel file della
//    categoria giusta (ricette_comuni.js, ricette_europei.js,
//    ricette_mondo.js, ricette_sfiziosi.js, ricette_dolci.js,
//    ricette_impasti.js, ricette_colazioni.js), come nuovo elemento
//    (separato da virgola dagli altri).
// 3. Compila tutti i campi.
//
// CAMPO "numero": e' FISSO E PERMANENTE. Aggiorna manualmente il
// numero qui sotto (PROSSIMO NUMERO LIBERO) ogni volta che assegni
// un numero a una nuova ricetta, cosi' la prossima volta saprai
// subito qual e' il numero successivo da usare. Una volta assegnato
// un numero a una ricetta, NON cambiarlo mai piu', anche se la
// ricetta viene spostata di categoria o riordinata.
//
// PROSSIMO NUMERO LIBERO: 22
//
// CATEGORIE VALIDE: comuni | europei | mondo | sfiziosi | dolci | impasti | colazioni
// PROGRAMMA: deve iniziare con un numero da "1." a "19." (uno dei 19 Segreti della Girmi)
// DORATURA: CHIARO | MEDIO | SCURO | -
//
// --- INIZIO MODELLO ---
/*
{
    numero: 22, // <-- PROSSIMO NUMERO LIBERO: aggiorna qui sopra dopo averlo usato
    id: "id_univoco_minuscolo_con_underscore",
    immagine: "nome_foto.jpg", // le foto sono gestite a parte, fuori dall'app
    titolo: "Titolo della Ricetta",
    categoria: "comuni",
    programma: "1. Normale",
    doratura: "MEDIO",
    storia: "<p>Primo paragrafo del racconto...</p><p>Secondo paragrafo...</p>",
    dosiBase: { acqua: 0, farina: 0, sale: 0, zucchero: 0, lievito: 0 },
    tipoFarina: "Farina Tipo 0",
    isBrioche: false,
    note: ""
}
*/
// --- FINE MODELLO ---
//
// NOTE SUI CAMPI SPECIALI (usali solo se servono):
// - tipoDose: "fissa" + ingredientiFissi: [{nome, quantita}, ...]
//   per ricette a dose fissa (torte, confetture, ecc.) invece del
//   calcolatore 500/750/1000g.
// - dosiBase.farine: { "Tipo 0": 300, "Semola Rimacinata": 200 }
//   per mescolare piu' farine invece del singolo campo "farina".
// - ingredientiExtra: [{ nome, qtaBase, unita, momento }, ...]
//   per ingredienti aggiuntivi che si scalano col peso (noci, olive...).
// - etichettaLiquido / etichettaLievito: per rinominare "Acqua" o
//   "Lievito" quando la ricetta usa latte, yogurt, bicarbonato, ecc.
// - isBrioche: true per ricette ricche (latte, burro, uova) che usano
//   la formattazione "Mantello / Liquidi / Tocco Regale".
