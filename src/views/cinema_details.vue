<template>
	<div class="container">
		<Header :title="datalist.cinemaData.nm"></Header>
		<div class="location-block">
			<div class="location-info ">
				<div class="title ">{{datalist.cinemaData.nm}}</div>
				<div class="location ">
					{{datalist.cinemaData.addr}}
				</div>
			</div>
			<div class="location-icon">
				<i class="iconfont icon-weibiaoti-3"></i>
			</div>
		</div>
		<div class="cn-box">
			<div class="cinema-box" :style="{'transform':claleft}">
				<div class="cn-item" v-for="(item,index) in imglist">
					<img :class="imgindex==index?'active1':''" :data-index="index" :src="item" alt="" @click="handles">
				</div>
			</div>
		</div>
		<div class="cinema-info">
			<div class="movie-name">
				<span class="name">{{movies.nm}}</span>
				<span class="small">{{movies.sc}}分</span>
			</div>
			<div class="desc">
				{{movies.desc}}
			</div>
		</div>
		<div class="tab">
			<ul class="tab-nav">
				<li @click="handlestab(index,item1)" v-for="(item1,index) in movies.shows" :class="currentTab==index?'active':''">{{item1.dateShow}}</li>
			</ul>
		</div>
		<div class="seat-list">
			<div class="box-flex" v-for="(item2,index) in seatlist.plist">
				<div class="time-block">
					<p class="beign">{{item2.tm}}</p>
					<p class="end">{{item2.tm}}离场</p>
				</div>
				<div class="info-block">
					<p class="lan">{{item2.lang}} {{item2.tp}}</p>
					<p class="hall">{{item2.th}}</p>
				</div>
				<div class="vipPrice">
					￥<span class="d">{{item2.vipPrice}}</span>
				</div>
				<div class="button-block">
					<div class="btn">购票</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Header from '@/components/Header.vue'
	import data1 from "../data/影院详情.js"
	export default {
		name: 'Home',
		data() {
			return {
				currentTab: 0,
				imgindex: 0,
				datalist: [],
				imglist: [],
				movielist: [],
				movies: [],
				claleft: 0
			};
		},
		components: {
			Header
		},
		methods: {
			toggleTab: function(tab) {
				this.currentTab = tab;
			},
			handles: function(e) {
				var x = window.innerWidth / 2 - e.target.offsetLeft - e.target.offsetWidth / 2;
				this.claleft = 'translateX(' + x + 'px)';
				this.movies = this.movielist[e.target.dataset.index];
				this.imgindex = e.target.dataset.index;

			},
			handlestab: function(index, item1) {
				console.log(index)
				this.currentTab = index;
			}
		},
		computed: {
			seatlist() {
				console.log(this.currentTab)
				return this.movies.shows[this.currentTab]
			}
		},
		mounted() {
			this.datalist = data1.data;
			var res = data1.data.showData.movies;
			var list = res.map(function(item) {
				var str1 = item.img;
				var str = str1.replace("w.h/", "");
				return str
			})
			this.imglist = list;
			this.movielist = res;
			this.movies = this.movielist[0];
			var x = window.innerWidth / 2 - 10 - 32.5;
			this.claleft = 'translateX(' + x + 'px)';
		}
	}
</script>

<!-- <style scoped="scoped" src="./../static/styles/milk.css"></style> -->
<style scoped="scoped">
	.location-block {
		margin-top: 50px;
		height: 70px;
		border-bottom: 1px solid #999999;
		padding: 10px;
		display: flex;
	}

	.location-block .location-info {
		width: 80%;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.title {
		font-size: 17px;
		font-weight: 700;
		color: #333;
		margin-bottom: 5px;
	}

	.location {
		width: 90%;
		font-size: 13px;
		color: #999;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}

	.location-block .location-icon {
		flex: 20%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

	}

	.location-block .icon-weibiaoti-3 {
		font-size: 30px;
		color: #73b8ff;
		padding: 0 20px;
		border-left: 1px solid #d8d8d8;
	}

	.cn-box {
		width: 100%;
		background-color: #727679;
		height: 135px;
		display: flex;
		align-items: center;
	}

	.cinema-box {
		width: 100%;
		display: flex;
		transform: translate3d(0px, 0px, 0px);
		transition-duration: 200ms;
	}

	.cn-item {
		height: 100px;
		margin: 0 10px;
		display: flex;
		align-items: center;
	}

	.cinema-box img {
		width: 65px;
		height: 95px;

	}

	.cinema-info {
		width: 100%;
		height: 70px;
		padding: 10px;
		border-bottom: 1px solid #e1e1e1;
		text-align: center;
	}

	.cinema-info .name {
		font-size: 17px;
		color: #333;
		font-weight: 700;
		margin-right: 5px;
	}

	.cinema-info .small {
		font-weight: 700;
		color: #ffb400;
		font-size: 16px;
	}

	.cinema-info .desc {
		margin-top: 2px;
		font-size: 13px;
		color: #999;
		margin: 2px;
	}

	.tab .tab-nav {
		display: flex;
		border-bottom: 1px solid #e1e1e1;
	}

	.tab .tab-nav li {
		margin: 10px;
		font-size: 13px;
		padding: 5px 0;
		color: #666;
	}

	.tab li.active {
		color: red;
		border-bottom: 2px solid red;
	}

	.box-flex {
		height: 70px;
		width: 100%;
		padding: 10px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-bottom: 1px solid #e1e1e1;
	}

	.box-flex .time-block,
	.box-flex .button-block {
		flex: 20%;
		height: 100%;
	}

	.box-flex .vipPrice,
	.box-flex .info-block {
		flex: 30%;
		height: 100%;
	}

	.beign {
		font-size: 20px;
		color: #333;
	}

	.end {
		margin-top: 3px;
		color: #999;
		font-size: 11px;
	}

	.hall {
		margin-top: 7px;
		color: #999;
		font-size: 11px;
	}

	.vipPrice {
		font-size: 11px;
		color: #f03d37;
	}

	.vipPrice .d {

		margin-top: 1px;
		font-size: 19px;
	}

	.button-block {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.btn {
		width: 60%;
		height: 27px;
		line-height: 27px;
		font-size: 12px;
		background-color: #f03d37;
		color: #fff;
		border-radius: 4px;
		text-align: center;
	}

	.active1 {
		transform: scale(1.15);
		border: 2px solid #fff;
	}
</style>
font-family: PingFangSC-Regular,Hiragino Sans GB,sans-serif;
-webkit-user-select: none;
-webkit-font-smoothing: antialiased;
-webkit-text-size-adjust: 100%;
font-size: 14px;
color: #777;
-webkit-tap-highlight-color: transparent;
position: relative;
width: 100%;
height: 100%;
z-index: 1;
display: flex;
transition-property: transform,-webkit-transform;
box-sizing: content-box;
transform: translate3d(-262.5px, 0px, 0px);
transition-duration: 0ms;
