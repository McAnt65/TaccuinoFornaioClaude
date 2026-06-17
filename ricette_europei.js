// =====================================================================
//  IL FORNO DI MAURO E FRANCESCA - DATABASE RICETTE
//  Categoria: PANI EUROPEI
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
numero: 4,
        id: "pane_segale",
        immagine: "pane_di_segale_nordico.jpg",
        titolo: "Pane di Segale Nordico",
        categoria: "europei",
        programma: "3. INTEGRALE",
        doratura: "SCURO",
        storia: "<p>Un pane compatto, scuro e aromatico come nelle terre del nord, dove il vento soffia forte tra i boschi di conifere e le mattine sono avvolte dalla bruma. Il Pane di Segale Nordico porta in tavola una tradizione antica, fatta di sapori intensi, rustici e genuini che sanno di terra e di focolare acceso.</p><p>La farina di segale, storicamente amata nei climi freddi per la sua straordinaria resistenza, dona a questo pane una consistenza densa, umida e una fragranza inconfondibile che si conserva fresca per molti giorni. Utilizzando il programma INTEGRALE della tua macchina, permetterai alle fibre pesanti di idratarsi correttamente e di sviluppare quel bouquet aromatico unico. È il compagno perfetto per accogliere un velo di burro salato, del salmone affumicato, o per accompagnare zuppe calde e stufati invernali.</p>",        dosiBase: { acqua: 310, farine: { "Segale Integrale": 200, "Tipo 0": 300 }, sale: 2, zucchero: 1, lievito: 6 },
        isBrioche: false,
        note: ""
    },
{
numero: 13,
        id: "baguette_parigina",
        immagine: "foto_baguette.jpg", 
        titolo: "Baguette Parigina Home-made",
        categoria: "europei", // Inserita trionfalmente sotto la voce PANI EUROPEI
        programma: "2. FRANCESE",
        doratura: "MEDIO",
        storia: "<p>Passeggiare lungo la Senna alle prime luci dell'alba significa farsi avvolgere dal profumo inconfondibile delle <em>boulangerie</em> che sfornano senza sosta. La Baguette Parigina è un'opera d'arte scolpita nell'aria e nella farina: una silhouette slanciata che nasconde sotto una crosta dorata e fragrante una mollica leggerissima, quasi impalpabile, ricca di grandi occhiature irregolari.</p><p>Nata, secondo la leggenda, per permettere ai lavoratori del metrò di spezzare il pane senza coltello, la baguette richiede un'idratazione generosa e un lungo riposo. Sfruttando il ciclo Francese della tua Girmi, l'impasto beneficerà di tempi di lievitazione distesi, perfetti per permettere agli zuccheri della farina di caramellare dolcemente in cottura. Il risultato sarà un filone dal profumo ancestrale, pronto a cantare sotto le dita e a farsi farcire con un velo di ottimo burro salato e prosciutto parigino.</p>",
        // Proporzioni francesi classiche: idratazione al 62-63% e 2 cucchiaini rasati di sale
        dosiBase: { acqua: 315, farina: 500, sale: 2, zucchero: 1, lievito: 7 }, 
        tipoFarina: "Farina Tipo 0 (o specifica per Baguette, con una buona forza)",
        isBrioche: false,
        note: "" // Lasciato vuoto per far agire i tuoi automatismi grafici senza sdoppiamenti!
    },
{
numero: 14,
        id: "soda_bread_irlandese",
        immagine: "foto_soda_bread.jpg", 
        titolo: "Soda Bread Irlandese (Pane al Bicarbonato)",
        categoria: "europei", 
        programma: "18. Torta", 
        doratura: "MEDIO",
        storia: "<p>Nelle sere nebbiose d'Irlanda, quando il vento dell'Atlantico sferza le scogliere, le cucine si scaldano attorno al fuoco di torba. È qui che nasce il Soda Bread, il pane della sussistenza e dell'ingegno contadino. In una terra dove il grano era debole e il lievito di birra un lusso raro, i fornai d'un tempo scoprirono che un pizzico di polvere bianca – il bicarbonato – accarezzato dall'acidità del latte cagliato, poteva far compiere alla farina un miracolo istantaneo.</p><p>Tradizionalmente segnato con una profonda croce sul dorso per scacciare gli spiriti maligni, questo pane non conosce l'attesa della lievitazione biologica. Affidato al ciclo continuo del programma Torta della tua Girmi, si trasforma in una pagnotta fitta, profumata e squisitamente friabile, simile a uno scone gigante. È il compagno perfetto per essere tagliato a fette spesse, spalmato generosamente di burro salato o inzuppato in una calda zuppa invernale.</p>",
        dosiBase: { acqua: 340, farina: 500, sale: 2, zucchero: 1, lievito: 7 }, 
        tipoFarina: "Farina Tipo 00 (oppure metà Integrale)", 
        isBrioche: false,
        // Sostituzioni chirurgiche lette dal nuovo codice
        etichettaLiquido: "Latticello (latte intero + un cucchiaio di limone fatto riposare 10 min)",
        etichettaLievito: "Bicarbonato di Sodio",
        note: "" // Lasciato vuoto per eliminare definitivamente ogni sdoppiamento grafico!
    }
);
