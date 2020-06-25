<template>
  <v-card class="mx-auto">
    <v-list three-line shaped>
      <v-subheader>Messages</v-subheader>
      <v-list-item-group v-model="item" color="primary">
        <v-list-item v-for="(item, i) in items" :key="i">
          <v-list-item-avatar>
            <v-img :src="item.url"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
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
  data: () => ({
    item: 1,
    items: [],
    data: [],
    totalPages: 1,
    page: 1,
    pageSize: 4
  }),
  watch: {
    page(p) {
      let me = this;
      me.items = me.data.slice(
        (p - 1) * me.pageSize,
        (p - 1) * me.pageSize + me.pageSize
      );
    }
  },
  created() {
    let me = this;
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then(response => response.json())
      .then(json => {
        me.data = json;
        me.totalPages = me.data.length / me.pageSize;
        me.items = me.data.slice(0, me.pageSize);
      });
  }
};
</script>
<style scoped>
.v-list-item__content {
  height: 50px !important;
}
.v-list-item__avatar {
  margin: 5px 15px !important;
}
.v-list-item {
  min-height: 30px !important;
}
</style>