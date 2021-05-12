<template>
	<div class="wode">
		<Header title="我的"/>

		<div class="header-info">
			<div class="person">
				<img src="https://img.meituan.net/maoyanuser/c524afeb2e56c93093a1b7c26d5ac6b114424.png" class="head-icon" alt="">
			</div>
		</div>
		<div class="group">
			<div class="me">我的订单</div>
			<div class="list">
				<div class="movie">
					<img src="https://s0.meituan.net/bs/myfe/canary/file/asgard/images/dpmmweb/mycenter/movie.png" alt="">
					<p>电影</p>
				</div>
				<div class="store">
					<img src="https://s0.meituan.net/bs/myfe/canary/file/asgard/images/dpmmweb/mycenter/store.png" alt="">
					<p>商城</p>
				</div>
			</div>
		</div>
		<div class="group1">
			<div class="item">优惠券</div>
			<div class="item">折扣卡</div>
			<div class="item" @click="handlewant">想看的电影</div>
		</div>
		<Nav />
		<Footer />
	</div>
</template>
<script>
	// @ is an alias to /src
	import Header from '@/components/Header.vue'
	import Footer from '@/components/Footer.vue'
	import Nav from '@/components/Nav.vue'
	export default {
		name: 'Home',
		components: {
			Header,
			Footer
		},
		methods:{
			handlewant(){
				this.$router.push('/want_movie')
			}
		}
	}
</script>
<style>
	body {
		background: #f4f4f4;
	}

	.header-info {
		margin-top: 50px;
		height: 150px;
		background-image: url(//s0.meituan.net/bs/myfe/canary/file/asgard/images/dpmmweb/mycenter/bg.png);
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.person {
		width: 60px;
		height: 60px;
		border-radius: 60px;
		border: 3px solid #fff;
		overflow: hidden;
	}

	.person img {
		width: 100%;
	}

	.group {
		height: 150px;
		margin: 10px 0;
		padding: 10px;
		background-color: white;
	}

	.group .me {
		height: 20%;
		text-align: center;
	}

	.list {
		height: 80%;
		display: flex;
	}

	.list div {
		flex: 50%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.list img {
		width: 40px;
	}
	.list  p{
		margin-top: 10px;
	}
	.group1 .item{
		height: 44px;
		padding: 0 20px;
		line-height: 44px;
		background-color: white;
		margin-bottom: 1px;
	}
</style>
