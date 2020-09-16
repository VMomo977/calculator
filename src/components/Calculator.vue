<template>
	<div>
		<v-container mt-5 grid-list-md class="calculator-shell">
			<v-layout row wrap>
				<v-flex xs12>
					<v-card>
						<v-toolbar color="blue-grey darken-4">
							<v-toolbar-title class="white--text">
								{{ appName }}
							</v-toolbar-title>
						</v-toolbar>
						<v-card-text class="py-4 blue-grey lighten-4">
							<v-container grid-list-md text-xs-center>
								<v-layout row wrap>
									<calculator-display :formula="formula">
									</calculator-display>
									<calculator-button
										v-for="(button, btnIdx) in buttons"
										:click-event-name="clickEventName"
										:color="button.length > 1 ? button[1] : ''"
										:key="btnIdx"
										:symbol="button[0]"
										class="flex xs3"
										@calculator-button-click='processButtonClick'
									>
									</calculator-button>
								</v-layout>
							</v-container>
						</v-card-text>
					</v-card>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>

<script>
import CalculatorDisplay from '@/components/CalculatorDisplay.vue';
import CalculatorButton from '@/components/CalculatorButton.vue';
import { mapState } from 'vuex';

export default {
	name: 'Calculator',
	components: {
		CalculatorDisplay,
		CalculatorButton,
	},
	data: function() {
		return {
			appName: 'Calculator',
			buttons: [
				['AC', 'red darken-3'], ['CE', 'red darken-3'], ['MS', 'red darken-3'], ['MR', 'red darken-3'], 
				['7'], ['8'], ['9'], ['÷'],
				['4'], ['5'], ['6'], ['x'],
				['1'], ['2'], ['3'], ['-'],
				['0'], ['.'], ['='], ['+'],
			],
			clickEventName: 'calculator-button-click',
			formula: '0',
			isLoading: false,
		};
	},
	computed: {
		...mapState('memory', {
			ans: 'number',
		}),
	},
	methods: {
		async processButtonClick(symbol) {
			let validFormula;
			switch (symbol) {
				case 'AC':
					return this.setFormula('0');
				case 'CE':
					validFormula = this.formula.slice(0, this.formula.length - 1);
					if (validFormula.length === 0) validFormula = '0';
					return this.setFormula(validFormula);
				case 'MS':
					validFormula = this.formula.replace(/÷/g, '/').replace(/\x/g, '*');
					this.setFormula(eval(validFormula) + '');
					this.$store.dispatch("memory/sendNumber", this.formula);
					return  this.setFormula(eval(validFormula)  + '');
				case 'MR':
					await this.$store.dispatch("memory/loadNumber");
					return this.setFormula(eval(this.ans) + '');
				case '=':
					// No consecutive operators
					if (this.validateEntry(this.formula, symbol)) {
						validFormula = this.formula.replace(/÷/g, '/').replace(/\x/g, '*');
						return this.setFormula(eval(validFormula) + '');
					}
					// No consecutive operators: +=, -=, /=, x=, so delete the unnecessary + or - or / or x operator
					validFormula = this.formula.slice(0, -1);
					validFormula = validFormula.replace(/÷/g, '/').replace(/\x/g, '*');
					return this.setFormula(eval(validFormula) + '');
				default:
					if (this.validateEntry(this.formula, symbol)) return this.setFormula(this.formula + symbol);
		}
	},
		setFormula(formula) {
			// Should not start with 0
			this.formula = formula.replace(/^[0]*([^0]+)$/, '$1');
		},
		validateEntry(formula, symbol) {
			let expectedFormula = formula + symbol;
			let pattern = '';
			switch (symbol) {
				case '.':
					// More than one .
					if (expectedFormula.match(/\.[\d]*\./)) return false;
					break;
				case '+':
				case 'x':
				case '÷':
					// Should not start
					if (expectedFormula === '0' + symbol) return false;

					// Consecutive operators
					pattern = new RegExp(`[\\+\\-\\÷\\x][\\` + symbol + `]`);
					if (expectedFormula.match(pattern)) return false;
					break;
				case '-':
					// -- not allowed, x- or ÷- are ok
					//if (expectedFormula.match(/\-\-/)) return false;
					if (expectedFormula.match(/--/)) return false;
					break;
				case '=':
					// Consecutive operators
					pattern = new RegExp(`[\\+\\-\\÷\\x][\\` + symbol + `]`);
					if (expectedFormula.match(pattern)) return false;
					break;
			}
			return true;
		}
	},
	mounted () {
		// Support keyboard entry
		window.addEventListener('keyup', event => {
			if (event.key.match(/^[\d\\+\\-\\.\\=]$/)) return this.processButtonClick(event.key);
			if (event.key === '*') return this.processButtonClick('x');
			if (event.key === '/') return this.processButtonClick('÷');
			if (event.key === 'Delete') return this.processButtonClick('AC');
			if (event.key === 'Backspace') return this.processButtonClick('CE');
			if (event.key === 'Enter') return this.processButtonClick('=');
		});
	}
}
</script>

<style scoped>
	.calculator-shell {
	max-width: 500px;
	}
</style>