1. [[Hash Tables - Esercizi#Esercizio 1 - Operazioni con Ispezione Lineare|Esercizio 1 - Operazioni con Ispezione Lineare]]
	1. [[Hash Tables - Esercizi#Esercizio 1 - Soluzione|Soluzione]]
2. [[Hash Tables - Esercizi#Esercizio 2 - Operazioni con Ispezione Lineare|Esercizio 2 - Operazioni con Ispezione Lineare]]
	1. [[Hash Tables - Esercizi#Esercizio 2 - Soluzione|Soluzione]]
3. [[Hash Tables - Esercizi#Esercizio 3 - Gestione Collisioni con Ispezione Lineare|Esercizio 3 - Gestione Collisioni con Ispezione Lineare]]
	1. [[Hash Tables - Esercizi#Esercizio 3 - Soluzione|Soluzione]]
4. [[Hash Tables - Esercizi#Esercizio 4 - Gestione collisioni con Ispezione Lineare|Gestione collisioni con Ispezione Lineare]]
	1. [[Hash Tables - Esercizi#Esercizio 4 - Soluzione|Soluzione]]
5. [[Hash Tables - Esercizi#Esercizio 5 - Operazioni con Chaining|Esercizio 5 - Operazioni con Chaining]]
	1. [[Hash Tables - Esercizi#Esercizio 5 - Soluzione|Soluzione]]
## Esercizio 1 - Operazioni con Ispezione Lineare
Si ha una tabella Hash $T$ di dimensione $m = 11$, inizialmente vuota, con gestione delle collisioni per indirizzamento aperto e [[Strutture dati#Ispezione Lineare|ispezione lineare]]: $$h(x, i) = (h'(x) + i) \ mod \ m$$dove $h'(x) = x \ mod \ m$.
Mostrare lo stato della tabella dopo le seguenti operazioni in ordine:
1. $\text{insert}(\text{T}, 50)$;  
2. $\text{insert}(\text{T}, 20)$;
3. $\text{insert}(\text{T}, 10)$; 
4. $\text{insert}(\text{T}, 60)$; 
5. $\text{insert}(\text{T}, 40)$; 
6. $\text{insert}(\text{T}, 45)$.
### Esercizio 1 - Soluzione
1. Calcoliamo il valore hashato di $50$ tramite la funzione $h'$: $$h'(50) = 50 \ mod \ 11 = 6$$Inseriamo quindi $50$ nella settima cella. Ora abbiamo $$T = [\text{NIL},\text{NIL},\text{NIL},\text{NIL},\text{NIL},\text{NIL}, 50, \text{NIL},\text{NIL},\text{NIL},\text{NIL}]$$
2. Calcoliamo il valore hashato di $20$:$$h'(20) = 20 \mod \ 11 = 9$$Inseriamo quindi $20$ nella decima posizione.
3. Calcoliamo il valore hashato di $10$, che risulta $10$. Inseriamo quindi $10$ nell'ultima posizione.
4. Calcoliamo il valore hashato di $60$, che risulta $5$. Inseriamo $60$ nella sesta posizione.
5. Calcoliamo il valore hashato di $40$, che risulta $7$. Inseriamo $40$ nell'ottava posizione.
6. Calcoliamo il valore hashato di $45$, che risulta $1$. Inseriamo $45$ nella seconda posizione.
## Esercizio 2 - Operazioni con Ispezione Lineare
Continuare con le seguenti operazioni sulla Tabella Hash $T$ precedente:
1. $\text{insert}(\text{T}, 85)$;  
2. $\text{insert}(\text{T}, 55)$;
3. $\text{delete}(\text{T}, 40)$; 
4. $\text{delete}(\text{T}, 45)$; 
5. $\text{insert}(\text{T}, 15)$.
### Esercizio 2 - Soluzione
1. Calcoliamo l'Hash di $85 \rightarrow 8$. Inseriamo $85$ nella nona posizione.
2. Calcoliamo l'Hash di $55 \rightarrow 0$. Inseriamo $55$ nella prima posizione.
3. Cancellare il $40$ libera l'ottava posizione.
4. Cancellare il $45$ libera la seconda posizione.
5. Calcoliamo l'Hash di $15 \rightarrow 4$. Inseriamo $15$ nella quinta posizione.
## Esercizio 3 - Gestione Collisioni con Ispezione Lineare
Continuare con le seguenti operazioni sulla Tabella Hash $T$ precedente:
1. $\text{insert}(\text{T}, 83)$;
2. $\text{delete}(\text{T}, 55)$;
3. $\text{insert}(\text{T}, 90)$;
4. $\text{delete}(\text{T}, 60)$.
### Esercizio 3 - Soluzione
1. Hash di $83: 6$. Settima posizione occupata da $60$: uso $h(x, i)$, partendo da $i = 1$ per iterare a partire dall'ottava posizione.$$h(83, 1) = 7 \ mod \ 11 = 7$$l'ottava posizione non risulta più occupata, in quanto conteneva $40$, che è stato cancellato. Inseriamo $83$ in ottava posizione.
2. Cancello il $55$ liberando la prima posizione.
3. Hash di $90:2$. Terza posizione libera, inseriamoci il $90$.
4. Cancello il $60$ liberando la sesta posizione.
## Esercizio 4 - Gestione collisioni con Ispezione Lineare
Continuare con le seguenti operazioni sulla Tabella Hash $T$ precedente:
1. $\text{insert}(\text{T}, 5);$
2. $\text{insert}(\text{T}, 13);$
3. $\text{insert}(\text{T},17);$
4. $\text{delete}(\text{T},90);$
5. $\text{delete}(\text{T},13);$
6. $\text{delete}(\text{T},50);$
7. $\text{delete}(\text{T},17);$
### Esercizio 4 - Soluzione
1. Hash di $5:5$. La sesta posizione contiene un valore cancellato, quindi vi inserisco $5$.
2. Hash di $13:2$. La terza posizione contiene già $90$. Provo con la quarta, che è vuota, quindi vi inserisco $13$.
3. Hash di $17:6$. La settima posizione (e tutte quelle che seguono) è già occupata. Arrivato alla fine di $T$, riparto dall'inizio, terminando quando trovo uno spazio oppure torno alla settima posizione. La prima cella risulta vuota, quindi vi inserisco $17$.
4. Libero la terza posizione.
5. Libero la quarta posizione.
6. Libero la settima posizione.
7. Libero la prima posizione.
## Esercizio 5 - Operazioni con Chaining
Si consideri una Tabella Hash $T$ di dimensione $m = 10$, inizialmente vuota, con gestione delle collisioni per concatenamento e funzione Hash basata sul metodo della moltiplicazione:$$h(x) = \lfloor m(x \cdot C - \lfloor x \cdot C \rfloor)\rfloor $$con $C = 0.25$ (ovvero $\frac{1}{4}$).
Mostrare lo stato della tabella dopo le seguenti operazioni in ordine:
1. $\text{insert}(\text{T}, 50);$
2. $\text{insert}(\text{T}, 20);$
3. $\text{insert}(\text{T}, 10);$
4. $\text{insert}(\text{T}, 60);$
5. $\text{insert}(\text{T}, 40);$
6. $\text{insert}(\text{T}, 45);$
### Esercizio 5 - Soluzione
1. Hash di $50:5$. Creo una nuova $\text{Lista}$ in sesta posizione con il $50$ in testa.
2. Hash di $20:0$. Creo una nuova $\text{Lista}$ in prima posizione con il $20$ in testa.
3. Hash di $10:5$. La testa della Lista contenente $50$ diventa ora $10$ e appendo $50$ a questo nodo (per non iterare su tutta la Lista, rendendo l'operazione più rapida).
4. Hash di $60:0$. La testa della Lista contenente $20$ diventa ora $60$ e appendo a questa il $20$.
5. Hash di $40:0$. La testa della Lista contenente $60$ diventa ora $40$ e appendo a questa il $60$.
6. Hash di $45:2$. Creo una nuova $\text{Lista}$ in terza posizione con il $45$ in testa.