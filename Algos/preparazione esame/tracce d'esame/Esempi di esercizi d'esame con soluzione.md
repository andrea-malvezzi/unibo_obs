1. [[Esempi di esercizi d'esame con soluzione#Esercizio 1 - Analisi del costo di un algoritmo ricorsivo|Esercizio 1 - Analisi del costo di un algoritmo ricorsivo]]
	1. [[Esempi di esercizi d'esame con soluzione#Esercizio 1 - Soluzione|Soluzione]]
		1. [[Esempi di esercizi d'esame con soluzione#Esercizio 1 - Soluzione#Analisi del costo di Mistery2|Analisi del costo di Mistery2]]
		2. [[Esempi di esercizi d'esame con soluzione#Analisi del costo di Mistery1|Analisi del costo di Mistery1]]
2. [[Esempi di esercizi d'esame con soluzione#Esercizio 2 - Analisi del costo di un algoritmo ricorsivo|Esercizio 2 - Analisi del costo di un algoritmo ricorsivo]]
	1. [[Esempi di esercizi d'esame con soluzione#Esercizio 2 - Soluzione|Soluzione]]
3. 
## Esercizio 1 - Analisi del costo di un algoritmo ricorsivo
Calcolare il costo computazionale $T(n)$ del seguente algoritmo $\text{Mystery1}$(int $n):$
![[Pasted image 20250621105833.png]]
> ✅ Corretto!
### Esercizio 1 - Soluzione
Anzitutto notiamo come $\text{Mistery1}$ richiami $\text{Mistery2}:$ partiamo quindi con l'analisi di quest'ultima.
#### Analisi del costo di Mistery2
La funzione $\text{Mistery2}$ contiene due chiamate ricorsive. La sua equazione di ricorrenza equivarrà quindi a:
$$T_2(n) = \begin{cases}1 & n = 0 \\ 2 \cdot T_2(\frac{n}{4}) + 1 & n \geq 1 \end{cases}$$che risolvendo con $\text{Master Theorem}$ risulta:
- $a = 2;$
- $b = 4;$
- $\alpha = \log_4{2} = \frac{1}{2};$
- $\beta = 0;$

quindi $\alpha \gt \beta \rightarrow \cal O(\sqrt{n})$.
> **N.B.** la seconda riga del sistema ha questi valori in quanto essendo nella funzione presenti due chiamate, si prende quella con costo maggiore (caso pessimo peggiore), che in questo caso equivale a $2 \cdot T_2(\frac{n}{4})$.

#### Analisi del costo di Mistery1
La funzione $\text{Mistery1}$ contiene una chiamata a $\text{Mistery2}$ e due chiamate ricorsive. Prendiamo il costo maggiore tra le due chiamate ricorsive (che in questo caso sono uguali) e scriviamo quanto segue:$$T_1(n) = \begin{cases}1 & n \leq 1 \\ 2 \cdot T_1(\frac{n}{3}) + \sqrt{n} & n \gt 1\end{cases}$$che con $\text{Master Theorem}$ risulta:
- $a = 2;$
- $b = 3;$
- $\alpha = \log_3{2} = 0.63;$
- $\beta = \frac{1}{2};$

quindi $\beta \gt \alpha \rightarrow \cal O(n^{0.63})$.
## Esercizio 2 - Analisi del costo di un algoritmo ricorsivo
Calcolare il costo computazionale $T(n)$ del seguente algoritmo $\text{Mystery1}$(int $n):$
![[Pasted image 20250621133623.png]]
> ✅ Corretto!
### Esercizio 2 - Soluzione
Partiamo da $\text{Mistery2}:$$$T_2(n) = \begin{cases}c_2 & n = 1 \\ T_2(n - 1) + c_2 & n \not = 1\end{cases}$$questa equazione di ricorrenza non è risolvibile con il $\text{Master Theorem}$, quindi procederemo per iterazione:$$\begin{array}{c}
T_2(n) = (n - 1) + c_2 \\
T_2(n - 1) = (n - 2) + 2 \cdot c_2 \\
T_2(n - 2) = (n - 4) + 4 \cdot c_2 \\
\dots \\
T_2(n - k) = (n - 2 \cdot k) + 2 \cdot k \cdot c_2
\end{array}$$Ora troviamo il punto dove questa iterazione termina, ovvero quando $n - k = 1$. Questo si ha per $k = n - 1$. Sostituiamo quindi questo valore trovato nella formula generalizzata dell'iterazione per trovare l'interruzione:$$T_2(n - n + 1) = (n - 2 \cdot (n - 1)) + 2 \cdot (n - 1) \cdot c_2$$che semplificando risulta: $T_2(1) = -n + 2 + 2 \cdot (n - 1) \cdot c_2$. Ovviamente non dobbiamo risolvere tale equazione, basta notare quali siano i termini dominanti, una volta rimosse eventuali costanti additive e moltiplicative. In questo caso si ha quindi $T_2 \in \cal O(n)$, in quanto $n$ è il termine con grado maggiore.
Ora continuiamo con $\text{Mistery1}:$$$T_1(n) = \begin{cases}1 & n \leq 1 \\ T_1(\frac{n}{2}) + n & n \gt 1\end{cases}$$che risulta risolvibile con il $\text{Master Theorem}:$
- $a = 1;$
- $b = 2;$
- $\alpha = \log_2{1} = 0;$
- $\beta = 1;$

da cui $\beta \gt \alpha \rightarrow T_1(n) = \cal O(n)$.