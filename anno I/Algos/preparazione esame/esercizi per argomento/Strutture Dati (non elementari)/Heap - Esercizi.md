1. [[Heap - Esercizi#Esercizio 1 - Funzionamento di Heapify & FixHeap|Esercizio 1 - Funzionamento di Heapify & FixHeap]]
	1. [[Heap - Esercizi#Esercizio 1 - Soluzione|Soluzione]]
2. [[Heap - Esercizi#Esercizio 2 - Visualizzare un Min-Heap dopo alcune modifiche|Esercizio 2 - Visualizzare un Min-Heap dopo alcune modifiche]]
	1. [[Heap - Esercizi#Esercizio 2 - Soluzione|Soluzione]]
## Esercizio 1 - Funzionamento di Heapify & FixHeap
Sia [[Strutture dati (old)#Costruire un Array Heap a partire da un Array non-ordinato|Heapify]] la funzione studiata a lezione, ed utilizzata dall’algoritmo di ordinamento $\text{heapsort}$, che dato un array di interi effettua scambi in modo tale da produrre un Max-Heap.
Si consideri l’esecuzione di $\text{Heapify}$ sull’array $A = [7, 1, 3, 9, 4, 8, 12]:$ si descrivano gli scambi che vengono effettuati per rendere l’array $A$ un Max-Heap.
### Esercizio 1 - Soluzione
Supponendo che $\text{Heapify}$ riceva come posizione della nuova radice quella del primo valore di $A$, allora (trattandosi questa di una funzione ricorsiva) creerà e riordinerà prima i sottoalberi contenenti le foglie, ovvero:$$\begin{array}{c}
t_1 = \{\colorbox{yellow}{1}, 9, 4\} \\
t_2 = \{\colorbox{yellow}{3}, 8, 12\}
\end{array}$$dove $\colorbox{yellow}{n}$ indica la radice di tale sottoalbero.
Ad ogni chiamata $\text{Heapify}$ chiama anche [[Strutture dati (old)#Ripristinare la proprietà di Max-Heap (o di Min-Heap)|FixHeap]] per sistemare il sotto-albero creato. Al termine delle chiamate per creare $t_1$ e $t_2$, avremo quindi due Max-Heap:$$\begin{array}{c}
t_1 = \{9, 1, 4\} \\
t_2 = \{12, 8, 3\}
\end{array}$$Al termine di queste due chiamate ricorsive occorrerà costruire l'albero contenente la radice (ovvero $7$): quest'albero inizialmente avrà la seguente forma: $T = \{7, t_1, t_2\}$.
Ora si chiamerà nuovamente FixHeap per riordinare questo nuovo albero, chiamando ricorsivamente questa stessa funzione nel caso vengano effettuati cambi.
Inizialmente si scambieranno quindi il $7$ con il $12$, poi si chiamerà di nuovo la funzione sul sotto-albero del $7$, scambiandolo con l'$8$.
Il Max-Heap finale sarà quindi uguale a:![[Pasted image 20250609173528.png]]
## Esercizio 2 - Visualizzare un Min-Heap dopo alcune modifiche
Si consideri il seguente Min-Heap di grado $3$ in cui, per comodità, consideriamo la sola presenza delle chiavi:![[Pasted image 20250609173625.png]]Disegnare come cambia tale Heap dopo l’esecuzione delle seguenti operazioni:
- $\text{increaseKey}(2 , 8)$ che modifica la chiave $2$ trasformandola in $8$;
- $\text{insert}(4)$ che inserisce la chiave $4$ nell'Heap;
- $\text{delete}(21)$ che elimina la chiave $21$ dall'Heap;
- $\text{delete}(14)$ che elimina la chiave $14$ dall'Heap;
- $\text{deleteMin}()$ che elimina la chiave minima dall'Heap.
### Esercizio 2 - Soluzione
La prima funzione modifica il valore della radice da $2$ a $8$. Questo comporta una chiamata a $\text{FixHeap}$ per ripristinare la proprietà di Min-Heap. Dopo tali chiamate si avrà quindi un Heap come il seguente:
![[Pasted image 20250609174103.png]]
La seconda funzione inserisce il valore $4$ nell'Heap. Anche questo comporta una chiamata a $\text{FixHeap}$, partendo dal genitore del nodo appena inserito. A seguito di tale operazione si scambieranno il $7$ ed il $4$, per poi risalire alla radice e scambiare il $5$ con il $4$. Al termine di questa sequenza di scambi si avrà un Min-Heap della forma seguente:
![[Pasted image 20250609174523.png]]
La terza operazione cancellerebbe una foglia. Se si fosse trattato dell'ultima foglia dell'albero (quella più a destra) non sarebbe stato necessario fare nient'altro. In questo caso stiamo però cancellando una foglia intermedia, che lascerebbe quindi un vuoto (per definizione le foglie di un Heap devono essere compresse verso sinistra).
Scambiamo quindi il $21$ con il valore dell'ultima foglia, per poi cancellare quest'ultima. Nel nostro caso questo significa scambiare il $21$ ed il $7$ e cancellare il nodo che prima conteneva il $7$.
Ora richiamiamo $\text{FixHeap}$ sul sottoalbero contenente il $7$ e continuiamo fino ad ad arrivare alla radice: questo significa scambiare il $9$ con il $7$, per ottenere un Heap come il seguente:
![[Pasted image 20250609175244.png]]
Per la quarta operazione occorrerà rifare la stessa cosa fatta per la terza funzione. Questo significa scambiare il $14$ con l'$8$, cancellare il $14$, chiamare $\text{FixHeap}$ sul sotto-albero ora contenente l'$8$ e risalire fino alla radice, scambiando $13$ ed $8$ e fermandosi, per ottenere un Min-Heap come il seguente:
![[Pasted image 20250609175458.png]]
L'ultima operazione cancellerà la radice (il valore minimo di un Min-Heap corrisponde alla radice) per poi richiamare $\text{FixHeap}$ a partire dalla radice. In questo caso questo significa scambiare il $4$ ed il $19$, cancellare il $4$, poi con $\text{FixHeap}$ scambiare il $19$ con il $5$ e terminare.
Al termine di questa sequenza di operazioni si avrà un Min-Heap come il seguente:
![[Pasted image 20250609175723.png]]