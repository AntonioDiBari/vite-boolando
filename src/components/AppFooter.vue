<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
  <footer class="foot">
    <section class="container footer">
      <div class="info-foot">
        <span class="find-us">Booland S.r.l.</span>
        <ul class="ads">
          <li><a href="#">Informazioni legali</a></li>
          <li><a href="#">Informativa sulla privacy</a></li>
          <li><a href="#">Diritto di recesso</a></li>
        </ul>
      </div>
      <div class="social">
        <span class="find-us">Trovaci anche su</span>
        <div class="ads">
          <i class="fa-brands fa-square-twitter"></i>
          <i class="fa-brands fa-square-facebook"></i>
          <i class="fa-brands fa-square-instagram"></i>
          <i class="fa-brands fa-square-pinterest"></i>
          <i class="fa-brands fa-square-youtube"></i>
        </div>
      </div>
    </section>
  </footer>
</template>

<style scoped lang="scss">
@use "../styles/partials/mixins" as *;
.foot {
  background-color: #1a1a1a;
  height: 70px;
  color: white;
  .footer {
    @include flexBetweenCenter();
    font-size: 10px;
    .info-foot,
    .social {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .social {
      align-items: center;
    }
  }
}

.ads {
  @include flexBetweenCenter();
  i {
    font-size: 14px;
    margin: 0px 3px 0 3px;
    cursor: pointer;
  }
  li {
    margin-right: 10px;
  }
}
.find-us {
  font-size: 10px;
  margin-bottom: 5px;
}
</style>
