1. [[Algoritmi Greedy - Esercizi#Esercizio 1 - Viaggio in auto|Esercizio 1 - Viaggio in auto]]
	1. [[Algoritmi Greedy - Esercizi#Esercizio 1 - Soluzione|Soluzione]]
2. 
## Esercizio 1 - Viaggio in auto
Un'auto può percorrere $k$ Km con un litro di carburante, e il serbatoio ha una capacità di $c$ litri. Tale auto deve percorrere un tragitto lungo il quale si trovano $n + 1$ aree di sosta indicate con $0, \dots, n$ con $n \geq 1$. L’area di sosta $0$ si trova all’inizio della strada, mentre l’area di sosta $n$ si trova alla fine.
Indichiamo con $d[i]$ la distanza in Km tra le aree di sosta $i$ e $i + 1$. Nelle $n − 2$ aree di sosta intermedie si trovano delle stazioni di servizio nelle quali è possibile fare il pieno.
- Tutte le distanze e i valori di $k$ e $c$ sono numeri reali positivi; 
- la auto parte dall’area $0$ con il serbatoio pieno, e si sposta lungo la strada in direzione dell’area $n$ senza mai tornare indietro. 
Progettare un algoritmo in grado di calcolare il numero minimo di fermate che sono necessarie per fare il pieno e raggiungere l’area di servizio $n$ senza restare a secco per strada, se ciò è possibile. Nel caso in cui la destinazione non sia in alcun modo raggiungibile senza restare senza carburante, l’algoritmo restituisce $−1$.
### Esercizio 1 - Soluzione
%% TODO: da qui %%