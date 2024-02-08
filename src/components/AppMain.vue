<script>
export default {
  data() {
    return {
      cards: [
        {
          image: "1.webp",
          imageHover: "1b.webp",
          discount: "-50%",
          sostenibilita: true,
          brand: "Levi's",
          nameArticle: "RELAXED FIT TEE UNISEX",
          newPrice: "14,99€",
          oldPrice: "29,99€",
        },
        {
          image: "2.webp",
          imageHover: "2b.webp",
          discount: "-30%",
          sostenibilita: false,
          brand: "Guess",
          nameArticle: "ROSES TEE",
          newPrice: "20,99€",
          oldPrice: "29,99€",
        },
        {
          image: "3.webp",
          imageHover: "3b.webp",
          discount: "-30%",
          sostenibilita: false,
          brand: "Come Zucchero Filato",
          nameArticle: "VOGLIA DI COLORI PASTELLO",
          newPrice: "129,99€",
          oldPrice: "184,99€",
        },
        {
          image: "4.webp",
          imageHover: "4b.webp",
          discount: "-50%",
          sostenibilita: true,
          brand: "Levi's",
          nameArticle: "TEE UNISEX",
          newPrice: "14,99€",
          oldPrice: "29,99€",
        },
        {
          image: "5.webp",
          imageHover: "5b.webp",
          discount: "0",
          sostenibilita: false,
          brand: "Maya Deluxe",
          nameArticle: "STRIPE BODICE",
          newPrice: "99,99€;",
          oldPrice: "0",
        },
        {
          image: "6.webp",
          imageHover: "6b.webp",
          discount: "0",
          sostenibilita: true,
          brand: "Esprit",
          nameArticle: "MAGLIONE - BLACK",
          newPrice: "29,99€;",
          oldPrice: "0",
        },
      ],
    };
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
};
</script>

<template>
  <main>
    <section class="container vetrina">
      <div v-for="card in cards" class="cards">
        <img :src="getUrl(card.imageHover)" alt="" class="second-img" />
        <img
          :src="getUrl(card.image)"
          alt=""
          class="first-img"
        /><!-- GALLERY DA 2 FOTO -->
        <span class="hearts">&hearts;</span>
        <div class="tags">
          <!-- SCONTISTICA -->
          <div class="sconto" v-show="card.discount != '0'">
            {{ card.discount }}
          </div>
          <div class="sostenibilita" v-show="card.sostenibilita">
            Sostenibilit&aacute;
          </div>
        </div>
        <div class="info">
          <span class="brand">{{ card.brand }}</span>
          <span class="nome">{{ card.nameArticle }}</span>
          <span class="newprice">{{ card.newPrice }}</span>
          <span class="oldprice" v-show="card.oldPrice != '0'">{{
            card.oldPrice
          }}</span>
        </div>
      </div>
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
  .sostenibilita {
    @include badgeStructure();
  }
  .sconto {
    background-color: red;
    margin-right: 5px;
  }
  .sostenibilita {
    background-color: green;
  }
}

.info {
  position: absolute;
  .brand,
  .nome {
    display: block;
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
  }
  .oldprice {
    text-decoration: line-through;
  }
}
</style>
