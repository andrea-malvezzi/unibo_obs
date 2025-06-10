1. [[Programmazione Dinamica - Esercizi#Esercizio 1 - Sottoinsieme di valori con somma pari ad x|Esercizio 1 - Sottoinsieme di valori con somma pari ad x]]
	1. [[Programmazione Dinamica - Esercizi#Esercizio 1 - Soluzione|Soluzione]]
2. 
## Esercizio 1 - Sottoinsieme di valori con somma pari ad x
E dato un insieme $S = \{s_1, \dots, s_n\}$ di $n$ numeri naturali ed un numero naturale $x$. Vogliamo capire se esiste un sottoinsieme di valori $V \subseteq S$ tale che la sommatoria dei valori in $V$ sia uguale a $x$, ovvero $\sum_{s∈V}{s = X}$.
### Esercizio 1 - Soluzione
Questo problema rientra nella famiglia dei problemi $P(i, j)$, dove $i \in \{0, \dots, n\}$ e $j \in \{0, \dots, x\}$ (ci possono essere al massimo $x$ elementi in un insieme $V$, dato che stiamo lavorando con numeri naturali).
Occorre quindi trovare un sottoinsieme $\{s_1, \dots, s_i\}$ con sommatoria $j$.
Per risolvere questo problema servirà procedere induttivamente rispetto ad $i:$ questo significa far variare il valore di questa variabile partendo da $i = 1$.