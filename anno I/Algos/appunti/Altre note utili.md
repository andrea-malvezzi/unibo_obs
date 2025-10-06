1. [[Altre note utili#Algoritmi di Ordinamento|Algoritmi di Ordinamento]]
	1. [[Altre note utili#SelectionSort - idea|Idea dietro al SelectionSort]]
	2. [[Altre note utili#InsertionSort - idea|Idea dietro all'InsertionSort]]
	3. [[Altre note utili#MergeSort - idea|Idea dietro al MergeSort]]
	4. [[Altre note utili#QuickSort - idea|Idea dietro al QuickSort]]
	5. [[Altre note utili#CountingSort - idea|Idea dietro al CountingSort]]
	6. [[Altre note utili#RadixSort - idea|Idea dietro al RadixSort]]
## Algoritmi di Ordinamento
![[Pasted image 20250605155305.png]]
> l'importante sono i costi degli algoritmi e le idee dietro ad essi (il concetto, non l'implementazione).
### SelectionSort - idea
Avendo un array $A = [7, 4, 5, 2]$, per ogni iterazione prendo l'elemento minore nell'intervallo da ordinare e lo sostituisco a quello corrente:
- $i = 0$:
	- minimo tra $[7, 4, 5, 2] = 2$
	- $A[i] = 7$
	- $\text{swap } 7$ con $2$
	- $A = [2, 4, 5, 7]$
- $i = 1$:
	- minimo tra $[4, 5, 7] = 4$
	- $A[i] = 4$
	- va avanti senza modificare $A$
- etc $\dots$
### InsertionSort - idea
Avendo un array $A = [5, 3, 4, 1]$, per ogni iterazione (partendo dal secondo elemento) posiziono l'item attuale nella corretta posizione nel lato sinistro dell'array:
- $i = 1$ (parto dal secondo elemento):
	- $A[i] = 3$
	- itero dall'inizio fino all'elemento prima dell'$i-$esimo
	- $5 \lt 3?$ no, $\text{swap } 5$ con $3$
	- $A = [3, 5, 4, 1]$
- $i = 2$:
	- $A[i] = 4$
	- itero dall'inizio
	- $3 \lt 4?$ sì, vado avanti
	- $5 \lt 4?$ no, $\text{swap } 5$ con $4$
	- $A = [3, 4, 5, 1]$
- etc $\dots$
### MergeSort - idea
Avendo un array $A = [5, 2, 4, 1]$, divido l'array ricorsivamente in $2$ metà, ed una volta finite le divisioni ricostruisco l'array originale ma in maniera ordinata unendo le divisioni ottenute nel modo corretto:
- divido $[5, 2, 4, 1]$ in $[5, 2]$ e $[4, 1]$;
- divido $[5, 2]$ in $[5], [2]$ e $[4, 1]$ in $[4], [1]$;
- Ora che ho sotto array di $1$ elemento ciascuno, creo un array con lunghezza pari alla somma delle lunghezze dei due e lo riempio gradualmente. Ad esempio, per $[5], [2]$ avrò un array lungo $2$ e ne avrò un altro per $[4, 1]$:
	- $5 < 2$? no, riempio prima con $2$ e poi con $5$
	- $4 < 1?$ no, riempio prima con $1$ e poi con $4$
- Ora ho due array lunghi $2$ da unire: creo un array lungo $4$ e lo riempio gradualmente:
	- $2 \lt 1?$ no, inserisco $1$ e aumento di $1$ il contatore per iterare dentro al secondo sotto array ($[4, 1]$);
	- $2 \lt 4?$ sì, inserisco $2$ e aumento di $1$ il contatore per iterare dentro al primo sotto array;
	- $5 \lt 4?$ no, inserisco $4$;
	- ho finito un array, quindi inserisco tutto l'altro
- Ora ho $A = [1, 2, 4, 5]$. Fatto!
### QuickSort - idea
Avendo un array $A = [5, 3, 7, 2]$, scegliamo un $\text{pivot}$ (solitamente il primo elemento dell'array) e mettiamo tutti gli elementi **minori** di esso a **sinistra** (in un sotto array) e quelli **maggiori** a **destra** (in un altro sotto array). Ripetiamo su ogni sotto array fino ad avere sotto array contenenti $0$ o $1$ elementi. Infine non servirà unire tra loro i sotto array, in quanto gli spostamenti vengono fatti In place e i sotto array non sono altro che chiamate ricorsive con margini minori:
- scelgo $\text{pivot } = 5$
	- metto i minori a sinistra: $[3, 2]$
	- metto i maggiori a destra: $[7]$
- scelgo $\text{pivot } = 3$ nel primo sotto array con lunghezza $2$
	- metto $2$ a sinistra
- ora ho $4$ sotto array:
	- $[2]$
	- $[3]$
	- $[5]$
	- $[7]$
- grazie alla ricorsione sugli array minori ho un array ordinato: $A = [2,3,5,7]$
### CountingSort - idea
Il CountingSort risulta ideale quando si lavora con array contenenti interi racchiusi in un piccolo intervallo $[a, b]$.
Avendo un array $A = [4, 2, 2, 3]$, dovremo anzitutto creare un array ausiliario $B$ grande abbastanza da contenere ogni intero da $a$ a $b$, ovvero lungo $k = b - a + 1$, dove:
- $a$ corrisponde al valore minimo contenuto in $A$ (nel nostro caso $2$);
- $b$ corrisponde al valore massimo in $A$ (nel nostro caso $4$).

$B$ avrà quindi lunghezza pari a $3$ e ad ogni indica sarà associato un intero a partire da $a$. Tuttavia il **vero contenuto** di $B$ sarà la quantità di volte che l'intero associato all'indice corrente si presenta all'interno di $A$.
Nel nostro caso avremo quindi $B = [\stackrel{2}{2}, \stackrel{3}{1}, \stackrel{4}{1}]$.
Ora creiamo un nuovo array e scriviamo $2$ volte l'elemento $2$, poi $1$ volta il $3$ e $1$ volta il $4$. Finito!
### RadixSort - idea
Si ordina a partire dalla cifra meno significativa ($\text{LSD } - \text{ Least Signficant Digit}$).
Avendo un array $A = [170, 45, 75, 90]$, potremmo ordinare sulla base delle unità, delle decine o delle centinaia:
- sulla base delle unità:
	- $170 \rightarrow 0$
	- $45 \rightarrow 5$
	- $75 \rightarrow 5$
	- $90 \rightarrow 0$
	- ovvero: $[170, 90, 45, 75]$
- sulla base delle decine:
	- $170 \rightarrow 7$
	- $45 \rightarrow 4$
	- $75 \rightarrow 7$
	- $90 \rightarrow 9$
	- ovvero: $[45, 170, 75, 90]$
- sulla base delle centinaia:
	- $170 \rightarrow 1$
	- i restanti hanno centinaia pari a $0$
	- ovvero: $[45, 75, 90, 170]$
