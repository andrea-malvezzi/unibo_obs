## Alberi
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
Un albero binario si dice completo se ogni suo nodo intermedio possiede esattamente due figli.
##### Perfezione di un albero binario
Un albero binario si dice perfetto se è completo e se tutte le sue foglie sono alla stessa profondità. Ad esempio:
![[Pasted image 20250313123004.png]]
### Algoritmi per gli alberi binari e non
Per l'elenco completo di algoritmi per operare sugli alberi binari e non, clicca [[Algoritmi per le strutture dati#Algoritmi per gli alberi|qui]]!