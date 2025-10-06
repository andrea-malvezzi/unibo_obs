1. [[Alberi Binari di Ricerca - Esercizi#Esercizio 1 - Visualizzare un dato Albero Binario di Ricerca|Esercizio 1 - Visualizzare un dato Albero Binario di Ricerca]]
	1. [[Alberi Binari di Ricerca - Esercizi#Esercizio 1 - Soluzione|Soluzione]]
2. [[Alberi Binari di Ricerca - Esercizi#Esercizio 2 - Visualizzare un BST dopo la cancellazione di alcuni nodi|Esercizio 2 - Visualizzare un BST dopo la cancellazione di alcuni nodi]]
	1. [[Alberi Binari di Ricerca - Esercizi#Esercizio 2 - Soluzione|Soluzione]]
3. [[Alberi Binari di Ricerca - Esercizi#Esercizio 3 - Visualizzare un BST dopo la cancellazione di alcuni nodi|Esercizio 3 - Visualizzare un BST dopo la cancellazione di alcuni nodi]]
	1. [[Alberi Binari di Ricerca - Esercizi#Esercizio 3 - Soluzione|Soluzione]]
4. [[Alberi Binari di Ricerca - Esercizi#Esercizio 4 - Domanda Teorica sui figli nei BST|Esercizio 4 - Domanda Teorica sulle definizioni di Successore e Predecessore]]
	1. [[Alberi Binari di Ricerca - Esercizi#Esercizio 4 - Soluzione|Soluzione]]
5. [[Alberi Binari di Ricerca - Esercizi#Esercizio 5 - Domanda Teorica sul Delete|Esercizio 5 - Domanda Teorica sul Delete]]
	1. [[Alberi Binari di Ricerca - Esercizi#Esercizio 5 - Soluzione|Soluzione]]
6. [[Alberi Binari di Ricerca - Esercizi#Esercizio 6 - Chiavi in ordine decrescente (Ricorsivamente)|Esercizio 6 - Stampare le chiavi di un albero in ordine decrescente (ricorsivamente)]]
	1. [[Alberi Binari di Ricerca - Esercizi#Esercizio 6 - Soluzione|Soluzione]]
7. [[Alberi Binari di Ricerca - Esercizi#Esercizio 7 - Numero di Nodi con chiavi in un certo intervallo|Esercizio 7 - Numero di Nodi con chiavi in un certo intervallo]]
	1. [[Alberi Binari di Ricerca - Esercizi#Esercizio 7 - Soluzione|Soluzione]]
8. [[Alberi Binari di Ricerca - Esercizi#Esercizio 8 - Analisi del Costo di un algoritmo per costruire un BST|Esercizio 8 - Analisi del Costo di un algoritmo per costruire un BST]]
	1. [[Alberi Binari di Ricerca - Esercizi#Esercizio 8 - Soluzione|Soluzione]]
## Esercizio 1 - Visualizzare un dato Albero Binario di Ricerca
Dato un Albero Binario di Ricerca con chiavi numeriche intere, inizialmente vuoto, disegnare l’albero ottenuto dopo l’inserimento in ordine dei seguenti valori: $60, 80, 20, 25, 92, 21, 99, 90$.
> **N.B**: Disegnare $\not=$ Scrivi un algoritmo per disegnare, qui intende proprio di fare il disegno a mano dell'albero!

### Esercizio 1 - Soluzione
![[Pasted image 20250607154640.png]]
## Esercizio 2 - Visualizzare un BST dopo la cancellazione di alcuni nodi
Cancellare dall’albero ottenuto nell’[[Alberi Binari di Ricerca - Esercizi#Esercizi 1 - Visualizzare un dato Albero Binario di Ricerca|Esercizio 1]] i seguenti nodi in ordine: $92, 25, 99$.
### Esercizio 2 - Soluzione
![[Pasted image 20250607154821.png]]
## Esercizio 3 - Visualizzare un BST dopo la cancellazione di alcuni nodi
Cancellare dall’albero mostrato sotto i seguenti nodi in ordine: $80, 15, 20, 75, 60, 92$.
![[Pasted image 20250607154906.png]]
### Esercizio 3 - Soluzione
![[Pasted image 20250607155053.png]]
## Esercizio 4 - Domanda Teorica sui figli nei BST
È vero che se un nodo in un $\text{BST}$ ha due figli, allora il suo successore non ha un figlio sinistro e il suo predecessore non ha un figlio destro? Giustificare la risposta.
### Esercizio 4 - Soluzione
Ricordiamo le definizioni di $\text{successore}$ e di $\text{predecessore}$:
- $\text{successore}:$ il successore di un nodo $u$ corrisponde al nodo dal valore **minore maggiore** di $u$. Questo significa visitare il figlio destro di $u$ e poi visitare sempre quello più a sinistra. Secondo questa definizione, il successore di un nodo non può quindi avere un figlio sinistro;
- $\text{predecessore}:$ il predecessore di un nodo $u$ corrisponde al nodo dal valore **massimo minore** di $u$. Questo significa visitare il figlio sinistro di $u$ per poi visitare quello sempre più a destra (simmetricamente al caso del $\text{successore}$). Secondo questa definizione, il predecessore di un nodo non può quindi avere un figlio destro.
## Esercizio 5 - Domanda Teorica sul Delete
L’operazione delete su $\text{BST}$ è commutativa?
Per esempio, dato un qualsiasi $\text{BST}$, eliminare prima un nodo $u$ e poi un nodo $v$ produce sempre lo stesso $\text{BST}$ che otterremmo eliminando prima $v$ e poi $u$? Giustificare la risposta.
### Esercizio 5 - Soluzione
No, l'operazione di Delete su BST non è commutativa in quanto (per definizione) eliminando prima uno dei due figli di un nodo $v$ e poi il nodo $v$ stesso, creeremmo un albero diverso rispetto ad eliminare prima il nodo padre $v$ e in seguito suo figlio.
![[Pasted image 20250607221202.png]]
## Esercizio 6 - Chiavi in ordine decrescente (Ricorsivamente)
Dato un albero binario di ricerca, scrivere un algoritmo ricorsivo che stampi i valori delle sue chiavi in ordine decrescente.
### Esercizio 6 - Soluzione
Anzitutto controlliamo che il nodo attuale non sia $\text{NIL}$. In seguito, dovremo usare la tecnica $\text{DFS}$, invertendo l'approccio $\text{Inorder}$: dovremo visitare prima il figlio destro di un nodo, poi il nodo stesso ed infine il figlio sinistro.
Terminiamo la ricorsione quando giungiamo in una foglia.
```pseudocodice
function OrdineDecrescente(Node T)
	if T != NIL
		OrdineDecrescente(T.right)
		stampa T.key
		OrdineDecrescente(T.left)
```
## Esercizio 7 - Numero di Nodi con chiavi in un certo intervallo
Scrivere un algoritmo *possibilmente* efficiente che, dato in input l’albero binario di ricerca $T$ e due valori interi $a$ e $b$, con $a \lt b$, ritorni il numero di nodi la cui chiave appartiene all’intervallo $[a, b]$ (estremi inclusi).
### Esercizio 7 - Soluzione
Anzitutto comprendiamo in che direzione spostarci: avendo un nodo $x$ contente un valore $k$:
- se $a \leq k$ allora ci troviamo nell'intervallo studiato. Aumentiamo di $1$ il counter dei nodi, passiamo in rassegna tutto il sottoalbero sinistro (ogni valore al suo interno sarà compreso nell'intervallo) per poi procedere e controllare il sottoalbero di destra;
- se $a \gt k$ siamo fuori dall'intervallo e dobbiamo proseguire sul sottoalbero di destra (i valori maggiori sono a destra);
- se $b \lt k$ siamo al di sopra dell'intervallo. Questo però non nega il fatto che nel sottoalbero sinistro del nodo contenente $k$ vi siano altri nodi contenuti nell'intervallo, quindi proseguiamo su questo percorso.
```pseudocodice
function Conta(Node T, int a, int b)
	if T == NIL
		return 0
	if T.key < a
		return Conta(T.right, a, b)
	else
		if k <= b
			return 1
			+ Conta(T.left, a, b)
			+ Conta(T.right, a, b)
		else
			return Conta(T.left, a, b)
```
## Esercizio 8 - Analisi del Costo di un algoritmo per costruire un BST
Consideriamo la funzione:
```pseudocodice
BSTbuild(Array A[1, ... , n]) → BST
```
che costruisce un BST da un array di interi.
Dimostrare che qualsiasi implementazione di $\text{BSTBuild}$ basata sul confronto ha costo pessimo $\Omega(n \log{n})$.
### Esercizio 8 - Soluzione
Il costo sarà sempre $\Omega(n \log{n})$ in quanto occorrerà iterare sugli $n$ elementi dell'array ed il costo per l'inserimento di un elemento in un $\text{BST}$ è $O(\log{n})$. Quest'ultima operazione verrà effettuata una volta per ogni elemento dell'array, ergo il costo del caso peggiore $\Omega(n \log{n})$.