1. [Cos'è un algoritmo?](#Cos'%C3%A8%20un%20algoritmo?)
	1. [Algoritmi "cattivi"](#Algoritmi%20%22cattivi%22)
2. [Complessità computazionali](#Complessit%C3%A0%20computazionali)
	2. [Funzioni di costo](#Funzioni%20di%20costo)
		1. [Definizione di $O$ Grande](#Definizione%20di%20$O$%20Grande)
		2. [Definizione di $\Omega$ Grande (Omega)](#Definizione%20di%20$%5COmega$%20Grande%20(Omega))
		3. [Definizione di $\Theta$ (Theta)](#Definizione%20di%20$%5CTheta$%20(Theta))
		4. [Definizione di $o$ piccolo](#Definizione%20di%20$o$%20piccolo)
			1. [Esempio pratico](#Esempio%20pratico)
		5. [Definizione di $\omega$ piccolo (omega)](#Definizione%20di%20$%5Comega$%20piccolo%20(omega))
	3. [Confronto tra funzioni](#Confronto%20tra%20funzioni)
		6. [Casi limite](#Casi%20limite)
		7. [Esercizi](#Esercizi)
3. [Proprietà della notazione asintotica](#Propriet%C3%A0%20della%20notazione%20asintotica)
	4. [Transitività](#Transitivit%C3%A0)
	5. [Riflessività](#Riflessivit%C3%A0)
	6. [Simmetria](#Simmetria)
	7. [Simmetria trasposta](#Simmetria%20trasposta)
4. [Regole utili della notazione asintotica](#Regole%20utili%20della%20notazione%20asintotica)
	8. [Somma](#Somma)
	9. [Prodotto](#Prodotto)
	10. [Moltiplicare per una costante](#Moltiplicare%20per%20una%20costante)
5. [Analizzare un algoritmo](#Analizzare%20un%20algoritmo)

## Cos'è un algoritmo?
Un algoritmo è la descrizione di una procedura: è un'astrazione e può quindi assumere un quantitativo di memoria illimitato. Questo vincola inoltre un set di input ad un determinato output.
### Algoritmi "cattivi"
Un algoritmo si dice "cattivo" quando richiede l'impiego di troppe risorse (memoria o potenza di calcolo). Un esempio di algoritmo cattivo è l'implementazione "famosa" (quella ricorsiva) dell'algoritmo di Fibonacci: essa produce un albero di chiamate ricorsive con numerose ridondanze e quindi sprechi.
## Complessità computazionali
L'efficienza di un algoritmo si dice "complessità computazionale" ed è un indicatore dell'utilizzo della memoria e della potenza di calcolo da parte di questo.
### Funzioni di costo
Dato un numero di input $n \geq 0$ e una funzione $f$, indichiamo con $f(n) \geq 0$ la complessità computazionale di un algoritmo.
La rapidità con cui questa funzione cresce si dice _rate di crescita_.
Analizzando l'andamento di questa funzione mano a mano che ci si avvicina ad infinito, potremo ottenere una stima di questa "complessità".
#### Definizione di $O$ Grande
Per $O$-Grande si intende l'insieme delle funzioni per cui una funzione $g$ rappresenta un limite asintotico superiore, ovvero le funzioni con rate di crescita minore o uguale a quello di $g$.
#### Definizione di $\Omega$ Grande (Omega)
Per $\Omega$-Grande si intende l'insieme delle funzioni per cui $g$ rappresenta un limite asintotico inferiore, ovvero le funzioni con rate di crescita superiore o uguale a quello di $g$.
#### Definizione di $\Theta$ (Theta)
Per $\Theta$ si indica l'insieme delle funzioni asintoticamente equivalenti a $g$, ovvero le funzioni con rate di crescita uguale a quello di $g$.
Se una funzione $f$ appartiene a $\Theta$, allora ne consegue che apparterrà anche a $O$-grande e $\Omega$-grande.
#### Definizione di $o$ piccolo
Per $o$-piccolo si intende l'insieme delle funzioni asintoticamente dominate da $g$. Ma in che modo questo insieme differisce da $O$-grande?
$$\begin{aligned} f(n) = O(g(n)) \Rightarrow f(n) \leq c \cdot g(n) \text{ per almeno un } c \\ f(n) = o(g(n)) \Rightarrow f(n) \leq c \cdot g(n) \text{ per ogni } c \end{aligned}$$
Da cui deriva che $f(n) = o(g(n)) \Rightarrow f(n) = O(g(n))$.
##### Esempio pratico
$$3n^2 + 5n + 7 = O(n^2)$$in quanto esiste una costante $c$ per cui $c \cdot \stackrel{\text{valore nell'O grande}}{n^2}$ risulta maggiore del termine di grado più alto nella funzione presentata. Tuttavia, sarebbe anche corretto affermare quanto segue:$$[[3n^2 + 5n + 7 = o(n^3)]]$$
in quanto esiste sempre una $c$ per cui $c \cdot n^3$ risulta maggiore del termine di grado più alto della funzione presentata. ^c79591
#### Definizione di $\omega$ piccolo (omega)
Per $\omega$-piccolo si intende l'insieme delle funzioni asintoticamente dominanti rispetto a $g$. Come nel caso di [[#Definizione di $o$ piccolo|o-piccolo]], $\omega$-piccolo differisce da $\Omega$-grande perché esiste un $c$ per cui una funzione $f$ risulta sempre minore (in questo caso si parla di funzioni con rate di crescita superiore) di un'altra $g$.
### Confronto tra funzioni
Per confrontare due funzioni $f(n)$ e $g(n)$ si usa il seguente limite:$$\lim_{n \to \infty}{\frac{f(n)}{g(n)}}$$ed in base al risultato di questo si determina l'insieme (o gli insiemi) di appartenenza di $f(n)$. Se il limite risulta $\dots$
1) $\dots 0$, allora $f(n) = o(g(n)) \Rightarrow f(n) = O(g(n))$;
2) $\dots \infty$, allora $f(n) = \omega(g(n)) \Rightarrow f(n) = \Omega(g(n))$;
3) $\dots k$, dove $k \in \mathbb{R}$ e $k \gt 0$, allora $f(n) = \Theta(g(n))$ (con quanto ne consegue).
#### Casi limite
Esistono casi dove si vogliono confrontare due funzioni che non sono confrontabili **tra di loro**, come $n$ e $n^{\sin{n + 1}}$. In questi casi si procede con la definizione di limite.
#### Esercizi
Ecco alcuni [[Esercizi inerenti al confronto tra funzioni |esercizi svolti]].
## Proprietà della notazione asintotica
La notazione asintotica gode delle seguenti proprietà:
### Transitività
Se $f(n) = O(g(n))$ e $g(n) = O(h(n))$, allora $f(n) = O(h(n))$. Questa proprietà è valida per tutti gli insiemi studiati.
### Riflessività
Una funzione $f$ è limite asintotico superiore ed inferiore di sé stessa, ovvero $f(n) = O(f(n))$ e $f(n) = \Omega(f(n))$.
### Simmetria
Se una funzione $f$ appartiene a $\Theta(g(n))$, allora vale anche l'opposto. Ovvero: $$f(n) = \Theta(g(n)) \Leftrightarrow g(n) = \Theta(f(n))$$
### Simmetria trasposta
Se una funzione $f$ è dominata asintoticamente da una funzione $g$, allora $g$ domina asintoticamente $f$. Lo stesso ragionamento si applica per gli insiemi $\underline{piccoli}$. Quindi:
$$\begin{aligned}f(n) = O(g(n)) \Leftrightarrow g(n) = \Omega(f(n)) \\ f(n) = o(g(n)) \Leftrightarrow g(n) = \omega(f(n))\end{aligned}$$
## Regole utili della notazione asintotica
### Somma
Se $f_1(n) = O(g_1(n))$ e $f_2(n) = O(g_2(n))$, allora posso scrivere quanto segue:$$f_1(n) + f_2(n) = O(g_1(n)) + O(g_2(n)) = O(g_1(n) + g_2(n))$$
### Prodotto 
Se $f_1(n) = O(g_1(n))$ e $f_2(n) = O(g_2(n))$ allora vale:$$f_1(n) \cdot f_2(n) = O(g_1(n) \cdot g_2(n))$$
### Moltiplicare per una costante
Se $f_1(n) = O(g(n))$ e $a \gt 0$ allora moltiplicare $f_1$ non cambierà la notazione asintotica a cui appartiene.
## Analizzare un algoritmo
Per analizzare un algoritmo si utilizza un'**equazione di ricorrenza**, che descrive il tempo di esecuzione in base alla dimensione dell'input. Questa cambia a seconda del tipo di algoritmo:
- **Algoritmi iterativi**: si analizza il costo di ogni iterazione e il numero totale di iterazioni per determinare la relazione di ricorrenza.
- **Algoritmi ricorsivi**: la ricorrenza deriva dalla suddivisione del problema in sotto-problemi più piccoli.
### Algoritmi iterativi
Per analizzare gli algoritmi iterativi occorrerà analizzarne il corpo e andare a ricavare l'equazione di ricorrenza. Dopo aver trovato quest'ultima, occorrerà usare il **metodo iterativo** per risolverla, andando a sostituire ad $n$ il valore per cui questo decresce all'interno dell'algoritmo.
#### Esempio di analisi di algoritmi iterativo
Prendiamo il seguente algoritmo iterativo:
```pseudocodice
def somma_quadrati(INT n) -> INT:
	INT somma = 0;
	while n > 0:
		somma += n * n;
		n = n // 2;
	return somma;
```
Anzitutto, occorrerà trovare l'equazione di ricorrenza associata all'algoritmo presentato. Per farlo, analizziamo il costo delle operazioni all'interno del ciclo: si stanno eseguendo un prodotto ($n \cdot n$), una somma ed una riassegnazione. Il costo di queste operazioni è costante, in quanto non dipende dal valore $n$. Quando un'operazione ha costo costante, si dice che ha costo pari a $O(1)$.
Ora cerchiamo di capire quante volte il ciclo verrà eseguito: il numero di esecuzioni dipende da $n$, ed $n$ decresce venendo dimezzato ad ogni iterazione. Quindi scriviamo:$$T(n) = T(n / 2) + O(1)$$e andiamo a sostituire $n \rightarrow n/2$, ottenendo:$$T(n/2) = T(n / 4) + O(1)$$proseguiamo con questo approccio fino ad individuare un pattern $\dots$ in generale, continuando a dividere $n$ per $2$, dopo $k$ iterazioni avremo $\frac{n}{2^k}=1$ come fine del ciclo. Risolviamo ora per $k$ questa equazione esponenziale:$$\begin{aligned}n = 2^k \\ k = \log_2{\left(n\right)}\end{aligned}$$Quindi il nostro ciclo *while* eseguirà circa $\log_2{\left(n\right)}$ volte (approssimando, in quanto $n$ potremmo non essere esattamente una potenza di $2$). La complessità totale dell'algoritmo presentato è quindi $O(\log{\left(n\right)})$.
### Algoritmi ricorsivi
Nel caso degli algoritmi ricorsivi si dispone di $4$ teoremi utili al calcolo della complessità computazionale di questi. Come nel caso degli algoritmi iterativi tuttavia sarà anzitutto necessario ricavare l'equazione di ricorrenza dell'algoritmo presentato, per poi risolverla con questi metodi sopra citati.
#### Il metodo iterativo
Questo metodo ha un approccio di tipo *brute force* e consiste nel fare ESATTAMENTE ciò che abbiamo fatto nell'[[Introduzione, complessità computazionali e analisi degli algoritmi#Esempio di analisi di algoritmi iterativo|esempio di analisi della complessità di un algoritmo iterativo]].
#### Il metodo della sostituzione
