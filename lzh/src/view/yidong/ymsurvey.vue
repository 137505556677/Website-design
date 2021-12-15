<template>
  <div id="ymxinwen">
    <yheader></yheader>
    <ynavlink></ynavlink>
    <div class="ymsurwz">
      <div class="surnr">
        <h3>系部概况</h3>
            <div class="surdaohang">
              <ul>
                <li>
                  <a href="#">
                    <img src="../../assets/images/R-C.jpg" class="picture" alt="">
                    计算机工程系简介</a>
                  <span>2021-04-15</span>
                </li>
                <li>
                  <a href="#">
                    <img src="../../assets/images/gk1.jpg" class="picture" alt="">
                    计算机工程系系各专业简介</a>
                  <span>2021-04-15</span>
                </li>
                <li>
                  <a href="#">
                    <img src="../../assets/images/gk2.jpg" class="picture" alt="">
                    计算机工程系组织结构图</a>
                  <span>2021-04-14</span>
                </li>
                <li>
                  <a href="#">
                    <img src="../../assets/images/gk4.jpg" class="picture" alt="">
                    计算机工程系实训室介绍</a>
                  <span>2021-09-14</span>
                </li>
              </ul>
              <div class="fenyeww">
                <i class="tiaoshuww">共20条</i>
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
    <yfoot></yfoot>
  </div>
</template>

<script>
import yheader from '@/view/yidong/y_header'
import ynavlink from '@/view/yidong/y_navlink'
import yfoot from '@/view/yidong/y_foot'

export default {
  data() {
    return {};
  },
  components: {
      yheader,
      ynavlink,
      yfoot
  },
  methods: {},
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
element.style {
  margin: 0;
  padding: 0;
}
#ymxinwen {
  width: 420px;
}
.surnr {
  width: 420px;
  margin-top: 10px;
}
.surnr h3 {
  font-weight: 400;
  background-image: linear-gradient(to right, #92fe9d 0%, #00c9ff 100%);
  color: white;
  height: 30px;
  line-height: 30px;
  background-color: #f5f5f5;
  border-left: 4px solid #5584B0;
  padding-left: 10px;
}
.ymsurwz {
  width: 420px;
  margin-top: 20px;
  margin-left: 2px;
}
.surnr ul{
  width: 410px;
}
.surnr ul li {
  font-size: 14px;
  width: 420px;
  margin-top: 14px;
  margin-left: 5px;
}
.surnr ul li a:hover {
  color: orange;
  text-decoration: underline;
}
.surnr ul li span {
  padding-right: 20px;
  float: right;
  color: #999;
}
.surnr .surdaohang {
  height: 480px;
  position: relative;
  border: 1px solid #e7e7e7;
}
.surnr .fenyeww .fenyedao ul {
  width: 80px;
}
.surnr .fenyeww .fenyedao {
  width: 200px;
  position: absolute;
  left: 75px;
  bottom: -4px;
}
.tiaoshuww {
  display: block;
  position: absolute;
  font-style: normal;
  left: 30px;
  bottom: 16px;
  font-size: 10px;
  color: #999;
}
.surnr .fenyeww ul li {
  margin-top: 0px;
  width: 10px;
}

</style>