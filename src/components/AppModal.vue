<script>
import { store } from "../store/index.js";
export default {
  data() {
    return { store };
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
    closeModal() {
      store.modal.show = false;
    },
  },
};
</script>

<template>
  <div class="layover">
    <div class="modale">
      <div class="modal-img">
        <img :src="getUrl(store.modal.image)" alt="" />
      </div>
      <div class="modal-info">
        <ul>
          <li>
            Brand prodotto:
            <span class="modal-text">{{ store.modal.brand }}</span>
          </li>
          <li>
            Nome prodotto:
            <span class="modal-text">{{ store.modal.nameArticle }}</span>
          </li>
          <li>
            prezzo prodotto:
            <span
              class="modal-text text-decoration-underline fst-italic text-success"
              >{{ store.modal.price }}</span
            >
          </li>
          <li>
            <div class="tags">
              <div v-for="badge in store.modal.badges" :class="badge.type">
                {{ badge.value }}
              </div>
            </div>
          </li>
        </ul>

        <font-awesome-icon
          @click="closeModal()"
          icon="fa-solid fa-xmark"
          class="close-win"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "../styles/partials/mixins" as *;
@use "../styles/partials/variables" as *;
.layover {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba($color: #000000, $alpha: 0.4);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  .modale {
    position: relative;
    display: flex;
    background-color: white;
    width: 600px;
    border-radius: 10px;
    .modal-img {
      width: 50%;
      img {
        border-radius: 10px 0px 0px 10px;
      }
    }
    .modal-info {
      margin: 20px;
      width: 50%;
      font-size: 12px;
      .modal-text {
        font-size: 1rem;
        font-weight: bold;
      }
    }
  }
  .close-win {
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
    font-size: 1rem;
  }
}
@include tagsStructure();
</style>
