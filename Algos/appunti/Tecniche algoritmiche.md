1. [[Tecniche algoritmiche#Introduzione|Introduzione]]
2. [[Tecniche algoritmiche#Divide-et-impera|Divide-et-impera]]
	1. [[Tecniche algoritmiche#Quando applicare tecniche Divide-et-impera|Quando applicare tecniche Divide-et-impera]]
	2. [[Tecniche algoritmiche#Esempio di problema risolvibile con tecniche Divide-et-impera|Esempio di problema risolvibile con tecniche Divide-et-impera]]
		1. [[Tecniche algoritmiche#Le torri di Hanoi|Le torri di Hanoi]]
			1. [[Tecniche algoritmiche#Risoluzione del problema delle Torri di Hanoi|Risoluzione del problema delle Torri di Hanoi]]
3. [[Tecniche algoritmiche#Algoritmi Greedy|Algoritmi Greedy]]
	1. [[Tecniche algoritmiche#Algoritmi Greedy#Esempi di problemi risolvibili con tecniche Greedy|Esempi di problemi risolvibili con tecniche Greedy]]
		1. [[Tecniche algoritmiche#Algoritmi Greedy#Esempi di problemi risolvibili con tecniche Greedy#Il problema del resto|Il problema del resto]]
			1. [[Tecniche algoritmiche#Algoritmi Greedy#Esempi di problemi risolvibili con tecniche Greedy#Il problema del resto#Soluzione al problema del resto con tecnica Greedy|Soluzione al problema del resto con tecnica Greedy]]
		2. [[Tecniche algoritmiche#Algoritmi Greedy#Esempi di problemi risolvibili con tecniche Greedy#Problema di Scheduling (Shortest Job First)|Problema di Scheduling (Shortest Job First)]]
			1. [[Tecniche algoritmiche#Algoritmi Greedy#Esempi di problemi risolvibili con tecniche Greedy#Problema di Scheduling (Shortest Job First)#Risoluzione del problema di Scheduling (Shortest Job First)|Risoluzione del problema di Scheduling (Shortest Job First)]]
4. [[Tecniche algoritmiche#Programmazione dinamica|Programmazione Dinamica]]
	1. [[Tecniche algoritmiche#Esempi di problemi risolvibili con la Programmazione Dinamica|Esempi di problemi risolvibili con la Programmazione Dinamica]]
		1. [[Tecniche algoritmiche#Il problema dello zaino (Knapsack problem)|Il problema dello zaino (Knapsack problem)]]
		2. [[Tecniche algoritmiche#Distanza di Levenshtein|Distanza di Levenshtein]]
			1. [[Tecniche algoritmiche#Definizione della Distanza di Levenshtein|Definizione della Distanza di Levenshtein]]
			2. [[Tecniche algoritmiche#Procedimento per il calcolo di $\text{V}[i, j]$ nella Distanza di Levenshtein|Procedimento per il calcolo di V[i, j] nella Distanza di Levenshtein]]
			3. [[Tecniche algoritmiche#Esempio di applicazione della Distanza di Levenshtein|Esempio di applicazione della Distanza di Levenshtein]]
## Introduzione
Esistono 3 tipi di tecniche algoritmiche:
- **Divide-et-impera**: si divide un problema in sotto-problemi simili da risolvere ricorsivamente;
- **Algoritmi greedy**: si cerca di fare sempre la scelta migliore per ogni operazione svolta;
- **Programmazione dinamica**: si costruisce la soluzione partendo da un insieme di sotto-problemi.
## Divide-et-impera
Si hanno tre fasi:
- **Divide**: si frammenta il problema in sotto-problemi simili;
- **Impera**: si risolvono ricorsivamente i sotto-problemi;
- **Combina**: si uniscono le soluzioni dei sotto-problemi per ottenere una soluzione univoca al problema originale.

> **N.B**: Certi algoritmi skippano la parte del Combina.

### Quando applicare tecniche Divide-et-impera
Quando i passi **divide** e **impera** risultano tutto sommato semplici da realizzare. Se si ha un costo computazionale maggiore di quello della controparte iterativa, allora conviene optare per quest'ultima versione.
### Esempio di problema risolvibile con tecniche Divide-et-impera
A seguire un esempio classico di problema risolvibile con tecniche **Divide-et-impera**.
#### Le torri di Hanoi
Avendo $3$ pioli ed $n$ dischi di dimensioni diverse inizialmente impilati in ordine decrescente sul piolo più di sinistra, occorre:
- impilare in ordine decrescente tutti i dischi sul piolo più di destra;
- non impilare mai un disco più grande su uno più piccolo;
- muovere un disco alla volta;
##### Risoluzione del problema delle Torri di Hanoi
Anzitutto, consideriamo il caso in cui $n = 1$: in tal caso basterà spostare il disco dal primo piolo al terzo. Quindi sicuramente si avrà un $\text{edge case}$ del tipo:
```pseudocodice
se n == 1 allora
	rimuovi il disco dal primo piolo
	inserisci il disco sul terzo piolo
```
Ora notiamo come i "pioli" assomiglino a degli $\text{stack}$: in fin dei conti si può rimuovere ed aggiungere solamente il primo elemento di questi. Quindi sicuramente si dovranno passare $3$ stack come parametri della funzione, generando una signature come la seguente
```
function Hanoi(stack p1, stack p2, stack p3, int n){...}
```
dove $n$ corrisponde al numero di dischi con cui si sta lavorando.
Ora lavoriamo sulla parte di **Divide**: come potremmo spezzettare il problema originale?
Per spostare legalmente tutti i dischi da $\text{p1}$ a $\text{p3}$, occorrerà usare $\text{p2}$ come appoggio, richiamando ricorsivamente la funzione ma invertendo $\text{p3}$ e $\text{p2}$ e abbassando $n$ di $1$. In questo modo si sposteranno $n-1$ dischi su $\text{p2}$, poi il disco più grande su $\text{p3}$ ed infine tutti i dischi in maniera ordinata da $\text{p2}$ a $\text{p3}$.
```
function Hanoi(stack p1, stack p2, stack p3, int n){
	if (n == 1)
		p3.push(p1.pop());
	else
		Hanoi(p1, p3, p2, n-1);
		p3.push(p1.pop());
		Hanoi(p2, p1, p3, n-1);
}
```
## Algoritmi Greedy
Questa tecnica va applicata quando è possibile dimostrare l'esistenza di una scelta **greedy**, ovvero una decisione che riporta alla soluzione ottimale in modo facile. Risulta inoltre molto efficace quando, risolto un problema principale con una certa decisione, si crea un sotto problema minore risolvibile con la medesima tecnica. 
> **N.B.** non tutti i problemi sono risolvibili con una tecnica **greedy**.
### Esempi di problemi risolvibili con tecniche Greedy
A seguire alcuni esempi di problemi facilmente risolvibili con tecniche Greedy.
#### Il problema del resto
Avendo in input un intero positivo $R$ che rappresenta un importo monetario in centesimi, occorre restituire il numero minimo di monete necessarie per erogare $R$, usando monete da $50, 20, 10, 5, 2, 1$ centesimi.
Ad esempio, per $R=78: \ 50 + 20 + 5 + 2 + 1$.
##### Soluzione al problema del resto con tecnica Greedy
> **N.B** la seguente soluzione potrebbe portare ad errori in base al tipo di monete utilizzate: per una tecnica "universale", guarda l'esempio con la programmazione dinamica.

Per trovare il numero di monete, senza le monete effettive, basta passare le tipologie di monete come un array di interi alla funzione e, dopo aver ordinato quest'ultimo in ordine decrescente, continuare a sottrarre l'indice attuale da $R$ fino ad ottenere $0$. Nel caso in cui non si arrivi a resto pari a $0$, allora si restituirà errore (questa casistica potrebbe capitare non usando, ad esempio, le monete da un centesimo).
```
function Resto(int R, int T[1 ... n]) -> int{
	sort_decrescente(T);
	int numero_monete = 0;
	int indice_attuale = 0;
	while (R != 0 && indice_attuale < n){
		if (R >= T[i]){
			R = R - T[i];
			numero_monete++;
		} else {
			indice_attuale++;
		}
	}
	if (R > 0) errore!
	else return numero_monete;
}
```
#### Problema di Scheduling (Shortest Job First)
Avendo $n$ Jobs, ognuno con una certa lunghezza temporale $t$, si vogliono eseguire prima i Jobs più corti e poi quelli più lunghi.
##### Risoluzione del problema di Scheduling (Shortest Job First)
L'algoritmo Greedy dovrà eseguire $n$ steps: per ognuno di questi sceglierà e manderà in esecuzione il job, tra quelli rimanenti, con il minor tempo di esecuzione. Vi sono svariate tecniche per implementare questo algoritmo: una potrebbe ad esempio sfruttare i $\text{dizionari}$, mentre un'altra potrebbe usare le code con priorità (i $\text{min-heap}$).
## Programmazione dinamica
La programmazione dinamica è una tecnica iterativa (non più ricorsiva come accadeva nel [[Tecniche algoritmiche#Divide-et-impera|Divide-et-Impera]]) specialmente utile per risolvere problemi composti da sotto-problemi ripetuti.
### Esempi di problemi risolvibili con la Programmazione Dinamica
A seguire alcuni esempi di problemi risolvibili in maniera ottimale con la programmazione dinamica.
#### Il problema dello zaino (Knapsack problem)
Avendo un insieme $X = \{1, 2, \dots, n\}$ composto da $n$ elementi dove ogni elemento $i$ ha un certo peso $p[i]$ e un certo valore $v[i]$, si vuole trovare un sottoinsieme $Y$ tale che il peso complessivo degli elementi in quest'ultimo sia minore del peso $P$ trasportabile con uno zaino, facendo inoltre in modo che il valore complessivo degli elementi in $Y$ sia il massimo possibile.
Questo significa determinare un insieme $Y$ di oggetti tale che si abbia la seguente:$$\sum_{x \in Y}{p[x] \leq P}$$e in modo da massimizzare la seguente:$$\sum_{x \in Y}{v[x]}$$Questo tipo di problema rientra nella categoria dei **sotto problemi $P(i, j)$**: si vuole riempire uno zaino di capienza $j$ con un sottoinsieme di $i$ elementi, massimizzando il valore degli oggetti usati.
In questo caso si avrà anche un insieme di soluzioni $V[i, j]$, ovvero il massimo valore ottenibile da un sottoinsieme di oggetti $\{1, 2, \dots, i\}$ in uno zaino di capacità $j$. Ad esempio:$$V[1, j]= \begin{cases}v[1] & \text{se } j \geq p[1] \\ 0 & \text{se } j \lt p[1]\end{cases}$$Generalmente in questi problemi si hanno due casistiche:
- se il peso di un oggetto risulta maggiore di quello consentito, allora l'oggetto va scartato e occorre abbassare il valore di $i$ (che parte da $n$, quindi dal massimo). Si lavora ora quindi con $V[i-1, j]$;
- se il peso di un oggetto risulta minore o uguale a quello consentito, allora occorre effettuare una scelta:
	- o si inserisce l'oggetto $i-$esimo nello zaino, andando a lavorare quindi ora con $V[i-1, j - p[i]] + v[i]$;
	- oppure non inserire l'oggetto $i-$esimo nello zaino, rimanendo nella situazione $V[i-1, j]$.
	- Scegliamo l'alternativa migliore tra le due, ovvero quella che massimizza il valore massimo ottenibile: $V[i, j] = \text{max}\{V[i-1, j, \ V[i - 1, j - p[i]] + v[i]\}$ 
Ed una volta aver capito se un oggetto fa parte dell'insieme soluzione ottimale, occorre fare uso di una tabella ausiliaria di booleani $K[i, j]$ e marcare l'item da inserire come $\text{true}$.
#### Distanza di Levenshtein
Come si decide quanto "simili" sono due stringhe? Tramite il concetto di "edit distance", ovvero il numero di operazioni necessarie per trasformare una stringa $\text{S}$ in un'altra stringa $\text{T}$. Tra le operazioni possibili abbiamo:
- lasciare immutato il carattere attuale (costo $0$);
- cancellare un carattere (costo $1$);
- inserire un carattere (costo $1$);
- sostituire il carattere corrente con uno diverso (costo $1$).
Dopo ognuna di queste occorre muoversi al carattere successivo.
##### Definizione della Distanza di Levenshtein
Avendo due stringhe $\text{S}[1, \dots, n]$ e $\text{T}[1, \dots, m]$ di $n$ ed $m$ caratteri (che potrebbero anche essere vuote), si dice **Distanza di Levenshtein** il costo minimo tra tutte le sequenze di operazioni di editing possibili per trasformare $\text{S}$ in $\text{T}$.
Anche in questo caso si tratta di un sotto problema del tipo $P(i, j)$ con un insieme soluzione $V[i, j]$: occorre trovare il numero minimo di operazioni per trasformare $\text{S}[1, \dots, i]$ in $\text{T}[1, \dots, j]$. La distanza effettiva tra le due stringhe sarà infine pari a $L[n, m]$.
##### Procedimento per il calcolo di $\text{V}[i, j]$ nella Distanza di Levenshtein
Avendo un $i = 0$ oppure un $j = 0$, occorrerà effettuare un numero di operazioni pari alla lunghezza della stringa non vuota (si dovranno aggiungere o rimuovere tutti i caratteri di tale stringa).
Altrimenti, nel caso in cui $i$ e $j$ siano entrambi maggiori di $0$, occorrerà fare una scelta:
- se $\text{S}[i] = \text{T}[j] \Rightarrow L[i, j] = \text{min }\{\colorbox{yellow}{L[i-1, j] + 1}, \colorbox{lightgreen}{L[i, j - 1] + 1}, \colorbox{cyan}{L[i-1, j-1]}\}$;
- se $\text{S}[i] \not= \text{T}[j] \Rightarrow \text{min }\{\colorbox{yellow}{L[i-1, j] + 1}, \colorbox{lightgreen}{L[i, j - 1] + 1}, \colorbox{cyan}{L[i-1, j-1]} + 1\}$;
Dove:
- $\colorbox{yellow}{}$ indica il costo derivato dalla rimozione di un carattere $\text{S}[i]$ dalla stringa originale $\text{S}$;
- $\colorbox{lightgreen}{}$ indica il costo derivato dall'aggiunta di un carattere alla stringa originale $\text{S}$;
- $\colorbox{cyan}{}$ indica il costo derivato dal lasciare invariato un carattere della stringa $\text{S}$. Nella casistica dove $\text{S}[i] \not = \text{T}[j]$ non si può ovviamente lasciare invariate tale lettera e va quindi sostituita: si ha quindi un costo pari ad $1$;
##### Esempio di applicazione della Distanza di Levenshtein
Vogliamo trasformare la parola "Albero" in "Libro":
- $\text{ALBERO}: 6$ lettere
- $\text{LIBRO}:5$ lettere
Partendo dall'inizio di $\text{S}$ e di $\text{T}$ avremo:
- $\text{A} \not = \text{L} \Rightarrow$ cancello $\text{A}$ da $\text{S}$ e aggiungo $1$ alla distanza. Ora avrò $\text{LBERO}$;
- $\text{L} = \text{L}$, non faccio nulla e passo alla lettera successiva di entrambe le parole;
- $\text{B} \not = \text{I}$, tuttavia cancellando la $\text{B}$ qui non procederei nella maniera corretta in quanto non avrei mai una $\text{I}$ con cui lavorare: la soluzione corretta corrisponde quindi all'aggiunta della lettera $\text{I}$. Aggiungo quindi $1$ alla distanza e lavoro con $\text{LIBERO}$;
- $\text{I} = \text{I}$, proseguo;
- $\text{B} = \text{B}$, proseguo;
- $\text{E} \not = \text{R}$, potrei aggiungere una $\text{R}$ oppure cancellare la $\text{E}$: in questo caso, disponendo già di una $\text{R}$ all'interno della stringa $\text{S}$, conviene rimuovere la $\text{E}$. Aggiungo $1$ alla distanza e lavoro con $\text{LIBRO}$;
- $\text{R} = \text{R}$, proseguo;
- $\text{O} = \text{O}$, proseguo.
- Ho completato l'esercizio dato che ho terminato le lettere in $\text{T}$.