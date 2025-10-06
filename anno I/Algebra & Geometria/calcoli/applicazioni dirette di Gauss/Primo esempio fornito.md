Avendo una matrice che si vuole portare alla forma ridotta (forma scala con tutti i pivot pari ad 1): $$
A = \pmatrix{
2 & 3 & -1 \\
0 & -1 & 3 \\
2 & 2 & 2
}$$
 iniziamo effettuando $R_3 \leftarrow R_3 - R_1$:$$
A' = \pmatrix{
2 & 3 & -1 \\
0 & -1 & 3 \\
0 & -1 & 3
}$$Ora procediamo con $R_3 \leftarrow R_3 - R_2$:$$
A' = \pmatrix{
2 & 3 & -1 \\
0 & -1 & 3 \\
0 & 0 & 0
}$$Ora che abbiamo eliminato la terza riga rendiamo pari ad 1 il pivot della seconda riga, facendo: $R_2 \leftarrow R_2 \cdot -1$:$$
A' = \pmatrix{
2 & 3 & -1 \\
0 & 1 & -3 \\
0 & 0 & 0
}$$Ora rendiamo pari ad $1$ il primo pivot della matrice, con $R_1 \leftarrow R_1 \cdot \frac{1}{2}$:$$
A' = \pmatrix{
1 & \frac{3}{2} & -\frac{1}{2} \\
0 & 1 & -3 \\
0 & 0 & 0
}$$Per finire eliminiamo i valori della prima riga ad eccezione del pivot, facendo $R_1 \leftarrow R_1 \cdot R_2 \cdot \frac{3}{2}$:$$
A' = \pmatrix{
1 & 0 & 4 \\
0 & 1 & -3 \\
0 & 0 & 0
}$$