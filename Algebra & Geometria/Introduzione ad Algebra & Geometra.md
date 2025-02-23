1. [Equazioni Lineari](#Equazioni%20Lineari)
	1. [Nota Bene](#Nota%20Bene)
2. [Definizione di campo](#Definizione%20di%20campo)
	2. [Esempi comuni](#Esempi%20comuni)
3. [Sistemi Lineari](#Sistemi%20Lineari)
4. [Rappresentare un sistema con una matrice](#Rappresentare%20un%20sistema%20con%20una%20matrice)
5. [Le matrici](#Le%20matrici)
	3. [Prodotto di matrici](#Prodotto%20di%20matrici)
		1. [Esempio](#Esempio)
		2. [Nota bene](#Nota%20bene)
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
3) $\forall A \in K \exists 0: a + 0 = a$
4) $\forall a \in K \exists -a: a + (-a) = 0$
5) $\forall a, b \in K: a \cdot b = b \cdot a$
6) $\forall a,b,c \in K: (ab) \cdot c = a \cdot (bc)$
7) $\forall a \in K \exists 1 \in K: a \cdot 1 = a$
8) $\forall a, b, c \in K: a \cdot (b+c) = ab + ac$
Se oltre a queste l'insieme gode anche della seguente, si dice invece $\textbf{campo}$:
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
Per indicare un sistema lineare in maniera compatta si usano le matrici. Una matrice è una tabella di numeri con $m$ righe e $n$ colonne. Ad esempio:
$$A = \begin{pmatrix}1 & -3 & 2 & \sqrt{5}\\4 & \pi & 0 & 1\\7 & -1 & e^{-5} & -\sqrt{41} \end{pmatrix}$$è una matrice valida.
## Le matrici
L'insieme delle matrici con $m$ righe ed $n$ colonne a coefficienti in $\mathbb{R}$ si indica con $M_{m,n}(\mathbb{R})$. Se una matrice $A \in M_{m,n}(\mathbb{R})$, allora si indica con $a_{i, j}$ l'elemento alla riga $i$ e alla colonna $j$ (partendo da 1).
Se $A$ è una matrice $m \times n$ allora una riga di $A$ può essere vista come una matrice $1 \times n$, mentre una colonna può essere vista come una matrice $m \times 1$.
Due matrici sono uguali se hanno le stesse misure e gli stessi elementi (in maniera ordinata).
Ad esempio:
$$A = \begin{pmatrix}1 & 2 \\ 3 & 4\end{pmatrix} \text{ e } B = \begin{pmatrix}4 & 3 \\ 2 & 1\end{pmatrix} \text{ non sono uguali}$$ma $$C = \begin{pmatrix}1 & 2 \\ 3 & 4 \end{pmatrix} \text{ e } D = \begin{pmatrix}1 & 2 \\ 3 & 4\end{pmatrix} \text{ sono uguali}$$
### Prodotto di matrici
Data una riga $(a_1, \dots, a_n)$ e una colonna $\begin{pmatrix}b_1 \\ \dots \\ b_n\end{pmatrix}$ della stessa lunghezza, il loro prodotto è il numero $a_1 \cdot b_1 + a_2 \cdot b_2 + \dots + a_n \cdot b_n$. Ad esempio:
$$(1, 2, 3) \cdot \begin{pmatrix}4 \\ 5 \\ 6\end{pmatrix} = 1 \cdot 4 + 2 \cdot 5 + 3 \cdot 6 = 32$$Se $A \in M_{m, n}(\mathbb{R})$ e $B \in M_{n, s}(\mathbb{R})$ definiamo il prodotto riga per colonna della due matrici come $C = AB$ con $C \in M_{m, s}(\mathbb{R})$ e $C_{i, j} = a_i \cdot b_j + \dots + a_{i_n} \cdot b_{j_n}$.
La scrittura $C_{i, j}$ corrisponde al prodotto tra la riga $R_i$ (i-esima) e la colonna $B_j$ (j-esima).
#### Esempio
$$A_{3, 3} = \begin{pmatrix}1 & 0 & 3 \\ 0 & -2 & 2 \\ 1 & 0 & 1\end{pmatrix} \text{ e } B_{3,2} = \begin{pmatrix}1 & 5 \\ 0 & 2 \\ 1 & 3\end{pmatrix}$$Avendo $A_{m,n}$ e $B_{n, s}$ dove il numero di colonne di $A$ equivale al numero di righe di $B$, si può procedere con il prodotto tra matrici. La matrice ottenuta da questa operazione sarà $C_{m,s}$ (nel nostro caso quindi $C_{3,2}$).
$$C_{1,1} = (1, 0, 3) \cdot \begin{pmatrix}1 \\ 0 \\ 1\end{pmatrix} = 1 + 0 + 3 = 4$$$$C_{1,2} = (1, 0, 3) \cdot \begin{pmatrix}5 \\ 2 \\ 3\end{pmatrix} = 5 + 0 + 9 = 14$$$$C_{2,1} = (0, -2, 2) \cdot \begin{pmatrix}1 \\ 0 \\ 1\end{pmatrix} = 0 + 0 + 2 = 2$$$$C_{2,2} = (0, -2, 2) \cdot \begin{pmatrix}5 \\ 2 \\ 3\end{pmatrix} = 0 -4 +6 = 2$$$$C_{3,1} = (1, 0, 1) \cdot \begin{pmatrix}1 \\ 0 \\ 1\end{pmatrix} = 1 + 0 + 1 = 2$$$$C_{3,2} = (1, 0, 1) \cdot \begin{pmatrix}5 \\ 2 \\ 3\end{pmatrix} = 5 + 0 + 3 = 8$$Quindi:$$C = \begin{pmatrix}4 & 14 \\ 2 & 2 \\ 2 & 8\end{pmatrix}$$
#### Nota bene
In questo caso $AB \Rightarrow 3 \times 3, 3 \times 2 \Rightarrow$ prodotto definito.
Se fosse stato un prodotto a parti inverse ($BA$), il prodotto non sarebbe stato definito, in quanto si avrebbe avuto: $BA \Rightarrow 3 \times 2, 3 \times 3$.
Generalmente $AB \not = BA$.