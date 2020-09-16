import Vue from 'vue'
import Vuex from 'vuex'
import memory from './memory.js';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		memory,
	},
});