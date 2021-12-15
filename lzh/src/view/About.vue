<template>
  <div id="home">
    <login></login>
    <navlink></navlink>
    <div id="xwmain">
      <div class="xwmainwz">
        <div class="xwmrights">
          <div class="xwnrs">
            <h3>系部新闻</h3>
            <div class="xwdaohang">
              <ul>
                <li class="widthss">
                  <router-link to="/xwcontent">
                    <img src="../assets/images/xwnr.jpg" alt="" class="pic"> 
                    <i class="ccc">计算机工程系党总支召开党员学习会议</i>
                    <i class="cccs">9月30日下午，计算机工程系党总支组织全体党员在北校区校友室召开党员学习会议。会议由学生党支部书记于振华主持。</i>
                  </router-link>
                  <span>2021-10-20</span>
                </li>
                <li class="widthss">
                  <router-link to="/xwcontent">
                    <img src="../assets/images/xwen1.jpg" alt="" class="pic"> 
                    <i class="ccc">扶国书记莅临计算机工程系调研</i>
                    <span class="cccw">9月28日上午，学校党委书记扶国莅临计算机工程系调研，教务处、人事处和党办的有关同志陪同调研。计算机系领导班子成员、教工与学生支部支委、各教研室（专业）主任以及辅导员参加座谈。</span>
                  </router-link>
                  <span>2021-09-29</span>
                </li>
                <li class="widthss">
                  <router-link to="/xwcontent">
                    <img src="../assets/images/细纹.jpg" alt="" class="pic"> 
                    <i class="ccc">月满中秋，情暖计机 ——计算机工程系举办中秋茶话会</i>
                    <span class="cccw">佳节牵情思，计机暖人心。9月21日晚，计算机工程系在南校区6栋104教室举办了“欢度中秋，喜迎国庆”茶话会。我系21级新生代表、班助等58名同学参加茶话会，系主任周洁文、辅导员和班主任到场和大家齐聚一堂，共度佳节。</span>
                  </router-link>
                  <span>2021-09-23</span>
                </li>
                <li class="widthss">
                  <router-link to="/xwcontent">
                    <img src="../assets/images/xwen3.jpg" alt="" class="pic"> 
                    <i class="ccc">计算机工程系召开2021级新生开学典礼</i>
                    <span class="cccw">9月14日上午，计算机工程系在南校区学术报告厅举行2021级新生开学典礼暨入学教育。系主任周洁文、系党总支副书记蒋南牧、系副主任周春出席开学典礼，各专业教研室主任</span>
                  </router-link>
                  <span>2021-09-15</span>
                </li>
              </ul>
              <div class="fenye">
                <i class="tiaoshuss">共562条</i>
                <el-pagination
                  class="fenyedao"
                  background
                  layout="prev, pager, next"
                  :total="480"
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
.pimg{
  width: 300px;
}
.pimgs{
  width: 300px;
}
#xwmain {
  width: 100%;
}
.xwmainwz {
  width: 1200px;
  height: 580px;
  margin: 0 auto;
  font-size: 13px;
  position: relative;
}
.pic{
  width: 200px;
}
.xwmainwz .xwmrights {
  float: left inherit;
  
}
.xwmainwz .xwmrights .xwnrs {
  margin-top: 10px;
}
.xwmainwz .xwmrights .xwnrs h3 {
  font-weight: 400;
  background-image: linear-gradient(to right, #92fe9d 0%, #00c9ff 100%);
  color: white;
  height: 30px;
  font-size: 18px;
  line-height: 30px;
  background-color: #f5f5f5;
  border-left: 4px solid #5584B0;
  padding-left: 10px;
}
.xwmainwz .xwmrights .xwnrs ul li {
  width: 1171px;
  margin-top: 0px;
  margin-left: 12px;
  border-bottom: 1px solid #00c9ff;
}
.widthss{
  height: 120px;
}
.xwmainwz .xwmrights .xwnrs ul li a:hover {
  color: #00c9ff;
  margin-left: 1px;
  font-size: 18px;
  transition: 0.6s all;
  text-decoration: underline;
}
.xwmainwz .xwmrights .xwnrs ul li span {
  float: right;
  margin-top: 80px;
  color: #999;
}
.xwmainwz .xwmrights .xwnrs .xwdaohang img{
  margin-top: 5px;
  float: left;
}
.xwmainwz .xwmrights .xwnrs .xwdaohang .ccc{
  float: left;
  margin-bottom: -100px;
  font-size: 18px;
}
.xwmainwz .xwmrights .xwnrs .xwdaohang .cccs{
  float: left;
  margin-top: 30px;
}
.xwmainwz .xwmrights .xwnrs .xwdaohang .cccw{
  margin-top: -80px;
  margin-left: 200px;
  color: black;
}
.xwmainwz .xwmrights .xwnrs .xwdaohang {
  height: 530px;
  position: relative;
  border: 1px solid #e7e7e7;
}
.xwmainwz .xwmrights .xwnrs .fenye .fenyedao {
  position: absolute;
  left: 400px;
  bottom: -2px;
}
.fenye .fenyedao ul{
  width: 380px;
}
.tiaoshuss {
  position: absolute;
  font-style: normal;
  left: 330px;
  bottom: 18px;
  font-size: 10px;
  color: #999;
}
.xwmainwz .xwmrights .xwnrs .fenye ul li {
  margin-top: 0px;
  width: 10px;
}
</style>
