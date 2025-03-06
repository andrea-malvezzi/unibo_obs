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
	8. [Rendere scala una matrice (algoritmo di Gauss)](#Rendere%20scala%20una%20matrice%20(algoritmo%20di%20Gauss))
		3. [Esempio](#Esempio)
	9. [Rango righe](#Rango%20righe)
6. [Risolvere un sistema lineare con matrice scala associata](#Risolvere%20un%20sistema%20lineare%20con%20matrice%20scala%20associata)
7. [Definizione di spazi vettoriali](#Definizione%20di%20spazi%20vettoriali)
	10. [Esempio di un insieme che non è uno spazio vettoriale](#Esempio%20di%20un%20insieme%20che%20non%20%C3%A8%20uno%20spazio%20vettoriale)
	11. [Differenza tra Spazio e Campo vettoriale](#Differenza%20tra%20Spazio%20e%20Campo%20vettoriale)
8. [Sottospazio](#Sottospazio)
9. [Definizione di sottospazio](#Definizione%20di%20sottospazio)
	12. [Esempio](#Esempio)
	13. [Altro esempio](#Altro%20esempio)
	14. [Esempio fatto come Dio comanda porca la puttana bastarda](#Esempio%20fatto%20come%20Dio%20comanda%20porca%20la%20puttana%20bastarda)
	15. [Esempio chiusura rispetto a prodotto e somma](#Esempio%20chiusura%20rispetto%20a%20prodotto%20e%20somma)
	16. [osservazione](#osservazione)
10. [Sottospazi di $\mathbb{R}$^2](#Sottospazi%20di%20$%5Cmathbb%7BR%7D$%5E2)
	17. [Dimostrazione](#Dimostrazione)
	18. [Definizione](#Definizione)

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
### Rendere scala una matrice (algoritmo di Gauss)
1) Se $a_{11} = 0$ si scambia la prima riga di $A$ con la prima dove il primo elemento è non-nullo. Se il primo elemento di ogni riga è nullo, si considera la matrice senza la prima colonna e si ricomincia.
2) Si controllano tutte le righe meno la prima: se il primo elemento di una riga è nullo, la si lascia inalterata. In caso contrario, si sostituisce tutta la riga con la somma tra la riga ed il prodotto tra la prima riga e $-\frac{b}{a}$ dove $b$ è il primo elemento della riga da sostituire e $a$ è il corrispondente elemento della prima riga.
3) A questo punto tutti gli elementi della prima colonna, tranne eventualmente il primo, sono nulli. Si considera quindi la matrice meno la prima riga e la prima colonna e si ricomincia dal punto 1.
#### Esempio
Rendiamo scala la seguente matrice $A_{3,4}$ :
$$A = \pmatrix{0 & 1 & -1 & 0 \\ 1 & 2 & 0 & 1 \\ 2 & -1 & 1 & 2}$$
Sostituiamo la prima riga con la seconda e riscriviamo.
$$A = \pmatrix{1 & 2 & 0 & 1 \\ 0 & 1 & -1 & 0 \\ 2 & -1 & 1 & 2}$$Applichiamo il punto $2$ e sistemiamo la terza riga:
$$\begin{aligned}a_{3,1} = 2 + 1 \cdot (-\frac{2}{1}) = 2 - 2 = 0 \\ a_{3,2} = -1 + 2 \cdot(-\frac{2}{1}) = -1 -4 = -5 \\ a_{3,3} = 1 + 0 = 1 \\ a_{3,4} = 2 + 1 \cdot (-\frac{2}{1}) = 2 - 2 = 0\end{aligned}$$$$A = \pmatrix{1 & 2 & 0 & 1 \\ 0 & 1 & -1 & 0 \\ 0 & -5 & 1 & 0}$$Ora ignoriamo la prima colonna e la prima riga e ricominciamo.
$$A = \pmatrix{\not 1 & \not 2 & \not 0 & \not 1 \\ \not 0 & 1 & -1 & 0 \\ \not 0 & -5 & 1 & 0}$$Applichiamo nuovamente il punto $2$:
$$\begin{aligned}a_{3,2} = -5 + 1 \cdot (-\frac{-5}{1}) = -5 +5 = 0 \\ a_{3,3} = 1 + -1 \cdot (-\frac{-5}{1}) = 1 -5 = -4 \\ a_{3,4} = 0 + 0 \cdot \dots = 0 \end{aligned}$$Infine riscriviamo la matrice, ora in forma scala:
$$A = \pmatrix{1 & 2 & 0 & 1 \\ 0 & 1 & -1 & 0 \\ 0 & 0 & -4 & 0}$$
### Rango righe
Sia $A_{m,n}$ una matrice scala. Si dice rango righe di $A$ ($rr(A)$) il numero di _pivot_ nella matrice. Potendoci essere solamente un _pivot_ per riga e per colonna, il $rr$ sarà sempre minore sia di $m$ che di $n$ . Ad esempio:
$$A = \pmatrix{\colorbox{yellow}{1} & 2 & 3 \\ 0 & \colorbox{yellow}{1} & 2 \\ 0 & 0 & 0} \text{ha rr pari a } 2$$
## Risolvere un sistema lineare con matrice scala associata
Risolvere un sistema lineare la cui matrice associata è a scala risulta semplice: ecco come fare.
1) controlla il rango righe della matrice senza soluzioni e della matrice associata. Nel caso in cui i due differiscano, il sistema non avrà soluzione: $$A|\underline{b} = \left( \begin{array}{cccc|c} 1 & 0 & 3 & 1 & 3 \\ 0 & 1 & 0 & 2 & 1 \\ 0 & 0 & 2 & -4 & 6 \end{array} \right)$$$$rr(A|\underline{b}) = 3;$$$$rr(A) = 3$$ora, essendo $rr(A)$ e $rr(A|\underline{b}$) uguali, si può procedere per sostituzione dal basso;
2) l'ultima riga della matrice corrisponde alla seguente equazione:$$2x_3 -4x_4 = 6$$di conseguenza possiamo ricavare una delle due incognite (solitamente si ricava il *pivot*) e assegnare valori a piacere utili a verificare l'uguaglianza all'altra. Questo non sarebbe stato possibile nel caso in cui vi fosse stata solamente un'incognita in questa riga (in tal caso si sarebbe semplicemente ricavata tale variabile). Quindi:$$x_3 = \frac{6 + 4x_4}{2} = 3 + 2x_4, x_4 \in \mathbb{R}$$
3) Ora proseguiamo sostituendo riga per riga il valore trovato, partendo dalla seconda:$$x_2 + 2x_4 = 1$$Qui non compare $x_3$, quindi basta ricavare l'incognita associata al *pivot*:$$x_2 = 1 - 2x_4$$Ora sostituiamo i valori trovati nella prima (ed ultima) riga:$$\begin{aligned}x_1 + 3x_3 + x_4 = 3 \\ x_1 + 3 \cdot \left( 3 + 2x_4 \right) + x_4 = 3 \\ 9 + 6x_4 + x_4 - 3 = -x_1 \\ -6 -7x_4 = x_1\end{aligned} $$
## Definizione di spazi vettoriali
Si dice spazio vettoriale reale un insieme $V$ munito di due operazioni dette $somma$ e $prodotto$ per $scalari$:$$\begin{aligned}+:V \times V \rightarrow V \\ (u, v) \rightarrow u + v\end{aligned}$$$$\begin{aligned}\cdot : V \times V \rightarrow V \\ (\lambda, \mu) \rightarrow \lambda \mu \end{aligned}$$che soddisfano le seguenti proprietà:
La somma con l'insieme $V$ deve formare un gruppo ***abeliano***, ovvero rispettare le seguenti proprietà:
1) *commutatività*: $u + v = v + u \ \forall u,v \in V$; 
2) *associatività*: $a + (b + c) = (a + b) + c \ \forall a, b, c \in V$;
3) *elemento neutro*: deve esistere un elemento $0 \in V: a + 0 = a, \ \forall a \in V$;
4) *elemento opposto*: $\forall a \in V \ \exists -a \in V : a + (-a) = 0$. ^5455f8

Il prodotto deve formare a sua volta un gruppo ***abeliano***, ovvero rispettare le seguenti:
1) *commutatività*: $a \cdot b = b \cdot a, \ \forall a,b \in V$;
2) *associatività:* $(a \cdot b) \cdot c = a \cdot (b \cdot c), \ \forall a,b,c \in V$;
3) *elemento neutro:* deve esistere un elemento $1 \in V: a \cdot 1 = a, \forall a \in V$;
4) elemento opposto: $\forall a \not = 0 \in V, \ \exists a^{-1}: a \cdot a^{-1} = 1$
### Esempio di un insieme che non è uno spazio vettoriale
Prendo $\mathbb{R}^2 = \{(a,b) = a, b \in \mathbb{R}\}$ e definisco la somma come $(a,b) + (c,d) = (ac, b + d)$ ed il prodotto come $\lambda (a,b) = (a, \lambda b)$.
Per verificare se l'insieme fornito (considerando le definizioni di somma e prodotto valide all'interno di esso) corrisponde ad uno spazio vettoriale, verifichiamo la veridicità delle proprietà per le operazioni elencate.
1) La somma sarà commutativa?$$\begin{aligned}(a,b) + (c,d) = (ac, b + d) \\ (c,d) + (a,b) = (ca, d + b) \end{aligned}$$La somma è quindi commutativa.
2) La proprietà associativa è valida?$$\begin{aligned}((a, b) + (c, d)) + (e, f) = (ac, b + d) + (e, f) = (ace, b + d + f) \\ (a, b) + ((c, d) + (e, f)) = (a, b) + (ce, d + f) = (ace, b + d + f)\end{aligned}$$L'associatività è quindi verificata.
3) Esiste l'elemento neutro per la somma?$$\text{prendendo } \underline{0} = (1, 0); (a, b) + \underline{0} = (a \cdot 1, b + 0) = (a, b)$$
4) Esiste l'elemento opposto della somma? Considerando $(a, b)$ dovrei trovare una coppia $(c, d)$ che sommata alla prima restituisca l'elemento neutro $\underline{0}$: dovrei arrivare ad avere:$$(a, b) + (c, d) = (1, 0)$$ovvero dovrei trovare una coppia che verifichi le equazioni seguenti:$$\begin{cases}a \cdot c = 1 \\ b + d = 0\end{cases}$$da cui semplificando ottengo:$$\begin{cases}c = \frac{1}{a}, a \not = 0 \\ d = -b\end{cases}$$questo elemento opposto dovrebbe valere per tutti i membri di $\mathbb{R}^2$, ma nel caso in cui $a$ sia pari a $0$ il sistema salta. L'insieme non presenta quindi un candidato valido per la [[Introduzione ad Algebra & Geometra#^5455f8|quarta proprietà della somma]].
### Differenza tra Spazio e Campo vettoriale
Nello spazio vettoriale si ha un insieme di vettori che possono essere aggiunti tra loro e moltiplicati per scalari (numeri).
Un campo vettoriale è invece una *funzione* che associa un vettore ad ogni punto di un certo spazio.
<!-- BRUTTA DA QUI LATEST -->
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
data: $26/02/2025$
## Definizione di sottospazio
Se $V$ spazio vettoriale e $U \subseteq V$ allora $U$ si dice sottospazio e lo si indica con $U \leq V$ se:
1) $U \not = \emptyset$
2) se $u_1, u_2 \in U$ allora $u_1 + u_2 \in U$.
3) se $u \in U, \lambda \in \mathbb{R}$ allora $\lambda u \in U$.
In particolare $U$ è uno spazio vettoriale dove somma e prodotto per scalari sono quelli "ereditati da $V$", cioè sono le restrizioni a $U$ delle corrispondenti operazioni in $V$.

### Esempio
$V = M_{2 \times 2} \mathbb{R} \ U = \{\pmatrix{a & b \\ -a & 0} | a,b \in \mathbb{R}, b \geq 0\}$ 
$U$ è sottospazio
$\underline{0} \in U$ basta prendere a = b = 0
Siano $u_1, u_2 \in U$
$$u_1 = \pmatrix{a & b \\ -a & 0} \ u_2 = \pmatrix{c & d \\ -c & 0}$$
$$u_1 + u_2 = \pmatrix{a + c & b + d \\ -a -c & 0 + 0} = \pmatrix{\colorbox{yellow}{a + c}& b + d \\ \colorbox{yellow}{-(a + c)} & 0}$$
$$\lambda u_1 = \pmatrix{\lambda a & \lambda b \\ -\lambda a & 0} \ u = \pmatrix{1 & 1 \\ -1 & 0}$$Ad esempio prendendo $\lambda = -1$, vediamo se il calcolo rispetta il formato di $\lambda u_1$:
$$\lambda u = \pmatrix{-1 & -1 \\ \colorbox{red}{1} & 0}$$L'uno marchiato dovrebbe essere -1. $U$ non è quindi chiuso rispetto al prodotto per scalari.
### Altro esempio
Siano $u_1 = \pmatrix{x_1, 3x_2}$ e $u_2 = \pmatrix{x_2, 3x_2}$ entrambi $\in U$.
$$u_1 + u_2 = \pmatrix{x_1 + x_2, 3x_2 + 3x_2} = \pmatrix{x_1 + x_2, 3(x_1 + x_2)}$$
### Esempio fatto come Dio comanda porca la puttana bastarda
In $V = \mathbb{R}^2$, $U = \{(x, y) | x^2 - xy = 0\}$.
$(0,0) \in V?$ Sì perché la coppia $(0, 0)$ risolve l'equazione fornita dalla definizione di $U$.
E invece avendo $u_1 = \left( x_1, y_1 \right)$ e $u_2 = \left( x_2, y_2 \right)$, il vettore $u_1 + u_2$ sta in $U$?
Calcoliamo $u_1 + u_2 \ \left( x_1 + x_2, y_1 + y_2 \right)$.
In seguito, sostituiamo i valori trovati nella definizione di $U$:
$$\left( x_1 + x_2\right)^2 - \left( x_1 + x_2 \right)\left(y_1 + y_2\right) = 0?$$[inserisci calcoli]
### Esempio chiusura rispetto a prodotto e somma
[vedi appunti Dule o Elisa]
### osservazione
osservazione: Se $V$ spazio vettoriale e $U = \{\underline{0}\}$ (contiene solo il vettore nullo $\not =$ è insieme vuoto), allora $U$ è sempre sottospazio di $V$. Questo tipo di sottospazio si dice banale o nullo. Se invece $U \not = \{\underline{0}\}$ ed è un sottospazio, allora sia $u \in U, u \not = 0$ e prendiamo $\lambda \in \mathbb{R}$ sappiamo per (3) che $\lambda u \in U$. Di conseguenza: $U$ contiene tutti i multipli di $u$ e c'è un numero infinito di tali vettori se $a,b \in \mathbb{R} \ a \not = b$ allora $a \cdot u \not = b \cdot u$. 
Dimostriamo la nozioni finale per assurdo:
$au = bu \Rightarrow au - bu = \underline{0} \Rightarrow (a-b)u = \underline{0}$. Allora $a - b = 0$, eppure $u = \underline{0}$.
## Sottospazi di $\mathbb{R}$^2
Osservazione: La circonferenza $C = \{(x, y) | x^2 + y^2 = 1\}$ non è sottospazio in quanto $\underline{0} \not \in C$ e non sono rispettate la chiusura rispetto la somma (2) e al prodotto (3).
La parabola $P = \{(x,y) | y = x^2\}$ invece contiene l'insieme nullo, ma non verifica né (2) né (3).
Supponiamo che $U$ sia un sottospazio di $\mathbb{R}^2$, che $U \not = \{\underline{0}\}$ e sia $u \in U$. Sappiamo che $U$ contiene tutti i vettori $\{a \cdot \underline{u}| a \in \mathbb{R}\}$ quindi $U$ contiene la retta per l'origine e passante per $\underline{u}$. Chiamiamo questa retta $r_u$. Abbiamo due casi:
1) $U = r_u$
2) esiste $w \in U, w \not \in r_u$ 
Sicuramente $U$ contiene la retta $r_w$ passante per $0$ e di direzione $w$. Inoltre, se prendo un qualsiasi $p \in r_u$ e $q \in r_w$, allora $U$ deve contenere "$p + q$".
Che figura geometrica otteniamo? Un **piano** $\Rightarrow$ U è tutto $\mathbb{R}^2$!
I sottospazi di $\mathbb{R}^2$ sono quindi:
1) $\{\underline{0}\}$
2) rette per $\{\underline{0}\}$
3) $\mathbb{R}^2$ stesso
Sappiamo che $\stackrel{\rightarrow}{OP_1}$, $\dots$, $\stackrel{\rightarrow}{OP_n}$ vettori applicati nel piano il più piccolo sottospazio che li contiene può essere:
1) $\{\underline{0}\}$
2) una retta per $\{\underline{0}\}$
3) tutto il piano
Sia $V$ uno spazio vettoriale. $v_1, \dots, v_n \in V$.
Una combinazione lineare di $v_1, \dots, v_n$ è un vettore $v$ del tipo $v = \lambda_1v_1 + \lambda_2v_2 + \dots + \lambda_nv_n$ con $\lambda:1, \lambda_2, \dots, \lambda_n \in \mathbb{R}$.
Ad esempio:
Avendo $V = \mathbb{R}^2[x]$, $v_1 = x^2 - 5x + 7$ e $v_2 = 3x - 1$, allora $v = 3(v_1) + 2(v_2)$.
Definizione: $V$ spaz. vett. $v_1, \dots, v_n \in V$. Allora: $\lt v_1, \dots, v_n\gt = \{\lambda_1v_1 + \dots + \lambda_nv_n | \lambda_1, \dots, \lambda_n \in \mathbb{R}\}$ è l'insieme di tutte le combinazioni lineari di $v_1, \dots, v_n$ . Perché ci interessano le combinazioni lineari? Una combinazione lineare è sempre il sottospazio più piccolo che contiene i vettori usati per costruirlo.
### Dimostrazione
Abbiamo che: $\lt v_1, \dots, v_n \gt = \{\lambda_1v_1 + \dots + \lambda_nv_n | \lambda_1, \dots, \lambda_n \in \mathbb{R} \}$. Dobbiamo dimostrare che questo sia un sottospazio.
Prendiamo $\underline{0} = 0v_1 + \dots + 0v_n \in \lt v_1, \dots, v_2 \gt$.
Siano $u, v \in \lt v_1, \dots, v_2 \gt$ t.c. 
$u = \lambda_1v_1 + \dots + \lambda_nv_n$ e $v = \gamma_1v_1 + \dots + \gamma_nv_n$
$u + v = \lambda_1v_1 + \dots + \gamma_1v_1 + \dots + \gamma_nv_n = (\lambda_1 + \gamma_1)v_1 + \dots + (\lambda_n + \gamma_n)v_n$.
$\dots$ [vedi appunti Elisa]
### Definizione
$\lt v_1, \dots, v_n \gt$ si dice sottospazio generato da $v_1, \dots, v_n$. Si dice $V$ è generato da $\lt v_1, \dots, v_n \gt$ .
[vedi Span 3Blue1Brown YT per riassunto della lezione].

data: $27/02/2025$
$V$ sp.vett. $v_1, v_2, v_n \in V$
Def: $v \in V$ è combinazione lineare di $v_1, \dots, v_n$ se $v = \lambda_1v_1, \dots, \lambda_nv_n$ con $\lambda_1, \dots, \lambda_n \in R$.
Def: $\lt v_1, \dots, v_n \gt = \{\text{combinazioni lineari di } v_1, \dots, v_n\} = \{\lambda_1v_1 + \dots + \lambda_nv_n | \lambda_1, \dots, \lambda_n \in R \}$
Prop: $\lt v_1, \dots, v_n \gt$ è sottospazio di $V$ si dice sottospazio generato da $v_1, \dots, v_n$ e si indica anche con $Span(v_1, \dots, v_n)$ o $Span\{v_1, \dots, v_n\}$
$\lt v_1, \dots, v_n \gt$ è il più piccolo sottospazio di $V$ contenenente $v_1, \dots, v_n$ nel senso che se $Z$ è un ... di $V$ t.c. $\{ v_1, \dots, v_n \} \subseteq Z$ allora $\lt v_1, \dots, v_n \gt \subseteq Z$

Def: se $V = \lt v_1, \dots, v_n \gt$ diciamo che $v_1, \dots, v_n$ generano $V$ o che $V$ è generato da $v_1, \dots, v_n$
Esempio: in $\mathbb{R}^3$.
$$e_1 = \left( 1, 0, 0 \right) \ e_2 = \left( 0, 1, 0 \right)$$Generiamo  $\lt e_1, e_2 \gt$:
$\dots$
$e_3 = \left( 0,0,1 \right)$
$\lt e_1, e_2, e_3 \gt = \mathbb{R}^3$
sia $\left( a, b, c \right) \in \mathbb{R}^3$
mostro che $\left( a, b, c \right) = \lambda_1e_1 + \lambda_2e_2 + \lambda_3e_3$
$\left( a, b, c \right) = a\left(1,0,0\right) + b\left(0,1,0\right) + c\left(0,0,1\right)$
***Se non lo vedevate subito*** si doveva fare così: 
1) cerco $\lambda_1, \lambda_2, \lambda_3$ t.c. $\left(a,b,c\right) = \lambda_1\left(1,0,0\right) + \lambda_2\left(0,1,0\right) + \lambda_3\left(0,0,1\right) = \left(\lambda_1, \lambda_2, \lambda_3 \right) \Rightarrow \lambda_1 = a, \lambda_2 = b, \lambda_3 = c$
Esercizio in $\mathbb{R}_3$ (polinomi di grado max. $3$)
$v_1 = x^3 + 2x^2 + 3x -1$, $v_2 = kx^3 + 4x^2 + 3kx - 2$, $v_3 = kx^2 + 3$, $v = x^3 + kx^2 + 3x + 3$
Stabilire per quali $k \in \mathbb{R}$ il vettore $v \in \lt v_1, v_2, v_3 \gt$.
$v \in \lt v_1, v_2, v_3 \gt$ se è comb.lineare di $v_1, v_2, v_3$ cioè se esistono $\lambda_1, \lambda_2, \lambda_3 \in \mathbb{R}$ t.c. $v = \lambda_1v_1 + \lambda_2v_2 + \lambda_3v_3$ deve succedere che $x^3 + kx^2 + 3x + 3 = \lambda_1\left(x^3 + 2x^2 + 3x - 1\right) + \lambda_2\left(kx^3 + 4x^2 + 3kx -2\right) + \lambda_3\left(kx^2 + 3\right) =$ dobbiamo capire se abbiamo $\lambda_1, \lambda_2, \lambda_3 = \left(\lambda_1 + k\lambda_2\right)^3 + \left(2\lambda_1 + 4\lambda_2 + k\lambda_3\right)x^2 + \left(3\lambda_1 + 3k\lambda_2\right)x + \left(-\lambda_1 - 2\lambda_2 + 3\lambda_3\right)$
Due polinomi sono uguali quando gli stessi coeff. Deve succedere che:
1) $\lambda_1 + k\lambda_2 = 1$
2) $2\lambda_1 + 4\lambda_2 + k\lambda_3 = k$
3) $3\lambda_1 + 3k\lambda_2 = 3$
4) $-\lambda_1 - 2\lambda_2 + 3\lambda_3 = 3$
Dobbiamo risolvere un sist. lineare nelle incognite $\lambda_1, \lambda_2, \lambda_3$ o meglio, voglio capire se POSSO TROVARE questi coefficienti, anche senza risolvere il sistema. Come posso fare a capire se un sistema lineare ha soluzioni? Trasformo in matrice associata e conto i rango righe.
$$A|\underline{b} = \left(\begin{array}{ccc|c}1 & k & 0 & 1 \\ 2 & 4 & k & k \\ 3 & 3k & 0 & 3 \\ -1 & -2 & 3 & 3\end{array}\right)$$$$\left(\begin{array}{ccc|c}1 & k & 0 & 1 \\ 0 & 4 - 2k & k & k - 2 \\ 0 & 0 & 0 & 0 \\ 0 & k -2 & 3 & 4\end{array}\right)$$$$\left(\begin{array}{ccc|c}1 & k & 0 & 1 \\ 0 & 4 - 2k & k & k - 2 \\ 0 & k -2 & 3 & 4 \\ 0 & 0 & 0 & 0 \end{array}\right)$$$$\left(\begin{array}{ccc|c}1 & k & 0 & 1 \\ 0 & 4 - 2k & k & k - 2 \\ 0 & k -2 & 3 & 4 \\ 0 & 0 & 0 & 0 \end{array}\right)$$$\dots$ [vedi appunti degli altri per il proseguimento (o risolvila e basta)]
Se $k \not = 2$ e $k \not = -6$ il $rr(A) = 3 = rr(A|\underline{b})$
1 soluzione posso trovare $\lambda_1, \lambda_2, \lambda_3$, $v \in \lt v_1, v_2, v_3 \gt$
se $k = 2$ otteniamo (basta sostituire nella matrice trovata alla fine e contare il rango righe per il numero di soluzioni):
Se $k = -6$ otteniamo (stessa cosa del precedente):
Risultato: $v \in \lt v_1, v_2, v_3 \gt$ per ogni $k \not = 2$.
Esercizio:
stabilire per quali $k$ i vettore $v_1 = \left(1,1\right)$ e $v_k = \left(3, k\right)$ generano $\mathbb{R}^2$.
[vedi grafici appunti Matteo e copiali qui (non possiamo fare grafici haimé)]
Se $v_1 // v_k$ cioè se $k = 3$ allora si ha $\lt \left(1,1\right), \left(3,3\right) \gt$ è la retta di eq. $y = x$. Quindi $\forall k, k \in \mathbb{R}, k \not = 3$.
[vedi approccio algebrico per generalizzare questi casi dagli appunti di Matteo]

a) Se $v$ è comb.lineare di $v_1 \dots v_n$ allora $\lt v_1, \dots, v_n \gt$ = $\lt v_1, \dots, v_n, v \gt$
b) Se $\lt v_1, \dots, v_n \gt = \lt v_1, \dots, v_n, v \gt$ allora $v$ è comb.lineare di $v_1, \dots, v_n$
Dim.(b): $I_p = \lt v_1, \dots, v_n, v \gt = \lt v_1, \dots, v_n \gt = v \in \lt v_1, \dots, v_n, v \gt \stackrel{iP}{=} \lt v_1, \dots, v_n \gt = \{\text{combinazione lineare di } v_1, \dots, v_n\}$ quindi $v$ è combinazione lineare di $v_1, \dots, v_n$
Dim.(a):
$Ip: v \in \lt v_1, \dots, v_n \gt$ sia $A_1 = \lt v_1, \dots, v_n \gt, A_2 = \lt v_1, \dots, v_n, v \gt$ devo mostrare $A_1 = A_2$.
$A_1 \subseteq A_2$ se $\omega = \lambda_1v_1 + \dots + \lambda_nv_n \in A_1$, $\omega = \lambda_1v_1 + \dots + \lambda_nv_n + 0v \in A_2$
Mostriamo $A_2 \subseteq A_1$:
$v \in A_1$ per ipotesi $v_1, \dots, v_n \in A_1$, allora $A_1$ è un sottosp. che contiene $v_1, \dots, v_n, v \Rightarrow \lt v_1, \dots, v_n \gt \subseteq A_1$ cioè $A_2 \subseteq A_1$ q.e.d.

def: $V$ sp.vett.
$v_1, \dots, v_n \in V$ si dicono linearmente dipendenti (o si dice anche che l'insieme $\{v_1, \dots, v_n\}$ è linearmente dipendente)
[vedi def. Dule]