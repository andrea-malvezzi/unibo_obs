Scriviamo il sistema associato all'equazione $\left(\lambda_1 + 2\lambda_2, \lambda_1 + k\lambda_2\right) = \left(a, b\right)$:$$
\begin{cases}
\lambda_1 + 2\lambda_2 = a \\
\lambda_1 + k\lambda_2 = b
\end{cases}
$$Ora passiamo alla matrice ad esso associata:$$
A|\underline{b} = \left(\begin{array}{cc|c}
1 & 2 & a \\
1 & k & b
\end{array}\right)
$$Rendiamo tale matrice scala mediante Gauss facendo $R_2 \rightarrow R_1 - R_2$:$$
A|\underline{b} = \left(\begin{array}{cc|c}
1 & 2 & a \\
0 & k - 2 & b - a
\end{array}\right)
$$Occorre ora dividere la risoluzione del sistema in due casistiche: per $k \not = 2$ e per $k = 2$.
### Caso $k \not = 2$ 
Per $k \not = 2, k - 2$ è sempre diverso da $0$, quindi il $rr(A) = rr(A|\underline{b})$. La matrice ha quindi sempre una soluzione per $k \not = 2$.
### Caso $k = 2$
In questo caso il rango righe di $A|\underline{b}$ dipenderà dal valore di $b$: qualora $b$ fosse diverso da $a$ si avrebbe $rr(A) \lt rr(A|\underline{b})$, quindi il sistema non avrebbe soluzione. L'unico caso in cui il rango righe delle due matrici è uguale si ha quando $b = a$.