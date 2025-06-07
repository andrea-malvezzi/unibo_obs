1. [[Alberi e Alberi Binari - esercizi#Esercizio 1 - Cancellare le foglie|Esercizio 1 - Cancellare le foglie]]
	1. [[Alberi e Alberi Binari - esercizi#Esercizio 1 - soluzione|Soluzione]]
2. [[Alberi e Alberi Binari - esercizi#Esercizio 2 - Somma dei valori nelle foglie|Esercizio 2 - Somma dei valori nelle foglie]]
	1. [[Alberi e Alberi Binari - esercizi#Esercizio 2 - Soluzione ricorsiva|Soluzione ricorsiva]]
	2. [[Alberi e Alberi Binari - esercizi#Esercizio 2 - Soluzione iterativa|Soluzione iterativa]]
3. [[Alberi e Alberi Binari - esercizi#Esercizio 3 - Cancellazione foglie sinistre|Esercizio 3 - Cancellazione foglie sinistre]]
	1. [[Alberi e Alberi Binari - esercizi#Esercizio 3 - Soluzione|Soluzione]]
4. [[Alberi e Alberi Binari - esercizi#Esercizio 4 - Altezza di un albero|Esercizio 4 - Altezza di un albero]]
	1. [[Alberi e Alberi Binari - esercizi#Esercizio 4 - Soluzione con visita in profondità|Soluzione con visita in profondità]]
	2. [[Alberi e Alberi Binari - esercizi#Esercizio 4 - Soluzione con visita in ampiezza|Soluzione con visita in ampiezza]]
5. [[Alberi e Alberi Binari - esercizi#Esercizio 5 - Conta nodi con valore pari|Esercizio 5 - Conta nodi con valore pari]]
	1. [[Alberi e Alberi Binari - esercizi#Esercizio 5 - Soluzione|Soluzione]]
6. [[Alberi e Alberi Binari - esercizi#Esercizio 6 - Somma dei valori radice-nodo pari a k|Esercizio 6 - Somma dei valori radice-nodo pari a k]]
	1. [[Alberi e Alberi Binari - esercizi#Esercizio 6 - Soluzione|Soluzione]]
## Esercizio 1 - Cancellare le foglie
Scrivere un algoritmo che, dato in input un albero binario $T$, ne cancelli tutte le foglie. Tale algoritmo dovrà ritornare un puntatore alla radice dell'albero (che potrebbe essere $\text{NIL}$ nel caso in cui esso sia composto da una sola foglia).
### Esercizio 1 - soluzione
Per ogni nodo dell'albero da visitare, basterà controllare che tale nodo sia nullo o sia una foglia (sia il figlio sinistro che quello destro uguali $\text{NIL}$): qualora una di queste condizioni risultasse $\text{true}$, allora basterà ritornare $\text{NIL}$ per cancellare il nodo attuale (in algoritmi non ci interessiamo del fare il $\text{delete}$, basta annullare il nodo).
Se invece nessuna di queste condizioni risultasse veritiera, allora visitiamo i nodi di sinistra e di destra e ripetiamo il processo ricorsivamente.
```pseudocodice
funtion CancellaFoglie(Node T)
	if T == NIL || (T.left == NIL && T.right == NIL)
		return NIL
	T.left = CancellaFoglie(T.left)
	T.right = CancellaFoglie(T.right)
	return T
```
## Esercizio 2 - Somma dei valori nelle foglie
Scrivere un algoritmo che, preso in input un albero binario $T$, ritorni la somma dei valori contenuti nelle foglie di questo.
- Se l’albero è vuoto, l’algoritmo ritornerà 0.
- Fare una versione iterativa ed una ricorsiva.
### Esercizio 2 - Soluzione ricorsiva
Anzitutto controlliamo che il nodo sia $\text{NIL}$: se tale condizione risulta $\text{true}$ ritorniamo 0, altrimenti controlliamo che il nodo sia una foglia. Se il nodo risulta essere una foglia ritorniamo il valore contenuto nel nodo, altrimenti proseguiamo.
Infine facciamo la somma tra il valore attuale e una chiamata ricorsiva su entrambi i figli.
```pseudocodice
function SommaRicorsiva(Node T) -> Int
	somma = 0
	if T == NIL
		return somma
	else if T.left == NIL && T.right == NIL
		return T.value
	else
		somma += SommaRicorsiva(T.left)
		somma += SommaRicorsiva(T.right)
		return somma
```
### Esercizio 2 - Soluzione iterativa
La versione iterativa risulta più complessa da implementare in quanto non basta un costrutto per iterare su tutto l'albero, in quanto questo cade sotto la categoria delle strutture dati **dinamiche** (non si ha quindi una grandezza concreta con cui misurare la durata di un ipotetico ciclo).
Dovremo servirci di un'altra struttura dati dinamica più semplice da maneggiare, ovvero una $\text{Queue}$.
In questo coda inseriremo ogni nodo preso in esame e all'inizio di un ciclo while effettueremo il dequeue, in modo da rimuovere tale nodo. Poi controlleremo che tale nodo sia una foglia e nel caso non lo sia inseriremo i suoi figli nella coda, per poi ricominciare da capo fino a quando il $\text{size}$ della coda non sarà pari a $0$.
```pseudocodice
function SommaIterativa(Node T) -> Int
	somma = 0
	let Q be a Queue
	if (T != NIL)
		Enqueue(Q, T)
	while Q.size != 0
		x = Dequeue(Q)
		if (x.left == NIL && x.right == NIL)
			somma += x.value
		if (x.left != NIL)
			Enqueue(Q, x.left)
		if (x.right != NIL)
			Enqueue(Q, x.right)
	return somma
```
## Esercizio 3 - Cancellazione foglie sinistre
Scrivere un algoritmo che, preso in input un albero binario $T$, elimini tutte le foglie che sono figli sinistri e che non abbiano lo stesso valore del nodo padre.
### Esercizio 3 - Soluzione
Anzitutto controlliamo che il nodo non sia $\text{NIL}$. In seguito se il nodo non è una foglia, controlliamo che il suo figlio sinistro non sia una foglia. Qualora lo fosse, effettuiamo il controllo. In caso contrario, visitiamo entrambi i figli.
```pseudocodice
function CancellaFoglieSx(Node T)
	if T != NIL
		if T.left != NIL && IsLeaf(T.left) && T.left.value != T.value
			T.left = NIL
		else
			CancellaFoglieSx(T.left)
			CancellaFoglieSx(T.right)
```
## Esercizio 4 - Altezza di un albero
Scrivere un algoritmo che calcoli l’altezza di un albero binario. Nel caso in cui l'albero sia vuoto, ritornare $-1$. Se risulta presente solo la radice, ritornare $0$.
Presentare una soluzione con visita in profondità ed in ampiezza.
### Esercizio 4 - Soluzione con visita in profondità
Per questa soluzione (detta $\text{DFS - Depth First Search}$) adotteremo il classico metodo ricorsivo per visitare un albero, ricordando di sommare $1$ ogni volta che scendiamo di livello.
```pseudocodice
function AltezzaDFS(Node T) -> Int
	if (T == NIL)
		return -1
	else if IsLeaf(T)
		return 0
	else
		return 1 + Max(AltezzaDFS(T.left), AltezzaDFS(T.right))
```
### Esercizio 4 - Soluzione con visita in ampiezza
Per questa visita (detta $\text{BFS - Breadth First Search}$) usiamo un ciclo while in combinazione con una $\text{Queue}$, in cui inseriremo ogni nodo per poi visitarlo e inserire anche i suoi figli nella coda.
All'inizio del ciclo while, dovremo salvare il size attuale della coda in una variabile, per poi iterare dentro la coda passando in rassegna un numero di nodi pari a size. Al termine di questo ciclo avremo "completato" un intero livello dell'albero e potremo procedere al prossimo (caricato nella coda nel ciclo precedente), aggiungo $1$ al contatore dell'altezza.
```pseudocodice
function AltezzaIterativa(Node T) -> Int
	altezza = 0
	if T == NIL
		return -1
	if IsLeaf(T)
		return altezza
	let Q be a Queue
	Enqueue(Q, T)
	while Q.size != 0
		itemLivello = Q.size
		for i = 1, ..., itemLivello
			x = Dequeue(Q)
			Enqueue(x.left)
			Enqueue(x.right)
		altezza += 1
	return altezza
```
## Esercizio 5 - Conta nodi con valore pari
Scrivere un algoritmo che conti il numero di nodi con valore pari in un albero generico (*non* binario).
### Esercizio 5 - Soluzione
In un albero generico ogni nodo possiede come proprietà una lista contenente tutti i nodi che corrispondono ai suoi figli, a partire da quello più a sinistra.
Quindi per ogni nodo dovremo iterare sui suoi figli per poi analizzare anche loro. Usiamo la tecnica $\text{BFS}$.
```pseudocodice
function ContaPari(Node T)
	count = 0
	if T == NIL
		return count
	let Q be a Queue
	Enqueue(Q, T)
	while Q.size != 0
		x = Dequeue(Q)
		if x.value % 2 == 0
			count += 1
		iter = x.first
		while iter != NIL
			Enqueue(Q, iter)
			iter = iter.next
	return count
```
Oppure con tecnica $\text{DFS}$:
```pseudocodice
function ContaPari(Node T)
	if T == NIL
		return 0
	if T.value % 2 == 0
		// T.first prende il primo figlio del nodo corrente (scende di un livello)
		// T.next prende il fratello del nodo corrent (stesso livello)
		return 1 + ContaPari(T.first) + ContaPari(T.next)
	else
		return ContaPari(T.first) + ContaPari(T.next)
```
## Esercizio 6 - Somma dei valori radice-nodo pari a k
Scrivere un algoritmo che, dato un albero generico (*non* binario) ed un intero $k$, conti il numero di nodi tali per cui la somma dei valori del percorso radice-nodo sia uguale a $k$.
Procedi anche dopo aver trovato la somma (dei figli potrebbero contenere valori negativi o $0$).
### Esercizio 6 - Soluzione
Anzitutto controlliamo che il nodo studiato non sia $\text{NIL}$. In seguito controlliamo che il valore di tale nodo sia esattamente $k$ ed in base all'esito di tale check decidiamo quale strada intraprendere:
- $\text{true }\rightarrow$ ritorno la somma tra $1$ ed una chiamata ricorsiva al figlio del nodo attuale ed il suo prossimo fratello ($\text{T.first}$ e $\text{T.next}$);
- $\text{false} \rightarrow$ faccio la stessa cosa del caso veritiero ma senza il $+1$;

Nel caso $\text{true}$ continuiamo i controlli per eventuali percorsi contenenti negativi e/o valori nulli.
```pseudocodice
function SommaRadiceNodo(Node T, int k) -> Int
	if T == NIL
		return 0
	if T.value == k
		return 1 + SommaRadiceNodo(T.first, 0) + SommaRadiceNodo(T.next, k)
	return SommaRadiceNodo(T.first, k - T.value) + SommaRadiceNodo(T.next, k)
```