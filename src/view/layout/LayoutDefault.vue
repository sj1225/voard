<template>
  <v-app>
    <Header></Header>
    <v-main>
      <router-view></router-view>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>
  
<script>
import Header from '@/view/component/Header.vue'
import Footer from '@/view/component/Footer.vue'

export default {
    components: {
        Header,
        Footer,
    }
}
</script>