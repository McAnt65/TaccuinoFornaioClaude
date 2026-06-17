// =====================================================================
//  IL FORNO DI MAURO E FRANCESCA - DATABASE RICETTE
//  Categoria: IMPASTI
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
numero: 3,
        id: "sfoglia_emiliana",
        immagine: "foto_sfoglia.jpg",
        titolo: "Sfoglia all'Uovo Emiliana",
        categoria: "impasti", 
        programma: "11. IMPASTO", // <--- Corretto secondo i 19 Segreti!
        doratura: "-",
        storia: "<p>Nel cuore dell'Emilia, il mattarello è una bacchetta magica e la sfoglia d'oro è il lenzuolo che accoglie i segreti della domenica. Questa ricetta evoca le cucine avvolte dal vapore dei brodi primordiali, dove le sfogline, con gesti fieri e cadenzati, trasformano la semplicità della terra in pura poesia commestibile.</p><p>L'alchimia della sfoglia richiede rigore: la traditione esige un uovo intero per ogni ettogrammo di farina, senza concessioni all'acqua o al sale, che ne comprometterebbero l'elasticità sotto i colpi del legno. Affidando questo antico rito alle pale costanti della tua Girmi con il programma IMPASTO, otterrai un panetto sodo, liscio e setoso, specchio di una maglia glutinica perfettamente tesa. È la base ideale per tagliare tagliatelle dorate, scrigni per tortellini o fogli leggeri per lasagne destinate a far sobbollire di gioia i commensali.</p>",
        tipoDose: "fissa",
        testoDose: "Proporzioni tradizionali per 4 commensali",
        ingredientiFissi: [
            { nome: "Farina di grano tenero Tipo 00 (o specifica per pasta)", quantita: "400 g" },
            { nome: "Uova fresche intere (a temperatura ambiente)", quantita: "4 grandi (circa 240 g sgusciate)" }
        ],
        note: "<strong>Il segreto dell'Alchimista:</strong> Se l'impasto dovesse sembrare troppo bricioloso nei primi minuti del programma, non cedere alla tentazione di aggiungere acqua, ma un solo cucchiaio di tuorlo sbattuto. Una volta terminato il ciclo della macchina, estrai il panetto, avvolgilo nella pellicola e lascialo riposare per 30 minuti prima di stenderlo."
    },
{
numero: 7,
        id: "pizza_teglia",
        immagine: "pizza_in_teglia.jpg",
        titolo: "La Verace in Teglia (Base Pizza)",
        categoria: "impasti",
        programma: "10. IMPASTO PIZZA",
        doratura: "MEDIO",
        storia: "<p>Nelle sere in cui la casa si riempie di voci, risate e del calore degli affetti più cari, c'è un rito che unisce tutti attorno alla tavola: la preparazione della pizza. La Verace in Teglia è la celebrazione della convivialità italiana, una base stesa ad arte che promette di trasformare ingredienti semplici in un capolavoro di croccantezza e leggerezza.</p><p>Questo programma unisce la forza delle pale a una camera calda ideale, coccolando la massa per sviluppare una struttura che, in cottura, diventerà alveolata e digeribile. L'idratazione generosa e il tocco dell'olio d'oliva nell'impasto creano il connubio perfetto: un fondo incredibilmente friabile e un cuore soffice come una nuvola, pronto ad accogliere il rosso vivo del pomodoro e il bianco filante della mozzarella.</p><p>Anche se la macchina da pane si fermerà prima della cottura, il suo lavoro sarà stato fondamentale per gettare le basi di una stesura perfetta, dove le bolle d'aria intrappolate nel glutine esploderanno nel calore del tuo forno di casa, regalando il profumo inconfondibile delle migliori pizzerie artigianali.</p>",
        dosiBase: { acqua: 300, farina: 500, sale: 2.5, zucchero: 1, lievito: 5 },
        tipoFarina: "Farina Tipo 0 (o Specifica per Pizza)",
        isBrioche: false,
        note: "<strong>Ingredienti Speciali da aggiungere subito:</strong><br>• 2 cucchiai di Olio Extravergine d'Oliva (fondamentali nella vaschetta insieme all'acqua per dare elasticità e croccantezza).<br><br><strong>Guida alla Stesura e Riposo:</strong><br>1. <strong>Estrazione:</strong> Al segnale di fine programma, ungiti leggermente le mani con dell'olio ed estrai la massa (sarà soffice e idratata).<br>2. <strong>Stesura senza stress:</strong> Ungi generosamente la teglia da forno. Posiziona l'impasto al centro e allargalo delicatamente usando <em>solo i polpastrelli</em>, spingendo i gas di lievitazione dal centro verso i bordi. Se l'impasto oppone resistenza e tende a ritirarsi, fermati, coprilo e lascialo rilassare per 5 minuti prima di continuare.<br>3. <strong>Il Secondo Riposo:</strong> Una volta steso su tutta la superficie, lascia riposare l'impasto nella teglia per 20-30 minuti in un luogo tiepido (es. il forno spento con la luce accesa), coperto da un canovaccio umido o da pellicola trasparente per non far seccare la superficie.<br><br><strong>Segreti per il Condimento e la Cottura:</strong><br>4. <strong>L'ordine degli ingredienti:</strong> Condisci la passata di pomodoro a parte con olio, sale e origano. Distribuiscila sulla base lasciando un centimetro di bordo libero. <em>Non mettere subito la mozzarella!</em><br>5. <strong>Fase 1 (La Base Croccante):</strong> Preriscalda il forno di casa alla massima temperatura (220-250°C) in modalità statica. Inforna la teglia direttamente sul **fondo del forno** per i primi 10 minuti. Questo shock termico farà spingere la lievitazione dal basso e renderà la base super croccante.<br>6. <strong>Fase 2 (Il Completamento):</strong> Sforna un momento la teglia, sposta la pizza sul ripiano centrale, distribuisci la mozzarella a cubetti (avendo cura di strizzarla bene prima per non farle rilasciare acqua) e gli altri ingredienti. Cuoci per altri 5-7 minuti fino a doratura."
    },
{
numero: 19,
        id: "impasto_focaccia_pugliese",
        immagine: "foto_focaccia_pugliese.jpg", 
        titolo: "Impasto Focaccia Pugliese Tradizionale",
        categoria: "impasti", // Inserito nella sezione degli Impasti solo lavorati dalla macchina
        programma: "10. Impasto Pizza", // Sfrutta la forza e la temperatura di questo ciclo specifico
        doratura: "MEDIO",
        storia: "<p>Nelle storiche panetterie di Bari e di tutta la Puglia, il profumo della focaccia appena sfornata è un richiamo ancestrale a cui è impossibile resistere. Questo impasto racchiude la sapienza di una tradizione che vuole la focaccia alta, soffice all'interno, dorata e irresistibilmente croccante sui bordi e sul fondo, unta al punto giusto di ottimo olio d'oliva.</p><p>Il vero segreto che i vecchi fornai si tramandano da generazioni risiede nell'introduzione della patata lessa nell'impasto: un tocco di pura alchimia che dona alla mollica una morbidezza e un'umidità uniche, capaci di mantenersi intatte per ore. Una volta completato il ciclo nella tua Girmi, stendi l'impasto in una teglia generosamente oliata, affonda i polpastrelli nella massa e guarnisci con pomodorini spaccati a metà, origano selvatico e olive baresane prima di passarla al fuoco del forno tradizionale.</p>",
        // Calibrata al millesimo: idratazione alta (70%) perfetta per la semola e la patata
        dosiBase: { acqua: 350, farine: { "Semola Rimacinata": 300, "Tipo 0": 200 }, sale: 2.5, zucchero: 1, lievito: 7 }, 
        isBrioche: false,
        // Usiamo il motore avanzato per calcolare la patata in base al peso scelto!
        ingredientiExtra: [
            { nome: "Patata lessa (tiepida e schiacciata finemente)", qtaBase: 100, momento: "Nel Mantello (dall'inizio)" }
        ],
        note: "✨ <strong>Il Segreto di Puglia:</strong> Lessate la patata e schiacciatela perfettamente con lo schiacciapatate quando è ancora calda. Lasciatela intiepidire prima di inserirla nel cestello insieme alle farine e all'acqua. Al termine del programma 10, ungi abbondantemente una teglia tonda di ferro o alluminio, stendi l'impasto delicatamente senza sgonfiarlo, condisci e cuoci in forno statico alla massima temperatura (250°C) per circa 20 minuti."
    }
);
