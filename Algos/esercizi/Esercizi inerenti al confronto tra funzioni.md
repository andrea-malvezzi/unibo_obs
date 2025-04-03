## Esercizio 1
È corretto dire che $6 \cdot n^2 = \Omega(n^3)$?
Ci sono due modi per risolvere questo esercizio:
- capendo se esiste una costante $c$ per cui si ha $c \cdot n^3 \geq 6 \cdot n^2$. Ovviamente $n^3$ risulta maggiore o uguale a $6 \cdot n^2$ per tutte le $c \in \mathbb{N} \geq 7$.
- calcolando il limite tra la funzione fornita ed il valore contenuto nella complessità ($n^3$) $$\lim_{n \to \infty}{\frac{6 \cdot n^2}{n^3}} = \lim_{n \to \infty}{\frac{1}{n}} = 0$$e ricordare i 3 casi specificati nella sezione inerente al [[Introduzione, complessità computazionali e analisi degli algoritmi#Confronto tra funzioni|confronto tra funzioni]]. In questo caso, avendo un risultato pari a $0$ sappiamo che $f(n) = o(g(n)) \Rightarrow f(n) = O(g(n))$.
Difatti entrambi i percorsi ci riportano alla stessa conclusione: $6 \cdot n^2 = O(n^3) \not = \Omega(n^3)$.
## Esercizio 2
E’ vero che $10n^3 + 2n^2 + 7 = O(n^3)$?
Calcoliamo il limite associato$$
\lim_{n \to \infty}{\frac{10n^3 + 2n^2 + 7}{n^3}} = 10$$quindi un $k \in \mathbb{R}, k \gt 0$, da cui si deduce che $f(n) = \Theta(g(n^3))$ e quindi anche a $O(n^3)$.
## Esercizio 3
E’ vero che $(2 + (−1)^n )\cdot n^2 = Θ(n^2)$?
Calcolando il limite associato si nota come questo sia indefinito a causa dell'esponente di $(-1)$.
Occorre quindi procedere con la [[Introduzione, complessità computazionali e analisi degli algoritmi#Definizione di $ Theta$ (Theta)|definizione di Theta]]:$$
\begin{array}{c}
c_1 \cdot \not n^2 \leq (2 + (-1)^n) \cdot \not n^2 \\
c_1 \cdot \not n^2 \geq (2 + (-1)^n) \cdot \not n^2
\end{array}
$$verificate per $c_1 = 1$ e per $c_2 = 3$. Data l'esistenza di queste due costanti, la risposta è **vero**.
## Esercizio 4
