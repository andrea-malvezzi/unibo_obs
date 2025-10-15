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