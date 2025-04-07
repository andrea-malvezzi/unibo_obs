## Esercizio 1
### Consegna
Si consideri una struttura dati union-find che inizialmente contiene 10 singoletti che contengono i valori interi compresi fra 1 a 10. Considerare un’implementazione di tipo quickUnion con euristica sul rango. Mostrare la rappresentazione iniziale della struttura dati. Si consideri poi la seguente sequenza di operazioni: union(7,8), union(5,find(8)), union(3,6), e union(find(5),find(6)). Descrivere come si modifica la rappresentazione della struttura dati dopo l’esecuzione di ognuna di queste operazioni.
### Svolgimento
Inizialmente si avranno $10$ singoletti, ognuno contenente un intero da $1$ a $10$. Dopo la prima operazione, ovvero *union(7,8)*, si avranno solamente $9$ insiemi, di cui $8$ singoletti e uno contenente $7$ ed $8$. Quindi qualcosa del genere:
- $\{1\}$
- $\{2\}$
- $\{3\}$
- $\{4\}$
- $\{6\}$
- $\{8, 7\}$
- $\{9\}$
- $\{10\}$

Ora procediamo con la seconda operazione, ovvero *union(5, find(8))*. Supponendo che $8$ sia rappresentante dell'insieme non-singoletto, ragioniamo ora su quale insieme sarà aggiunto a quale altro: il singoletto $5$ ha rango pari ad $1$, mentre l'insieme $\{7,8\}$ ha rango pari a $2$. Questo significa che avrà più senso appendere l'albero del singoletto a quello del non-singoletto, per risparmiare tempo. Quindi:
- $\{1\}$
- $\{2\}$
- $\{3\}$
- $\{4\}$
- $\{8, 5, 7\}$
- $\{6\}$
- $\{9\}$
- $\{10\}$

Ora eseguiamo la terza istruzione, ovvero *union(3,6)*: trattandosi di due singoletti, non importa l'ordine con cui appendiamo gli elementi. Quindi avremo:
- $\{1\}$
- $\{2\}$
- $\{6,3\}$
- $\{4\}$
- $\{8,5,7\}$
- $\{9\}$
- $\{10\}$

Ed infine eseguiamo *union(find(5), find(6))*: l'albero con rappresentante $6$ ha rango pari a $2$, mentre l'albero di $8$ ha rango pari a $3$. Ha quindi più senso appendere il primo al secondo, ottenendo qualcosa del tipo:
- $\{1\}$
- $\{2\}$
- $\{8,5,7,6,3\}$ (dove $3$ è figlio diretto di $6$)
- $\{4\}$
- $\{9\}$
- $\{10\}$


Tramite alberi:![[Pasted image 20250407110935.png]]

## Esercizio 2
### Consegna
Consideriamo un insieme di $n$ variabili $x_1, \dots , x_n$. Sono dati un insieme di vincoli di uguaglianza della forma $x_i = x_j$ e un altro insieme di vincoli di disuguaglianza della forma $x_i \not = x_j$. Il problema consiste nel capire se tutti i vincoli possono essere soddisfatti. Ad esempio, considerando quattro variabili $x_1, x_2, x_3, x_4$ soggette ai vincoli $x_1 = x_2; x_2 = x_3; x_3 = x_4; x_1 \not = x_4$ risulta che i vincoli non sono soddisfacibili. Progettare un algoritmo che, dati in input il numero $n$ di variabili e le liste dei vincoli di uguaglianza e disuguaglianza, restituisce *true* se i vincoli sono soddisfacibili, *false* altrimenti.
### Svolgimento
Potremmo pensare di fare due insiemi di coppie: uno per le uguaglianze ed uno per le disuguaglianze. Qualora una coppia fosse presente in entrambi gli insiemi, allora i vincoli sarebbero impossibili da rispettare. Tuttavia esiste una soluzione più semplice ed ottimale che sfrutta una sola struttura union-find.
Avendo una struttura union-find chiamata *UF*, un set di $n$ variabili (*dati*) e due liste, una di uguaglianze (che chiameremo *uguali*) e una di disuguaglianze (chiamata *diversi*), allora potremmo anzitutto creare i singoletti per ogni dato. Quindi:
```pseudocodice
for each dato in data:
	UF.makeSet(dato)
```
In seguito, andiamo ad unire tra loro i dati che devono essere uguali:
```pseudocodice
for each (i, j) in uguali:
	UF.union(UF.find(i), UF.find(j))
```
Ora procediamo con le disuguaglianze: nel caso in cui anche una sola disuguaglianza non sia verificata, dovremo ritornare *false*. Scriviamo quindi:
```pseudocodice
for each (i, j) in diversi:
	if (UF.find(i) == UF.find(j))
		return false
```
Ed infine, se siamo arrivati fino a qui (al termine dell'algoritmo) ritorniamo *true*:
```pseudocodice
return true
```
