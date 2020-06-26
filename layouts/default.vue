<template>
  <v-app :dark="setTheme">
    <v-navigation-drawer v-model="drawer" permanent app :mini-variant="mini" mini-variant-width="60">
      <v-list nav dense>
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
          <v-switch v-model="goDark" :label="goDark ? `dark` : `light`"></v-switch>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar color="dark" dense dark app>
      <v-app-bar-nav-icon @click.stop="mini = !mini"></v-app-bar-nav-icon>
      <v-toolbar-title>Page title</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="heartClick">
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
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
  methods: {
    heartClick() {
      this.$store.commit("increment");
      console.log(this.counter);
    },
    gotoCompany() {
      this.$router.push('/')
    },
    gotoHubs() {
      this.$router.push('/locations')
    }
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
</style>
