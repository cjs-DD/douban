<template>
	<div class="nav">
		<div class="location">定位</div>
		<div class="text_reying">
			<router-link tag="p" to="/home">热映</router-link>
		</div>
		<div class="text_daiying">
			<router-link tag="p" to="/daiying">待映</router-link>
		</div>
		<div class="search">
			<router-link  to="/search"><i class="iconfont icon-sousuo1"></i></router-link>
		</div>
	</div>
</template>

<script>
	
</script>

<style scoped="scoped">
	a {
	  text-decoration: none;
	}
	.nav {
		margin-top: 50px;
		height: 40px;
		display: flex;
		border-bottom: 1px solid #d5d5d5;
	}
	
	.nav div {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	.nav .location {
		flex: 15%;
	}
	
	.nav .text_daiying {
		flex: 35%;
		padding-right: 30px;
		font-weight: 700;
	}
	
	.nav .text_reying {
		flex: 35%;
		padding-left: 30px;
		font-weight: 700;
	}
	
	.nav .text_reying p.router-link-active,
	.nav .text_daiying p.router-link-active {
		color: red;
		border-bottom: 2px solid #FF0000;
	}
	
	.nav .search {
		flex: 15%;
	}
	.nav .icon-sousuo1 {
		color: red;
		font-size: 25px;
	}
</style>
