<template>
  <div id="home">
    <login></login>
    <navlink></navlink>
    <div id="gkmain">
      <div class="gkmainwz">
        <div class="gkmright">
          <div class="gknr">
            <h3>系部概况</h3>
            <div class="gkdaohang">
              <ul>
                <li class="widthss">
                  <router-link to="/gkcontent">
                    <img src="../assets/images/R-C.jpg" alt="" class="pics"> 
                    <i class="ccc">计算机工程系简介</i>
                    <i class="cccs">计算机工程系承担着计算机专业人才的培养，及全院计算机相关的基础课程，为社会提供技术支持和服务。</i>
                  </router-link>
                  <span>2021-10-20</span>
                </li>
                <li class="widthss">
                  <router-link to="/gkcontent">
                    <img src="../assets/images/gk1.jpg" alt="" class="pics"> 
                    <i class="ccc">计算机工程系组织结构图</i>
                    <span class="cccww">计算机工程系组织结构图详情</span>
                  </router-link>
                  <span>2021-09-29</span>
                </li>
                <li class="widthss">
                  <router-link to="/gkcontent">
                    <img src="../assets/images/gk2.jpg" alt="" class="pics"> 
                    <i class="ccc">计算机工程系实训室介绍</i>
                    <span class="cccw">计算机工程系实训室主要位于学院水东湾新城南校区6号教学楼。目前，计算机实验室的教学实验室有18间，建筑面积约有2200平方米，电脑、投影、服务器、摄像机、多媒体设备等台套数量约1128台/套</span>
                  </router-link>
                  <span class="sapnss">2021-09-23</span>
                </li>
                <li class="widthss">
                  <router-link to="/gkcontent">
                    <img src="../assets/images/gk4.jpg" alt="" class="pics"> 
                    <i class="ccc">计算机工程系系徽</i>
                    <span class="cccww">计算机工程系系徽照片</span>
                  </router-link>
                  <span class="sapns">2021-04-12</span>
                </li>
              </ul>
              <div class="fenye">
                <i class="tiaoshuss">共20条</i>
                <el-pagination
                  class="fenyedao"
                  background
                  layout="prev, pager, next"
                  :total="20"
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
#gkmain {
  width: 100%;
}
.pics{
  width: 150px;
}
.gkmainwz {
  width: 1200px;
  height: 650px;
  margin: 0 auto;
  font-size: 13px;
  position: relative;
}
.gkmainwz .gkmright .gknr ul li .sapnss{
  margin-top: -10px;
}
.gkmainwz .gkmright .gknr ul li .sapns{
  margin-top: 110px;
  margin-right: -73px;
}
.gkmainwz .gkmright {
  float: left inherit;
}
.gkmainwz .gkmright .gknr {
  margin-top: 10px;
}
.gkmainwz .gkmright .gknr h3 {
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
.gkmainwz .gkmright .gknr ul li {
  width: 1171px;
  margin-top: 0px;
  margin-left: 12px;
}
.gkmainwz .gkmright .gknr ul li a:hover {
  color: #00c9ff;
  margin-left: 10px;
  font-size: 20px;
  transition: 0.6s all;
  text-decoration: underline;
}
.gkmainwz .gkmright .gknr ul li span {
  float: right;
  color: #999;
  margin-top: 80px;
}
.gkmainwz .gkmright .gknr .gkdaohang img{
  margin-top: 5px;
  float: left;
}
.gkmainwz .gkmright .gknr .gkdaohang .ccc{
  float: left;
  margin-bottom: -100px;
  font-size: 18px;
}
.gkmainwz .gkmright .gknr .gkdaohang .cccs{
  float: left;
  margin-top: 30px;
}
.gkmainwz .gkmright .gknr .gkdaohang .cccw{
  margin-top: -80px;
  margin-left: 150px;
  color: black;
}
.gkmainwz .gkmright .gknr .gkdaohang .cccww{
  margin-top: 40px;
  color: black;
  float: left;
}
.gkmainwz .gkmright .gknr .gkdaohang {
  height: 580px;
  position: relative;
  border: 1px solid #e7e7e7;
}
.gkmainwz .gkmright .gknr .fenye .fenyedao {
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
.gkmainwz .gkmright .gknr .fenye ul li {
  margin-top: 0px;
  width: 10px;
}
</style>
