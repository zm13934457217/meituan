<template>
	<div class="top">
		<div class="header-top">
			<div class="back iconfont icon-arrow_lift"></div>
			<div class="search">
				<input type="text" />
			</div>
			<div class="header-top-right">
				<i class="iconfont icon-favorite"></i>
				<span class="circle">
  				<i class="iconfont icon-circle"></i>
					<i class="iconfont icon-circle"></i>
					<i class="iconfont icon-circle"></i>
  		</span>
			</div>
		</div>
		<div class="sellerInfo">
			<h1>麦当劳</h1>
			<div class="xuzhi">
				<span></span>
				<span></span>
				<span></span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'top',
		props: {
			msg: String
		},
		data() {
			return {}
		}
	}
</script>
<style scoped>
	.top {
		position: relative;
		width: 100%;
		height: 180px;
		background: url(http://p0.meituan.net/xianfu/19c002c5963a289206e756092995a2fe230070.jpg) no-repeat center/cover;
		padding: 10px 20px;
		box-sizing: border-box;
	}
	
	.iconfont {
		color: #fff;
		font-size: 18px;
	}
	
	.header-top {
		position: relative;
		width: 100%;
		padding: 0 50px 0 25px;
		box-sizing: border-box;
	}
	
	.header-top .search input {
		padding: 10px;
		width: 100%;
		border: 1px solid #ccc;
		border-radius: 40px;
		height: 24px;
	}
	
	.header-top .circle .iconfont {
		font-size: 5px;
	}
	
	.header-top .back {
		position: absolute;
		left: 0;
	}
	
	.header-top .header-top-right {
		position: absolute;
		right: 0;
	}
	
	.sellerInfo {
		position: absolute;
		width: 100%;
		height: 100px;
		margin: 30px auto 10px;
		background: #fff;
		border-radius: 5px;
		padding: 10px;
		box-shadow: 0px 3px 5px #bbb;
		box-sizing: border-box;
	}
	
	.sellerInfo h1 {
		font-size: 20px;
		line-height: 25px;
		color: #333;
	}
	
	.sellerInfo .xuzhi {
		line-height: 18px;
	}
	
	.sellerInfo .xuzhi span {
		color: #888;
		font-size: 10px;
	}
	
	.sellerInfo .gonggao {
		color: #666;
		font-size: 10px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		line-height: 18px;
	}
</style>