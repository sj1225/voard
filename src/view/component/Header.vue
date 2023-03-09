<template>
<header>
  <v-app-bar dense dark>
    <v-app-bar-title>voard</v-app-bar-title>
  </v-app-bar>
  
  <v-tabs
    dark>
    <v-spacer></v-spacer>
    <v-tab @click="goHome()">
      HOME
    </v-tab>
    <v-tab @click="goPost()">
      POST
    </v-tab>
  <v-spacer></v-spacer>
  </v-tabs>
</header>
</template>

<script>
export default {
  methods:{
    goHome(){
      this.$router.push({
        name:"home",
      });
    },
    goPost(){
      this.$router.push({
        name:"post",
      });
    }
  }
}
</script>