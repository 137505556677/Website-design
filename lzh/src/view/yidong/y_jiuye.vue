<template>
  <div id="yjiuye">
    <div class="yjnwz">
      <div class="jingnwz">
        <el-tabs v-model="activeName" @tab-click="handleClick" class="jn">
			<el-tab-pane label="技能竞赛 | ADMINSSIONS" name="first">
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
    </div>
    <div class="yjxky">
      <div class="jiaoxwz">
        <el-tabs v-model="activeName" @tab-click="handleClick" class="jx">
			<el-tab-pane label="教学科研 | ADMINSSIONS" name="first">
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
#yjiuye {
  width: 100%;
  height: 680px;
  margin-top: 10px;
}
.jingnwz{
  margin-top: 10px;
  width: 425px;
  float: left;
}
.jn{
  width: 424px;
  margin-top: 0;
}
.jn ul{
  margin-left: 10px;
}
.jn ul li{
  height: 40px;
  margin-top: 10px;
  width: 405px;
  font-size: 10px;
}
.jn ul li i{
  float: right;
}
.jn ul li p{
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
.yjxky{
  margin-top: 30px;
  width: 425px;
  float: left;
}
.jx{
  width: 424px;
  margin-top: 0;
}
.jx ul{
  margin-left: 10px;
}
.jx ul li{
  height: 40px;
  margin-top: 10px;
  width: 405px;
  font-size: 10px;
}
.jx ul li i{
  float: right;
}
.jx ul li p{
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
