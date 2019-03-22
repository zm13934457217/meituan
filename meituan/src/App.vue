<template>
  <div id="app">
    <app-header></app-header>
    <app-nav></app-nav>
  </div>
</template>
<script>
	import Header from "./components/header/header"
	import nav from "./components/nav/nav"
	
	export default{
		name:"app",
		data(){
			return {}
		},
		components:{
			"app-header":Header,
			"app-nav":nav
		}
	}
	
</script>
<style lang="stylus">
@import url("../static/css/reset.css");
@import url("../static/font/iconfont.css")
</style>
