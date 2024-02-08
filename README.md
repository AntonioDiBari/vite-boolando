# VITE + VUE

## Creazione di un nuovo progetto

1. Crea una nuova cartella con il nome del progetto
2. Apri la cartella in VSCode
3. Apri un terminale da VSCode ed esegui il comando

```bash
npm create vite@latest .
```

4. Pubblica la repo su GitHub con il nome dell'esercizio

## Installazione SASS

1. Rimuovi l'import del file `style.css` dal file `main.js`
2. Rimuovi il file `style.css`
3. Esegui il comando

```bash
npm i --save-dev sass
```

4. Crea il seguente scaffolding per i file scss:

```plaintext
src
|
| styles
| |
| | general.scss
| | partials
| | |
| | | \_mixins.scss
| | | \_variables.scss
```

5. importa il file `general.scss` in `App.vue`. <br>
   Dovrai usare la direttiva `@use` e il tag `<style>` non dovrà avere l'attributo `scoped`.

6. importa i file parziali nel file `general.scss`. <br>
   Dovrai usare la direttiva `@use` ed aggiungere `as *`

## GIORNO 1

- Descrizione
  Create un nuovo progetto utilizzando Vite e Vue 3 e definite i componenti necessari per strutturare il layout.
  Non esagerate con i componenti: less is more.
  L'esercizio già lo conoscete (html-css-boolando), ma la sfida è suddividerlo in componenti e provare a sfruttare SASS per rendere il nostro stile più leggibile e flessibile (di quali variabili potreste avere bisogno?).

- Bonus
  Popoliamo le voci dell'header (sia le tre voci testuali che le tre icone) dinamicamente.
