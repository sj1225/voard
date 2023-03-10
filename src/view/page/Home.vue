<template>
  <div id="home">
    <!-- 페이지 제목 -->
    <v-toolbar flat>
      <v-toolbar-title>전체 게시글</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-toolbar>

    <!-- 목록 -->
    <v-data-table
      class="row-pointer"
      :headers="headers"
      :items="desserts"
      :page.sync="page"
      :items-per-page="itemsPerPage"
      :search="search"
      hide-default-footer
      disable-filtering
      disable-sort
      @page-count="pageCount = $event"
      @click:row="goBoardDetail"
      style="padding-bottom:10px"
    ></v-data-table>

    <!-- 페이지네이션 -->
    <div class="text-center">
      <v-pagination v-model="page" :length="pageCount"></v-pagination>
    </div>
  </div>
</template>

<script>
import desserts_data from '@/desserts_data'

export default {
  data () {
    return {
      page: 1,          // 선택한 페이지 번호
      pageCount: 0,
      itemsPerPage: 10,  // 화면 당 보여줄 항목 개수
      search: '',       // 검색어

      // 헤더 정보
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

      desserts: desserts_data,
    }
  },
  methods: {
    goBoardDetail(value) {
      console.log(value);
      this.$router.push({
        name:"detail",
        params: { num: value.num,
                  title: value.title,
                  writer: value.writer,
                  writedate: value.writedate,
                  content: value.content,
                },
      });
    },
  }
}
</script>

<style lang="css" scoped>
  .row-pointer >>> tbody tr :hover {
    cursor: pointer;
  }
</style>