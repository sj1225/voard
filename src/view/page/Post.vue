<template>
  <div id="home">
    <!-- 페이지 제목 -->
    <v-toolbar flat>
      <v-toolbar-title>글 작성하기</v-toolbar-title>
      <v-spacer></v-spacer>
        <v-btn @click="insert()" color="primary" style="margin-right: 10px;">작성하기</v-btn>
        <v-btn @click="calcel()">취소</v-btn>
    </v-toolbar>

    <v-card style="padding:20px">
      <v-text-field label="제목" v-model="title"></v-text-field>
      <v-text-field label="작성자" v-model="writer" disabled></v-text-field>
      <v-text-field label="작성일시" v-model="writedate" disabled></v-text-field>
      <v-textarea label="본문" v-model="content"></v-textarea>
    </v-card>
  </div>
</template>
  
<script>
export default {
    data () {
        return {
          title:'',
          writer:'익명',
          writedate:Date(),
          content:'',
        }
    },

    methods: {
      insert() {
        alert("summit");
      },
      calcel() {
        this.$router.push({
        name:"home",
      });
      }
    }
}
</script>