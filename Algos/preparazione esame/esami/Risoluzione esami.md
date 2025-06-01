Raccolta di esercizi tratti dagli esami forniti su virtuale.
1. [[Risoluzione esami#Simulazione d'esame (1) - con soluzioni|Simulazione d'esame (1) - con soluzioni]]
	1. [[Risoluzione esami#1. Calcolo della complessità funzioni Mystery 1 & 2|Calcolo della complessità]]
	2. [[Risoluzione esami#2. Efficienza degli algoritmi di ordinamento|Efficienza degli algoritmi di ordinamento]]
	3. [[Risoluzione esami#3. Subset Sum Problem con $n$ astronauti|Subset Sum Problem degli astronauti]]
## Simulazione d'esame (1) - con soluzioni
[Reference al documento](https://virtuale.unibo.it/pluginfile.php/2452310/mod_resource/content/2/2023-06-07.pdf)
### 1. Calcolo della complessità funzioni Mystery 1 & 2
Anzitutto si parte calcolando il costo della funzione ricorsiva: essa contiene una chiamata ricorsiva e un ciclo $\text{for } 1 \dots n$, con costo quindi pari ad $n$. Ne consegue che l'equazione della funzione sarà$$T'(n) = \begin{cases}1 & n \leq 1 \\ T'(\frac{2n}{3}) + n & n \gt 1\end{cases}$$da risolvere con il [[Introduzione, complessità computazionali e analisi degli algoritmi#Master Theorem|Master Theorem]]: avendo $a = 1, \ b = 3$ calcoliamo $\alpha$ come il $\log_3{1} = 0$ e $\beta$ come il grado di $n$, ovvero $\beta = 1$. Ora avendo $\alpha \lt \beta$, scriviamo $T'(n) = \Theta(n)$.
Procediamo calcolando il costo della funzione iterativa, contenente un ciclo while con una chiamata a $mistery2$, passando ad essa come parametro il doppio della variabile $x$, la quale parte da $1$ e arriva fino ad un valore $k$ dipendente dal numero di iterazioni compiute.
La chiamata a $mystery2$ verrà quindi effettuata $k$ volte, aumentando di $1$ ogni volta il parametro ricevuto da essa. Quindi: $$T(n) = T'(2 \cdot 1) + T'(2 \cdot 2) + \dots + T'(2 \cdot k)$$che risulta avere complessità pari a$$\Theta(2 \cdot 1 + 2 \cdot 2 + \dots + 2 \cdot k)$$che equivale quindi a $\Theta(2\sum_{x=1}^k{x})$, che ricordando le [[Formule classiche algos.pdf||formule classiche delle sommatorie]], più precisamente la prima (in quanto risulta valida per $x = 0$ oppure $x = 1)$, riporta a $\Theta(k^2)$.
Per finire occorre trovare il valore massimo a cui $x$ può arrivare. Il ciclo while viene eseguito fino a quando $n \geq 1$ ed ad ogni iterazione n diventa $\frac{n}{3}$. Questo significa che, avendo $k$ iterazioni, si avrà $\frac{n}{3^k}$. Quindi il ciclo terminerà quando si avrà $k \gt \log_3{n}$ ($\frac{n}{3}$ equivale al $\log$ base $3$ di $n$).
Scriviamo quindi $k = \log_3{n} + c$ (la $c$ sarebbe una costante qualsiasi) e sostituiamo nel costo di $mystery1$:$$T(n) = \Theta((\log_3{n} + c)^2) = \Theta(\log_3^2{n})$$
### 2. Efficienza degli algoritmi di ordinamento
Considerando un array $A$ contenente $n$ interi compresi nell'intervallo $[1, k]$:
- l'InsertionSort nel caso peggiore deve iterare su tutto l'array due volte, una per raggiungere i vari valori da spostare, ed un'altra per trovare la posizione in cui muoverli. Quindi ha costo $O(n^2)$;
- il MergeSort ha caso pessimo $O(n \cdot \log_2{n})$;
- il CountingSort non lo abbiamo visto a lezione lol suca
### 3. Subset Sum Problem con $n$ astronauti
Avendo $n$ astronauti e $j$ navicelle di salvataggio capaci di contenere al massimo $N[1 \dots k]$ persone, scrivere una funzione $P(n, j)$, che restituisca $\text{true}$ qualora esista una combinazione di navicelle per salvare **esattamente** i membri dell'equipaggio, $\text{false}$ altrimenti. 
Questo problema rientra nella categoria dei $\text{Subset Sum Problems}$, ovvero quei problemi dove dato un array di interi occorre capire se esiste un sottoinsieme di tali valori la cui somma sia uguale ad un certo input.
Impostiamo anzitutto un sistema per capire bene cosa restituire in ogni specifica situazione:$$P(i, j) = \begin{cases}
true & i = 0 \\
true & i = 1, j \gt 0 \\
???
\end{cases}$$