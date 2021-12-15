<template>
	<div id="foot">
		<div class="footd">
			<div class="footxx">
				<h4> <span>CopyRight&copy;版权所有：茂名职业技术学院/ 计算机工程系</span></h4>
				<h4><span>地址：茂名市电白区沙院镇海城路五路1号</span></h4>
				<h4><span>&copy;电子邮箱：mzjsj@126.com </span></h4>
				<h4><span>&copy;设计与维护：沈大旺工作室 </span></h4>
			</div>
			<div class="footxd">
				<h3> <span>联系我们</span></h3>
				<h4> <span>电话：0668-2920526</span></h4>
				<h4><span>邮编：514500 </span></h4>
				<h4><span>网址：www.mmpt.edu.cn</span></h4>
			</div>
		</div>
		<div class="footzs">
			<div>
				<h3>招生微信号</h3>
				<img src="../assets/images/wx_zhao.jpg" alt="">
			</div>
		</div>
		<div class="footxb">
			<div class="xibuweixin">
				<h3>系部微信号</h3>
				<img src="../assets/images/wx_jsj.jpg" alt="">
			</div>
		</div>
		<div class="footrt">
			<div>
				<img src="../assets/images/logoarea.jpg" alt="">
			</div>
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
	*{
		margin: 0;
		padding: 0;
	}
	ul li {
		list-style: none;
	}
	a:hover{
		color: #f60;
	}
	i:hover{
		color: #f60;
	}
	#foot{
		width: 100%;
		height: 150px;
		font-size: 12px;
		line-height: 30px;
		background-image: linear-gradient(to right, #92fe9d 0%, #00c9ff 100%);
		color: white;
	}
	#foot .footd{
		padding-top: 20px;
		padding-bottom: 20px;
		width: 1200px;
		margin: 0 auto;
	}
	#foot .footd .footxx{
		float: left;
	}
	#foot .footd .footxd{
		float: left;
		width: 200px;
		margin-left: 30px;
	}
	#foot .footzs{
		margin-top: -20px;
		margin-left: 50px;
		text-align: center;
		float: left;
	}
	#foot .footzs img{
		width: 80px;
		height: 80px;
	}
	#foot .footxb{
		margin-top: -20px;
		margin-left: 30px;
		text-align: center;
		float: left;
	}
	#foot .footxb img{
		width: 80px;
		height: 80px;
	}
	#foot .footrt{
		float: right;
		margin-top: -20px;
		margin-right: 155px;
	}
	#foot .footrt img{
		width: 300px;

	}
</style>
