1. [Pile](#Pile)
2. [Code](#Code)
3. [Alberi](#Alberi)
	1. [Definizione di Albero](#Definizione%20di%20Albero)
	2. [Definizioni utili](#Definizioni%20utili)
		1. [Profondità di un nodo](#Profondit%C3%A0%20di%20un%20nodo)
		2. [Livello](#Livello)
		3. [Altezza di un albero](#Altezza%20di%20un%20albero)
		4. [Grado di un nodo](#Grado%20di%20un%20nodo)
	3. [Alberi Ordinati](#Alberi%20Ordinati)
	4. [Alberi Binari](#Alberi%20Binari)
		5. [Definizioni utili](#Definizioni%20utili)
			1. [Completezza di un albero binario](#Completezza%20di%20un%20albero%20binario)
			2. [Perfezione di un albero binario](#Perfezione%20di%20un%20albero%20binario)
		6. [Alberi binari "quasi" perfetti](#Alberi%20binari%20%22quasi%22%20perfetti)
		7. [Algoritmi per gli alberi binari e non](#Algoritmi%20per%20gli%20alberi%20binari%20e%20non)
	5. [Alberi Binari di ricerca](#Alberi%20Binari%20di%20ricerca)
		8. [Minimi e massimi assoluti](#Minimi%20e%20massimi%20assoluti)
		9. [Definizione di predecessore di un nodo](#Definizione%20di%20predecessore%20di%20un%20nodo)
		10. [Rimozione di un nodo in un BST](#Rimozione%20di%20un%20nodo%20in%20un%20BST)
	6. [Alberi AVL](#Alberi%20AVL)
4. [Tabelle Hash](#Tabelle%20Hash)
5. [Heap (code con priorità)](#Heap%20(code%20con%20priorit%C3%A0))
	7. [Alberi binari heap](#Alberi%20binari%20heap)
		11. [Rappresentazione di albero heap tramite array heap](#Rappresentazione%20di%20albero%20heap%20tramite%20array%20heap)
	8. [Operazioni su Array Heap](#Operazioni%20su%20Array%20Heap)
		12. [Trovare il valore massimo (FindMax)](#Trovare%20il%20valore%20massimo%20(FindMax))
		13. [Ripristinare la proprietà di Max-heap (FixHeap)](#Ripristinare%20la%20propriet%C3%A0%20di%20Max-heap%20(FixHeap))
		14. [Cancellare il valore massimo (DeleteMax)](#Cancellare%20il%20valore%20massimo%20(DeleteMax))
		15. [Costruire un array heap a partire da un array privo di alcun ordine (Heapify)](#Costruire%20un%20array%20heap%20a%20partire%20da%20un%20array%20privo%20di%20alcun%20ordine%20(Heapify))
	9. [Costi computazionali delle operazioni proposte](#Costi%20computazionali%20delle%20operazioni%20proposte)
		16. [FindMax](#FindMax)
		17. [FixHeap](#FixHeap)
		18. [DeleteMax](#DeleteMax)
		19. [Heapify](#Heapify)
	10. [Heapsort](#Heapsort)
		20. [Costo computazionale dell'Heapsort](#Costo%20computazionale%20dell'Heapsort)
	11. [Algoritmi per l'Heap](#Algoritmi%20per%20l'Heap)
## Liste
## Pile
Struttura dati **LIFO**, support push e pop. Entrambe le operazioni hanno costo costante in quanto si accede direttamente all'elemento interessato (senza servirsi di loop o simili).
## Code
Struttura dati **FIFO**, supporta enqueue e dequeue. Anche in questo caso le operazioni presentate hanno costo costante, servendosi di un puntatore alla coda per un inserimento rapido.
## Alberi
Un **albero** è una **struttura dati non lineare**, il che significa che i suoi elementi non sono collegati tra loro secondo uno schema sequenziale, come avviene negli array o nelle liste.
### Definizione di Albero
Un albero è composto da **nodi** (o **vertici**) collegati tra loro mediante **archi**. Il nodo situato al livello più alto si chiama **radice**, mentre quelli situati ai livelli più bassi si chiamano **foglie**. Ogni coppia di nodi è connessa da un unico percorso.
Un albero può essere suddiviso in **sotto-alberi**, le cui radici sono collegate alla radice principale tramite un unico percorso.
### Definizioni utili
#### Profondità di un nodo
La profondità di un nodo $u$ è la lunghezza del percorso che va dalla radice al nodo $u$ (calcolata in numero di nodi percorsi).
#### Livello
Per livello si intende l'insieme di tutti i nodi ad una certa profondità. Ad esempio, il secondo livello del seguente albero:
![[Pasted image 20250313120943.png]]
corrisponde al seguente insieme:
![[Pasted image 20250313120924.png]]
#### Altezza di un albero
L'altezza di un albero corrisponde alla sua massima profondità. Nel caso in cui un albero sia vuoto, per convenzione si dice che ha altezza pari a $-1$.
#### Grado di un nodo
Il grado di un nodo è il numero dei suoi figli. Ad esempio, la radice di questo albero:![[Pasted image 20250313120943.png]]
ha grado pari a $10$.
### Alberi Ordinati
Un albero si dice **ordinato** se i suoi nodi figli seguono un determinato criterio di ordinamento. Questo concetto è particolarmente rilevante negli [[Strutture dati#Alberi Binari|alberi binari]], che vedremo in dettaglio nella sezione successiva.
### Alberi Binari
Un albero binario è un particolare tipo di albero in cui ogni nodo possiede $\underline{\text{al massimo}}$ due figli, uno di sinistra ed uno di destra.
#### Definizioni utili
##### Completezza di un albero binario
Un albero binario si dice completo se ogni suo nodo intermedio possiede *esattamente* due figli.
##### Perfezione di un albero binario
Un albero binario si dice perfetto se è completo e se tutte le sue foglie sono alla stessa profondità.
Un albero perfetto ha altezza $h = \log{n}$, dove $n$ corrisponde al numeri di nodi contenuti nell'albero.
Ad esempio:
![[Pasted image 20250313123004.png]]
#### Alberi binari "quasi" perfetti
Un albero binario quasi perfetto è perfetto fino al livello $h - 1$. Al livello $h$ invece i nodi sono compattati verso sinistra. Ad esempio:
![[Pasted image 20250331093632.png]]
Dove come si può vedere il livello $h$ (l'ultimo) è imperfetto e rivolto verso sinistra (gli unici "buchi" sono sulla destra).
#### Algoritmi per gli alberi binari e non
Per l'elenco completo di algoritmi per operare sugli alberi binari e non, clicca [[Algoritmi per le strutture dati#Algoritmi per gli alberi|qui]]!
### Alberi Binari di ricerca
Gli alberi binari di ricerca contengono un valore minore di quello nel nodo corrente nel figlio sinistro e un valore maggiore in quello destro. Questo li rende ideali per usare la ricerca binaria.
Il caso peggiore di ogni operazione apllicabile su questi avrà caso peggiore $\Theta(n)$, dove $n$ corrisponderà all'altezza dell'albero, e caso migliore $O(1)$.
#### Minimi e massimi assoluti
Seguendo la definizione di **BST**, si possono trovare il minimo ed il massimo assoluti di un albero seguendo i rami più a sinistra o a destra rispettivamente.![[Pasted image 20250328145607.png]]
#### Definizione di predecessore di un nodo
Si dice predecessore di un nodo $v$ un altro nodo $u$ con valore massimo minore di quello dato: ovvero il nodo che verrebbe visitato immediatamente prima di quello dato in una visita Inorder.
Si hanno due casi:
- il nodo $v$ ha un sottoalbero sinistro. Il predecessore è quindi il nodo contenente il valore maggiore nel sottoalbero sinistro di $v$:![[Pasted image 20250328151743.png]]
- il nodo $v$ non ha un sottoalbero sinistro. In questo caso il predecessore $u$ è quindi il primo nodo per cui $v$ sia contenuto nel proprio sottoalbero destro:![[Pasted image 20250328152153.png]]
#### Rimozione di un nodo in un BST
In un BST rimuovere un nodo potrebbe risultare in un alterazione della struttura dell'intero albero, a causa della proprietà di questi di essere ordinati secondo un particolare criterio.
 - Il nodo $v$ da rimuovere è una foglia (non ha figli). In questo caso rimuoviamo $v$ senza complicazioni.
 - Il nodo $v$ da rimuovere ha un solo figlio $u$. Ora $u$ prenderà il posto di $v$ come figlio del genitore $g$ di $v$: ciò significa che sarà figlio destro di $g$ se $u$ era figlio destro, e sinistro se $u$ era figlio sinistro.
 - Il nodo $v$ da rimuovere ha due figli. In questo caso cerchiamo il predecessore $u$ di $v$, scambiamo i valori di $u$ e di $v$ e rimuoviamo quello che era originariamente $u$. Così facendo il nodo $u$ originale avrà sempre al massimo un figlio e sarà quindi più semplice da rimuovere (vedi caso precedente).
### Alberi AVL
## Tabelle Hash
## Heap
Struttura dati in cui risulta efficiente effettuare operazioni di inserimento e di ricerca di valori massimi o minimi.
### Alberi binari heap
Un albero binario quasi perfetto può essere un albero **max-heap** oppure **min-heap**. Associando ad ogni nodo $i$ un valore $A[i]$ possiamo dire che:
- quando $A[parent(i)] \geq A[i]$ allora si ha un albero max-heap;
- quando $A[parent(i)] \leq A[i]$ allora si ha un albero min-heap.
Entrambe le strutture dati condividono le stesse definizioni e gli stessi algoritmi, con le dovute modifiche.
#### Rappresentazione di albero heap tramite array heap
Un albero max/min-heap si può rappresentare tramite array. Considerando un array $A$ e chiamando $i$ l'indice di un certo elemento dell'albero, allora:
- in $A[0]$ si avrà la radice dell'albero;
- gli elementi dell'albero compariranno nell'array nell'ordine in cui comparirebbero durante una visita all'albero;
- il figlio sinistro di $i$ si trova all'indice $2 \cdot i$;
- il figlio destro di $i$ si trova all'indice $2 \cdot i + 1$ (il vicino del figlio sinistro);
- il genitore di $i$ si trova (invertendo la formula per il figlio sinistro) all'indice Math.Floor$(i / 2)$.
Ad esempio:
![[Pasted image 20250331095322.png]]
### Operazioni su Array Heap
#### Trovare il valore massimo (FindMax)
Il valore massimo di un albero è la sua radice, ovvero il primo elemento dell'array. Ritorniamo $A[0]$.
L'operazione ha costo costante in quanto stiamo accedendo ad un valore dell'array tramite indice.
#### Ripristinare la proprietà di Max-heap (FixHeap)
Supponiamo di voler rimpiazzare la radice $A[1]$ di un max-heap con un valore qualsiasi $x$.![[Pasted image 20250331100300.png]]
Allora potrei continuare a scambiare $x$ con il figlio con valore maggiore e ripetere ricorsivamente. Questa operazione ha costo computazione pari all'altezza dell'albero, che dalla definizione data nella sezione sulla [[Strutture dati#Perfezione di un albero binario|perfezione di un albero binario]] sappiamo essere equivalente a $\log{n}$.
#### Cancellare il valore massimo (DeleteMax)
Servendosi della funzione [[Strutture dati#Ripristinare la proprietà di Max-heap|FixHeap]], eliminare il valore massimo dell'array heap significa cancellare la radice dell'albero (nonché il primo elemento dell'array).
Per farlo, prendiamo l'ultimo elemento dell'array e sovrascriviamo il valore della radice con quello di quest'ultimo. Ora applichiamo FixHeap per riordinare l'array.
#### Costruire un array heap a partire da un array privo di alcun ordine (Heapify)
Per rendere un array generico un array heap, occorrerà anzitutto conoscere la posizione della radice che si vuole adottare e quella dell'ultimo elemento dell'heap. In seguito occorrerà costruire ricorsivamente i sotto-heap destri e sinistri della radice e chiamare [[Strutture dati#Ripristinare la proprietà di Max-heap|FixHeap]] per riordinare l'heap creato.
### Costi computazionali delle operazioni proposte
#### FindMax
[[Strutture dati#Trovare il valore massimo|FindMax]] avrà costo computazionale $O(1)$, in quanto impiega solamente un accesso per indice ad un elemento di un array.
#### FixHeap
[[Strutture dati#Ripristinare la proprietà di Max-heap|FixHeap]] avrà costo computazionale $O(\log{n})$ in quanto richiamerà sé stessa un numero di volte massimo pari all'altezza dell'albero su cui si sta lavorando, che dalla definizione data nella sezione inerente alla [[Strutture dati#Perfezione di un albero binario|perfezione di un albero binario]] sappiamo essere equivalente a $\log{n}$.
#### DeleteMax
[[Strutture dati#Eliminare l'elemento con valore massimo nell'array|DeleteMax]] avrà costo computazionale uguale a quello di [[Strutture dati#Ripristinare la proprietà di Max-heap|FixHeap]], ovvero $O(\log{n})$.
#### Heapify
Per calcolare il costo computazionale di [[Strutture dati#Costruire un array heap a partire da un array privo di alcun ordine|Heapify]] occorrerà utilizzare il [[Introduzione, complessità computazionali e analisi degli algoritmi#Master Theorem|Master Theorem]] in quanto si tratta di una funzione ricorsiva.
Considerando che la funzione richiamerà sé stessa due volte (una per il figlio sinistro ed una per il figlio destro) si avrà una costante moltiplicativa del costo delle due chiamate pari a 2. Il costo per chiamata sarà pari a $\frac{n}{2}$, in quanto ad ogni chiamata si divide l'albero attuale in due metà, dimezzando effettivamente il numero di elementi considerati. Infine occorrerà considerare anche il costo di [[Strutture dati#Ripristinare la proprietà di Max-heap (FixHeaè)|FixHeap]], pari a $O(\log{n})$.
Quindi si avrà $T(n) = 2 \cdot T(\frac{n}{2}) + \log{n}$, che dal primo caso del Master Theorem risulta $T(n) = O(n)$.
### Heapsort
L'Heapsort si basa sull'idea di creare un max-heap a partire da un array $A$ mediante [[Strutture dati#Costruire un array heap a partire da un array privo di alcun ordine (Heapify)|Heapify]] ed in seguito continuare ad estrarne il massimo mediante [[Strutture dati#Trovare il valore massimo (FindMax)]|FindMax]] e [[Strutture dati#Cancellare il valore massimo (DeleteMax)|DeleteMax]] per poi inserire il massimo nell'ultima posizione di $A$, finché l'heap-max creato non risulta vuoto.
#### Costo computazionale dell'Heapsort
Il costo computazionale di questa operazione risulta essere il costo di [[Strutture dati#Costruire un array heap a partire da un array privo di alcun ordine (Heapify)|Heapify]] sommato a quello di un loop sugli $n$ elementi dell'array-heap ottenuto, considerando che il costo per iterazione non sarà costante ma pari a quello di [[Strutture dati#Trovare il valore massimo (FindMax)]|FindMax]] e di [[Strutture dati#Cancellare il valore massimo (DeleteMax)|DeleteMax]] (quindi $\log{n}$), ovvero $T(n) = O(n) + O(\sum^1_{c = n}\log{c}) = O(n \cdot \log{n})$.
### Algoritmi per l'Heap
Per le implementazioni delle funzioni dell'Heap clicca [[Algoritmi per le strutture dati#Algoritmi per l'Heap|qui]].
## Priority Queue
Struttura dati che ritorna il valore minimo di un insieme dinamico di coppie chiave-valore.
### Operazioni su Priority Queue
#### findMin() $\rightarrow$ elem
Restituisce un elemento associato alla chiave minima.
#### insert(elem $e$, chiave $k$)
Inserisce un nuovo elemento $e$ con associata la chiave $k$.
#### delete(elem $e$)
Rimuove un elemento dalla coda (assumendo di avere accesso diretto a tale elemento $e$).
#### deleteMin()
Rimuove un elemento associato alla chiave minima.
#### increaseKey(elem $e$, chiave $k$)
Rimpiazza la chiave dell'elemento $e$ con la nuova chiave $k$, se ce n'è una **maggiore**.
#### decreaseKey(elem $e$, chiave $k$)
Rimpiazza la chiave dell'elemento $e$ con la nuova chiave $k$, se ce n'è una **minore**.
### d-Heap
I d-Heap sono un estensione dei max/min-heap: mentre questi erano rappresentazioni binarie, i d-Heap possono avere un grado $n$-esimo.
Un d-Heap ha altezza $h = \log_d{n}$, dove $d$ è il numero massimo dei figli che un nodo può avere, mentre $n$ è il numero di elementi dell'albero.
La radice di un d-Heap contiene un elemento con chiave minima.
#### Rappresentazione di un d-Heap in un array
Come accadeva con i max/min-heap, anche i d-Heap si possono rappresentare con un array. Avendo un indice $i$ a cui è associato un certo nodo del d-Heap:
- l'ultimo figlio del nodo in posizione $i$ si trova in $(i \cdot d) + 1$;
- il primo figlio del nodo in posizione $i$ si trova in $((i - 1) \cdot d) + 2$, ovvero $(d - 1)$ posizioni prima dell'ultimo figlio;
- il padre del nodo in posizione $i$ si trova in $[(i - 1) / d]$ (le parentesi indicano un arrotondamento).