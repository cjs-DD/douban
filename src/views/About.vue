<template>
  <div class="about">
		<header>
			<p>喵星电影</p>
		</header>
		<footer>
			<ul>
				<li><i class="iconfont icon-dianying"></i>
				<p>电影</p>
				</li>
				<li>
					<i class="iconfont icon-yingyuan"></i>
					<p>影院</p>
				</li>
				<li><i class="iconfont icon-dibutab-wode"></i>
					<p>我的</p>
				</li>
			</ul>
		</footer>
  </div>
</template>
<style scoped="scoped">
*{
	padding:0;
	margin: 0;
}
header{
	height: 50px;
	background-color: #ef4238;
	color: white;
	font-size: 20px;
	font-weight: 700;
	font-family: Microsoft YaHei,Helvetica,Arial,sans-serif;
	text-align: center;
	line-height: 50px;
}
footer{
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	border-top: 1px solid red;
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
	flex:1;
	list-style: none;
}
footer ul li .iconfont {
	font-size: 25px;
}
</style>
