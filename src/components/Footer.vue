<template>
	<footer>
		<ul>
			<router-link tag="li" to="/home">
				<i class="iconfont icon-dianying"></i>
				<p>电影</p>
			</router-link>
			<router-link tag="li" to="/yingyuan">
				<i class="iconfont icon-yingyuan"></i>
				<p>影院</p>
			</router-link>
			<router-link tag="li" :to="show?'/wode':'/login'">
				<i class="iconfont icon-dibutab-wode"></i>
				<p>我的</p>
			</router-link>
		</ul>
	</footer>
</template>

<script>
	export default{
		data(){
			return{
				
			}
			},
			computed:{
				show() {
					return this.$store.state.show;
				}
			}
	}
</script>

<style scoped="scoped">
	footer {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		border-top: 1px solid red;
		background-color: #e6e6e6;
	}

	footer ul {
		height: 60px;
		display: flex;
	}

	footer ul li {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
		list-style: none;
	}

	footer ul li .iconfont {
		font-size: 25px;
	}
	footer ul li.router-link-active {
		color: #FF0000;
	}
</style>
