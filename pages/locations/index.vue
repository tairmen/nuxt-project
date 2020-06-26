<template>
  <v-main>
    <v-tabs v-model="tab">
      <v-tab>Location</v-tab>
      <v-tab>Hubs</v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item>
        <CompanyCard
          v-if="Boolean(loaded)"
          :name="data.name"
          :description="data.description"
          :manager="data.manager"
          :phone="data.phone"
          :email="data.email"
          :image="locImage"
        />
      </v-tab-item>
      <v-tab-item>
        <HubsList v-if="Boolean(loaded)" :hubs="hubs" />
      </v-tab-item>
    </v-tabs-items>
  </v-main>
</template>
<script>
import HubsList from "./HubsList.vue";

export default {
  data() {
    return {
      tab: 0,
      data: null,
      locImage: "",
      loaded: false,
      hubs: null
    };
  },
  components: {
    HubsList
  },
  async created() {
    let me = this;
    me.data = await me.$store.dispatch("getData");
    if (me.data.fs && me.data.fs.length > 0) {
      me.locImage =
        "http://api.dev.advisorscada.com/storage/" + me.data.fs[0].dir;
    }
    me.hubs = me.data.hub;
    me.loaded = true;
  }
};
</script>