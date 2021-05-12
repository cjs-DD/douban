<template>
	<div class="daiying">
		<Header />
		<Nav />
		<div class="top-rate">
			<p class="title">最受好评电影</p>
			<div class="top-rate-list">
				<div class="top-rate-item" v-for="item in gettoplist">
					<img :src="item.img" alt="">
					<p class="item-title line-ellipsis">{{item.nm}}</p>
				</div>
			</div>

		</div>
		<div class="moviebox">
			<Movie v-for="item in datalist" title="预约"  :info="item" :key="item.id"></Movie>
		</div>
		<Footer />
	</div>
</template>
<script>
	// @ is an alias to /src
	import axios from "axios"
	import data1 from '../data/即将上映.js'
	import data2 from '../data/近期最受期待.js'
	import Header from '@/components/Header.vue'
	import Footer from '@/components/Footer.vue'
	import Nav from '@/components/Nav.vue'
	import Movie from '@/components/Movie.vue'
	export default {
		name: 'daiying',
		data() {
			return {
				datalist:[]
			}
		},
		components: {
			Header,
			Footer,
			Nav,
			Movie
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
			},
			gettoplist() {
				var data = data2.data;
				data.map(function(item) {
					var str1 = item.img;
					var str = str1.replace("w.h/", "");
					item.img = str;
				})
				return data
			}
		},
		mounted() {
			axios({
			  url:
			    `https://m.maizuo.com/gateway?cityId=440100&pageNum=1&pageSize=10&type=2&k=3622121`,
			  method: 'get',
			  headers: {
			    'X-Client-Info':
			      '{"a":"3000","ch":"1002","v":"5.0.4","e":"1581577409201863463470","bc":"310100"}',
			    'X-Host': ' mall.film-ticket.film.list'
			  }
			}).then(res => {
			  this.datalist = res.data.data.films;
			 this.$store.commit('addmovielist',this.datalist);
			 console.log(this.$store.state.movieList)
			})
		}
	}
</script>
<style scoped="scoped">
	.moviebox {
		margin-bottom: 50px;
	}

	.top-rate {
		width: 100%;
		padding-bottom: 10px;
		margin: 0 10px;
		border-bottom:  10px solid #efefef ;
	}

	.top-rate .title {
		font-size: 14px;
		color: #333;
		margin: 12px 0;
	}

	.top-rate-list {
		width: 100%;
		overflow: scroll;
		white-space: nowrap;
		
	}

	.top-rate-item {
		width: 95px;
		padding: 0 5px;
		text-align: center;
		display: inline-block;
	}

	.top-rate-item img {
		width: 86px;
		height: 115px;
	}

	.item-title {
		width: 100%;
		font-size: 14px;
		font-weight: 700;
		color: #222;
		margin: 5px 0 10px 0;
	}
</style>
