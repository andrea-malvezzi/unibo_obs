1. [Esercizio 1](#Esercizio%201)
	1. [Conclusioni](#Conclusioni)
2. [Esercizio 2](#Esercizio%202)
	2. [Conclusioni](#Conclusioni)
3. [Esercizio 3](#Esercizio%203)
	3. [Conclusioni](#Conclusioni)
# Esercizi
In seguito alcuni esercizi svolti in data $19/02/2025$ inerenti al confronto tra funzioni di costo.
## Esercizio 1
Vale $6 \cdot n^2 = \Omega(n^3)$?
Scriviamo il limite di confronto:
$$ \lim_{n \Rightarrow \infty}{\frac{6 \cdot n^2}{n^3}}$$per poi risolverlo (in questo caso raccogliendo $n^3$) e semplificando ove possibile.
### Conclusioni
Il risultato equivale a $0$, quindi $f(n) = o(g(n))$. La premessa risulta quindi $falsa$.
## Esercizio 2
Vale $10n^3 + n^2 + 7 = O(n^2)$?
$$\lim_{n \to \infty}{\frac{10n^3 + n^2 + 7}{n^2}} = \lim_{n \to \infty}{\frac{n^3 \cdot (10 + \frac{1}{n} + \frac{7}{n^3})}{n^3}} = 10$$
### Conclusioni
Il risultato equivale ad un $k > 0, k \in \mathbb{R}$, quindi $f(n) = \Theta(g(n))$. Ma ricordando la [[Parte matematica#Definizione di $ Theta$ (Theta)|Definizione di Theta]], sappiamo che se $f(n) = \Theta(g(n))$ allora $f(n) = o(g(n))$ e $f(n) = O(g(n))$. La premessa risulta quindi $verificata$.
## Esercizio 3

### Conclusioni
