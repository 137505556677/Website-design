<template>
	<div id="login">
		<div class="loginwz">
			<img class="ww" src="../assets/images/logoarea.jpg" >
			<i class="jsj">计 算 机 工 程 系</i>
			<i class="jsjeng">C o m p u t e r  E n g i n e e r i n g</i>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {};
		},
		components:{},
		methods: {}
	};
</script>

<style>
	#login{
		width: 100%;
		height: 140px;
		margin: 0 auto;
		background-image: linear-gradient(to right, #92fe9d 0%, #00c9ff 100%);
	}
	#login .loginwz{
		width: 1200px;
		height: 140px;
		margin: 0 auto;
	}
	#login .loginwz .ww{
		margin-top: 25px;
		width: 350px;
		height: 80px;
	}
	#login .loginwz .jsj{
		font-style: normal;
		font-size: 48px;
		font-family: '楷体';
		font-weight: 800;
		color: white;
		margin-left: 510px;
		display: block;
		margin-top: -70px;
	}
	#login .loginwz .jsjeng{
		font-style: normal;
		font-size: 20px;
		font-family: '楷体';
		font-weight: 800;
		color: white;
		margin-left: 528px;
		display: block;
		margin-top: 0px;
	}
</style>
