<template>
  <v-card class="mx-auto" height="100%">
    <v-list-item class="top-items">
      <v-list-item-avatar color="grey"></v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="headline">{{name}}</v-list-item-title>
      </v-list-item-content>
      <v-list-item-action>
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on">Settings</v-btn>
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
    <v-img class="center-image" :src="image" height="200"></v-img>

    <v-card-text>
      <v-form>
        <v-container>
          <v-row>
            <v-col cols="12" sm="8" md="6">
              <v-text-field hide-details label="Description" :value="description" outlined></v-text-field>
            </v-col>
            <v-col cols="12" sm="8" md="6">
              <v-text-field hide-details label="Manager" :value="manager" outlined></v-text-field>
            </v-col>
            <v-col cols="12" sm="8" md="6">
              <v-text-field hide-details label="Phone" :value="phone" outlined></v-text-field>
            </v-col>
            <v-col cols="12" sm="8" md="6">
              <v-text-field hide-details label="Email" :value="email" outlined></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    manager: {
      type: String,
      default: ""
    },
    phone: {
      type: String,
      default: ""
    },
    email: {
      type: String,
      default: ""
    },
    image: {
      type: String,
      default: "https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
    }
  },
  data() {
    return {
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
.center-image {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
.top-items {
  margin-left: auto;
  margin-right: auto;
  width: 70%;
}
</style>