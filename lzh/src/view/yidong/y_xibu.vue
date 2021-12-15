<template>
  <div id="yxibu">
    <div class="yxbwz">
      <div class="xibuxw">
        <el-tabs v-model="activeName" @tab-click="handleClick" class="xbs">
			<el-tab-pane label="系部新闻 | NEWS" name="first">
				<ul>
					<li><a href="">
            <div class="time">
              <div class="day">26</div>
              <div class="month">十月</div>
            </div> 
            <p>计算机工程系党总支召开党员学习会议</p>
            </a>
          </li>
					<li><a href="">
            <div class="time">
              <div class="day">28</div>
              <div class="month">九月</div>
            </div> 
            <p>计算机工程系深入学习习近平总书记给全国高校黄大年式教师团队代表的回信精神...</p>
            </a>
          </li>
					<li><a href="">
            <div class="time">
              <div class="day">15</div>
              <div class="month">十月</div>
            </div> 
            <p>百年奋斗史，圆梦新时代 ——谈毅副院长给计算机工程系师生讲授“思政第一课”...</p>
            </a>
          </li>
					<li><a href="">
            <div class="time">
              <div class="day">17</div>
              <div class="month">十月</div>
            </div> 
            <p>扶国书记莅临计算机工程系调研</p>
            </a></li>
					<li><a href="">
            <div class="time">
              <div class="day">16</div>
              <div class="month">十月</div>
            </div> 
            <p>月满中秋，情暖计机 ——计算机工程系举办中秋茶话会</p>
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
#yxibu {
  width: 100%;
  height: 300px;
}
.xibuxw{
  width: 425px;
  float: left;
}
.xbs{
  width: 424px;
  margin-top: -20px;
}
.xbs ul{
  margin-left: 10px;
}
.xbs ul li{
  width: 405px;
  height: 40px;
  margin-top: 10px;
  font-size: 10px;
}
.xbs ul li i{
  float: right;
}
.xbs ul li p{
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
