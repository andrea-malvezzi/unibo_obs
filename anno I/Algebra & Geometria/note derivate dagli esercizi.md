## Applicazioni lineari iniettive
Un'applicazione lineare $f$ è sicuramente **non** iniettiva quando ha grado dell'insieme del dominio maggiore del grado del codominio.
Negli altri casi, per le matrici perfette si fa il determinante e si controlla che questo sia diverso da 0; per le matrici non perfette si fa invece Gauss e si controlla il *rr*: se questo risulta uguale al grado del dominio, allora $f$ risulta iniettiva.
### Teorema del Rango
Questa formula vale per ogni applicazione lineare e permette di rispondere rapidamente a domande del tipo "si potrebbe avere una $f$ iniettiva con questa immagine?" ed altre.$$
dim(ker \ f) = dim(dominio) - rr(f)$$
#### Esempio di uso del Teorema del Rango
![[Pasted image 20250513160108.png]]Qui sappiamo che il dominio ha $dim = 3$ e che il codominio ha $dim = 4$ (una matrice $2\times2$ ha $4$ elementi).
Sapendo che una base dell'immagine (quella fornita equivale ad una base) ha $dim = 3$ (contiene $3$ vettori, quindi $3$ elementi), allora possiamo scrivere, ricordando il [[#Teorema del Rango]]:$$
dim(ker \ f) = dim(R^3) - rr(f) = 3 - 3 = 0$$concludendo quindi che $f$ risulta iniettiva, in quanto un'applicazione lineare si dice tale quando si ha $dim(ker \ f) = 0$.
## Trovare basi di $Ker$ e $Im$
Per l'immagine si fa la matrice associata, si trova il $rr$ e si prendono le prime $rr$ **colonne** della matrice **originale** linearmente indipendenti tra loro.
Per il Kernel si risolve ponendo tutte le righe della matrice pari a 0: una volta trovate le eventuali $k$ che annullano i risultati si provano separatamente per trovare una delle eventuali basi al variare di $k$.
La dimensione del $ker$ dipende dal numero di variabili libere: per una variabile la dimensione cresce di $1$.
## Scrivere una matrice rispetto ad una base nel dominio e nel codominio
Avendo un'applicazione lineare $F$ (ma anche $F_k$), una base $B = \{v_1, v_2, \dots \}$ del dominio ed una $C = \{w_1, w_2, \dots \}$ del codominio, puoi scrivere la matrice associata ad $F$ in modo semplice.
Avendo $F(x,y) = (2x + y, x - y), B = \{(1,1), (1, -1)\}, C = \{(1,1),(0,1)\}$:
- Calcola $F(v_1), F(v_2)$:$$\begin{array}{c}F(v_1) = (3,0)\\F(v_2) = (1, 2)\end{array}$$
- Scrivi $F(v_j)$ come combinazione lineare di $w_1, w_2$, ovvero $F(v_j) = a \cdot w_1 + b \cdot w_2 + c \cdot w_2 \dots$ e $\colorbox{lightgreen}{risolvi questa espressione}$:$$F(v_j) = a \cdot w_1 + b \cdot w_2 = a \cdot (1,1) + b \cdot (0, 1) = \colorbox{lightgreen}{(a, a + b)}$$
- Per ognuno dei vettori trovati calcolando $F(v_1), F(v_2), \dots$ risolvi il sistema collegato all'espressione risolta nello step precedente:$$\begin{array}{c}\text{per } F(v_1): \\ \begin{cases}a = 3 \\ a + b = 0 \Rightarrow b = -3\end{cases} \\ \text{per }F(v_2): \\ \begin{cases}a = 1 \text{ (sostituisci sotto!)}\\ a + b = 2 \Rightarrow b = 1\end{cases}\end{array}$$Quindi $F(v_1) = 3w_1 - 3w_2$ e $F(v_2) = w_1 + w_2$.
- Scrivi la matrice associata, dove ogni colonna corrisponde ai valori di $a$ e $b$ (ed eventuali altre incognite) trovati:$$[F]_{C,B} = \pmatrix{3 & 1 \\ -3 & 1}$$ 
## Determinante
Si usa quando si cerca risposte alle seguenti:
- Una matrice è **invertibile**?
- Il sistema lineare ha **un'unica soluzione**?
- Una funzione lineare è **iniettiva**?
E si cerca solo nelle matrici quadrate (stesso numero di righe e colonne). Se il determinante risulta 0, la matrice non è invertibile e non è iniettiva. Se risulta diverso da 0 è invertibile e se dominio e codominio hanno la stessa dimensione, anche Suriettiva.
### Calcolare determinante (Laplace)
Scegli una riga o una colonna, possibilmente con tanti 0. Poi fai scorrere i componenti di quella riga, chiamandoli $a_{i,j}$, calcolando per ognuno $a_{i,j} \cdot \pmatrix{\dots}$ dove all'interno della matrice vi saranno tutte le righe e le colonne della matrice originale, meno la $i$-esima riga e la $j$-esima colonna.
Poi sottraili tra loro e ottieni il determinante.
### Calcolare determinante (Sarrus per matrici 3x3)
Avendo una matrice$$
M = \pmatrix{
a & b & c \\
d & e & f \\
g & h & i
}$$Immaginiamo di estendere la matrice con una copia delle prime due colonne:$$
M = \pmatrix{
a & b & c & a & b \\
d & e & f & d & e \\
g & h & i & g & h
}$$per calcolare il determinante si sommano tutte le diagonali partendo da $aei$ e sottraendo tutte le diagonali partendo da $ceg$:$$
aei + bfg + cdh - ceg - bdi - afh$$questa formula vale per ogni matrice 3x3.
## Matrici diagonalizzabili
Avendo una matrice come:$$\pmatrix{4 & 1 \\ 0 & 2}$$
1) Trova gli autovalori calcolando il polinomio caratteristico nella forma seguente:$$det(A - \lambda I)$$dove $I$ indica la matrice contenente solamente 1 sulla diagonale principale. Quindi nel nostro caso:$$det(\pmatrix{4 - \lambda & 1 \\ 0 & 2 - \lambda}) = (4 - \lambda)(2 - \lambda) \Rightarrow \lambda_1 = 4, \lambda_2 = 2$$Quindi si sa che gli autovalori sono $4$ e $2$.
2) Trova gli autovettori. Per ogni autovalore calcola la matrice sostituendo tale autovalore e risolvi ponendo ogni incognita pari a 0:$$\text{per } \lambda = 4: \left(\begin{array}{cc|c}0 & 1 & 0 \\ 0 & -2 & 0\end{array}\right)$$che risulta $x$ libero (non compare) e $y = 0$.$$\text{per } \lambda = 2 : \left(\begin{array}{cc|c}2 & 1 & 0 \\ 0 & 0 & 0\end{array}\right)$$che risulta $y$ libero e $x = -\frac{y}{2}$. Ora costruiamo gli autovettori con le soluzioni trovate, scegliendo i valori liberi e sostituendo ove necessario:$$\begin{array}{c}\text{per } \lambda = 4: \pmatrix{1 \\ 0}\\\text{per } \lambda = 2: \pmatrix{1 \\ -2}\end{array}$$Qualora questi autovettori non fossero tra loro linearmente indipendenti, non si potrebbe procedere con la diagonalizzazione della matrice.
3) Costruisci una matrice $P$ con colonne gli autovettori trovati:$$P = \pmatrix{1 & 1 \\ 0 & -2}$$
4) Costruisci una matrice $D$ con colonne gli autovalori trovati sulla diagonale principale:$$D = \pmatrix{4 & 0 \\ 0 & 2}$$
### Verificare che un vettore sia autovettore di un'applicazione lineare per un certo $k$
Anzitutto scrivi il vettore $\vec{v} = (\dots)$ e calcola l'applicazione lineare con input il vettore richiesto. Ad esempio:
con un'applicazione lineare del tipo $F_k : \mathbb{R}^3 \rightarrow \mathbb{R}^3$ definita come $F_k(e_1) = 2e_2; \ F_k(e_2) = 5e_1 + 3e_2; \ F_k(e_3) = -10e_1 + 4e_2 + ke_3$ ed un vettore $\vec{v} = (0,2,1)$, allora scriviamo anzitutto il vettore come combinazione lineare $$\vec{v} = 0 \cdot e_1 + 2 \cdot e_2 + e_3$$ e sostituiamo $\vec{v}$ con $F_k(\vec{v})$ (e conseguentemente $e_1$ etc $\dots$ con $F_k(e_1)$ etc $\dots$)$$F_k(\vec{v}) = 2 \cdot F_k(e_2) + F_k(e_3) = \dots = (0,10,k)$$In seguito scriviamo $F_k(\vec{v}) = \lambda \cdot \vec{v}$ e risolviamo il sistema correlato: avendo$$(0,10,k)=\lambda \cdot (0,2,1)$$dovremo risolvere il sistema$$\begin{cases}0 = 0 \\ 10 = 2 \cdot \lambda \\ k  = \lambda\end{cases}$$che nel nostro caso risulta $lambda = 5$ e dall'ultima riga $k = \lambda$.
## Congruenze
Avendo una congruenza del tipo$$a * x \equiv _{n}b$$si dice modulo $n$ e per risolvere queste congruenze occorre anzitutto trovare l'MCD($a, n$) con il teorema di Euclide:
- divido il maggiore tra $a$ e $n$ per l'altro e scrivo a lato il resto;
- divido il divisore precedente per il resto trovato;
- ripeto fino a che non ho resto pari a $0$;
- l'MCD equivale al resto della divisione precedente a quella che ha dato resto pari a $0$.

Ora, chiamando l'MCD trovato $d$:
- se $d \gt 1$ e divide $b$ allora si hanno $d$ soluzioni e occorre semplificare la congruenza dividendo per $d$. Dopo aver fatto ciò le soluzioni saranno $x = \frac{b}{d} + \frac{n}{d} * k$, dove $k$ varia da $0$ fino al numero di soluzioni $-1$;
- se $d \gt 1$ e non divide $b$ allora non si hanno soluzioni;
> **Nota**: ovviamente se la prima divisione da resto $0$, allora l'MCD equivale al divisore scelto.

Quando invece si ha $d = 1$ allora si ha una sola soluzione e si deve procedere con l'algoritmo esteso di Euclide per trovare l'inverso di $a \ mod \ n$:
- risalgo l'algoritmo standard di Euclide dal basso, scrivendo i resti come $dividendo - divisore * risultato$;
- sostituendo i resti mano a mano che si procede si arriverà ad avere una scrittura del tipo: $1 = s * n + t * a$, dove $t$ sarà l'inverso cercato;