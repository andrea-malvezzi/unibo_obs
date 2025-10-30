## Introduzione e terminologia base
### Capacità di trasmissione e Ritardo del collegamento
La capacità di trasmissione ed il ritardo sono indipendenti l'uno dall'altro. Perché?
- La capacità di trasmissione è il numero massimo di bit trasmessi (o ricevuti) al secondo
- Il ritardo è il tempo richiesto a questi dati per raggiungere la propria destinazione

Vi sono casi dove occorrono compromessi tra le due. Vediamo un esempio:
- Inviare una mail non richiede un basso ritardo, per varie ragioni. Il destinatario potrebbe non essere presente per leggerla, ad esempio.
- Giocare online richiede un ritardo estremamente basso, in quanto ad ogni input corrisponde un'informazione e l'assenza di reattività potrebbe compromettere l'esperienza di gioco.

Essendo il ritardo variabile per varie ragioni, come traffico più intenso in dati momenti, la variazione del ritardo di ricezione potrebbe risultare più alta.
### Latenza
Per latenza si intende il periodo temporale compreso tra l'invio del primo **batch** di dati all'arrivo di questo. Un'elevata latenza corrisponde ad una risposta più lenta.
### Jitter
Una rete con variazione (detta anche **Jitter**) più bassa, seppur con ritardo più alto, potrebbe risultare utile per un servizio streaming, in quanto limiterebbe i caricamenti mentre si guarda un film, banalmente. Tuttavia, questo ritardo maggiore causerebbe un ritardo nella visualizzazione ad esempio di eventi live. Una partita di pallone con poco Jitter ma alto ritardo avrà magari un ritardo di un minuto o poco più dalla realtà, ma in alcuni casi questo è già troppo.
Un Jitter pari a 0 equivale ad un uso minore di memoria per memorizzare dati inviati ma ancora da visualizzare, ed avendo meno uso di memoria, si ha ritardo estremamente ridotto.
Insomma, meno Jitter si ha meglio è, generalmente, ma vi sono casi e casi.
### Il Bandwidth
Il Bandwidth corrisponde al tetto massimo della velocità a cui una rete può operare. Quando si paga un abbonamento Wi-Fi, si paga per alzare il Bandwidth$\dots$ che non è detto sia garantito! Quindi si potrebbe pagare di più per "alzare il tetto di casa nostra", ma potremmo comunque "ritrovarci a camminare sullo stesso pavimento" (ipotetica velocità elevata, stessa velocità effettiva).
### RTT (Round Trip Time)
L'RTT è il tempo che un'informazione impiega a compiere un viaggio di andata e ritorno. Nell'ambito videoludico è molto usato per indicare il tempo che un'informazione impiega nel partire da un client e tornare dopo aver contattato il server.
Un RTT maggiore corrisponde ad un tempo di risposta maggiore, cosa che potrebbe risultare problematica.
### Attenuazione di un segnale
Durante la trasmissione di un segnale, specialmente su grandi distanze, i collegamenti potrebbero ridurre l'intensità (e conseguentemente l'efficienza) di questo. Questo accade a causa della resistenza e della capacità innata dei materiali utilizzati per i collegamenti. Tale fenomeno è chiamato **attenuazione**. Esiste anche un fenomeno di attenuazione per le reti usufruenti delle onde radio per la trasmissione di dati, purtroppo: esso è la ragione per cui allontanandosi dai router o ponendo ostacoli tra noi ed essi, le tacche del Wi-Fi calano.
## Il calcolatore e la rete
### Connettersi ad una rete
Un calcolatore, per connettersi ad una rete, necessita di alcune componenti HW/SW, ossia:
- un **dispositivo o scheda di rete**, ovvero un HW apposito alla codifica, trasmissione, ricezione e decodifica di dati tra calcolatore e rete;
- un **mezzo di trasmissione**, ovvero un supporto su cui e ricevere dati, come dei cavi elettrici, una fibra ottica, o una qualunque infrastruttura di rete;
- un **connettore di rete**, ossia un'interfaccia per abilitare il collegamento dal dispositivo stesso al mezzo di trasmissione. Un esempio di connettore di rete è l'Ethernet, definito con la sigla **RJ45**;
- un **protocollo di rete**, cioè un insieme di regole implementante sotto forma di SW definite per garantire il corretto funzionamento della comunicazione.
### Infrastrutture di rete
In un'infrastruttura di rete, si hanno:
- collegamenti di rete, ovvero un mezzo di trasmissione condiviso tra nodi di una rete, il quale supporta fisicamente la trasmissione di segnali;
- una struttura, che può essere:
	- punto-punto: connessione tra due Host diretta;
	- a connessione multipla, che si suddivide a sua volta in 3 tipi diversi:
		- completamente connessa, ovvero dove ogni Host è connesso ad ogni altro nodo della rete (si hanno quindi ridondanze);
		- parzialmente connesse: un nodo è connesso direttamente ad un solo altro nodo e così via, creando un cammino;
		- partizionata: si hanno gruppi di Host connessi tra loro. Questi gruppi sono tuttavia tra loro isolati;
- un cammino dei segnali, che può essere diretto o indiretto mediante connessioni in sequenza.

> Il numero di collegamenti di un Host in una rete si dice **grado**.

> Esiste un grado minimo per prevenire la failure in caso di rottura di un Nodo all'interno di una rete (guarda come calcolarlo). Questo grado si dice **grado di tolleranza** della rete.
## Topologia di rete
Esistono $4$ principali topologie (modelli) di rete, dove la differenza principale sta nel modo in cui i calcolatori sono connessi tra loro. Vediamole:
- ad anello![[Pasted image 20251016071837.png]]
- a stella, dove tutte le macchine sono connesse tra loro mediante un nodo centrale![[Pasted image 20251016071912.png]]
- bus, dove si pone il problema dell'accesso concorrente ad un bus informazioni![[Pasted image 20251016071929.png]]
- ad albero, tipicamente usata per rappresentare domini o foreste di domini![[Pasted image 20251016071946.png]]
- esiste anche una quinta topologia ibrida delle precedenti, detta a maglia. Tipicamente questa viene utilizzata per le reti di enormi dimensioni.
### Collegamenti all'interno di una topologia
I collegamenti tra macchine posso essere di $3$ tipologie:
- cablata ($\text{i.e.}$ con cavi di rame). Questo corrisponde al metodo più utilizzato attualmente;
- in fibra ottica. Costosa ma molto potente;
- wireless. Comoda ma meno efficace e limitata in portata;

Ogni macchina si interfaccia con la rete mediante un componente HW detto **scheda di rete**, tipicamente specializzata per una singola tipologia di collegamento. Ognuna di queste schede ha un identificativo univoco globalmente detto **indirizzo MAC** (Medium Access Control).

Quindi:
- scelgo uno o più tipi di collegamento per la rete;
- preparo una scheda di rete appropriata per il collegamento scelto (per le reti locali LAN userò Ethernet, Fast-E, Gigabit-E, mentre per le Wireless-LAN una Wi-Fi, etc...).
### Comunicazione interna ad una rete
In una rete vi sono due modalità principali di trasmissione di un messaggio:
- punto-punto, dove il messaggio viene inviato da una macchina $A$ ed arriva ad un'altra macchina $B$, senza che nessun'altra macchina lo recepisca, mediante un apposito canale di comunicazione tra le due specifiche parti;
- broadcast, dove un messaggio viene SEMPRE inviato a TUTTA la rete. Qui si pongono i problemi di arbitraggio per l'accesso al canale di comunicazione;
## Reti a commutazione di pacchetto
Una rete a commutazione di pacchetto si tratta di una rete nella quale i dati vengono suddivisi in pacchetti gli uni indipendenti dagli altri. Ognuno di questi pacchetti viene poi inviato su un canale di trasmissione. Un esempio di questa tipologia di rete è l'Internet moderno.

In una rete di broadcast, dove il mittente ed il destinatario non sono ovvi a causa dell'assenza di un canale punto-punto, occorrerà anche includere gli indirizzi dei due.
![[Pasted image 20251016074029.png]]
### Servizi orientati alla connessione e non
In una rete a commutazione di pacchetto, non sempre è garantito l'arrivo ordinato dei pacchetti. Ed è anche vero che non sempre questa è una necessità. Si creano quindi due tipologie di servizio:
- **connection-oriented**, che garantiscono la consegna ordinata e la ri-trasmissione di eventuali pacchetti persi durante la trasmissione;
- **connectionless**, dove i pacchetti possono prendere strade diverse e quindi anche arrivare in modo disordinato, riducendo tuttavia la pressione su quello che sarebbe il "percorso ottimale" delle connection-oriented.
## Protocolli di rete
Un sistema complesso come la comunicazione in una rete richiede un **architettura di protocolli** da seguire per il corretto svolgimento.
> Un protocollo consiste in un set di regole o procedure semantiche (linguaggio) e sintattiche (grammatica), volto a standardizzare qualcosa per evitare incomprensioni.  

L'architettura standard di protocolli di comunicazione è l'**ISO-OSI**, composta da $7$ livelli, ognuno dei quali è specializzato nella gestione di una classe di problemi ipotetici di una rete. I livelli superiori riceveranno, dagli inferiori, una visione semplificata della rete, in modo da potersi specializzare a loro volta senza doversi preoccupare del medesimo problema più volte.

![[Pasted image 20251016075349.png]]
In passato la stratificazione in $7$ livelli aveva senso, ma recentemente i livelli $5$ e $6$ sono andati scemando, in quanto le loro funzioni sono ora spesso incorporate altrove.

Ad esempio, la sessione del livello $5$ viene spesso gestita direttamente nei protocolli moderni come l'HTTPS. Allo stesso modo, il formatting dei dati è ora passato ai linguaggi come JSON/XML.
### Architettura dei protocolli di Internet
L'architettura dei protocolli di Internet usa solo $5$ dei $7$ livelli dell'ISO-OSI, come visto.

Durante la trasmissione, il dato parte dal livello superiore e scende piano piano nella pila dopo essere stata incapsulato in pacchetti con dati aggiuntivi, utili per la corretta decapsulazione del messaggio dal corrispondente livello del ricevente.
In ricezione il dato passa dai livelli inferiori a quelli superiori ed ogni livello si occupa della decapsulazione di un frammento del pacchetto totale.

![[Pasted image 20251016085146.png]]
Nell'immagine, al dato (il segmento blu) vengono aggiunte le informazioni aggiuntive di ogni livello (prima il rosso, poi l'arancione ed infine il giallo). Assieme a tali informazioni aggiuntive viene anche aggiunto un controllo dell'errore, per assicurarsi che ogni informazione ricevuta sia corretta. 

In generale si può dire che:
- il livello presentazione imbusta i dati con informazioni inerenti all'ordine di ricezione ed il controllo della velocità di questa;
- il livello rete frammenta i dati in pacchetti più piccoli e decide il path da seguire per arrivare dal destinatario, sulla base del MAC di questo;
- il livello fisico esegue l'invio.
### La specializzazione dei vari livelli
Ogni livello si specializza quindi in una specifica categoria di problema da risolvere, per permettere a quelli superiori di fare la medesima cosa:
- il livello fisico si occupa di integrare i protocolli per codificare e trasmettere dati come un segnale sul mezzo trasmissivo a disposizione;
- il livello MAC conosce gli indirizzi dei dispositivi e ne gestisce la comunicazione, creando le prime vere e proprie reti locali;
- il livello di rete utilizza i router per collegare tra loro più reti locali, introducendo il concetto di sottorete;
- il livello trasporto aggiunge, alla collezione di reti organizzate gerarchicamente del livello di rete, un set di regole per rendere la connessione connection-oriented;
- il livello applicazione espone la rete creata nei livelli precedenti alle applicazioni dell'utente;
#### Il livello fisico
La trasmissione di un dato richiede la codifica e la decodifica di esso, in modo sequenziale. Questo è il compito della scheda di rete.
A livello teorico, ogni tipo di mezzo trasmissivo trasmette un dato alla stessa velocità, ovvero quella della luce. Ciò che differenzia un canale veloce da uno più lento è difatti la velocità con cui si riesce a codificare e decodificare un dato.
La quantità di bit trasmissibili al secondo su un dato canale si dice **capacità del canale**.
#### Il livello MAC
Il livello MAC aggiunge, alla trasmissione dei pacchetti di dati su un certo mezzo trasmissivo, la capacità di comprendere chi debba accedere al canale trasmissivo oltre che alla capacità di comprendere chi sia il ricevente designato del messaggio, aggiungendo l'indirizzo MAC di quest'ultimo al segmento dati da trasmettere.
Questo livello si occupa inoltre del rendere la trasmissione affidabile, implementando un periodo di tempo massimo all'interno del quale il ricevente deve inviare al mittente un pacchetto di acknowledge. Se questo non avviene, il mittente capisce che il ricevente non ha ricevuto il messaggio e rimanda il messaggio.
##### Tecnologie per schede di rete (livello MAC)
Le tre tecnologie per il livello MAC più popolari sono le seguenti:
- **Ethernet**: la scheda di rete trasmette solamente se nessun altro sta trasmettendo. In caso di collisione interrompe la trasmissione per riprovare più tardi;
- **Wi-Fi**: la scheda di rete trasmette solo se nessuno sta trasmettendo, cercando di prevenire le collisioni dilazionando le trasmissioni nel tempo;
- **Token Ring**: usata per le reti ad anello. Vi è un frame detto **token** che viene passato di macchina in macchina e fornisce al dispositivo possedente di trasmettere sul canale. Al termine di una trasmissione, occorre passare il token. Questo arbitraggio sul trasmittente evita le collisioni.