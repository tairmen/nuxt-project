<template>
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
</template>

<script>
export default {};
</script>

<style scoped>
.main-content {
  display: grid;
  height: 95%;
  margin: 10px;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 22% 32% 38%;
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
