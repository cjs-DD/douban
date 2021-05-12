<template>
	<header>
		<p>{{title}}</p>
	</header>
</template>

<script>
	export default {
	    props: {
	        title: {
				type:String,
				default:"喵星电影"
			}
	    }
		}
</script>

<style scoped="scoped">
	header {
		height: 50px;
		background-color: #ef4238;
		color: white;
		font-size: 20px;
		font-weight: 700;
		font-family: Microsoft YaHei, Helvetica, Arial, sans-serif;
		text-align: center;
		line-height: 50px;
		position:fixed;
		top:0;
		left:0;
		width: 100%;
		z-index:2;
	}
</style>
