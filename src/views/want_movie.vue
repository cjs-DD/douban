<template>
	<div class="my-love">
		<Header title="想看的电影"/>
		<div class="moviebox">
			<Movie  v-for="item in getlist" title="购票" :info="item" :key="item.id"></Movie>
		</div>
	</div>
</template>

<script>
	// @ is an alias to /src
	import Header from '@/components/Header.vue'
	import Movie from '@/components/Movie.vue'
	export default {
		name: 'Home',
		components: {
			Header,
			Movie
		},
		computed:{
			getlist(){
				console.log(this.$store.state.wantid)
				return this.$store.state.wantid
				
			}
		}
	}
</script>

<style scoped="scoped">
	.moviebox{
		margin-top: 50px;
	}
</style>
