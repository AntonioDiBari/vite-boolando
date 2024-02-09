<script>
import AppCard from "./AppCard.vue";

export default {
  data() {
    return {
      cards: [
        {
          image: "1.webp",
          imageHover: "1b.webp",
          brand: "Levi's",
          nameArticle: "RELAXED FIT TEE UNISEX",
          newPrice: "14,99€",
          oldPrice: "29,99€",
          isInFavorites: true,
          badges: [
            {
              type: "sconto",
              value: "-50%",
            },
            {
              type: "tag",
              value: "Sostenibilità",
            },
          ],
        },
        {
          image: "2.webp",
          imageHover: "2b.webp",
          brand: "Guess",
          nameArticle: "ROSES TEE",
          newPrice: "20,99€",
          oldPrice: "29,99€",
          isInFavorites: true,
          badges: [
            {
              type: "sconto",
              value: "-30%",
            },
          ],
        },
        {
          image: "3.webp",
          imageHover: "3b.webp",
          brand: "Come Zucchero Filato",
          nameArticle: "VOGLIA DI COLORI PASTELLO",
          newPrice: "129,99€",
          oldPrice: "184,99€",
          isInFavorites: false,
          badges: [
            {
              type: "sconto",
              value: "-30%",
            },
          ],
        },
        {
          image: "4.webp",
          imageHover: "4b.webp",
          brand: "Levi's",
          nameArticle: "TEE UNISEX",
          newPrice: "14,99€",
          oldPrice: "29,99€",
          isInFavorites: false,
          badges: [
            {
              type: "sconto",
              value: "-50%",
            },
            {
              type: "tag",
              value: "Sostenibilità",
            },
          ],
        },
        {
          image: "5.webp",
          imageHover: "5b.webp",
          discount: "0",
          brand: "Maya Deluxe",
          nameArticle: "STRIPE BODICE",
          newPrice: "99,99€;",
          oldPrice: "0",
          isInFavorites: true,
          // badges: [],
        },
        {
          image: "6.webp",
          imageHover: "6b.webp",
          brand: "Esprit",
          nameArticle: "MAGLIONE - BLACK",
          newPrice: "29,99€;",
          oldPrice: "0",
          isInFavorites: true,
          badges: [
            {
              type: "tag",
              value: "Sostenibilità",
            },
          ],
        },
      ],
    };
  },
  components: { AppCard },
};
</script>

<template>
  <main>
    <section class="container vetrina">
      <app-card
        v-for="card in cards"
        :urlImageHover="card.imageHover"
        :urlImage="card.image"
        :badges="card.badges"
        :brand="card.brand"
        :nameArticle="card.nameArticle"
        :newPrice="card.newPrice"
        :oldPrice="card.oldPrice"
      />
    </section>
  </main>
</template>

<style scoped lang="scss">
@use "../styles/partials/mixins" as *;
@use "../styles/partials/variables" as *;

.vetrina {
  padding-top: $headerHeight; /* ALTEZZA HEADER */
  margin-bottom: $headerHeight;
  @include flexBetweenCenter();
  flex-wrap: wrap;
}
</style>
