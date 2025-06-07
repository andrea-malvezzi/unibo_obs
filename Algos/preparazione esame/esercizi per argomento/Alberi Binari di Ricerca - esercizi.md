1. [[Alberi Binari di Ricerca - esercizi#Esercizio 1 - Visualizzare un dato Albero Binario di Ricerca|Esercizio 1 - Visualizzare un dato Albero Binario di Ricerca]]
	1. [[Alberi Binari di Ricerca - esercizi#Esercizio 1 - Soluzione|Soluzione]]
2. [[Alberi Binari di Ricerca - esercizi#Esercizio 2 - Visualizzare un BST dopo la cancellazione di alcuni nodi|Esercizio 2 - Visualizzare un BST dopo la cancellazione di alcuni nodi]]
	1. [[Alberi Binari di Ricerca - esercizi#Esercizio 2 - Soluzione|Soluzione]]
3. [[Alberi Binari di Ricerca - esercizi#Esercizio 3 - Visualizzare un BST dopo la cancellazione di alcuni nodi|Esercizio 3 - Visualizzare un BST dopo la cancellazione di alcuni nodi]]
	1. [[Alberi Binari di Ricerca - esercizi#Esercizio 3 - Soluzione|Soluzione]]
4. [[Alberi Binari di Ricerca - esercizi#Esercizio 4 - Domanda Teorica sui figli nei BST|Esercizio 4 - Domanda Teorica sulle definizioni di Successore e Predecessore]]
	1. [[Alberi Binari di Ricerca - esercizi#Esercizio 4 - Soluzione|Soluzione]]
## Esercizio 1 - Visualizzare un dato Albero Binario di Ricerca
Dato un Albero Binario di Ricerca con chiavi numeriche intere, inizialmente vuoto, disegnare l’albero ottenuto dopo l’inserimento in ordine dei seguenti valori: $60, 80, 20, 25, 92, 21, 99, 90$.
> **N.B**: Disegnare $\not=$ Scrivi un algoritmo per disegnare, qui intende proprio di fare il disegno a mano dell'albero!

### Esercizio 1 - Soluzione
![[Pasted image 20250607154640.png]]
## Esercizio 2 - Visualizzare un BST dopo la cancellazione di alcuni nodi
Cancellare dall’albero ottenuto nell’[[Alberi Binari di Ricerca - esercizi#Esercizi 1 - Visualizzare un dato Albero Binario di Ricerca|Esercizio 1]] i seguenti nodi in ordine: $92, 25, 99$.
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
