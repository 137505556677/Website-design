<template>
	<div id="yfoot">
		<div class="yfootd">
			<div class="yfootxx">
				<h4> <span>CopyRight&copy; 茂名职业技术学院/计算机工程系</span></h4>
				<h4><span>地址：茂名市电白区沙院镇海城路五路1号</span></h4>
				<h4><span>&copy;电子邮箱：mzjsj@126.com </span></h4>
				<h4><span>&copy;设计与维护：沈大旺工作室 </span></h4>
			</div>
			<div class="yfootxd">
				<h3> <span>联系我们</span></h3>
				<h4> <span>电话：0668-2920526</span></h4>
				<h4><span>邮编：514500 </span></h4>
				<h4><span>网址：www.mmpt.edu.cn</span></h4>
			</div>
		</div>
		<div class="yfootzs">
			<div>
				<h3>招生微信号</h3>
				<img src="../../assets/images/wx_zhao.jpg" alt="">
			</div>
		</div>
		<div class="yfootxb">
			<div class="yxibuweixin">
				<h3>系部微信号</h3>
				<img src="../../assets/images/wx_jsj.jpg" alt="">
			</div>
		</div>
		<div class="yfootrt">
			<div>
				<img src="../../assets/images/logoarea.jpg" alt="">
				
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
    #yfoot{
        position: relative;
        width: 100%;
        height: 280px;
        background-image: linear-gradient(to bottom, #92fe9d 0%, #00c9ff 100%);
        bottom: 0;
        font-size: 10px;
        color: white;
    }
    .yfootd{
        padding-top: 5px;
        margin-left: 5px;
    }
	.yfootxx{
		float: left;
	}
	.yfootxd{
		margin-left: 13px;
		float: left;
	}
    .yfootzs{
		margin-top: 10px;
        float: left;
        text-align: center;
        margin-left: 40px;
    }
    .yfootzs img{
        width: 90px;
    }
    .yfootxb{
        text-align: center;
        margin-left: 250px;
		margin-top: 75px;
    }
	.yxibuweixin{
		margin-top: 10px;
	}
    .yfootxb img{
        width: 90px;
    }
    .yfootrt{
        
        font-size: 14px;
    }
    .yfootrt img{
		margin-top: 10px;
        margin-left: 15px;
    }
</style>
