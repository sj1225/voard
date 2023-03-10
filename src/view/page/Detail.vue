<template>
  <div id="home">
    <!-- 페이지 제목 -->
    <v-toolbar flat>
      <v-toolbar-title>글 조회하기</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn style="margin-right: 10px;">이전글</v-btn>
      <v-btn style="margin-right: 10px;">다음글</v-btn>
      <v-btn @click="calcel()">목록</v-btn>
    </v-toolbar>

    <v-card style="padding:20px">
      <v-text-field label="제목" v-model="title" disabled></v-text-field>
      <v-text-field label="작성자" v-model="writer" disabled></v-text-field>
      <v-text-field label="작성일시" v-model="writedate" disabled></v-text-field>
      <v-textarea auto-grow rows="10" label="본문" v-model="content" disabled></v-textarea>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "detail",
  data() {
    return {
      title : this.$router.params,
      writer : '',
      writedate : '',
      content : '',
    }
  },
  methods: {
      calcel() {
        this.$router.push({
        name:"home",
      });
      }
    },
};
</script>
