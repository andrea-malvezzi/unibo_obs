1. [[Strutture Dati#Liste concatenate|Liste Concatenate]]
	1. [[Strutture Dati#Liste Semplici|Liste Semplici]]
	2. [[Strutture Dati#Liste Doppiamente Concatenate|Liste Doppiamente Concatenate]]
	3. [[Strutture Dati#Altre meno importanti|Altri tipi di Liste Concatenate]]
	4. [[Strutture Dati#Operazioni sulle liste|Operazioni sulle Liste Concatenate]]
2. [[Strutture Dati#Stack|Stack]]
3. [[Strutture Dati#Queue|Queue]]
4. [[Strutture Dati#Alberi|Alberi]]
	1. [[Strutture Dati#Alberi Binari|Alberi Binari]]
		1. [[Strutture Dati#Visitare un Albero Binario|Visitare un Albero Binario]]
	2. [[Strutture Dati#Alberi Binari di Ricerca (BST)|Alberi Binari di Ricerca (BST)]]
		1. [[Strutture Dati#Nodi Predecessori e Successori in un BST|Nodi Predecessori e Successori in un BST]]
		2. [[Strutture Dati#Il Delete nei BST|Operazione di Delete]]
5. [[Strutture dati#Tabelle Hash|Hash Tables]]
6. [[Strutture dati#Heap|Heap]]
	1. [[Strutture dati#Array Heap|Array Heap]]
		1. [[Strutture dati#Trovare il valore massimo (o minimo) in un Array Heap|FindMax & FindMin]]
		2. [[Strutture dati#Ripristinare la proprietà di Max-Heap (o di Min-Heap)|FixHeap]]
		3. [[Strutture dati#Cancellare valore massimo (o minimo)|DeleteMax & DeleteMin]]
		4. [[Strutture dati#Costruire un Array Heap a partire da un Array non-ordinato|Heapify]]
	2. [[Strutture dati#Priority Queue|Priority Queue]]
## Liste concatenate
In questa struttura dati gli elementi sono sequenziali e l'ordine è deciso da una catena di puntatori. Per accedere ad un elemento occorre iterare sulla lista. Ogni lista contiene un puntatore al suo primo elemento, detto $\text{head}$.
Ne esistono $4$ tipi:
### Liste Semplici
Dove ogni nodo $x$ contiene:
- $\text{value}$
- $\text{next} \rightarrow$ il puntatore al prossimo nodo
### Liste Doppiamente Concatenate
Dove ogni nodo contiene, oltre che a $\text{value}$ e $\text{next}$, anche:
- $\text{prev} \rightarrow$ il puntatore al nodo precedente
### Altre meno importanti
Esistono anche liste **concatenate circolari**, ovvero una variante di [[Strutture Dati#Liste Doppiamente Concatenate|DLL]] dove il $\text{prev}$ della $\text{head}$ punta alla $\text{tail}$, e le liste con **puntatori alla testa e alla coda**.
### Operazioni sulle liste
| **Operazione**                   | **Caso migliore (primo elemento)** | **Caso medio** | **Caso peggiore (ultimo elemento) |
| -------------------------------- | ---------------------------------- | -------------- | --------------------------------- |
| **Search**                       | $O(1)$                             | $O(n)$         | $O(n)$                            |
| **Delete**                       | $O(1)$                             | $O(n)$         | $O(n)$                            |
| **Insert** (in testa alla lista) | $O(1)$                             |                |                                   |
| **Append**                       | $O(n)$                             |                |                                   |
## Stack
Struttura dati $\text{LIFO}$ che supporta $\text{push}$ e $\text{pop}$. Entrambe le operazioni hanno costo costante.
Si possono poi implementare $\text{IsEmpty}$ e $\text{Top}$, entrambe con costo costante grazie ad una proprietà $\text{size}$ e ad un puntatore all'ultimo elemento inserito.
## Queue
Struttura dati $\text{FIFO}$ che support $\text{Enqueue}$ e $\text{Dequeue}$. Entrambe le operazioni hanno costo costante, grazie ad un puntatore alla $\text{head}$ e alla $\text{tail}$.
## Alberi
Un **albero** è una struttura dati non lineare (non ha una struttura ben definita come le Liste). Un albero è composto da $\text{nodi}$ collegati medianti $\text{archi}$ ed nodo da cui parte tutto l'albero è detto $\text{radice}$.
Un albero possiede:
- una **profondità** associata ad ogni nodo $n$, ovvero la lunghezza del percorso tra $n$ e la radice calcolata in nodi attraversati;
- un **grado** associato ad ogni nodo $n$, ovvero il numero dei suoi figli, nipoti etc $\dots$ ;
- un'**altezza**, ovvero il numero di **livelli** che lo compongono. Un livello corrisponde ad un insieme di nodi ad una certa profondità. I nodi all'ultimo livello si dicono **foglie**;
### Alberi Binari
Un **albero binario** è uno speciale tipo di albero in cui ogni nodo possiede *al massimo* $2$ figli, uno sinistro e uno destro.
Un albero binario si dice:
- **completo** quando ogni suo nodo che non sia una foglia possiede esattamente $2$ figli;
- **perfetto** quando è completo e tutte le sue foglie si trovano al medesimo livello;
- **quasi perfetto** quando è perfetto fino al penultimo livello e le sue foglie sono compattate a sinistra.
#### Visitare un Albero Binario
Un albero si può visitare in 2 modi:
- tramite $\text{DFS - Depth First Search}$
- tramite $\text{BFS - Breadth First Search}$

Nel primo caso si visita ogni nodo ricorsivamente: questo significa che si partirà dai nodi più in basso per poi risalire l'albero piano piano.
In base all'implementazione si può parlare di tre tipi diversi di visita tramite **DFS**:
- $\text{Inorder}:$ visito nodo sinistro $\rightarrow$ nodo centrale (padre) $\rightarrow$ nodo destro;
- $\text{Preorder}:$ visito padre $\rightarrow$ nodo sinistro $\rightarrow$ nodo destro;
- $\text{Postorder}:$ visito nodo sinistro $\rightarrow$ nodo destro $\rightarrow$ padre;

Ognuna di queste implementazioni avrà Costo Computazionale pari ad $O(n)$, dove $n$ equivale al numero di nodi nell'albero studiato.

Nel caso di visita tramite **BFS** invece si visita ogni nodo di un certo livello per poi passare al successivo. Per farlo si usa una [[Strutture Dati#Queue|Queue]] nella quale viene inserita prima la radice dell'albero, poi iterativamente tutti i figli dei nodi studiati. In questo modo la visita sarà "sequenziale".
### Alberi Binari di Ricerca (BST)
Un $\text{BST - Binary Search Tree}$ corrisponde ad una variante di Albero Binario in cui un valore minore di quello contenuto dal nodo corrente viene inserito alla sua sinistra, mentre un valore maggiore alla sua destra.
Per trovare il valore minimo o quello massimo di un BST basta quindi seguire rispettivamente i figli di sinistra o di destra, fino a raggiungere una foglia.
#### Nodi Predecessori e Successori in un BST
In un BST si dice successore di un nodo $x$ un altro nodo $k$ con valore **minimo maggiore** di quello di $x$. Questo significa visitare il figlio destro di $x$ e poi visitare sempre quello più a sinistra, fino a raggiungere una foglia. Ad esempio, nell'albero seguente, il successore di $60$ corrisponde a $70$:![[Pasted image 20250607154906.png]]
Per il predecessore si devono invece fare due casi distinti:
- quando il nodo $x$ possiede un sottoalbero sinistro, il suo predecessore sarà il nodo contenente il valore maggiore in tale sottoalbero;![[Pasted image 20250328151743.png]]
- quando il nodo $x$ non possiede un sottoalbero sinistro, il suo predecessore sarà il primo nodo a contenere $x$ nel proprio sottoalbero destro.![[Pasted image 20250328152153.png]]
#### Il Delete nei BST
Quando si desidera rimuovere un nodo $x$ da un BST, occorre pensare a $3$ possibili scenari:
- il nodo $x$ è una foglia: in questo caso non vi sono complicazioni;
- il nodo $x$ ha un solo figlio $k$. Ora $k$ prenderà il posto di $x$. Ciò significa che se $x$ era figlio destro di un altro nodo $g$, allora diventerà il figlio destro di $g$, e viceversa;
- il nodo $x$ ha due figli. In questo caso dovremo cercare il predecessore $p$ di $x$, scambiare i valori di questi due nodi e rimuovere il nodo che era originariamente il predecessore.

Ognuna di queste due operazioni ha costo $O(h)$, dove $h$ equivale all'altezza dell'albero.
## Tabelle Hash

## Heap
L'$\text{Heap}$ è una struttura dati specializzata in operazioni di inserimento e di ricerca di valori massimi o minimi, basata sugli [[Strutture dati#Alberi Binari|Alberi Binari quasi perfetti]].
Un Heap può essere:
- $\text{max-heap}$ quando, per ogni suo nodo $i$ con valore $V[i]$, il genitore di $i$ ha valore $\geq V[i]$;
- $\text{min-heap}$ quando invece che avere valore $\geq V[i]$, il genitore ha valore $\leq V[i]$.

Entrambe le strutture dati condividono le stesse definizioni, in maniera simmetrica.
### Array Heap
Un Heap si può anche rappresentare come un Array $A$ contenente tutti gli elementi contenuti nell'albero associato ad esso.
Chiamando $i$ l'indice nell'array di un certo elemento dell'albero, allora:
- la radice si troverà in $A[0]$;
- il figlio sinistro di $i$ si trova in $2 \cdot i$;
- il figlio destro di $i$ si trova in $2 \cdot i + 1$ (è il vicino del figlio sinistro);
- il genitore di $i$ si trova in $\text{Math.floor}\left(\frac{i}{2}\right)$. Qui l'arrotondamento serve per evitare di fare un caso separato per ogni figlio;
![[Pasted image 20250331095322.png]]
#### Trovare il valore massimo (o minimo) in un Array Heap
La funzione $\text{FindMax}$ (o $\text{FindMin}$) permette di trovare il valore massimo (o minimo) di un Heap: per farlo basterà ritornare la radice dell'albero binario associato, ovvero $A[0]$.
La funzione ha costo costante in quanto si tratta semplicemente di accedere direttamente ad un valore in un array.
#### Ripristinare la proprietà di Max-Heap (o di Min-Heap)
Modificare un Heap potrebbe fare venire meno la proprietà che lo caratterizza, ovvero che per ogni nodo $i$ con valore $V[i]$ si ha:
- $\text{max-heap}$ se il genitore di $i$ ha valore $\geq V[i]$;
- $\text{min-heap}$ se il genitore di $i$ ha valore $\leq V[i]$;

La funzione $\text{FixHeap(i)}$ confronta quindi il nodo $i$ con i suoi figli e, se trova un figlio con valore maggiore (nel caso di un Max-Heap) di quello di $i$, inverte i due per poi richiamare sé stessa sul figlio con cui è stato effettuato lo scambio.
Questa funzione ha costo (nel caso pessimo) pari all'altezza dell'albero, ovvero $O(h)$.
#### Cancellare valore massimo (o minimo)
La funzione $\text{DeleteMax}$ (o $\text{DeleteMin}$) si serve di [[Strutture dati#Ripristinare la proprietà di Max-Heap (o di Min-Heap)|FixHeap]] per eliminare $A[0]$ e poi ripristinare la proprietà originale dell'albero.
Questa operazione ha quindi costo pari a quello di $\text{FixHeap}$, ovvero $O(h)$.
#### Costruire un Array Heap a partire da un Array non-ordinato
La funzione $\text{Heapify}$ necessita della posizione nell'array non-ordinato di quella che diventerà la radice dell'albero e la posizione dell'ultimo elemento da inserire. In seguito dovrà costruire ricorsivamente il sotto-heap destro e quello sinistro della radice, richiamando [[Strutture dati#Ripristinare la proprietà di Max-Heap (o di Min-Heap)|FixHeap]] per riordinare l'Heap creato.
Questa funzione ha quindi costo pari a$$T(n) = \begin{cases}1 & n \leq 1 \\ 2 \cdot T(\frac{n}{2}) + \log{n} & n \gt 1\end{cases}$$che una volta risolto equivale ad $O(n)$.
### Priority Queue