<template>
	<div>
		<v-flex xs12 class="mb-2 text-xs-right">
			<v-text-field solo readonly :value="formulaInput" class="formula-input">
			</v-text-field>
			<div class="formula mt-1 mr-3" v-html="formula">
			</div>
		</v-flex>
	</div>
</template>

<script>
export default {
	name: "CalculatorDisplay",
	components: {

	},
	props: {
		formula: {
			default: ''
		}
	},
	data() {
		return {
		}
	},
	computed: {
		formulaInput () {
			return this.formula.match(/[\\-]?[\d\\.]+[\\+\\-\\x\\÷]*$/);
		}
	},
	methods: {
		buttonClick (symbol) {
			console.log('todo: buttonclick', symbol)
		}
	}
}
</script>

<style>
	.formula {
		height: 20px;
	}
	.formula-input input {
		font-size: 2rem;
		text-align: right;
	}
</style>