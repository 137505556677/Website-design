<template>
  <div id="homemain">
    <div id="above">
      <el-tabs v-model="activeName" @tab-click="handleClick" class="wenxin">
        <el-tab-pane label="图片新闻 | HEADLINE" name="first" class="tupian">
          <el-carousel
            :interval="5000"
            arrow="always"
            :height="bannerHeight + 'px'"
            style="margin: 10px; margin-top: 18px"
          >
            <el-carousel-item v-for="item in image" :key="item.image">
              <el-row :gutter="15">
                <el-col
                  :xs="24"
                  :sm="24"
                  :md="24"
                  :lg="24"
                  :xl="24"
                  class="one"
                >
                  <img
                    ref="bannerHeight"
                    :src="item.url"
                    alt=""
                    @load="imgLoad"
                    style="width: 100%"
                  />
                </el-col>
              </el-row>
            </el-carousel-item>
          </el-carousel>
        </el-tab-pane>
      </el-tabs>
    </div>
	<div class="xibuxinwen">
		<el-tabs v-model="activeName" @tab-click="handleClick" class="xibu">
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
  <div class="xibuxinwen">
		<el-tabs v-model="activeName" @tab-click="handleClick" class="gonggaos">
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
</template>

<script>
export default {
  data() {
    return {
      activeName: "first",
      image: [
        { url: require("../assets/images/xinwen1.png") },
        { url: require("../assets/images/xinwen2.png") },
        { url: require("../assets/images/xinwen3.png") },
        { url: require("../assets/images/xinwen4.jpg") },
      ],
      bannerHeight: "",
    };
  },
  components: {},
  mounted() {
    this.imgLoad();
    window.addEventListener(
      "resize",
      () => {
        this.bannerHeight = this.$refs.bannerHeight[0].height
        this.imgLoad()
      },
      false
    );
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    },
    imgLoad() {
      this.$nextTick(() => {
        this.bannerHeight = this.$refs.bannerHeight[0].height;
        // document.getElementsByClassName拿到的是数组并非某一个对象
        var testH = document.getElementById("div")
        testH.style.height = this.bannerHeight + "px"
      })
    }
  }
}
</script>

<style>
*{
	margin: 0;
	padding: 0;
}
#homemain {
  width: 1200px;
  height: 350px;
  margin: 5px auto;
}
ul li a p:hover{
  color: #00c9ff;
}
#above {
  width: 400px;
}
#above .tupian {
  width: 430px;
  height: 300px;
  margin-top: 0px;
}
#above .wenxin{
  float: left;
  width: 430px;
  height: 325px;
}
.el-tabs--top .el-tabs__item.is-top:last-child{
  margin-left: 5px;
}
.el-tabs__nav .el-tabs__active-bar{
  background-color: #92fe9d;
}
#tab-first{
  color: #92fe9d;
}
.xibuxinwen{
  width: 360px;
  float: left;
}
.xibu{
  width: 360px;
  margin-top: 0;
  margin-left: 30px;
}
.xibu ul{
  margin-left: 10px;
}
.xibu ul li{
  width: 348px;
  height: 40px;
  margin-top: 10px;
  font-size: 15px;
}
.xibu ul li i{
  float: right;
}
.gonggaos{
  width: 360px;
  margin-top: 0;
  margin-left: 51px;
}
.gonggaos ul{
  margin-left: 10px;
}
.gonggaos ul li{
  width: 348px;
  height: 40px;
  margin-top: 10px;
  font-size: 13px;
}
.gonggaos ul li i{
  float: right;
}
.time{
  float: left;
  width: 48px;
}
.time .day {
    height: 20px;
    line-height: 24px;
    background: #dcdcdc;
    border-top-right-radius: 4px;
    border-bottom: 1px solid #c0c0c0;
    font-size: 20px;
    color: #00c9ff;
    text-align: center;
    font-weight: 700;
    font-family: 'Arial Normal', 'Arial';
}
.time .month {
    height: 20px;
    line-height: 24px;
    background: #e1e1e1;
    font-size: 14px;
    font-family: 'Arial Normal', 'Arial';
    text-align: center;
    color: #6e6e6e;
}
.xibu ul li p{
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
.gonggaos ul li p{
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
