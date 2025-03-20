1. [Nozioni preliminari](#Nozioni%20preliminari)
	1. [Esempio di ordinamento stabile](#Esempio%20di%20ordinamento%20stabile)
2. [Tipi di algoritmi di ordinamento](#Tipi%20di%20algoritmi%20di%20ordinamento)
	2. [Incrementali](#Incrementali)
		1. [$\dots$ il Selection Sort](#$%5Cdots$%20il%20Selection%20Sort)
			1. [Implementazione in Java del Selection Sort](#Implementazione%20in%20Java%20del%20Selection%20Sort)
		2. [$\dots$ l'Insertion Sort](#$%5Cdots$%20l'Insertion%20Sort)

Per queste dimostrazioni lavoreremo esclusivamente sugli Array.
## Nozioni preliminari
Un algoritmo di ordinamento si dice$\dots$ 
- **in-place** quando riordina l'array preso in input lavorando direttamente su questo, senza crearne uno aggiuntivo;
- **stabile** quando valori con la stessa chiave appaiono nell'array finale nello stesso ordine in cui appaiono in quello originale
### Esempio di ordinamento stabile
Supponiamo di avere un array di oggetti con un campo per il nome di un alunno e un secondo campo per l'età di questo, come il seguente:
- $(\text{Anna, } 25)$;
- $(\text{Luca, } 20)$;
- $(\text{Mario, }25)$;
- $(\text{Giulia, }20)$.
Allora un algoritmo di ordinamento **stabile** basato sull'età ritornerebbe un array come il seguente:
- $(\text{Luca, } 20)$;
- $(\text{Giulia, }20)$.
- $(\text{Anna, } 25)$;
- $(\text{Mario, }25)$;
In quanto nell'array originale Luca viene prima di Giulia e Anna viene prima di Mario.
## Tipi di algoritmi di ordinamento
Esistono $3$ famiglie di algoritmi di ordinamento, suddivise in base all'approccio con cui si vanno ad ordinare le strutture dati.
### Incrementali
Gli algoritmi di ordinamento incrementali costruiscono la soluzione (un array ordinato) progressivamente, aggiungendo un elemento alla volta e mantenendo la parte già ordinata. Tra questi vediamo $\dots$
#### $\dots$ il Selection Sort
Questo algoritmo cerca ad ogni iterazione il valore minimo contenuto nell'array tra l'indice attuale e quello finale. Una volta trovato questo valore, lo scambia con quello attuale e ripete. Così facendo verranno quindi sempre eseguiti due cicli interi: uno per iterare sull'array, ed altri dall'indice attuale a quello finale (complessivamente pari ad un ulteriore ciclo intero).
La complessità computazionale dell'array è quindi quella di due cicli for, ovvero $O(n^2)$.
##### Implementazione in Java del Selection Sort
```java
public void SelectionSort(int A[]){
	int m;
	for(int i = 0; i < A.length; i++){
		m = Min(A, i);
		if (m != i)
			Swap(A,i,m);
	}
}

private int Min(int A[], int i){
	for (int j = i + 1; j < A.length; j++)
		if (A[j] < A[i])
			i = j;
	return i;
}

private void Swap(int A[], int i, int j){
	int tmp = A[i];
	A[i] = A[j];
	A[j] = tmp;
}
```
#### $\dots$ l'Insertion Sort
