1. [[Algoritmi di Ordinamento - Esercizi#Esercizio 1 - CountingSort e MergeSort|Esercizio 1 - CountingSort e MergeSort]]
	1. [[Algoritmi di Ordinamento - Esercizi#Esercizio 1 - soluzione|Soluzione]]
2. [[Algoritmi di Ordinamento - Esercizi#Esercizio 2 - Oggetti più costosi in un array|Esercizio 2 - Oggetti più costosi in un array]]
	1. [[Algoritmi di Ordinamento - Esercizi#Esercizio 2 - soluzione|Soluzione]]
3. [[Algoritmi di Ordinamento - Esercizi#Esercizio 3 - MergeSort modificato|Esercizio 3 - MergeSort modificato]]
	1. [[Algoritmi di Ordinamento - Esercizi#Esercizio 3 - soluzione|Soluzione]]
4. 
## Esercizio 1 - CountingSort e MergeSort
Consideriamo un array $A$ con n elementi nell'intervallo $[1, \dots, k]$.
Analizzare il costo nel caso pessimo per ordinare $A$ con $\text{mergesort}$ e $\text{countingsort}$ quando:
- $k = O(1)$;
- $k = Θ(\log{n})$;
- $k = Θ(n)$;
- $k = Θ(n^2)$

Quale algoritmo sceglieremmo tra i due proposti, conoscendo il valore asintotico di $k$?
### Esercizio 1 - soluzione
Il costo del $\text{MergeSort}$ risulta indipendente da $k$, in quanto dipende dal numero di elementi in $A$. Il costo di questo algoritmo sarà quindi in ogni caso $\Theta(n \log{n})$.
Il costo del $\text{CountingSort}$ dipende invece da $k$ e per i primi $3$ casi sarà inferiore di quello del primo algoritmo. Invece per $k = \Theta(n^2)$ si avrà costo $\Theta(n^2)$, mentre il $\text{MergeSort}$ avrà costo pari a $\Theta(n \log{n})$.
## Esercizio 2 - Oggetti più costosi in un array
Dobbiamo cercare i $k$ oggetti più costosi in una lista non ordinata contenente $n$ oggetti.
Ideare due algoritmi per risolvere tale problema.
Assumendo che l’algoritmo prenda in input un array di lunghezza $n$ e posizioni i $k$ valori più grandi in $A$ nelle prime $k$ posizioni dell’array (non necessariamente ordinandoli).
Indicare qual è l'algoritmo più efficiente (nel caso pessimo) quando:
- $k = O(1)$
- $k = \Theta(\log{n})$
- $k = \Theta(n)$
### Esercizio 2 - soluzione
Avendo $k$ che varia, conviene usare il $\text{MergeSort}$, in quanto il suo costo nel caso peggiore risulta il minore tra gli algoritmi di sorting conosciuti che non variano il loro costo in base a $k$.
Semplicemente invertiamo il criterio: invece che in ordine crescente, ordiniamo in ordine decrescente: il costo sarà quindi pari a $O(n \log{n})$.
Per il secondo algoritmo, potremmo semplicemente cercare i valori maggiori e inserirli nelle prime posizioni, tramite una ricerca lineare:
```pseudocodice
function TopK(int[] A, int k, int length)
	if (k > length) return NIL

	for i = 0, ..., k-1
		int z = Max(A, i, length-1) // da A[i] a A[length-1]
		swap(A[i], z)
```
che avrà costo pari a:
$$\Theta\left(\sum_{i = 0}^{k - 1}{(n-i)}\right) = \Theta\left(n \cdot k - \sum_{i = 0}^{k - 1}{i}\right) = O(n \cdot k)$$
> Nel secondo passaggio ho tirato fuori la costante $n$ (la $\text{length}$ dell'algoritmo) accontando del fatto che tale costante verrà ripetuta $k$ volte nella sommatoria, a causa del ciclo $\text{for}$.
> Il meno deriva dal fatto che l'operazione di "portare fuori" sia in realtà uno spezzare la sommatoria in due sommatorie, come accadeva negli integrali. Il segno rimane in mezzo in quanto rispetto la struttura dell'operazione originale all'interno della sommatoria originale.
> 

Questo algoritmo risulterà quindi più efficiente del $\text{MergeSort}$ per $k$ piccoli, ovvero per il primo caso.
Per il secondo i due algoritmi proposti saranno equivalenti, mentre per l'ultimo sarà più efficiente il $\text{MergeSort}$.
## Esercizio 3 - MergeSort modificato
Consideriamo la seguente variante di $\text{MergeSort}$:
- dividiamo l’array $A$ in tre sotto array di uguale lunghezza: $A_1, A_2, A_3$;
- richiamiamo ricorsivamente l’algoritmo su $A_1, A_2, A_3$;
- eseguiamo il $\text{merge}$ tra $A_1$ e $A_2$ e poi tra l’array ottenuto da questa operazione ed $A_3$.

Questa variante risulta più o meno efficiente del $\text{MergeSort}$ originale?
### Esercizio 3 - soluzione
Avendo $3$ suddivisioni invece di $2$ e una lunghezza per array pari ad un terzo della lunghezza originale $n$, scriviamo l'equazione di ricorrenza del nuovo $\text{MergeSort}$ nella maniera seguente:$$T(n) = \begin{cases}1 & n \leq 1 \\ \colorbox{yellow}{3}T(\frac{n}{\colorbox{lightgreen}{3}}) + \colorbox{cyan}{n}& n \gt 1\end{cases}$$dove:
- $\colorbox{yellow}{}$ non è più $2$ in quanto si hanno ora $3$ divisioni;
- $\colorbox{lightgreen}{}$ non è più $2$ in quanto si hanno ora $3$ sotto array che devono essere lunghi uguale (ognuno sarà lungo $\frac{n}{3}$);
- $\colorbox{cyan}{}$ rimane $n$ in quanto dopo aver frammentato l'array originale in sotto array occorre comunque fare il merge su tutti ed $n$ gli elementi.

Risolvendo tale equazione ricaviamo il costo di $T(n) = \Theta(n \log{n})$.
Questo nuovo algoritmo avrà quindi la stessa complessità di calcolo **temporale** dell'originale, ma occuperà più spazio in memoria e risulterebbe meno intuitiva da analizzare (dal punto di vista del codice). Si preferisce quindi la versione originale.