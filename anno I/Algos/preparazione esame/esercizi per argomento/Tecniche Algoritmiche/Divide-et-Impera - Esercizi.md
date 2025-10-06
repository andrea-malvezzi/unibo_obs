1. [[Divide-et-Impera - Esercizi#Esercizio 1 - Elemento i-esimo con valore pari ad i in un Array|Esercizio 1 - Elemento i-esimo con valore pari ad i in un Array]]
	1. [[Divide-et-Impera - Esercizi#Esercizio 1 - Soluzione|Soluzione]]
2. [[Divide-et-Impera - Esercizi#Esercizio 2 - Elementi di un array in un certo intervallo|Esercizio 2 - Elementi di un array in un certo intervallo]]
	1. [[Divide-et-Impera - Esercizi#Esercizio 2 - Soluzione|Soluzione]]
## Esercizio 1 - Elemento i-esimo con valore pari ad i in un Array
Si consideri un array $A = [1, \dots, n]$ composto da $n \geq 1$ interi (negativi oppure positivi) distinti ed ordinati in senso crescente. Scrivere un algoritmo efficiente che, dato in input l’array $A$, determina un indice $i$, se esiste, tale che $A[i] = i$.
Nel caso esistano più indici che soddisfano la relazione precedente, è sufficiente restituirne uno qualsiasi.
Determinare il costo computazionale dell’algoritmo.
### Esercizio 1 - Soluzione
Ogni chiamata lavorerà sull'i-esimo elemento dell'array e sarà necessario chiamare ricorsivamente la funzione passando l'array, un indice $i = i + 1$ ed una lunghezza $j = j - 1$ ad ogni chiamata.
```pseudocodice
function CheckElem(Int[] A, int i, int j)
	// j = length array
	if (i > j)
		return -1
	if (A[i] = i)
		return i
	else
		return CheckElem(A, i+1, j-1)
```
Questa implementazione avrebbe costo pari ad $\cal O(n)$ e risolverebbe il problema: tuttavia esiste una soluzione più efficiente.
Troviamo il valore mediano (sfruttando il fatto che $A$ sia ordinato) e muoviamoci in un verso o nell'altro a seconda di se questo valore sia $\gt i$ oppure $\lt i$.
Il costo sarà ora pari a $\cal O(\log{n})$, in quanto ad ogni chiamata si dimezzerà l'array.
```pseudocodice
function CheckElem(Int[] A, int i, int j)
	if (i > j)
		return -1
	m = Math.Floor((i + j) / 2)
	if (A[m] = m)
		return m
	else if (A[m] > i)
		return CheckElem(A, i, m-1)
	else
		return CheckElem(A, m+1, j)
```
## Esercizio 2 - Elementi di un array in un certo intervallo
Si consideri un array $A[1, \dots, n]$ contenente valori reali ordinati in senso crescente. L’array potrebbe contenere duplicati. Scrivere un algoritmo ricorsivo di tipo divide-et-impera che, dato $A$ e due valori reali $\text{low} \lt \text{up}$, calcola quanti valori di $A$ appartengono all’intervallo $[\text{low}, \text{up}]$.
Determinare il costo computazionale dell’algoritmo proposto.
### Esercizio 2 - Soluzione
Anzitutto controlliamo che gli estremi di $A$ non siano compresi nell'intervallo: nel caso in cui lo fossero, tutto l'array sarebbe compreso in $[\text{low}, \text{up}]$.
Se così non fosse sarebbe necessario trovare il valore mediano, controllare che esso non sia esattamente $\text{low}$ o $\text{up}$ e controllare ogni metà dell'array per poi sommare i valori di ognuna di queste.
> Se la soluzione non chiedessi un algoritmo ricorsivo, si potrebbe pensare di trovare il punto in cui gli elementi comincino ad essere compresi nell'intervallo e poi quello in cui superano la soglia imposta con $\text{up}$.
```pseudocodice
function HowMany(Int[] A, int low, int up, int i, int j)
	// i - current index
	// j - array length
	if (i > j)
		return 0
	if A[i] <= low && A[j] >= up
		return j
	else if A[i] > low || A[j] < up
		return 0
	else
		m = Math.Floor((i + j) / 2)
		return HowMany(A, low, up, i, m - 1) + HowMany(A, low, up, m + 1, j)
```
Trattandosi (nel caso peggiore) di un dimezzamento dell'array per chiamata, la funzione avrà costo pari a $\cal O(\log{n})$.