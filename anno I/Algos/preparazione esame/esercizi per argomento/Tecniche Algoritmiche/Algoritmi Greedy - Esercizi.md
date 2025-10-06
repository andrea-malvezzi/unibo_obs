1. [[Algoritmi Greedy - Esercizi#Esercizio 1 - Viaggio in auto|Esercizio 1 - Viaggio in auto]]
	1. [[Algoritmi Greedy - Esercizi#Esercizio 1 - Soluzione|Soluzione]]
2. [[Algoritmi Greedy - Esercizi#Esercizio 2 - Taglio di un tubo metallico|Esercizio 2 - Taglio di un tubo metallico]]
	1. [[Algoritmi Greedy - Esercizi#Esercizio 2 - Soluzione|Soluzione]]
3. [[Algoritmi Greedy - Esercizi#Esercizio 3 - Punti neri e punti bianchi (ignoralo, fatto col culo)|Esercizio 3 - Punti neri e punti bianchi (incorretto)]]
	1. [[Algoritmi Greedy - Esercizi#Esercizio 3 - Soluzione|Soluzione]]
4. [[Algoritmi Greedy - Esercizi#Esercizio 4 - Algoritmo di Huffman|Esercizio 4 - Algoritmo di Huffman]]
	1. [[Algoritmi Greedy - Esercizi#Esercizio 4 - Soluzione|Soluzione]]
## Esercizio 1 - Viaggio in auto
Un'auto può percorrere $k$ Km con un litro di carburante, e il serbatoio ha una capacità di $c$ litri. Tale auto deve percorrere un tragitto lungo il quale si trovano $n + 1$ aree di sosta indicate con $0, \dots, n$ con $n \geq 1$. L’area di sosta $0$ si trova all’inizio della strada, mentre l’area di sosta $n$ si trova alla fine.
Indichiamo con $d[i]$ la distanza in Km tra le aree di sosta $i$ e $i + 1$. Nelle $n − 2$ aree di sosta intermedie si trovano delle stazioni di servizio nelle quali è possibile fare il pieno.
- Tutte le distanze e i valori di $k$ e $c$ sono numeri reali positivi; 
- la auto parte dall’area $0$ con il serbatoio pieno, e si sposta lungo la strada in direzione dell’area $n$ senza mai tornare indietro. 
Progettare un algoritmo in grado di calcolare il numero minimo di fermate che sono necessarie per fare il pieno e raggiungere l’area di servizio $n$ senza restare a secco per strada, se ciò è possibile. Nel caso in cui la destinazione non sia in alcun modo raggiungibile senza restare senza carburante, l’algoritmo restituisce $−1$.
### Esercizio 1 - Soluzione
Teniamo un contatore $f$ delle fermate per fare carburante ed uno $\text{dist}$ pari a $k \cdot c$, per la distanza percorribile con il carburante rimanente. Ad ogni fermata verifichiamo che $\text{dist}$ sia abbastanza per arrivare alla prossima fermata:
- se non è abbastanza, aggiungiamo uno ad $f$ e resettiamo $\text{dist}$;
- se è abbastanza, non dobbiamo fare nulla. Basta proseguire normalmente (sottrarre la distanza andrebbe fatto comunque);

Al termine dell'$\text{if}$ precedente sottraiamo la distanza da $\text{dist}$ per "muovere l'auto" alla prossima stazione. Qualora $\text{dist}$ diventi minore di $0$ a seguito dello spostamento, non sarà possibile arrivare alla prossima stazione (ritorniamo quindi $-1$).
```pseudocodice
function Viaggio(int[] A, int k, int c, int n) -> int
	dist = k*c
	f = 0
	for i = 1, ..., n
		if A[i] > dist
			f += 1
			dist = k*c
		dist -= A[i]
		if dist < 0
			return -1
	return f
	
```
## Esercizio 2 - Taglio di un tubo metallico
Disponiamo di un tubo metallico di lunghezza $l$. Da questo tubo vogliamo ottenere al più $n$ tubi più corti, aventi rispettivamente lunghezza $T[1], \dots T[n]$. Il tubo viene segato sempre a partire da una delle due estremità, quindi ogni taglio riduce la lunghezza del tubo iniziale della misura del tubo $T[i]$ appena tagliato.
Scrivere un algoritmo efficiente per determinare il numero massimo di tubi che è possibile ottenere. Formalmente, tra tutti i sottoinsiemi degli $n$ tubi la cui lunghezza complessiva sia minore o uguale a $l$, vogliamo determinarne uno con il numero massimo di elementi e restituirne la cardinalità.
### Esercizio 2 - Soluzione
Per ottenere il numero massimo di tubi a partire dal tubo di lunghezza $l$, occorrerà tagliare per ricavare prima i tubi più corti: questo significa ordinare l'array delle lunghezze in ordine crescente.
In seguito basterà iterare su questo array diminuendo la lunghezza ogni volta. Questo algoritmo avrà complessità pari ad $\cal O(n \log{n})$ in quanto si tratterebbe di un sort (per cui useremo un $\text{MergeSort}$, con complessità pari a $\cal O(n\log{n})$ e di una iterazione su $n$ elementi (complessità pari ad $\cal O(n)$).
```pseudocodice
function Taglia(int[] A, int l, int n) -> int
	i = 1
	MergeSort(A)
	while i <= n && l >= A[i]
	for i = 1, ..., n
		l -= A[i]
		i += 1
	return i - 1
```
## Esercizio 3 - Punti neri e punti bianchi (ignoralo, fatto col culo)
Lungo una linea, a distanze costanti (che per comodità indichiamo con distanza $1$), sono presenti $2n$ punti, $n$ dei quali neri ed $n$ bianchi. È necessario collegare ogni punto nero ad un corrispondente punto bianco tramite fili; ad ogni punto deve essere collegato uno ed un solo filo.
Scrivere un algoritmo efficiente che stampi la quantità minima di filo necessaria. La distribuzione dei punti bianchi e neri viene passata all’algoritmo sotto forma di un array $p[1, \dots, 2n]$ di booleani: se $p[i]$ è $\text{true}$ allora in posizione $i$ c'è un punto bianco, altrimenti se $p[i]$ è $\text{false}$ allora in posizione $i$ c'è un punto nero.
### Esercizio 3 - Soluzione
Teniamo due indici $i_b$ ed $i_n$ per l'ultima posizione usata rispettivamente per i puntini bianchi e per i puntini neri.
Iniziamo ad iterare con un $i$ generico e nel caso in cui $p[i]$ sia bianco, aggiungiamo $1$ a $p_b$ e cerchiamo un puntino a partire da $p_n$, poi facciamo la differenza tra il maggiore ed il minore tra i due (e viceversa per prima puntino nero e poi puntino bianco).
Questo metodo risulta ottimale rispetto ad un algoritmo che sceglie di partire dal fondo per cercare una coppia andando poi a chiudere al centro, in quanto evita sprechi di filo.
```pseudocodice
function Punti(bool[] p, int n) -> int
	coppie = 0
	total = 0
	pb = pn = 0
	i = 1
	while i < n && coppie != (n/2)
		// i-esimo punto bianco con i maggiore dell'ultimo punto bianco usato
		if p[i] && pb < i
			// ultimo punto bianco usato in posizione i
			pb = i
			// parto dall'ultimo punto nero (+1) e vado avanti
			for j = pn + 1, ..., n
				// punto nero j-esimo
				if !p[j]
					// aggiungo il filo al totale (partenza - arrivo - 1 (offset))
					total += j - pb - 1
					// ultimo punto nero usato in posizione j
					pn = j
					// aumento il counter delle coppie
					coppie += 1
					break
		// i-esimo punto nero con i maggiore dell'ultimo punto nero usato  
		if !p[i] && pn < i
			// ultimo punto nero usato in posizione i
			pn = i
			// parto dall'ultimo punto bianco (+1) e vado avanti
			for j = pb + 1, ..., n
				// punto bianco j-esimo
				if !p[j]
					// aggiungo il filo al totale (partenza - arrivo - 1 (offset))
					total += j - pn - 1
					// ultimo punto bianco usato in posizione j
					pb = j
					// aumento il counter delle coppie
					coppie += 1
					break
	return total
```
## Esercizio 4 - Algoritmo di Huffman
Si consideri l’esecuzione dell’$\text{algoritmo di Huffman}$ a partire da un documento da codificare che contiene solo le lettere $\text{i, j, k, x, y}$ e $\text{z}$ con le seguenti frequenze:
- $\text{i} \rightarrow 21 \%$;
- $\text{j} \rightarrow 8\%$;
- $\text{k} \rightarrow 7 \%$;
- $\text{x} \rightarrow 42\%$;
- $\text{y} \rightarrow 10\%$;
- $\text{z} \rightarrow 12\%$.

Descrivere passo passo la creazione dell’albero binario che rappresenta la codifica di Huffman per questo documento.
### Esercizio 4 - Soluzione
Anzitutto creiamo i nodi corrispondenti ad ogni simbolo, inserendo in essi il simbolo correlato e la frequenza di esso.
Poi creiamo una Priority Queue come da definizione dell'algoritmo: in essa dovremo inserire i nodi ordinati per frequenza.
Estraiamo ora i due nodi con frequenza più bassa dalla coda. Creiamo un nuovo nodo padre con valore la somma delle due frequenze appena estratte e come figli due nodi contenenti ognuno un simbolo di quelli appena estratti.
Inseriamo il nuovo nodo padre nella Priority Queue e ripetiamo fino ad avere un solo nodo.
Una volta ottenuto l'albero, assegniamo il valore $1$ agli archi per scendere a destra a partire dalla radice e $0$ a quelli per scendere a sinistra. Il valore di ogni simbolo sarà quindi una sequenza di $1$ e di $0$.
![[Pasted image 20250610162555.png]]quindi:
- $\text{i} = 111$;
- $\text{j} = 1101$;
- $\text{k} = 1100$;
- $\text{x} = 0$;
- $\text{y} = 100$;
- $\text{z} = 101$.