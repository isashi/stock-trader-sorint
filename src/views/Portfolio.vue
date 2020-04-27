<template>
  <div>
    <h1>Portfolio</h1>
    <app-stock v-for="stock in stockPortfolio" :key="stock.id" :stock="stock"></app-stock>
  </div>
</template>

<script>
import Stock from "../components/portfolio/Stock";

export default {
  components: {
    appStock: Stock
  },
  computed: {
    stockPortfolio() {
      return this.$store.getters.stockPortfolio;
    }
  }
};
</script>

<style lang="scss" scoped></style>
