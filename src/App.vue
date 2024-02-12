<script>
import axios from "axios";
import { store } from "./store/index";
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  data() {
    return {
      store,
      /* HEADER DATA */
      sizeGenders: ["Donna", "Uomo", "Bambini"],
      buttons: [
        "fa-regular fa-user",
        "fa-regular fa-heart",
        "fa-solid fa-bag-shopping",
      ],
      /* MAIN DATA */

      // cards: [
      //   {
      //     image: "1.webp",
      //     imageHover: "1b.webp",
      //     brand: "Levi's",
      //     nameArticle: "RELAXED FIT TEE UNISEX",
      //     newPrice: "14,99€",
      //     oldPrice: "29,99€",
      //     isInFavorites: true,
      //     badges: [
      //       {
      //         type: "sconto",
      //         value: "-50%",
      //       },
      //       {
      //         type: "tag",
      //         value: "Sostenibilità",
      //       },
      //     ],
      //   },
      //   {
      //     image: "2.webp",
      //     imageHover: "2b.webp",
      //     brand: "Guess",
      //     nameArticle: "ROSES TEE",
      //     newPrice: "20,99€",
      //     oldPrice: "29,99€",
      //     isInFavorites: true,
      //     badges: [
      //       {
      //         type: "sconto",
      //         value: "-30%",
      //       },
      //     ],
      //   },
      //   {
      //     image: "3.webp",
      //     imageHover: "3b.webp",
      //     brand: "Come Zucchero Filato",
      //     nameArticle: "VOGLIA DI COLORI PASTELLO",
      //     newPrice: "129,99€",
      //     oldPrice: "184,99€",
      //     isInFavorites: false,
      //     badges: [
      //       {
      //         type: "sconto",
      //         value: "-30%",
      //       },
      //     ],
      //   },
      //   {
      //     image: "4.webp",
      //     imageHover: "4b.webp",
      //     brand: "Levi's",
      //     nameArticle: "TEE UNISEX",
      //     newPrice: "14,99€",
      //     oldPrice: "29,99€",
      //     isInFavorites: false,
      //     badges: [
      //       {
      //         type: "sconto",
      //         value: "-50%",
      //       },
      //       {
      //         type: "tag",
      //         value: "Sostenibilità",
      //       },
      //     ],
      //   },
      //   {
      //     image: "5.webp",
      //     imageHover: "5b.webp",
      //     discount: "0",
      //     brand: "Maya Deluxe",
      //     nameArticle: "STRIPE BODICE",
      //     newPrice: "99,99€;",
      //     oldPrice: "0",
      //     isInFavorites: true,
      //     // badges: [],
      //   },
      //   {
      //     image: "6.webp",
      //     imageHover: "6b.webp",
      //     brand: "Esprit",
      //     nameArticle: "MAGLIONE - BLACK",
      //     newPrice: "29,99€;",
      //     oldPrice: "0",
      //     isInFavorites: true,
      //     badges: [
      //       {
      //         type: "tag",
      //         value: "Sostenibilità",
      //       },
      //     ],
      //   },
      // ],
      /* FOOTER DATA */
      footLinks: [
        "Informazioni legali",
        "Informativa sulla privacy",
        "Diritto di recesso",
      ],
      adsLogos: [
        "fa-brands fa-square-twitter",
        "fa-brands fa-square-facebook",
        "fa-brands fa-square-instagram",
        "fa-brands fa-square-pinterest",
        "fa-brands fa-square-youtube",
      ],
    };
  },
  methods: {
    fetchCards() {
      axios.get(`${store.fetchCardsURI}/cards`).then((response) => {
        store.cards = response.data;
      });
    },
  },
  created() {
    this.fetchCards();
  },

  components: { AppHeader, AppMain, AppFooter },
};
</script>

<template>
  <AppHeader :sizeGenders="sizeGenders" :buttons="buttons"></AppHeader>
  <AppMain :cards="store.cards"></AppMain>
  <AppFooter :footLinks="footLinks" :adsLogos="adsLogos"></AppFooter>
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
