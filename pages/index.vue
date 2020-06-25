<template>
  <v-app :dark="setTheme" id="inspire">
    <div>
      <v-app-bar color="dark" dense dark>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Page title</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon @click="heartClick">
          <v-icon>mdi-heart</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </v-app-bar>
      <v-navigation-drawer v-model="drawer" absolute left temporary>
        <v-list nav dense>
          <v-list-item>
            <v-list-item-title>Tarif</v-list-item-title>
          </v-list-item>
          <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
            <v-list-item>
              <v-list-item-title>One</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Two</v-list-item-title>
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
      <v-main>
        <div class="main-content">
          <div class="company-panel">
            <CompanyCard />
          </div>
          <div class="statistic-panel">
            <StatisticCard />
          </div>
          <div class="signals-panel">
            <SignalsCard />
          </div>
          <div class="messages-panel">
            <MessagesCard />
          </div>
        </div>
      </v-main>
    </div>
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
    drawer: false,
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
    }
  }
};
</script>

<style scoped>
.main-content {
  display: grid;
  margin: 10px;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 25% 35% 35%;
}
.company-panel {
  grid-row: 1 / 4;
  grid-column: 1;
}
.statistic-panel {
  grid-row: 1;
  grid-column: 2;
}
.signals-panel {
  grid-row: 2;
  grid-column: 2;
}
.messages-panel {
  grid-row: 3;
  grid-column: 2;
}
</style>
