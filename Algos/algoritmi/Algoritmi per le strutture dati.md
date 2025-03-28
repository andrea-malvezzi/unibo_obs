## Algoritmi per gli alberi
A seguire un elenco di algoritmi utili per lavorare con gli alberi.
### Algoritmi di Visita per alberi binari
Due tipi di algoritmi di visita:
- **Depth-first Search (DFS)**: va più in profondità possibile e quando non riesce più a farlo torna al livello precedente. Ne esistono tre varianti.
- **Breadth-first Search (BFS)**: esegue la ricerca livello per livello.
#### DFS Preorder (binari)
Visita anzitutto la radice, poi il nodo sinistro e successivamente quello destro. Ecco l'implementazione in Java:
```java
public void DFS_Preorder(Node radice){
	if (radice != NULL){
		Visit(radice);
		DFS_Preorder(radice.left);
		DFS_Preorder(radice.right);
	}
}
```
#### DFS Inorder (binari)
Visita il nodo sinistro, la radice e finalmente il nodo destro. Ecco l'implementazione in Java:
```java
public void DFS_Inorder(Node radice){
	if (radice != NULL){
		DFS_Inorder(radice.left);
		Visit(radice);
		DFS_Inorder(radice.right);
	}
}
```
#### DFS Postorder (binari)
Visita il nodo sinistro, quello destro e per concludere la radice. Ecco l'implementazione in Java:
```java
public void DFS_Postorder(Node radice){
	if (radice != NULL){
		DFS_Postorder(radice.left);
		DFS_Postorder(radice.right);
		Visit(radice);
	}
}
```
#### BFS con coda ausiliaria (binari)
Aggiunge la radice a una coda. Inizia un ciclo while che fa il dequeue e visita il nodo rimosso dalla coda, fino a quando la coda risulta vuota. Ecco l'implementazione in Java:
```java
public void BFS(Node radice){
	Queue Q;
	
	if (radice != NULL)
		Q.Enqueue(radice);

	Node current;
	while (Q.size != 0){
		current = Q.Dequeue();
		Visit(current);
		if (current.left != NULL)
			Q.enqueue(current.left);
		if (current.right != NULL)
			Q.enqueue(current.right);
	}
}
```
### Algoritmi di Visita per alberi non-binari
Medesime operazioni, ma implementazioni diverse in quanto ogni Nodo avrà due puntatori:
- **first**: per il primo figlio;
- **next**: per il prossimo fratello;
#### DFS Preorder (non-binari)
Implementazione in Java:
```java
public void DFS_Preorder_NBT(Node radice){
	if (radice != NULL){
		Visita(radice);
		DFS_Preorder_NBT(radice.first);
		DFS_Preorder_NBT(radice.next);
	}
}
```
#### DFS Inorder (non-binari)
Implementazione in Java:
```java
public void DFS_Inorder_NB(Node radice){
	if (radice != NULL){
		DFS_Inorder_NB(radice.first);
		Visita(radice);
		DFS_Inorder_NB(radice.next);
	}
}
```
#### DFS Postorder (non-binari)
Implementazione in Java:
```java
public void DFS_Postorder_NB(Node radice){
	if (radice != NULL){
		DFS_Postorder_NB(radice.first);
		DFS_Postorder_NB(radice.next);
		Visita(radice);
	}
}
```
#### Osservazione sulle precedenti implementazioni
Invece di un approccio puramente ricorsivo si potrebbe anche implementare un ciclo *for* per iterare su tutti i figli di un nodo e chiamare ricorsivamente la funzione solo sul nodo corrente (ma si preferisce l'approccio ricorsivo).
#### BFS con coda ausiliaria (non-binari)
Implementazione in Java:
```java
public void BFS_NB(Node radice){
	Queue Q;
	
	if (radice != NULL)
		Q.enqueue(radice);

	while (Q.size != 0){	
		Node current = Q.dequeue();
		Visita(current);
		Node temp = current.first;
		while (temp != NULL){
			Q.enqueue(temp.next);
			temp = temp.next;
		}
	}
}
```