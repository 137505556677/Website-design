<template>
	<div id="navlink">
		<ul>
			<li><router-link to="/main" class="fontcolor">系部首页</router-link></li>
			<li><router-link to="/about" class="fontcolor">系部新闻</router-link></li>
			<li><router-link to="/survey" class="fontcolor">系部概况</router-link></li>
			<li><router-link to="/scientific" class="fontcolor">教学科研</router-link></li>
			<li><router-link to="/about" class="fontcolor">党建工作</router-link></li>
			<li><router-link to="/about" class="fontcolor">学生工作</router-link></li>
			<li><router-link to="/about" class="fontcolor">招生就业</router-link></li>
			<li><router-link to="/fencai" class="fontcolor">教师风采</router-link></li>
			<li><router-link to="/about" class="fontcolor">制度建设</router-link></li>
			<li><router-link to="/about" class="fontcolor">技能竞赛</router-link></li>
			<li><router-link to="/about" class="fontcolor">学院首页</router-link></li>
		</ul>
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
	#navlink{
		width: 100%;
		height: 40px;
		background-image: linear-gradient(to right, #92fe9d 0%, #00c9ff 100%);
	}
	ul {
		width: 1200px;
		height: 40px;
		margin: 0 auto;
		line-height: 40px;
	}
	#navlink ul li{
		width: 109px;
		float: left;
		text-align: center;
	}
	#navlink ul li .fontcolor{
		color: white;
	}
	#navlink ul li:hover{
		background-color: #84aefc;
	}
</style>
