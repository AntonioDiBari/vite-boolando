import { reactive } from "vue";

export const store = reactive({
  fetchCardsURI: "http://localhost:3000",
  cards: [],
  modal: {
    show: false,
    image: "",
    brand: "",
    nameArticle: "",
    price: "",
    badges: {},
  },
});
