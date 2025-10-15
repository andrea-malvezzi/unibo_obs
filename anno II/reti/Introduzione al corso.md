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


%% TODO: continua da slide a slide
##