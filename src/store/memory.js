import axios from 'axios';
export default {
	namespaced: true,
	state: {
		number: '0',
	}, 
	mutations: {
		SET_NUMBER(state, num) {
			state.number = num;
		},
	},
	actions: {
		async loadNumber({ commit }) {
			const response = await axios.get('http://localhost:3000/getNum');
			const num = response.data;
			commit('SET_NUMBER', num);
		},
		async sendNumber({ commit }, ans) {
			await axios.put(`http://localhost:3000/updateNum/${ans}`);
            commit('SET_NUMBER', ans);
		},
	},
};