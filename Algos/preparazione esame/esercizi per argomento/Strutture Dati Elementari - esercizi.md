1. [[Strutture Dati Elementari - esercizi#Esercizio 1 - n-esimo elemento dalla fine di una linked list|Esercizio 1: n-esimo elemento dalla fine di una linked list]]
	1. [[Strutture Dati Elementari - esercizi#Esercizio 1 - soluzione|Soluzione]]
2. [[Strutture Dati Elementari - esercizi#Esercizio 2 - n-esimo elemento dalla fine di una linked list ma senza iterare due volte su di essa|Esercizio 2: n-esimo elemento dalla fine di una linked list ma senza iterare due volte su di essa]]
	1. [[Strutture Dati Elementari - esercizi#Esercizio 2 - soluzione|Soluzione]]
3. [[Strutture Dati Elementari - esercizi#Esercizio 3 - eliminare i pari ricorsivamente in una linked list|Esercizio 3: eliminare i pari ricorsivamente in una linked list]]
	1. [[Strutture Dati Elementari - esercizi#Esercizio 3 - soluzione|Soluzione]]
4. [[Strutture Dati Elementari - esercizi#Esercizio 6 - InsertionSort per Doubly Linked Lists|Esercizio 6 - InsertionSort per Doubly Linked Lists]]
	1. [[Strutture Dati Elementari - esercizi#Esercizio 6 - soluzione|Soluzione]]
5. [[Strutture Dati Elementari - esercizi#Esercizio 7 - sequenza di caratteri con Stack e Coda|Esercizio 7 - sequenza di caratteri con Stack e Coda]]
	1. [[Strutture Dati Elementari - esercizi#Esercizio 7 - soluzione|Soluzione]]
6. [[Strutture Dati Elementari - esercizi#Esercizio 8 - valore minimo in uno Stack in O(1)|Esercizio 8 - valore minimo in uno Stack in O(1)]]
	1. [[Strutture Dati Elementari - esercizi#Esercizio 8 - soluzione|Soluzione]]
7. [[Strutture Dati Elementari - esercizi#Esercizio 9 - Merge ordinato tra due Stack|Esercizio 9 - Merge ordinato tra due Stack]]
	1. [[Strutture Dati Elementari - esercizi#Esercizio 9 - soluzione|Soluzione]]
## Esercizio 1 - n-esimo elemento dalla fine di una linked list
Scrivere un algoritmo che, dati in input un intero positivo $k$ ed una lista concatenata semplice, restituisca il $k-$esimo elemento a partire dalla fine.
### Esercizio 1 - soluzione
Iteriamo su tutta la lista e troviamo il numero di nodi, poi ripartiamo dall'inizio e iteriamo fino a che il contatore che abbiamo usato per i nodi risulta maggiore di $k$. Ritorniamo il nodo dove abbiamo interrotto questa iterazione.
```pseudocodice
function LastK(List L, int k) -> Node
	Node tmp = L.head
	int n = 0
	while tmp != NIL
		tmp = tmp -> next
		n++
	tmp = L.head
	while n > k
		tmp = tmp -> next
		n--
	return tmp
```
## Esercizio 2 - n-esimo elemento dalla fine di una linked list ma senza iterare due volte su di essa
Scrivere un algoritmo che, dati in input un intero positivo $k$ ed una lista concatenata semplice restituisca il $k-$esimo elemento a partire dalla fine senza visitare per due volte la lista (per memorizzarne la lunghezza).
### Esercizio 2 - soluzione
Usiamo due puntatori: uno rimarrà $k$ posizioni indietro rispetto al primo, in modo da poter ritornare l'item corretto al termine dell'iterazione:
```pseudocodice
function LastK(List L, int k) -> Node
	Node tmp1 = L.head // questo scorre per primo
	Node tmp2 = L.head // questo parte dopo
	int n = 0 // quando n = k parte tmp2
	while tmp1 != NIL
		n++
		if (n >= k)
			tmp2 = tmp2 -> next
		tmp1 = tmp1 -> next
	return tmp2
```
## Esercizio 3 - eliminare i pari ricorsivamente in una linked list
Scrivere un algoritmo ricorsivo che, data una lista concatenata semplice, la modifichi eliminando ogni elemento pari.
### Esercizio 3 - soluzione
Passo il nodo precedente e quello successivo alla funzione e controllo il valore del successivo. Inizialmente passo il precedente come $\text{null}$ per indicare che mi trovo nella head. Termino l'iterazione quando il nodo attuale corrisponde a $\text{null}$ (ho terminato la lista).
```pseudocodice
function EliminaPari(Nodo prec, Nodo curr)
	if (curr = NIL) // caso base
		return
	if (curr -> value %2 == 0)
		Nodo tmp = curr
		curr = curr -> next
		delete tmp
		if (prec != NIL) // non sono nella head
			prec -> next = curr
		EliminaPari(prec, curr)
	else
		prec = curr
		curr = curr -> next		
		EliminaPari(prec, curr)
```
## Esercizio 6 - InsertionSort per Doubly Linked Lists
Scrivere l’algoritmo $\text{InsertionSort}$ per liste doppiamente concatenate.
### Esercizio 6 - soluzione
L'$\text{InsertionSort}$ si basa sul selezionare un valore contenuto da una collezione e confrontarlo con i valori che lo precedono, per poi inserirlo nella posizione corretta, spostando a destra eventuali valori da riordinare.
In una DLL, basta scorrere la lista e, per ogni elemento di essa, scorrere gli elementi precedenti (partendo da quello appena prima, per sfruttare la presenza di un collegamento al nodo precedente) e scambiare quando il precedente risulta maggiore di quello attuale.
```pseudocodice
function InsertionSortDLL(DLList L)
	Node scorri = L.head
	while (scorri != NIL)
		Node scorriPrec = scorri
		while
			(
				scorriPrec -> prev != NIL &&
				scorriPrec -> value < scorriPrec -> prev -> value
			)
			Swap(scorriPrec, scorriPrec -> prev)
		scorri = scorri -> next

function Swap(Node x, Node y)
	// non servono edge case, ci sono i check nel ciclo
	x -> value += y -> value
	y -> value = x -> value - y -> value
	x -> value -= y -> value
```
## Esercizio 7 - sequenza di caratteri con Stack e Coda
Consideriamo la seguente sequenza di caratteri:$$\text{E A S * Y * Q U E * * * S T * * * I O * N * * *}$$
1. Partendo da una pila vuota $S$, un carattere $c$ indica l’operazione $\text{push(S,c)}$ mentre un asterisco $*$ indica l’operazione $\text{pop(S)}$. Mostrare la sequenza di caratteri ritornata dalle operazioni pop.
2. Partendo da una coda vuota $Q$, un carattere $c$ indica l’operazione $\text{enqueue(Q,c)}$ mentre un asterisco $*$ indica l’operazione $\text{dequeue(Q)}$. Mostrare la sequenza di caratteri ritornata dalle operazioni dequeue.
### Esercizio 7 - soluzione
1. Inseriamo le prime $3$ lettere nello $\text{Stack}$. Rimuoviamo l'ultima inserita (la $\text{S}$). Inseriamo e rimuoviamo la $\text{Y}$. Inseriamo le $3$ lettere seguenti e rimuoviamole (abbiamo rimosso quindi $\text{E,U,Q}$). Inseriamo $2$ lettere e rimuoviamone $3$: togliamo quindi $\text{T,S,A}$. Inseriamo due lettere e rimuoviamo la $\text{O}$. Inseriamo la $\text{N}$ e rimuoviamo altre $3$ lettere: $\text{N, A, E}$. Ora avremo quindi la seguente sequenza:$$\text{S Y E U Q A S T O E I N}$$
2. Accodiamo le prime $3$ lettere e rimuoviamo la prima di esse, ovvero la $\text{E}$. Ora accodiamo la $\text{Y}$ e rimuoviamo la seconda inserita, ovvero la $\text{A}$. Ora accodiamo $3$ lettere e rimuoviamo le prime $3$ della coda, ovvero: $\text{S, Y, Q}$. Accodiamo poi $\text{S, T}$ e rimuoviamo le prime $3$ della coda, cioè: $\text{U, E, S}$. Ora accodiamo $\text{I, O}$ e rimuoviamo la $\text{T}$ in testa alla coda. Per finire, aggiungiamo la $\text{N}$ e rimuoviamo le prime $3$ lettere rimanenti: $\text{I, O, N}$. Ora avremo quindi:$$\text{E A S Y Q U E S T I O N}$$Un altro modo per svolgere questo esercizio (per la parte della coda) sarebbe stato prima inserire tutti i caratteri e poi rimuoverli uno ad uno partendo dal primo, data la natura $\text{FIFO}$ della struttura dati.
## Esercizio 8 - valore minimo in uno Stack in O(1)
Consideriamo una pila S che supporta le seguenti operazioni in $O(1)$:
- $\text{top(S)}$ ritorna il valore in cima alla pila $S$ (senza rimuoverlo);
- $\text{isempty(S)}$ restituisce $\text{true}$ se $S$  è vuota, $\text{false}$ altrimenti;
- $\text{push(S, x)}$ inserisce $x$ in cima alla pila $S$;
- $\text{pop(S)}$ rimuove e ritorna il valore in cima alla pila $S$. Termina in errore se $S$ è vuota;
Vogliamo mantenere traccia del valore minimo in una pila $S_1$ usando una seconda pila $S_2$ che ha sempre in cima il valore attualmente minimo in $S_1$.
Ideare le seguenti due operazioni, con costo $O(1)$:
- $\text{push2(S1, S2, x)}$ inserisce $x$ in $S_1$ e aggiorna (se necessario) la cima di $S_2$ in modo che contenga il valore minimo in $S_1$;
- $\text{pop2(S1, S2)}$ rimuove e ritorna il valore in cima ad $S_1$ e aggiorna (se necessario) $S_2$.
### Esercizio 8 - soluzione
```pseudocodice
function Push2(Stack S1, Stack S2, int x)
	push(S1, x)
	if (isempty(S2) || top(S2) >= x)
		push(S2, x)

function Pop2(Stack S1, Stack S2)
	if (!isempty(S1) && top(S1) == top(S2)) // se S1 non empty, S2 non empty
		pop(S2)
	return pop(S1)
```
## Esercizio 9 - Merge ordinato tra due Stack
Scrivere lo pseudocodice di un algoritmo $\text{mergestacks(S1,S2,S3)}$ che, presi in input due pile ordinate $S_1$ e $S_2$ (entrambe con elemento minimo in cima), costruisce $S_3$, inizialmente vuota, con tutti gli elementi in $S_1$ ed $S_2$ in ordine. L’elemento minimo di $S_3$ deve essere in cima alla nuova pila.
Il costo pessimo dell'algoritmo deve essere $O(n_1 + n_2)$, dove:
- $n_1$ corrisponde al numero di elementi in $S_1$;
- $n_2$ corrisponde al numero di elementi in $S_2$.
### Esercizio 9 - soluzione
```pseudocodice
function MergeStacks(Stack S1, Stack S2, Stack S3)
	while (!isempty(S1) || !isempty(S2))
		int x = -1
		if (isempty(S1) || top(S1) > top(S2))
			x = pop(S2)
		else if (isempty(S2) || top(S2) > top(S1))
			x = pop(S1)
		MergeStacks(S1, S2, S3)
		push(S3, x)
```
dove la ricorsione ci permette di "attendere" che ogni chiamata sia terminata per aggiungere l'elemento trovato: questo fa in modo che in cima ci sia il valore minore, mentre in fondo vi sia quello con valore maggiore.