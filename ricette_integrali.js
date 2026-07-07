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
 {
        numero: 23,
        id: "pane_senza_glutine_saraceno_semi",
        immagine: "pane_grano_saraceno_semi.jpg", 
        titolo: "Pane Senza Glutine al Grano Saraceno e Semi",
        categoria: "integrali", // Inserito perfettamente nella vostra categoria dei pani ricchi e rustici
        programma: "6. SENZA GLUTINE", // Ciclo specifico con impasto rapido e singola lievitazione termoregolata
        doratura: "SCURO", // Consigliato scuro per dare colore e croccantezza alla crosta gluten-free
        storia: "<p>Nelle terre alte e nei campi baciati dalle nebbie, il grano saraceno racconta una storia di resilienza e nutrimento genuino. Questo pane non ha bisogno del glutine per farsi valere: la sua forza risiede nel carattere fiero, nel colore bruno della sua mollica e nel profumo ancestrale che sprigiona durante la cottura, che riempie la casa di note tostate e di calore rustico.</p><p>Arricchito da una pioggia di semi misti che regalano una texture croccante a ogni morso, questo filone è il compagno ideale per le colazioni energetiche o per accompagnare formaggi saporiti e zuppe fumanti. Grazie al programma dedicato della tua Girmi, l'assenza di glutine viene compensata da una gestione millimetrica dei tempi di riposo e calore, regalandoti una pagnotta soffice dentro e magnificamente rustica fuori.</p>",
        
        // Calibrato per l'alto assorbimento d'acqua tipico del saraceno e delle miscele senza glutine
        dosiBase: { 
    acqua: 390, 
    farine: {
        "Senza Glutine (Mix Pane)": 350,
        "di Grano Saraceno S.G.": 150
    }, 
    sale: 2.5, 
    zucchero: 1, 
    lievito: 7 
}, 
        
        // Questa dicitura apparirà chiaramente sul display sotto la voce farina
        tipoFarina: "Mix per Pane Senza Glutine (350g) + Farina di Grano Saraceno S.G. (150g)",
        isBrioche: false,
        
        // Sfrutta il calcolatore dinamico dell'app per scalare i semi e l'olio in base al peso della pagnotta (500g/750g/1000g)
        ingredientiExtra: [
            { nome: "Semi misti (girasole, zucca, lino, sesamo)", qtaBase: 60, momento: "Al Segnale Acustico (Add-In)" },
            { nome: "Olio Extravergine d'Oliva", qtaBase: 20, momento: "Nel Mantello (insieme all'acqua)" }
        ],
        note: "<strong>Il Consiglio del Fornaio:</strong> Le farine senza glutine non creano elasticità; l'impasto risulterà molto più simile a una pastella densa rispetto ai pani con frumento, ed è del tutto normale. Non aggiungete altra farina! Per una riuscita splendida anche alla vista, spennellate la superficie con un velo d'acqua e decorate con un pizzico di semi extra appena la macchina passa alla fase di cottura. Conservate il pane affettato in un sacchetto ermetico o congelatelo a fette per averlo sempre pronto dopo un leggero passaggio nel tostapane."
    },
    {
    numero: 24,
    id: "pane_integrale_miele_malto",
    immagine: "pane_integrale_miele_malto.jpg", 
    titolo: "Pane Integrale al Miele e Malto d'Orzo",
    categoria: "integrali",
    programma: "3. INTEGRALE", // Il programma della Girmi con le fasi di preriscaldamento più lunghe
    doratura: "MEDIO",
    storia: "<p>Nelle nebbiose mattine del Norfolk, quando i carri dei coloni giungevano ai mercati di Londra carichi di sacchi di iuta, non v'era farina più fiera e sincera di quella ricavata dall'intero chicco di grano, con tutta la sua crusca profumata. Ma la farina integrale, si sa, è come un vecchio cavallo da tiro: forte, generoso, ma dal carattere ostinato, che necessita di una cura speciale per dare il meglio di sé. Fu così che nelle cucine delle vecchie canoniche si prese l'abitudine di addolcire questo impasto con i frutti più puri della campagna: il miele ambrato delle api estive e il malto d'orzo, scuro e denso come melassa.</p><p>Quando la Girmi avvia il ciclo Integrale, la macchina sembra prendersi il suo tempo, coccolando gli ingredienti in un lento tepore che permette alla crusca di ammorbidirsi e al malto di risvegliare la forza sopita del lievito. L'aroma che si sprigiona durante la cottura è un'esperienza che scalda l'anima: una fragranza dolce e tostata, che evoca l'aria dei campi dopo la mietitura e il calore di una stube accesa. La pagnotta che ne emerge è un trionfo di rusticità: una crosta bruna e croccante, cosparsa di fiocchi d'avena che splendono come piccole monete, e una mollica bruna, incredibilmente soffice e profumata. È il pane perfetto per le colazioni d'inverno, superbo se spalmato con un velo di burro salato, capace di trasformare una semplice tazza di tè in un banchetto degno della più felice vigilia di Natale.</p>",
    
    // CORRETTO: Struttura integrata con il vostro calcolatore per la gestione di farine multiple
    dosiBase: { 
        acqua: 320, 
        farine: { 
            "Farina Integrale di Grano Tenero": 350, 
            "Farina Tipo 0": 150 
        }, 
        sale: 1.5, 
        zucchero: 0, 
        lievito: 7 
    }, 
    
    // CORRETTO: Sostituito il termine tecnico "Taglio" con una dicitura chiara e lineare
    tipoFarina: "Miscela di Farina Integrale e Tipo 0", 
    isBrioche: false,
    
    ingredientiExtra: [
        { nome: "Malto d'Orzo (in sciroppo o polvere)", qtaBase: 10, unita: "g", momento: "Iniziale sciolto nell'acqua tiepida" },
        { nome: "Miele Fluido (es. Castagno o Volata)", qtaBase: 15, unita: "g", momento: "Iniziale insieme ai liquidi" },
        { nome: "Fiocchi d'Avena (per decorare la superficie)", qtaBase: 10, unita: "g", momento: "Da spolverare sopra prima dell'ultima lievitazione" }
    ],
    note: "✨ <strong>Il Consiglio del Fornaio:</strong> La farina integrale assorbe l'acqua più lentamente rispetto alla farina bianca. Il programma INTEGRALE della Girmi include già una fase di riposo iniziale per questo scopo, ma se vuoi una mollica ancora più soffice, usa acqua leggermente tiepida e assicurati che il miele e il malto si siano sciolti completamente nel liquido prima di versare la farina. Lo zucchero è impostato a 0 nelle dosi base poiché gli zuccheri naturali del miele e del malto bastano e avanzano a nutrire il lievito e a dare una doratura da favola!"
},
);