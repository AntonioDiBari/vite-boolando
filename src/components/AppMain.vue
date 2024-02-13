<script>
import AppCard from "./AppCard.vue";

export default {
  data() {
    return {};
  },
  methods: {
    handleMainClick(indexCard) {
      this.$emit("show-product-main", indexCard);
    },
  },
  props: {
    cards: Array,
  },
  components: { AppCard },
  emits: ["show-product-main"],
};
</script>

<template>
  <main>
    <section class="container vetrina">
      <app-card
        v-for="(card, indexCard) in cards"
        :urlImageHover="card.imageHover"
        :urlImage="card.image"
        :badges="card.badges"
        :brand="card.brand"
        :nameArticle="card.nameArticle"
        :newPrice="card.newPrice"
        :oldPrice="card.oldPrice"
        :heart="card.isInFavorites"
        :id="card.id"
        :indexCard="indexCard"
        @show-product="handleMainClick"
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
