<script>
import AppCard from "./AppCard.vue";

export default {
  data() {
    return {};
  },
  props: {
    cards: Array,
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
        :heart="card.isInFavorites"
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
