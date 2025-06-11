1. [[Programmazione Dinamica - Esercizi#Esercizio 1 - Sottoinsieme di valori con somma pari ad x|Esercizio 1 - Sottoinsieme di valori con somma pari ad x]]
	1. [[Programmazione Dinamica - Esercizi#Esercizio 1 - Soluzione|Soluzione]]
2. [[Programmazione Dinamica - Esercizi#Esercizio 2 - Problema del resto generalizzato|Esercizio 2 - Problema del resto generalizzato]]
	1. [[Programmazione Dinamica - Esercizi#Esercizio 2 - Soluzione|Soluzione]]
3. [[Programmazione Dinamica - Esercizi#Esercizio 3 - Lunghezza massima di una sotto sequenza|Esercizio 3 - Lunghezza massima di una sotto sequenza]]
	1. [[Programmazione Dinamica - Esercizi#Esercizio 3 - Soluzione|Soluzione]]
## Esercizio 1 - Sottoinsieme di valori con somma pari ad x
È dato un insieme $S = \{s_1, \dots, s_n\}$ di $n$ numeri naturali ed un numero naturale $x$. Vogliamo capire se esiste un sottoinsieme di valori $V \subseteq S$ tale che la sommatoria dei valori in $V$ sia uguale a $x$, ovvero $\sum_{s∈V}{s = X}$.
### Esercizio 1 - Soluzione
Questo problema rientra nella famiglia dei problemi $P(i, j)$, dove $i \in \{0, \dots, n\}$ e $j \in \{0, \dots, x\}$ (ci possono essere al massimo $x$ elementi in un insieme $V$, dato che stiamo lavorando con numeri naturali).
Occorre quindi trovare un sottoinsieme $\{s_1, \dots, s_i\}$ con sommatoria $j$.
Per risolvere questo problema servirà procedere induttivamente rispetto ad $i:$ questo significa far variare il valore di questa variabile partendo da $i = 1$.$$P(1, j) = \begin{cases}\text{true} & se \ j = s_1 \vee j = 0 \\ \text{false} & alrimenti\end{cases}$$e generalizzando per $i \gt 1$:$$P(i, j) = \begin{cases}P(i - 1, j) & se \ s_i \gt j \\ P(i - 1, j) \vee P(i - 1, j - s_1) & altrimenti\end{cases}$$Per risolvere questi problemi generalmente si usa una matrice $R$ di dimensione $[1, \dots, n; 0, \dots, x]$ dove ogni cella $R[k; v]$ corrisponde alla soluzione di un sotto problema (in questo caso, a $\text{true}$ oppure a $\text{false}$).
Ora dobbiamo quindi rispondere alla domanda: quando un sotto problema risulta $\text{true}$?
Il sotto problema corrispondente alla cella $R[k; v]$ sarà $\text{true}$ se è possibile ottenere la somma $v$ usando **solo** i primi $k$ elementi dell'insieme $S$ fornito.
Per costruire la matrice si parte quindi da un caso base (solitamente ponendo una delle variabili pari ad $1$ e calcolandone il risultato, come nel nostro caso per $P(1, j)$) e si procede elemento per elemento paragonando $s_k$ con $v$: qualora si avesse $s_k \gt v$, non si potrebbe usare tale elemento, in quanto si sforerebbe. Occorrerebbe quindi vedere se si potrebbe usare l'elemento precedente, controllando quindi se $P(k-1; v)$ risulti $\text{true}$ o $\text{false}:$nel caso in cui risulti falso, allora si dovrà porre anche $P(k;v)$ pari a $\text{false}$, altrimenti procedere ponendolo $\text{true}$.
> **N.B.** questo significa che avendo un caso $P(k; v)$ $\text{true}$, allora si potrà propagare questo valore su tutta la colonna del sotto problema studiato, verso il basso (ogni volta si potrebbe controllare la combinazione precedente, che equivarrebbe a $\text{true}$.

```pseudocodice
function SubsetSum(int[1, ..., n] S, int x) -> Boolean
	let R be a int[n;x] // risultati
	
	// faccio tutta la prima riga (varia la j -> mi sposto in riga)
	// in questo modo posso fare P(i - 1, j) se P(i, j) non va bene
	for j = 0, ..., x
		R[1, j] = j == 0 || S[1] == j // evito due if-else
	
	// faccio tutto il resto della matrice
	// mi sposto in colonna
	for i = 2, ..., n
		// mi sposto in riga
		for j = 0, ..., x
			// qui non posso fare un solo caso, in quanto se
			// R[i] > j ho una sola soluzione. Saltando questa
			// distinzione potrei avere un valore true dove
			// dovrei avere false
			if R[i] > j
				R[i, j] = R[i - 1, j]
			else
				R[i, j] = R[i - 1, j] || R[i - 1, j - S[i]]
	return R[n, x]
```
Questo algoritmo avrà quindi complessità pari a $\cal O(n \cdot x)$ in quanto si avrà un loop nested lungo di $x$ iterazioni, ripetuto $n-1$ volte (ignorando la costante additiva ottengo $n$).
## Esercizio 2 - Problema del resto generalizzato
Si consideri il problema del resto nel caso generale, ovvero non assumendo di avere a disposizione monete di un sistema canonico. Più precisamente si deve stampare la combinazione con il numero minimo di monete, se esiste, per raggiungere il resto $r$ considerando come possibili valori delle monete quelli indicati nell’array di naturali $T[1, \dots, n]$.
### Esercizio 2 - Soluzione
![[Pasted image 20250611183930.png]]
## Esercizio 3 - Lunghezza massima di una sotto sequenza 
Dato un array di numeri $V[1, \dots, n]$, calcolare la lunghezza massima per una sotto sequenza crescente, ovvero il massimo $l$ tale che esistono $x_1, \dots , x_l$ con $x_i < x_{i+1}$ e $V [x_i] \leq V[x_{i+1}]$, per ogni $i \lt l$.
Si noti che una sotto sequenza contiene celle non obbligatoriamente contigue.
### Esercizio 3 - Soluzione
![[Pasted image 20250611183900.png]]