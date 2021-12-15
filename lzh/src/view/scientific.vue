<template>
  <div id="home">
    <login></login>
    <navlink></navlink>
    <div id="jymain">
      <div class="jymainwz">
        <div class="jymright">
          <div class="jynrs">
            <h3>科学教研</h3>
            <div class="jydaohangww">
              <ul>
                <li class="widthssw">
                  <router-link to="/jxcontent">
                    <img src="../assets/images/jx2.png" alt="" class="picss"> 
                    <i class="ccc">计算机工程系开展开学第一天教学检查</i>
                    <i class="cccs">为了进一步加强教学质量管理和教风学风建设，2021年3月1日，新学期开课第一天，计算机工程系教学</i>
                  </router-link>
                  <span>2021-10-20</span>
                </li>
                <li class="widthssw">
                  <router-link to="/jxcontent">
                    <img src="../assets/images/kx1.jpg" alt="" class="picss"> 
                    <i class="ccc">计算机工程系召开考风考纪主题会议</i>
                    <span class="cccw">临近期末考试，为严肃考风考纪，加强诚信教育，强化考试管理，营造“公平、公正、诚实守信”的考试氛围，计算机工程系在南校区6号教学楼401室开展考风考纪主题会议</span>
                  </router-link>
                  <span class="spanww">2021-09-29</span>
                </li>
                <li class="widthssw">
                  <router-link to="/jxcontent">
                    <img src="../assets/images/jx3.png" alt="" class="pic"> 
                    <i class="ccc">计算机工程系召开立体式教材项目研讨会</i>
                    <span class="cccw">为积极开展高职院校结对帮扶，2020年11月28日，广州民航职业技术学院计算机系主任洪锐锋到访茂名职业技术学院计算机工程系,开展立体式教材项目建设研讨会。</span>
                  </router-link>
                  <span class="spanww">2021-09-23</span>
                </li>
                <li class="widthssw">
                  <router-link to="/jxcontent">
                    <img src="../assets/images/jx4.png" alt="" class="pic"> 
                    <i class="ccc">计算机工程系举行结对共建研讨会</i>
                    <span class="cccw">为了深入落实广东省教育大会精神，更好地实施一流高职院校结对帮扶计划，11月13日下午，计算机工程系在南校区6号教学楼4楼会议室举行了广州民航职业技术学院与茂名职业技术学院结对共建研讨会</span>
                  </router-link>
                  <span class="spanww">2021-09-15</span>
                </li>
              </ul>
              <div class="fenye">
                <i class="tiaoshuss">共93条</i>
                <el-pagination
                  class="fenyedao"
                  background
                  layout="prev, pager, next"
                  :total="90"
                >
                </el-pagination>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footermain></footermain>
  </div>
</template>

<script>
import login from "@/view/Login";
import navlink from "@/view/Navlink";
import footermain from "@/view/FooterMain";

export default {
  data() {
    return {};
  },
  components: {
    login,
    navlink,
    footermain,
  },
  methods: {},
};
</script>

<style>
ul li {
  list-style: none;
}
a {
  text-decoration: none;
  color: black;
}
router-link:hover {
  color: #fd0;
}
#jymain {
  width: 100%;
}
.picss{
  width: 165px;
}
.jymainwz {
  width: 1200px;
  height: 620px;
  margin: 0 auto;
  font-size: 13px;
  position: relative;
}
.widthssw{
  height: 130px;
}
.jymainwz .jymright {
  float: left inherit;
}
.jymainwz .jymright .jynrs {
  margin-top: 10px;
}
.jymainwz .jymright .jynrs h3 {
  font-weight: 400;
  background-image: linear-gradient(to right, #92fe9d 0%, #00c9ff 100%);
  color: white;
  height: 30px;
  font-size: 18px;
  line-height: 30px;
  background-color: #f5f5f5;
  border-left: 4px solid #5584b0;
  padding-left: 10px;
}
.jymainwz .jymright .jynrs ul li {
  width: 1160px;
  margin-top: 0px;
  margin-left: 12px;
}
.jymainwz .jymright .jynrs ul li a:hover {
  color: #00c9ff;
  margin-left: 10px;
  font-size: 20px;
  transition: 0.6s all;
  text-decoration: underline;
}
.jymainwz .jymright .jynrs ul li .spanww {
  margin-top: -15px;
}
.jymainwz .jymright .jynrs ul li span {
  float: right;
  color: #999;
  margin-top: 70px;
}
.jymainwz .jymright .jynrs .jydaohangww img{
  margin-top: 5px;
  float: left;
}
.jymainwz .jymright .jynrs .jydaohangww .ccc{
  float: left;
  margin-bottom: -100px;
  font-size: 18px;
}
.jymainwz .jymright .jynrs .jydaohangww .cccs{
  float: left;
  margin-top: 30px;
}
.jymainwz .jymright .jynrs .jydaohangww .cccw{
  margin-top: -80px;
  margin-left: 200px;
  color: black;
}
.jymainwz .jymright .jynrs .jydaohangww {
  height: 580px;
  position: relative;
  border: 1px solid #e7e7e7;
}
.jymainwz .jymright .jynrs .fenye .fenyedao {
  position: absolute;
  left: 400px;
  bottom: 0px;
}
.tiaoshuss {
  position: absolute;
  font-style: normal;
  left: 320px;
  bottom: 20px;
  font-size: 10px;
  color: #999;
}
.jymainwz .jymright .jynrs .fenye ul li {
  margin-top: 0px;
  width: 10px;
}
</style>
