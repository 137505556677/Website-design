<template>
  <div id="homemaing">
	<div class="zhaosheng">
    <el-tabs v-model="activeName" @tab-click="handleClick" class="zsjy">
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
    <div class="jingneng">
		<el-tabs v-model="activeName" @tab-click="handleClick" class="jnjs">
			<el-tab-pane label="技能竞赛 | SKILLS COMPETITION" name="first">
				<ul>
					<li><a href="">
            <div class="time">
              <div class="day">22</div>
              <div class="month">十月</div>
            </div> 
            <p>喜讯：计算机学子首次参加广东省职业院校学生专业技能大...</p>
            </a>
          </li>
					<li><a href="">
            <div class="time">
              <div class="day">18</div>
              <div class="month">六月</div>
            </div> 
            <p>喜讯：我系学子获2021年广东省技能大赛(高职组)“ 虚拟现...</p>
            </a>
          </li>
					<li><a href="">
            <div class="time">
              <div class="day">22</div>
              <div class="month">十二月</div>
            </div> 
            <p>喜讯：我系学子荣获广东省职业院校专业技能大赛“区块链...</p>
            </a>
          </li>
					<li><a href="">
            <div class="time">
              <div class="day">26</div>
              <div class="month">十月</div>
            </div> 
            <p>喜讯：我系学子首次参加广东省高职院校学生专业技能大赛“中文信息处理”赛项荣获...</p>
            </a></li>
					<li><a href="">
            <div class="time">
              <div class="day">22</div>
              <div class="month">十月</div>
            </div> 
            <p>喜讯：我系学子荣获2021年度广东省职业院校学生专业技能大赛“Web应用软件开发”赛...</p>
            </a></li>
				</ul>
			</el-tab-pane>
		</el-tabs>
	</div>
  <div class="jiaoxue">
		<el-tabs v-model="activeName" @tab-click="handleClick" class="jxky">
			<el-tab-pane label="教学科研 | TEACHING RESEARCH" name="first">
				<ul>
					<li><a href="">
            <div class="time">
              <div class="day">22</div>
              <div class="month">十月</div>
            </div> 
            <p>2021级数字媒体技术专业人才培养方案</p>
            </a>
          </li>
					<li><a href="">
            <div class="time">
              <div class="day">18</div>
              <div class="month">六月</div>
            </div> 
            <p>2021级软件技术专业人才培养方案</p>
            </a>
          </li>
					<li><a href="">
            <div class="time">
              <div class="day">22</div>
              <div class="month">十二月</div>
            </div> 
            <p>2021级计算机应用技术专业人才培养方案</p>
            </a>
          </li>
					<li><a href="">
            <div class="time">
              <div class="day">26</div>
              <div class="month">十月</div>
            </div> 
            <p>2021级计算机网络技术专业人才培养方案</p>
            </a></li>
					<li><a href="">
            <div class="time">
              <div class="day">22</div>
              <div class="month">十月</div>
            </div> 
            <p>2021级现代通信技术专业人才培养方案</p>
            </a></li>
				</ul>
			</el-tab-pane>
		</el-tabs>
	</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "first"
    }
  },
  components: {},
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style>
*{
	margin: 0;
	padding: 0;
}
.fontblue{
    color: #1846e0;
}
.fontsred{
    color: red;
}
#homemaing {
  width: 1200px;
  height: 350px;
  margin: 0 auto;
}
.el-tabs--top .el-tabs__item.is-top:last-child{
  margin-left: 5px;
}
.zhaosheng {
  width: 370px;
  height: 326px;
  float: left;
  margin-left: 13px;
}
.zsjy{
  width: 370px;
  height: 326px;
  margin-top: 0;
}
.zsjy ul{
  margin-left: 10px;
}
.zsjy ul li{
  height: 40px;
  width: 350px;
  margin-top: 10px;
  font-size: 13px;
}
.zsjy ul li i{
  float: right;
}
.zsjy ul li p{
    transition: 0.6s all;
    float: right;
    width: 300px;
    border-bottom: 1px solid #e6e6e6;
    font-size: 13px;
    color: #333;
    line-height: 24px;
    height: 44px;
    overflow: hidden;
    font-family: '';
    padding-bottom: 8px;
}
.jingneng{
  width: 355px;
  float: left;
}
.jnjs{
  width: 360px;
  margin-top: 0;
  margin-left: 60px;
}
.jnjs ul{
  margin-left: 10px;
}
.jnjs ul li{
  height: 40px;
  width: 355px;
  font-size: 13px;
  margin-top: 10px;
}
.jnjs ul li i{
  float: right;
}
.jnjs ul li p{
    transition: 0.6s all;
    float: right;
    width: 305px;
    border-bottom: 1px solid #e6e6e6;
    font-size: 13px;
    color: #333;
    line-height: 24px;
    height: 44px;
    overflow: hidden;
    font-family: '';
    padding-bottom: 8px;
}
.jiaoxue {
  width: 360px;
  float: left;
  margin-left: 13px;
}
.jxky{
  width: 360px;
  margin-top: 0;
  margin-left: 95px;
}
.jxky ul{
  margin-left: 10px;
}
.jxky ul li{
  height: 40px;
  margin-top: 10px;
  width: 350px;
  font-size: 13px;
}
.jxky ul li i{
  float: right;
}
.jxky ul li p{
    transition: 0.6s all;
    float: right;
    width: 300px;
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
