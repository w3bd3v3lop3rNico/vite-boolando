<script>
// import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';


export default {
  components: {
    Header,
    Main,
    Footer,
  }
}

</script>

<template>
  <section class="header">
    <Header />
  </section>

  <Main />
  <Footer />
</template>

<style lang="scss">
@use './styles/general.scss';
@use './styles/partials/colors-palette.scss';

.header {
  background-color: #FF6900;
}
</style>
