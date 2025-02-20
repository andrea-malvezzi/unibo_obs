1. [Funzioni di costo](#Funzioni%20di%20costo)
2. [Definizioni importanti](#Definizioni%20importanti)
	1. [Definizione di $O$ grande](#Definizione%20di%20$O$%20grande)
	2. [Definizione di $\Omega$ grande (Omega)](#Definizione%20di%20$%5COmega$%20grande%20(Omega))
	3. [Definizione di $\Theta$ (Theta)](#Definizione%20di%20$%5CTheta$%20(Theta))
	4. [Definizione di $o$ piccolo](#Definizione%20di%20$o$%20piccolo)
	5. [Definizione di $\omega$ piccolo (Omega)](#Definizione%20di%20$%5Comega$%20piccolo%20(Omega))
3. [Confrontare due funzioni](#Confrontare%20due%20funzioni)
	6. [Casi limite](#Casi%20limite)
## Funzioni di costo
Dato un input $n \geq 0$ (il numero di input del nostro algoritmo) e una funzione $f$, indichiamo con $f(n) \geq 0$ la quantità di risorse (tempo e memoria) richiesta da un algoritmo preso in esame.
## Definizioni importanti
### Definizione di $O$ grande
Data una funzione di costo $g(n)$  definiamo l'insieme di funzioni per cui $g(n)$ rappresenta un limite asintotico superiore e indichiamolo con $O(g(n))$.
Questo insieme rappresenterà quindi l'insieme di funzioni con rate di crescita inferiore (o uguale) a quello di $g(n)$.
### Definizione di $\Omega$ grande (Omega)
Per $\Omega$-grande si intende l'insieme delle funzioni per cui $g(n)$ rappresenta un limite asintotico inferiore.
Questo insieme rappresenterà quindi l'insieme di funzioni con rate di crescita superiore (o uguale) a quello di $g(n)$.
### Definizione di $\Theta$ (Theta)
Per $\Theta$ si indica l'insieme delle funzioni asintoticamente equivalenti a $g(n)$. Ovvero:
$$f(n) \in \Theta(g(n)) \text{ sse } f(n) = O(g(n)) \text{ e } f(n) = \Omega(g(n))$$
**Nota Bene:** nello studio degli algoritmi, i simboli $\in$ e $=$ si usano per indicare l'appartenenza agli insiemi in modo equivalente.
### Definizione di $o$ piccolo
Per $o$-piccolo si intende l'insieme delle funzioni asintoticamente dominate da $g(n)$. Ma in che modo questo insieme differisce da quello di $O$-grande?
$$f(n) = O(g(n)) \Rightarrow f(n) \leq c \cdot g(n) \text{ per almeno un c} $$
$$f(n) = O(g(n)) \Rightarrow f(n) \lt c \cdot g(n) \text{ per ogni c} $$
Da cui deriva che $f(n)$ = $o(g(n)) \Rightarrow f(n) = O(g(n))$.
### Definizione di $\omega$ piccolo (Omega)
Per $\omega$-piccolo si intende l'insieme delle funzioni asintoticamente dominanti rispetto a $g(n)$.
Come nel caso di $O$-grande e $o$-piccolo, differisce da $\Omega$-grande per quanto segue:
$$f(n) = \Omega(g(n)) \Rightarrow f(n) \geq c \cdot g(n) \text{ per almeno un c}$$
$$f(n) = O(g(n)) \Rightarrow f(n) \gt c \cdot g(n) \text{ per ogni c}$$ Da cui deriva che $f(n) = \omega(g(n)) \Rightarrow f(n) = \Omega(g(n))$.
## Confrontare due funzioni
Per confrontare due funzioni $f(n)$ e $g(n)$ si usa il seguente limite:
$$\lim_{n \to \infty}{\frac{f(n)}{g(n)}}$$
Ed in base al risultato di questo si determina l'insieme (o gli insiemi) di appartenenza di $f(n)$.
1) Se il limite risulta $0$, allora $f(n) = o(g(n)) \Rightarrow f(n) = O(g(n))$;
2) Se il limite risulta $\infty$, allora $f(n) = \omega(g(n)) \Rightarrow f(n) = \Omega(g(n))$;
3) Se il limite risulta $k$, dove $k \in \mathbb{R}$ e $k \gt 0$, allora $f(n) = \Theta(g(n))$ (e quanto ne consegue).
### Casi limite
Esistono casi dove si vogliono confrontare due funzioni che non sono confrontabili tra di loro, come $n$ e $n^{\sin{n} + 1}$. In questi casi si procede con la definizione di limite.
### Esercizi
Ecco alcuni [[Esercizi inerenti al confronto tra funzioni]] (svolti).