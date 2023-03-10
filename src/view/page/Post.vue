<template>
  <div id="home">
    <!-- 페이지 제목 -->
    <v-toolbar flat>
      <v-spacer></v-spacer>
        <v-btn @click="calcel()" style="margin-right: 10px;">취소</v-btn>
        <v-btn style="margin-right: 10px;">임시저장</v-btn>
        <v-btn @click="insert()" color="primary">작성하기</v-btn>
    </v-toolbar>

    <v-card style="padding:20px">
      <v-text-field label="제목" v-model="title"></v-text-field>
      <v-text-field label="작성자" v-model="writer" disabled></v-text-field>
      <v-text-field label="작성일시" v-model="writedate" disabled></v-text-field>
      <v-textarea rows="13" label="본문" v-model="content"></v-textarea>
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