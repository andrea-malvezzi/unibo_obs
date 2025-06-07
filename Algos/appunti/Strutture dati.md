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
	3. 
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
