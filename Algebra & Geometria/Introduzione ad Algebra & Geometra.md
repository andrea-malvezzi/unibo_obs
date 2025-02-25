1. [Equazioni Lineari](#Equazioni%20Lineari)
	1. [Nota Bene](#Nota%20Bene)
2. [Definizione di campo](#Definizione%20di%20campo)
	2. [Esempi comuni](#Esempi%20comuni)
3. [Sistemi Lineari](#Sistemi%20Lineari)
4. [Le matrici](#Le%20matrici)
	3. [Uguaglianza tra matrici](#Uguaglianza%20tra%20matrici)
	4. [Somma tra matrici](#Somma%20tra%20matrici)
	5. [Prodotto di matrici](#Prodotto%20di%20matrici)
		1. [Esempio](#Esempio)
		2. [Nota bene](#Nota%20bene)
	6. [Definizione di Matrice Trasposta](#Definizione%20di%20Matrice%20Trasposta)
5. [Rappresentare un sistema lineare con una matrice](#Rappresentare%20un%20sistema%20lineare%20con%20una%20matrice)
	7. [Matrici scala](#Matrici%20scala)
	8. [Rango righe](#Rango%20righe)
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
## Le matrici
Una matrice è una tabella di numeri con $m$ righe e $n$ colonne. Ad esempio:
$$A = \begin{pmatrix}1 & -3 & 2 & \sqrt{5}\\4 & \pi & 0 & 1\\7 & -1 & e^{-5} & -\sqrt{41} \end{pmatrix}$$è una matrice valida.
L'insieme delle matrici con $m$ righe ed $n$ colonne a coefficienti in $\mathbb{R}$ si indica con $M_{m,n}(\mathbb{R})$. Se una matrice $A \in M_{m,n}(\mathbb{R})$, allora si indica con $a_{i, j}$ l'elemento alla riga $i$ e alla colonna $j$ (partendo da 1).
Se $A$ è una matrice $m \times n$ allora una riga di $A$ può essere vista come una matrice $1 \times n$, mentre una colonna può essere vista come una matrice $m \times 1$.
### Uguaglianza tra matrici
Due matrici sono uguali se hanno le stesse misure e gli stessi elementi (in maniera ordinata).
Ad esempio:
$$A = \begin{pmatrix}1 & 2 \\ 3 & 4\end{pmatrix} \text{ e } B = \begin{pmatrix}4 & 3 \\ 2 & 1\end{pmatrix} \text{ non sono uguali}$$ma $$C = \begin{pmatrix}1 & 2 \\ 3 & 4 \end{pmatrix} \text{ e } D = \begin{pmatrix}1 & 2 \\ 3 & 4\end{pmatrix} \text{ sono uguali}$$
### Somma tra matrici
Se $A, B \in M_{m \times n}(\mathbb{R})$ la matrice $C = A + B$ corrisponderà alla matrice per cui vale la seguente: $C_{i, j} = a_{i, j} + b_{i, j}$ . Ad esempio: 
$$A = \pmatrix{1 & -3 \\ 0 & 4 \\ 5 & 1} \text{ e } B = \pmatrix{0 & 1 \\ 5 & -1 \\ -2 & 7} \text{ , } A + B = C = \pmatrix{1 & -2 \\ 5 & 3 \\ 3 & 8}$$
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

### Definizione di Matrice Trasposta
Se $A \in M_{m \times n}(\mathbb{R})$ la trasposta di $A$ si indica con $A^T$ e corrisponde ad una matrice $M_{n \times m}(\mathbb{R})$ le cui righe sono (in maniera ordinata) le colonne di $A$. Ovvero la prima colonna di $A^T$ sarà la prima riga di $A$, e così discorrendo. Ad esempio:
$$A = \pmatrix{1 & -3 \\ 0 & 4 \\ 5 & 1} \Rightarrow A^T = \pmatrix{1 & 0 & 5 \\ -3 & 4 & 1}$$
## Rappresentare un sistema lineare con una matrice
Ad un sistema lineare si associa una matrice, in modo tale da poterlo riscrivere in maniera compatta. Per esempio, il seguente sistema lineare:
$$\begin{cases} 3x_1 + \sqrt{2}x_2 - x_3 = 1 \\ 5x_1 - 3x_3 + \pi x_4 = -2 \\ x_2 - x_4 = 1 \end{cases}$$Si potrebbe riscrivere nella maniera seguente:
$$A|\underline{b} = \left( \begin{array}{cccc|c} 3 & \sqrt{2} & -1 & 0 & 1 \\ 5 & 0 & 3 & \pi & -2 \\ 0 & 1 & 0 & -1 & 1\end{array} \right)$$dove $3, \sqrt{2}, -1, 0$ sono i coefficienti davanti a (in maniera ordinata) $x_1, x_2, x_3, x_4$ nella prima equazione del sistema. Lo stesso procedimento andrà svolto per ognuna delle equazioni del sistema.
Le cifre dopo il divisore verticale sono invece i risultati delle equazioni ($\dots = 1; \dots = -2; \dots = 1$).
Si ha quindi un numero di righe pari al numero di equazioni del sistema e un numero di colonne pari al numero di incognite di questo.
### Matrici scala
Una matrice si dice $\underline{scala}$ quando vengono soddisfatte le seguenti:
1) eventuali righe nulle si trovano in fondo alla matrice;
2) il primo elemento non-nullo (detto $\underline{pivot}$) di ogni riga si trova più a destra del pivot della riga precedente.
Ad esempio:
$$A = \pmatrix{0 & \colorbox{yellow}{1} & 2 \\ \colorbox{yellow}{1} & 2 & 3}, \text{ non è scala}$$$$B = \pmatrix{\colorbox{yellow}{1} & 2 & 0 \\ 0 & \colorbox{yellow}{1} & 2 \\ 0 & 0 & \colorbox{yellow}{1}}, \text{è scala}$$
Dove i numeri evidenziati in giallo corrispondono ai _pivot_.
### Rango righe
Sia $A_{m,n}$ una matrice scala. Si dice rango righe di $A$ ($rr(A)$) il numero di _pivot_ nella matrice. Potendoci essere solamente un _pivot_ per riga e per colonna, il $rr$ sarà sempre minore sia di $m$ che di $n$ . Ad esempio:
$$A = \pmatrix{\colorbox{yellow}{1} & 2 & 3 \\ 0 & \colorbox{yellow}{1} & 2 \\ 0 & 0 & 0} \text{ha rr pari a } 2$$
## Risolvere un sistema lineare con matrice scala associata
Risolvere un sistema lineare la cui matrice associata è a scala risulta semplice: ecco come fare.
1) controlla il rango righe della matrice senza soluzioni e della matrice associata. Nel caso in cui i due differiscano, il sistema non avrà soluzione:
$$A|\underline{b} = \left( \begin{array}{cccc|c} 1 & 0 & 3 & 1 & 3 \\ 0 & 1 & 0 & 2 & 1 \\ 0 & 0 & 2 & -4 & 6 \end{array} \right)$$ $$rr(A|\underline{b}) = 3;$$$$rr(A) = 3$$ora, essendo $rr(A)$ e $rr(A|\underline{b}$) uguali, si può procedere;
2) 