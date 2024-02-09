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

## Install Bootstrap

- npm i --save bootstrap @popperjs/core
- @import "bootstrap/scss/bootstrap"; nel general.scss (dato che in app.vue lo abbiamo già linkato)
- import \* as bootstrap from "bootstrap"; nel main.js per la logica di bootstrap

## Install FontAwesome

- npm i --save @fortawesome/fontawesome-svg-core
- npm i --save @fortawesome/free-solid-svg-icons //// i --save @fortawesome/free-regular-svg-icons //// i --save @fortawesome/free-brands-svg-icons
- npm i --save @fortawesome/vue-fontawesome@latest-3
- Aggiungi nel main:
  - /_ import the fontawesome core _/
    import { library } from "@fortawesome/fontawesome-svg-core";
  - /_ import font awesome icon component _/
    import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
  - /_ import specific icons _/
    import {fa..} from "@fortawesome/free-regular-svg-icons";
    import {} from "@fortawesome/free-solid-svg-icons";
    import {} from "@fortawesome/free-brands-svg-icons";
  - /_ add icons to the library _/
    library.add(fa..);
- Aggiungi nel main al createApp: app.component("font-awesome-icon", FontAwesomeIcon); (staccando magari app dal .mount)
- Per aggiungere cercare la sintassi che preferisci sull'icon scelta nella sezione VUE

## GIORNO 1

- Descrizione
  Create un nuovo progetto utilizzando Vite e Vue 3 e definite i componenti necessari per strutturare il layout.
  Non esagerate con i componenti: less is more.
  L'esercizio già lo conoscete (html-css-boolando), ma la sfida è suddividerlo in componenti e provare a sfruttare SASS per rendere il nostro stile più leggibile e flessibile (di quali variabili potreste avere bisogno?).

- Bonus
  Popoliamo le voci dell'header (sia le tre voci testuali che le tre icone) dinamicamente.

## GIORNO 2

- Descrizione
  Continuate a lavorare nella stessa repo di ieri.
  Milestone 1
  Create un componente Card predisposto per ricevere dall'esterno le informazioni necessarie alla visualizzazione dei propri elementi (con le props).
  Potete testarlo stampando una singola Card con informazioni statiche.
  Milestone 2
  (Se non lo avete già fatto) definite un array di prodotti nel componente AppMain. Potete prendere spunto dall'array allegato o usarlo direttamente così com'è. Iterate sull'array di prodotti e per ognuno di essi create un componente Card, inviando le informazioni necessarie alla visualizzazione.
- Bonus
  Facciamo in modo che il cuore nella card del prodotto sia colorato o vuoto a seconda del valore della proprietà "isInFavourites".
- Bonus 2
  Spostate i menu dinamici dai componenti AppHeader e AppFooter al componente App. Inviateglieli poi tramite props.
