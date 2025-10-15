Volendo risolvere un problema del tipo$$\text{min}(f(x))$$ovvero volendo trovare una soluzione del tipo$$x^* = \text{arg min}(f(x))$$perché trovare una soluzione di questo tipo corrisponde al trovare la soluzione anche di $$\text{arg max}(-f(x))$$
# Minimi e Massimi Locali e Globali
## Punti di Minimo
### Punti di Minimo Locale
$x^*$ è un **punto di minimo locale** di $f(x)$ se esiste un $\epsilon \gt 0$ t.c.$$f(x^*) \leq f(x), \forall x : ||x - x^*|| \lt \epsilon$$
 e si dice punto di minimo locale **stretto** se, nella precedente, $x \not = x^*$ 
### Punti di Minimo Globale
Un $x^*$ si dice **punto di minimo globale** di $f(x)$ se per ogni $x \in \mathbb{R}^n$ vale la seguente:$$f(x^*) \leq f(x)$$Allo stesso modo del caso precedente, tale punto si dice di minimo globale **stretto** se si ha $x \not = x^*$.
### Casi Particolari
Esistono funzioni con minimo locali ma nessuno minimo globale (spesso nel caso di funzioni dal dominio illimitato), oppure con nessuna o entrambe delle due (il seno ha infiniti minimi globali, ad esempio).
## Punti di Massimo
I punti di massimo, sia locali che globali, si definiscono in maniera analoga a quelli di minimo, ma c'è una ragione: il punto di massimo di una funzione $f$, non corrisponde ad altro che al punto di minimo della funzione $-f$:$$\text{max }f(x) = -\text{min }-f(x)$$
# Insiemi di Livello e Contorni
Avendo una generica $f : \mathbb{R}^n \rightarrow \mathbb{R}$ ed una costante $a \in \mathbb{R}$, allora:
- si dice **insieme di livello** di $f$ su $\mathbb{R}^n$ un insieme non vuoto del tipo $$\zeta(a) = \{x \in \mathbb{R}^n : f(x) \leq a\}$$
- si dice **contorno** di $f$ ogni insieme non vuoto del tipo$$C(a) = \{x \in \mathbb{R}^n : f(x) = a\}$$
# Differenziabilità di una Funzione
Una funzione $f : \mathbb{R}^n \to \mathbb{R}$ si dice differenziabile in un punto $x^* \in \mathbb{R}^n$ se esiste un'applicazione lineare $L : \mathbb{R}^n \to \mathbb{R}$ t.c.$$\lim_{h \to 0}\frac{f(x_0 + h) - f(x_0) - L(h)}{||h||} = 0$$Ed ovviamente $f$ si dice differenziabile in un insieme se $f$ risulta differenziabile su ogni punto di tale insieme.
## Proprietà derivanti dalla Differenziabilità
Se $f$ risulta differenziabile in un punto $x^*$ allora:
- tutte le derivate parziali di $f$ in $x^*$ esistono;
- $f$ è anche continua in $x^*$.
# Condizioni di Ottimalità
Una condizione di ottimalità è una condizione perché un punto $x^*$ risulti una soluzione **ottima** del problema (ovvero una sol. locale o globale).

Una condizione si dice significativa se risulta più semplice da verificare della definizione stessa di derivabilità.
## Condizioni Necessarie
Le seguenti condizioni sono dette necessarie per l'individuazione delle soluzioni ottime del problema.
### C.N. del Primo Ordine
Se $x^*$ è un punto di minimo locale e $f$ è differenziabile con continuità in un intorno aperto di $x^*$, allora $\nabla f(x^*) = 0$. Inoltre, se $x^*$ t.c. $\nabla f(x^*) = 0$, allora $x^*$ si dice anche **punto stazionario**.

Quindi, ricapitolando: $$x^* \text{ punto di minimo locale} \Rightarrow x^* \text{ punto stazionario}$$
> Questa condizione si dice del primo ordine perché, trattandosi del trovare un minimo locale, si usano solamente derivate prime per raggiungere lo scopo.

### C.N. del Secondo Ordine
La prima condizione da sola non basta per trovare i punti ottimi, in quanto semplicemente si limita ad identificare *tutti* i punti con gradiente nullo. Solo alcuni di questi saranno tuttavia ottimi, in quanto un punto con gradiente nullo può essere di minimo, di massimo, oppure di sella.

Occorrera quindi trovare la Hessiana ($H(x^*)$), ossia la matrice di derivate seconde di $f$ in $x^*$, trovarne il segno ed in seguito, per ogni punto, controllare che:
- se $\nabla f(x^*) = 0$ ed $H(x^*) \gt 0$, allora $x^*$ è un minimo locale;
- se $\nabla f(x^*) = 0$ ed $H(x^*) \lt 0$, allora $x^*$ è un massimo locale;
- se $H(x^*) = 0$, allora $x^*$ è un punto di sella.

Le soluzioni ottime saranno quelle che risponderanno al nostro quesito iniziale: saranno i punti di massimo se cerchiamo i massimi oppure quelli di minimo se cerchiamo i minimi.

> Questa condizione si dice del secondo ordine perché richiede il calcolo dell'Hessiana, quindi l'uso di derivate seconde.

