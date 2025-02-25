data: $25/02/2025$
## Il master theorem
[vedi appunti Chiara e slide]
Il master theorem è un approccio per risolvere ricorrenze nella forma $T(n) = aT(n/b) + f(n), a \geq 1 \text{ e } b \gt 1$.
Confronteremo il rate di crescita della funzione $f(n)$ con quello della funzione $n^{\log_b{a}}$ , in maniera seguente:
$$$$
1) Se $\alpha \gt \beta$ allora $T(n) = \Theta(n^\alpha)$ 
2) Se $\alpha = \beta$ allora $T(n) = \Theta(n^\alpha \log{n})$
3) Se $\alpha \lt \beta$ allora $T(n) = \Theta(n^\beta)$ 
Esempio 1:
$$T(n) = \begin{cases}1 & n = 1 \\ T(\frac{n}{2}) + c & n \gt 1\end{cases}$$
Abbiamo $a = 1, b = 2, \alpha = \log_b{a} = \log_2{1} = 0, \beta = 0$.
$$\alpha = \beta \Rightarrow T(n) = \Theta(n^\alpha \log{n}) = \Theta(\log{n})$$
Esempio 2:
$$T(n) = \begin{cases}1 & n = 1 \\ T(\frac{n}{2}) + n & n \gt 1)\end{cases}$$Abbiamo $a = 1, b = 2, \alpha = \log_b{a} = \log_2{1} = 0, \beta = 1$.
$$\alpha \lt \beta \Rightarrow T(n) = \Theta(n^\beta) = \Theta(n)$$Esempio 3:
$$T(n) = \begin{cases}1 & n = 1 \\ 3T(\frac{n}{4} + n^2 & n \gt 1)\end{cases}$$Abbiamo $a = 3, b = 4, \alpha = \log_b{a} = \log_4{3}, beta = 2$. Sapendo che $\alpha \lt 1$, scriviamo:$$a \lt \beta \Rightarrow T(n) = \Theta(n^\beta) = \Theta(n^2)$$
### Esempio d'esercizio d'esame
![[Pasted image 20250225114530.png]]
Partiamo analizzando la funzione $Mistery2$. (Come ricavo l'equazione di ricorrenza da una funzione ricorsiva?) Scriviamone l'equazione di ricorrenza, considerando che richiamiamo la funzione stessa (quindi aggiungo $T^{\prime}$ con input pari a quello presente nell'algoritmo) e che l'algoritmo contiene un ciclo for da $1$ ad $n$ (quindi costo non lineare pari ad $n$):
$T^{\prime}(n) = \begin{cases}1 & n \leq 1 \\ T{\prime}(\frac{n}{1.5}) + n & n \gt 1\end{cases}$ e troviamo: $a = 1, b = 1.5, \alpha = \log_b{a} = \log_{1.5}{1} = 0, \beta = 1$. Quindi:
$$\alpha \lt \beta \Rightarrow T(n) = \Theta(n^\beta) = \Theta(n)$$
Analizziamo ora $Mystery1$. Questa funzione non è ricorsiva, quindi non potrò scrivere l'equazione di ricorrenza. Potremmo quindi procedere con due approcci: scrivendo l'equazione che corrisponde alla somma dei costi delle operazioni nella funzione, oppure $\dots$?
$$T(n) = \stackrel{\text{prima iterazione}}{\Theta(2)} + \stackrel{\text{seconda iterazione}}{\Theta(4)} + \stackrel{\text{terza iterazione}}{\Theta(6)} + \ \dots \ + \Theta(2k) = \Theta(2 \sum_{i = 1}^{k}{i}) = \Theta(k^2) = \Theta(\stackrel{\text{3 in quanto ho n/3 nel ciclo}}{\log_3{n}^2})$$Cambiamo esempio:
$\dots$ inserisci esempio qui!
$$T(n) = \begin{cases}1 & n \leq 0 \\ T(\frac{n}{4}) + 1 & n \gt 0\end{cases}$$
Troviamo: $a = 1, b = 4, \alpha = \log_4{1} = 0, \beta = 0 \Rightarrow \alpha = \beta \Rightarrow T(n) = \Theta(n^\alpha \log{n}) = \Theta(\log{n})$.
$$T(n) = \Theta(\log{2}) + \Theta(\log{2}^2) + \Theta(\log{2}^3 + \ \dots \ + \Theta(\log{2}^n)) = \Theta(log{2} + \log{2}^2 + \log{2}^3 + \ \dots \ + \log{2}^n) = \Theta(\sum_{i = 1}^n{\log{2}^i}) = \Theta(\log{2} \cdot \sum_{i = 1}^n{i} = \Theta(n^2)$$Oppure potrei anche scrivere:
$$T(n) = \Theta(\log{2}) + \Theta(\log{2}^2) + \ \dots \ + \Theta(\log{2}^n) \leq n \Theta(n) \Rightarrow T(n) = O(n^2) $$

Cambiamo esempio:
$\dots$ inserisci esempio qui!
$$T^{\prime}(n) = \begin{cases}1 & n \leq 0 \\ 2T^{\prime}(\frac{n}{4} + 1 & n \gt 0)\end{cases}$$Ora troviamo: $a = 2, b = 4, \alpha = \log_4{2} = \frac{1}{2}, \beta = 0 \Rightarrow \alpha \gt \beta \Rightarrow T^{\prime}(n) = \Theta(n^\frac{1}{2}) = \Theta(\sqrt{n})$.
Ora troviamo l'equazione di ricorrenza di $Mistery1$:
$$T(n) = \begin{cases}1 & n \leq 0 \\ 4T\end{cases}$$