1. [[Strutture Union-Find - Esercizi#Esercizio 1 - Visualizzare una struttura Union-Find dopo alcune modifiche|Esercizio 1 - Visualizzare una struttura Union-Find dopo alcune modifiche]]
	1. [[Strutture Union-Find - Esercizi#Esercizio 1 - Soluzione|Soluzione]]
2. [[Strutture Union-Find - Esercizi#Esercizio 2 - Condizioni di uguaglianza e di disuguaglianza|Esercizio 2 - Condizioni di uguaglianza e di disuguaglianza]]
	1. [[Strutture Union-Find - Esercizi#Esercizio 2 - Soluzione|Soluzione]] 
## Esercizio 1 - Visualizzare una struttura Union-Find dopo alcune modifiche
Si consideri una struttura dati Union-Find che inizialmente contiene $10$ singoletti che contengono i valori interi compresi fra $1$ e $10$. Considerare un’implementazione di tipo $\text{quickUnion}$ con euristica sul rango. Mostrare la rappresentazione iniziale della struttura dati.
Si consideri poi la seguente sequenza di operazioni:
- $\text{union}(7,8)$;
- $\text{union}(5,\text{find}(8))$;
- $\text{union}(3,6)$;
- $\text{union}(\text{find}(5),\text{find}(6))$.

Descrivere come si modifica la rappresentazione della struttura dati dopo l’esecuzione di ognuna di queste operazioni.
### Esercizio 1 - Soluzione
Inizialmente la struttura Union-Find sarà:$$S = \{\{1\}, \{2\}, \{3\}, \{4\}, \{5\}, \{6\}, \{7\}, \{8\}, \{9\}, \{10\}\}$$dove ogni singoletto rappresenterà un albero a sé stante. Essendo poi questa Struttura UF realizzata mediante $\text{QuickUnion}$, ogni operazione di unione renderà il nodo radice del secondo albero un nuovo figlio della radice del primo.
In seguito alla prima operazione si avrà quindi un albero con radice $7$ e come unico figlio $8$.
In seguito alla seconda si avrà un albero con radice $7$ e con figli $5$ ed $8$ (si ha euristica sul rango: l'albero con rango minore viene aggiunto a quello con rango maggiore).
La terza operazione produrrà un albero con radice $5$ e figlio $6$.
La quarta ed ultima operazione unirà l'albero con radice $5$ a quello con radice $7$, in quanto l'albero con radice $7$ ha grado pari a $3$, mentre il primo ha grado pari ad $1$.
Al termine della sequenza di operazioni si avrà quindi una struttura UF come la seguente:
![[Pasted image 20250609181720.png]]
## Esercizio 2 - Condizioni di uguaglianza e di disuguaglianza
Consideriamo un insieme di $n$ variabili $x_1, \dots , x_n$. Sono dati un insieme di vincoli di uguaglianza della forma $x_i = x_j$ e un altro insieme di vincoli di disuguaglianza della forma $x_i \not = x_j$. Il problema consiste nel capire se tutti i vincoli possono essere soddisfatti.
Ad esempio, considerando quattro variabili $x_1, x_2, x_3, x_4$ soggette ai vincoli
- $x_1 = x_2$;
- $x_2 = x_3$;
- $x_3 = x_4$;
- $x_1 \not= x_4$

risulta che i vincoli non sono soddisfacibili.
Progettare un algoritmo che, dati in input il numero $n$ di variabili e le liste dei vincoli di uguaglianza e disuguaglianza, restituisce $\text{true}$ se i vincoli sono soddisfacibili, $\text{false}$ altrimenti.
### Esercizio 2 - Soluzione
Supponendo di avere $5$ variabili, avremo una struttura UF del seguente tipo:$$S = \{\{1\}, \{2\}, \{3\}, \{4\}, \{5\}\}$$Ora dovremo unire per ogni uguaglianza l'albero del lato sinistro di questa con quello del lato destro.
Al termine delle uguaglianza, dovremo controllare che la radice ritornata dall'operazione di $\text{Find}$ degli elementi delle disuguaglianze siano diversi.
```pseudocodice
function CheckLogic(int n, List u, List d)
	Let S be a new UF
	for i = 1, ..., n
		S.MakeSet(i)
	for pair in u
		S.Union(find(pair.x), find(pair.y))
	for pair in d
		if (S.find(pair.x) == S.find(pair.y))
			return False
	return True
```