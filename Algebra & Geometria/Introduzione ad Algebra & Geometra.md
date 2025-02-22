1. [Equazioni Lineari](#Equazioni%20Lineari)
	1. [Nota Bene](#Nota%20Bene)
2. [Definizione di campo](#Definizione%20di%20campo)
	1. [Esempi comuni](#Esempi%20comuni)
## Equazioni Lineari
Un'equazione lineare è un'equazione del tipo:$$a_1x_1 + a_2x_2 + a_3x_3 + \dots + a_nx_n = b$$con $a_1,a_2,\dots,a_n, b \in \mathbb{R}$ (o in generale $\in K$, con $K$ che equivale ad un campo).
1) $x_1, x_2, \dots, x_n$ sono le incognite;
2) $a_1, a_2, \dots, a_n$ sono i coefficienti delle incognite;
3) b si dice termine noto.
Un esempio di equazione lineare potrebbe essere:$$3x_1 + 5x_2=7$$La soluzione ad un'equazione come quella rappresentata consiste in una n-upla ordinata di valori reali che sostituiti alle incognite rendono vera l'uguaglianza proposta.
Ad esempio, considerando la seguente equazione:$$3x_1 - 2x_2 + 7x_3 = -3$$Delle ipotetiche soluzioni potrebbero essere $S = (2, 1, -1)$.
### Nota Bene
L'ordine con cui ogni valore compare nella n-upla $S$ è importante. Sarebbe stato incorretto scrivere ad esempio $S = (-1, 2, 1)$.
**Perché?**
Proviamo a sostituire i valori proposti al posto delle incognite dell'equazione. Otterremmo:
$$ 3 \cdot (-1) - 2 \cdot (2) + 7 \cdot (1)$$che risulterebbe $$ -3 -4 + 7 = 0$$e quindi non rispetterebbero l'uguaglianza proposta dall'esercizio.
## Definizione di campo
Un insieme $K$ dove sono definite due operazioni, la somma ed il prodotto:
$$K \times K \rightarrow K, \text{ } (a,b) \rightarrow a + b$$$$K \times K \rightarrow K, \text{ } (a,b) \rightarrow ab$$si dice $\textbf{anello}$ se valgono le seguenti proprietà:
1) $a + b = b + a, \text{ } \forall a, b \in K$
2) $a \cdot (b + c) = ab + ac \text{ } \forall a, b \in K$
Se oltre a queste due l'insieme gode anche della seguente, si dice invece $\textbf{campo}$:
$$\forall a \in K, a \not=0 \text{ } \exists \text{ } \frac{1}{a} \text{ t.c. } \frac{1}{a} \cdot a = 1.$$ Dove $\frac{1}{a}$ si dice inverso di $a$.
### Esempi comuni
L'insieme $\mathbb{Z}$ corrisponde ad un anello, in quanto gode di ogni proprietà meno la $9$ (non contiene un valore per cui $a \cdot \frac{1}{4} = 1$).
L'insieme $\mathbb{N}$ non corrisponde né ad un anello, né ad un campo in quanto non contiene valori opposti.
Alcuni esempi di campo sono invece $\mathbb{R}$, $\mathbb{Q}$ e $\mathbb{C}$.
## Sistemi Lineari
Un sistema lineare in $n$ equazioni in $m$ incognite corrisponde ad un insieme di equazioni. Una soluzione del sistema è una n-upla di elementi di $K$ che soddisfa contemporaneamente tutte le equazioni del sistema.
Per trovare le soluzioni ad un sistema si usano le seguenti proprietà:
1) Aggiungendo ad entrambi i membri di un'uguaglianza la stessa quantità, l'uguaglianza proposta rimane verificata: $$a = b \Rightarrow a + c = b + c$$
$$a = b \Rightarrow a + (-c) = b + (-c)$$
2) lo stesso vale per la moltiplicazione, con l'eccezione che in questo caso il valore moltiplicante dovrà essere obbligatoriamente diverso da $0$:$$a = b \Rightarrow ac = bc$$
I sistemi lineari possono avere infinite soluzioni come non averne.
## Rappresentare un sistema con una matrice
