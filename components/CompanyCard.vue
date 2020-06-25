<template>
  <v-card class="mx-auto">
    <v-list-item>
      <v-list-item-avatar color="grey"></v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="headline">Sportlife</v-list-item-title>
      </v-list-item-content>
      <v-list-item-action>
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="grey" dark v-bind="attrs" v-on="on">Settings</v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in settingsItems"
              :key="index"
              @click="menuItemClick(item)"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-list-item-action>
    </v-list-item>
    <v-img src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg" height="194"></v-img>

    <v-card-text>
      <div class="my-4 subtitle-1">Tarif</div>
      <div class="my-4 subtitle-2">Use</div>
      <div class="my-4 subtitle-2">Use</div>
      <div>{{text}}</div>
    </v-card-text>
    <v-card-actions>
      <v-btn text color="deep-grey accent-4">Read</v-btn>
      <v-btn text color="deep-grey accent-4">Bookmark</v-btn>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-share-variant</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      settingsItems: [
        { title: "Setting 1" },
        { title: "Setting 2" },
        { title: "Setting 3" },
        { title: "Setting 4" }
      ]
    };
  },
  methods: {
    menuItemClick(item) {
      console.log("clicked", item.title);
    }
  }
};
</script>
<style scoped>
</style>