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