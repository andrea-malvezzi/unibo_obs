## Esercizio 1
Scrivere un algoritmo che, dati in input un intero positivo $k$ ed una lista concatenata semplice, restituisca il $k$-esimo elemento a partire dalla fine (dove $k = 1$ indica l'ultimo elemento).
### Soluzione
```pseudocodice
function RitornaKesimoDallaFine(list L, int K){
	list tmp = L;
	int n = 0;
	// ottiene size della Lista
	while (tmp != NULL){
		n++;
		tmp = tmp.next;
	}
	// resetta tmp
	tmp = L;
	// se la lista contiene meno elementi di quelli richiesti, termina
	if (n < K) return NULL;
	// altrimenti ricomincia dall'inizio e fermati quando n == k
	while (n > k) {
		n--;
		tmp = tmp.next;
	}
	return tmp;
}
```
Con complessità $O(n)$, in quanto itera sempre su tutta la lista e poi sugli item necessari. Nel caso peggiore si hanno due iterazioni sulla lista, ovvero: $O(n) + O(n) = O(n)$.
## Esercizio 2
Scrivere un algoritmo che, dati in input un intero positivo $k$ ed una lista concatenata semplice restituisca il $k$-esimo elemento a partire dalla fine senza visitare per due volte la lista.
### Soluzione
```pseudocodice
function RitornaKesimoDallaFine(list L, int K){
	list tmp1 = L;
	list tmp2 = L;
	int n = 0;
	// ferma tmp1 quando si trova alla k-esima posizione
	while (tmp1 != NULL and n < k){
		n++;
		tmp1 = tmp1.next;
	}
	if (n < k) return NULL;
	while (tmp1 != NULL){
		tmp1 = tmp1.next;
		tmp2 = tmp2.next;
	}
	return tmp2;
}
```