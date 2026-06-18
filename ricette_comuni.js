// =====================================================================
//  IL FORNO DI MAURO E FRANCESCA - DATABASE RICETTE
//  Categoria: PANI COMUNI
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
numero: 1,
        id: "pane_campagna",
        immagine: "pane_classico_di_campagna.jpg",
        titolo: "Pane Classico di Campagna",
        categoria: "comuni",
        programma: "1. BASE",
        doratura: "MEDIO",
        storia: "<p>Il profumo del pane antico che evoca i risvegli in campagna, quando l'aria del mattino è ancora pungente e il camino sparge nell'aria l'odore della legna arsa. Questa ricetta racchiude l'essenza della panificazione tradizionale: una crosta spessa, dorata e croccante che protegge una mollica soffice, alveolata e dal sapore leggermente ambrato.</p><p>Ogni fetta racconta la storia di gesti antichi, di mani sapienti che lavoravano l'impasto sulla spianatoia di legno all'alba. Utilizzando il programma BASE della tua Girmi, la macchina imiterà quel calore e quella forza costanti, ideali per sviluppare una maglia glutinica perfetta. È il pane perfetto da condividere a tavola, ideale da accompagnare a un filo d'olio buono, a formaggi stagionati o da tostare la mattina con un velo di marmellata fatta in casa.</p>",
        // 🌟 Bilanciamento perfetto per farina tipo 0 (Idratazione 56%)
        dosiBase: { acqua: 280, farina: 500, sale: 1, zucchero: 1, lievito: 7 },
        tipoFarina: "Farina Tipo 0",
        isBrioche: false,
        note: "✨ <strong>Il Consiglio del Fornaio:</strong> Per un tocco ancora più rustico, se la trovi, usa una farina Tipo 0 macinata a pietra. Questa idratazione garantisce che la cupola del pane rimanga bella gonfia e non collassi durante la cottura."
    },
{
numero: 11,
        id: "pane_cafone_napoletano",
        immagine: "foto_pane_cafone.jpg", 
        titolo: "Pane Cafone Napoletano",
        categoria: "comuni", // Controlla se la tua categoria si chiama "pani_classici" o "comuni" come il Pane di Campagna!
        programma: "2. FRANCESE",
        doratura: "SCURO",
        storia: "<p>All'ombra del Vesuvio, il pane non è un semplice contorno, ma un monumento alla pazienza e alla terra. Il Pane Cafone evoca le antiche mattine nei vicoli di Napoli, l'odore di legna che arde nei forni di pietra e il suono sordo della crosta battuta con le nocche dal fornaio per verificarne la cottura perfetta.</p><p>La sua alchimia richiede una farina forte e un'idratazione generosa, che spinge la mollica a creare grandi occhiature irregolari, capaci di trattenere l'oro del re dei sughi: il ragù della domenica. Affidato al programma Francese della tua Girmi e impostato sulla doratura più fiera, la macchina simulerà la spinta calore dei vecchi forni campani, regalandoti una pagnotta dalla scorza bruna, croccante e profumata, scrigno di una mollica ancestrale e squisitamente tenace.</p>",
        // Usiamo le dosi base calibrate sui 500g di farina per attivare il calcolatore!
        // Riportato a 2 cucchiaini come il pane di campagna per non far impazzire il calcolatore!
        dosiBase: { acqua: 325, farina: 500, sale: 2, zucchero: 1, lievito: 7 }, 
        tipoFarina: "Farina Tipo 0 (forte, per pane)",
        isBrioche: false,
        note: ""
    },
{
numero: 12,
        id: "pane_toscano_sciocco",
        immagine: "foto_pane_toscano.jpg", 
        titolo: "Pane Toscano Sciocco (Senza Sale)",
        categoria: "comuni", // Apparirà gloriosamente sotto la voce PANI COMUNI
        programma: "1. BASE",
        doratura: "MEDIO",
        storia: "<p>Nelle terre di Toscana, il pane non cerca il plauso della sapidità, ma si fa umile servitore dei sapori che lo circondano. Il Pane Sciocco – termine che i toscani usano per dire 'privo di sale' – evoca i versi di Dante e le antiche contese medievali, quando le gabelle sul sale costrinsero i fornai a rimpastare la farina con la sola purezza dell'acqua sorgiva.</p><p>La mancanza di sale non è un difetto, ma un'alchimia precisa: accelera la lievitazione e dona alla mollica una morbidezza eterea e una consistenza compatta, racchiusa in una crosta chiara e croccante. È il compagno ancestrale nato per accogliere la sapidità fiera del prosciutto toscano, il carattere dei fegatini o, semplicemente, per tramutarsi in una zuppa di pane o in un filante crostone bagnato d'olio buono e strofinato d'aglio all'imbrunire.</p>",
        // Il segreto chimico: zero sale e idratazione classica (60%) su 500g di farina base
        dosiBase: { acqua: 300, farina: 500, sale: 0, zucchero: 1, lievito: 7 }, 
        tipoFarina: "Farina Tipo 0 (oppure Tipo 1 per un tocco più rustico)",
        isBrioche: false,
        note: ""
    },
{
numero: 21,
        id: "pane_campagna_semola",
        immagine: "pane_classico_di_campagna.jpg",
        titolo: "Pane di Campagna con Semola Antica",
        categoria: "comuni",
        programma: "1. BASE",
        doratura: "MEDIO",
        storia: "<p>Questa variante del pane di campagna celebra l'incontro tra la tradizione contadina e la forza della terra. L'introduzione della semola rimacinata di grano duro evoca i grandi pani del sud Italia, famosi per la loro straordinaria conservazione e per quel colore tipicamente dorato e solare che caratterizza la mollica.</p><p>Grazie alla semola, l'impasto è in grado di accogliere un'idratazione più elevata, trattenendo l'umidità in cottura per regalarti un pane dalla crosta croccante e dallo spessore importante, perfetto per essere abbrustolito sulla griglia o per fare da base a ricche bruschette estive condite con pomodoro fresco e basilico.</p>",
        // Idratazione al 64% perfettamente bilanciata dal mix di farine nel Mantello
        dosiBase: { acqua: 320, farine: { "Tipo 0": 300, "Semola Rimacinata": 200 }, sale: 1.5, zucchero: 1, lievito: 7 },
        isBrioche: false,
        note: "✨ <strong>Il Consiglio del Fornaio:</strong> La semola rimacinata assorbe l'acqua più lentamente rispetto alla farina bianca. Durante i primi minuti di impasto potresti vedere la massa più compatta, ma non aggiungere liquidi: il programma BASE darà alla macchina tutto il tempo necessario per creare una maglia glutinica spettacolare."
    },
{
        numero: 22,
        id: "pane_rapido_sesamo",
        immagine: "foto_pane_sesamo.jpg", 
        titolo: "Pane Bianco Rapido al Sesamo",
        categoria: "comuni",
        programma: "4. RAPIDO",
        doratura: "SCURO",
        storia: "<p>Nelle sere in cui la nebbia di Londra si fa così fitta da ghermire i lampioni a gas e il gelo morde i calcagni dei passanti frettolosi, non v'è conforto più grande del focolare domestico. Eppure, persino lo spirito più paziente vacilla dinanzi all'attesa di una lunga lievitazione, quando lo stomaco reclama il suo antico diritto a una cena calda e corroborante. È in questi momenti che il miracolo del programma Rapido giunge in soccorso, come un vecchio amico che bussa alla porta inaspettato, recando sotto il mantello un dono inestimabile.</p><p>Questo pane non chiede ore di attesa, ma si compie nel volgere di un soffio, mentre l'acqua si scalda e la tavola viene apparecchiata. Il calore sprigionato dalla Girmi si fa intenso, sollecito, quasi a voler imitare la fretta allegra di un mastro fornaio che getta legna secca nella bocca del forno. E quando la cupola comincia a gonfiarsi, ecco che il profumo del sesamo tostato si diffonde nella stanza, un aroma ricco, oleoso e antico che sa di mercati orientali e di ricchezza d'altri tempi. Una crosta fiera e brunita, tempestata di piccoli semi dorati che scricchiolano sotto i denti, racchiude una mollica fragrante e compatta, nata per essere spezzata ancora fumante e cosparsa di burro salato, capace di scacciare ogni ombra e di trasformare anche la più umile delle stanze nel regno della più sincera contentezza.</p>",
        // Un goccio d'acqua in più per aiutare la lievitazione sprint (64% idratazione) ed extra lievito
        dosiBase: { acqua: 320, farina: 500, sale: 1.5, zucchero: 1, lievito: 9 }, 
        tipoFarina: "Farina Tipo 0",
        isBrioche: false,
        ingredientiExtra: [
        { nome: "Semi di Sesamo (da inserire nell'impasto)", qtaBase: 20, unita: "g", momento: "Iniziale insieme alla farina" },
        { nome: "Semi di Sesamo (da spolverare sopra)", qtaBase: 10, unita: "g", momento: "Al secondo BIP o spennellati prima della cottura" }
    ],
        note: "✨ <strong>Il Consiglio del Fornaio:</strong> Il programma RAPIDO richiede un calore immediato per far attivare i 9 grammi di lievito in poco tempo. Per un risultato perfetto, usa acqua tiepida (circa 30-35°C), mai fredda di rubinetto! Se vuoi che i semi in superficie rimangano attaccati come un gioiello, spennella delicatamente la cupola con un goccio d'acqua o latte appena prima che inizi la fase di cottura autonoma."
    }
);
