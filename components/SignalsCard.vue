<template>
  <v-card class="mx-auto">
    <v-list three-line shaped>
      <v-subheader>Signals</v-subheader>
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
      item: 1,
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
    let me = this;
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => {
        me.data = json;
        me.totalPages = me.data.length / me.pageSize;
        me.items = me.data.slice(0, me.pageSize);
      });
    let data = await me.$store.dispatch("getData");
    console.log(data);
  }
};
</script>
<style scoped>
.list {
  overflow: auto;
}
</style>