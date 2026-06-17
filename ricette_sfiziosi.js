// =====================================================================
//  IL FORNO DI MAURO E FRANCESCA - DATABASE RICETTE
//  Categoria: PANI SFIZIOSI
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
numero: 5,
        id: "pane_rustico_olive",
        immagine: "pane_rustico_oliverosmarino.jpg",
        titolo: "Pane Rustico alle Olive e Rosmarino",
        categoria: "sfiziosi",
        programma: "2. Francese", // Allineato perfettamente al tuo menu dei 19 segreti!
        doratura: "MEDIO",
        storia: "<p>Sotto il sole che batte forte sulle pietre dei muretti a secco, dove l'aria sa di sale, di macchia mediterranea e di terra arsa, nasce l'ispirazione per questo impasto. Il Pane Rustico alle Olive e Rosmarino è un vero e proprio viaggio sensoriale tra i sentori e i profumi caldi dell'estate italiana.</p><p>La combinazione della farina Tipo 1 con la Semola Rimacinata crea una crosta croccante e dorata dal colore dorato, che racchiude una mollica soffice e profumata. Durante la cottura con il programma Francese, gli oli essenziali del rosmarino si sprigioneranno nell'aria della cucina, anticipando la sorpresa delle olive nere che incontrerai ad ogni morso. È il pane ideale da servire durante un aperitivo all'aperto, da accompagnare a un tagliere di salumi o semplicemente da gustare da solo, ancora tiepido, per riscoprire il sapore della condivisione.</p>",
        dosiBase: { acqua: 290, farine: { "Tipo 1": 250, "Semola Rimacinata": 210 }, sale: 2, zucchero: 1, lievito: 6 },
        isBrioche: false,
        // 🌟 Spostiamo le olive qui: ora cambieranno peso dinamicamente (500g / 750g / 1000g)!
        ingredientiExtra: [
            { nome: "Olive Nere (ben sgocciolate e tagliate a rondelle)", qtaBase: 75 }
        ],
        // Le note restano pulite, solo per il rosmarino che non ha bisogno di variazioni matematiche
        note: "✨ <strong>L'Essenza Mediterranea:</strong> Tritate finemente gli aghi di 1 rametto di Rosmarino fresco e inseritelo nel 'Mantello' insieme alle farine fin dall'inizio. Le Olive Nere verranno calcolate automaticamente dal sistema qui sopra e andranno inserite solo al segnale acustico (i 'bip' della macchina)."
    },
{
numero: 16,
        id: "pane_noci_gorgonzola",
        immagine: "foto_pane_noci_gorgonzola.jpg", 
        titolo: "Pane alle Noci e Gorgonzola",
        categoria: "sfiziosi", 
        programma: "1. Normale", 
        doratura: "MEDIO",
        storia: "<p>Nelle antiche osterie di campagna, dove il tempo sembra scorrere più lento, l'incontro tra il calore del pane, l'abbraccio cremoso del formaggio e la nota ancestrale della frutta secca ha sempre rappresentato il ristoro supremo. Questo Pane alle Noci e Gorgonzola racchiude in sé l'essenza dell'autunno e della convivialità fiera.</p><p>La magia di questa pagnotta risiede nel contrasto: la mollica soffice e profumata viene interrotta dal morso croccante dei gherigli di noce, mentre il gorgonzola, fondendosi dolcemente durante la cottura, crea delle venature saporite, umide e irresistibilmente aromatiche. Servito tiepido, magari accompagnato da un velo di miele di castagno o da un calice di vino rosso strutturato, trasformerà la tua tavola in un rifugio di sapori intensi e indimenticabili.</p>",
        dosiBase: { acqua: 310, farina: 500, sale: 1.5, zucchero: 1, lievito: 7 }, 
        tipoFarina: "Farina Tipo 0 (o metà Tipo 0 e metà Tipo 1 per un tocco più rustico)",
        isBrioche: false,
        // 🌟 Spostiamo qui i pesi base: ora scaleranno alla perfezione tra 500g, 750g e 1000g!
        ingredientiExtra: [
            { nome: "Gherigli di Noce (tritati grossolanamente)", qtaBase: 70 },
            { nome: "Gorgonzola a cubetti (freddo di frigorifero)", qtaBase: 80 }
        ],
        // Note purely operative, zero numeri ingannevoli per l'utente
        note: "✨ <strong>Il Segreto degli Alchimisti:</strong> Gli ingredienti speciali mostrati qui sopra verranno ricalcolati in base al peso scelto. Attendete il segnale acustico (i 'bip' della macchina verso la fine dell'impasto) per calarli nel cestello, così che il formaggio crei magnifiche venature filanti senza sciogliersi nell'impasto primordiale."
    },
{
numero: 17,
        id: "pane_curcuma_girasole",
        immagine: "foto_pane_curcuma.jpg", 
        titolo: "Pane alla Curcuma e Semi di Girasole",
        categoria: "sfiziosi", 
        programma: "1. Normale", 
        doratura: "MEDIO",
        storia: "<p>Un tempo le spezie erano considerate merci preziose quanto l'oro, scambiate lungo rotte carovaniere sospese tra deserto e mare. Questo Pane alla Curcuma e Semi di Girasole porta in tavola la magia di quei viaggi, tingendo la mollica di un giallo solare, caldo e vibrante, che cattura lo sguardo ancor prima del palato.</p><p>La curcuma dona alla pagnotta una nota terrosa, delicatamente speziata e avvolgente, che si sposa divinamente con il sapore dolce e tostato dei semi di girasole. Tagliato a fette, questo pane dorato sembra racchiudere la luce del mattino ed è lo sfondo ideale per accogliere formaggi freschi spalmabili, un velo di salmone affumicato o, semplicemente, per dare un tocco di colore e vitalità ai pranzi di tutti i giorni.</p>",
        dosiBase: { acqua: 315, farina: 500, sale: 1.5, zucchero: 1, lievito: 7 }, 
        tipoFarina: "Farina Tipo 0 (ottima anche la Tipo 1 per un tocco più rustico)",
        isBrioche: false,
        // 🌟 ECCO LA MAGIA: Gestiamo sia la curcuma iniziale che i semi al BIP!
        ingredientiExtra: [
            { nome: "Curcuma in polvere", qtaBase: 2, unita: "cucchiaini", momento: "Nel Mantello (dall'inizio)" },
            { nome: "Semi di Girasole", qtaBase: 40 } // Senza parametri extra usa i default: "g" e "Al segnale acustico (BIP)"
        ],
        // Nota totalmente descrittiva, zero possibilità di errore
        note: "✨ <strong>La Formula dell'Oro:</strong> Gli ingredienti speciali cambieranno dose in base al peso scelto. Unite la polvere di curcuma alla farina ancor prima di avviare il ciclo, mentre i semi di girasole andranno aggiunti solamente quando la macchina emetterà i suoi segnali sonori."
    }
);
