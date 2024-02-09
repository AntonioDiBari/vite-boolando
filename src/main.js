import { createApp } from "vue";

/* import js per bootstrap */
import * as bootstrap from "bootstrap";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
/* import specific icons */
import {
  faSquareTwitter,
  faSquareFacebook,
  faSquareInstagram,
  faSquarePinterest,
  faSquareYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faHeart as fasFaHeart,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHeart as farFaHeart,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
/* add icons to the library */
library.add(
  fasFaHeart,
  farFaHeart,
  faUser,
  faBagShopping,
  faSquareTwitter,
  faSquareFacebook,
  faSquareInstagram,
  faSquarePinterest,
  faSquareYoutube
);

import App from "./App.vue";

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
