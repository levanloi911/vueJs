
<script>
import Header from './components/header/Header.vue';
import Footer from './components/footer/Footer.vue';
import axios from 'axios';
export default {
  components:{
    Header,
    Footer
  },
};
</script>

<template>
  <Header></Header>
  <div style="min-height: calc(100vh - 270px);">
    <router-view></router-view>
  </div>
  <Footer></Footer>
</template>



