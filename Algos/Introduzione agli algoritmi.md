1. [Programma del corso](#Programma%20del%20corso)
2. [Progetto (Facoltativo)](#Progetto%20(Facoltativo))
3. [Differenza tra Algoritmo e Programma](#Differenza%20tra%20Algoritmo%20e%20Programma)
4. [Informazioni sugli algoritmi](#Informazioni%20sugli%20algoritmi)
5. [Algoritmi cattivi](#Algoritmi%20cattivi)
6. [Capire un problema](#Capire%20un%20problema)
7. [Analizzare un problema](#Analizzare%20un%20problema)
8. [Studiare tecniche algoritmiche e strutture dati utili particolari](#Studiare%20tecniche%20algoritmiche%20e%20strutture%20dati%20utili%20particolari)
9. [Tramite formula diretta](#Tramite%20formula%20diretta)
	1. [Esempio](#Esempio)
10. [Approccio ricorsivo](#Approccio%20ricorsivo)

# Prologo
- faremo Java!
	- mod minecraft!!!
- serve matematica :(
## Programma del corso
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
## Progetto (Facoltativo)
Sviluppare un ulteriore algoritmo particolare in Java. Il progetto vale 3 punti e dovrà essere consegnato entro Settembre (sessione autunnale). Serve per la $\underline{lode}$ !!
# Definizione di algoritmo
## Differenza tra Algoritmo e Programma
Un algoritmo è la descrizione di una procedura. Non si può eseguire e può quindi assumere un quantitativo di memoria illimitato (è astratto). Un programma è l’adattamento dell’algoritmo (è concreto e ha quindi maggiori vincoli della sua controparte astratta).
## Informazioni sugli algoritmi
Un algoritmo vincola input e output: per un input particolare vi sarà sempre lo stesso output.
Ciò significa che vi possono essere infinite istruzioni per risolvere lo stesso problema, ma l’output corrispondente ad ogni input deve restare costante per ognuna di queste soluzioni trovate.
## Algoritmi cattivi
Un algoritmo si dice "cattivo" quando richiede l'impiego di troppe risorse (memoria o potenza di calcolo).
Un esempio di cattivo algoritmo è l'implementazione ricorsiva di Fibonacci: richiede molta memoria e molti calcoli (spesso ridondanti) per giungere a grandi numeri.
# Come scrivere un algoritmo?
## Capire un problema
11) Quali sono i possibili input ed i possibili output?
12) Come sono gli input mappati sugli output?
13) Ci sono proprietà matematiche legate al problema che posso sfruttare?
## Analizzare un problema
Un algoritmo ottimale risolve un problema nel minor tempo possibile sfruttando la minor quantità di memoria possibile: occorrerà imparare a leggere un algoritmo e comprenderne la velocità e la memoria utilizzata, perlomeno in maniera stimata.
## Studiare tecniche algoritmiche e strutture dati utili particolari
Problemi apparentemente differenti si possono risolvere con tecniche simili e con strutture dati "famose" come gli alberi di ricerca etc $\dots$ 
# Caso di studio: Fibonacci
Vi sono svariate tecniche atte al calcolo dei numeri di Fibonacci, ma qual è la migliore tra queste?
## Tramite formula diretta
Esiste una formula chiusa per calcolare il termine $F_n$ della sequenza di Fibonacci:
**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXflUbbto13NDyBItuBunY182v-iaTfZgiPv-2eZT7eeoEzL3D1Q09SSOTg6gDXjFG08q-1BnV13rtNNERJazkdG9qBKiBMafy26ZnMeldknricoj8JxlTWKxwA5PkJb--K0ofBYfQ?key=AroKoD3z9P734rDgJLnQwsQJ)**
dove $\varphi$ equivale alla sezione aurea, e $\hat{\varphi}$ al il reciproco della medesima.
Questa formula è ottima su carta, ma richiede calcoli molto precisi con cifre decimali, cosa che su macchina non è possibile ottenere.
### Esempio
$F_3$  = $1.999863$ che arrotondato è pari a $2$ (Corretto!)
$F_18$ = $2583.023$ che arrotondato è $2583$ (non corretto: dovrebbe essere $2584$).
## Approccio ricorsivo
Svalutata l'opzione tramite formula diretta, si potrebbe provare con un approccio ricorsivo (classico).
$$F_n = \begin{cases} 1 & n \leq 2 \\ F_{n-1} + F_{n-2} & n > 2 \end{cases}$$ 
Analizziamo ora questo approccio per comprenderne meglio le performance dal punto di vista della velocità e della memoria.
Per ogni caso diverso da $n \leq 2$ la funzione richiamerà sé stessa due volte, creando quindi un albero di chiamate ricorsive.
Ad esempio, per $n = 7$ si avrebbe:
**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXck-tlDLg7pQvEj3ELiwinURyRBEmwDuMuC-D-sfuTXkF3BTjmLAZLMrToSfHMOpVCp6gzdi-9BFuQr-MldudLwZhAcPcyIyjZF6MMZNhNuvENYWFNGUMdCTwuvNgMuybi9Uiax5w?key=AroKoD3z9P734rDgJLnQwsQJ)**
Com'è possibile osservare, vi sono molte chiamate di funzione, alcune di queste ridondanti (quindi uno spreco di risorse).
### Misurare la memoria utilizzata
Per comprendere quanta memoria utilizza il nostro algoritmo, bisogna anzitutto analizzarne la natura: questo algoritmo è ricorsivo e in quanto tale userà memoria in base al numero massimo di chiamate attive ad un determinato tempo $t$. Il numero massimo di active calls sarà quindi pari al percorso radice-foglia più lungo dell'albero presentato (ossia il ramo di sinistra).
### Misurare la velocità dell'algoritmo: come fare?
Si potrebbe pensare di misurare la velocità di un algoritmo in secondi utilizzati per la sua esecuzione: questa tecnica tuttavia