## Liste
Collezioni sequenziali di **nodi**, con un puntatore al primo elemento (alla **head**).

Ogni nodo contiene un campo **next**, ovvero un puntatore all'elemento successivo della lista, ed un campo **value**.

> Esistono molte varianti di liste ma quelle più popolari sono quelle concatenate (standard) e quelle doppiamente concatenate.
## Stack
Struttura dati con filosofia **LIFO**. Si ha un puntatore al primo nodo che viene costantemente aggiornato quando si effettuano operazioni di **pop** o di **push**. Implementando una proprietà **size** si può implementare un metodo **isEmpty** con costo costante.
## Queue
Struttura dati con filosofia **FIFO**. Si ha un puntatore al primo e all'ultimo nodo, in modo da rendere costante il costo delle operazioni di **enqueue** e di **dequeue**.
## Alberi
Struttura dati che si sviluppa verso il basso (visualmente) a partire da un nodo detto **radice**. Ogni nodo può avere da $1$ ad $n$ figli in base al tipo di albero. Ogni nodo possiede:
- un **grado**, ovvero un numero di figli e nipoti;
- una **profondità**, ovvero la distanza in **livelli** tra esso e la radice;

> Per **livello** si intende un insieme di nodi ad una medesima distanza dalla radice. I nodi all'ultimo livello dell'albero si dicono **foglie**.

Inoltre un albero ha anche un **altezza** ($h$), corrispondente al numero di livelli contenuti all'interno di esso. Per convenzione un albero vuoto ha $h = -1$, mentre un albero contenente solamente la propria radice ha $h = 0$.
### Alberi binari
Un **albero binario** è uno speciale albero in cui ogni nodo possiede un massimo di $2$ figli, uno **left** ed uno **right**.

Un albero binario si dice:
- **completo**, quando ogni suo nodo non-foglia possiede esattamente $2$ figli;
- **perfetto**, quando è completo e tutte le sue foglie si trovano al medesimo livello;
- **quasi perfetto**, quando è perfetto fino all'ultimo livello e tutte le sue foglie sono compattate a sinistra nell'ultimo;
#### Visitare un albero binario
Per visitare un albero binario si può optare per $2$ approcci:
- tramite **DFS - Depth First Search**;
- tramite **BFS - Breadth First Search**.

Nel primo caso si visita ogni nodo ricorsivamente: questo significa che si partirà dai nodi più in basso per poi risalire l'albero piano piano.
In base all'implementazione si può parlare di tre tipi diversi di visita tramite **DFS**:
- $\text{Inorder}:$ visito nodo sinistro $\rightarrow$ nodo centrale (padre) $\rightarrow$ nodo destro;
- $\text{Preorder}:$ visito padre $\rightarrow$ nodo sinistro $\rightarrow$ nodo destro;
- $\text{Postorder}:$ visito nodo sinistro $\rightarrow$ nodo destro $\rightarrow$ padre;

Ognuna di queste implementazioni avrà costo pari ad $O(n)$, dove $n$ equivale al numero di nodi dell'albero.

Nel caso di visita tramite **BFS** invece si visita ogni nodo di un certo livello per poi passare al successivo. Per farlo si usa una [[Strutture Dati#Queue|Queue]] nella quale viene inizialmente inserita la radice dell'albero, e poi iterativamente tutti i figli del nodo che si sta visitando. In questo modo si crea una visita "sequenziale" grazie alla natura della Queue.
### Alberi binari di ricerca BST
Un **BST** è un albero binario dove per inserire un nuovo elemento nell'albero occorre discenderlo a sinistra o a destra, in base a se il valore da inserire risulta maggiore o minore di quello contenuto dal nodo attuale (partendo dalla radice).

In un BST ha senso quindi parlare di nodi predecessori e successori.

Si dice successore di un nodo $x$ un altro nodo $k$ con valore minimo maggiore di quello di $x$. Questo corrisponde al visitare il nodo immediatamente a destra di $x$, per poi discendere l'albero tenendo la sinistra. Ad esempio, nell'albero seguente, il successore di $60$ sarebbe $70$:
![[Pasted image 20250607154906.png]]
In quanto il nodo contenente il $70$ non ha un figlio sinistro.

Si dice predecessore di un nodo $x$ il nodo $k$ contenente il valore massimo precedente a quello di $x$. Il modo per arrivare a tale nodo $k$ dipenderà da se $x$ possegga un figlio sinistro o meno:
- se non lo possiede, allora il nodo $k$ sarà il primo nodo contenente $x$ nel proprio sotto albero destro;
- se lo possiede, allora per trovare $k$ basterà discendere tenendo la destra il sottoalbero sinistro di $x$.

Ecco due esempi di predecessori ($u$ è predecessore di $v$):
![[Pasted image 20250328151743.png]]![[Pasted image 20250328152153.png]]
#### Operare sui BST
Operare sui BST comporta un costo pessimo pari a $O(h)$, dove $h$ equivale all'altezza dell'albero. Questo accade perché, che si tratti di inserire o rimuovere un nodo, bisognerà sempre discendere l'albero per raggiungere la posizione su cui operare. Questo può essere fatto tramite approccio DFS e BFS.

L'inserimento è l'operazione più diretta, in quanto si tratta puramente di discendere l'albero dirigendosi a sinistra se il nuovo dato da inserire è minore di quello nel nodo appena visitato, oppure a destra, fino a raggiungere una posizione che non sia già occupata.

La rimozione di un nodo $x$ è invece un'operazione più complessa dato che bisogna sistemare l'albero dopo la rimozione, nel caso in cui il nodo non si tratti di una foglia:
- se il nodo $x$ ha un solo figlio $k$, allora $k$ prenderà il il posto che $x$ occupava previa la sua eliminazione;
- se il nodo $x$ ha due figli $y$ e $z$, allora occorrerà trovare il predecessore $p$ di $x$, scambiare il valore di questi due nodi, ed eliminare il nodo che precedentemente conteneva il predecessore. Ad esempio, nella seguente immagine, se volessimo eliminare il nodo $v$, dovremmo scambiarne il valore con il suo predecessore (ovvero $u$), per poi eliminare $u$. Questo rimuove quindi il valore da eliminare dall'albero ed evita buchi nella sua struttura.![[Pasted image 20250328151743.png]]
### Alberi AVL
Un albero AVL è un BST auto-bilanciante (ricordi la definizione di "[[Strutture Dati#Alberi|albero bilanciato]]"?), il cui obiettivo è quello di mantenere l'altezza dell'albero sempre logaritmica rispetto al numero di nodi, garantendo così operazioni con costo pari a $O(\log{n})$.

Per fare ciò, gli AVL implementano un fattore di bilanciamento associato ad ogni nodo, definito nella maniera seguente:$$\beta (v) = \text{altezza del sottoalbero sinistro} - \text{altezza del sottoalbero destro}$$Un albero si dice quindi bilanciato in altezza se per ogni suo nodo si ha $|\beta(v)| \leq 1$. Quando invece un nodo ha $|\beta(v)| = 2$, allora si tratta di un nodo critico e occorre ribilanciare l'albero.
#### Mantenere il bilanciamento dopo le varie operazioni
Per mantenere il bilanciamento dopo inserimenti o rimozioni, gli AVL usano specifiche operazioni chiamate **rotazioni**. Una rotazione è un operazione di costo costante che preserva l'ordinamento del BST.

Esistono due tipi di rotazione: quella verso destra e quella verso sinistra. Entrambe effettuano la medesima operazione, solo a verso opposto.

Supponendo di voler ruotare verso destra il seguente albero su perno $u$ (ruoto il sottoalbero con radice $u$)
![[Pasted image 20251030202504.png]]
Allora dovrei:
- porre il figlio sinistro di $u$ come nuova radice del sottoalbero;
- porre $u$ come figlio destro di $v$;
- porre il sottoalbero destro di $v$ come sottoalbero sinistro di $v$.

Il risultato della rotazione a destra su perno $u$ dell'albero presentato in esempio precedentemente sarebbe:
![[Pasted image 20251030202834.png]]
E per effettuare una rotazione a sinistra su perno $u$, basterebbe invertire destra e sinistra in ogni operazione. Il risultato sarebbe l'albero da cui eravamo partiti per la rotazione a destra!
#### Tipi di sbilanciamento
Esistono $4$ tipi di sbilanciamento ed ognuna ha una risoluzione simile alle altre, seppur con una leggera modifica al verso delle operazioni $\dots$

- sbilanciamento **SS (Sinistra-Sinistra)**: si ha quando $|\beta(u)| = 2$ e $|\beta(u.\text{left})| \geq 0$. La soluzione è una rotazione a destra su $u$;
- sbilanciamento **DD (Destra-Destra)**: si ha quando $|\beta(u) = -2$ e $|\beta(u.\text{right})| \leq 0$. La soluzione è una rotazione a sinistra su $u$;
- sbilanciamento **SD**: si ha quando $|\beta(u) = 2|$ e $|\beta(u.\text{left})| = -1$. La soluzione è una doppia rotazione, prima a sinistra su $u.\text{left}$ (per ottenere un SS) e poi una a destra su $u$;
- sbilanciamento **DS**: si ha quando $|\beta(u) = -2|$ e $|\beta(u.\text{right})| = 1$. La soluzione è una doppia rotazione, prima a destra su $u.\text{right}$ (per ottenere un e poi a sinistra su $u$.
#### Inserimento e rimozione in un AVL
