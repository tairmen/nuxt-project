<template>
  <v-card class="mx-auto">
      <v-card-subtitle>Statistic</v-card-subtitle>
    <v-card-text>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions class="justify-center">
      <v-btn block text>Download</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    value: [100, 200, 300, 250, 270, 350, 300]
  })
};
</script>
<style scoped>
</style>