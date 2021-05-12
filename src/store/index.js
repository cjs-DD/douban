import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		information: [],
		show: false,
		wantid: [],
		movieList: [],
		moviedetaillist: []
	},
	getters: {
		brands: state => {
			const brands = state.productList.map(item => item.brand);
			return getFilterArray(brands);
		},
		colors: state => {
			const colors = state.productList.map(item => item.color);
			return getFilterArray(colors);
		}
	},
	mutations: {
		// 添加商品列表
		setmovielist(state, data) {
			state.movieList = data;
		},
		addmovielist(state, data) {
			for (var i of data) {
				var flag=false;
				for (var j of state.movieList) {
					if (i.filmId == j.filmId) {
						flag = true;
					}
				}
				console.log(flag)
				if(!flag) {
					console.log(i)
					state.movieList.push(i);
				}
			}
		},
		isshow(state) {
			state.show = !state.show;
		},
		setwantList(state, data) {
			state.wantList = data;
		},
		// 添加到购物车
		addlist(state, id) {
			// 先判断购物车是否已有，如果有，数量+1
			var val
			var flag
			state.wantid.map(function(item) {
				if (item.filmId == id) {
					val = item;
					flag = true
				}
			})
			if (!val) {
				state.movieList.map(function(item) {
					if (item.filmId == id) {
						state.wantid.push(item)
					}
				})
			}
		},
		setmoviedetaillist(state, data) {
			state.moviedetaillist = data;
		},
		addmoviedetaillist(state, data) {
			state.moviedetaillist.push(data)
		}
	},
	actions: {},
	modules: {}
})
