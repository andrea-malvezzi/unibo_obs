$$\begin{cases}\lambda_2 = 0 \\ \lambda_1 + \lambda_4 = 0 \\ \lambda_1 -\lambda_2 + 2\lambda_3 + \lambda_4 = 0\end{cases}$$Passiamo alla matrice associata$$
A|\underline{b} = \left(\begin{array}{cccc|c}
0 & 1 & 0 & 0 & 0 \\ 
1 & 0 & 0 & 0 & 1 \\ 
1 & -1 & 2 & 1 & 0
\end{array}\right)$$e rendiamola scala mediante Gauss: anzitutto, scambiamo $R_1$ ed $R_2$:$$
\left(\begin{array}{cccc|c}
1 & 0 & 0 & 0 & 1 \\ 
0 & 1 & 0 & 0 & 0 \\ 
1 & -1 & 2 & 1 & 0
\end{array}\right)
$$In seguito, annulliamo $\left(3,1\right)$ e $\left(3,2\right)$, facendo prima $R_3 \rightarrow R_1 - R_3$ e poi $R_3 \rightarrow R_3 + R_2$:$$
\begin{array}.
\left(\begin{array}{cccc|c}
1 & 0 & 0 & 0 & 1 \\ 
0 & 1 & 0 & 0 & 0 \\ 
0 & -1 & 2 & 1 & -1
\end{array}\right) \\
\left(\begin{array}{cccc|c}
1 & 0 & 0 & 0 & 1 \\ 
0 & 1 & 0 & 0 & 0 \\ 
0 & 0 & 2 & 1 & -1
\end{array}\right)
\end{array}
$$Ora, dato che il $rr(A|\underline{b}) = 3$ ed il numero di variabili del sistema $n = 4$, si avranno infinite soluzioni.