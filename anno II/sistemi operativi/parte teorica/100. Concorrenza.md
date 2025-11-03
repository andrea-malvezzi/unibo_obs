In un OS si hanno un elevato numero di **processi** eseguiti pressoché contemporaneamente dal processore. Questa esecuzione contemporanea risulterebbe difficile da mantenere senza un apposito modello, ed è per questo che è nato il **modello concorrente**.
## Definizione di Processo
Un processo è un'attività controllata da un programma eseguita da un processore. Ne consegue che il processo NON sia un programma, ma piuttosto una sua istruzione.
> Potremmo pensare al programma come una ricetta e al processo come uno step di quest'ultima.

Ogni processo viene eseguito sempre ad una velocità finita, mai nulla e sconosciuta.
> Questo è detto **Assioma di Finite Progress**.

Un processo può essere *descritto* dalle seguenti componenti:
- la propria immagine di memoria, ovvero la memoria assegnatagli e le strutture dati del O.S. associate ad esso;
- la propria immagine nel processore, contenuta nei registri generali e speciali;
- il proprio stato di avanzamento, come **running**, **waiting** (di un evento esterno come I/O) e **ready** (il processore è occupato ma il processo è pronto ad essere eseguito).

Più processi possono eseguire lo stesso programma (in un sistema multiutente due utenti possono leggere la posta contemporaneamente), ma in tal caso ogni istanza del programma viene considerata un processo a sé stante.
## Diversi tipi di Parallelismo
Esistono due tipi di parallelismo:
- quello **reale**, dove si hanno più core (più chef in cucina);
- quello **apparente**, dove si hanno meno core di quelli necessari, ma ritagliando un time-slice per ogni processo si riesce ad alternarli abbastanza rapidamente da fornire l'illusione del parallelismo.

> **N.B.** i due concetti **non** sono mutualmente esclusivi.
> Avendo ad esempio 16 core, non si potranno eseguire solo 16 processi per volta, ma in ogni core potrebbe essere implementato il parallelismo apparente.

Due programmi si dicono in esecuzione concorrente se sono eseguiti in parallelo l'uno con l'altro.
> Per concorrenza si intende un insieme di notazioni usate per descrivere l'esecuzione parallela di due o più programmi e le tecniche usate per risolvere eventuali problemi di questa natura.

## Gestire processi multipli
Vi sono 3 tecniche principali per la gestione di processi multipli:
- il **multiprogramming**, ovvero l'esecuzione di più processi sullo stesso processore, alternandoli nel tempo (si parla quindi di parallelismo apparente);
- il **multiprocessing**, ovvero l'esecuzione di processi diversi su processori diversi (quindi parallelismo reale);
- il **distributed processing**, ovvero l'esecuzione di processi diversi su macchine distribuite ed indipendenti tra loro (quindi parallelismo reale, in quanto ad ogni macchina corrisponde un processo).

Nel parallelismo reale si parla di **overlapping**, mentre in quello apparente di **interleaving**. Entrambe le tecniche hanno pressoché le stesse problematiche:
- ogni processo potrebbe dover accedere a delle risorse condivise;
- non si sa in quale momento ogni processo eseguirà una data istruzione, a causa dell'assioma di Finite Progress.

## Ma quindi cos'è la concorrenza?
La concorrenza è l'insieme delle regole e delle tecniche usate per descrivere e regolare l'esecuzione di due o più programmi. Alcuni dei problemi classici in tale ambito corrispondono alla **comunicazione** e alla **sincronizzazione**.

## Race conditions
Un sistema a processi multipli presenta una race condition qualora il risultato finale dipenda dalla temporizzazione con cui vengono eseguiti i processi.

## Interazioni tra processi
I processi sono classificabili in base a quanto sono gli uni coscienti degli altri.
### Processi Indipendenti
I processi ignari degli altri nel loro stesso ambiente sono detti indipendenti. Essi competono con gli altri per le risorse e devono **sincronizzarsi** per l'accesso a queste, tramite strumenti come i **semafori**.
### Processi parzialmente coscienti
I processi che condividono risorse per scambiare informazioni sono parzialmente coscienti degli altri, dato che non si conoscono per **Id** ma solo per risorse condivise (non è un mio amico, è solo un collega!).
Per accedere alle risorse devono cooperare mediante appositi meccanismi di **sincronizzazione**.
### Processi completamente coscienti
I processi completamente coscienti degli altri comunicano direttamente sulla base dei loro Id. La trasmissione di informazioni tra essi deve essere favorita mediante meccanismi di **comunicazione**.
### Ambienti di vita di un processo
Due processi possono trovarsi in un ambiente a:
- memoria **condivisa**, dove si comunica tramite sincronizzazione;
- memoria **privata**, dove l'accesso ai dati viene sincronizzato mediante comunicazione;
> Nota l'inversione di "comunicazione" e "sincronizzazione" nelle due definizioni.

## Proprietà di un processo
Una proprietà di un programma concorrente è un attributo con valore indipendente dall'esecuzione del processo stesso. Esistono proprietà di:
- **liveness** (something good eventually happens) $\rightarrow$ il programma prosegue senza intoppi;
- **safety** (nothing bad happens) $\rightarrow$ il programma prosegue **nella direzione desiderata** senza eseguire azioni incorrette;

Nei programmi sequenziali (senza concorrenza), la principale proprietà di liveness è la terminazione, mentre quella di safety è il raggiungimento di un risultato desiderato.
### Proprietà di un Programma concorrente
In un programma concorrente i processi non devono interferire gli uni con gli altri per accedere ad una risorsa (safety), ed i processi usati per sincronizzare l'accesso a tali risorse non devono prevenire l'avanzamento del programma (liveness).
### Mutua esclusione, Deadlock e Starvation
Un metodo per prevenire interferenze durante l'accesso alle risorse è la **mutua esclusione**, ovvero rendere la risorsa disponibile ad un solo processo per volta.
Tale imposizione potrebbe tuttavia causare un blocco permanente del programma, causando una **Deadlock**.
![[Pasted image 20251009140101.png]]
Qualora invece un processo necessiti di accedere ad una risorsa per proseguire l'esecuzione, ma tale risorsa non gli arrivi mai (magari altri due processi si continuano a rimbalzare tale risorsa) allora si dice che il processo in attesa vada in **starvation**. Questa condizione fortunatamente è facilmente evitabile, implementando un sistema di priorità.

## Atomicità di un'azione
Un azione si dice atomica quando non può essere suddivisa in step più brevi e richiede quindi di essere eseguita interamente prima di terminare. Tale azione in sistemi con parallelismo reale non causa problemi, ma può causare rallentamenti in sistemi a parallelismo apparente, in quanto porterà ad un ritardo del **context switch** (il passaggio ad un altro processo).
> Fun Fact: tutte le singole istruzioni in linguaggio macchina sono atomiche!

> **N.B.** da questo punto in poi, una qualunque notazione $S$ indicata con $\lt S \gt$ indicherà una notazione atomica.

### Non-interferenza
Occorre specificare che alcune istruzioni di codice siano "speciali" e vadano eseguite atomicamente, come ad esempio le sezioni contenenti accesso a risorse condivise. Tali sezioni sono dette **sezioni critiche** e occorre garantirne l'esecuzione atomica evitando eventuali deadlock, starvation e attese innecessarie.
### Come definire una sezione critica?
Una sezione critica si può facilmente definire nel codice tramite appositi costrutti propri del linguaggio, per aiutare l'OS a comprendere come gestire tale sezione di codice.

![[Pasted image 20251009141828.png]]

### Requisiti della CS (Critical Section)
1. mutua esclusione $\rightarrow$ un solo processo per CS per risorsa condivisa;
2. assenza di deadlock;
3. assenza di delay non necessari $\rightarrow$ un processo esterno alla CS non deve ritardare l'ingresso in essa da parte di un altro processo;
4. eventuale accesso garantito $\rightarrow$ assenza di starvation;
### Approcci alla CS
Una CS si può approcciare tramite alcune modalità $\dots$
- **Software**: la responsabilità per l'accesso alle risorse viene lasciato ai singoli processi;
- **Hardware**: si hanno appositi HW che sfruttano istruzioni di linguaggio ideali per casi specifici ma non adatte a soluzioni general-purpose;
- **O.S.**: la responsabilità dell'accesso alle risorse viene lasciato all'O.S. oppure ad un apposito linguaggio, quindi a istruzioni come **semafori**, **monitor** ed il **message passing**.

Una soluzione ottimale sarebbe trovare dei paradigmi facilmente implementabili e adatti alla scrittura di programmi concorrenti.
## Semafori
Un segnale volto a coordinare due o più processi in modo da evitare i $4$ problemi principali della concorrenza tra processi.

Si hanno due operazioni inerenti ai semafori:
- $\text{V}$, invocata per inviare un segnale (un evento);
- $\text{P}$, invocata per attendere un segnale;

le quali devono essere implementate in maniera da essere atomiche.
### Politiche di gestione dei processi
Per ogni semaforo, occorre mantenere una struttura dati contenente l'insieme dei processi in attesa da risvegliare al momento opportuno. La modalità con cui questi vengono risvegliati dipende tuttavia dalla tipologia di semaforo con cui si sta lavorando.

In generale noi useremo i semafori **FIFO** o **fair**, ovvero che applicano la politica del First-In-First-Out e sfruttano quindi le code per accodare i processi da risvegliare.

### Implementazione in O.S. dei semafori
Per implementare un sistema di semafori occorre definire le due primitive $\text{P}$ e $\text{V}$, in una maniera simile alla seguente:
![[Pasted image 20251015222416.png]]

> Nota: nei sistemi uniprocessore risulta possibile disabilitare e riabilitare gli interrupt all'inizio ed alla fine di $\text{P}$ e $\text{V}$, in quanto le due primitive sono implementate direttamente dall'O.S.

> **N.B.** tramite l'implementazione di queste due primitive non abbiamo eliminato busy waiting, ma lo abbiamo ridotto al minimo indispensabile. Un po' di attesa purtroppo è inevitabile!

### Semafori Binari
I semafori binari sono particolari semafori che possono assumere solamente il valore di $0$ ed $1$ e sono potenti esattamente quanto i normali semafori. Difatti, con essi è possibile implementare i semafori generali.

> Espressivamente i semafori binari sono in gradi di fare tutto quello che fanno i semafori generali; tuttavia, questo non significa che rendano il lavoro altrettanto facile.
> Sarebbe un po' come calcolare $2 \cdot 10$, facendo $10$ somme consecutive: è sicuramente possibile, ma conviene di più fare una moltiplicazione, che in fondo altro non è che un insieme di somme. Allo stesso modo, conviene maggiormente usare i semafori generali che ricrearne il comportamento tramite i semafori binari.
## Problemi classici della programmazione concorrente
Esistono $4$ problemi definiti "classici" della programmazione concorrente. Vediamoli.
### Produttore/Consumatore
Esiste un processo $\text{P}$, chiamato **produttore**, che genera valori e vuole trasferirli ad un processo $\text{C}$, detto **consumatore**, il quale vuole "consumarli". La comunicazione deve avvenire puramente mediante un'unica variabile condivisa.

Il problema in questo caso consiste nell'accedere all'area di memoria condivisa, in quanto prima di far accedere l'uno a quest'ultima, l'altro dovrà aver finito di lavorarci.
Inoltre, $\text{C}$ non dovrà consumare due volte lo stesso valore.

Il problema si risolve molto semplicemente definendo $3$ semafori:
- $\text{full}$, inizialmente con valore pari a $0$, indica che non ci sono slot occupati all'interno del buffer;
- $\text{empty}$, inizialmente con valore pari ad $n = \text{size}$ del buffer, indica che vi sono $n$ slot liberi all'interno del buffer;
- $\text{mutex}$, inizialmente con valore pari ad $1$, indica che si sta scrivendo sul buffer (vogliamo cominciare scrivendoci su, non leggendo qualcosa di $\text{null}$).

Oltre che ad una coda $\text{q}$ che fungerà da buffer con memoria dinamica, per evitare sprechi.
Si avrà quindi un codice simile al seguente:
```pseudocodice
Queue q = new Queue(SIZE) // coda con grandezza size
Semaphore full  = new Semaphore(0)
Semaphore empty = new Semaphore(SIZE)
Semaphore mutex = new Semaphore(1)

process Producer {
	while(true) {
		Object val = produce() // crea un dato da scrivere
		empty.P() // decremento gli slot vuoti
		mutex.P() // indica che la risorsa è da occupata
		q.enqueue(val)
		mutex.V() // indica che la risorsa non è più occupata
		full.V()  // aumento gli slot pieni
	}
}

process Consumer {
	while(true) {
		full.P()  // decrementa gli slot pieni
		mutex.P() // accede alla risorsa
		Object val = q.dequeue()
		mutex.V() // libera la risorsa
		empty.V() // aumenta gli slot vuoti
		consume(val) // consuma il dato ottenuto
	}
}
```

Questa implementazione risulta particolarmente efficace in quanto permette di implementare $n$ produttori e/o consumatori, serializzando l'accesso alla risorsa mediante il mutex, senza quindi bisogno di alcuna modifica.
### Filosofi a cena
Cinque filosofi possono o mangiare o pensare (alternando le due). Per mangiare fanno uso di una tavola rotonda con $5$ sedie, piatti e posate disposte tra i piatti. Per mangiare ogni filosofo ha bisogno di due posate, mentre per pensare ha bisogno di avere entrambe le mani libere.

Per risolvere il problema dell'accesso a multiple risorse contemporaneamente, si può dividere la vita di ogni filosofo in $4$ fasi:
- pensa
- prende le posate
- mangia
- lascia le posate

Le posate, quindi, potrebbero essere implementate come un array di booleani $\text{posate}[i], \ i = 0,\dots, 4$, dove l'$i$-esimo filosofo accede contemporaneamente a $\text{posate}[i]$ e $\text{posate}[(i+1) \% 5]$.

Tuttavia, così facendo, si incapperebbe in un nuovo problema: ogni filosofo accede prima alla posata di sinistra, poi a quella di destra. Così facendo si creerebbe una situazione dove ogni filosofo potrebbe prendere la posata sinistra ed attendere all'infinito che quella destra venga liberata.
Per ovviare a tale problema, basta "rendere mancini" i filosofi ad indice pari/dispari e "destrorsi" gli altri. Questo gli permetterebbe di prendere per primo la bacchetta opposta rispetto agli ai suoi compagni, facendo sì che non vi sia deadlock.

Si avrà quindi un codice simile al seguente:
```pseudocodice
Semaphore posata = {new Semaphore(1), ..., new Semaphore(1)}
process Filosofo[i] { // 1, ..., 3 oppure i pari o i dispari
	while(true) {
		pensa
		posata[i].P()
		posata[i + 1].P()
		mangia
		posata[i].V()
		posata[i + 1].V()
	}
}

process Filosofo[4] {
	while(true) {
		pensa
		// invece di i => i + 1, faccio i + 1 => i
		posata[0].V()
		posata[4].V()
		mangia
		posata[0].P()
		posata[4].P()
	}
}
```
### Lettori e scrittori
In un Database vi sono $2$ tipi di processi:
- gli **scrittori**, che accedono alle risorse per aggiornarne il contenuto;
- i **lettori**, che accedono alle risorse per leggerne il contenuto;

La peculiarità del caso consiste nel fatto che ad una risorsa può accedere un solo scrittore per volte (in mutua esclusione), mentre se una risorsa non sta venendo modificata da uno scrittore, può essere visualizzata contemporaneamente da $n$ lettori. 

> Questo problema mostra che mutua esclusione e condivisione possano coesistere in un sistema, se ben implementati.

%% prosegui da qui (slide 133-136)