1. [[Esempi di esercizi d'esame con soluzione#Analisi del costo|Analisi del costo]]
	1. [[Esempi di esercizi d'esame con soluzione#Esercizio 1 - Analisi del costo di un algoritmo ricorsivo|Esercizio 1 - Analisi del costo di un algoritmo ricorsivo]]
		1. [[Esempi di esercizi d'esame con soluzione#Esercizio 1 - Soluzione|Soluzione]]
			1. [[Esempi di esercizi d'esame con soluzione#Esercizio 1 - Soluzione#Analisi del costo di Mistery2|Analisi del costo di Mistery2]]
			2. [[Esempi di esercizi d'esame con soluzione#Analisi del costo di Mistery1|Analisi del costo di Mistery1]]
	2. [[Esempi di esercizi d'esame con soluzione#Esercizio 2 - Analisi del costo di un algoritmo ricorsivo|Esercizio 2 - Analisi del costo di un algoritmo ricorsivo]]
		1. [[Esempi di esercizi d'esame con soluzione#Esercizio 2 - Soluzione|Soluzione]]
	3. [[Esempi di esercizi d'esame con soluzione#Esercizio 5 - Analisi di un algoritmo misto|Esercizio 5 - Analisi di un algoritmo misto]]
		1. [[Esempi di esercizi d'esame con soluzione#Esercizio 5 - Soluzione|Soluzione]]
	4. [[Esempi di esercizi d'esame con soluzione#Esercizio 6 - Analisi del costo di un algoritmo misto|Esercizio 6 - Analisi del costo di un algoritmo misto]]
		1. [[Esempi di esercizi d'esame con soluzione#Esercizio 6 - Soluzione|Soluzione]]
	5. [[Esempi di esercizi d'esame con soluzione#Esercizio 10 - Analisi del costo di algoritmo con Heap Binario|Esercizio 10 - Analisi del costo di algoritmo con Heap Binario]]
		1. [[Esempi di esercizi d'esame con soluzione#Esercizio 10 - Soluzione|Soluzione]]
2. [[Esempi di esercizi d'esame con soluzione#Strutture Dati|Strutture Dati]]
	1. [[Esempi di esercizi d'esame con soluzione#Strutture Dati#Esercizio 1 - Visualizzazione di una tabella hash|Esercizio 1 - Visualizzazione di una tabella hash]]
		1. [[Esempi di esercizi d'esame con soluzione#Strutture Dati#Esercizio 1 - Soluzione|Soluzione]]
	2. [[Esempi di esercizi d'esame con soluzione#Strutture Dati#Esercizio 2 - Uguaglianza tra alberi binari|Esercizio 2 - Uguaglianza tra alberi binari]]
		1. [[Esempi di esercizi d'esame con soluzione#Strutture Dati#Esercizio 2 - Soluzione|Soluzione]]
	3. [[Esempi di esercizi d'esame con soluzione#Strutture Dati#Esercizio 3 - Numero di livelli con quantità di elementi pari|Esercizio 3 - Numero di livelli con quantità di elementi pari]]
		1. [[Esempi di esercizi d'esame con soluzione#Strutture Dati#Esercizio 3 - Soluzione|Soluzione]]
	4. [[Esempi di esercizi d'esame con soluzione#Strutture Dati#Esercizio 4 - Nodi a profondità k-esima|Esercizio 4 - Nodi a profondità k-esima]]
		1. [[Esempi di esercizi d'esame con soluzione#Strutture Dati#Esercizio 4 - Soluzione|Soluzione]]
	5. [[Esempi di esercizi d'esame con soluzione#Strutture Dati#Esercizio 6 - Rimuovere da una lista gli elementi di un'altra|Esercizio 6 - Rimuovere da una lista gli elementi di un'altra]]
		1. [[Esempi di esercizi d'esame con soluzione#Strutture Dati#Esercizio 6 - Soluzione|Soluzione]]
	6. [[Esempi di esercizi d'esame con soluzione#Strutture Dati#Esercizio 9 - k-esimo elemento più piccolo di un BST|Esercizio 9 - k-esimo elemento più piccolo di un BST]]
		1. [[Esempi di esercizi d'esame con soluzione#Strutture Dati#Esercizio 9 - Soluzione|Soluzione]]
	7. [[Esempi di esercizi d'esame con soluzione#Strutture Dati#Esercizio 10 - Albero perfetto|Esercizio 10 - Albero perfetto]]
		1. [[Esempi di esercizi d'esame con soluzione#Strutture Dati#Esercizio 10 - Soluzione|Soluzione]]
	8. [[Esempi di esercizi d'esame con soluzione#Strutture Dati#Esercizio 13 - Rimozione di un elemento a metà di una lista, senza iterare due volte|Esercizio 13 - Rimozione di un elemento a metà di una lista, senza iterare due volte]]
		1. [[Esempi di esercizi d'esame con soluzione#Strutture Dati#Esercizio 13 - Soluzione|Soluzione]]
3. [[Esempi di esercizi d'esame con soluzione#Esercizi su Tecniche Algoritmiche|Esercizi su Tecniche Algoritmiche]]
	1. 
## Analisi del costo
### Esercizio 1 - Analisi del costo di un algoritmo ricorsivo
Calcolare il costo computazionale $T(n)$ del seguente algoritmo $\text{Mystery1}$(int $n):$
![[Pasted image 20250621105833.png]]
> ✅ Corretto!
#### Esercizio 1 - Soluzione
Anzitutto notiamo come $\text{Mistery1}$ richiami $\text{Mistery2}:$ partiamo quindi con l'analisi di quest'ultima.
##### Analisi del costo di Mistery2
La funzione $\text{Mistery2}$ contiene due chiamate ricorsive. La sua equazione di ricorrenza equivarrà quindi a:
$$T_2(n) = \begin{cases}1 & n = 0 \\ 2 \cdot T_2(\frac{n}{4}) + 1 & n \geq 1 \end{cases}$$che risolvendo con $\text{Master Theorem}$ risulta:
- $a = 2;$
- $b = 4;$
- $\alpha = \log_4{2} = \frac{1}{2};$
- $\beta = 0;$

quindi $\alpha \gt \beta \rightarrow \cal O(\sqrt{n})$.
> **N.B.** la seconda riga del sistema ha questi valori in quanto essendo nella funzione presenti due chiamate, si prende quella con costo maggiore (caso pessimo peggiore), che in questo caso equivale a $2 \cdot T_2(\frac{n}{4})$.

##### Analisi del costo di Mistery1
La funzione $\text{Mistery1}$ contiene una chiamata a $\text{Mistery2}$ e due chiamate ricorsive. Prendiamo il costo maggiore tra le due chiamate ricorsive (che in questo caso sono uguali) e scriviamo quanto segue:$$T_1(n) = \begin{cases}1 & n \leq 1 \\ 2 \cdot T_1(\frac{n}{3}) + \sqrt{n} & n \gt 1\end{cases}$$che con $\text{Master Theorem}$ risulta:
- $a = 2;$
- $b = 3;$
- $\alpha = \log_3{2} = 0.63;$
- $\beta = \frac{1}{2};$

quindi $\beta \gt \alpha \rightarrow \cal O(n^{0.63})$.
### Esercizio 2 - Analisi del costo di un algoritmo ricorsivo
Calcolare il costo computazionale $T(n)$ del seguente algoritmo $\text{Mystery1}$(int $n):$
![[Pasted image 20250621133623.png]]
> ✅ Corretto!
#### Esercizio 2 - Soluzione
Partiamo da $\text{Mistery2}:$$$T_2(n) = \begin{cases}c_2 & n = 1 \\ T_2(n - 1) + c_2 & n \not = 1\end{cases}$$questa equazione di ricorrenza non è risolvibile con il $\text{Master Theorem}$, quindi procederemo per iterazione:$$\begin{array}{c}
T_2(n) = (n - 1) + c_2 \\
T_2(n - 1) = (n - 2) + 2 \cdot c_2 \\
T_2(n - 2) = (n - 4) + 4 \cdot c_2 \\
\dots \\
T_2(n - k) = (n - 2 \cdot k) + 2 \cdot k \cdot c_2
\end{array}$$Ora troviamo il punto dove questa iterazione termina, ovvero quando $n - k = 1$. Questo si ha per $k = n - 1$. Sostituiamo quindi questo valore trovato nella formula generalizzata dell'iterazione per trovare l'interruzione:$$T_2(n - n + 1) = (n - 2 \cdot (n - 1)) + 2 \cdot (n - 1) \cdot c_2$$che semplificando risulta: $T_2(1) = -n + 2 + 2 \cdot (n - 1) \cdot c_2$. Ovviamente non dobbiamo risolvere tale equazione, basta notare quali siano i termini dominanti, una volta rimosse eventuali costanti additive e moltiplicative. In questo caso si ha quindi $T_2 \in \cal O(n)$, in quanto $n$ è il termine con grado maggiore.
Ora continuiamo con $\text{Mistery1}:$$$T_1(n) = \begin{cases}1 & n \leq 1 \\ T_1(\frac{n}{2}) + n & n \gt 1\end{cases}$$che risulta risolvibile con il $\text{Master Theorem}:$
- $a = 1;$
- $b = 2;$
- $\alpha = \log_2{1} = 0;$
- $\beta = 1;$

da cui $\beta \gt \alpha \rightarrow T_1(n) = \cal O(n)$.
### Esercizio 5 - Analisi di un algoritmo misto
Calcolare il costo computazionale $T(n)$ del seguente algoritmo $\text{Mystery1}$(int $n):$
![[Pasted image 20250621182431.png]]
#### Esercizio 5 - Soluzione
Partendo da $\text{mistery2}$, scriviamo:$$T_2(n) = \begin{cases}1 & n \leq 1 \\ 2 \cdot T_2(\frac{n}{3}) + n & n \gt 1\end{cases}$$che con il $\text{Master Theorem}$ risulta: $\cal O(n)$.
Ora calcoliamo $\text{mistery1}$ iterativamente (si tratta di un loop e due chiamate a $\text{mistery2}$):
- ad ogni iterazione $i$ aumenta di $2$, si ha quindi costo logaritmico;
- per ogni iterazione si effettuano due chiamate a $\text{mistery2}$;

$T_1$ sarà quindi pari a $\cal O(\log_2{n} \cdot n)$.
### Esercizio 6 - Analisi del costo di un algoritmo misto
Calcolare il costo computazionale $T(n)$ del seguente algoritmo $\text{Mystery1}$(int $n):$
![[Pasted image 20250621183549.png]]
> ✅ Corretto!
#### Esercizio 6 - Soluzione
Partiamo da $T_2:$$$T_2(n) = \begin{cases}1 & n \leq 1 \\ 2 \cdot T_2(\frac{n}{3}) + n & n \gt 1\end{cases}$$che con il $\text{Master Theorem}$ risulta: $\cal O(n)$.
Ora calcoliamo $T_1:$$$T_1(n) = \begin{cases}1 & n \leq 1 \\ 3 \cdot T_1(\frac{n}{4}) + \colorbox{yellow}{n} \cdot n & n \gt 1\end{cases}$$
che con il $\text{Master Theorem}$ risulta $\cal O(n^2)$.
> **N.B.** si ha $\colorbox{yellow}{n}$ invece di $\log_2{n}$ perché a differenza di quanto accadeva nell'[[Esempi di esercizi d'esame con soluzione#Esercizio 5 - Analisi di un algoritmo misto|quinto esercizio]], qui si ha una somma ($i + 2$ invece che $i \cdot 2$): questo non dimezza le esecuzioni, si tratta il $+2$ come una semplice costante additiva. Ergo il costo del ciclo equivale ad $\cal O(n)$.

### Esercizio 10 - Analisi del costo di algoritmo con Heap Binario
Calcolare il costo computazionale $T(n)$ del seguente algoritmo $\text{Mystery1}$(int $A[1, \dots, n]):$
![[Pasted image 20250621185326.png]]
> ✅ Corretto!
#### Esercizio 10 - Soluzione
Ogni operazione in un [[Strutture dati#Heap|Heap Binario]] ha costo costante, meno l'inserimento e la rimozione di un valore. Queste ultime hanno costo $\cal O(h), h = \log{n}$, in quanto si basano su $\text{Heapify}$ per ripristinare le proprietà dell'$\text{Heap}$ dopo un'operazione.
Questo algoritmo avrà quindi costo pari a:
- il costo del ciclo while. Questo non sarà banalmente una moltiplicazione tra due logaritmi, in quanto l'altezza dell'Heap aumenta ad ogni iterazione. Si tratterà quindi di una sommatoria di $\log_2{n}$ termini, i quali partono da $\log_2{1}$ e arrivano fino a $\log_2{n}$. Una sommatoria tra logaritmi si può semplificare in un prodotto di logaritmi, della forma: $\log_2{(\log_2{n}!)}$;
- il costo del ciclo for, anch'esso equivalente ad una sommatoria tra logaritmi (letteralmente lo scorso ciclo ma al contrario).

La somma tra $\cal O(\log_2{(\log_2{n}!)})$ e $\cal O(\log_2{(\log_2{n}!)})$ equivale a $\cal O(\log_2{(\log_2{n}!)})$.
### Esercizio 12 - Analisi del costo di algoritmo con struttura UF QuickFind
Calcolare il costo computazionale $T(n)$ del seguente algoritmo $\text{Mystery1}:$
![[Pasted image 20250621193243.png]]
> ✅ Corretto!
#### Esercizio 12 - Soluzione
Creare un set ha costo costante. Il primo ciclo for ha quindi costo pari a $\cal O(n)$. Nel while invece si uniscono tra loro insiemi con un numero di figli che aumenta ad ogni iterazione, con al massimo $n$ figli (nel caso peggiore), eseguito un totale di $\log_2{n}$ volte ($u$ raddoppia ogni iterazione). Questo significherà avere un ciclo con costo pari a $\cal O(n \cdot \log_2{n})$. L'algoritmo avrà quindi nel complesso costo pari a $\cal O(n) + O(n \cdot \log_2{n})$, ovvero $\cal O(n \cdot \log_2{n})$.
### Esercizio 13 - Analisi del costo di algoritmo con struttura UF QuickFind
Calcolare il costo computazionale $T(n)$ del seguente algoritmo $\text{Mystery1}:$
![[Pasted image 20250621195308.png]]
> ✅ Corretto!
#### Esercizio 13 - Soluzione
Il costo del ciclo for sarebbe $\cal O(n)$, mentre il costo del ciclo while sarebbe $\log_4{n} \cdot n$. Il costo complessivo dell'algoritmo sarebbe quindi $\cal O(\log_4{n} \cdot n)$.
## Strutture Dati
### Esercizio 1 - Visualizzazione di una tabella hash
Si consideri una tabella hash di dimensione $m = 7$ inizialmente vuota. Le collisioni sono gestite mediante indirizzamento aperto usando la seguente funzione hash $h(k):$$$\begin{array}{c}h(k) = (h'(k) + 3i) \ mod \ m \\ h'(k) = k \ mod \ m\end{array}$$Si mostri il contenuto della tabella e il fattore di carico dopo ognuna delle seguenti operazioni, eseguite in ordine: $\text{INS}(17), \text{INS}(4), \text{INS}(10), \text{INS}(25), \text{INS}(46), \text{DEL}(17), \text{INS}(11), \text{DEL}(25), \text{INS}(39)$.
> ✅ Corretto!
#### Esercizio 1 - Soluzione
![[Pasted image 20250621212859.png]]
### Esercizio 2 - Uguaglianza tra alberi binari
Scrivere un algoritmo che prende in input due alberi binari $T_1$ e $T_2$ e restituisce $\text{true}$ se i due sono identici, cioè se hanno la stessa struttura e valori uguali in posizioni corrispondenti (radici uguali, figlio sinistro della radice di $T_1$ uguale al figlio sinistro della radice di $T_2$, figlio destro della radice di $T_1$ uguale al figlio destro della radice di $T_2$, e così via).
L’algoritmo restituisce $\text{false}$ in caso contrario.
> ✅ Corretto!
#### Esercizio 2 - Soluzione
Con una funzione ricorsiva visitiamo tutto l'albero e ritorniamo $\text{false}$ quando un nodo è NIL e l'altro no. Se entrambi sono NIL, ritorno $\text{true}$. Altrimenti controllo il valore di entrambi i nodi ricevuti in input, il sottoalbero sinistro e quello destro (ai casi limite delle foglie ci pensano i check precedenti).
```pseudocodice
function AreEquals(Tree T1, Tree T2) -> Boolean
	return CompareTrees(T1.head, T2.head)

function CompareTrees(Node n1, Node n2) -> Boolean
	if n1 == NIL ^ n2 == NIL // xor
		return false
	else if n1 == NIL && n2 == NIL
		return true
	else
		return (n1.value == n2.value)
			&& CompareTrees(n1.left, n2.left)
			&& CompareTrees(n1.right, n2.right)
```
### Esercizio 3 - Numero di livelli con quantità di elementi pari
Si scriva un algoritmo che, preso in input un albero $n-$ario $T$, conti quanti sono i livelli di questo con un numero di nodi pari.
> ✅ Corretto!
#### Esercizio 3 - Soluzione
Per visitare i livelli di un albero si usa la visita $\text{BFS}$, con una $\text{Queue}$. Teniamo tre contatori:
- uno per la quantità di livelli con numero di elementi pari;
- uno per la quantità di elementi figli dei nodi del livello corrente;
- uno per la quantità di elementi inseriti per livello (e quindi su cui iterare prima di cambiare livello).

L'ultimo partirà da $1$ in quanto il livello della $\text{head}$ avrà sempre un numero di elementi pari a $1$.
```pseudocodice
function ContaLivelli(Tree T)
	let Q be a new Queue
	total = 0 // numero di livelli con numero di elementi pari
	currLevel = 0 // figli dei nodi del livello corrente
	prevLevel = 1 // il currLevel al termine di ogni loop
	if T.head != NIL
		enqueue(Q, T.head)
	while !Q.empty()
		// dal primo nodo del livello all'ultimo
		for i = 0, ..., prevLevel
			n = dequeue(Q)
			temp = n.first
			while temp != NIL
				currLevel += 1 // + un figlio ...
				enqueue(Q, temp)
				temp = temp.next
		if currLevel % 2 == 0
			total += 1
		prevLevel = currLevel
		currLevel = 0
	return total
```
### Esercizio 4 - Nodi a profondità k-esima
Scrivere un algoritmo che prende in input un albero binario $T$ e un intero positivo $k$ e calcola il numero di nodi che si trovano esattamente a profondità $k$ (nota: la radice si trova a profondità zero).
Discutere il costo computazionale nel caso pessimo e ottimo.
> ✅ Corretto!
#### Esercizio 4 - Soluzione
Per la profondità serve la visita $\text{BFS}$ con $\text{Queue}$ ausiliaria. Teniamo un contatore dei livelli attraverso cui controllare se ci troviamo nel $k-$esimo livello. Per ogni nodo, aggiungiamo i suoi figli alla coda.
```pseudocodice
function NodiLivelloK(Tree T, Int k) -> Int
	livello = 0
	amount = 0
	nodiProssimo = 0
	nodiCurrent = 0
	let Q be a new Queue
	if T.head != NIL
		enqueue(Q, T.head)
		nodiCurrent += 1
	while !Q.isEmpty()
		if livello == k
			return nodiCurrent
		for i = 0, ..., nodiCurrent
			n = dequeue(Q)
			if n.left != NIL
				enqueue(Q, n.left)
				nodiProssimo += 1
			if n.right != NIL
				enqueue(Q, n.right)
				nodiProssimo += 1
		nodiCurrent = nodiProssimo
		nodiProssimo = 0
		livello += 1
	return -1
```
Nel caso migliore (ovvero quello in cui si ha $k = 0$), la funzione entra appena nel ciclo while per ritornare immediatamente. Si ha quindi costo costante.
Nel caso peggiore (ovvero quello in cui si ha $k = \log_2{n}$), la funzione visita tutto l'albero ed esegue quindi $n$ iterazioni. Si ha quindi costo pari a $\cal O(n)$.
### Esercizio 6 - Rimuovere da una lista gli elementi di un'altra
Si scriva una procedura che, date due liste concatenate monodirezionali, $L_1$ e $L_2$, contenenti interi ordinati dal più piccolo al più grande, rimuova da $L_1$ tutti gli interi che appaiono in $L_2$ (senza modificare $L_2$).
Discutere il costo computazione dell'algoritmo nel caso migliore ed in quello peggiore.
> ✅ Corretto!
#### Esercizio 6 - Soluzione
Dovremo iterare su $L_2$ e soffermarci su ogni suo elemento $l_2$. Per ognuno di questi dovremo infatti iterare su $L_1$ fino a trovare un elemento $l_1 \geq l_2$. Ora avremo due casi:
- $l_1 = l_2$, rimuovo $l_1$ e aggiorno la lista;
- $l_1 \gt l_2$, ho superato il mio punto di riferimento e devo quindi smettere di iterare su $L_1$ e passare all'elemento successivo di $L_2$.

La funzione dovrà ritornare la head della nuova lista $L_1$.
```pseudocodice
function RimozioneDueListe(List L1, List L2)
	if L1.head == NIL || L2.head == NIL
		return L1.head
	temp = NIL
	prev1 = L1.head
	iter1 = L1.head
	iter2 = L2.head
	while iter2 != NIL
		while iter1 != NIL && iter1.value <= iter2.value
			if iter1.value == iter2.value
				if iter1 == prev // son nella head
					// libero memoria item corrente e imposto nuova head
				// libero memoria item corrente cambiando i puntatori del prev
			iter1 = iter1.next 
		iter2 = iter2.next
	return L1.head
```
Nel caso migliore si ha o $L_1$ oppure $L_2$ vuote e si ritorna immediatamente. Si ha quindi costo costante.
Nel caso peggiore occorre iterare su tutta $L_2$ e tutta $L_1$, avendo quindi costo pari a $O(n + m)$, dove $n$ corrisponde alla lunghezza della lista $L_1$ ed $m$ a quella della lista $L_2$.
### Esercizio 9 - k-esimo elemento più piccolo di un BST
Si scriva un algoritmo che preso in input un albero binario di ricerca $T$ contenente chiavi intere non ripetute ed un intero $k \geq 1$, ritorni il $k-$esimo intero più piccolo contenuto nell’albero. Se $T$ contiene meno di $k$ chiavi, l’algoritmo ritorna $\text{NA}$ (costante che indica valore non disponibile).
Discutere il costo computazionale della soluzione proposta.
> ✅ Corretto!
#### Esercizio 9 - Soluzione
In un $\text{BST}$ l'item minore si trova a sinistra. Visitiamo $k$ nodi a sinistra e ritorniamo il valore attuale. Se non ci sono $k$ nodi ritorniamo $\text{NA}$.
```pseudocodice
function MinoreKesimo(Tree T, Int k) -> Int
	count = 0
	if T.head == NIL
		return NA
	iter = T.head
	count += 1
	while iter != NIL
		if count == k
			return iter.value
		iter = iter.left
		count += 1
	return NA
```
Nel caso migliore si ha un albero vuoto, quindi si ritorna subito e si ha costo costante.
Nel caso peggiore si effettuano $k$ visite sull'albero, quindi si ha complessità pari a $\cal O(k)$.
### Esercizio 10 - Albero perfetto
Si scriva un algoritmo che preso in input un albero binario $T$ ritorni $\text{TRUE}$ se $T$ è perfetto e $\text{FALSE}$ in caso contrario.
Discutere il costo computazionale della soluzione proposta.
> ✅ Corretto!
#### Esercizio 10 - Soluzione
Dovremo controllare che ogni nodo, meno le foglie, abbiano due figli. Le foglie dovranno essere tutte allo stesso livello (giunti al primo nodo senza figli dovremo salvare il livello corrente per controllare che siano tutte contenuto nello stesso livello).
Visitiamo quindi l'albero con $\text{BFS}$.
```pseudocodice
function IsPerfect(Tree T)
	leafLevel = -1
	livello = 0
	nodiCurr = 0
	nodiProx = 0
	let Q be a new Queue
	if T.head == NIL
		return true
	enqueue(Q, T.head)
	nodiCurr += 1
	while !Q.isEmpty()
		for i = 0, ..., nodiCurr
			n = dequeue(Q)
			if isLeaf(n)
				if leafLevel == -1
					leafLevel = livello
				else if leafLevel != livello
					return false
			else if n.left == NIL ^ n.right == NIL
				return false
			else
				enqueue(Q, n.left)
				enqueue(Q, n.right)
				nodiProx += 2
		livello += 1
		nodiCurr = nodiProx
		nodiProx = 0
	return true
```
Nel caso migliore si ha un albero vuoto, quindi la funzione ritorna immediatamente e si ha costo costante.
Nel caso peggiore, la funzione deve iterare su tutti gli elementi dell'albero, quindi si ha costo pari a $\cal O(n)$.
### Esercizio 13 - Rimozione di un elemento a metà di una lista, senza iterare due volte
Scrivere un algoritmo che, data in input una lista concatenata monodirezionale $L$, rimuova l’elemento nel suo mezzo senza effettuare due scansioni su di essa. Se $L$ ha un numero pari $n$ di elementi, è possibile scegliere di rimuovere o l’elemento $\frac{n}{2}$ oppure l’elemento $\frac{n}{2} + 1$.
> ✅ Corretto!
#### Esercizio 13 - Soluzione
Per non iterare due volte su $L$ dovremo usare due puntatori: uno che si sposta di un elemento alla volta ed uno che si sposta di due. In questo modo il secondo si muoverà al doppio della velocità del primo: questo significa che, una volta arrivato al termine della lista, il primo si troverà a metà di essa.
```pseudocodice
function EliminaCentrale(List L)
	if L.head == NIL
		return NIL
	prev = NIL
	slow = L.head
	fast = L.head
	while fast != NIL
		prev = slow
		slow = slow.next
		fast = fast.next.next
	// arrivati qui in slow si ha l'elemento centrale di L
	// gestisci eventuale deallocazione della memoria con caso a parte per head
	return L.head
```
## Esercizi su Tecniche Algoritmiche