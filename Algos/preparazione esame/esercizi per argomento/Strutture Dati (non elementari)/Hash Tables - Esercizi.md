1. [[Hash Tables - Esercizi#Esercizio 1 - Visualizzare una Hash Table|Esercizio 1 - Visualizzare una Hash Table]]
	1. [[Hash Tables - Esercizi#Esercizio 1 - Soluzione|Soluzione]]
2. [[Hash Tables - Esercizi#Esercizio 2 - Inserire e Rimuovere in una Hash Table|Esercizio 2 - Inserire e Rimuovere in una Hash Table]]
	1. [[Hash Tables - Esercizi#Esercizio 2 - Soluzione|Soluzione]]
3. [[Hash Tables - Esercizi#Esercizio 3 - Collisioni in una Hash Table|Esercizio 3 - Collisioni in una Hash Table]]
	1. [[Hash Tables - Esercizi#Esercizio 3 - Soluzione|Soluzione]]
4. 
## Esercizio 1 - Inserire in una Hash Table
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
## Esercizio 2 - Inserire e Rimuovere in una Hash Table
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
## Esercizio 3 - Collisioni in una Hash Table
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
## Esercizio 4 - 
%% TODO: prosegui da qui %%