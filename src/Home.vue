<template>
  <div>
    <v-card>
    <v-toolbar flat>
      <v-toolbar-title>전체 게시글</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-card-text class="grey lighten-4">
        <v-card>

    <v-data-table
      :headers="headers"
      :items="desserts"
      hide-default-footer
      
    ></v-data-table>
    <div class="text-center">
    <v-pagination
      v-model="page"
      :length="4"
      circle
    ></v-pagination>
  </div>
  </v-card>
    </v-card-text>
    
  </v-card>

  </div>
  
</template>

<script>
  export default {
    data () {
      return {
        page: 1,
        headers: [
          {
            text: '번호',
            align: 'start',
            value: 'num',
          },
          { text: '제목', value: 'title' },
          { text: '작성자', value: 'writer' },
          { text: '작성일시', value: 'writedate' },
        ],
        desserts: [
          {
            num: 1,
            title: "게시글1",
            writer: "작성자1",
            writedate: "2023-03-05 03:13",
          },
        ],
      }
    },
  }
</script>
