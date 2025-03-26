1. [Equazioni Lineari](#Equazioni%20Lineari)
	1. [Nota Bene](#Nota%20Bene)
2. [Definizione di campo](#Definizione%20di%20campo)
	2. [Esempi comuni](#Esempi%20comuni)
3. [Sistemi Lineari](#Sistemi%20Lineari)
4. [Le matrici](#Le%20matrici)
	3. [Uguaglianza tra matrici](#Uguaglianza%20tra%20matrici)
	4. [Somma tra matrici](#Somma%20tra%20matrici)
	5. [Prodotto di matrici](#Prodotto%20di%20matrici)
		1. [Esempio di prodotto tra matrici](#Esempio%20di%20prodotto%20tra%20matrici)
		2. [Nota bene](#Nota%20bene)
	6. [Definizione di Matrice Trasposta](#Definizione%20di%20Matrice%20Trasposta)
5. [Rappresentare un sistema lineare con una matrice](#Rappresentare%20un%20sistema%20lineare%20con%20una%20matrice)
	7. [Matrici scala](#Matrici%20scala)
	8. [Rendere scala una matrice (algoritmo di Gauss)](#Rendere%20scala%20una%20matrice%20(algoritmo%20di%20Gauss))
		3. [Esempio di applicazione dell'algoritmo di Gauss](#Esempio%20di%20applicazione%20dell'algoritmo%20di%20Gauss)
	9. [Rango righe](#Rango%20righe)
6. [Risolvere un sistema lineare con matrice scala associata](#Risolvere%20un%20sistema%20lineare%20con%20matrice%20scala%20associata)
7. [Definizione di spazi vettoriali](#Definizione%20di%20spazi%20vettoriali)
	10. [Proprietà utili](#Propriet%C3%A0%20utili)
	11. [Definizioni ed osservazioni utili](#Definizioni%20ed%20osservazioni%20utili)
	12. [Esempio di un insieme che non è uno spazio vettoriale](#Esempio%20di%20un%20insieme%20che%20non%20%C3%A8%20uno%20spazio%20vettoriale)
	13. [Differenza tra Spazio e Campo vettoriale](#Differenza%20tra%20Spazio%20e%20Campo%20vettoriale)
8. [Sottospazio vettoriale](#Sottospazio%20vettoriale)
	14. [Esempio di sottospazio vettoriale](#Esempio%20di%20sottospazio%20vettoriale)
	15. [Sottospazi di $\mathbb{R}^2$](#Sottospazi%20di%20$%5Cmathbb%7BR%7D%5E2$)
9. [Combinazioni lineari](#Combinazioni%20lineari)
	16. [Definizione di Combinazione lineare](#Definizione%20di%20Combinazione%20lineare)
		4. [Esempio di combinazione lineare](#Esempio%20di%20combinazione%20lineare)
		5. [Esempio significativo](#Esempio%20significativo)
			1. [Vettori superflui](#Vettori%20superflui)
	17. [Indipendenza lineare](#Indipendenza%20lineare)
		6. [Definizione](#Definizione)
		7. [Esempio di vettori linearmente indipendenti](#Esempio%20di%20vettori%20linearmente%20indipendenti)
		8. [Esempio di vettori linearmente dipendenti](#Esempio%20di%20vettori%20linearmente%20dipendenti)
		9. [Esempio più complesso](#Esempio%20pi%C3%B9%20complesso)
		10. [Esercizi](#Esercizi)
10. [Concetto di base](#Concetto%20di%20base)
	18. [Esempio di base](#Esempio%20di%20base)
	19. [Definizione - spazio finitamente generato](#Definizione%20-%20spazio%20finitamente%20generato)
	20. [Definizione - insieme massimale e minimale](#Definizione%20-%20insieme%20massimale%20e%20minimale)
	21. [Teorema utile](#Teorema%20utile)
	22. [Esempio di ricerca della base di un insieme (non rigorosa)](#Esempio%20di%20ricerca%20della%20base%20di%20un%20insieme%20(non%20rigorosa))
11. [Concetto di Dimensione](#Concetto%20di%20Dimensione)
	23. [Teorema del completamento](#Teorema%20del%20completamento)
	24. [Definizione - dimensione finita](#Definizione%20-%20dimensione%20finita)
12. [Basi canoniche](#Basi%20canoniche)
	25. [Base canonica di $\mathbb{R}^n$](#Base%20canonica%20di%20$%5Cmathbb%7BR%7D%5En$)
		11. [Esempio di base canonica di $\mathbb{R}^n$ per $n = 4$](#Esempio%20di%20base%20canonica%20di%20$%5Cmathbb%7BR%7D%5En$%20per%20$n%20=%204$)
	26. [Base canonica di $\mathbb{R}_n[x]$](#Base%20canonica%20di%20$%5Cmathbb%7BR%7D_n%5Bx%5D$)
	27. [Base canonica di $M_{m, n}(\mathbb{R})$](#Base%20canonica%20di%20$M_%7Bm,%20n%7D(%5Cmathbb%7BR%7D)$)
		12. [Esempio di base canonica di $M_{m, n}(\mathbb{R})$ con $m = 2$ ed $n = 3$](#Esempio%20di%20base%20canonica%20di%20$M_%7Bm,%20n%7D(%5Cmathbb%7BR%7D)$%20con%20$m%20=%202$%20ed%20$n%20=%203$)
	28. [Osservazione importante sulla dimensione degli sottospazi vettoriali](#Osservazione%20importante%20sulla%20dimensione%20degli%20sottospazi%20vettoriali)
	29. [Componenti di un elemento di uno spazio vettoriale](#Componenti%20di%20un%20elemento%20di%20uno%20spazio%20vettoriale)
		13. [Esempio di identificazione delle componenti di uno spazio vettoriale $V$ rispetto ad una base $\beta$](#Esempio%20di%20identificazione%20delle%20componenti%20di%20uno%20spazio%20vettoriale%20$V$%20rispetto%20ad%20una%20base%20$%5Cbeta$)
13. [Applicazione diretta dell'algoritmo di Gauss (senza passare per un sistema lineare associato)](#Applicazione%20diretta%20dell'algoritmo%20di%20Gauss%20(senza%20passare%20per%20un%20sistema%20lineare%20associato))
14. [brutta](#brutta)

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
#### Esempio di prodotto tra matrici
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
#### Esempio di applicazione dell'algoritmo di Gauss
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
4) Esiste l'elemento opposto della somma? Considerando $(a, b)$ dovrei trovare una coppia $(c, d)$ che sommata alla prima restituisca l'elemento neutro $\underline{0}$: dovrei arrivare ad avere:$$(a, b) + (c, d) = (1, 0)$$ovvero dovrei trovare una coppia che verifichi le equazioni seguenti:$$\begin{cases}a \cdot c = 1 \\ b + d = 0\end{cases}$$da cui semplificando ottengo:$$\begin{cases}c = \frac{1}{a}, a \not = 0 \\ d = -b\end{cases}$$questo elemento opposto dovrebbe valere per tutti i membri di $\mathbb{R}^2$, ma nel caso in cui $a$ sia pari a $0$ il sistema salta. L'insieme non presenta quindi un candidato valido per la [[Introduzione ad Algebra & Geometria#^5455f8|quarta proprietà della somma]].
### Differenza tra Spazio e Campo vettoriale
Nello spazio vettoriale si ha un insieme di vettori che possono essere aggiunti tra loro e moltiplicati per scalari (numeri).
Un campo vettoriale è invece una *funzione* che associa un vettore ad ogni punto di un certo spazio.
## Sottospazio vettoriale
Sia $V$ uno spazio vettoriale. Un sottoinsieme $U$ di $V$ si dice sottospazio **vettoriale** di $V$ ($U \leq V$) se 
1) $U \not = \emptyset$;
2) $U$ è chiuso rispetto alla somma; 
3) $U$ è chiuso rispetto al prodotto per scalari.
Inoltre, sapendo che uno spazio vettoriale contiene sempre almeno due sottoinsiemi, ovvero quello banale e sé stesso, possiamo affermare che, a meno del caso in cui $U = \{0\}$, si ha che $U$ contiene infiniti elementi a sua volta, in quanto la seconda osservazione del capitolo [[Introduzione ad Algebra & Geometria# Definizioni ed osservazioni utili|Definizioni ed osservazioni utili]] è valida per ogni spazio vettoriale.
### Esempio di sottospazio vettoriale
Prendiamo $X = \{\left(x,y\right) \in \mathbb{R}^2 : y = 0\}$. $X \leq \mathbb{R}^2$? 
1) $X \not = \emptyset$, in quanto contiene tutte le infinite coppie di numeri reali $\left(x, 0\right)$;
2) $X$ è chiuso rispetto alla somma, in quanto prendendo due vettori $\left(x_1,0\right)$ e $\left(x_2, 0\right)$ e facendone la somma, si otterrebbe $\left(x_1 + x_2, 0\right)$, che rispetta la definizione dell'insieme $X$;
3) $X$ è chiuso rispetto al prodotto tra vettori e scalari, in quanto prendendo un vettore $\left(x_1, 0\right)$ e moltiplicandolo per $\lambda \in \mathbb{R}^2$, si otterrebbe $\left(\lambda x_1, 0\right)$, che fa parte di $X$.
### Sottospazi di $\mathbb{R}^2$
I sottospazi di $\mathbb{R}^2$ corrispondono a:
1) $\{0_v\}$;
2) rette moltiplicate per $\{0_v\}$;
3) $\mathbb{R}^2$ stesso.
## Combinazioni lineari
Sia $W$ un sottospazio vettoriale di $\mathbb{R}^2$ definito nella maniera seguente: $W = \{\left(x, ax\right): x \in \mathbb{R}\}$, semplificabile come $W = \{x\left(1, a\right) : x \in \mathbb{R}\}$. Questo sottospazio corrisponde quindi all'insieme dei multipli del vettore $\left(1, a\right)$. Diciamo allora che tale vettore *genera* il sottospazio $W$.
### Definizione di Combinazione lineare
Siano $V$ uno spazio vettoriale, $v_1, \dots, v_n$ vettori appartenenti a tale insieme e $\lambda_1, \dots, \lambda_n$ degli scalari appartenenti ad $\mathbb{R}$. Allora il vettore $w = \lambda_1v_1 + \dots + \lambda_nv_n$ si dice la combinazione lineare di $v_1, \dots, v_n$. Questo significa che il vettore $w$ (o $span\left(v_1, \dots, v_n\right)$) è il sottoinsieme di $\mathbb{R}$ più piccolo contenente tutti i vettori usati per costruirlo.
Una combinazione lineare tra i vettori $v_1, \dots, v_n$ si può inoltre indicare come $\lt v_1, \dots, v_n \gt = \lt \lambda_1v_1 + \dots + \lambda_nv_n : \lambda_1, \dots, \lambda_n \in \mathbb{R}\gt$. Ne consegue che possiamo riscrivere la seconda osservazione del capitolo [[Introduzione ad Algebra & Geometria# Definizioni ed osservazioni utili|Definizioni ed osservazioni utili]] come una combinazione lineare della seguente forma: $\lt v \gt = \lt \lambda v : \lambda \in \mathbb{R}\gt$,ovvero come l'insieme di tutti i multipli di $v$.
#### Esempio di combinazione lineare
Vogliamo determinare il sottospazio di $\mathbb{R}^2$ generato dai vettori $\left(1,1\right), \left(2,k\right)$ al variare di $k$. Ovvero:$$\lt \left(1,1\right),\left(2,k\right) \gt = \lt \lambda_1\left(1,1\right) + \lambda_2\left(2,k\right) : \lambda_1,\lambda_2 \in \mathbb{R} \gt$$Ora, trattandosi di vettori in $\mathbb{R}^2$, possiamo rappresentarli nel piano cartesiano. Poniamo $k = 1$, disegniamo i due vettori $v_1$ e $v_2$ e colleghiamoli all'origine:
![[Pasted image 20250318092827.png]]è facile notare come i due vettori non siano sulla stessa retta passante per l'origine: questo significa che (in questo piano) l'insieme più piccolo che possa contenere entrambi i vettori sarà tutto l'insieme stesso. In questo caso si afferma quindi che $v_1$ e $v_2$ generano $\mathbb{R}^2$.
Tuttavia, ponendo $k = 2$, otterremmo:![[Pasted image 20250318093335.png]]In questo caso i due vettori sono allineati sulla stessa retta passante per l'origine: questa retta è quindi il sottospazio più piccolo di $\mathbb{R}^2$ contenente entrambi questi vettori.
Algebricamente questo significa che, avendo un vettore $\left(a,b\right) \in \mathbb{R}^2$, ci stiamo chiedendo quando tale vettore appartiene al sottospazio generato dalla combinazione lineare dei due vettori presentati all'inizio. Ovvero:$$\left(\lambda_1 + 2\lambda_2, \lambda_1 + k\lambda_2\right) = \left(a, b\right)$$[[Primo esempio combinazioni lineari|Risolvendo il sistema lineare]] associato a tale equazione notiamo come questo avrà soluzione sse $a = b$, ovvero se $\left(a, a\right) \in \lt \left(1,1\right), \left(2,2\right) \gt$. La combinazione lineare dei vettori presentati inizialmente è quindi il sottoinsieme contenente tutti i vettori con prima coordinata uguale alla seconda (vedendo un vettore come $P(x,y)$ le $x$ sono uguali alle $y$), cioè $\lt \left(1,1\right), \left(2,2\right) \gt = \{\left(a,a\right):a \in \mathbb{R}\}$.
#### Esempio significativo
Vogliamo determinare il sottospazio di $\mathbb{R}^2$ generato dai vettori $\left(1,1\right), \left(2,k\right), \left(-1, -1\right)$ al variare di $k$. Ovvero:$$\lt (1,1), (2,k), (-1, -1)\gt = \lt \lambda_1(1,1)  \lambda_2(2, k) + \lambda_3(-1, -1) : \lambda_1, \lambda_2, \lambda_3 \in \mathbb{R}\gt$$Vogliamo mostrare che per ogni vettore $\left(a,b\right)$ fissato possiamo sempre scegliere $\lambda_1, \lambda_2, \lambda_3$ tali che:$$\left(\lambda_1 + 2\lambda_2 -\lambda_3, \lambda_1 + k\lambda_2 -\lambda_3\right) = \left(a,b\right)$$Risolvendo con Gauss si ricava che il sistema ottenuto ha soluzioni tutti i $k \not = 2$, mentre per $k = 2$ otteniamo:$$\left(\lambda_1 + 2\lambda_2 -\lambda_3, \lambda_1 + 2\lambda_2 -\lambda_3\right) = \left(a,b\right)$$Ovvero $a = b$. Dunque purché il sistema ammetta soluzioni deve valere $a = b$ ed il sottospazio di $\mathbb{R}^2$più piccolo contenente i vettori dati è nuovamente la retta di equazioni $y = x$, ovvero quella passante per l'origine e per i primi due vettori dati.
##### Vettori superflui
Avendo uno spazio vettoriale $V$, dei vettori $v_1, \dots, v_n \in V$ e sia $w$ la combinazione lineare di tali vettori, ovvero sia $w = \lt \lambda_1v_1 + \dots + \lambda_nv_n \gt$. Allora:$$\lt v_1, \dots, v_n \gt = \lt v_1, \dots, v_n, w\gt$$In questa definizione, $w$ si dice **vettore superfluo** in quanto eliminandoli dall'insieme dei generatori il sottospazio generato non cambia. Ciò accade ad esempi quando si ha un vettore multiplo di un altro, somma di altri due, oppure (come nell'esempio precedente) posto sulla stessa retta di un altro. Difatti $\left(1, 1\right)$ è posto sulla stessa retta ($y = x$) di $\left(-1, -1\right)$ e farà quindi sempre parte del sottospazio generato da questo.
### Indipendenza lineare
Se un insieme di generatori di un sottospazio è un insieme di vettori linearmente indipendenti, allora si può dire con certezza che usare questo insieme di vettori come generatore del sottospazio è il metodo più efficiente per descrivere il sottospazio stesso, ovvero per costruirlo.
#### Definizione
Sia $V$ uno spazio vettoriale. I vettori $v_1, \dots, v_n$ si dicono linearmente indipendenti se per ogni combinazione lineare $\lambda_1 v_1 + \dots + \lambda_n v_n = 0$ si hanno $\lambda_1 = \dots = \lambda_n = 0$. Questo significa che l'unica combinazione lineare dei vettori $v_1, \dots, v_n$ <u>uguale al vettore nullo</u> è quella con tutti gli scalari nulli.
#### Esempio di vettori linearmente indipendenti
L'insieme dei vettori $\{\left(1,0\right), \left(0,1\right)\}$ in $\mathbb{R}^2$ è un insieme di vettori linearmente indipendenti, in quanto la loro unica combinazione lineare uguale al vettore nullo è quella con gli scalari tutti nulli:$$\lambda_1\left(1, 0\right) + \lambda_2\left(0,1\right) = 0 \text{ solo se }\lambda_1 = \lambda_2 = 0$$
#### Esempio di vettori linearmente dipendenti
L'insieme dei vettori $\{\left(1,0\right), \left(0, 1)\right), \left(1, 1\right)\}$ in $\mathbb{R}^2$ è un insieme di vettori linearmente dipendenti, in quanto esiste una loro combinazione lineare uguale al vettore nullo dove non tutti gli scalari sono nulli:$$\begin{array}.\lambda_1\left(1, 0\right) + \lambda_2\left(0,1\right) + \lambda_3 \left(1,1\right) = 0 \\ \text{ per } \lambda_1 = \lambda_2 = 1 \text{ e } \lambda_3 = -1 \\ 1 \cdot \left(1,0\right) + 1 \cdot \left(0, 1\right) -1 \cdot \left(1,1\right) = 0\end{array}$$
#### Esempio più complesso
Il seguente insieme di vettori in $\mathbb{R}^2[x]: \{x + 1, x^2 - 1, 2, x - 1\}$ è linearmente indipendente? Scriviamo la combinazione lineare pari al vettore nullo dei vettori elencati:$$\lambda_1\left(x + 1\right) + \lambda_2\left(x^2 - 1\right) + \lambda_3\left(2\right) + \lambda_4\left(x - 1\right) = 0$$Che espandendo le parentesi e raccogliendo per $x$ risulta:$$\lambda_2x^2 + x(\lambda_1 + \lambda_4) + (\lambda_1 - \lambda_2 + 2\lambda_3 + \lambda_4) = 0$$Ora, sapendo che un polinomio è nullo solo sse tutti i suoi coefficienti sono nulli, ricaviamo il sistema lineare ad esso associato:$$\begin{cases}\lambda_2 = 0 \\ \lambda_1 + \lambda_4 = 0 \\ \lambda_1 -\lambda_2 + 2\lambda_3 + \lambda_4 = 0\end{cases}$$Una volta [[Terzo esempio combinazioni lineari|risolto il sistema]], si ottengono infinite soluzioni. Da questo deriva che i vettori siano tra loro linearmente dipendenti.
#### Esercizi
Per degli esercizi sulle combinazioni lineari, clicca [[Esercizi sulle combinazioni lineari|qui]]!
## Concetto di base
Sia $V$ un sottospazio vettoriale. Si dice base di $V$ un insieme $B = \{v_1, \dots, v_n\}$ tale che 
1) $v_1, \dots, v_n$ generino $V$;
2) $v_1, \dots, v_n$ siano linearmente indipendenti.
### Esempio di base
L'insieme $\{\left(1,1\right), \left(1,3\right)\}$ genera l'insieme $\mathbb{R}^2$ ed i due vettori scelti sono tra loro linearmente indipendenti. Ne consegue che l'insieme scelto sia una base di $\mathbb{R}^2$.
D'altro canto l'insieme $\{\left(1,3\right), \left(1, 1\right), \left(2,4\right)\}$ genera $\mathbb{R}^2$, ma i vettori non sono tra loro linearmente indipendenti: difatti $\left(2,4\right)=\left(1,3\right) + \left(1,1\right)$. L'insieme scelto non è quindi base di $\mathbb{R}^2$.
### Definizione - spazio finitamente generato
Uno spazio vettoriale $V$ si dice finitamente generato quando esiste un insieme di generatori di $V$ finito, cioè vale $V = \lt v_1, \dots, v_n \gt$.
### Definizione - insieme massimale e minimale
Un insieme $X$ si dice **massimale** rispetto ad una certa proprietà (come l'indipendenza lineare) se aggiungendo un elemento a tale insieme, questo perde tale proprietà.
Un insieme si dice invece **minimale** rispetto ad una proprietà quando rimuovendo un elemento da tale insieme, questo perderebbe tale proprietà.
### Teorema utile
Avendo $v_1, \dots, v_n \in V$:
- $\{v_1, \dots, v_n\}$ è una base di $V$ sse è insieme minimale di generatori di $V$;
- $\{v_1, \dots, v_n\}$ è una base di $V$ sse è insieme massimale di vettori linearmente indipendenti.
### Esempio di ricerca della base di un insieme (non rigorosa)
Siano dati in $\mathbb{R}^3[x]$ i vettori:$$
\begin{array}.
x^3, \\
x^2, \\
2, \\
5, \\
x + 2, \\
3x, \\
-7x, \\
2x^3
\end{array}
$$Vogliamo trovare una base per il sottospazio vettoriale $W$ da essi generato. 
**Attenzione:** questo non è il metodo standard, ma solamente una semplificazione data dalla semplicità dell'esercizio.
Anzitutto vediamo come $5$ sia multiplo di $2$, in quanto in $\mathbb{R}^3$ potremmo scrivere $(\frac{5}{2}) \cdot 2$.
Allo stesso modo potremmo scrivere $2x^3$ come $2 \cdot x^3$ e $-7x$ come $(\frac{7}{3}) \cdot 3x$.
Ora osserviamo come $x + 2$ sia riscrivibile come combinazione lineare dei vettori $\colorbox{yellow}{3x}$ e $\colorbox{lightgreen}{2}$, tramite la seguente scrittura: $x + 2 = (\frac{1}{3}) \cdot \colorbox{yellow}{3x} + \colorbox{lightgreen}{2}$.
Eliminiamo ora questi vettori superflui dall'insieme dato e riscriviamolo: $W = \lt x^3, x^2, 2, 3x \gt$.
Per verificare che questi vettori sono linearmente indipendenti e formano una base per $W$ dobbiamo mostrare che l'equazione $ax^3 + bx^2 + 2c + 3dx = 0$ sia soddisfatta solamente per costanti moltiplicative tutte nulle, cosa ovvia in quanto un polinomio è nullo sse sono nulli tutti i suoi coefficienti. Da questo deriva che $\{x^3, x^2, 3x, 2\}$ è base di $W$. In seguito vedremo come dimostrare che $W$ sia tutto $\mathbb{R}^3[x]$ tramite il [[Introduzione ad Algebra & Geometria#Concetto di Dimensione|Concetto di dimensione]].
## Concetto di Dimensione
Uno spazio vettoriale $V$ può ammettere più di una base, tuttavia ognuna di queste basi deve avere lo stesso numero di elementi: questo quantitativo si dice **Dimensione** di $V$.
### Teorema del completamento
Sia $\alpha = \{v_1, \dots, v_n\}$ un insieme di vettori linearmente indipendenti in uno spazio vettoriale $V$ finitamente generato. Se $\beta = \{w_1, \dots, w_n\}$ è base di $V$, allora esiste un $m \leq n$ tale per cui si possono aggiungere $n - m$ vettori appartenenti a $\beta$ ad $\alpha$ per ottenere una base di $V$.
### Definizione - dimensione finita
Una dimensione dello spazio vettoriale $V$ si indica con $dim(V)$ e quanto tale numero è finito, $V$ si dice di **dimensione finita**.
## Basi canoniche
### Base canonica di $\mathbb{R}^n$
La base canonica di $\mathbb{R}^n$ è data da $C = \{e_1, \dots, e_n\}$, dove $e_i$ è il vettore con 1 nella $i$-esima posizione e $0$ in tutte le altre. Ne consegue che $dim(\mathbb{R}^n) = n$.
#### Esempio di base canonica di $\mathbb{R}^n$ per $n = 4$
Una base di $\mathbb{R}^4$ è $C = \{\left(1, 0, 0, 0\right), \left(0, 1, 0, 0\right), \left(0, 0, 1, 0\right), \left(0, 0, 0, 1\right)\}$.
Ne consegue che $dim(\mathbb{R}^4) = 4$: stiamo quindi lavorando con uno spazio vettoriale quadridimensionale.
### Base canonica di $\mathbb{R}_n[x]$
La base canonica di $\mathbb{R}_n[x]$ è data da $C = \{x^n, x^{n - 1}, \dots, x, 1\}$. Ne consegue che $dim(\mathbb{R}_n[x])=n+1$.
### Base canonica di $M_{m, n}(\mathbb{R})$
La base canonica di $M_{m, n}(\mathbb{R})$ è data da $C = \{E_{1,1}, \dots, E_{m,n}\}$, dove $E_{i, j}$ è la matrice con $1$ nella posizione $\left(i, j\right)$ e $0$ nelle altre. Ne consegue che $dim(M_{m, n}) = m \cdot n$.
#### Esempio di base canonica di $M_{m, n}(\mathbb{R})$ con $m = 2$ ed $n = 3$
La base canonica di $M_{2, 3}$ è $C = \{\pmatrix{1 & 0 & 0 \\ 0 & 0 & 0}, \pmatrix{0 & 1 & 0 \\ 0 & 0 & 0}, \pmatrix{0 & 0 & 1 \\ 0 & 0 & 0}, \pmatrix{0 & 0 & 0 \\ 1 & 0 & 0}, \pmatrix{0 & 0 & 0 \\ 0 & 1 & 0}, \pmatrix{0 & 0 & 0 \\ 0 & 0 & 1} \}$
### Osservazione importante sulla dimensione degli sottospazi vettoriali
Sia $V$ uno spazio vettoriale di dimensione $n$ e sia $W$ un sottospazio vettoriale di $V$. Allora:
- $dim(W) \leq dim(V)$;
- $dim(W) = dim(V)$ sse $V = W$.
### Componenti di un elemento di uno spazio vettoriale
Avendo uno spazio vettoriale $V$ e una base ordinata di $V$ della forma: $\beta = \{v_1, \dots, v_n\}$, prendiamo un $v \in V$. Allora esiste ed è unica la $n$-upla di scalari $\left(a_1, \dots, a_n\right)$ tale che:$$v = a_1v_1 + \dots + a_nv_n$$Gli scalari facenti parte di questa $n$-upla si dicono le *componenti* di $v \in V$ nella base $\beta$ e si indicheranno con la notazione $\left(v\right)_\beta = \left(a_1, \dots, a_n\right)$.
#### Esempio di identificazione delle componenti di uno spazio vettoriale $V$ rispetto ad una base $\beta$
Siano $V = \mathbb{R}_2[x]$, $\beta = \{x^2 + 2x, -x^2 - x + 1, x^2 + 5\}$ e $v = -x^2 + 3x +2$.
Troviamo le coordinate di $v$ rispetto alla base indicata, ricordando la notazione presentata nella definizione:$$\begin{array}.
v = a_1v_1 + \dots + a_nv_n \text{ ovvero }\\
-x^2+3x+2 = a_1 \cdot \left(x^2 + 2x\right) + a_2 \cdot \left(-x^2-x+1\right) + a_3 \cdot \left(x^2 + 5\right) \\
-x^2+3x+2 = \left(a_1 - a_2 + a_3\right) \cdot x^2 + \left(2a_1 - a_2\right) \cdot x + \left(a_2 + 5a_3\right)
\end{array}
$$Ora passando al sistema lineare associato, scriviamo$$
\begin{cases}
a_1 - a_2 + a_3 = -1 \\
2a_1 - a_2 = 3 \\
a_2 + 5a_3 = 2
\end{cases}$$E conseguentemente passiamo alla matrice associata:$$
\left(
\begin{array}{ccc|c}
1 & -1 & 1 & -1 \\
2 & -1 & 0 & 3 \\
0 & 1 & 5 & 2
\end{array}
\right)
$$Ora normalizziamola mediante [[Introduzione ad Algebra & Geometria#Rendere scala una matrice (algoritmo di Gauss)|Algoritmo di Gauss]]: anzitutto, svolgiamo l'operazione $R_2 \rightarrow R_2 - 2R_1$:$$
\left(\begin{array}{ccc|c}
1 & -1 & 1 & -1 \\
0 & 1 & -2 & 5 \\
0 & 1 & 5 & 2
\end{array}\right)$$In seguito, svolgiamo $R_3 \rightarrow R_3 - R_2$:$$
\left(\begin{array}{ccc|c}
1 & -1 & 1 & -1 \\
0 & 1 & -2 & 5 \\
0 & 0 & 7 & -3
\end{array}\right)$$Ora procedendo per sostituzione dal basso, troviamo prima $a_3$, poi $a_2$ ed infine $a_1$:$$
\begin{array}{c}
7a_3 = -3 \text{ da cui } a_3 = -\frac{3}{7} \\
a_2 -2a_3 = 5 \text{ da cui } a_2 = 5 - \frac{6}{7} = \frac{29}{7} \\
a_1 -a_2 + a_3 = -1 \text{ da cui } a_1 = -1 + \frac{29}{7} + \frac{3}{7} = \frac{25}{7}
\end{array}$$Da cui concludiamo che le componenti (o *coordinate*) di $v$ rispetto a $\beta$ siano: $\left(v\right)_\beta = \left(\frac{25}{7}, \frac{29}{7}, -\frac{3}{7}\right)$.
## Applicazione diretta dell'algoritmo di Gauss (senza passare per un sistema lineare associato)
<!-- vedi pag.67 -->
## brutta
Osservazione importante: sia $V$ sp.vett. di dimensione $N$ e sia $\beta = \{v_1, \dots, v_n\}$ base ordinata. La funzione $\mathbb{f}:V \rightarrow \mathbb{R}^n$ (quindi $v \rightarrow (v)_\beta = (\lambda_1, \dots, \lambda_n)$) è un isomorfismo di spazi vettoriali cioè è una biiezione che rispetta la struttura (le proprietà) di spazio vettoriale. Ad esempio: $\mathbb{f}(v + u)_\beta = \mathbb{f}(v) + \mathbb{f}(u)$.
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
