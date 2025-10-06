1. [[Visite di Grafi - Esercizi#Esercizio 1 - Visita BFS su un grafo G|Esercizio 1 - Visita BFS su un grafo G]]
	1. [[Visite di Grafi - Esercizi#Esercizio 1 - Soluzione|Soluzione]]
2. [[Visite di Grafi - Esercizi#Esercizio 2 - Visita DFS su un grafo G con d.t. e f.t.|Esercizio 2 - Visita DFS su un grafo G con d.t. e f.t.]]
	1. [[Visite di Grafi - Esercizi#Esercizio 2 - Soluzione|Soluzione]]
3. [[Visite di Grafi - Esercizi#Esercizio 3 - Algoritmo per rilevare un ciclo lungo K|Esercizio 3 - Algoritmo per rilevare un ciclo lungo K]]
	1. [[Visite di Grafi - Esercizi#Esercizio 3 - Soluzione|Soluzione]]
4. [[Visite di Grafi - Esercizi#Esercizio 4 - Stampare un Ciclo in un Grafo Orientato|Esercizio 4 - Stampare un Ciclo in un Grafo Orientato]]
	1. [[Visite di Grafi - Esercizi#Esercizio 4 - Soluzione|Soluzione]]
## Esercizio 1 - Visita BFS su un grafo G
Si consideri il grafo orientato $G$ rappresentato tramite liste di adiacenza come da seguente diagramma:![[Pasted image 20250612152849.png]]
Si disegni l’albero di visita che viene restituito dall’esecuzione della visita $\text{BFS}$ a partire dal vertice $A$.
### Esercizio 1 - Soluzione
La visita $\text{BFS}$ visita prima la sorgente $A$, poi i nodi a distanza $1$ da essa, ovvero $C, E, F$. In seguito parte da $C$ e visita $B$ (il nodo $A$ è già stato visitato e non devo aggiungerlo all'albero). Poi non scendiamo da $B$, ma finiamo il giro di adiacenti ad $A$. Questo significa che visiteremo $D$ da $F$, non da $B$. Quindi otterremo un albero come il seguente:![[Pasted image 20250612153705.png]]
## Esercizio 2 - Visita DFS su un grafo G con d.t. e f.t.
Si consideri il grafo orientato $G$ rappresentato tramite liste di adiacenza come da seguente diagramma:![[Pasted image 20250612153744.png]]
Si disegni l’albero di visita che viene restituito dall’esecuzione della visita $\text{DFS}$ a partire dal vertice $A$. A fianco di ogni vertice visitato, riportare anche i corrispondenti $\text{discovery time}$ e $\text{finish time}$.
### Esercizio 2 - Soluzione
La visita $\text{DFS}$ visita prima $A$, con $d.t. = 1$ per poi visitare ricorsivamente tutti i suoi adiacenti e così via. Questo significa che inizialmente si visiterà $A$ (con $d.t.=1$), senza terminarne la visita, passando subito a $C$ (con $d.t.=2$) e così anche per questo nodo: il primo nodo ad essere effettivamente "chiuso" sarà il primo adiacente di $C$ in quanto da esso non si può raggiungere nessun nuovo vertice (ovvero $B$ con $d.t.=3$ e $f.t.=4$). In seguito si chiuderà il vertice $C$, che avrà $f.t.=5$. Tornando ora al punto di partenza, ovvero $A$, visiteremo il suo secondo adiacente, ovvero $E$ (che avrà $d.t.=6$). Da qui scorreremo di nuovo e visiteremo il primo adiacente di $E$ non già visitato, ovvero $F$ (con $d.t. = 7$). Visitiamo il suo adiacente $D$ ($.d.t.=8$ e $f.t.=9$). Chiuso $D$ chiudiamo anche $F$ (con $d.t.=10$) ed in seguito chiudiamo $E$ ($f.t. = 11)$ e passiamo al terzo ed ultimo adiacente di $A$, che però è già stato visitato precedentemente. Chiudiamo ora quindi $A$, con $f.t.=12$. Otterremo quindi un albero come il seguente:![[Pasted image 20250612160447.png]]
## Esercizio 3 - Algoritmo per rilevare un ciclo lungo K
Progettare un algoritmo che dato un grafo orientato $G = \lt V, E \gt$, due vertici $v_1 ,v_2 \in V$, ed un numero naturale $K$, restituisce $\text{true}$ se esiste un ciclo di lunghezza minore o uguale a $K$ che include sia $v_1$ che $v_2$, altrimenti restituisce $\text{false}$.
### Esercizio 3 - Soluzione
Questo esercizio si tratta semplicemente di fare la distanza minima tra $v_1$ e $v_2$ tramite visita $\text{BFS}$, per poi controllare se questa risulti $\leq k$.
```pseudocodice
function LunghezzaCiclo(Grafo G, Vertice x, Vertice y, int k) -> Boolean
	return (Distanza(G, x, y) + Distanza(G, y, x)) <= k

// calcola la distanza tra due vertici
function Distanza(Grafo G, Vertice x, Vertice y) -> Int
	for Vertice v in G
		v.mark = false
	let Q be a new Queue
	x.dist = 0
	Enqueue(Q, x) // x -> sorgente
	while Q.size != 0
		Vertice v = Dequeue(Q)
		for s adiacente a v
			if !s.mark
				Enqueue(Q, s)
				s.parent = v
				s.dist = s.parent.dist + 1
				if (s == y)
					return s.dist
	return -1
```
## Esercizio 4 - Stampare un Ciclo in un Grafo Orientato
Progettare un algoritmo che dato un grafo orientato $G = \lt V, E \gt$ stampa uno qualsiasi dei suoi cicli, se ne esiste almeno uno, altrimenti stampa la stringa "grafo aciclico".
### Esercizio 4 - Soluzione
Per cercare un ciclo in un grafo orientato si può usare la visita $\text{DFS}$, in quanto un ciclo corrisponde alla situazione dove, visitando un vertice $v$, incontriamo nelle sue adiacenze un altro vertice $k$ marcato come "gray", ovvero di cui stiamo ancora terminando la visita (se stiamo terminando la visita di $k$ e ci troviamo in $v$, esiste un cammino tra $k$ e $v$).
Basterà poi stampare l'albero corrispondente al cammino tra $k$ e $v$, ripetendo $k$ per chiudere il ciclo.
```pseudocodice
// variabili globali
// flag
Boolean found = false
// vertice inizio & fine ciclo
Vertice start, end = NIL
	
function CicloInGrafoOrientato(Grafo G)
	for Vertice v in G
		v.mark = white
		v.parent = NIL

	for Vertice v in G
		if !found && v.mark == white
			DFS(v)

	if found
		PrintPath(start, end)
	else
		print(grafo aciclico)

function DFS(Vertice v)
	v.mark = gray
	for Vertice k adiacente a v
		// trovato ciclo
		if k.mark == gray
			loop = true
			start = v
			end = k
		if !found && k.mark == white
			k.parent = v
			DFS(k)
	v.mark = black

function PrintPath(Vertice s, Vertice e)
	// se fine ed inizio sono uguali, mi trovo alla fine
	if (s == e)
		print(s)
	else
		// inizio e uno prima della fine. Faccio passare tutto l'"albero"
		PrintPath(s, e.parent)
		print(s)
```