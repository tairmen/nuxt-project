<template>
  <v-card class="mx-auto">
    <v-list>
      <v-list-item-group>
        <v-list-item class="title-item">
          <v-list-item-content>
            <v-list-item-title>Messages</v-list-item-title>
          </v-list-item-content>
           <v-list-item-icon>
            <v-icon>mdi-chevron-right</v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list-item-group>
      <v-list-item-group v-model="item" color="primary">
        <v-list-item v-for="(item, i) in items" :key="i">
          <v-img :src="item.url" max-width="3" min-height="40"></v-img>
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
    item: -1,
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
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then(response => response.json())
      .then(json => {
        this.data = json;
        this.totalPages = this.data.length / this.pageSize;
        this.items = this.data.slice(0, this.pageSize);
      });
  }
};
</script>
<style scoped>
.v-list-item__content {
  height: 50px !important;
}
.v-image {
  margin: 2px 15px 5px 2px !important;
}
.v-list-item {
  min-height: 30px !important;
}
.title-item {
  min-height: 30px !important;
  height: 45px;
}
</style>