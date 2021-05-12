<template>
	<div class="home">
		<Header title="喵星电影"/>
		<Nav/>
		<div class="moviebox">
			<Movie  v-for="item in datalist" title="购票" :info="item" :key="item.id"></Movie>
		</div>
		<Footer />
		
	</div>
</template>
<script>
	// @ is an alias to /src
	import axios from 'axios'
	import data1 from '../data/热映.js'
	import Header from '@/components/Header.vue'
	import Footer from '@/components/Footer.vue'
	import Nav from '@/components/Nav.vue'
	import Movie from '@/components/Movie.vue'
	export default {
		name: 'Home',
		components: {
			Header,
			Footer,
			Nav,
			Movie
		},
		data() {
			return {
				isFixed: true,
				datalist:[],
				actors:[]
			}
		},
		computed: {
			getlist() {
				var data = data1.data;
				data.map(function(item) {
					var str1 = item.img;
					var str = str1.replace("w.h/", "");
					item.img = str;
				})
				return data
			}
			
		},
		methods: {
		  handleClick (data) {
		    this.$router.push(`/detail/${data}`)
		  }
		},
		mounted() {
			axios({
			  url: `https://m.maizuo.com/gateway?cityId=440100&pageNum=1&pageSize=10&type=1&k=3977157`,
			  method: 'get',
			  headers: {
			    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16202931625251838764908545"}',
			    'X-Host': 'mall.film-ticket.film.list'
			  }
			}).then(res => {
			  this.datalist = res.data.data.films;
			  this.$store.commit('setmovielist', res.data.data.films);
			  console.log(this.$store.state.movieList)
			})
			}
			
		
	}
</script>
<style scoped="scoped">
	.moviebox{
		margin-bottom: 50px;
	}
</style>
