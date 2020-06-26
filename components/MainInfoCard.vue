<template>
  <v-card class="mx-auto" height="100%">
    <v-list-item class="top-items">
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
    <v-img
      class="center-image"
      src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg"
      height="200"
    ></v-img>

    <v-card-text>
      <p style="font-size: 20px">Тарифный план</p>
      <p class="added-params">Оплачен до: {{time}}</p>
      <p class="added-params">Использовано хабов: {{usedHubs}}</p>
      <p class="descriptions-text">{{text}}</p>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      time: '12.04.2021',
      usedHubs: '3/5',
      text: `"My dear fellow," said Sherlock Holmes as we sat on either side of the fire in his lodgings at Baker Street, "life is infinitely stranger than anything which the mind of man could invent. We would not dare to conceive the things which are really mere commonplaces of existence. If we could fly out of that window hand in hand, hover over this great city, gently remove the roofs, and peep in at the queer things which are going on, the strange coincidences, the plannings, the cross-purposes, the wonderful chains of events, working through generation, and leading to the most outre results, it would make all fiction with its conventionalities and foreseen conclusions most stale and unprofitable."
        "And yet I am not convinced of it," I answered. "The cases which come to light in the papers are, as a rule, bald enough, and vulgar enough. We have in our police reports realism pushed to its extreme limits, and yet the result is, it must be confessed, neither fascinating nor artistic."`,
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
  margin: 10px;
}
.top-items {
  margin: 10px;
}
.added-params {
    font-size: 12px;
    margin-top: 4px;
    margin-bottom: 4px;
}
.descriptions-text {
    margin-top: 12px;
}
</style>