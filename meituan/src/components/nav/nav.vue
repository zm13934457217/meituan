<template>
  <div class="daohang">
  	<router-link to="/goods">点餐</router-link>
  	<router-link to="/ratings">评价</router-link>
  	<router-link to="/seller">商家</router-link>
  </div>
</template>

<script>
export default {
  name: 'daohang',
  props: {
    msg: String
  },
  data(){
  	return {}
  }
}
</script>
<style scoped>
	.daohang{
		padding: 60px 10px 0px 10px;
		line-height: 30px;
		border-bottom: 1px solid #d8d8d8;
		display: flex;
		justify-content: space-between;
	}
	.daohang a{
		position: relative;
		text-decoration: none;
		font-size: 12px;
		color: #555;
	}
	.daohang .active{
		color: #333;
		font-weight: bold;
	}
	.daohang .active:after{
		content: "";
		display: block;
		position: absolute;
		width: 20px;
		left: 50%;
		margin-left: -10px;
		height: 2px;
		background: orange;
	}
</style>
