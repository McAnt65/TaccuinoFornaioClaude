// =====================================================================
//  IL FORNO DI MAURO E FRANCESCA - DATABASE RICETTE
//  Categoria: PANI DOLCI
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
databaseRicette.push(
{
numero: 18,
        id: "pan_de_keleba_dolce",
        immagine: "pan_keleba.jpg", 
        titolo: "Pan de Keleba Dolce all'Uvetta",
        categoria: "dolci", 
        programma: "5. Brioche", 
        doratura: "MEDIO",
        storia: "<p>Il Pan de Keleba evoca storie di porti lontani, spezie portate dal vento e dolcezze nate dall'abbraccio tra culture diverse. Questo pane dolce, dalla mollica densa, ricca e generosa, è un vero e proprio comfort food d'altri tempi, capace di trasformare una semplice colazione in un rituale festoso.</p><p>Arricchito con una cascata di uvetta sultanina che dona picchi di dolcezza naturale a ogni morso, e profumato a scelta con un pizzico di cannella o scorza d'arancia, il Keleba sprigiona il meglio di sé quando viene dorato a puntino. Tagliato a fette spesse, è perfetto da gustare al naturale o leggermente tostato, lasciando che il calore risvegli gli aromi burrosi e fruttati racchiusi nel suo cuore candido.</p>",
        // 🌟 Usiamo 'acqua' per i calcoli e attiviamo il cambio nome magico!
        dosiBase: { acqua: 280, farina: 500, sale: 1, zucchero: 4, lievito: 7 }, 
        etichettaLiquido: "Latte intero", // Forza il motore a stampare "Latte intero" al posto di Acqua!
        tipoFarina: "Farina Tipo 0 (oppure metà Tipo 00 e metà Manitoba)", 
        isBrioche: false,
        ingredientiExtra: [
            { nome: "Burro morbido a pomata", qtaBase: 50, momento: "Nel Mantello (dall'inizio)" },
            { nome: "Uvetta Sultanina (pesata da secca, ammolata e strizzata)", qtaBase: 100 }
        ],
        note: "✨ <strong>Il Segreto del Fornaio:</strong> Prima di avviare il programma, mettete l'uvetta in ammollo in acqua tiepida per 15 minutes, poi strizzatela benissimo e infarinatela leggermente prima di aggiungerla. Il burro deve essere molto morbido, a temperatura ambiente, inserito nel cestello insieme al latte e alla farina."
    }
);
