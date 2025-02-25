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
## Rendere scala una matrice (algoritmo di Gauss)
1) Se $a_{11} = 0$ si scambia la prima riga di $A$ con la prima dove il primo elemento è non-nullo. Se il primo elemento di ogni riga è nullo, si considera la matrice senza la prima colonna e si ricomincia.
2) Si controllano tutte le righe meno la prima: se il primo elemento di una riga è nullo, la si lascia inalterata. In caso contrario, si sostituisce tutta la riga con la somma tra la riga ed il prodotto tra la prima riga e $-\frac{b}{a}$ dove $b$ è il primo elemento della riga da sostituire e $a$ è il corrispondente elemento della prima riga.
3) A questo punto tutti gli elementi della prima colonna, tranne eventualmente il primo, sono nulli. Si considera quindi la matrice meno la prima riga e la prima colonna e si ricomincia dal punto 1.
### Esempio
Rendiamo scala la seguente matrice $A_{3,4}$ :
$$A = \pmatrix{0 & 1 & -1 & 0 \\ 1 & 2 & 0 & 1 \\ 2 & -1 & 1 & 2}$$
Sostituiamo la prima riga con la seconda e riscriviamo.
$$A = \pmatrix{1 & 2 & 0 & 1 \\ 0 & 1 & -1 & 0 \\ 2 & -1 & 1 & 2}$$Applichiamo il punto $2$ e sistemiamo la terza riga:
$$\begin{aligned}a_{3,1} = 2 + 1 \cdot (-\frac{2}{1}) = 2 - 2 = 0 \\ a_{3,2} = -1 + 2 \cdot(-\frac{2}{1}) = -1 -4 = -5 \\ a_{3,3} = 1 + 0 = 1 \\ a_{3,4} = 2 + 1 \cdot (-\frac{2}{1}) = 2 - 2 = 0\end{aligned}$$$$A = \pmatrix{1 & 2 & 0 & 1 \\ 0 & 1 & -1 & 0 \\ 0 & -5 & 1 & 0}$$Ora ignoriamo la prima colonna e la prima riga e ricominciamo.
$$A = \pmatrix{\not 1 & \not 2 & \not 0 & \not 1 \\ \not 0 & 1 & -1 & 0 \\ \not 0 & -5 & 1 & 0}$$Applichiamo nuovamente il punto $2$:
$$\begin{aligned}a_{3,2} = -5 + 1 \cdot (-\frac{-5}{1}) = -5 +5 = 0 \\ a_{3,3} = 1 + -1 \cdot (-\frac{-5}{1}) = 1 -5 = -4 \\ a_{3,4} = 0 + 0 \cdot \dots = 0 \end{aligned}$$Infine riscriviamo la matrice, ora in forma scala:
$$A = \pmatrix{1 & 2 & 0 & 1 \\ 0 & 1 & -1 & 0 \\ 0 & 0 & -4 & 0}$$
[BRUTTA DA QUI IN POI]
## Spazi vettoriali
Esempi di spazi vettoriali
1) metodi applicati in un punto (dello spazio o del piano). Sappiamo fare $u + v$ e, se $\lambda \in \mathbb{R}$, anche $\lambda u$.
2) Matrici della stessa forma (stesso numero di riga e di colonne). Ad esempio le matrici $M_{3 \times 2}(\mathbb{R})$ .$$A = \pmatrix{1 & 0 \\ -1 & 5 \\ 0 & 4} \text{ e } B = \pmatrix{1 & -2 \\ 5 & 2 \\ -1 & -3}$$Allora si può scrivere$$A + B = \pmatrix{2 & -2 \\ -4 & 7 \\ -1 & 1}$$e, considerando $\lambda=-\frac{1}{2}$:$$\lambda A = $$
3) polinomi a coefficienti in $\mathbb{R}$. $\mathbb{R}(x)$ = {$a_nx^n + \dots + a_1x + a_0$} . Sappiamo sommare 2 polinomi $P(x)$ e $Q(x)$:$$P(x) = 3x^5 - 7x^4 + 8x^3 + 5x -5$$$$Q(x) = 4x^4 - x^3 + x^2 + 4x - 1$$Posso scrivere
$$P(x) + Q(x) = 3x^5 -3x^4 +7x^3 -x^2 + 9x -6$$
## Spazi vettoriali definizione
Si dice spazio vettoriale reale un insieme $V$ munito di due operazioni dette $somma$ e $prodotto$ per $scalari$:$$\begin{aligned}+:V \times V \rightarrow V \\ (u, v) \rightarrow u + v\end{aligned}$$$$\begin{aligned}\cdot : V \times V \rightarrow V \\ (\lambda, \mu) \rightarrow \lambda \mu \end{aligned}$$che soddisfano le seguenti proprietà:
La somma è:
1) $commutativa$, cioè $u + v = v + u \ \forall u,v \in V$; 

Negli esempi precedenti, chi è il vettore Nullo?
1) vettori applicanti il vettore nullo è $\underline{0}$ (vettore con origine e punta coincidenti);
2) $M_{m \times n}(\mathbb{R})$ si ha ad esempio: $$\underline{0} = \pmatrix{0 & 0 \\ 0 & 0 \\ 0 & 0}$$
3) $\mathbb{R}[x]$ si ha $$\underline{0} = 0 = 0x^n + \dots + 0x + 0$$
4) {$f : R \rightarrow R$} si ha $$$$
Si ha inoltre un caso particolare di 2:$$\mathbb{R}^n = \{(a_1, a_2, \dots, a_n) | a_i \in \mathbb{R}\} = \mathbb{R} \times \mathbb{R} \times \dots \mathbb{R} \text{ n volte}$$
### Esempio di un insieme che non è uno spazio vettoriale
Prendo $\mathbb{R}^2 = \{(a,b) = a, b \in \mathbb{R}\}$ e definisco $(a,b) + (c,d) = (ac, b + d)$ e $\lambda (a,b) = (a, \lambda b)$.
La somma sarà commutativa?
$$\begin{aligned}(a,b) + (c,d) = (ac, b + d) \\ (c,d) + (a,b) = (ca, d + b) \end{aligned}$$
La somma è quindi commutativa. E per quanto riguarda l'associatività?
Elemento neutro: $\underline{0} = (f, 0)$
opposto $(a, b)$ e cerco $(c, d)$ t.c. $(a, b) + (c, d) = \underline{0} = (1, 0)$
deve succedere che $ac = 1; b + d = 0 \Rightarrow d = -b$ se $a = 0$ c non si trova, quindi gli elementi del tipo $()$ (vedi slide)
[vedi 2.3.5 del libro della prof]
Spazio vettoriale: si fa il prodotto tra un elemento dello spazio e un numero;
Campo vettoriale: si fa il prodotto puramente tra elementi dello spazio. Inoltre si ha sempre l'inverso del prodotto.

Il vettore nullo è unico. Supponiamo che ci siano due vettori nulli $\underline{0}_1$ e $\underline{0}_2$, cioè $$\begin{aligned}v + \underline{0}_1 = v \ \forall v \in V (a) \\ v + \underline{0}_2 = v \ \forall v \in V (b)\end{aligned}$$Prendo $v = \underline{0}_2$ in $(a)$ e $v = \underline{0}_1$ in $(b)$:
$$ \begin{aligned}\underline{0}_2 + \underline{0}_1 \stackrel{(a)}{=} \underline{0}_2 \\ \underline{0}_1 + \underline{0}_2 \stackrel{(b)}{=} \underline{0}_1 \end{aligned}$$
## Sottospazio
Sia $V$ uno spazio vettoriale. Un sottoinsieme $U$ di $V$ si dice sottospazio se 
1) $U \not = \emptyset$
2) Se $u_1, u_2 \in U$ allora $u_1 + u_2 \in U$ (chiusura rispetto alla somma)
3) Se $u \in U, \lambda \in \mathbb{R}$ allora $\lambda u \in U$, dove $\lambda$ è uno scalare (chiusura rispetto al prodotto per scalari)
$U$ è in particolare uno spazio vettoriale che gode di $+$ e di $\cdot$, ereditati da $V$.
Esempi:
1) in $\mathbb{R}[x]$ consideriamo $V = \mathbb{R}_2[x] = \{$ polinomi di grado massimo 2 $\} = \{ a_2x^2 + a_1x + a_0 | a_0, a_1, a_2 \in V \}$. [vedi slide prof]?????
2) $V = M_{2 \times 2}(\mathbb{R})$; $$\begin{aligned}U = \{\pmatrix{a & b \\ 0 & 2b} | a, b \in \mathbb{R}\} \\ U \not = 0 \ \pmatrix{0 & 0 \\ 0 & 0} \in U \\ u = \pmatrix{a & b \\ 0 & 2b} \ v = \pmatrix{c & d \\ 0 & 2d} \in U \\ u + v = \pmatrix{a + c & b + d \\ 0 & 2b + 2d} = \pmatrix{a + c & b + d \\ 0 & 2(b + d)} \end{aligned}$$
Proposizione: se $U$ è sottospazio di $V$ allora $\underline{0} \in U$.
Dimostrazione: Sia $U$ un sottospazio di $V$ per (i) $U \not = \emptyset$ e sia $u \in U$. Faccio $0u \stackrel{per (iv)}{=} \underline{0} \stackrel{\text{per (iii)}}{\in} U$. Quindi per controllare se $U$ è uno spazio vettoriale conviene controllare subito se $\underline{0} \in U$ .$$U = \{\pmatrix{a & a+1 \\ b} | a, b \in \mathbb{R}\}$$