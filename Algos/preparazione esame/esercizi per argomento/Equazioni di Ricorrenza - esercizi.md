1. [[Equazioni di Ricorrenza - esercizi#Esercizio 1 - equazione di ricorrenza|Esercizio 1 - equazione di ricorrenza]]
	1. [[Equazioni di Ricorrenza - esercizi#Esercizio 1 - soluzione con metodo dell'iterazione|Soluzione con metodo dell'iterazione]]
	2. [[Equazioni di Ricorrenza - esercizi#Esercizio 1 - soluzione con Master Theorem|Soluzione con Master Theorem]]
2. [[Equazioni di Ricorrenza - esercizi#Esercizio 2 - equazione di ricorrenza|Esercizio 2 - equazione di ricorrenza]]
	1. [[Equazioni di Ricorrenza - esercizi#Esercizio 2 - soluzione con Master Theorem|Soluzione con Master Theorem]]
3. [[Equazioni di Ricorrenza - esercizi#Esercizio 3 - equazione di ricorrenza|Esercizio 3 - equazione di ricorrenza]]
	1. [[Equazioni di Ricorrenza - esercizi#Esercizio 3 - soluzione con Master Theorem|Soluzione con Master Theorem]]
4. [[Equazioni di Ricorrenza - esercizi#Esercizio 4 - equazione di ricorrenza|Esercizio 4 - equazione di ricorrenza]]
	1. [[Equazioni di Ricorrenza - esercizi#Esercizio 4 - soluzione con Master Theorem|Soluzione con Master Theorem]]
5. [[Equazioni di Ricorrenza - esercizi#Esercizio 5 - analisi del costo|Esercizio 5 - analisi del costo]]
	1. [[Equazioni di Ricorrenza - esercizi#Esercizio 5 - soluzione|Soluzione]]
6. [[Equazioni di Ricorrenza - esercizi#Esercizio 6 - analisi del costo|Esercizio 6 - analisi del costo]]
	1. [[Equazioni di Ricorrenza - esercizi#Esercizio 6 - soluzione|Soluzione]]
7. [[Equazioni di Ricorrenza - esercizi#Esercizio 7 - analisi del costo|Esercizio 7 - analisi del costo (con due funzioni)]]
	1. [[Equazioni di Ricorrenza - esercizi#Esercizio 7 - soluzione|Soluzione]]
8. [[Equazioni di Ricorrenza - esercizi#Esercizio 8 - analisi del costo|Esercizio 8 - analisi del costo (con metodo iterativo)]]
	1. [[Equazioni di Ricorrenza - esercizi#Esercizio 8 - soluzione|Soluzione]]
9. [[Equazioni di Ricorrenza - esercizi#Esercizio 9 - analisi del costo|Esercizio 9 - analisi del costo]]
	1. [[Equazioni di Ricorrenza - esercizi#Esercizio 9 - soluzione|Soluzione]]
10. [[Equazioni di Ricorrenza - esercizi#Esercizio 10 - analisi del costo|Esercizio 10 - analisi del costo]]
	1. [[Equazioni di Ricorrenza - esercizi#Esercizio 10 - soluzione|Soluzione]]
## Esercizio 1 - equazione di ricorrenza
Risolvi la seguente:$$T(n) = \begin{cases}d & n \leq 1 \\ T(\frac{n}{4}) + c & n \gt 1\end{cases}$$per risolvere questa equazione potremmo usare:
- il metodo dell'iterazione;
- il Master Theorem;
svolgiamolo con entrambi.
### Esercizio 1 - soluzione con metodo dell'iterazione
Avendo $T(n) = T(\frac{n}{4}) + c$, continuiamo a sostituire $T(\frac{n}{4^i})$ con la definizione dataci dal problema, ovvero $T(\frac{n}{4^{i + 1}}) + c$. Quindi nel nostro caso:$$\begin{array}{cc}
T(n) & = T(\frac{n}{4}) + c \\
& = T(\frac{n}{4^2}) + 2c \\
& = T(\frac{n}{4^3}) + 3c \\
& = T(\frac{n}{4^i} + {i} \cdot c)
\end{array}$$fino ad arrivare ad $\frac{n}{4^i} = 1$ (caso limite imposto nel sistema, si continua con la chiamata ricorsiva fino ad $n \leq 1$). Occorre quindi trovare quando $\frac{n}{4^i}$ equivale ad $1$, imponendo un'equazione logaritmica per ricavare la $i$:$$\begin{array}{c}
\frac{n}{4^i} = 1 \\
4^i = n \\
\log_4{4^i} = \log_4{n} \\
i = \log_4{n}
\end{array}$$Ora sostituiamo la $i$ nel caso generalizzato trovato in precedenza:$$
\begin{array}{c}
T(\frac{n}{4^{\log_4{n}}}) + \log_4{n} \cdot c = \\
T(\frac{n}{n}) + \log_4{n} \cdot c
\end{array}$$Di cui possiamo tranquillamente ignorare costanti additive e moltiplicative:
- ignoriamo $T(\frac{n}{n}) = T(1)$;
- ignoriamo la costante $c$;
rimanendo ora con $\log_4{n}$, che in notazione asintotica diventa $\Theta(\log{n})$.
### Esercizio 1 - soluzione con Master Theorem
Davanti a $T(\frac{n}{4})$ abbiamo un $1$, quindi $a = 1$. A dividere $n$ abbiamo $4$, quindi $b = 4$. Di conseguenza $\alpha = \log_b{a} = \log_4{1} = 0$ e $\beta = 0$ in quanto $c$ corrisponde ad una costante ed ha quindi grado pari a $0$.
Infine, avendo $\alpha = \beta$, scriviamo che $T(n) = \Theta(n^{\alpha} \cdot \log{n}) = \Theta(\log{n})$.
## Esercizio 2 - equazione di ricorrenza
Risolvi la seguente:$$T(n) = \begin{cases}d & n \leq 1 \\ 2 \cdot T(\frac{n}{4}) + c & n \gt 1\end{cases}$$di nuovo, si potrebbero usare sia il Metodo Iterativo che il Master Theorem. Io **odio** il metodo iterativo, quindi userò il Master Theorem. :)
### Esercizio 2 - soluzione con Master Theorem
Avendo $a = 2$ e $b = 4$, scriviamo $\alpha = \log_4{2} = \frac{1}{2}$ e $\beta = 0$. Ora avendo $\alpha \gt \beta$, concludiamo con $T(n) = \Theta(n^{\frac{1}{2}}) = \Theta(\sqrt{n})$.
## Esercizio 3 - equazione di ricorrenza
Risolvi la seguente:$$T(n) = \begin{cases}d & n \leq 1 \\ 4 \cdot T(\frac{n}{4}) + c & n \gt 1\end{cases}$$
### Esercizio 3 - soluzione con Master Theorem
Avendo $a = 4$ e $b = 4$, scriviamo $\alpha = \log_4{4} = 1$. Ora, avendo $\beta = 0$, concludiamo che $T(n) = \Theta(n)$.
## Esercizio 4 - equazione di ricorrenza
Risolvi la seguente:$$T(n) = \begin{cases}d & n \leq 1 \\ 8 \cdot T(\frac{n}{4}) + c & n \gt 1\end{cases}$$
### Esercizio 4 - soluzione con Master Theorem
Avendo $a = 8$ e $b = 4$, scriviamo $\alpha = \log_4{8} = \log_4(4) + \log_4(2) = 1 + \frac{1}{2} = \frac{3}{2}$ e, sapendo che $\beta = 0$, concludiamo con $T(n) = \Theta(n^{\frac{3}{2}}) = \Theta(\sqrt{n^3})$.
## Esercizio 5 - analisi del costo
Analizzare il costo computazionale $T(n)$ dell'algoritmo $\text{FibMathPow}$ per calcolare l'$n-$esima potenza della matrice di Fibonacci implementata nella maniera seguente:

![[Pasted image 20250530190508.png]]
### Esercizio 5 - soluzione
Qui si ha una chiamata ricorsiva e solamente delle operazioni dal costo costante all'interno della funzione, quindi il costo sarà banalmente:$$T(n) = \begin{cases}1 & n \leq 1 \\ T(\frac{n}{2}) + 1 & n \gt 1\end{cases}$$che è facilmente risolvibile con il Master Theorem: avendo $a = 1$ e $b = 2$, scriviamo $\alpha = \log_2{1} = 0$ e $\beta = 0$, da cui concludiamo $T(n) = \Theta(\log{n})$.
## Esercizio 6 - analisi del costo
Analizzare il costo del seguente algoritmo e dire se risulta più efficiente della precedente implementazione:![[Pasted image 20250531164705.png]]
### Esercizio 6 - soluzione
Qui si ha una chiamata ricorsiva passando come parametro $\frac{n}{3}$. Inoltre nella funzione si hanno svariate operazioni di costo costante, quindi il costo della funzione sarà definito nella maniera seguente:$$T(n) = \begin{cases}1 & n \leq 2 \\ T(\frac{n}{3}) + 1 & n \gt 2\end{cases}$$Che risolto con Master Theorem: $a = 1, b = 3,\alpha = \log_3{1} = 0, \beta = 0$ da cui si ha $T(n) = \Theta(\log{n})$.
Le due implementazioni hanno quindi lo stesso costo computazionale, ma la prima risulta più leggibile e andrebbe quindi preferita tra le due.
## Esercizio 7 - analisi del costo
Analizzare il costo del seguente algoritmo:![[Pasted image 20250531165518.png]]
### Esercizio 7 - soluzione
In questo caso si devono analizzare due funzioni: partiamo da quella più "esclusiva", ovvero $\text{mystery}2$ (in quanto richiama ricorsivamente solamente sé stessa e non anche l'altra, come accade invece per $\text{mystery}1$).
Il costo di $\text{mystery}2$ corrisponderà quindi al seguente sistema:$$T_2(n) = \begin{cases}1 & n \leq 0 \\ 2T_2(\frac{n}{4}) + 1 & n \gt 0\end{cases}$$che con il Master Theorem risulta: $a = 2, b = 4, \alpha = \log_4{2} = \frac{1}{2}, \beta = 0$ da cui si ha $T_2(n) = \Theta(n^{\frac{1}{2}}) = \Theta(\sqrt{n})$.
Ora calcoliamo il costo di $\text{mystery}1$: in essa si ha una chiamata a $\text{mystery}2$, di cui sappiamo il costo, ed una chiamata ricorsiva a sé stessa. Di conseguenza il suo costo sarà pari al seguente sistema:$$T_1(n) = \begin{cases}1 & n \leq 1 \\ 2T_1(\frac{n}{3}) + \sqrt{n} & n \gt 1\end{cases}$$che risolto con il Master Theorem risulta: $a = 2, b = 3, \alpha = \log_3{2} \approx 0.6, \beta = \frac{1}{2}$ da cui: $T_1(n) = \Theta(n^{\log_3{2}})$.
## Esercizio 8 - analisi del costo
Calcola il costo computazionale del seguente algoritmo:

![[Pasted image 20250601174556.png]]
### Esercizio 8 - soluzione
Partiamo calcolando il costo di $\text{mystery}2$:$$T_2(n) = \begin{cases}1 & n \leq 1 \\ T_2(n - 1) + 1 & n \gt 1\end{cases}$$che non risulta risolvibile con il Master Theorem (si ha $n - 1$ invece di $n$ fratto qualcos'altro).
Adoperiamo quindi il metodo iterativo per risolvere questo sistema:$$\begin{array}{cc}
T_2(n) = & T_2(n - 1) + 1 \\
& T_2(n - 2) + 2 \\
& T_2(n - 3) + 3 \\
& T_2(n - k) + k
\end{array}$$che termina quando $n - k = 1$, da cui si ricava $k = n - 1$. Scriviamo quindi $T_2(n) = T_2(n-n+1) + n - 1$, da cui deriva che $T_2(n) = \Theta(n)$ (in quanto si ignorano le costanti).
Ora calcoliamo $T_1(n)$: anzitutto impostiamo il corrispettivo sistema.$$T_1(n) = \begin{cases}1 & n \leq 1 \\ T_2(\frac{n}{2}) + T_1(\frac{n}{2}) & n \gt 1\end{cases}$$che risulta risolvibile con il Master Theorem (dopo aver sostituito $T_2(n)$ con il suo rispettivo costo computazionale): $a = 1, b = 2, \alpha = \log_2{1} = 0, \beta = 1$ da cui deriviamo che $\alpha \lt \beta$ e perciò $T_1(n) = \Theta(n^{\beta}) = \Theta(n)$.
## Esercizio 9 - analisi del costo
Calcola la complessità computazionale del seguente algoritmo:

![[Pasted image 20250601180506.png]]
### Esercizio 9 - soluzione
Partiamo calcolando il costo di $\text{mystery}2$:$$T_2(n) = \begin{cases}1 & n \leq 1 \\ 2 \cdot T_2(\frac{n}{3}) + n & n \gt 1\end{cases}$$che dal Master Theorem ci permette di trovare $a = 2, b = 3, \alpha = \log_3{2} = 0.6, \beta = 1$ che risulta quindi $T_2(n) = \Theta(n)$.
Ora calcoliamo $T_1(n)$: questa funzione contiene un ciclo che viene eseguito un numero di volte pari ad $i$, con $i$ che parte da $1$ e si raddoppia ogni iterazione fino a raggiungere o superare il valore di $n$. Questo significa che il ciclo viene eseguito $\log_2{n}$ volte. Ogni iterazione contiene inoltre una doppia chiamata alla funzione $\text{mystery}2$, che ha costo pari a $\Theta(n)$. Ricordando che la costante moltiplicativa va ignorata, allora il costo della funzione $\text{mystery}1$ sarà pari a $\Theta(\log{n}) \cdot \Theta(n)$, ovvero $T_1(n) = \Theta(n \cdot \log{n})$.
## Esercizio 10 - analisi del costo
Calcola il costo del seguente algoritmo:

![[Pasted image 20250601182954.png]]
### Esercizio 10 - soluzione
Partiamo calcolando $T_2(n)$:$$T_2(n) = \begin{cases}1 & n \leq 1 \\ 2 \cdot T_2(\frac{n}{3}) + n & n \gt 1 \end{cases}$$che con il Master Theorem risulta: $a = 2, b = 3, \alpha = \log_3{2}, \beta = 1$, che corrisponde a $\alpha \lt \beta \rightarrow T_2(n) = \Theta(n)$.
Ora calcoliamo $T_1(n)$:$$T_1(n) = \begin{cases}1 & n \leq 1 \\ 3 \cdot T_1(\frac{n}{4}) + \colorbox{yellow}{n} \cdot \colorbox{lightgreen}{n} & n \gt 1\end{cases}$$dove:
- $\colorbox{yellow}{}$ deriva dal costo di $T_2(n)$, richiamato nel ciclo di $T_1(n)$;
- $\colorbox{lightgreen}{}$ deriva dal fatto che qui (a differenza dell'esercizio precedente) la $i$ del ciclo venga incrementata tramite somma e non raddoppiata ogni iterazione: si avranno quindi circa $\frac{n}{2}$ iterazioni invece di $\log_2{n}$. Tuttavia la complessità di $\frac{n}{2}$ corrisponde ad $n$, in quanto si ignora la costante moltiplicativa $\frac{1}{2}$.

Quindi con il Master Theorem: $a = 3, b = 4, \alpha = \log_4{3}, \beta = 2$, da cui $\alpha \lt \beta$ e quindi $T_1(n) = \Theta(n^2)$.