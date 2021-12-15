<template>
  <div id="ygonggao">
    <div class="yggwz">
      <div class="gonggtz">
        <el-tabs v-model="activeName" @tab-click="handleClick" class="gg">
			<el-tab-pane label="公告通知 | NOTICE" name="first">
				<ul>
					<li><a href="">
            <div class="time">
              <div class="day">22</div>
              <div class="month">六月</div>
            </div> 
            <p>计算机工程系资源下载</p>
            </a>
          </li>
					<li><a href="">
            <div class="time">
              <div class="day">18</div>
              <div class="month">六月</div>
            </div> 
            <p>新时代高校教师职业行为十项准则...</p>
            </a>
          </li>
					<li><a href="">
            <div class="time">
              <div class="day">31</div>
              <div class="month">十二月</div>
            </div> 
            <p>计算机工程系关于专业实训室安全管理的通告...</p>
            </a>
          </li>
					<li><a href="">
            <div class="time">
              <div class="day">26</div>
              <div class="month">十月</div>
            </div> 
            <p>茂名职业技术学院计算机工程系学生请假条例</p>
            </a></li>
					<li><a href="">
            <div class="time">
              <div class="day">22</div>
              <div class="month">十月</div>
            </div> 
            <p>争创全国文明城市倡议书</p>
            </a></li>
				</ul>
			</el-tab-pane>
		</el-tabs>
      </div>
    </div>
    <div class="yzhaosheng">
      <div class="zhaoswz">
        <el-tabs v-model="activeName" @tab-click="handleClick" class="zs">
			<el-tab-pane label="招生就业 | ADMINSSIONS" name="first">
				<ul>
					<li><a href="">
            <div class="time">
              <div class="day">22</div>
              <div class="month">十月</div>
            </div> 
            <p>广州兴森科技有限公司2021大专技术校招</p>
            </a>
          </li>
					<li><a href="">
            <div class="time">
              <div class="day">18</div>
              <div class="month">六月</div>
            </div> 
            <p>深圳顺络电子股份有限公司招聘信息</p>
            </a>
          </li>
					<li><a href="">
            <div class="time">
              <div class="day">22</div>
              <div class="month">十二月</div>
            </div> 
            <p>中信银行信用卡中心助理综合经营岗2022年校招</p>
            </a>
          </li>
					<li><a href="">
            <div class="time">
              <div class="day">26</div>
              <div class="month">十月</div>
            </div> 
            <p>中兴通讯股份有限公司制造部校园招聘简章</p>
            </a></li>
					<li><a href="">
            <div class="time">
              <div class="day">22</div>
              <div class="month">十月</div>
            </div> 
            <p>宜通世纪科技股份有限公司招聘信息</p>
            </a></li>
				</ul>
			</el-tab-pane>
		</el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "first",
    }
  },
  components: {},
  methods: {
  }
}
</script>

<style>
#ygonggao {
  width: 100%;
  height: 635px;
}
.gonggtz{
  width: 425px;
  float: left;
}
.gg{
  width: 424px;
  margin-top: 0;
}
.gg ul{
  margin-left: 10px;
}
.gg ul li{
  height: 40px;
  margin-top: 10px;
  width: 405px;
  font-size: 10px;
}
.gg ul li i{
  float: right;
}
.gg ul li p{
  transition: 0.6s all;
    float: right;
    width: 350px;
    border-bottom: 1px solid #e6e6e6;
    font-size: 13px;
    color: #333;
    line-height: 24px;
    height: 44px;
    overflow: hidden;
    font-family: '';
    padding-bottom: 8px;
}
.zhaoswz{
  margin-top: 10px;
  width: 425px;
  float: left;
}
.zs{
  width: 424px;
  margin-top: 0;
}
.zs ul{
  margin-left: 10px;
}
.zs ul li{
  height: 40px;
  margin-top: 10px;
  width: 405px;
  font-size: 10px;
}
.zs ul li i{
  float: right;
}
.zs ul li p{
  transition: 0.6s all;
    float: right;
    width: 350px;
    border-bottom: 1px solid #e6e6e6;
    font-size: 13px;
    color: #333;
    line-height: 24px;
    height: 44px;
    overflow: hidden;
    font-family: '';
    padding-bottom: 8px;
}
</style>
