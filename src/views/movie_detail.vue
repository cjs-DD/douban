<template>
	<div v-if="dataInfo" class="detail">
		<Header :title="dataInfo.name"></Header>
		<div class="movie_info">
			<div class="movie-img">
				<img :src="dataInfo.poster" alt />
			</div>
			<div class="movie-desc">
				<div class="nm">
					<h2>{{dataInfo.name}}</h2>
				</div>
				<div class="other-info">
					<div class="film-category grey-text">{{dataInfo.category}}</div>
					<div class="film-premiere-time grey-text">{{dataInfo.premiereAt | datafilter}}待定</div>
					<div class="film-nation-runtime grey-text">{{dataInfo.nation}} | {{dataInfo.runtime}}分钟</div>
					<div class="btn">
						<button v-show="!dataInfo.isPresale" @click="handlebtn">
						<i class="iconfont icon-aixin"></i>
						<span>想 看</span>
						</button>
						<button  v-show="dataInfo.isPresale" @click="handlebtn" :class="{'btnshow':dataInfo.isPresale}">
						<span>已想看</span>
						</button>
					</div>
				</div>
			</div>
		</div>
		<div class="movie-detail">
			<div class="title">
				<div class="text">简介</div>
				<div class="icon" v-show="isshow">收起<i class="iconfont icon-xiangshang" @click="handleshow"></i></div>
				<div class="icon" v-show="!isshow">展开<i class="iconfont icon-xiangxia" @click="handleshow"></i></div>
			</div>
			<p :class="{'text-info':!isshow}">{{dataInfo.synopsis}}</p>
		</div>
		<div class="actors">
			<p class="actors-title-text">演职人员</p>
			<div class="top-rate-list">
				<div class="top-rate-item" v-for="item in dataInfo.actors">
					<img :src="item.avatarAddress" alt="">
					<p class="item-title line-ellipsis">{{item.name}}</p>
				</div>
			</div>
		</div>
		<div class="photos">
			<p class="photos-text">剧照</p>
			<div class="top-rate-list">
				<div class="top-rate-item" v-for="item in dataInfo.photos">
					<img :src="item" alt="">
					<p class="item-title line-ellipsis">{{item.name}}</p>
				</div>
			</div>
			
		</div>
	</div>
</template>
<script>
	import axios from "axios"
	import Header from '@/components/Header.vue'
	export default {
		data() {
			return {
				dataInfo: null,
				isshow: false

			}
		},
		components: {
			Header
		},
		methods:{
			handleshow(){
				this.isshow=!this.isshow
			},
			handlebtn(){
				var id=this.$route.params.filmId;
				this.dataInfo.isPresale=!this.dataInfo.isPresale;
				this.$store.commit('addlist',this.dataInfo.filmId);
			}
		},
		activated() {
			this.dataInfo=[];
			var id=this.$route.params.filmId;
			console.log(id)
			var datalist=this.$store.state.moviedetaillist;
			var obj
			datalist.map(function(item){
				if(item.filmId==id){
					obj=item;
				}
			})
			if(obj){
				this.dataInfo = obj;
				console.log("1")
			}else{
				axios({
					url: `https://m.maizuo.com/gateway?filmId=${id}&k=6341513`,
					method: 'get',
					headers: {
						'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16202931625251838764908545","bc":"440100"}',
						'X-Host': ' mall.film-ticket.film.info'
					}
				}).then(res => {
					this.dataInfo = res.data.data.film;
					this.$store.commit('addmoviedetaillist', this.dataInfo);
				})
			}
			
		}

	}
</script>
<style scoped="scoped">
	* {
		color: white;
		background-color: #666229;
	}
	.detail{
		padding: 20px;
		margin-top: 50px;
	}
	.movie_info {
		display: flex;
		margin-top: 0;
	}

	.movie-img {
		width: 30%;
		display: flex;
		align-items: center;
	}

	.movie-img img {
		width: 90px;
	}

	.movie-desc {
		width: 70%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}

	.other-info {
		font-size: .4rem;
		opacity: 0.6;
	}

	.other-info div {
		margin: 3px 0;
	}

	.other-info .btn {
		margin-top: 10px;
	}

	.other-info .btn button {
		width: 100px;
		height: 30px;
		border: 0;
		border-radius: 5px;
		line-height: 30px;
		font-size: 15px;
		
		background: hsla(0, 0%, 100%, .35);
	}
	.btn button i{
		background: none;
		margin-right: 5px;
	}
	.btn button span{
		background: none;
	}
	.movie-detail{
		margin-top: 17px;
		
	}
	.movie-detail .title{
		margin: 5px 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.movie-detail .title .icon{
		font-size: .3rem;
		opacity: 0.6;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	.icon i{
		font-size: 10px;
	}
	.movie-detail p{
		text-align: justify;
		line-height: 1.4rem;
	}
	.movie-detail .text-info{
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		overflow: hidden;
	}
	.actors{
		margin-top: 17px;
	}
	.actors-title-text{
		margin: 10px 0;
	
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
		color: #999999;
		font: 14px/1.5 Arial,Helvetica,sans-serif;
		margin: 5px 0 10px 0;
	}
	.photos-text{
		margin: 10px 0;
	}
	.btnshow{
		opacity: 0.3;
	}
</style>
