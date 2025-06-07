1. [Liste concatenate](#Liste%20concatenate)
	1. [Semplici](#Semplici)
		1. [Operazioni sulle Singly-linked-lists](#Operazioni%20sulle%20Singly-linked-lists)
			1. [Search per le Liste concatenate semplici](#Search%20per%20le%20Liste%20concatenate%20semplici)
			2. [Insert (inserimento in testa) per le Liste concatenate semplici](#Insert%20(inserimento%20in%20testa)%20per%20le%20Liste%20concatenate%20semplici)
			3. [Append (inserimento in coda) per le Liste concatenate semplici](#Append%20(inserimento%20in%20coda)%20per%20le%20Liste%20concatenate%20semplici)
			4. [Delete per le Liste concatenate semplici](#Delete%20per%20le%20Liste%20concatenate%20semplici)
	2. [Doppiamente concatenate](#Doppiamente%20concatenate)
2. [Pile](#Pile)
3. [Code](#Code)
4. [Alberi](#Alberi)
	3. [Definizione di Albero](#Definizione%20di%20Albero)
	4. [Definizioni utili](#Definizioni%20utili)
		1. [Profondità di un nodo](#Profondit%C3%A0%20di%20un%20nodo)
		2. [Livello](#Livello)
		3. [Altezza di un albero](#Altezza%20di%20un%20albero)
		4. [Grado di un nodo](#Grado%20di%20un%20nodo)
	5. [Alberi Ordinati](#Alberi%20Ordinati)
	6. [Alberi Binari](#Alberi%20Binari)
		6. [Definizioni utili](#Definizioni%20utili)
			5. [Completezza di un albero binario](#Completezza%20di%20un%20albero%20binario)
			6. [Perfezione di un albero binario](#Perfezione%20di%20un%20albero%20binario)
		7. [Alberi binari "quasi" perfetti](#Alberi%20binari%20%22quasi%22%20perfetti)
		8. [Algoritmi per gli alberi binari e non](#Algoritmi%20per%20gli%20alberi%20binari%20e%20non)
	7. [Alberi Binari di ricerca](#Alberi%20Binari%20di%20ricerca)
		9. [Minimi e massimi assoluti](#Minimi%20e%20massimi%20assoluti)
		10. [Definizione di predecessore di un nodo](#Definizione%20di%20predecessore%20di%20un%20nodo)
		11. [Rimozione di un nodo in un BST](#Rimozione%20di%20un%20nodo%20in%20un%20BST)
	8. [Alberi AVL](#Alberi%20AVL)
		12. [Definizioni Utili per gli alberi AVL](#Definizioni%20Utili%20per%20gli%20alberi%20AVL)
			7. [Fattore di bilanciamento](#Fattore%20di%20bilanciamento)
			8. [Bilanciamento in altezza](#Bilanciamento%20in%20altezza)
		13. [Mantenere il bilanciamento](#Mantenere%20il%20bilanciamento)
6. [Tabelle Hash](#Tabelle%20Hash)
7. [Heap](#Heap)
	9. [Alberi binari heap](#Alberi%20binari%20heap)
		14. [Rappresentazione di albero heap tramite array heap](#Rappresentazione%20di%20albero%20heap%20tramite%20array%20heap)
	10. [Operazioni su Array Heap](#Operazioni%20su%20Array%20Heap)
		15. [Trovare il valore massimo (FindMax)](#Trovare%20il%20valore%20massimo%20(FindMax))
		16. [Ripristinare la proprietà di Max-heap (FixHeap)](#Ripristinare%20la%20propriet%C3%A0%20di%20Max-heap%20(FixHeap))
		17. [Cancellare il valore massimo (DeleteMax)](#Cancellare%20il%20valore%20massimo%20(DeleteMax))
		18. [Costruire un array heap a partire da un array privo di alcun ordine (Heapify)](#Costruire%20un%20array%20heap%20a%20partire%20da%20un%20array%20privo%20di%20alcun%20ordine%20(Heapify))
	11. [Costi computazionali delle operazioni proposte](#Costi%20computazionali%20delle%20operazioni%20proposte)
		19. [FindMax](#FindMax)
		20. [FixHeap](#FixHeap)
		21. [DeleteMax](#DeleteMax)
		22. [Heapify](#Heapify)
	12. [Heapsort](#Heapsort)
		23. [Costo computazionale dell'Heapsort](#Costo%20computazionale%20dell'Heapsort)
	13. [Algoritmi per l'Heap](#Algoritmi%20per%20l'Heap)
8. [Priority Queue](#Priority%20Queue)
	14. [Operazioni su Priority Queue](#Operazioni%20su%20Priority%20Queue)
		24. [findMin() $\rightarrow$ elem](#findMin()%20$%5Crightarrow$%20elem)
		25. [insert(elem $e$, chiave $k$)](#insert(elem%20$e$,%20chiave%20$k$))
		26. [delete(elem $e$)](#delete(elem%20$e$))
		27. [deleteMin()](#deleteMin())
		28. [increaseKey(elem $e$, chiave $k$)](#increaseKey(elem%20$e$,%20chiave%20$k$))
		29. [decreaseKey(elem $e$, chiave $k$)](#decreaseKey(elem%20$e$,%20chiave%20$k$))
	15. [d-Heap](#d-Heap)
		30. [Rappresentazione di un d-Heap in un array](#Rappresentazione%20di%20un%20d-Heap%20in%20un%20array)
9. [Strutture Union-find](#Strutture%20Union-find)
	16. [Definizione](#Definizione)
	17. [Come rappresentare gli insiemi](#Come%20rappresentare%20gli%20insiemi)
	18. [Operazioni su strutture Union-find](#Operazioni%20su%20strutture%20Union-find)
		31. [makeSet](#makeSet)
		32. [find](#find)
		33. [union](#union)
	19. [Esempio di applicazione della struttura Union-find](#Esempio%20di%20applicazione%20della%20struttura%20Union-find)
	20. [Implementazioni con Union-find](#Implementazioni%20con%20Union-find)
		34. [Algoritmo QuickFind](#Algoritmo%20QuickFind)
			9. [L'operazione Find con il QuickFind](#L'operazione%20Find%20con%20il%20QuickFind)
			10. [L'operazione Union con il QuickFind](#L'operazione%20Union%20con%20il%20QuickFind)
		35. [Algoritmo QuickUnion](#Algoritmo%20QuickUnion)
			11. [L'operazione Find con il QuickUnion](#L'operazione%20Find%20con%20il%20QuickUnion)
			12. [L'operazione Union con il QuickUnion](#L'operazione%20Union%20con%20il%20QuickUnion)
		36. [QuickFind con Euristica sul peso](#QuickFind%20con%20Euristica%20sul%20peso)
		37. [QuickUnion con Euristica sul peso](#QuickUnion%20con%20Euristica%20sul%20peso)
10. [[Strutture dati (brutta)#Grafi|Grafi]]
	1. [[Strutture dati (brutta)#Definizioni importanti dei Grafi|Definizioni importanti dei Grafi]]
	2. [[Strutture dati (brutta)#Operazioni sui grafi|Operazioni sui grafi]]
	3. [[Strutture dati (brutta)#Adiacenza e grafi non orientati - Matrice di Adiacenza|Adiacenza e grafi non orientati - Matrice di Adiacenza]]
		1. [[Strutture dati (brutta)#Operazioni sulle matrici di adiacenza - Grafi non orientati|Operazioni sulle matrici di adiacenza - Grafi non orientati]]
			1. [[Strutture dati (brutta)#Operazioni sulle matrici di adiacenza - Grafi non orientati#Come mai questi costi?|Come mai questi costi?]]
	4. [[Strutture dati (brutta)#Adiacenza e grafi non orientati - Lista di Adiacenza|Adiacenza e grafi non orientati - Lista di Adiacenza]]
		1. [[Strutture dati (brutta)#Operazioni sulle liste di adiacenza - Grafi non orientati|Operazioni sulle liste di adiacenza - Grafi non orientati]]
			1. [[Strutture dati (brutta)#Operazioni sulle liste di adiacenza - Grafi non orientati#Come mai questi costi?|Come mai questi costi?]]
	5. [[Strutture dati (brutta)#Adiacenza nei grafi orientati|Adiacenza nei grafi orientati]]
	6. [[Strutture dati (brutta)#Grafi Pesati|Grafi Pesati]]
	7. [[Strutture dati (brutta)#I Cammini|I Cammini]]
		1. [[Strutture dati (brutta)#Grafi connessi|Grafi connessi]]
		2. [[Strutture dati (brutta)#Grafi fortemente connessi|Grafi fortemente connessi]]
		3. [[Strutture dati (brutta)#Grafi debolmente connessi|Grafi debolmente connessi]]
	8. [[Strutture dati (brutta)#Cicli|Cicli]]
	9. [[Strutture dati (brutta)#Grafi non orientati completi|Grafi non orientati completi]]
	10. [[Strutture dati (brutta)#Curiosità sul rapporto tra Grafi ed Alberi|Curiosità sul rapporto tra Grafi ed Alberi]]
## Liste concatenate
Una lista è una struttura dati dove gli elementi sono sequenziali tra loro (l'ordinamento è deciso da una catena di puntatori). Lo spazio per i vari elementi è allocato e deallocato dinamicamente. Il costo di accesso dipende dalla posizione nella lista dell'elemento ricercato.
### Semplici
Ogni nodo $x$ contiene:
- *data*, ovvero il dato da memorizzare nel nodo;
- *next*, ovvero un puntatore al nodo successivo nella lista.
In questo caso la lista può essere visitata solamente dalla testa verso la coda.
#### Operazioni sulle Singly-linked-lists
##### Search per le Liste concatenate semplici
La ricerca di un elemento in una lista concatenata semplice ha complessità:
- $O(1)$ nel caso migliore (l'elemento cercato è la head della lista);
- $O(n)$ nel caso medio e nel caso peggiore.
##### Insert (inserimento in testa) per le Liste concatenate semplici
Inserire un elemento in testa ad una lista richiede il cambio di pochi puntatori ed ha quindi costo costante $O(1)$.
##### Append (inserimento in coda) per le Liste concatenate semplici
Per inserire un elemento in coda ad una lista occorre visitare tutta la lista: la complessità sarà quindi pari a $O(n)$.
##### Delete per le Liste concatenate semplici
Per eliminare un elemento da una lista occorre visitare tutta la lista per trovare l'elemento, quindi avrà complessità computazionale pari a:
- $O(1)$ per il caso migliore (l'elemento da eliminare è la head);
- $O(n)$ per il caso medio ed il caso pessimo.
### Doppiamente concatenate
In una doubly-linked-list si avrà non solo un puntatore alla testa della lista, ma anche alla coda: questo velocizzerà operazioni come l'append. Un nodo della lista, oltre alle proprietà delle liste concatenate semplici, un campo *prev* contenente un puntatore al nodo precedente.
Tutte le operazioni avranno costo pari a quelle delle liste concatenate semplici: il benefit del puntatore al nodo precedente si nota nel *delete*, dove non occorre più mantenere un puntatore al precedente da modificare.
### Concatenate circolari
Sono doubly-linked-lists con un puntatore che va dall'ultimo elemento al primo e viceversa. L'accesso alla testa e alla coda risulta quindi più rapido, ma risulta più difficile iterare sulla lista in quanto non si ha un puntatore *NULL*.
### Con puntatori alla testa e alla coda
Anche queste sono doubly-linked-lists, ma con un puntatore alla testa ed uno alla coda (separati dai singoli nodi). Questo permette di avere un metodo semplice per visitare la lista e per arrivare direttamente alla coda.
Questo significa che l'*append* risulterà più rapido qui rispetto che in una lista normale.
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
Un albero si dice **ordinato** se i suoi nodi figli seguono un determinato criterio di ordinamento. Questo concetto è particolarmente rilevante negli [[Strutture dati (brutta)#Alberi Binari|alberi binari]], che vedremo in dettaglio nella sezione successiva.
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
Un albero AVL è un albero binario bilanciato in altezza e supporta le operazioni di **search**, **insert** e **delete** con costo $O(\log{n})$, dove $n$ è il numero di nodi.
Inoltre l'inserimento e la rimozione sono **auto-bilancianti**.
#### Definizioni Utili per gli alberi AVL
##### Fattore di bilanciamento
Il fattore di bilanciamento $\beta(v)$ di un nodo $v$ è dato dalla differenza tra l'altezza del sottoalbero sinistro e quello destro di $v$:$$\beta(v) = h(v.{\text{left}}) - h(v.{\text{right}})$$
##### Bilanciamento in altezza
Un albero si dice bilanciato in altezza se per ogni nodo $v$ le altezze dei suoi sottoalberi sinistro e destro differiscono al più di uno:$$
|\beta(v)| \leq 1$$
#### Mantenere il bilanciamento
La ricerca su un AVL viene effettuata come su un [[Strutture dati (brutta)#Alberi Binari di ricerca|BST]], mentre gli inserimenti e le rimozioni devono essere modificati per mantenere il bilanciamento dell'albero. Per farlo, ogni nodo $u$ dovrà contenere informazioni sull'altezza del proprio sottoalbero, in modo da poter calcolare il fattore di bilanciamento tra sottoalberi.

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
Allora potrei continuare a scambiare $x$ con il figlio con valore maggiore e ripetere ricorsivamente. Questa operazione ha costo computazionale pari all'altezza dell'albero, che dalla definizione data nella sezione sulla [[Strutture dati (brutta)#Perfezione di un albero binario|perfezione di un albero binario]] sappiamo essere equivalente a $\log{n}$.
#### Cancellare il valore massimo (DeleteMax)
Servendosi della funzione [[Strutture dati (brutta)#Ripristinare la proprietà di Max-heap|FixHeap]], eliminare il valore massimo dell'array heap significa cancellare la radice dell'albero (nonché il primo elemento dell'array).
Per farlo, prendiamo l'ultimo elemento dell'array e sovrascriviamo il valore della radice con quello di quest'ultimo. Ora applichiamo FixHeap per riordinare l'array.
#### Costruire un array heap a partire da un array privo di alcun ordine (Heapify)
Per rendere un array generico un array heap, occorrerà anzitutto conoscere la posizione della radice che si vuole adottare e quella dell'ultimo elemento dell'heap. In seguito occorrerà costruire ricorsivamente i sotto-heap destri e sinistri della radice e chiamare [[Strutture dati (brutta)#Ripristinare la proprietà di Max-heap (FixHeap)|FixHeap]] per riordinare l'heap creato.
### Costi computazionali delle operazioni proposte
#### FindMax
[[Strutture dati (brutta)#Trovare il valore massimo|FindMax]] avrà costo computazionale $O(1)$, in quanto impiega solamente un accesso per indice ad un elemento di un array.
#### FixHeap
[[Strutture dati (brutta)#Ripristinare la proprietà di Max-heap|FixHeap]] avrà costo computazionale $O(\log{n})$ in quanto richiamerà sé stessa un numero di volte massimo pari all'altezza dell'albero su cui si sta lavorando, che dalla definizione data nella sezione inerente alla [[Strutture dati (brutta)#Perfezione di un albero binario|perfezione di un albero binario]] sappiamo essere equivalente a $\log{n}$.
#### DeleteMax
[[Strutture dati (brutta)#Eliminare l'elemento con valore massimo nell'array|DeleteMax]] avrà costo computazionale uguale a quello di [[Strutture dati (brutta)#Ripristinare la proprietà di Max-heap|FixHeap]], ovvero $O(\log{n})$.
#### Heapify
Per calcolare il costo computazionale di [[Strutture dati (brutta)#Costruire un array heap a partire da un array privo di alcun ordine|Heapify]] occorrerà utilizzare il [[Introduzione, complessità computazionali e analisi degli algoritmi#Master Theorem|Master Theorem]] in quanto si tratta di una funzione ricorsiva.
Considerando che la funzione richiamerà sé stessa due volte (una per il figlio sinistro ed una per il figlio destro) si avrà una costante moltiplicativa del costo delle due chiamate pari a 2. Il costo per chiamata sarà pari a $\frac{n}{2}$, in quanto ad ogni chiamata si divide l'albero attuale in due metà, dimezzando effettivamente il numero di elementi considerati. Infine occorrerà considerare anche il costo di [[Strutture dati (brutta)#Ripristinare la proprietà di Max-heap (FixHeaè)|FixHeap]], pari a $O(\log{n})$.
Quindi si avrà $T(n) = 2 \cdot T(\frac{n}{2}) + \log{n}$, che dal primo caso del Master Theorem risulta $T(n) = O(n)$.
### Heapsort
L'Heapsort si basa sull'idea di creare un max-heap a partire da un array $A$ mediante [[Strutture dati (brutta)#Costruire un array heap a partire da un array privo di alcun ordine (Heapify)|Heapify]]ed in seguito continuare ad estrarne il massimo mediante [[Strutture dati (brutta)#Trovare il valore massimo (FindMax)]|FindMax]] e [[Strutture dati (brutta)#Cancellare il valore massimo (DeleteMax)|DeleteMax]] per poi inserire il massimo nell'ultima posizione di $A$, finché l'heap-max creato non risulta vuoto.
#### Costo computazionale dell'Heapsort
Il costo computazionale di questa operazione risulta essere il costo di [[Strutture dati (brutta)#Costruire un array heap a partire da un array privo di alcun ordine (Heapify)|Heapify]] sommato a quello di un loop sugli $n$ elementi dell'array-heap ottenuto, considerando che il costo per iterazione non sarà costante ma pari a quello di [[Strutture dati (brutta)#Trovare il valore massimo (FindMax)]|FindMax]] e di [[Strutture dati (brutta)#Cancellare il valore massimo (DeleteMax)|DeleteMax]] (quindi $\log{n}$), ovvero $T(n) = O(n) + O(\sum^1_{c = n}\log{c}) = O(n \cdot \log{n})$.
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

## Strutture Union-find
Utili per gestire insiemi disgiunti (senza elementi in comune) di oggetti, come insiemi singoletto.
### Definizione
Una struttura union-find è una collezione $S = \{S_1, S_2, \dots, S_k\}$ di insiemi dinamici disgiunti. Gli insiemi possono contenere complessivamente un totale di $n \geq k$ elementi ed ogni insieme è rappresentato da un **rappresentate univoco**.
### Come rappresentare gli insiemi
Un insieme facente parte di una struttura union-find si può rappresentare mediante un item chiamato rappresentante, che può essere un qualunque membro di tale insieme. Questo rappresentate può cambiare **solamente** in seguito all'unione con un altro insieme.
### Operazioni su strutture Union-find
#### makeSet
Una funzione **makeSet(elem $x$)**:
- Crea un insieme il cui unico elemento (e quindi ovviamente il rappresentate) è $x$;
- $x$ non deve appartenere ad un altro insieme esistente (si opera con insiemi disgiunti).
#### find
Una funzione **find(elem $x$) $\rightarrow x$**:
- Restituisce il rappresentate dell'insieme contenente $x$.
#### union
Una funzione **union(elem $x$, elem $y$)**:
- Unisce i due insiemi rappresentati da $x$ e da $y$;
- Il nuovo insieme avrà un nuovo rappresentate e i due insiemi precedenti verranno distrutti.
### Esempio di applicazione della struttura Union-find
Supponiamo di avere $9$ strade e di volerne trovare le intersezioni:![[Pasted image 20250403122500.png]]
allora potremmo scrivere l'insieme $E$ come l'insieme di tutti i $9$ singoletti:$$
E = \{\{1\}, \{2\}, \{3\}, \{4\}, \{5\}, \{6\}, \{7\}, \{8\}, \{9\}\}$$poi potremmo applicare:
- [[Strutture dati (brutta)#union|union]]($1,4$);
- union($2,5$);
- union($3,6$);
- union($8,9$);

Per ottenere 4 nuovi insiemi composti da $2$ elementi, più un singoletto per il $7$.
Ora dovremmo unire tra loro questi insiemi per trovare le intersezioni stradali:
- union($4,5$);
- union($6,9$);
- union($4,7$);
### Implementazioni con Union-find
#### Algoritmo QuickFind
Ogni insieme viene rappresentato con un albero di altezza uno, dove la radice corrisponde al rappresentante e i figli della radice sono **tutti** gli elementi dell'insieme, rappresentante incluso. Ovvero:![[Pasted image 20250403125155.png]]come possibile notare dalle frecce nel diagramma, si ha accesso diretto alle foglie ma non alla radice. Ciò significa che da una foglia (ad esempio da $c$) potrò risalire alla radice (ad esempio $b$).
##### L'operazione Find con il QuickFind
Il **find** è quindi **quick** perché permette di trovare rapidamente il rappresentate di un insieme (con costo costante in quanto si ha accesso diretto alle foglie)ù
##### L'operazione Union con il QuickFind
Con l'algoritmo QuickFind si da precedenza all'ottimizzazione dell'operazione di find, ma per fare ciò si sacrifica l'ottimizzazione dell'[[Strutture dati (brutta)#union|union]]: difatti, eseguendo union($x, y$), occorrerà cambiare tutti i puntatori delle foglie dell'albero $y$ per puntare ad $x$. Questo significa che union avrà, considerando $n$ pari alla quantità complessiva di elementi nel primo e nel secondo albero, complessità pari ad $O(n)$ nel caso peggiore (ovvero il caso in cui l'albero da unire ha $n-1$ elementi).![[Pasted image 20250403131449.png]]
#### Algoritmo QuickUnion
Si rappresenta ogni insieme tramite un albero dove ogni nodo ha esattamente un padre, ma può avere $n$ figli. Anche in questo caso la radice contiene il rappresentante. Ovvero:![[Pasted image 20250403130827.png]]
##### L'operazione Find con il QuickUnion
Il **Find** in questo caso risulta più lento rispetto a [[Strutture dati (brutta)#L'operazione Find con il QuickFind|quello del QuickFind]] perché per trovare la radice occorre passare attraverso tutti i padri di un elemento passato come parametro alla funzione. Questo significa che nel caso peggiore il find avrà complessità pari a $O(n)$.
##### L'operazione Union con il QuickUnion
Per la Union la cosa risulta molto semplice, in quanto basta collegare il padre di un sottoalbero diretto della radice e collegarlo al nuovo rappresentante (si cambia ora un solo elemento invece che $n$). Si ha quindi costo costante $O(1)$.![[Pasted image 20250403131420.png]]
#### QuickFind con Euristica sul peso
Una strategia per diminuire il costo dell’operazione [[Strutture dati (brutta)#L'operazione Union con il QuickFind|union]] nel QuickFind consiste nel:
- memorizzare nella radice il numero di elementi dell'insieme; la dimensione può essere mantenuta in tempo $O(1)$;
- appendere l'insieme con meno elementi a quello con più elementi.

Ad esempio, avendo 2 insiemi della forma:![[Pasted image 20250403180816.png]]
con l'algoritmo QuickFind con euristica sul peso si muoverebbero gli elementi $f$ e $g$ dal primo insieme al secondo, nella maniera seguente:![[Pasted image 20250407132819.png]]

##### Prima Osservazione sul QuickFind con Euristica sul peso
Ogni volta che una foglia cambia padre, fa parte di un insieme contenente *almeno* il doppio degli elementi contenuti nel suo insieme originale: ciò significa che ogni foglia cambia il proprio padre al più $\log{n}$ volte.
##### Seconda Osservazione sul QuickFind con Euristica sul peso
Nel caso peggiore fino a $\frac{n}{2}$ elementi cambieranno padre per esecuzione di union, dove $n$ equivale al numero di elementi complessivo dei due insiemi.
Nel caso medio, considerando $k - 1$ cambi (per $k$ cambi si ha una nuova struttura Union-Find) e ricordando che un cambio ha costo pari a $\log{k}$, il costo ammortizzato della funzione union risulta essere $O(k \cdot \log{k})$ diviso il numero di cambi, ovvero $\frac{O(k \cdot \log{k})}{k - 1}$, che risulta $O(\log{k})$ (il $-1$ si può ignorare in quanto non influisce sul calcolo).
#### QuickUnion con Euristica sul peso
### Esercizi inerenti alle strutture union-find
Per gli esercizi clicca [[Esercizi Inerenti alle Strutture Dati Union-Find|qui]]!
## Grafi
> Per gli algoritmi inerenti ai Grafi, clicca [[Algoritmi per le strutture dati#Algoritmi inerenti ai Grafi|qui]]!

Un grafo $G$ corrisponde ad una **coppia di vertici**$\left(V, E\right)$ e può essere orientato o non-orientato:
- nei grafi orientati si ha una **relazione binaria** (un verso da seguire) tra i due vertici $V$ ed $E$ e vi possono essere **cappi** (**archi** tra un vertice e sé stesso, del tipo $P(v, v)$);
- nei grafi non-orientati si hanno coppie non ordinate e non vi possono essere cappi.
Il grafo ottenuto ignorando la direzione degli archi e i cappi dei grafi orientati si dice **versione non orientata** di quel dato Grafo.
![[Pasted image 20250528164918.png]]
<div style="text-align: center;">Esempio di grafo orientato</div>

![[Pasted image 20250528165244.png]]<div style="text-align: center;">Esempio di grafo non orientato</div>
### Definizioni importanti dei Grafi
In un grafo orientato un **arco** $\left(v,w\right)$ si dice **incidente** da $v$ a $w$. Inoltre un **vertice** $w$ si dice **adiacente** ad un altro vertice $v$ quando da $v$ si può proseguire seguendo il verso imposto dal grafo e raggiungere immediatamente $w$. In un grafo non orientato, l'adiacenza tra vertici è simmetrica.
Ricordando l'esempio di grafo orientato proposto in precedenza, si avrebbe che (ad esempio) $\text{A}$ e $\text{D}$ siano adiacenti tra loro, mentre $\text{B}$ sia adiacente ad $\text{A}$, ma non il contrario.
Infine in un grafo si può parlare di **grado**: in un grafo non orientato, il grado di un vertice corrisponde agli archi di cui esso fa parte; in uno orientato si devono invece fare una distinzione:
- si ha un **grado uscente**: il numero di archi incidenti partenti da un certo vertice;
- un **grado entrante**: il numero di archi incidenti che partono da vertici adiacenti a quello studiato, di cui esso fa parte;
- un grado **complessivo**: la somma tra grado entrante e grado uscente.
### Operazioni sui grafi
Un grafo (di qualunque tipo esso sia) deve supportare le seguenti operazioni:
- $\text{grado(vertice v)} \rightarrow \text{intero}$
- $\text{archiIncidenti(vertice v)} \rightarrow (\text{arco, arco, }\dots)$
- $\text{estremi(arco e)} \rightarrow (\text{vertice, vertice})$
- $\text{sonoAdiacenti(vertice x, vertice y)} \rightarrow \text{booleano}$
- $\text{aggiungiVertice(vertice v)}$
- $\text{aggiungiArco(vertice x, vertice y)}$
- $\text{rimuoviVertice(vertice v)}$
- $\text{rimuoviArco(arco e)}$
Ognuna di queste operazioni avrà un certo costo computazionale basato sulla tipologia di grafo per cui vengono implementate.
### Adiacenza e grafi non orientati - Matrice di Adiacenza
Per tenere traccia delle adiacenze in un grafo non orientato si può usare una matrice detta **di adiacenza**: questa corrisponde ad una matrice di booleani dove si ha $1$ quando due grafi sono adiacenti e $0$ quando non lo sono:![[Pasted image 20250529135422.png]]
#### Operazioni sulle matrici di adiacenza - Grafi non orientati
<table style="width: 100%; border-collapse: collapse;">
  <tr>
    <th style="text-align: left;">Operazione</th>
    <th style="text-align: right;">Costo</th>
  </tr>
  <tr>
    <td>grado(vertice v) → intero</td>
    <td style="text-align: right;">O(n)</td>
  </tr>
  <tr>
    <td>archiIncidenti(vertice v) → (arco, arco, …)</td>
    <td style="text-align: right;">O(n)</td>
  </tr>
  <tr>
    <td>sonoAdiacenti(x, y) → booleano</td>
    <td style="text-align: right;">O(1)</td>
  </tr>
  <tr>
    <td>aggiungiVertice(v)</td>
    <td style="text-align: right;">O(n²)</td>
  </tr>
  <tr>
    <td>aggiungiArco(x, y)</td>
    <td style="text-align: right;">O(1)</td>
  </tr>
  <tr>
    <td>rimuoviVertice(v)</td>
    <td style="text-align: right;">O(n²)</td>
  </tr>
  <tr>
    <td>rimuoviArco(e)</td>
    <td style="text-align: right;">O(1)</td>
  </tr>
</table> 

##### Come mai questi costi?
- L'aggiunta o la rimozione di un vertice corrisponde ad $n^2$ cambiamenti, dove $n$ sarebbe la nuova lunghezza di una riga (o colona) della matrice. Ad esempio, eliminando il vertice $F$ dalla matrice precedentemente usata come esempio, occorrerebbe rimuovere un'intera riga ed un'intera colonna di "paragoni";
- un arco corrisponde al nesso tra due vertici, ovvero ad una cella della matrice, identificata dall'indice del vertice $x$ e del vertice $y$. Aggiungere o rimuovere archi ha quindi costo costante;
- cercare di identificare con quali altri vertici un certo vertice compone un arco significa iterare su un'intera riga o un'intera colonna. L'operazione ha quindi costo pari ad $n$;
### Adiacenza e grafi non orientati - Lista di Adiacenza
Un altro modo per rappresentare e tenere traccia delle adiacenze in un grafo non orientato corrisponde alla Lista di Adiacenza: per ogni vertice si ha una linked list dove ogni nodo corrisponde ad un vertice adiacente.![[Pasted image 20250529144358.png]]
#### Operazioni sulle liste di adiacenza - Grafi non orientati
<table style="width: 100%; border-collapse: collapse;">
  <tr>
    <th style="text-align: left;">Operazione</th>
    <th style="text-align: right;">Costo</th>
  </tr>
  <tr>
    <td>grado(vertice v) → intero</td>
    <td style="text-align: right;">O(δ(v))</td>
  </tr>
  <tr>
    <td>archiIncidenti(vertice v) → (arco, arco, ... arco)</td>
    <td style="text-align: right;">O(δ(v))</td>
  </tr>
  <tr>
    <td>sonoAdiacenti(vertice x, vertice y) → booleano</td>
    <td style="text-align: right;">O(min{δ(x), δ(y)})</td>
  </tr>
  <tr>
    <td>aggiungiVertice(vertice v)</td>
    <td style="text-align: right;">O(1)</td>
  </tr>
  <tr>
    <td>aggiungiArco(vertice x, vertice y)</td>
    <td style="text-align: right;">O(1)</td>
  </tr>
  <tr>
    <td>rimuoviVertice(vertice v)</td>
    <td style="text-align: right;">O(m)</td>
  </tr>
  <tr>
    <td>rimuoviArco(arco e) &nbsp;&nbsp;&nbsp;</td>
    <td style="text-align: right;">O(δ(x) + δ(y))</td>
  </tr>
</table>
dove:

- δ corrisponde al grado di un certo vertice;
- $m$ corrisponde al numero di archi nel grafo.
##### Come mai questi costi?
- Trovare gli archi incidenti o il grado di un vertice significa iterare dall'inizio della lista associata a tale vertice fino al termine di essa, eseguendo un numero di operazioni pari al grado stesso del vertice;
- capire se due vertici sono adiacenti significa iterare lungo la lista più corta associata ad uno dei due vertici studiati;
- aggiungere un vertice significa creare una nuova lista;
- aggiungere un arco significa aggiungere un nuovo nodo nella lista associata ad entrambi i vertici facenti parte dell'arco. Lo spostamento a destra del resto della lista ha costo ignorabile;
- rimuovere un vertice significa far scorrere tutte le liste ed eliminare eventuali nodi contenenti tale vertice. Questa è potenzialmente l'operazione più costosa tra tutte, avendo come costo il numero di archi del grafo;
- rimuovere un arco significa rimuovere due nodi, uno per ogni lista associata ad uno dei vettori dell'arco. Questo può potenzialmente richiedere lo scorrimento di entrambe le liste associate a tali vertici.
### Adiacenza nei grafi orientati
Anche nei grafi orientati si possono adoperare sia le Matrici che le Liste di Adiacenza: le uniche differenze si avranno nel fatto che qui cambierà il concetto di adiacenza:![[Pasted image 20250529151001.png]]Qui si può notare come, osservando la riga inerente al vertice $A$, si abbia un $1$ nell'incontro con $D$ e $B$, mentre nella riga inerente a $B$ si abbia un $1$ solamente nell'incontro con il vertice $C$ (e non anche con $A$, come accadeva nei grafi non orientati). La stessa cosa avverrà anche con le Lista di Adiacenza.
### Grafi Pesati
In questa variante dei grafi ad ogni arco viene associato un **peso** (o **costo**) e quando tra due vertici non vi è un arco si dice che i due hanno tra loro **costo infinito**. A seguire un esempio di Matrice di Adiacenza inerente ad un grafo non orientato pesato:![[Pasted image 20250529160754.png]]
### I Cammini
Si dice **cammino** una sequenza di vertici $\lt v_0, v_1, \dots, v_n \gt$ adiacenti tra loro. La **lunghezza** di un cammino corrisponde al numero di archi attraversati (quindi al numero di vertici $-1$).
Un cammino si dice inoltre **semplice** se ogni vertice compare una sola volta all'interno di esso.
A seguire un esempio di cammino semplice:![[Pasted image 20250529161836.png]]
Qualora esistesse un cammino che colleghi due vertici $x$ ed $y$, allora $y$ si direbbe **raggiungibile** da $x$ tramite un certo cammino $c$.
#### Grafi connessi
Un grafo non orientato si dice connesso qualora esista un cammino da ogni vertice ad ogni altro vertice. A seguire un esempio di grafo connesso:![[Pasted image 20250529162230.png]]ed uno di grafo non connesso:![[Pasted image 20250529162304.png]]
#### Grafi fortemente connessi
Un grafo orientato si dice fortemente connesso qualora esista un cammino da ogni vertice ad ogni altro vertice. Tuttavia questo risulta più complicato che nei grafi non orientati, in quanto si deve tenere conto anche dei versi dei vertici: il seguente grafo non risulterà difatti fortemente connesso, in quanto non esisterà un cammino per collegare un qualunque vertice ad $A$.![[Pasted image 20250529162737.png]]
#### Grafi debolmente connessi
Avendo un grafo orientato non fortemente connesso la cui controparte non orientata risulta connessa, allora il grafo orientato è detto **debolmente connesso**. Riproponendo l'esempio di grafo non fortemente connesso presentato in precedenza:
![[Pasted image 20250529163244.png]]
questo sarebbe un valido grafo debolmente connesso.
### Cicli
Un ciclo corrisponde ad un cammino con lunghezza:
- $\geq 1$ nei grafi orientati;
- $\geq 3$ nei grafi non orientati;
dove il primo vertice corrisponde all'ultimo, ovvero ad una situazione del tipo $\lt v_0, v_1, \dots, v_n \gt$ con $v_0 = v_n$.
Un ciclo si dice **semplice** se tutti i vertici facenti parte di esso, meno ovviamente il primo, sono distinti.
Un ciclo non orientato si dice **aciclico** quando non contiene cicli semplici, mentre un grafo orientato risulta **aciclico** quando non contiene cicli in generale.
### Grafi non orientati completi
Un grafo non orientato si dice **completo** quando ha un arco tra ogni coppia di vertici, come nel caso seguente:![[Pasted image 20250529164242.png]]In un grafo completo vi sono $\frac{n(n-1)}{2}$ archi totali, dove $n$ corrisponde al numero di vertici.
### Curiosità sul rapporto tra Grafi ed Alberi
La struttura dati dell'albero corrisponde ad un grafo dove un vertice viene eletto a **radice**, creando cosi un **albero radicato**. Esistono anche **alberi liberi**, dove non vi è una radice. Questi alberi corrispondono a dei grafi non orientati aciclici:![[Pasted image 20250529164632.png]]