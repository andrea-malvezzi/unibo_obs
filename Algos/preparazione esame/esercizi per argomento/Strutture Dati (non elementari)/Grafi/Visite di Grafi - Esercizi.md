1. [[Visite di Grafi - Esercizi#Esercizio 1 - Visita BFS su un grafo G|Esercizio 1 - Visita BFS su un grafo G]]
	1. [[Visite di Grafi - Esercizi#Esercizio 1 - Soluzione|Soluzione]]
2. [[Visite di Grafi - Esercizi#Esercizio 2 - Visita DFS su un grafo G con d.t. e f.t.|Esercizio 2 - Visita DFS su un grafo G con d.t. e f.t.]]
	1. [[Visite di Grafi - Esercizi#Esercizio 2 - Soluzione|Soluzione]]
3. [[Visite di Grafi - Esercizi#Esercizio 3 - Algoritmo per rilevare un ciclo lungo K|Esercizio 3 - Algoritmo per rilevare un ciclo lungo K]]
	1. [[Visite di Grafi - Esercizi#Esercizio 3 - Soluzione|Soluzione]]
4. 
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
