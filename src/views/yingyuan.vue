<template>
	<div class="yingyuan">
		<Header />
		<div class="cinema">
			<router-link to="/cinema_details">
				<cinema v-for="item in getlist" :info="item" />
			</router-link>
		</div>
		<Footer />
	</div>
</template>
<script>
	import Header from '@/components/Header.vue'
	import Footer from '@/components/Footer.vue'
	import cinema from "@/components/cinema.vue"
	import data from "../data/影院.js"
	export default {
		name: 'yingyuan',
		components: {
			Header,
			Footer,
			cinema
		},
		computed:{
			getlist() {
				var data1 = data.data;
				return data1
			}
		}
	}
</script>

<style scoped="scoped">
	.cinema {
		margin-top: 50px;
	}
</style>
