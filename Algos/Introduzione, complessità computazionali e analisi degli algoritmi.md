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
[[https://youtu.be/KXAbAa1mieU?si=JHP0cid2WlrcUn3k|Video utile]] 
Per calcolare la complessità computazionale di un algoritmo iterativo, è necessario analizzarne la struttura, identificando cicli, condizionali e altre operazioni, al fine di determinare il caso peggiore.
Per questo tipo di algoritmi conviene maggiormente procedere per esempi che tramite nozioni di teoria.
#### Esempio con ciclo for
```pseudocodice
for (int i = 0; i <= n; i++){
	a = b + c;
}

scrivi a
```
In questo codice si ha un ciclo for che esegue $n$ iterazioni per poi scrivere il valore della variabile $a$. Ogni istruzione nel codice presentato ha costo costante ($1$). Tuttavia, essendo il ciclo for eseguito $n$volte, si può scrivere che il ciclo abbia costo $n$. Ricordando l'istruzione di scrittura, dovremmo scrivere che il costo totale dell'algoritmo presentato equivarrebbe ad $n + 1$: tuttavia, andando ad analizzare valori per $n$ tendente ad infinito, la *costante additiva* (e se ve ne fossero anche quelle *moltiplicative*) diventano irrilevanti. Il costo totale dell'algoritmo equivale quindi a $O(n)$.
#### Esempio con ciclo while
```pseudocodice
int i = n;
while (i > 0){
	scrivi i;
	i--;
}
```
Anche in questo caso si avranno $n$ iterazioni, in quanto $i = n$ e si continua a decrementare $i$ di $1$ ad ogni occorrenza.
#### Esempio con ciclo while e costo logaritmico
```pseudocodice
int i = n;
while (i > 0){
	scrivi i;
	i = i / 2;
}
```
In questo caso si tratta sempre di un ciclo while, ma la variabile $i$ viene dimezzata ad ogni iterazione. Ciò significa che invece di avere costo $O(n)$ si avrà $O(\log{n}))$, in quanto (prendendo come esempio $n = 16$):$$\begin{aligned}16 / 2 = 8 \text{ (prima iterazione)}\\ 8 / 2 = 4 \text{ (seconda iterazione)}\\ 4 / 2 = 2 \text{ (terza iterazione)}\\ 2 / 2 = 1 \text{ (quarta iterazione)} \end{aligned}$$quindi il ciclo si esegue 4 volte e $4 = \log_2{16}$. Nel caso in cui si avesse avuto un $n$ dispari, allora si avrebbe avuto un iterazione extra.
#### Esempio con ciclo e condizionali
```pseudocodice
int i = 0;
while(i <= n){
	if ((i % 10) == 0)
		scrivi i;
		break;
	i -= 2;
}
```
Qui il ciclo *potrebbe* terminare in anticipo (senza portare a termine tutte le $n/2$ iterazioni) nel caso in cui $(i \% 10) == 0$. Tuttavia quando si misura la complessità computazionale di un algoritmo, va considerato il caso peggiore: ovvero quello dove $i$ non è MAI divisibile per $10$. In tal caso, il ciclo verrà eseguito $n$ volte. Quindi l'algoritmo avrà complessità pari a $O(n)$.
### Algoritmi ricorsivi
Per trovare la complessità di un algoritmo ricorsivo, occorre anzitutto identificarne l'equazione di ricorrenza. Dopo aver fatto ciò, occorrerà procedere con uno di due metodi:
1) metodo dell'iterazione;
2) Master Theorem;
#### Equazioni di ricorrenza
Prendiamo come caso di studio l'algoritmo classico per il calcolo di un $n-$simo termine della successione di Fibonacci, ovvero:
```pseudocodice
func Fib(n: int) -> int{
	if (n <= 2)
		return n;
	return Fib(n - 2) + Fib(n - 1) + 1;
}
```
Questo algoritmo ha un'equazione di ricorrenza della forma:$$T(n) = \begin{cases}1, & n \leq 2 \\ T(n - 2) + T(n - 1) + 1, & n \gt 2\end{cases}$$Come risolvere questo sistema?
#### Metodo dell'iterazione
Il primo dei due metodi che vedremo si dice *dell'iterazione* in quanto consiste nel continuare a sostituire valori nell'equazione di ricorrenza per individuare un pattern e semplificare l'equazione.
##### Esempio significativo: Fibonacci risolto con metodo dell'iterazione
Risolviamo l'equazione di ricorrenza individuata in precedenza dell'algoritmo di Fibonacci, mediante metodo dell'iterazione:$$T(n) = T(n - 2) + T(n - 1) + 1$$Ora, sapendo che:$$\begin{array}.\colorbox{lightgreen}{T(n - 1)} = T(n -1 -2) + T(n - 1 - 1) + 1 = \colorbox{lightgreen}{T(n - 3) + T(n - 2) + 1} \\ \colorbox{lightblue}{T(n - 2)} = T(n - 2 - 2) + T(n - 2 - 1) + 1 = \colorbox{lightblue}{T(n - 4) + T(n - 3) + 1}\end{array}$$Riscriviamo l'equazione di ricorrenza come:$$T(n) = \colorbox{lightblue}{T(n - 4) + T(n - 3) + 1} + \colorbox{lightgreen}{T(n - 3) + T(n - 2) + 1} + 1$$Che ripulita risulta:$$T(n) = T(n - 4) + 2T(n - 3) + T(n - 2) + 3$$Ora fermiamoci ad osservare quanto ricavato fino a questo punto: il numero delle chiamate totali è raddoppiato. Questo ci potrebbe portare a pensare che la funzione abbia un andamento esponenziale (quindi una complessità di $O(2^n))$: per verificare questa osservazione, potremmo pensare di sostituire nuovamente all'interno dell'equazione di ricorrenza. Proviamo:$$\begin{array}.\colorbox{orange}{T(n - 4)} = T(n - 4 - 2) + T(n - 4 - 1) + 1 = \colorbox{orange}{T(n - 6) + T(n - 5) + 1} \\ \colorbox{cyan}{T(n - 3)} = T(n - 3 - 2) + T(n - 3 - 1) + 1 = \colorbox{cyan}{T(n - 5) + T(n - 4) + 1}\end{array}$$Riscriviamo ora l'equazione di ricorrenza:$$T(n) = $$Che semplificata risulta:$$T(n) = $$La nostra intuizione era quindi corretta: il numero di chiamate ricorsive raddoppia ogni volta, quindi l'algoritmo ha complessità pari a $O(2^n)$.
##### Esempio generico
Prendiamo come esempio l'equazione di ricorrenza: