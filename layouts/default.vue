<template>
  <v-app :dark="setTheme">
    <v-navigation-drawer
      v-model="drawer"
      permanent
      app
      :mini-variant="mini"
      mini-variant-width="70"
    >
      <v-list nav dense>
        <v-list-item>
          <v-list-item-title>ADVISOR</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>MY PROFILE</v-list-item-title>
        </v-list-item>
        <v-list-item-group v-model="group" active-class="grey--text text--accent-4">
          <v-list-item @click="gotoCompany">
            <v-list-item-icon>
              <v-icon>mdi-home-city</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Company</v-list-item-title>
          </v-list-item>
          <v-list-item @click="gotoHubs">
            <v-list-item-icon>
              <v-icon>mdi-map-marker</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Locations</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Three</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Four</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
        <v-list-item>
          <v-switch v-model="goDark" class="theme-switch"></v-switch>
          <v-list-item-title>{{goDark ? `Dark` : `Light`}}</v-list-item-title>
          <!-- <v-switch v-model="goDark" :label="goDark ? `dark` : `light`"></v-switch> -->
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar dense app height="65">
      <v-app-bar-nav-icon @click.stop="mini = !mini"></v-app-bar-nav-icon>
      <v-toolbar-title>{{pageName}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-headphones-settings</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-email</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-cog</v-icon>
      </v-btn>
      <v-list width="150" height="61">
        <v-list-item style="height: 48px" @click="userAvatarClick">
          <v-list-item-avatar>
            <v-img src="https://cdn.vuetifyjs.com/images/lists/1.jpg"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>User</v-list-item-title>
            <v-list-item-subtitle>Manager</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-app-bar>

    <nuxt />
  </v-app>
</template>
<script>
export default {
  computed: {
    counter() {
      return this.$store.state.counter;
    },
    setTheme() {
      if (this.goDark === true) {
        return (this.$vuetify.theme.dark = true);
      } else {
        return (this.$vuetify.theme.dark = false);
      }
    },
    pageName() {
      return this.$store.state.pageName;
    }
  },
  data: () => ({
    drawer: true,
    mini: true,
    group: null,
    goDark: true
  }),
  watch: {
    group() {
      this.drawer = false;
    }
  },
  created() {
    this.$store.commit("setPageName", "Консоль");
  },
  methods: {
    gotoCompany() {
      this.$router.push("/");
      this.$store.commit("setPageName", "Консоль");
    },
    gotoHubs() {
      this.$router.push("/locations");
      this.$store.commit("setPageName", "Локации");
    },
    userAvatarClick() {}
  }
};
</script>
<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
.theme-switch {
  margin: 15px 20px 0px 0px;
}
</style>
