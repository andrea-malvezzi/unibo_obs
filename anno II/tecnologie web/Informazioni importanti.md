## Accedere alle macchine DISI
Per effettuare l'accesso allle macchine DISI dove caricare il progetto web, scrivere in CLI:
```CLI
> ssh [nome.cognome@macchina_ateneo]
```
e procedere con il login.
> N.B. per attivare l'account, occorrerà richiederne uno tramite l'apposito form dal sito di unibo.

In seguito, navigare nella cartella home tramite comando cd per poi accedere alla cartella web.
## Richiedere un account Linux per operare sulle macchine DISI
C'è tutto sulle slide. Duh.
## Il Docker del server
Il docker del server non ha accesso a Javascript, perciò non potrà lanciare Node. Per usare quest'ultimo occorrerà utilizzare un ennesima macchina virtuale all'interno della prima.
## Errori Comuni
> Comandi node o npm non trovati.
> Soluzione : l'installazione di npm non è nel PATH. Inserirla risolverà.