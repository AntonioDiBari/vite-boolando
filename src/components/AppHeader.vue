<script></script>

<template>
  <header>
    <header class="header">
      <div class="container nav">
        <ul>
          <li><a href="#">Donna</a></li>
          <li><a href="#">Uomo</a></li>
          <li><a href="#">Bambini</a></li>
        </ul>
        <div class="logo"><img src="/boolean-logo.png" alt="" /></div>
        <ul class="buttons">
          <li><i class="fa-regular fa-user"></i></li>
          <li><i class="fa-regular fa-heart"></i></li>
          <li><i class="fa-solid fa-bag-shopping"></i></li>
        </ul>
      </div>
    </header>
  </header>
</template>

<style scoped lang="scss">
@use "../styles/partials/mixins" as *;
.header {
  background-color: #ff6900;
  height: 45px;
  color: white;
  position: fixed;
  left: 0;
  right: 0;
  z-index: 1;
  box-shadow: 0 1px 4px 0 #555;
  ul,
  .nav {
    @include flexBetweenCenter();
  }
  ul li {
    font-size: 10px;
    font-weight: bold;
    cursor: pointer;
    margin-right: 10px;
  }
  .logo {
    width: 100px;
  }
}
</style>
