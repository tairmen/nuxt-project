<template>
  <div class="main-panel">
    <v-card flat class="hubs">
      <v-expansion-panels>
        <v-expansion-panel v-for="(hub, i) in hubs" :key="i">
          <v-expansion-panel-header>{{hub.name}}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-list>
              <v-list-item-group>
                <v-list-item
                  v-for="(device, i) in hub.device"
                  :key="i"
                  @click="deviceClicked(device)"
                >
                  <v-list-item-content>
                    <v-list-item-title v-text="device.name"></v-list-item-title>
                    <v-list-item-subtitle v-text="device.devicetype.name"></v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card>
    <v-card flat class="device-params">
      <v-list>
        <v-subheader>Параметры {{deviceTypeName}}</v-subheader>
        <v-list-item-group class="list-params">
          <v-list-item v-for="(par, ii) in deviceParams" :key="ii">
            <v-list-item-content>
              <v-list-item-title v-text="par.name"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </div>
</template>
<script>
export default {
  props: {
    hubs: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      deviceParams: [],
      deviceTypeName: 'девайса'
    };
  },
  methods: {
    deviceClicked(device) {
      let me = this;
      me.deviceParams = device.devicetype.deviceparam;
      me.deviceTypeName = device.devicetype.name;
      console.log(device);
    }
  }
};
</script>
<style scoped>
.v-list-item__content {
  height: 60px !important;
}
.v-list-item__avatar {
  margin: 5px 15px !important;
}
.v-list-item {
  min-height: 30px !important;
}
.main-panel {
  display: grid;
  height: 95%;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr;
}
.hubs {
  grid-column: 1;
  margin: 20px;
}
.device-params {
  grid-column: 2;
  margin: 10px;;
}
.list-params {
  height: 60vh !important;
  overflow: auto;
}
</style>