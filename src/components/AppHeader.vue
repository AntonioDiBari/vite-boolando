<script>
export default {
  data() {
    return {};
  },
  props: {
    sizeGenders: Array,
    buttons: Array,
  },
};
</script>

<template>
  <header>
    <header class="header">
      <div class="container nav">
        <ul>
          <li v-for="gender in sizeGenders">
            <a href="#">{{ gender }}</a>
          </li>
        </ul>
        <div class="logo"><img src="/boolean-logo.png" alt="" /></div>
        <ul class="buttons">
          <li v-for="button in buttons"><i :class="button"></i></li>
        </ul>
      </div>
    </header>
  </header>
</template>

<style scoped lang="scss">
@use "../styles/partials/mixins" as *;
@use "../styles/partials/variables" as *;
.header {
  background-color: #ff6900;
  height: $headerHeight;
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
