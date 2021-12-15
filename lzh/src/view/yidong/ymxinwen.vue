<template>
  <div id="ymxinwen">
    <yheader></yheader>
    <ynavlink></ynavlink>
    <div class="ymxwwz">
      <div class="xwnr">
        <h3>系部新闻</h3>
        <div class="xwdaohang">
          <ul>
            <li>
              <router-link to="/yxwcontent">
              <img src="../../assets/images/xwnr.jpg" class="picture" alt="">
              计算机工程系党总支召开党员学习..</router-link>
              <span>2021-09-29</span>
            </li>
            <li>
              <a href="#">
                <img src="../../assets/images/xwen1.jpg" class="picture" alt="">
              扶国书记莅临计算机工程系调研
              </a>
              <span>2021-09-29</span>
            </li>
            <li>
              <a href="#">
                <img src="../../assets/images/细纹.jpg" class="picture" alt="">
                月满中秋，情暖计机 ——计算机...</a>
              <span>2021-09-23</span>
            </li>
            <li>
              <a href="#">
                <img src="../../assets/images/xwen3.jpg" class="picture" alt="">
                计算机工程系召开2021级新生...</a>
              <span>2021-09-15</span>
            </li>
          </ul>
          <div class="fenyeq">
            <i class="mtiaoshu">共562条</i>
            <el-pagination
              class="fenyedao"
              background
              layout="prev, pager, next"
              :total="60"
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
.picture{
  width: 110px;
}
.ymimg{
  float: right;
  width: 320px;
}
.ymimgs{
  float: right;
  width: 318px;
  margin-top: -130px;
}
#ymxinwen {
  width: 420px;
}
.xwnr {
  width: 420px;
  margin-top: 10px;
}
.xwnr h3 {
  font-weight: 400;
  background-image: linear-gradient(to right, #92fe9d 0%, #00c9ff 100%);
  color: white;
  height: 30px;
  line-height: 30px;
  background-color: #f5f5f5;
  border-left: 4px solid #5584B0;
  padding-left: 10px;
}
.ymxwwz {
  width: 420px;
  margin-top: 20px;
  margin-left: 2px;
}
.xwnr ul{
  width: 410px;
}
.xwnr ul li {
  font-size: 12px;
  width: 420px;
  margin-top: 14px;
  margin-left: 5px;
}
.xwnr ul li a:hover {
  color: orange;
  text-decoration: underline;
}
.xwnr ul li span {
  padding-right: 20px;
  float: right;
  color: #999;
}
.xwnr .xwdaohang {
  height: 440px;
  position: relative;
  border: 1px solid #e7e7e7;
  font-size: 12px;
}
.xwnr .fenyeq .fenyedao ul {
  width: 240px;
}
.xwnr .fenyeq .fenyedao {
  width: 300px;
  position: absolute;
  left: 75px;
  bottom: 20px;
}
.mtiaoshu {
  display: block;
  position: absolute;
  font-style: normal;
  left: 30px;
  bottom: 40px;
  font-size: 10px;
  color: #999;
}
.xwnr .fenyeq ul li {
  margin-top: 0px;
  width: 10px;
}

</style>