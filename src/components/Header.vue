<template>
	<nav class="navbar navbar-default">
		<div class="container-fluid">
			<!-- Brand and toggle get grouped for better mobile display -->
			<div class="navbar-header">
				<router-link to="/" class="navbar-brand">Stock Trader™</router-link>
			</div>

			<!-- Collect the nav links, forms, and other content for toggling -->
			<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
				<ul class="nav navbar-nav">
					<router-link tag="li" activeClass="active" to="/portfolio">
						<a>Portfolio</a>
					</router-link>
					<router-link tag="li" activeClass="active" to="/stocks">
						<a>Stocks</a>
					</router-link>
				</ul>
				<strong class="navbar-text navbar-right">Funds: {{ funds | currency }}</strong>

				<ul class="nav navbar-nav navbar-right">
					<li>
						<a href="#" @click="endDay()">End Day</a>
					</li>
					<li
						class="dropdown"
						:class="{ open: isDropdownOpen }"
						@click="isDropdownOpen = !isDropdownOpen"
					>
						<a
							id="dropdownMenuButton"
							href="#"
							class="dropdown-toggle"
							data-toggle="dropdown"
							role="button"
							aria-haspopup="true"
							aria-expanded="false"
						>
							Save & Load
							<span class="caret"></span>
						</a>
						<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
							<li>
								<a href="#" @click="saveData">Save Data</a>
							</li>
							<li>
								<a href="#" @click="loadData">Load Data</a>
							</li>
						</ul>
					</li>
				</ul>
			</div>
			<!-- /.navbar-collapse -->
		</div>
		<!-- /.container-fluid -->
	</nav>
</template>

<script>
export default {
	methods: {
		saveData() {
			const data = {
				funds: this.$store.getters.funds,
				stockPortfolio: this.$store.getters.stockPortfolio,
				stocks: this.$store.getters.stocks,
			};
			this.$http.put("newData.json", data);
		},
		loadData() {
			this.$store.dispatch("loadData");
		},
		endDay() {
			this.$store.dispatch("randomizeStocks");
		},
	},
	computed: {
		funds() {
			return this.$store.getters.funds;
		},
	},
	data() {
		return {
			isDropdownOpen: false,
		};
	},
};
</script>

<style lang="scss" scoped></style>
