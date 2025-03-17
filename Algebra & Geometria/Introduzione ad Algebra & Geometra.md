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
### Proprietà utili
Le seguenti proprietà sono valide in un qualunque spazio vettoriale $V$:
1) Il vettore nullo è unico e verrà indicato (generalmente) con $0v$.
2) Se $u \in V$, l'opposto di $u$ si indica con $-u$ ed è unico.
3) $\lambda 0_v = 0_v, \forall \lambda \in \mathbb{R}$.
4) $0u = 0_v, \forall u \in V$.
5) Se $\lambda u = 0_v$ allora si ha o $\lambda = 0$ oppure $u = 0_v$.
6) $\left(-\lambda\right)u = \lambda\left(-u\right) = -\lambda u$.
### Definizioni ed osservazioni utili
1) Uno spazio vettoriale $V$ contenente unicamente il vettore nullo $0_v$ si dice spazio vettoriale banale.
2) Supponendo che uno spazio vettoriale $V$ sia non-banale (ovvero che contenga almeno un elemento diverso dal vettore nullo), si può affermare che $V$ contenga tutti i vettori frutto del prodotto tra un vettore $v$ da esso contenuto e i vari $\lambda \in \mathbb{R}$.
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
## Sottospazio vettoriale
Sia $V$ uno spazio vettoriale. Un sottoinsieme $U$ di $V$ si dice sottospazio **vettoriale** di $V$ ($U \leq V$) se 
1) $U \not = \emptyset$;
2) $U$ è chiuso rispetto alla somma; 
3) $U$ è chiuso rispetto al prodotto per scalari.
Inoltre, sapendo che uno spazio vettoriale contiene sempre almeno due sottoinsiemi, ovvero quello banale e sé stesso, possiamo affermare che, a meno del caso in cui $U = \{0\}$, si ha che $U$ contiene infiniti elementi a sua volta, in quanto la seconda osservazione del capitolo [[Introduzione ad Algebra & Geometra# Definizioni ed osservazioni utili|Definizioni ed osservazioni utili]] è valida per ogni spazio vettoriale.
### Esempio di sottospazio vettoriale
Prendiamo $X = \{\left(x,y\right) \in \mathbb{R}^2 : y = 0\}$. $X \leq \mathbb{R}^2$? 
1) $X \not = \emptyset$, in quanto contiene tutte le infinite coppie di numeri reali $\left(x, 0\right)$;
2) $X$ è chiuso rispetto alla somma, in quanto prendendo due vettori $\left(x_1,0\right)$ e $\left(x_2, 0\right)$ e facendone la somma, si otterrebbe $\left(x_1 + x_2, 0\right)$, che rispetta la definizione dell'insieme $X$;
3) $X$ è chiuso rispetto al prodotto tra vettori e scalari, in quanto prendendo un vettore $\left(x_1, 0\right)$ e moltiplicandolo per $\lambda \in \mathbb{R}^2$, si otterrebbe $\left(\lambda x_1, 0\right)$, che fa parte di $X$.
<!-- BRUTTA da qui -->
### Sottospazi di $\mathbb{R}^2$
I sottospazi di $\mathbb{R}^2$ corrispondono a:
1) $\{0_v\}$;
2) rette moltiplicate per $\{0_v\}$;
3) $\mathbb{R}^2$ stesso.
<!-- BRUTTA DA QUI -->
## Combinazioni lineari
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

data $04/ 03/ 2025$:
V spaz. vett.
$$\lt v_1, v_2, v_3\gt = \{\lambda_1v_1 + \dots + \lambda_2v_2 \ | \ \lambda_1, \dots, \lambda_n \in \mathbb{R}\}$$
Esercizio
Sia $W = \{\left( x_1, x_2, x_3, x_4\right) \in \mathbb{R}^4 | \begin{cases}x_1 + x_2 + x_3 + 2x_4 = 0 \\ 2x_1 + 2x_2 + 3x_3 + 3x_4 = 0\end{cases}\}$ 
$W = \{ \text{soluz. di } Ax = 0 \}$ 
con $\left(A|\underline{b}\right) = \left(\begin{array}{cccc|c}1 & 1 & 1 & 2 & 0 \\ 2 & 2 & 3 & 3 & 0\end{array}\right)$
Dimostrare che $W$ è un sottospazio di $\mathbb{R}^4$ e trovarne un insieme di generatori. Determinare inoltre $v_1, v_2, v_3, v_4 \in \mathbb{R}^4$ t.c. $W = \lt v_1, v_2, v_3, v_4\gt$ Ax = 0 è un sist.lineare omogeneo quindi sicuramente $\underline{0} \in W$.
Vedremo in seguito che l'insieme delle sol. di un sist.lin. omogeneo è sempre un sottospazio. Adesso abbiamo due tecniche per mostrare che è un sottospazio
1) Usare la definizione (di sottospazio vettoriale)
2) La seguente: troviamo $W$.$$\left(\begin{array}{cccc|c}1 & 1 & 1 & 2 & 0 \\ 2 & 2 & 3 & 3 & 0\end{array}\right)$$ Usiamo Gauss (metti reference):$$\left(\begin{array}{cccc|c}1 & 1 & 1 & 2 & 0 \\ 0 & 0 & 1 & -1 & 0\end{array}\right)$$Infinite soluzioni che dipendono da $\stackrel{\text{n. incognite}}{4} - \stackrel{pivot}{2} = 2$ parametri $$\begin{cases}x_1 + x_2 + x_3 + 2x_4 = 0 \\ x_3 = x_4\end{cases}$$$x_4 = s, x_2 = t, x_1 = -x_2 - x_3 - 2x_4 = -x_2 -3x_4$ Che ci darà$$W = \{\left(-t -3s, t, s, s, s\right) | s, t \in \mathbb{R}\}$$Trucco per risolvere: separare i parametri!$$= \{\left(-t, t, 0, 0\right) + \left(-3s, 0, s, s\right) | s, t \in \mathbb{R}\}$$$$= \{t\left(1, -1, 0, 0\right) + s\left(-3, 0, 1, 1\right) | s, t \in \mathbb{R}\}$$Ho scoperto che $W$ è l'insieme delle combinazioni lineari di $v_1$ e $v_2$: $W$ è un sottospazio per 3.1.5 (controlla il suo libro del mega sium). Due generatori di $W$ sono $v_1 = \left(-1, 1, 0, 0\right)$ e $v_2 = \left(-3, 0, 1, 1\right)$.
vett.linearmente indipendenti:
v.sp.vett.: $v_1, \dots, v_2 \in V$ si dicono lin.indipendenti se $\lambda_1v_1 + \dots \lambda_nv_n = \underline{0} \Rightarrow \lambda_1 = \lambda_2 = \dots = \lambda_n$.
Prop. 3.2.4 (vedi il libro del cazzo, ridaje) V.sp.vett. 
sse $v_1, \dots, v_n$ allora uno di essi è combinazione lineare degli altri
dim. di $Q$: Siano $v_1, \dots, v_n$, esistono $\lambda_1, \dots, \lambda_n$ non tutti nulli tali che $lambda_1v_1 + \dots + \lambda_nv_n = \underline{0}$
Sia $\lambda_i \not = 0$
$\lambda_iv_i = -\lambda_1v_1 \dots -\lambda_{i-1}v_{i-1} - \lambda_{i+1}v_{i+1} - \dots - \lambda_nv_n$  moltiplico per $\frac{1}{\lambda_i}\in \mathbb{R}$ ottengo $v_i = \frac{1}{\lambda_i}(-\lambda_1v_1 \dots)$
$= v_i = -\frac{\lambda_1}{\lambda_i}v_1 - \frac{\lambda_2}{\lambda_i}v_2 \dots$ 
$\Rightarrow v_i$ è comb.lineare degli altri
Dim. $P$: sia $v_k = \lambda_1v_1 + \dots + \lambda_{k-1}v_{k-1} + \dots + \lambda_1v_n$
$\dots$ non tutti i lambda sono $\not = 0$ perché ho un $-1$ a pedice.
Oss. due vettori sono linearmente dipendenti sse uno di essi è comb.lineare dell'altro (quindi se è multiplo dell'altro dato che si tratta di due soli vettori).
L'insieme $\{\underline{0}\}$ è lin.dipendente o anche $v = 0$.
$1 \cdot \underline{0} = \underline{0} \rightarrow \not = 0$
Se ho $\{v_1, v_2, \dots, \underline{0}, \dots, v_k\}$ allora sono sempre dipendenti
L'insieme vuoto $\emptyset$ è un insieme linearmente indipendente.

Def. IMPORTANTISSIMA!!!!
Sia V. sott.vett.
Una base di $V$ è un insieme $B = \{v_1, \dots, v_n\}$ t.c.
1) $v_1, \dots, v_n$ generano $V$;
2) $v_1, \dots, v_n$ sono lin.indip.;
Esempi: $\{\left(1, 1\right), \left(1, 3\right)\}$ sono una base di $\mathbb{R}^2$ 
Invece $\{\left(1, 3\right), \left(1, 1\right), \left(2, 4\right)\}$ generano $\mathbb{R}^2$ ma non sono dipendenti: $\left(2, 4\right) = \left(1, 3\right) + \left(1, 1\right)$ uno è quindi comb.lin. degli altri

Basi canoniche:
$$\mathbb{R}^n = \{\left(1, 0, \dots, 0\right), \left(0, 1, \dots, 0\right), \dots, \left(0, 0, \dots, 1\right)\}$$
Uno spazio vettoriale V finitamente generato (che ha un numero finito di generatori) ha sempre una base $\dots$ 
MANCA 05/03/2025 ARRIVA FINO A BASI E DIMENSIONI DEL NOTION DI CARTA BINARIA
data: 06/03/2025
V.sp.vett. $\beta = \{v_1, \dots, v_2\}$ base ordinata di $V$
$v \in V$ allora esistono $\lambda_1, \lambda_2, \dots \in \mathbb{R}$ t.c. $v = \lambda_1v_1 + \lambda_2v_2 + \dots$ inoltre $\lambda_1, \dots$ sono unici
scriviamo $(v)_{\beta} = (\lambda_1, \dots)$ 
Esempio: $V = \mathbb{R}_2[x]$
sia $\beta = \{x^2 + 2x, -x^2 -x +1, x^2 + 5\}$ base di $V$
Sia $v = -x^2 + 3x +2$, troviamo le coordinate di $v$ rispetto a $\beta$.
$$-x^2 + 3x + 2 = \lambda_1(x^2+2x) + \lambda_2(-x^2-x+1) + \lambda_3(x^2+5)$$$$-x^2+3x+2=(\lambda_1 -\lambda_2+\lambda_3)x^2 + (2\lambda_1 -\lambda_2)x + (\lambda_2 + 5\lambda_3)$$
$$\begin{cases}\lambda_1 -\lambda_2+\lambda_3 = -1 \\ 2\lambda_1 -\lambda_2 = 3 \\ \lambda_2 + 5\lambda_3 = 2\end{cases}$$Passiamo alla matrice associata:
$$\begin{array}{ccc|c}{...}\end{array}$$
$$(v)_\beta = (\frac{25}{7},\frac{29}{7},-\frac{3}{7})$$Osservazione importante: sia $V$ sp.vett. di dimensione $N$ e sia $\beta = \{v_1, \dots, v_n\}$ base ordinata. La funzione $\mathbb{f}:V \rightarrow \mathbb{R}^n$ (quindi $v \rightarrow (v)_\beta = (\lambda_1, \dots, \lambda_n)$) è un isomorfismo di spazi vettoriali cioè è una biiezione che rispetta la struttura (le proprietà) di spazio vettoriale. Ad esempio: $\mathbb{f}(v + u)_\beta = \mathbb{f}(v) + \mathbb{f}(u)$.
Per capire se dei vettori generano sono lin.dip. etc. a volte conviene passare alle coordinate e lavorare in $\mathbb{R}^n$ per usare il seguente:
USO DELL'ALGORITMO DI GAUSS IN MODO DIRETTO
Per lavorare in $\mathbb{R}^n$:
Teorema 1: le operazioni elementari sulle righe di una matrice non cambiano il sottospazio generato dalle righe della matrice stessa.
Teorema 2: le righe non nulle di una matrice scala sono linearmente indipendenti.
Dimostrazione:
1) scambio di righe
2) $R_i \rightarrow \lambda R_i, \lambda \not = 0$
$$v = a_1v_1 + \dots + a_iv_i + \dots + a_jv_j = a_1v_1 + \dots + \frac{a_i}{\lambda}(\lambda v_i) + \dots + a_jv_j$$
3) $R_i \rightarrow R_i + cR_j$ basta dimostrare che $\lt R_i, R_j \gt = \lt R_i + cR_j, R_j \gt$.$$\lt R_i + cR_j, R_j \gt \subseteq \lt R_i, R_j \gt$$analogamente posso scrivere $R_i = (R_i + cR_j) - cR_j \in \lt R_i + cR_j, R_j \gt$. Anche $R_j \in \lt R_i + cR_j, R_j \gt$ e se uno spazio contiene due vettori contiene tutte le combinazioni lineari.
Esercizio: in $\mathbb{R}^4$ siano:
$v_1 = (1,1,3,0); v_2 = (2,2,5,1); v_3 = (1,1,4,-1)$ e sia $U = \lt v_1, v_2, v_3 \gt$.
Cerchiamo una base per $U$ costruiamo la matrice
$$\pmatrix{v_1 \\ v_2 \\ v_3}$$Quindi:
$$\pmatrix{1 & 1 & 3 & 0 \\ 2 & 2 & 5 & 1 \\ 1 & 1 & 4 & -1}$$che resa scala diventa:$$\pmatrix{1 & 1 & 3 & 0 \\ 0 & 0 & -1 & 1 \\ 0 & 0 & 0 & 0}$$Ora ricordando che $U = \lt v_1, v_2, v_3 \gt$ riscriviamo questa nozione dove ogni riga della matrice corrisponde ad un vettore $v$. Quindi $U = \lt v_1, v_2, \underline{0} \gt = \lt v_1, v_2 \gt$. Ho scoperto quindi che $v_1, v_2$ generano $U$ e so che sono linearmente indipendenti per il secondo teorema (Gauss in modo diretto). Quindi $U$ ha dimensione pari a $2$.
Infine, $v_1, v_2, v_3$ sono linearmente indipendenti? Se lo fossero avrei massimo una dimensione, ergo sono dipendenti.
L'algoritmo di Gauss in modo diretto permette di trovare una base di $\lt v_1, \dots, v_n \gt$
$$\pmatrix{v_1 \\ \dots \\ v_n} \rightarrow \pmatrix{\bar{v_1} \\ \dots \\ \bar{v_k} \\ \underline{0}}$$
le righe non nulle sono una base quindi troviamo dimensione $\lt v_1, \dots, v_k \gt$ sono indipendenti o no
- se $k \gt S, v_1, \dots, v_k$ sono dipendenti
- se $k = S, v_1, \dots, v_k$ sono indipendenti
per GEL (recupera GEL dalla lezione precedente)
infatti $v_1, \dots, v_k$ generano uno sp.vett. che ha dimensione $S = k$
Esercizio: in $\mathbb{R}^5$ siano $v_1 = (1, 3, -1, 1, 2); v_2 = (2, 6, -2, 4, 4); v_3 = (-1, -3, 2, 0, -1)$ sia $U = \lt v_1, v_2, v_3 \gt$ verificare che $\beta \{v_1, v_2, v_3\}$ è base di $U$ e completare $\beta$ ad una base di $\mathbb{R}^5$.
1 metodo: controlliamo che $v_1, v_2, v_3$ siano linearmente indipendenti, ovvero che la loro somma (moltiplicandoli per dei lambda) sia il vettore nullo. Troviamo i lambda e procediamo.
2 metodo: Gauss in modo diretto. Prendiamo i vettori e mettiamoli in riga nella matrice$$\pmatrix{1 & 3 & -1 & 1 & 2 \\ 2 & 6 & -2 & 4 & 4 \\ -1 & -3 & 2 & 0 & -1}$$che in scala viene:$$\pmatrix{1 & 3 & -1 & 1 & 2 \\ 0 & 0 & 1 & 1 & 1 \\ 0 & 0 & 0 & 2 & 0}$$$U = \lt v_1, v_2, v_3 \gt = \lt \bar{v_1}, \bar{v_2}, \bar{v_3} \gt$ quindi $\lt \bar{v_1}, \bar{v_2}, \bar{v_3} \gt$ è base di $U$, che ha dimensione pari a $3$.
Vogliamo ora completare per una base di dimensione $5$. Aggiungiamo quindi 2 vettori (5 vettori totali) in modo che i vettori ottenuti siano linearmente indipendenti. Inventiamoli in modo da avere una matrice scala ricordando che due vettori sono linearmente indipendenti quando sono non-nulli.
Per rendere scala la matrice aggiungendo 2 vettori, dobbiamo assicurarci che abbiano pivot nelle locazioni mancanti, ergo la seconda colonna e la quinta.
Dimensione 5, 5 vettori lin.ind., per GEL $\rightarrow$ sono una base di $\mathbb{R}^5$.
Osserviamo che $\{v_1, v_2, v_3, w_1, w_2\}$ è una base di $\mathbb{R}^5$.
Esercizio
In $\mathbb{R}^4[x]$ siano $$\begin{aligned}P_1(x) = x^3 + x^2 + 3x \\ P_2(x) = 2x^3 + 2x^2 + 5x + 1 \\ P_3(x) = x^3 + x^2 + 4x - 1\end{aligned}$$
Sia $U = \lt P_1(x), P_2(x), P_3(x) \gt$ trovare una base di $U$. Passiamo alle coordinate rispetto alla base canonica $\mathbb{C} = \{x^3, x^2, x, 1\}$
e lavoriamo in $\mathbb{R}^4$.

Argomenti chiave:
- uso di gauss in modo diretto per lavorare in $R^n$;
- passare alle coordinate (rispetto ad una base qualsiasi) permette di lavorare in $R^n$;
Teorema 1: l'alg. di Gauss non cambia il sottospazio generate dalle righe di una matrice.
Teorema 2: le righe non nulle di una matrice scala sono linearmente indipendenti.

Esempio: in $R_3[x]$ siano:
$$\begin{aligned}v_1 = x^3 + x^2 + 3x \\ v_2 = 2x^3 + 2x^2 + 5x + 1 \\ v_3 = x^3 + x^2 + 4x - 1\end{aligned}$$Sia $V = \lt v_1, v_2, v_3 \gt$, trovare una base di $V$.
Passiamo anzitutto alle coordinate rispetto alla base canonica di $R_3[x]$.$$C = \{x^3, x^2, x, 1\}$$
Troviamo le coordinate dei vettori rispetto la base canonica: $$\begin{array}.\left(v_1\right)_c = \left(1, 1, 3, 0\right) \\ \left(v_2\right)_c = \left(2,2,5,1\right) \\ \left(v_3\right)_c = \left(1,1,4,-1\right)\end{array}$$Lavoriamo in $R^n$ e costruiamo la matrice che ha per righe $\left(v_1\right)_c, \left(v_2\right)_c, \left(v_3\right)_c$:$$M_{3,4} = \pmatrix{1 & 1 & 3 & 0 \\ 2 & 2 & 5 & 1 \\ 1 & 1 & 4 & -1}$$rendiamola ora scala:$$M_{3,4} = \pmatrix{1 & 1 & 3 & 0 \\ 0 & 0 & -1 & 1 \\ 0 & 0 & 0 & 0}$$Ora scriviamo la combinazione lineare dei vettori associati alle righe della matrice trovata:$$\bar{V} = \lt \left(v_1\right)_c, \left(v_2\right)_c, \left(v_3\right)_c \gt = \lt \left(1,1,3,0\right), \left(0,0,-1,1\right)\gt \text{, in quanto } \left(v_3\right)_c \text{ è una riga nulla}$$Ora per il teorema 2 $\left(v_1\right)_c$ e $\left(v_2\right)_c$ sono linearmente indipendenti, quindi $\{\left(1,1,3,0\right), \left(0,0,-1,1\right)\}$ è base di $\bar{V}$.

Esercizio: stabilire per quali valori di $k$ $v \in \lt v_1, v_2, v_3 \gt \subseteq M_2(\mathbb{R})$ dove:$$\begin{array}.v_1 = \pmatrix{1 & 2 \\ k & -3} \\ v_2 = \pmatrix{1 & k \\ 1 & -3} \\ v_3 = \pmatrix{2 & 4 \\ 3 & -6} \\ v = \pmatrix{1 & k \\ 2 & -3} \end{array}$$$M_2(\mathbb{R}) = M_{2,2} = (\mathbb{R})$
Ci sono due modi per risolvere questo problema:
- $v \in \lt v_1, v_2, v_3 \gt \Leftrightarrow \text{ esistono } \lambda_1, \lambda_2, \lambda_3 \in \mathbb{R} : v = \lambda_1v_1 + \lambda_2v_2 + \lambda_3v_3$ cioè:$$\begin{array}.\pmatrix{1 & k \\ 2 & -3} = \lambda_1\pmatrix{1 & 2 \\ k & -3} + \lambda_2\pmatrix{1 & k \\ 1 & -3} + \lambda_3\pmatrix{2 & 4 \\ 3 & -6} \\ = \pmatrix{\lambda_1 + \lambda_2 + 2\lambda_3 & 2\lambda_1 + k\lambda_2 + 4\lambda_3 \\ k\lambda_1 + \lambda_2 + 3\lambda_3 & -3\lambda_1 -3\lambda_2 -6\lambda_3} \\ = \begin{cases}\lambda_1 + \lambda_2 + 2\lambda_3 = 1 \\ 2\lambda_1 + k\lambda_2 + 4\lambda_3 = k \\ CONTINUA\end{cases} \end{array}$$
- proviamo ad usare Gauss in modo diretto.$M_{2,2}(\mathbb{R})$ ha dimensione 4, quindi una delle sue basi potrebbe essere $C = \{\pmatrix{1 & 0 \\ 0 & 0}, \pmatrix{0 & 1 \\ 0 & 0}, \pmatrix{0 & 0 \\ 1 & 0}, \pmatrix{0 & 0 \\ 0 & 1}\}$. Prendiamo ora $v_1  = \pmatrix{1 & 2 \\ k & -3}$ (vedi premessa dell'esercizio) e scriviamo $\left(v_1\right)_c = \left(1, 2,  k,  -3\right)$. Quindi:$$v_1 = 1\pmatrix{1 & 0 \\ 0 & 0} + 2\pmatrix{0 & 1 \\ 0 & 0} + k\pmatrix{0 & 0 \\ 1 & 0} -3\pmatrix{0 & 0 \\ 0 & 1}$$Prendiamo ora $v_2$ e $v_3$ e facciamo la medesima cosa: $\left(v_2\right) = \pmatrix{1,k,1,-3}, \left(v_3\right)_c = \pmatrix{2,4,3,-6}$. Ora scriviamo $\left(v\right)_c = \pmatrix{1 & k & 2 & -3}$. Costruiamo ora la matrice che ha per righe $\left(v_1\right)_c \dots \left(v\right)_c$:$$\pmatrix{1 & 2 & k & -3 \\ 1 & k & 1 & -3 \\ 2 & 4 & 3 & -6 \\ 1 & k & 2 & -3}$$che per Gauss risulta:$$\pmatrix{1 & 2 & k & -3 \\ 0 & k-2 & 1-k & 0 \\ 0 & 0 & 3-2k & 0 \\ 0 & 0 & 1 & 0}$$quindi NON una matrice scala. Per rispondere alla domanda conviene quindi trovare una dimensione $\lt v_1, v_2, v_3\gt$ per poi aggiungervi $v$. Se $dim \lt v_1, v_2, v_3 \gt = dim \lt v_1, v_2, v_3, v \gt \Rightarrow \lt v_1, v_2, v_3, v \gt = \lt v_1, v_2, v_3 \gt \Rightarrow v \in \lt v_1, v_2, v_3 \gt$. Se invece $dim\lt v_1, v_2, v_3, v \gt \not = dim\lt v_1, v_2, v_3 \gt \Rightarrow v \not \in \lt v_1, v_2, v_3 \gt$. Facendo Gauss in modo diretto devo stare attento a non scambiare l'ultima riga con una delle precedenti (in questo caso).
  Se $k -2 \not = 0$ e $3 - 2k \not = 0$ si ha $dim=3$. Poi sostituendo per $k$ diversi valori possiamo trovare come varia la $dim$ del sottospazio generato dai vettori $v_1, v_2, v_3$. Ad esempio, per $k = 2$ avremmo $dim = 2$, etc $\dots$

Applicazione lineari:
siano $V, W$ sp.vett.
$F$ $V \rightarrow W$ si dice lineare se
1) $F(v_1 + v_2) = F(v_1) + F(v_2)$ per ogni $v_1, v_2 \in V$.
2) $F(\lambda v) = \lambda F(v) \forall \lambda \in \mathbb{R} \forall v \in V$
Conseguenze di 1 e 2:$$F(\lambda_1v_1 + \dots + \lambda_nv_n) \stackrel{1}{=}F(\lambda_1v_1) + \dots + (\lambda_nv_n)$$
3) $V = \mathbb{R}^n$ $W = \mathbb{R}^n$ $A \in M_{m,n}(\mathbb{R})$ allora $L_A: \mathbb{R}^n \rightarrow \mathbb{R}^m$
ovvero $(x_1, \dots, x_n) \rightarrow A \cdot \pmatrix{x_1 \\ \dots \\ x_n}$
Esempio: $A = \pmatrix{3 & 1 & -2 \\ 0 & 4 & -3}$ ;$L_A \quad \mathbb{R}^3 \rightarrow \mathbb{R}^2 \quad \left(x_1, x_2, x_3\right) \rightarrow \pmatrix{3 & 1 & -2 \\ 0 & 4 & -3} \cdot \pmatrix{x_1 \\ x_2 \\ x_3}$  
allora $L_A(x_1, x_2, x_3) = (3x_1 + x_2 - 2x_3, 4x_2 - 3x_3)$ 
$v_1 = \underline{x}$; $v_2 = \underline{y}$.
$L_A(v_1 + v_2) = A(\underline{x}  + \underline{y}) = A\underline{X} + A\underline{y}$ (per la distributività del prodotto righe per colonne)
$L_A(v_1) + L_A(v_2)$
$L_A(1,-1,2) = (3 -1 -4, -4 -6) = (-2, -10)$ da cui trovo:
$$\begin{array}.L_A(c_1) = L_A(1, 0, 0) = (3,0) \\ L_A(c_2) = L_A(0, 1, 0) = (1,4) \\ L_A(c_3) = L_A(0,0,1) = (-2, -3)\end{array}$$
Vale sempre quindi che $L_A$(e, i) è sempre la $i$ esima colonna di $A$.

data: $12/03/2025$
$V, W$ sp.vett. $F: V \rightarrow W$
si dice applicazione lineare se
1) $F(v + u) = F(u) + f(v) \forall u,v \in V$;
2) $F(\lambda v) = \lambda F(v) \forall v \in V \forall \lambda \in \mathbb{R}$.
Segue che se $F$ è lineare
$F(\lambda_1v_1 + \lambda_2v_2 + \dots + \lambda_nv_n) = \lambda_1F(v_1) + \dots + \lambda_nF(v_n)$ 
Proposizione:
$F, V \rightarrow W$ lineare
$F(\underline{0}v) = \underline{0}w$
Dimostrazione: $F(\underline{0}v) = F(0 \cdot \underline{0}v) \stackrel{2}{=} 0F(\underline{0}v)=0_w$
$f$ si dice suriettiva $\forall b \in B \exists a \in A: f(a) = b$.
$Im(f) = \{f(a), a \in A\}$ (Im = immagine di A)
$f$ si dice iniettiva se $a_1 \not = a_2 \Rightarrow f(a_1) \not = f(a_2)$ elementi distinti hanno immagini distinte o equivalentemente $f(a_1) = f(a_2) \Rightarrow a_1 = a_2$.
Definizione: $V, W$ sp. vett. $F, V \rightarrow W$ lineare $KerF = \{v \in V : f(v) = \underline{0}_w\}$, dove $Ker$ sta per kernel
$Im(f) = \{w \in W : w = f(v) \text{ per qualche } v \in V\} = \{f(v), v \in V\}$.
Prop. a: $F$ è su $Im(f) = W$ niente da dimostrare, segue dalla def di funzione suriettiva.
Prop.b: $F$ è iniettiva sse $KerF = \{0\}$
Dimostriamo $b$
Osserviamo che $o_v \in V \in KerF$ perché $F(o_v) = O_w$
Supponiamo $F$ iniettiva e sia $v \in KerF \Rightarrow F(v) = 0_w$ ma anche $F(0_v) = 0_w \Rightarrow v = 0_w$ F è in $KerF = \{\underline{0}\}$.
Viceversa, supponiamo $KerF = \{\underline{0}\}$ e mostriamo che $F$ è iniettiva. Siano $v, u \in V : F(v) = F(u)$ mostriamo che $u = v$.
Dal fatto che $F(v) = F(u) \Rightarrow F(v)-F(u) = 0_w$ ed $F$ lin., allora $F(v-u)=0_w \Rightarrow v - u \in KerF \Rightarrow v - u = 0_v \Rightarrow v = u$
Prop. $F, V \rightarrow W$ lin.
3) $KerF$ è sottospazio di $V$
4) $Im(F) " " di $W$
Dim. mostriamo che $KerF \leq V$, allora $KerF =\{u \in V : F(v) = 0_w\}, 0_v \in KerF \text{ perché } F(0_v) = O_w$ 
Siano $u, v \in KerF$ e mostriamo che $u + v \in KerF$
$u_1v \in KerF \Rightarrow F(u) = 0_w$ e $F(v) = 0_w$
$F(u + v) = F(u) + F(v) = 0_w + 0_w = 0_w \Rightarrow u + v \in KerF$
-----------------
Proposizione 5.1.7:
Sia $V$ uno sp.vett. e sia $B = \{v_1, \dots, v_n\}$ una base di $V$. Sia $W$ un altro sp.vett. e siano $w_1, \dots, w_n$  dei vettori di $W$. Allora esiste un'unica applicazione lineare $F, V \rightarrow W: F(v_1) = w_1; F(v_2) = w_2; \dots; F(v_i) = w_i$.
Questo è utile se devo costruire applicazioni lineari in quanto basta vi sia una base per averne sicuramente una.

data: $13/03/2025$
esercizi con Luca!
$v = \pmatrix{2 \\ 1 \\ 0 \\ -2}$ e base $B = \{\pmatrix{1 \\ 0 \\ 0 \\ -1}, \pmatrix{1 \\ 0 \\ 2 \\ 1}, \pmatrix{1 \\ 1 \\ 0 \\ -1}, \pmatrix{0 \\ 0 \\ -2 \\ 1}\}$.
Sappiamo che una base genera uno spazio vettoriale (in questo caso $\mathbb{R}^4$). Cerchiamo $x_1, x_2, x_3, x_4$ per ottenere $v$ partendo dai vettori della Base $B$ (ovvero le coordinate di $v$ rispetto alla Base $B$). Scriviamo:
$$x_1 \cdot \pmatrix{1 \\ 0 \\ 0 \\ -1} + x_2 \cdot \pmatrix{1 \\ 0 \\ 2 \\ 1} + x_3 \cdot \pmatrix{1 \\ 1 \\ 0 \\ -1} + x_4 \cdot \pmatrix{0 \\ 0 \\ -2 \\ 1} = \pmatrix{2 \\ 1 \\ 0 \\ -2}$$Che è come scrivere$$\pmatrix{1 & 1 & 1 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 2 & 0 & -2 \\ -1 & 1 & -1 & 1} \pmatrix{x_1 \\ x_2 \\ x_3 \\ x_4} = \pmatrix{2 \\ 1 \\ 0 \\ -2}$$Ora rendiamo la prima matrice scala, scambiando la seconda e la terza riga e poi calcolando $R_4 - R_1$:$$
\begin{array}{cccc|c}
1 & 1 & 1 & 0 & 2 \\ 
0 & 2 & 0 & -2 & 1 \\ 
0 & 0 & 1 & 0 & 0 \\ 
0 & 2 & 0 & 1 & -2 
\end{array} 
\rightarrow 
\begin{array}{cccc|c}
1 & 1 & 1 & 0 & 2 \\ 
0 & 2 & 0 & -2 & 0 \\ 
0 & 0 & 1 & 4 & 1 \\ 
0 & 0 & 0 & 3 & 0 
\end{array}
$$
Secondo es.
In $\mathbb{R}^3$, abbiamo Base $B = \{1,x,x^2,x^3\}$ e $v = x^2 -2x +3$. Per generare $v$ prendo $3$ volte $1$, $-2$ volte $x$, etc$\dots$ senza sistema in quanto ovvio.
Se invece la base fosse stata $B = \{2, x, 1+x^2, x^3\}$:
- prendo 1 volta il $2$;
- rendo 1 volta $1 + x^2$;
- ignoro $x^3$;
- prendo $-2$ volte $x$.
Oppure, con una risoluzione più dettagliata: $\lambda_1(2) + \lambda_2(x) \dots \lambda_3(x^3)$ e troviamo i lambda.

Esercizio 2F:
$v = \pmatrix{-1 & 5 \\ 5 & 4}$ nello spazio $S_2(\mathbb{R}) = \{\pmatrix{a & b \\ c & d} : a,b,c \in \mathbb{R}\}$ quindi in uno spazio di matrici 2,2 simmetriche.
La base di uno spazio con matrici 2,2 potrebbe essere (ricordando quelle canoniche) $B = \{\pmatrix{1 & 0 \\ 0 & 0}, \pmatrix{0 & 1 \\ 1 & 0}, \pmatrix{0 & 0 \\ 0 & 1}\}$. Quindi come posso costruire $v$?
Prendendo -1 volte $b_1$, 5 volte $b_2$ e 4 volte $b_3$.

Esercizio 3:
In $\mathbb{R}^2[x]$ Prendiamo $w = \{p(x) : p(1) = 0\}$ verifica che $w$ sia sottospazio vettoriale.
Se prendo $p_1$ e $p_2$ entrambi $\in W \stackrel{?}{\Rightarrow} p_1 + p_2 \in W$
Se $p \in W \stackrel{?}{\Rightarrow} \lambda p \in W$
prendo $p(1) = 0 \Rightarrow \lambda p(1) = 0$.
Boh suca non ho capito gli esempi ZIOPERA
Determinare un insieme di generatori di $W$.
