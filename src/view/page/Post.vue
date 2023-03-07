<template>
  <div id="home">
    <!-- 페이지 제목 -->
    <v-toolbar flat>
      <v-toolbar-title>글 작성하기</v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- 작성버튼 넣기 -->
    </v-toolbar>

    제목 <v-text-field></v-text-field>
    작성자 <v-text-field></v-text-field>
    게시일시 <v-text-field></v-text-field>
    본문 <v-textarea></v-textarea>
    <p></p>
  </div>
</template>
  
<script>
export default {
    data () {
        return {
        
        }
    },

    methods: {
    }
}
</script>