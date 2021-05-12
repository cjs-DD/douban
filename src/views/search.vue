<template>
	<div class="search">
		<Header/>
		<div class="search_box">
			<div class="search_left">
				<i class="icon-cebian-sousuo iconfont"></i>
				<input type="text">
			</div>
			<div class="search_right">
				<router-link to="/home">取消</router-link>
			</div>
		</div>
	</div>
	
</template>

<script>
	import Header from '@/components/Header.vue'
	export default {
		name: 'search',
		components: {
			Header
		}}
</script>

<style scoped="scoped">
	.search_box{
		margin-top: 50px;
		height: 50px;
		border-bottom: 1px solid #D5D5D5;
		padding: 5px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.search_box .search_left {
		flex: 85%;
		border: 1px solid #D5D5D5;
		height: 100%;
		border-radius: 4px;
		display: flex;
	}
	.search_left i{
		flex:10%;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 20px;
		color: #D5D5D5;
	}
	.search_left input{
		flex:90%;
		border: 0;
		outline: none;
	}
	.search_box .search_right {
		flex: 15%;
		text-align: center;
		color: red;
	}
	.search_right a{
		color: red;
	}
</style>
