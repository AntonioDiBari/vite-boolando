<script>
export default {
  data() {
    return {};
  },
  methods: {
    /**
     * Funzione che restituisce il path assoluto che VUE non riesce a comprendere da solo
     * @param {*} imgName path relativo
     */
    getUrl(imgName) {
      const imgUrl = new URL("../assets/img/" + imgName, import.meta.url);
      return imgUrl.href;
    },
  },
  props: {
    urlImageHover: String,
    urlImage: String,
    badges: Array,
    brand: String,
    nameArticle: String,
    newPrice: String,
    oldPrice: String,
    heart: Boolean,
    id: String,
    indexCard: Number,
  },
  emits: ["show-product"],
};
</script>

<template>
  <div class="cards">
    <img :src="getUrl(urlImageHover)" alt="" class="second-img" />
    <img :src="getUrl(urlImage)" alt="" class="first-img" />
    <span class="hearts" v-if="heart"
      ><font-awesome-icon icon="fa-solid fa-heart"
    /></span>
    <span class="hearts" v-else
      ><font-awesome-icon icon="fa-regular fa-heart"
    /></span>
    <div class="tags">
      <div v-for="badge in badges" :class="badge.type">
        {{ badge.value }}
      </div>
    </div>
    <div class="info">
      <div class="brand">{{ brand }}</div>
      <div @click="$emit('show-product', this.indexCard)" class="nome">
        {{ nameArticle }}
      </div>
      <div class="newprice me-1">{{ newPrice }}</div>
      <div class="oldprice" v-show="oldPrice != '0'">{{ oldPrice }}</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "../styles/partials/mixins" as *;
@use "../styles/partials/variables" as *;
.cards {
  width: calc(100% / 3 - 10px);
  min-width: 250px;
  margin: 40px 0px 40px 0px;
  position: relative;
  .second-img {
    display: none;
  }
  &:hover > .first-img {
    display: none;
  }
  &:hover > .second-img {
    display: inline-block;
  }
  .hearts {
    position: absolute;
    right: 0;
    top: 8px;
    background-color: white;
    font-size: 20px;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    &:hover {
      color: red;
    }
  }
}

.tags {
  position: absolute;
  bottom: 30px;

  .sconto,
  .tag {
    @include badgeStructure();
  }
  .sconto {
    background-color: red;
    margin-right: 5px;
  }
  .tag {
    background-color: green;
  }
}

.info {
  position: absolute;
  .brand,
  .nome {
    display: block;
    cursor: pointer;
  }
  .brand,
  .newprice,
  .oldprice {
    font-size: 10px;
  }
  .nome {
    font-weight: bolder;
    font-size: 12px;
  }
  .newprice {
    color: red;
    font-weight: bolder;
    display: inline-block;
  }
  .oldprice {
    text-decoration: line-through;
    display: inline-block;
  }
}
</style>
