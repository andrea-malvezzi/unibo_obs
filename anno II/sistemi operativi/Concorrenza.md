In un OS si hanno un elevato numero di **processi** eseguiti pressoché contemporaneamente dal processore. Questa esecuzione contemporanea risulterebbe difficile da mantenere senza un apposito modello, ed è per questo che è nato il **modello concorrente**.
## Definizione di Processo
Un processo è un'attività controllata da un programma eseguita da un processore. Ne consegue che il processo NON sia un programma, ma piuttosto una sua istruzione.
> Potremmo pensare al programma come una ricetta e al processo come uno step di quest'ultima.

Ogni processo viene eseguito sempre ad una velocità finita, mai nulla e sconosciuta.
> Questo è detto **Assioma di Finite Progress**.

Un processo può essere *descritto* dalle seguenti componenti:
- la propria immagine di memoria, ovvero la memoria assegnatagli e le strutture dati del O.S. associate ad esso;
- la propria immagine nel processore, contenuta nei registri generali e speciali;
- il proprio stato di avanzamento, come **running**, **waiting** (di un evento esterno come I/O) e **ready** (il processore è occupato ma il processo è pronto ad essere eseguito).

Più processi possono eseguire lo stesso programma (in un sistema multiutente due utenti possono leggere la posta contemporaneamente), ma in tal caso ogni istanza del programma viene considerata un processo a sé stante.
## Diversi tipi di Parallelismo
Esistono due tipi di parallelismo:
- quello **reale**, dove si hanno più core (più chef in cucina);
- quello **apparente**, dove si hanno meno core di quelli necessari, ma ritagliando un time-slice per ogni processo si riesce ad alternarli abbastanza rapidamente da fornire l'illusione del parallelismo.

> **N.B.** i due concetti **non** sono mutualmente esclusivi.
> Avendo ad esempio 16 core, non si potranno eseguire solo 16 processi per volta, ma in ogni core potrebbe essere implementato il parallelismo apparente.

Due programmi si dicono in esecuzione concorrente se sono eseguiti in parallelo l'uno con l'altro.
> Per concorrenza si intende un insieme di notazioni usate per descrivere l'esecuzione parallela di due o più programmi e le tecniche usate per risolvere eventuali problemi di questa natura.

## Gestire processi multipli
Vi sono 3 tecniche principali per la gestione di processi multipli:
- il **multiprogramming**, ovvero l'esecuzione di più processi sullo stesso processore (si parla quindi di parallelismo apparente);
- il **multiprocessing**, ovvero l'esecuzione di processi diversi su processori diversi (quindi parallelismo reale);
- il **distributed processing**, ovvero l'esecuzione di processi diversi su macchine distribuite ed indipendenti tra loro (quindi parallelismo reale, in quanto ad ogni macchina corrisponde un processo).

Nel parallelismo reale si parla di **overlapping**, mentre in quello apparente di **interleaving**. Entrambe le tecniche hanno pressoché le stesse problematiche:
- ogni processo potrebbe dover accedere a delle risorse condivise;
- non si sa in quale momento ogni processo eseguirà una data istruzione, a causa dell'assioma di Finite Progress.

## Race conditions
Un sistema a processi multipli presenta una race condition qualora il risultato finale dipenda dalla temporizzazione con cui vengono eseguiti i processi. Per scrivere un buon programma concorrente, occorre eliminare tali race conditions.