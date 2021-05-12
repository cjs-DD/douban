<template>
	<div class="cinema-item">
			<div class="name-block line-ellipsis">
				<span class="name">{{info.nm}}</span>
				<span class="price-block">
					<span class="price">{{info.price}}</span><span class="q">元起</span>
				</span>
			</div>
			<div class="location-block line-ellipsis">
				<span class="line-ellipsis location ">{{info.addr}}</span>
			</div>
			<div class="label-block">
				<span class="allowRefund" :style="{'color':item1.color,'border-color':item1.color}" v-for="item1 in info.labels">{{item1.name}}</span>
			</div>
			<div class="discount-block">
				<img src="https://p1.meituan.net/scarlett/ff1c6e33ed0ac3cd862910a83d4bf959583.png">
				<span class="discount-label-text">{{info.promotion.cardPromotionTag}}</span>
			</div>
	</div>
</template>

<script>
	export default {
	    props: {
	        info: Object 
	    }
		}
</script>

<style scoped="scoped">
	.cinema-item{
		padding: 13px;
		border-bottom: 1px solid #f0f0f0;
	}
	.name-block,
	.location-block,
	.label-block,
	.discount-block {
		width: 100%;
		display: inline-block;
	}
	.label-block{
		margin: 3px 0 5px 0;
	}
	.label-block .allowRefund{
		border: 1px solid #999999;
		padding: 0 2px;
		margin: 0 2px;
		font-size: .6rem;
	}
	.name-block .name {
		font-size: 16px;
		color: #000;
	}
	
	.price-block .price {
		color: #f03d37;
		font-size: 18px;
	}
	
	.price-block .q {
		font-size: 11px;
		color: #f03d37;
	}
	.location-block .location{
		    width: 100%;
		    font-size: 13px;
		    color: #666;
			margin-right: 20px;
	}
	.discount-block{
		display: flex;
		align-items: center;
	}
	.discount-block .discount-label-text{
		    color: #999;
			font-size: 12px;
	}
	.discount-block img{
		width: 14px;
		height: 14px;
		margin-right: 5px;
	}
</style>
