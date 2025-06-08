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
		1. [[Strutture dati#Trovare l'elemento con chiave maggiore (o minore)|FindMax & FindMin]]
		2. [[Strutture dati#Inserire un elemento con una chiave associata|Insert]]
		3. [[Strutture dati#Cancellare un elemento|Delete]]
		4. [[Strutture dati#Priority Queue#Cancellare l'elemento con chiave maggiore (o minore)|DeleteMax & DeleteMin]]
		5. [[Strutture dati#Priority Queue#Aumentare (o diminuire) la chiave di un elemento|IncreaseKey & DecreaseKey]]
	3. [[Strutture dati#d-Heap|d-Heap]]
		1. [[Strutture dati#d-Heap Arrays|d-Heap Arrays]]
7. [[Strutture dati#Strutture Union-Find|Strutture Union-Find]]
	1. [[Strutture dati#Creare un nuovo insieme|MakeSet]]
	2. [[Strutture dati#Cercare l'insieme contenente un certo elemento x|Find]]
	3. [[Strutture dati#Unire due insiemi|Union]]
	4. [[Strutture dati#Esempio di applicazione della Struttura Union-Find|Esempio pratico di applicazione di una Struttura Union-Find]]
	5. [[Strutture dati#Implementazioni delle Strutture Union-find|Possibili implementazioni delle Strutture Union-Find]]
		1. [[Strutture dati#Implementazione QuickFind|QuickFind]]
			1. [[Strutture dati#L'operazione Find con il QuickFind|Find]]
			2. [[Strutture dati#L'operazione Union con il QuickFind|Union]]
		2. [[Strutture dati#Implementazione QuickUnion|QuickUnion]]
			1. [[Strutture dati#L'operazione Find con il QuickUnion|Find]]
			2. [[Strutture dati#L'operazione Union con il QuickUnion|Union]]
		3. [[Strutture dati#QuickFind con Euristica sul peso|QuickFind con Euristica sul Peso]]
			1. [[Strutture dati#Prima Osservazione sul QuickFind con Euristica sul peso|Prima Osservazione]]
			2. [[Strutture dati#Seconda Osservazione sul QuickFind con Euristica sul peso|Seconda Osservazione]]
		4. [[Strutture dati#QuickUnion con Euristica sul peso|QuickUnion con Euristica sul Peso]]
8. [[Strutture dati#Grafi|Grafi]]
	1. [[Strutture dati#Definizioni importanti dei Grafi|Definizioni Importanti]]
	2. [[Strutture dati#Operazioni sui grafi|Operazioni]]
	3. [[Strutture dati#Adiacenza e grafi non orientati - Matrice di Adiacenza|Matrice di Adiacenza nei Grafi non-orientati]]
		1. [[Strutture dati#Operazioni sulle matrici di adiacenza - Grafi non orientati|Operazioni sulle matrici di adiacenza]]
			1. [[Strutture dati#Come mai questi costi?|Spiegazione dei costi delle operazioni]]
	4. [[Strutture dati#Adiacenza e grafi non orientati - Lista di Adiacenza|Lista di Adiacenza nei Grafi non-orientati]]
		1. [[Strutture dati#Operazioni sulle liste di adiacenza - Grafi non orientati|Operazioni sulle liste di adiacenza]]
			1. [[Strutture dati#Operazioni sulle liste di adiacenza - Grafi non orientati#Come mai questi costi?|Spiegazione dei costi delle operazioni]]
	5. [[Strutture dati#Adiacenza nei grafi orientati|Adiacenza nei Grafi orientati]]
	6. [[Strutture dati#Grafi Pesati|Grafi Pesati]]
	7. [[Strutture dati#I Cammini|Cammini]]
		1. [[Strutture dati#Grafi connessi|Grafi connessi]]
		2. [[Strutture dati#Grafi fortemente connessi|Grafi fortemente connessi]]
		3. [[Strutture dati#Grafi debolmente connessi|Grafi debolmente connessi]]
	8. [[Strutture dati#Cicli|Cicli]]
	9. [[Strutture dati#Grafi non orientati completi|Grafi non-orientati completi]]
	10. [[Strutture dati#Curiosità sul rapporto tra Grafi ed Alberi|Il Rapporto tra Grafi ed Alberi]]
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
%% TODO: completa qui per gli esercizi %%
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
Una $\text{Priority Queue}$ è una struttura dati che ritorna il valore minimo di un insieme di coppie chiave-valore. Si può implementare mediante Heap.
#### Trovare l'elemento con chiave maggiore (o minore)
In un $\text{Max-Heap}$ si ha $\text{FindMin}$, con costo $O(n)$. In un $\text{Min-Heap}$ si ha invece $\text{FindMax}$.
#### Inserire un elemento con una chiave associata
La funzione $\text{Insert}$ aggiunge un elemento $e$ con associata la chiave $k$ alla Priority Queue. L'operazione non fa altro che aggiungere un elemento all'ultimo spazio vuoto dell'array per poi chiamare [[Strutture dati#Ripristinare la proprietà di Max-Heap (o di Min-Heap)|FixHeap]] e risalire l'albero. L'operazione ha quindi costo nel caso peggiore $O(n)$ (deve iterare su tutti gli elementi dell'array), altrimenti $O(\log{n})$ (deve risalire l'albero con FixHeap).
#### Cancellare un elemento
La funzione $\text{Delete}$ rimuove un elemento dalla coda, supponendo di avere accesso diretto a tale elemento $e$. Questo permette di avere un accesso a costo costante.
Tuttavia dopo aver eliminato $e$ occorrerà chiamare [[Strutture dati#Ripristinare la proprietà di Max-Heap (o di Min-Heap)|FixHeap]] per sistemare l'Heap: l'operazione avrà quindi costo pari a $O(\log{n})$.
#### Cancellare l'elemento con chiave maggiore (o minore)
La funzione $\text{DeleteMax}$ (e simmetricamente $\text{DeleteMin}$) non fa altro che chiamare [[Strutture dati#Trovare l'elemento con chiave maggiore (o minore)|FindMax]] per poi eliminare tale elemento e sistemare l'Heap con [[Strutture dati#Ripristinare la proprietà di Max-Heap (o di Min-Heap)|FixHeap]].
L'operazione avrà quindi costo pari a $O(n)$ nel caso peggiore (chiamo DeleteMax in un Min-Heap) e $O(\log{n})$ nel caso migliore & medio (in un Max-Heap l'elemento maggiore è sempre la radice: il costo è dettato da FixHeap).
#### Aumentare (o diminuire) la chiave di un elemento
La funzione $\text{IncreaseKey}$ (e simmetricamente $\text{DecreaseKey}$) aumenta la chiave di un elemento $e$ (supponendo di aver accesso diretto a questo). In seguito occorrerà chiamare [[Strutture dati#Ripristinare la proprietà di Max-Heap (o di Min-Heap)|FixHeap]]: il costo è quindi dettato da quest'ultima funzione.
### d-Heap
I d-Heap sono un'estensione dei Max/Min-Heap dove ogni nodo può avere grado pari ad $k$. Un d-Heap avrà quindi altezza pari a $h = \log_k{n}$ dove $n$ equivale al numero di nodi nell'albero.
#### d-Heap Arrays
Un d-Heap si può rappresentare come un Array $A$ dove, dato un indice $i$ equivalente ad un nodo dell'albero associato, valgono le seguenti:
- l'ultimo figlio di $i$ si trova in $\left(i \cdot k\right) + 1$;
- il primo figlio di $i$ si trova in $((i - 1) \cdot k) + 2$, cioè $k - 1$ posizioni prima dell'ultimo figlio;
- il padre di $i$ si trova in $\text{Math.Floor}(\frac{i - 1}{k})$.
## Strutture Union-Find
Le $\text{Strutture Union-Find}$ sono utili per gestire insiemi disgiunti, ovvero **senza elementi in comune**, come gli insiemi singoletto.
Una struttura Union-Find è una collezione $S = \{S_1, \dots, S_k\}$ di insiemi disgiunti, ognuno con un **rappresentante univoco**.
Complessivamente la struttura Union-Find può contenere $n \geq k$ elementi.
### Creare un nuovo insieme
La funzione $\text{MakeSet}$ crea un nuovo insieme a partire da un elemento $x$ (che ne diventa quindi il **rappresentante**). Tuttavia $x$ non deve appartenere già ad altri insiemi della struttura, in quanto essa per definizione opera su insiemi disgiunti.
### Cercare l'insieme contenente un certo elemento x
La funzione $\text{find}$ cerca l'insieme contenente l'elemento $x$ e ne ritorna il rappresentate.
### Unire due insiemi
La funzione $\text{Union}(x, y)$ unisce gli insiemi rappresentati da $x$ e da $y$. Questa operazione cancellerà i due insiemi uniti e creerà un nuovo insieme con un nuovo rappresentate.
### Esempio di applicazione della Struttura Union-Find
Supponiamo di avere $9$ strade e di volerne trovare le intersezioni:
![[Pasted image 20250403122500.png]]
allora potremmo scrivere l'insieme di partenza $E$ come l'insieme di tutte e $9$ le strade (che sono quindi dei singoletti):$$E = \{\{1\}, \{2\}, \{3\}, \{4\}, \{5\}, \{6\}, \{7\}, \{8\}, \{9\}\}$$poi per unire tra loro le strade come da disegno, usiamo la funzione [[Strutture dati#Unire due insiemi|Union]]:
- $\text{Union}(1, 4) \rightarrow \{1, 4\}$;
- $\text{Union}(2, 5) \rightarrow \{2, 5\}$;
- $\text{Union}(1, 2) \rightarrow \{1, 2, 4, 5\}$;
- $\text{Union}(1, 7) \rightarrow \{1, 2, 4, 5, 7\}$;
- $\text{Union}(3, 6) \rightarrow \{3, 6\}$;
- $\text{Union}(8, 9) \rightarrow \{8, 9\}$;
- $\text{Union}(3, 8) \rightarrow \{3, 6, 8, 9\}$.
### Implementazioni delle Strutture Union-find
#### Implementazione QuickFind
Ogni insieme viene rappresentato con un albero di altezza uno, dove la radice corrisponde al rappresentante e i figli della radice sono **tutti** gli elementi dell'insieme, rappresentante incluso. Ovvero:![[Pasted image 20250403125155.png]]come possibile notare dalle frecce nel diagramma, si ha accesso diretto alle foglie ma non alla radice. Ciò significa che da una foglia (ad esempio da $c$) potrò risalire alla radice (ad esempio $b$).
##### L'operazione Find con il QuickFind
L'accesso agli elementi avviene direttamente e ha quindi costo costante.
##### L'operazione Union con il QuickFind
Nell'implementazione $\text{QuickFind}$ ogni elemento è collegato da un puntatore alla radice: ciò significa che unire due insiemi comporterà un cambio di $n$ puntatori, dove $n$ corrisponde al numero complessivo elementi nei due alberi da unire.![[Pasted image 20250403131449.png]]
#### Implementazione QuickUnion
Si rappresenta ogni insieme tramite un albero dove ogni nodo ha esattamente un padre, ma può avere $n$ figli. Anche in questo caso la radice contiene il rappresentante. Ovvero:![[Pasted image 20250403130827.png]]
##### L'operazione Find con il QuickUnion
Il **Find** in questo caso risulta più lento rispetto a [[Strutture dati (brutta)#L'operazione Find con il QuickFind|quello del QuickFind]] perché per trovare la radice occorre passare attraverso tutti i padri di un elemento passato come parametro alla funzione.
##### L'operazione Union con il QuickUnion
Per la Union basterà collegare il padre di un sottoalbero diretto della radice al nuovo rappresentante: si cambierà ora solamente un elemento invece che $n$).![[Pasted image 20250403131420.png]]
#### QuickFind con Euristica sul peso
Una strategia per diminuire il costo dell’operazione [[Strutture dati (brutta)#L'operazione Union con il QuickFind|union]] nel QuickFind consiste nel:
- memorizzare nella radice il numero di elementi dell'insieme; la dimensione può essere mantenuta in tempo $O(1)$;
- appendere l'insieme con meno elementi a quello con più elementi.

Ad esempio, avendo 2 insiemi della forma:![[Pasted image 20250403180816.png]]
con l'algoritmo QuickFind con euristica sul peso si muoverebbero gli elementi $f$ e $g$ dal primo insieme al secondo, nella maniera seguente:![[Pasted image 20250407132819.png]]

##### Prima Osservazione sul QuickFind con Euristica sul peso
Ogni volta che una foglia cambia padre, fa parte di un insieme contenente *almeno* il doppio degli elementi contenuti nel suo insieme originale: ciò significa che ogni foglia cambia il proprio padre al più $\log{n}$ volte.
##### Seconda Osservazione sul QuickFind con Euristica sul peso
Nel caso peggiore fino a $\frac{n}{2}$ elementi cambieranno padre per esecuzione di union, dove $n$ equivale al numero di elementi complessivo dei due insiemi.
Nel caso medio, considerando $k - 1$ cambi (per $k$ cambi si ha una nuova struttura Union-Find) e ricordando che un cambio ha costo pari a $\log{k}$, il costo ammortizzato della funzione union risulta essere $O(k \cdot \log{k})$ diviso il numero di cambi, ovvero $\frac{O(k \cdot \log{k})}{k - 1}$, che risulta $O(\log{k})$ (il $-1$ si può ignorare in quanto non influisce sul calcolo).
#### QuickUnion con Euristica sul peso
%% TODO: completa qui %%
## Grafi
Un $\text{Grafo}$ corrisponde ad una **coppia di vertici** $(V, E)$ e può essere **orientato** o **non-orientato**:
- nei grafi orientati si ha una **relazione binaria** tra i vertici (un senso di marcia) e vi possono essere **cappi**, ovvero archi tra un vertice e sé stesso;
- nei grafi non orientati si hanno coppie non ordinate e non possono esservi cappi.

Il grafo ottenuto ignorando la direzione degli archi e la presenza dei cappi nei grafi orientati si dice **versione non-orientata** di quello specifico Grafo.
![[Pasted image 20250528164918.png]]
<div style="text-align: center;">Esempio di grafo orientato</div>

![[Pasted image 20250528165244.png]]<div style="text-align: center;">Esempio di grafo non orientato</div>
### Definizioni importanti dei Grafi
In un grafo orientato un **arco** $\left(v,w\right)$ si dice **incidente** da $v$ a $w$. Inoltre un **vertice** $w$ si dice **adiacente** ad un altro vertice $v$ quando da $v$ si può proseguire seguendo il verso imposto dal grafo e raggiungere immediatamente $w$.
> **N.B.** In un Grafo non-orientato, l'adiacenza tra vertici è simmetrica (se $w$ è adiacente a $v$, allora anche $v$ è adiacente a $w$). Questo non si può invece dire per i Grafi orientati.

Ricordando l'esempio di Grafo orientato proposto in precedenza, si avrebbe che (ad esempio) $\text{A}$ e $\text{D}$ siano adiacenti tra loro, mentre $\text{B}$ sia adiacente ad $\text{A}$, ma non il contrario.
Infine in un Grafo si può parlare di **grado**:
- in un Grafo non-orientato, il grado di un vertice corrisponde agli archi di cui esso fa parte;
- in un Grafo Orientato si hanno $3$ tipi diversi di grado:
	- si ha un **grado uscente**: il numero di archi incidenti partenti da un certo vertice;
	- un **grado entrante**: il numero di archi incidenti che partono da vertici adiacenti a quello studiato, di cui esso fa parte;
	- un grado **complessivo**: la somma tra grado entrante e grado uscente.
### Operazioni sui grafi
Un grafo (di qualunque tipo esso sia) deve supportare le seguenti operazioni:
- $\text{grado(vertice v)} \rightarrow \text{intero}$
- $\text{archiIncidenti(vertice v)} \rightarrow (\text{arco, arco, }\dots)$
- $\text{estremi(arco e)} \rightarrow (\text{vertice, vertice})$
- $\text{sonoAdiacenti(vertice x, vertice y)} \rightarrow \text{booleano}$
- $\text{aggiungiVertice(vertice v)}$
- $\text{aggiungiArco(vertice x, vertice y)}$
- $\text{rimuoviVertice(vertice v)}$
- $\text{rimuoviArco(arco e)}$
Ognuna di queste operazioni avrà un certo costo computazionale basato sulla tipologia di grafo per cui vengono implementate.
### Adiacenza e grafi non orientati - Matrice di Adiacenza
Per tenere traccia delle adiacenze in un grafo non orientato si può usare una matrice detta **di adiacenza**: questa corrisponde ad una matrice di booleani dove si ha $1$ quando due grafi sono adiacenti e $0$ quando non lo sono:![[Pasted image 20250529135422.png]]
#### Operazioni sulle matrici di adiacenza - Grafi non orientati
| Operazione                                                       | Costo    |
| ---------------------------------------------------------------- | -------- |
| $\text{grado}$(vertice v) $\rightarrow \text{int}$               | $O(n)$   |
| $\text{archiIncidenti}$(vertice v) $\rightarrow$ (arco, arco, …) | $O(n)$   |
| $\text{sonoAdiacenti}$(x, y) $\rightarrow$ $\text{booleano}$     | $O(1)$   |
| $\text{aggiungiVertice}$(v)                                      | $O(n^2)$ |
| $\text{aggiungiArco}$(x, y)                                      | $O(1)$   |
| $\text{rimuoviVertice}$(v)                                       | $O(n^2)$ |
| $\text{rimuoviArco}$(e)                                          | $O(1)$   |
##### Come mai questi costi?
- L'aggiunta o la rimozione di un vertice corrisponde ad $n^2$ cambiamenti, dove $n$ sarebbe la nuova lunghezza di una riga della matrice. Ad esempio, eliminando il vertice $F$ dalla matrice precedentemente usata come esempio, occorrerebbe rimuovere un'intera riga ed un'intera colonna di "paragoni";
- un arco corrisponde al nesso tra due vertici, ovvero ad una cella della matrice, identificata dall'indice del vertice $x$ e del vertice $y$. Aggiungere o rimuovere archi ha quindi costo costante;
- cercare di identificare con quali altri vertici un certo vertice compone un arco significa iterare su un'intera riga o un'intera colonna. L'operazione ha quindi costo pari ad $n$;
### Adiacenza e grafi non orientati - Lista di Adiacenza
Un altro modo per rappresentare e tenere traccia delle adiacenze in un grafo non orientato corrisponde alla Lista di Adiacenza: per ogni vertice si ha una Linked List dove ogni nodo corrisponde ad un vertice adiacente.![[Pasted image 20250529144358.png]]
#### Operazioni sulle liste di adiacenza - Grafi non orientati
| **Operazione**                                                   | **Costo**                                    |
| ---------------------------------------------------------------- | -------------------------------------------- |
| $\text{grado}$(vertice v) $\rightarrow \text{int}$               | $\mathcal{O}(\delta(v))$                     |
| $\text{archiIncidenti}$(vertice v) $\rightarrow$ (arco, arco, …) | $\mathcal{O}(\delta(v))$                     |
| $\text{sonoAdiacenti}$(x, y) $\rightarrow  \text{booleano}$      | $\mathcal{O}(\min\{\delta(x),\ \delta(y)\})$ |
| $\text{aggiungiVertice}$(vertice v)                              | $\mathcal{O}(1)$                             |
| $\text{aggiungiArco}$(vertice x, vertice y)                      | $\mathcal{O}(1)$                             |
| $\text{rimuoviVertice}$(vertice v)                               | $\mathcal{O}(m)$                             |
| $\text{rimuoviArco}$(arco e)                                     | $\mathcal{O}(\delta(x) + \delta(y))$         |
dove:
- $\delta$ corrisponde al grado di un certo vertice;
- $m$ corrisponde al numero di archi nel grafo.
##### Come mai questi costi?
- Trovare gli archi incidenti o il grado di un vertice significa iterare dall'inizio della lista associata a tale vertice fino al termine di essa, eseguendo un numero di operazioni pari al grado stesso del vertice;
- capire se due vertici sono adiacenti significa iterare lungo la lista più corta associata ad uno dei due vertici studiati;
- aggiungere un vertice significa creare una nuova lista;
- aggiungere un arco significa aggiungere un nuovo nodo nella lista associata ad entrambi i vertici facenti parte dell'arco. Lo spostamento a destra del resto della lista ha costo ignorabile;
- rimuovere un vertice significa far scorrere tutte le liste ed eliminare eventuali nodi contenenti tale vertice. Questa è potenzialmente l'operazione più costosa tra tutte, avendo come costo il numero di archi del grafo;
- rimuovere un arco significa rimuovere due nodi, uno per ogni lista associata ad uno dei vettori dell'arco. Questo può potenzialmente richiedere lo scorrimento di entrambe le liste associate a tali vertici.
### Adiacenza nei grafi orientati
Anche nei grafi orientati si possono adoperare sia le Matrici che le Liste di Adiacenza: le uniche differenze si avranno nel fatto che qui cambierà il concetto di adiacenza:![[Pasted image 20250529151001.png]]Qui si può notare come, osservando la riga inerente al vertice $A$, si abbia un $1$ nell'incontro con $D$ e $B$, mentre nella riga inerente a $B$ si abbia un $1$ solamente nell'incontro con il vertice $C$ (e non anche con $A$, come accadeva nei grafi non orientati). La stessa cosa avverrà anche con le Lista di Adiacenza.
### Grafi Pesati
In questa variante dei grafi ad ogni arco viene associato un **peso** (o **costo**) e quando tra due vertici non vi è un arco si dice che i due hanno tra loro **costo infinito**. A seguire un esempio di Matrice di Adiacenza inerente ad un grafo non orientato pesato:![[Pasted image 20250529160754.png]]
### I Cammini
Si dice **cammino** una sequenza di vertici $\lt v_0, v_1, \dots, v_n \gt$ adiacenti tra loro. La **lunghezza** di un cammino corrisponde al numero di archi attraversati (quindi al numero di vertici $-1$).
Un cammino si dice inoltre **semplice** se ogni vertice compare una sola volta all'interno di esso.
A seguire un esempio di cammino semplice:![[Pasted image 20250529161836.png]]
Qualora esistesse un cammino che colleghi due vertici $x$ ed $y$, allora $y$ si direbbe **raggiungibile** da $x$ tramite un certo cammino $c$.
#### Grafi connessi
Un grafo non orientato si dice connesso qualora esista un cammino da ogni vertice ad ogni altro vertice. A seguire un esempio di grafo connesso:![[Pasted image 20250529162230.png]]ed uno di grafo non connesso:![[Pasted image 20250529162304.png]]
#### Grafi fortemente connessi
Un grafo orientato si dice fortemente connesso qualora esista un cammino da ogni vertice ad ogni altro vertice. Tuttavia questo risulta più complicato che nei grafi non orientati, in quanto si deve tenere conto anche dei versi dei vertici: il seguente grafo non risulterà difatti fortemente connesso, in quanto non esisterà un cammino per collegare un qualunque vertice ad $A$.![[Pasted image 20250529162737.png]]
#### Grafi debolmente connessi
Avendo un grafo orientato non fortemente connesso la cui controparte non orientata risulta connessa, allora il grafo orientato è detto **debolmente connesso**. Riproponendo l'esempio di grafo non fortemente connesso presentato in precedenza:
![[Pasted image 20250529163244.png]]
questo sarebbe un valido grafo debolmente connesso.
### Cicli
Un ciclo corrisponde ad un cammino con lunghezza:
- $\geq 1$ nei grafi orientati;
- $\geq 3$ nei grafi non orientati;
dove il primo vertice corrisponde all'ultimo, ovvero ad una situazione del tipo $\lt v_0, v_1, \dots, v_n \gt$ con $v_0 = v_n$.
Un ciclo si dice **semplice** se tutti i vertici facenti parte di esso, meno ovviamente il primo, sono distinti.
Un ciclo non orientato si dice **aciclico** quando non contiene cicli semplici, mentre un grafo orientato risulta **aciclico** quando non contiene cicli in generale.
### Grafi non orientati completi
Un grafo non orientato si dice **completo** quando ha un arco tra ogni coppia di vertici, come nel caso seguente:![[Pasted image 20250529164242.png]]In un grafo completo vi sono $\frac{n(n-1)}{2}$ archi totali, dove $n$ corrisponde al numero di vertici.
### Curiosità sul rapporto tra Grafi ed Alberi
La struttura dati dell'albero corrisponde ad un grafo dove un vertice viene eletto a **radice**, creando cosi un **albero radicato**. Esistono anche **alberi liberi**, dove non vi è una radice. Questi alberi corrispondono a dei grafi non orientati aciclici:![[Pasted image 20250529164632.png]]