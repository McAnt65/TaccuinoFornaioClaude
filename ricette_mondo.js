// =====================================================================
//  IL FORNO DI MAURO E FRANCESCA - DATABASE RICETTE
//  Categoria: PANI DAL MONDO
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
numero: 15,
        id: "pane_shokupan_giapponese",
        immagine: "foto_shokupan.jpg", 
        titolo: "Pane Shokupan Giapponese al Latte",
        categoria: "mondo", // Trionfale debutto nella sezione PANI DAL MONDO!
        programma: "6. Sandwich", // Perfetto per ottenere la tipica mollica fittissima ed elastica
        doratura: "CHIARO", // Tradizionalmente lo Shokupan deve avere una crosta sottile e chiarissima
        storia: "<p>Nelle mattine silenziose di Tokyo, l'aroma che si sprigiona dalle <em>bakery</em> di Ginza è dolce, avvolgente e rassicurante. È il profumo dello Shokupan, il pane al latte che ha ridefinito il concetto stesso di morbidezza nel mondo. Non un semplice pane in cassetta, ma una nuvola dorata capace di sfaldarsi in filamenti soffici come seta, grazie a un'idratazione ricca e alla presenza del burro.</p><p>La consistenza unica dello Shokupan, quasi eterea ma straordinariamente elastica, lo rende la base perfetta per i celebri <em>Sando</em> giapponesi, farciti con frutta fresca e panna o con la classica frittata dolce. Affidato al programma Sandwich della tua Girmi e impostato sulla doratura più chiara per preservare la delicatezza della sua pelle, questo impasto si trasformerà in un lingotto candido e profumatissimo, scrigno di una mollica ancestrale, dolce e incredibilmente soffice.</p>",
        // Utilizziamo la struttura delle ricette ricche (isBrioche: true)
        dosiBase: { 
            latte: 290, // Sostituisce interamente l'acqua per una morbidezza strutturale
            uova: 1, // 1 uovo intero (medio) per legare i grassi e dare elasticità
            farina: 500, // Farina forte (ideale Manitoba o Tipo 0 per reggere i grassi)
            sale: 1.5, // Bilanciamento delicato
            zucchero: 3, // 3 cucchiai grandi (lo Shokupan ha una nota dolciastra tipica)
            burro: 40, // 40g di burro morbido che le pale incorporeranno durante il ciclo
            lievito: 7 
        }, 
        tipoFarina: "Farina Tipo 0 Forte (o Manitoba)", 
        isBrioche: true, // Attiva la formattazione dei liquidi ricchi, del burro e dei cucchiai di zucchero!
        note: "" // Nessun doppione, pulizia assoluta
    }
);
