<template>
  <div>
    <h1>Stocks</h1>
    <stock v-for="stock in stocks" :key="stock.id" :stock="stock"></stock>
  </div>
</template>

<script>
import Stock from "../components/stocks/Stock";

export default {
  components: {
    Stock
  },
  computed: {
    stocks() {
      return this.$store.getters.stocks;
    }
  }
};
</script>

<style lang="scss" scoped></style>
