<template>
	<div class="login">
		<Header title="我的" />
		<div class="login-block">
			<div class="tab-nav">
				<div class="tab-item">账号登录</div>
				<div class="tab-item">手机号登录</div>
			</div>
			<div class="login-form">
				<div class="email">
					<input id="username" type="text" placeholder="账户名/手机号/Email">
				</div>
				<div class="paw">
					<input id="password" type="password" placeholder="请输入您的密码">
				</div>
				<div class="btn">
					<button @click="handlelogin">登 录</button>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	// @ is an alias to /src
	import Header from '@/components/Header.vue'
	export default {
		name: 'Home',
		components: {
			Header
		},
		methods:{
			handlelogin(){
				this.$store.commit('isshow');
				console.log(this.$store.state.show)
				this.$router.push('/wode')
				
			}
		}
		
	}
</script>
<style>
	.login {
		margin-top: 50px;
	}

	.tab-nav {
		height: 50px;
		margin: 5px 10px;
		display: flex;
		border-bottom: 3px solid #D5D5D5;
	}

	.tab-nav div {
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.login-form {
		margin: 0 10px;
	}

	.login-form div {
		height: 50px;
		border-bottom: 1px solid #D5D5D5;
	}

	.login-form div input {
		width: 100%;
		height: 80%;
		border: 0;
		outline: none;
	}

	.btn {
		padding: 5px 0;
	}

	.btn button {
		background-color: red;
		color: white;
		width: 100%;
		height: 100%;
		font-size: 18px;
		border: 0;
		outline: none;
		border-radius: 4px;
	}
</style>
