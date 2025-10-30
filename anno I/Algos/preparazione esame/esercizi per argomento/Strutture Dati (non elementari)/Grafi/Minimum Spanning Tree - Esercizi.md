## Esercizio 1 - Trovare un MST a partire da un Grafo non-orientato
Si consideri il seguente grafo non orientato $G:$
![[Pasted image 20250620191246.png]]
Si disegni un albero di copertura di costo minimo di tale grafo, spiegando in che modo è stato calcolato.
### Esercizio 1 - Soluzione
Potremmo usare o l'[[Strutture dati (old)#Algoritmo di Kruskal|Algoritmo di Kruskal]] oppure l'[[Strutture dati (old)#Algoritmo di Prim|Algoritmo di Prim]]: in questo esempio useremo il primo.
Ordiniamo quindi (mentalmente) gli archi di $G$ in modo crescente, per poi cominciare a lavorare con essi:
- si ha un arco con peso $-2:$ lo si inserisce nell'$\text{MST}$ in quanto primo arco dell'ordinamento;
- si ha un arco con peso $-1:$ lo si inserisce in quanto non crea un loop con gli altri archi;

procediamo così fino a coprire tutti gli archi riordinati in precedenza. Al termine dell'operazione otterremo questo grafo:
![[Pasted image 20250620193003.png]]
Con sorgente nel vertice in basso a sinistra.
## Esercizio 2 - MST con peso complessivo minore uguale ad un certo k
Si consideri il seguente gioco per bambini che si sviluppa in un parco, su un campo di gioco che rappresentiamo tramite un grafo non orientato pesato $G(V, E, w)$. I vertici $v \in V$ identificano dei punti sul campo di gioco. In ogni punto si colloca un gruppo di bambini. Un arco $\{v_1, v_2\} \in E$ identifica la presenza in $v_1$ di un bambino che può spostarsi verso il punto $v_2$. Per fare ciò tuttavia il bambino richiede un numero di caramelle $w(v_1, v_2)$.
La maestra dei bambini sceglie un punto iniziale $s$ del campo di gioco, comunica ai bambini nel punto $s$ un messaggio segreto, e gli consegna un sacchetto con $k$ caramelle. All’inizio del gioco solo i bambini nel punto $s$ conoscono il messaggio segreto. Lo scopo è che tutti i bambini alla fine del gioco conoscano tale messaggio. La comunicazione del messaggio avviene attraverso passaparola, ovvero, un bambino che viene a conoscenza del messaggio nel punto $v_1$ può andare a comunicarlo ai bambini nel corrispondente punto $v_2$ (se esiste un arco ${v_1, v_2} \in E$). Ogni bambino che si sposta da $v_1$ a $v_2$ può prendere con sé alcune caramelle, inizialmente presenti nel sacchetto della maestra, passarle poi ai bambini nel punto $v_2$, tenendone per sé un numero pari a $w(v_1, v_2)$. Lo scopo del gioco è quindi raggiungibile solo se il numero iniziale $k$ di caramelle è sufficiente per permettere ad ogni bambino, che si sposta per il passaparola, di tenere per sé le proprie caramelle.
Scrivere un algoritmo che dato il grafo $G(V, E, w)$, il punto di partenza $s$, ed il numero iniziale di caramelle $k$, verifica se è possibile raggiungere lo scopo del gioco.
### Esercizio 2 - Soluzione
Questo esercizio si tratta puramente di trovare un $\text{MST}$ e compararne il peso complessivo con il valore dato $k$.
> **N.B** l'$\text{MST}$ non deve necessariamente partire da $s$, in quanto per la natura stessa di tale struttura dati, tale vertice comunicherà sempre e comunque con tutti gli altri vertici di $V$.

Usiamo l'[[Strutture dati (old)#Algoritmo di Kruskal|Algoritmo di Kruskal]] per ricavare l'$\text{MST}:$
```pseudocodice
function Passaparola(Grafo G(V, E, w), Vertice s, int k) -> Boolean
	total = 0
	let UF be a new UnionFind
	for v in V
		UF.makeSet(v)
	Sort(E, w) // ordino gli archi sulla base del peso w
	for {u, v} in E
		Tu = UF.find(u)
		Tv = UF.find(v)
		if Tu != Tv
			total += w({u, v})
			UF.union(Tu, Tv)
	return total <= k
```