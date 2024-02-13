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
  - //_ import the fontawesome core _//
    import { library } from "@fortawesome/fontawesome-svg-core";
  - //_ import font awesome icon component _//
    import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
  - //_ import specific icons _//
    import {fa..} from "@fortawesome/free-regular-svg-icons";
    import {} from "@fortawesome/free-solid-svg-icons";
    import {} from "@fortawesome/free-brands-svg-icons";
  - //_ add icons to the library _//
    library.add(fa..);
- Aggiungi nel main al createApp: app.component("font-awesome-icon", FontAwesomeIcon); (staccando magari app dal .mount)
- Per aggiungere cercare la sintassi che preferisci sull'icon scelta nella sezione VUE

## Mocking API (json-server)

- npm install json-server
- creata la cartella db in src, ci aggiungiamo il file index.json
- npx json-server ./src/db/index.json
- mettere l'indirizzo del file index.json popolato con un database (avrà sempre id) provvisorio da cui fare chiamate asincrone
- Questo comando sopra apre il canale di ascolto verso questo file .json, solo dopo le richieste su Postman funzioneranno
- Copio il link della richiesta che mi serve e la richiamo con Axios

## Install Axios

- npm i axios
- import axios from 'axios'; /// In OGNI componente dove ci servirà va importato così
- axios.get(LINK CHIAMATA).then((response) => {
  myArray = response.data;});

# Global State

- creata la cartella store in src, ci aggiungiamo il file index.js
- incolliamo :
  - import { reactive } from 'vue'
  - export const store = reactive({DATA reattivi e globali})
- nel componente dove vorremo avere accesso ai DATA in global state dovremo importare:
  - import { store } from "./store/index";
  - dichiararlo nel return di data semplicemente con store
  - ora avremo accesso reattivamente ai DATA globali, non si usa il this.store per richiamare ma basta store. Anche se lo abbiamo dichiarato nei data
    avremo accesso comunque, invece se usassimo il this. perderemmo la reattività di VUE
