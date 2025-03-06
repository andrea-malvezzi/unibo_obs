1. [Prologo](#Prologo)
	1. [Programma del corso](#Programma%20del%20corso)
	2. [Progetto (Facoltativo)](#Progetto%20(Facoltativo))
2. [Definizione di algoritmo](#Definizione%20di%20algoritmo)
	3. [Differenza tra Algoritmo e Programma](#Differenza%20tra%20Algoritmo%20e%20Programma)
	4. [Informazioni sugli algoritmi](#Informazioni%20sugli%20algoritmi)
	5. [Algoritmi cattivi](#Algoritmi%20cattivi)
3. [Come scrivere un algoritmo?](#Come%20scrivere%20un%20algoritmo?)
	6. [Capire un problema](#Capire%20un%20problema)
	7. [Analizzare un problema](#Analizzare%20un%20problema)
	8. [Studiare tecniche algoritmiche e strutture dati utili particolari](#Studiare%20tecniche%20algoritmiche%20e%20strutture%20dati%20utili%20particolari)
4. [Caso di studio Fibonacci](#Caso%20di%20studio%20Fibonacci)
	9. [Tramite formula diretta](#Tramite%20formula%20diretta)
		1. [Esempio](#Esempio)
	10. [Approccio ricorsivo](#Approccio%20ricorsivo)
		2. [Misurare la memoria utilizzata](#Misurare%20la%20memoria%20utilizzata)
		3. [Misurare la velocità dell'algoritmo. come fare?](#Misurare%20la%20velocit%C3%A0%20dell'algoritmo.%20come%20fare?)
	11. [Approccio iterativo](#Approccio%20iterativo)
	12. [Approccio iterativo ottimizzato per la memoria](#Approccio%20iterativo%20ottimizzato%20per%20la%20memoria)
5. [Conclusioni](#Conclusioni)
## Prologo
- faremo Java!
	- mod minecraft!!!
- serve matematica :(
### Programma del corso
- complessità asintotica degli algoritmi
- sorting algos
- strutture dati elementari (liste, pile, code, alberi…)
- alberi di ricerca
- tabelle hash
- strutture heap e relative applicazioni
- strutture union-find
- tecniche algoritmiche (divide et impera, algoritmi greedy, programmazione dinamica)
- algoritmi su grafi (spanning tree, cammini minimi)
- teoria dell’NP-completezza
### Progetto (Facoltativo)
Sviluppare un ulteriore algoritmo particolare in Java. Il progetto vale 3 punti e dovrà essere consegnato entro Settembre (sessione autunnale). Serve per la $\underline{lode}$ !!
## Definizione di algoritmo
### Differenza tra Algoritmo e Programma
Un algoritmo è la descrizione di una procedura. Non si può eseguire e può quindi assumere un quantitativo di memoria illimitato (è astratto). Un programma è l’adattamento dell’algoritmo (è concreto e ha quindi maggiori vincoli della sua controparte astratta).
### Informazioni sugli algoritmi
Un algoritmo vincola input e output: per un input particolare vi sarà sempre lo stesso output.
Ciò significa che vi possono essere infinite istruzioni per risolvere lo stesso problema, ma l’output corrispondente ad ogni input deve restare costante per ognuna di queste soluzioni trovate.
### Algoritmi cattivi
Un algoritmo si dice "cattivo" quando richiede l'impiego di troppe risorse (memoria o potenza di calcolo).
Un esempio di cattivo algoritmo è l'implementazione ricorsiva di Fibonacci: richiede molta memoria e molti calcoli (spesso ridondanti) per giungere a grandi numeri.
## Come scrivere un algoritmo?
### Capire un problema
1) Quali sono i possibili input ed i possibili output?
2) Come sono gli input mappati sugli output?
3) Ci sono proprietà matematiche legate al problema che posso sfruttare?
### Analizzare un problema
Un algoritmo ottimale risolve un problema nel minor tempo possibile sfruttando la minor quantità di memoria possibile: occorrerà imparare a leggere un algoritmo e comprenderne la velocità e la memoria utilizzata, perlomeno in maniera stimata.
### Studiare tecniche algoritmiche e strutture dati utili particolari
Problemi apparentemente differenti si possono risolvere con tecniche simili e con strutture dati "famose" come gli alberi di ricerca etc $\dots$ 
## Caso di studio Fibonacci
Vi sono svariate tecniche atte al calcolo dei numeri di Fibonacci, ma qual è la migliore tra queste?
### Tramite formula diretta
Esiste una formula chiusa per calcolare il termine $F_n$ della sequenza di Fibonacci:
**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXflUbbto13NDyBItuBunY182v-iaTfZgiPv-2eZT7eeoEzL3D1Q09SSOTg6gDXjFG08q-1BnV13rtNNERJazkdG9qBKiBMafy26ZnMeldknricoj8JxlTWKxwA5PkJb--K0ofBYfQ?key=AroKoD3z9P734rDgJLnQwsQJ)**
dove $\varphi$ equivale alla sezione aurea, e $\hat{\varphi}$ al il reciproco della medesima.
Questa formula è ottima su carta, ma richiede calcoli molto precisi con cifre decimali, cosa che su macchina non è possibile ottenere.
#### Esempio
$F_3$  = $1.999863$ che arrotondato è pari a $2$ (Corretto!)
$F_18$ = $2583.023$ che arrotondato è $2583$ (non corretto: dovrebbe essere $2584$).
### Approccio ricorsivo
Svalutata l'opzione tramite formula diretta, si potrebbe provare con un approccio ricorsivo (classico).
$$F_n = \begin{cases} 1 & n \leq 2 \\ F_{n-1} + F_{n-2} & n > 2 \end{cases}$$ 
Analizziamo ora questo approccio per comprenderne meglio le performance dal punto di vista della velocità e della memoria.
Per ogni caso diverso da $n \leq 2$ la funzione richiamerà sé stessa due volte, creando quindi un albero di chiamate ricorsive.
Ad esempio, per $n = 7$ si avrebbe:
**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXck-tlDLg7pQvEj3ELiwinURyRBEmwDuMuC-D-sfuTXkF3BTjmLAZLMrToSfHMOpVCp6gzdi-9BFuQr-MldudLwZhAcPcyIyjZF6MMZNhNuvENYWFNGUMdCTwuvNgMuybi9Uiax5w?key=AroKoD3z9P734rDgJLnQwsQJ)**
Com'è possibile osservare, vi sono molte chiamate di funzione, alcune di queste ridondanti (quindi uno spreco di risorse).
#### Misurare la memoria utilizzata
Per comprendere quanta memoria utilizza il nostro algoritmo, bisogna anzitutto analizzarne la natura: questo algoritmo è ricorsivo e in quanto tale userà memoria in base al numero massimo di chiamate attive ad un determinato tempo $t$. Il numero massimo di active calls sarà quindi pari al percorso radice-foglia più lungo dell'albero presentato (ossia il ramo di sinistra).
#### Misurare la velocità dell'algoritmo. come fare?
Si potrebbe pensare di misurare la velocità di un algoritmo in secondi utilizzati per la sua esecuzione: questa tecnica tuttavia fornirebbe valori variabili in base all'architettura di test ed il linguaggio di programmazione adottato.
La stessa cosa vale per il conteggio delle istruzioni macchina nell'algoritmo: queste dipenderebbero da linguaggio utilizzato.
Si opta quindi per il conteggio delle <u>istruzioni elementari</u> presenti nello pseudocodice.
Consideriamo un nuovo algoritmo $\dots$
### Approccio iterativo
```pseudocodice
function Fib(INT n) -> INT
	let f[1,...,n] be a new array of integers
	F[1] = 1
	F[2] = 1
	for i = 3, ..., n do
		F[i] = F[i - 1] + F[i - 2]
	return F[n]
```
Cerchiamo di stimare la velocità dell'algoritmo presentato contando le istruzioni elementari presenti al suo interno:
1) dichiarazione dell'array
2) assegnazione primo elemento
3) assegnazione secondo elemento
4) ritorno valore finale
Oltre a queste, vi sono anche le istruzioni interne al loop. Il loro conteggio andrà moltiplicato per il numero totale delle iterazioni, quindi:
1) assegnazione i
2) somma $F[i - 1]$ + $F[i - 2]$
3) assegnazione $F[i]$
moltiplicate per $n - 2$ volte (parto da $i = 3$ e vado fino ad $n$). Quindi ci saranno un totale di:
$$4 + 3*(n-2)=3n-2 \text{ operazioni elementari}$$
Stimiamo ora la memoria utilizzata dall'algoritmo: dobbiamo usare un array $F$ e due variabili
($i$ e $n$). <i>Ma occorre davvero usare un array?</i>
### Approccio iterativo ottimizzato per la memoria
Idea: per calcolare $F_n$ possiamo semplicemente memorizzare $F_{n-1}$ e $F_{n-2}$ . Riscriviamo quindi l'algoritmo:
```pseudocodice
function Fib(INT n) -> INT
	a = 1
	b = 1
	for i = 3, ..., n do
		c = a + b
		a = b
		b = c
	return b
```
- Quanto è veloce la nuova funzione $Fib$? Contiamo le istruzioni elementari dell'algoritmo:
	1) assegnazione a
	2) assegnazione b
	3) return b
	Più quelle del ciclo for, quindi
	1) assegnazione i
	2) somma tra a e b
	3) assegnazione c
	4) assegnazione a
	5) assegnazione b
	Eseguite $n-2$ volte. Quindi in tutto:
	$$3 + 5(n-2)=5n-7 \text{ operazioni}$$
Questo significa che il nuovo algoritmo sarà più lento del precedente? Analizziamo l'uso della memoria per capirlo.
- Quanta memoria usa la nuova funzione $Fib$?
	Una quantità costante, in quanto basterà dichiarare 5 variabili ($n$, $i$, $a$, $b$, $c$). Trattandosi di variabili e non di un array, queste ultime verranno salvate nei registri della CPU o nella Cache, velocizzando l'ingresso al loro contenuto. Il nostro algoritmo risulterà quindi più rapido del precedente, nonostante impieghi più istruzioni elementari di questo. Ecco come mai è importante ottimizzare sia l'uso della memoria che la velocità generale degli algoritmi.
## Conclusioni
Esistono ulteriori versioni del nostro algoritmo per calcolare $F_n$ che sfruttano le matrici per ottimizzare ulteriormente le cose, sia dal punto di vista della velocità che della memoria.
Nello specifico, siamo partiti da un algoritmo con tempo esponenziale di calcolo e siamo arrivati ad un algoritmo logaritmico.