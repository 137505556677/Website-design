<template>
	<div id="home">
		<login></login>
		<navlink></navlink>
		<banner></banner>
		<homemain></homemain>
		<homemaing></homemaing>
		<footermain></footermain>
		
	</div>
</template>

<script>
	import login from '@/view/Login'
	import navlink from '@/view/Navlink'
	import banner from '@/view/Banner'
	import homemain from '@/view/HomeMain'
	import footermain from '@/view/FooterMain'
	import homemaing from '@/view/HomeMaing'
	export default {
		data() {
			return {};
		},
		components:{
			login,
			navlink,
			banner,
			homemain,
			footermain,
			homemaing
		},
		methods: {}
	};
</script>

<style>
	ul li{
		list-style: none;
	}
	a{
		text-decoration: none;
		color: black;
	}
	router-link:hover {
		color: #fd0;
	}
</style>
