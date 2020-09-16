<template>
	<div>
		<v-btn dark :color="color" block large @click="click">
			{{ symbol }}
		</v-btn>
	</div>
</template>

<script>
export default {
	name: 'CalculatorButton',
	components: {

	},
	props: {
		clickEventName: {
			type: String,
			default: 'click'
		},
		color: {
			type: String,
			default: 'grey darken-3'
		},
		symbol: {
			default: ''
		}
	},
	methods: {
		click () {
			this.$emit(this.clickEventName, this.symbol);
		}
	}
}
</script>
<style>
</style>