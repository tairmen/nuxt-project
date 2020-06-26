<template>
  <v-card class="mx-auto">
    <v-list three-line>
      <v-list-item-group>
        <v-list-item class="title-item">
          <v-list-item-content>
            <v-list-item-title>Signals</v-list-item-title>
          </v-list-item-content>
           <v-list-item-icon>
            <v-icon>mdi-chevron-right</v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list-item-group>
      <v-list-item-group class="list" v-model="item" color="primary">
        <v-list-item v-for="(item, i) in items" :key="i">
          <v-list-item-icon>
            <v-icon>mdi-email</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
            <v-list-item-subtitle v-text="item.body"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <div class="text-center">
      <v-pagination v-model="page" :length="totalPages" :total-visible="8"></v-pagination>
    </div>
  </v-card>
</template>
<script>
export default {
  data: () => {
    return {
      item: -1,
      items: [],
      data: [],
      totalPages: 0,
      page: 1,
      pageSize: 2
    };
  },
  watch: {
    page(p) {
      let me = this;
      me.items = me.data.slice(
        (p - 1) * me.pageSize,
        (p - 1) * me.pageSize + 2
      );
    }
  },
  async created() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => {
        this.data = json;
        this.totalPages = this.data.length / this.pageSize;
        this.items = this.data.slice(0, this.pageSize);
      });
    let data = await this.$store.dispatch("getData");
  }
};
</script>
<style scoped>
.title-item {
  min-height: 30px !important;
  height: 45px;
}
.list {
  overflow: auto;
}
</style>