// =====================================================================
//  IL FORNO DI MAURO E FRANCESCA - DATABASE RICETTE
//  Categoria: COLAZIONI, PORRIDGE E MARMELLATE
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
numero: 2,
        id: "pan_brioche",
        immagine: "pan_brioche.jpg",
        titolo: "Pan Brioche della Domenica Mattina",
        categoria: "colazioni",
        programma: "4. DOLCE",
        doratura: "CHIARO",
        storia: "<p>Una carezza soffice e profumata per i giorni di festa, capace di trasformare il risveglio in un momento di pura magia domestica. Il Pan Brioche della Domenica Mattina è l'alchimia perfetta tra la morbidezza del burro e la dolcezza dello zucchero, uniti in un abbraccio dorato che profuma di casa, di sogni e di colazioni lente.</p><p>Mentre la macchina lavora l'impasto con il programma DOLCE, la cucina si scalda e l'attesa diventa parte stessa del rito. La consistenza incredibilmente eterea e leggera di questa preparazione è dovuta all'uso della farina Manitoba, che sostiene la ricchezza dei grassi del burro e delle uova, regalando una struttura filante che si scioglie in bocca. Ottimo da gustare ancora tiepido, tagliato a fette spesse, magari arricchito con gocce di cioccolato o accompagnato da una tazza di buon latte caldo.</p>",        dosiBase: { latte: 220, farina: 450, burro: 60, sale: 1, zucchero: 3, lievito: 6, uova: 2 },
        tipoFarina: "Farina Manitoba",
        isBrioche: true,
        note: "<strong>Consiglio:</strong> Inserisci le uova leggermente sbattute insieme al latte tiepido."
    },
{
numero: 6,
        id: "pancarre_toast",
        immagine: "pan_carre.jpg",  
        titolo: "Il Pancarrè Soffice da Toast",
        categoria: "colazioni",
        programma: "6. SANDWICH",
        doratura: "CHIARO",
        storia: "<p>Nelle cucine avvolte dalla nebbia del mattino, quando il mondo fuori corre e dentro casa si cerca un attimo di pace, una consistenza eterea e leggera è pensata appositamente per rendere perfetto il momento del tostapane. Il Pancarrè Soffice è il re indiscusso delle colazioni e delle merende più golose, studiato per offrire fette dalla geometria perfetta e dalla morbidezza indimenticabile.</p><p>Grazie al programma SANDWICH della tua Girmi, l'impasto viene coccolato con tempi di lievitazione e temperature specifiche che evitano la formazione di una crosta troppo spessa o dura. Il segreto di questa nuvola risiede nel latte e nel burro morbido, che mantengono la mollica straordinariamente idratata, elastica e vellutata. Che sia farcito con prosciutto e formaggio filante per un toast classico, o spalmato di crema alle nocciole per una dolce coccola, saprà regalarti un morso soffice che profuma di cose semplici e buone.</p>",        dosiBase: { latte: 280, farina: 480, burro: 35, sale: 1.5, zucchero: 2, lievito: 5, uova: 0 },
        tipoFarina: "Farina Tipo 00",
        isBrioche: true,
        note: "<strong>Consiglio dell'Alchimista:</strong> Il burro deve essere <em>morbido a pomata</em>. Fai raffreddare il pancarrè avvolto in un canovaccio prima di affettarlo."
    },
{
numero: 8,
        id: "plumcake_yogurt",
        immagine: "plumcake_yogurt.jpg",
        titolo: "Plumcake Soffice allo Yogurt",
        categoria: "colazioni", 
        programma: "18. TORTA", // <--- Corretto secondo i 19 Segreti!
        doratura: "CHIARO",
        storia: "<p>Nelle nebbiose mattine d'inizio Novecento, le lacrime di pioggia sui vetri venivano evaporate dal calore di un dolce semplice e rassicurante, poggiato sul tavolo di legno della cucina. Il Plumcake allo Yogurt è l'aristocratico della semplicità: una nuvola d'oro dalla consistenza umida e vellutata, nata per essere tuffata nel tè fumante o nel caffellatte della prima aurora.</p><p>La magia di questa preparazione risiede interamente nell'incontro tra la delicatezza dello yogurt — che dona una meraviglia di morbidezza persistente per giorni — e il profumo ancestrale della scorza di limone grattugiata al momento. Affidando i componenti alle pale rotanti della tua Girmi con il programma dedicato alle TORTE, i grassi e gli zuccheri si monteranno in un'emulsione perfetta prima che il calore costante crei la classica e rassicurante spaccatura sulla superficie. È il custode dei risvegli lenti, un invito a rallentare il tempo un boccone alla volta.</p>",
        tipoDose: "fissa",
        testoDose: "Dose standard per uno stampo da Plumcake",
        ingredientiFissi: [
            { nome: "Farina Tipo 00", quantita: "250 g" },
            { nome: "Yogurt intero naturale", quantita: "125 g (1 vasetto)" },
            { nome: "Zucchero semolato", quantita: "150 g" },
            { nome: "Olio di semi di girasole", quantita: "80 ml" },
            { nome: "Uova intere medie", quantita: "3" },
            { nome: "Lievito in polvere per dolci", quantita: "1 bustina (16 g)" },
            { nome: "Scorza di limone grattugiata e sale", quantita: "q.b." }
        ],
        note: "<strong>Sequenza Alchemica d'Inserimento:</strong> Per evitare grumi di farina sul fondo, versa nel cestello prima tutti i liquidi: le uova leggermente sbattute, l'olio e lo yogurt. Copri interamente la superficie liquida prima con lo zucchero e poi con la farina setacciata. Crea infine una piccola conca nella farina e deponi lì il lievito per dolci, assicurandoti che non tocchi i liquidi sottostanti fino all'avvio della macchina."
    },
{
numero: 9,
        id: "confettura_arance_miele",
        immagine: "foto_confettura.jpg", 
        titolo: "Confettura d'Arance e Miele",
        categoria: "colazioni", 
        programma: "17. MARMELLATA",
        doratura: "-",
        storia: "<p>Nelle dispense delle vecchie dimore di campagna, i barattoli di vetro custodivano l'oro del sole invernale per goderne nelle calde mattine d'estate. Questa confettura è un omaggio a quei sapori densi e sinceri: l'abbraccio agrodolce delle arance mature che incontra la dolcezza profonda e aromatica del miele di melata o di castagno.</p><p>Mentre il programma MARMELLATA della tua Girmi governa il calore e muove le pale con moto lento e costante, i profumi degli agrumi si liberano nell'aria della cucina, evocando i mercati d'altri tempi. Non c'è bisogno di pectina commerciale; l'alchimia si compie grazie alla pazienza della macchina e alla naturale acidità del limone, che trasforma i frutti in una consistenza vellutata, screziata dalle scorzette dorate. È il nettare perfetto da spalmare sul pane caldo o per farcire una crostata rustica.</p>",
        tipoDose: "fissa",
        testoDose: "Dose calibrata per circa 2 barattoli medi (500g totali)",
        ingredientiFissi: [
            { nome: "Arance biologiche (polpa pulita, al netto degli scarti)", quantita: "500 g" },
            { nome: "Scorza di arancia (tagliata a listarelle sottilissime)", quantita: "di 1 arancia" },
            { nome: "Zucchero di canna", quantita: "200 g" },
            { nome: "Miele (aromatico, come melata, castagno o arancio)", quantita: "100 g" },
            { nome: "Succo di limone filtrato", quantita: "di 1/2 limone" }
        ],
        note: "<strong>Sequenza Alchemica e Regola di Sicurezza:</strong> Pelate le arance a vivo, eliminate i filamenti bianchi amari e tagliate la polpa a piccoli pezzi. Inserite nel cestello la polpa, le listarelle di scorza, lo zucchero, il miele e il succo di limone. Avviate il programma.<br><br>⚠️ <strong>Nota del Fornaio:</strong> Questa dose da 500g di frutta è un limite di sicurezza tassativo. Durante l'ora e mezza di cottura, gli zuccheri bollono accalorati creando una schiuma alta: una quantità maggiore rischierebbe di strabordare oltre l'orlo del secchiello, aggredendo le resistenze elettriche sottostanti. Lasciate l'oblò rigorosamente chiuso per evitare schizzi ustionanti e non estraete il recesso fino al segnale della macchina."
    },
{
numero: 10,
        id: "torta_mele_cannella",
        immagine: "foto_torta_mele.jpg", 
        titolo: "Torta di Mele e Cannella",
        categoria: "colazioni", // Perfetta per arricchire la sezione dei risvegli dolci
        programma: "18. TORTA",
        doratura: "MEDIO",
        storia: "<p>Se il conforto avesse un profumo, sarebbe senza dubbio quello delle mele che si abbandonano alla carezza della cannella dentro un forno caldo. Questa torta evoca i ricettari scritti a mano con l'inchiostro sbiadito, le cucine di campagna dove il tempo era scandito dal ticchettio del pendolo e le mele venivano sbucciate in un unico, lungo nastro a spirale.</p><p>La macchina del pane compie qui un piccolo miracolo di pasticceria rustica: mentre le pale amalgamano delicatamente l'impasto, il calore costante e racchiuso dello stampo metallico sigilla l'umidità dei frutti, fondendoli con la mollica in un abbraccio morbido e speziato. Non è una torta che cerca l'altezza geometrica, ma la ricchezza del cuore: ogni fetta racchiude scaglie dorate e note ambrate che curano la malinconia e trasformano una semplice colazione in un rituale d'altri tempi.</p>",
        tipoDose: "fissa",
        testoDose: "Dose standard per lo stampo della Girmi",
        ingredientiFissi: [
            { nome: "Farina Tipo 00", quantita: "200 g" },
            { nome: "Mele (preferibilmente Renette o Golden)", quantita: "2 medie (circa 300 g pulite)" },
            { nome: "Zucchero semolato", quantita: "120 g" },
            { nome: "Burro fuso (lasciato intiepidire)", quantita: "70 g" },
            { nome: "Uova intere medie", quantita: "2" },
            { nome: "Latte intero a temperatura ambiente", quantita: "50 ml" },
            { nome: "Lievito in polvere per dolci", quantita: "1 bustina (16 g)" },
            { nome: "Cannella in polvere e un pizzico di sale", quantita: "1 cucchiaino raso (o a piacere)" }
        ],
        note: "<strong>Sequenza Alchemica e Disposizione delle Mele:</strong> Sbucciate le mele: tagliatene una a cubetti piccolissimi e l'altra a fettine sottili. Versate sul fondo del cestello i liquidi (uova sbattute, burro fuso, latte), poi coprite con lo zucchero, la farina, la cannella e i cubetti piccoli di mela. Create una conca nella farina e deponetevi il lievito.<br><br>⏱️ <strong>Il Segreto dell'Alchimista:</strong> Avviate il programma 18. Durante i primi 10-15 minuti di impasto, aiutatevi con una spatola di silicone per raccogliere la farina dagli angoli. Appena la macchina smette di mescolare e inizia la fase di lievitazione/cottura (sentirete le pale fermarsi definitivamente), aprite l'oblò e disponete rapidamente le fettine di mela rimaste sulla superficie, spolverizzandole con un pizzico di zucchero prima che il calore le sigilli."
    },
{
numero: 20,
        id: "yogurt_bianco_cremoso",
        immagine: "foto_yogurt_casa.jpg", 
        titolo: "Yogurt Bianco Cremoso Fatto in Casa",
        categoria: "colazioni", // O una categoria dedicata se preferisci
        programma: "15. Yogurt", // Il ciclo a temperatura controllata per antonomasia
        doratura: "MEDIO",
        storia: "<p>La magia della fermentazione è antica quanto la civiltà stessa. Nelle culle della civiltà rurale, il latte veniva custodito al caldo affinché il tempo e microscopici alleati invisibili operassero una trasformazione miracolosa, convertendo il liquido in una crema densa, rinfrescante e nutriente.</p><p>Preparare lo yogurt in casa con la Girmi significa riscoprire questo ritmo lento e genuino. Senza conservanti, addensanti o zuccheri aggiunti, otterrai un prodotto purissimo, vellutato e dal sapore delicatamente acidulo. È la tela bianca perfetta per accogliere il tuo tocco alchemico: una pioggia di frutta fresca, un filo di miele dorato o una manciata di cereali croccanti per iniziare la giornata con l'energia della natura.</p>",
        // Calibrato per il calcolo matematico: 1 litro di latte base (1000 ml) e 1 vasetto di yogurt (125g) come starter
        dosiBase: { acqua: 1000, sale: 0, zucchero: 0, lievito: 125 }, 
        // 🌟 Trucco Magico del Codice: Rinominiamo i componenti per azzerare l'effetto "Pane"
        etichettaLiquido: "Latte Intero (UHT a temperatura ambiente o fresco precedentemente bollito)",
        tipoFarina: "Nessuna Farina (Lasciare il cestello pulito, inserire solo i liquidi!)",
        etichettaLievito: "Yogurt Bianco Naturale con Fermenti Vivi (lo 'Starter')",
        unitaLievito: "g", // Cambia 'bustine/cucchiaini' in grammi per lo starter
        isBrioche: false,
        note: "✨ <strong>L'Alchimia dei Fermenti:</strong> Per questa ricetta NON si usa la pala impastatrice! Rimuovila dal perno. Versa lo yogurt starter nel cestello insieme a un goccio di latte e mescola delicatamente con un cucchiaio di plastica o legno fino a scioglierlo, poi unisci il resto del latte. Avvia il programma 15. Al termine (dopo circa 6-8 ore), trasferisci lo yogurt in vasetti di vetro e lascialo rassodare in frigorifero per almeno 4 ore prima di gustarlo."
    }
);
