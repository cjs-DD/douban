<template>
	<div class="movie" @click="handleClick(info.filmId)" >
		<div class="movie_img"><img :src="info.poster" alt=""></div>
		<div class="movie_info">
			<p class="info_nm">{{info.name}}</p>
			<p>
				观众评 <span class="info_wish">{{info.grade}}</span>
			</p>
			<p class="info_star line-ellipsis ">主演: {{handlesactor}}</p>
			<p class="info_show">{{info.nation}} | {{info.runtime}}分钟</p>
		</div>
		<div class="buy">
			<button>{{title}}</button>
		</div>
	</div>
	
</template>

<script>
	export default {
	    props: {
	        info: Object,
			title:String
	
	    },
		computed:{
			handlesactor(){
				var act=this.info.actors;
				return act.map(val =>val.name).join(' ');
			}
		},
		methods: {
		  handleClick (data) {
			      this.$router.push(`/detail/${data}`)
		    // this.$router.push(`/detail/${data1}`)
		  }
		}
		}
</script>

<style scoped="scoped">
	.movie {
		padding: 4px 0;
		height: 110px;
		display: flex;
		border-bottom: 1px solid #D5D5D5;
	}
	
	.movie .movie_img {
		width: 20%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.movie_img img {
		width: 64px;
		height: 92px;
	}
	.movie .movie_info p {
		padding-bottom: 4px;
	}
	
	.movie .movie_info {
		width: 60%;
		box-sizing: border-box;
		font-size: 13px;
		color: #6f6f6f;
	}
	
	.movie .movie_info .info_nm {
		font-weight: 700;
		font-size: 18px;
		color: black;
	}
	
	.movie .movie_info .info_wish {
		color: #faaf00;
		font-weight: 700;
		font-size: 17px;
	}

	.movie .buy {
		width: 20%;
		display: flex;
		justify-content: center;
		align-items: center;
	
	}
	
	.movie .buy button {
		color: white;
		background-color: #3c9fe6;
		border: 0;
		width: 50%;
		height: 25%;
		border-radius: 15%;
	}
	
</style>
