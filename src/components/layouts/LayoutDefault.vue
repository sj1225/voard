<template>
    <div>
        <Header></Header>
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>
  
<script>
import Header from '@/components/layouts/Header.vue'
import Footer from '@/components/layouts/Footer.vue'

console.log("LayoutDefault.vue");

export default {
    components: {
        Header,
        Footer,
    }
}
</script>