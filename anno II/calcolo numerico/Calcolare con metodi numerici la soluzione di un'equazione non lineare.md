1. Esiste un'unica soluzione al problema continuo?
2. Vari algoritmi per approssimare una soluzione
3. Analisi dell'errore
# 1. Teorema di Weierstrass
Il teorema di Weierstrass permette di trovare uno $0$ all'interno di uno spazio continuo su una curva $f$, del tipo $f : [a, b]$, se $f(a)\cdot f(b) \leq 0$.
# 2. Metodi Iterativi
Non è generalmente possibile costruire un algoritmo per calcolare le radici di un problema non lineare in un numero finito di step. Per risolvere questo genere di problema, si usano i **metodi iterativi**:
- mediante un procedimento $G$ ad un passo $k$, calcolo $x_k = G(x_{k - 1})$ ;
- ripeto $k$ volte ;
- faccio convergere gli $x_k$ iterati alla soluzione $x$ per cui ho $f(x) = 0, k \rightarrow \infty$.

> **N.B** tipicamente $x_0$ è assegnato.

Per evitare overflow, risulta opportuno definire dei **criteri di arresto** opportuni, come ad esempio un valore d'errore che eccede una soglia prestabilita.
Inoltre occorre definire dei **criteri di garanzia di arresto** (edge cases). Un esempio di questo potrebbe essere se il numero di step $k$ ha ecceduto il numero massimo di step consentiti.
## Convergenza dei metodi iterativi
Una successione $x_k$ generata da un metodo iterativo **converge** alla soluzione $x$ con ordine $p \leq 1$ quando si ha:$$\frac{|x_{k + 1} - x|}{|x_k - x|^p} = C, \ \forall k \geq k_0$$dove valgono:$$\begin{cases}k_0 \ \text{un intero opportuno}; \\ C \in \mathbb{R} \\ \begin{cases}0 \lt C \leq 1 & \text{ se } p = 1; \\ C \gt 0 & \text{ se } p  \gt 1;\end{cases}\end{cases}$$Questo valore $C$ corrisponde alla velocità con cui l'errore diminuisce tra un'iterazione e l'altra. Avere un $C$ compreso tra i valori presentati garantisce la convergenza, facendo sì che l'errore diventi arbitrariamente piccolo con un numero sufficientemente grande di iterazioni.
In base all'ordine $p$ di una successione, le si può dividere in tre tipologie di convergenza:$$\begin{cases}p = 1 & \text{lineare} \\ 1 \lt p \lt 2 & \text{superlineare} \\ p = 2 & \text{quadratica}\end{cases}$$In generale però si può dire che una convergenza dipenda dalla scelta del valore arbitrario iniziale $x_0$. Esisteranno quindi **risultati globali** (generali) e **locali** (dipendenti da alcuni valori $x_0$ specifici), con anche relativi teoremi.
## Algoritmi per la ricerca degli zeri di un'equazione non lineare
Vi sono 3 algoritmi principali per cercare gli zeri di un'equazione non lineare, ovvero:
- di **bisezione**;
- del **punto fisso**;
- di **Newton**.
### Algoritmo di Bisezione
Si costruisce una sequenza di intervalli partendo da un $[a, b]$ con $f(a_k) \cdot f(b_k) \lt 0$ del tipo:$$l_1 = [a_1, b_1], \  l_2 = [a_2, b_2], \ \dots, \ l_k = [a_k, b_k]$$tale che:$$l_k \subset l_{k-1} \subset \dots \subset l_1 \qquad l_{k} = \frac{1}{2} l_{k - 1}$$
> **N.B** per funzionare questo algoritmo necessita che la funzione cambi di segni nell'intervallo designato. Per vedere se questo accade o meno, bisogna usare [[Calcolare con metodi numerici la soluzione di un'equazione non lineare#1. Teorema di Weierstrass|Weierstrass]]. 

Quindi per una generica sequenza $f(a_k) \cdot f(b_k) \lt 0$, al $k-$esimo passo si calcolerà:$$c_k = \frac{a_k + b_k}{2} \qquad k = 1, 2, \ldots$$ovvero il punto medio dell'intervallo $l_k$ attuale. Dopo aver trovato questo punto medio, si procede a calcolare $x_k = f(c_k)$ e se questo valore corrisponde a $0$, allora $c_k$ è lo zero cercato. In caso contrario, si procede dividendo in $2$ l'intervallo, in base a se il valore trovato risulta maggiore o minore di quello cercato:$$\begin{cases}[a_k, c_k], & \text{se } f(c_k) \gt 0 \\ [c_k, b_k] & \text{se } f(c_k) \lt 0\end{cases}$$e si prosegue con i calcoli.
> Ovviamente questo dimezzamento corrisponde ad un eventuale perdita di precisione di calcolo, rendendo più corretto dire che $x = c_{k + 1} + e_{k + 1}$ piuttosto che $x = c_{k + 1}$.

Quindi per $k \rightarrow \infty, c_k \rightarrow x$ con **velocità di convergenza** pari a quella della successione $\frac{1}{2^k}$ (il dimezzamento dell'intervallo ad ogni step). Questo metodo fornisce anche una **maggiorazione dell'errore**, ovvero un modo per determinare il numero minimo di iterazioni $k$ per cui, fissata una tolleranza $\delta$, si riesce ad ottenere un errore $e \lt \delta$. Questa formula di maggiorazione corrisponde a:$$\frac{1}{2^k}(b - a) < \delta \Rightarrow 2^k \leq \frac{b - a}{\delta} \Rightarrow \colorbox{lightgreen}{$k \leq \log_2{\frac{b - a}{\delta}}$}$$
> Questo algoritmo ha complessità computazionale pari a $O(k \cdot T_f)$ in quando ad ogni iterazione occorrono $2$ chiamate di funzione in modo sequenziale ($T_f$ corrisponde al tempo di esecuzione della funzione).

## Algoritmo del Punto Fisso (o delle Approssimazioni Successive)
Si determina un'approssimazione di $x$ per cui vale $f(x) = 0$. In seguito, si determina una relazione funzionale a partire da $f$ e, preso un $x_0$ arbitrario, si genera una successione di $x_k$ fino ad ottenere la soluzione con precisione desiderata.

Per fare questo occorre trovare una soluzione all'equazione $x = g(x)$, ovvero un punto fisso della funzione $$g(x) = x - f(x) \cdot \delta(x)$$Se $f(x)$ si annulla in un intervallo $[a, b]$ e $\delta(x)$ è una funzione tale che valga la seguente:$$0 \lt |\delta(x)| \lt \infty, \qquad x \in [a, b]$$allora risulta equivalente risolvere una delle due equazioni$$f(x) = 0, \qquad g(x) = x$$
Conseguentemente il problema principale diventa ora trovare un punto fisso di $g(x)$, cioè l'intersezione delle seguenti due curve$$y = x, \qquad y = g(x)$$Data ora quindi un'approssimazione iniziale $x_0$ di $x$, dal punto fisso di $g(x)$ in $[a, b]$ si genera una successione di **iterati** mediante il metodo delle **approssimazioni successive**:$$x_{k+1} = g(x_k)$$Infatti se $g(x)$ è continua e la successione $\{x_k\}$ converge per $k \rightarrow \infty$ ad un punto $x$, allora quell'$x$ equivale al punto fisso di $g(x)$.
### Teoremi fondamentali
#### Teorema di Esistenza ed Unicità del Punto Fisso
Sia $g(x)$ continua in $[a, b]$ e t.c. $g(x) \in [a, b]$. Sia $L$ una costante $0 \leq L \lt 1$ t.c. $\forall x, y \in [a, b]$ valga la seguente:$$|g(x)-g(y)| \leq L|x - y|$$In tal caso si dice che $g$ sia una contrazione in $[a, b]$, e che quindi esisterà un solo punto fisso nel suo intervallo $[a, b]$ scelto.
#### Teorema di Convergenza Globale del Metodo delle Approssimazioni Successive
Sia $g(x)$ definita in $[a, b]$. Se valgono le seguenti condizioni:
- $g(x)$ è continua in $[a, b]$;
- $g(x) \in [a, b]$;
- $g(x)$ una contrazione in $[a, b]$

Allora per ogni $x_0 \in [a, b]$ la successione degli iterati $\{x_k\}$ con $x_k = g(x_{k - 1}, k = 1, 2, \dots)$ converge per $k \rightarrow \infty$ all'**unico** punto fisso $x$ di $g(x)$ in $[a, b]$. Inoltre vale:$$|x_k - x| \leq |\frac{C^k}{1 - C}\cdot(x_1 - x_0)|$$dove $C$ si dice **costante di contrazione** (quanto velocemente la funzione converge, ovvero di quanto due punti della successione si avvicinano per step).
#### Teorema di Convergenza Locale
Sia $x$ un punto fisso di $g(x)$ e sia $g$ continua ed una contrazione per ogni $c$ dell'intorno $I_p = [x - p, x + p]$. Allora per ogni $x_0 \in I_p$ (prendo un valore arbitrario iniziale dall'intorno $I_p$), la successione degli $\{x_k\}$ si dice **ben definita** (ovvero converge per $k \rightarrow \infty$ alla $x$ cercata). Inoltre, $x$ è l'unico punto fisso di $g$ in $I_p$.
### Criteri di Arresto
Una volta trovato un $x_k$, lo si ritiene un risultato accettabile se contemporaneamente valgono le seguenti:$$|f(x_K) \leq e_1, \qquad |x_k - x_{k - 1}| \leq e_2$$oppure se valgono$$\frac{|f(x_k)|}{f_{max}}\leq \sigma_1, \qquad \frac{|x_k - x_{k - 1}|}{x_k} \leq \sigma_2$$dove $e_1, e_2, \sigma_1$ e $\sigma_2$ sono tolleranze arbitrarie ed $f_{max}$ corrisponde al valore massimo di $|f(c)|, c \in I_p$.
## Algoritmo di Newton
L'idea alla base di questo algoritmo consiste nel cercare una soluzione $x$ per cui si abbia $f(x) = 0$ all'equazione $$k = k - \phi(k)f(k) = g(k)$$con $\phi(k) \not= 0$ per ogni $k$ nell'intervallo in cui si cerca la soluzione.

Tale approccio ha una velocità di convergenza lineare nel caso in cui valga la seguente:$$\phi(x) \not= \frac{1}{f'(x)}, \qquad \text{supposto } f'(x) \not= 0$$

%% TODO: completa newton
