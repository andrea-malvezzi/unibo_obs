## Pila
Struttura dati **LIFO**, support push e pop. Entrambe le operazioni hanno costo costante in quanto si accede direttamente all'elemento interessato (senza servirsi di loop o simili).
## Coda
Struttura dati **FIFO**, supporta enqueue e dequeue. Anche in questo caso le operazioni presentate hanno costo costante, servendosi di un puntatore alla coda per un inserimento rapido.
## Albero
Un **albero** è una **struttura dati non lineare**, il che significa che i suoi elementi non sono collegati tra loro secondo uno schema sequenziale, come avviene negli array o nelle liste.
### Definizione di Albero
Un albero è composto da **nodi** (o **vertici**) collegati tra loro mediante **archi**. Il nodo situato al livello più alto si chiama **radice**, mentre quelli situati ai livelli più bassi si chiamano **foglie**. Ogni coppia di nodi è connessa da un unico percorso.
Un albero può essere suddiviso in **sotto-alberi**, le cui radici sono collegate alla radice principale tramite un unico percorso.
### Definizioni utili
#### Profondità di un nodo
La profondità di un nodo $u$ è la lunghezza del percorso che va dalla radice al nodo $u$ (calcolata in numero di nodi percorsi).
#### Livello
Per livello si intende l'insieme di tutti i nodi ad una certa profondità. Ad esempio, il secondo livello del seguente albero:
![[Pasted image 20250313120943.png]]
corrisponde al seguente insieme:
![[Pasted image 20250313120924.png]]
#### Altezza di un albero
L'altezza di un albero corrisponde alla sua massima profondità. Nel caso in cui un albero sia vuoto, per convenzione si dice che ha altezza pari a $-1$.
#### Grado di un nodo
Il grado di un nodo è il numero dei suoi figli. Ad esempio, la radice di questo albero:![[Pasted image 20250313120943.png]]
ha grado pari a $10$.
### Alberi Ordinati
Un albero si dice **ordinato** se i suoi nodi figli seguono un determinato criterio di ordinamento. Questo concetto è particolarmente rilevante negli [[Strutture dati#Alberi Binari|alberi binari]], che vedremo in dettaglio nella sezione successiva.
### Alberi Binari
Un albero binario è un particolare tipo di albero in cui ogni nodo possiede $\underline{\text{al massimo}}$ due figli, uno di sinistra ed uno di destra.
#### Definizioni utili
##### Completezza di un albero binario
Un albero binario si dice completo se ogni suo nodo intermedio possiede *esattamente* due figli.
##### Perfezione di un albero binario
Un albero binario si dice perfetto se è completo e se tutte le sue foglie sono alla stessa profondità. Ad esempio:
![[Pasted image 20250313123004.png]]
#### Algoritmi per gli alberi binari e non
Per l'elenco completo di algoritmi per operare sugli alberi binari e non, clicca [[Algoritmi per le strutture dati#Algoritmi per gli alberi|qui]]!
### Alberi Binari di ricerca
Gli alberi binari di ricerca contengono un valore minore di quello nel nodo corrente nel figlio sinistro e un valore maggiore in quello destro. Questo li rende ideali per usare la ricerca binaria.
Il caso peggiore di ogni operazione apllicabile su questi avrà caso peggiore $\Theta(n)$, dove $n$ corrisponderà all'altezza dell'albero, e caso migliore $O(1)$.
#### Minimi e massimi assoluti
Seguendo la definizione di **BST**, si possono trovare il minimo ed il massimo assoluti di un albero seguendo i rami più a sinistra o a destra rispettivamente.![[Pasted image 20250328145607.png]]
#### Definizione di predecessore di un nodo
Si dice predecessore di un nodo $v$ un altro nodo $u$ con valore massimo minore di quello dato: ovvero il nodo che verrebbe visitato immediatamente prima di quello dato in una visita Inorder.
Si hanno due casi:
- il nodo $v$ ha un sottoalbero sinistro. Il predecessore è quindi il nodo contenente il valore maggiore nel sottoalbero sinistro di $v$:![[Pasted image 20250328151743.png]]
- il nodo $v$ non ha un sottoalbero sinistro. In questo caso il predecessore $u$ è quindi il primo nodo per cui $v$ sia contenuto nel proprio sottoalbero destro:![[Pasted image 20250328152153.png]]
#### Rimozione di un nodo in un BST
In un BST rimuovere un nodo potrebbe risultare in un alterazione della struttura dell'intero albero, a causa della proprietà di questi di essere ordinati secondo un particolare criterio.
 - Il nodo $v$ da rimuovere è una foglia (non ha figli). In questo caso rimuoviamo $v$ senza complicazioni.
 - Il nodo $v$ da rimuovere ha un solo figlio $u$. Ora $u$ prenderà il posto di $v$ come figlio del genitore $g$ di $v$: ciò significa che sarà figlio destro di $g$ se $u$ era figlio destro, e sinistro se $u$ era figlio sinistro.
 - Il nodo $v$ da rimuovere ha due figli. In questo caso cerchiamo il predecessore $u$ di $v$, scambiamo i valori di $u$ e di $v$ e rimuoviamo quello che era originariamente $u$. Così facendo il nodo $u$ originale avrà sempre al massimo un figlio e sarà quindi più semplice da rimuovere (vedi caso precedente).
 - 