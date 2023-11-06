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
  },
  data() {
    return {

    }
  }
}

</script>

<template>
<Header> </Header>
</template>

<style lang="scss">
@use './styles/general.scss'

</style>
