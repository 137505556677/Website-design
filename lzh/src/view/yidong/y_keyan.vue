<template>
  <div id="ymxinwen">
    <yheader></yheader>
    <ynavlink></ynavlink>
    <div class="ymjywz">
      <img src="../../assets/images/guanggaor100x260.jpg" alt="" />
      <img class="ymimg" src="../../assets/images/shouye_fengjin.jpg" alt="">
      <img class="ymimgs" src="../../assets/images/shouye_fengjin1.jpg" alt="">
      <div class="jynr">
        <h3>科学教研</h3>
            <div class="jydaohang">
              <ul>
                <li>
                  <a href="#">
                    <img src="../../assets/images/kx1.jpg" class="pictures" alt="">
                    计算机工程系召开考风考纪主题..</a>
                  <span>2021-06-11</span>
                </li>
                <li>
                  <a href="#">
                    <img src="../../assets/images/jx2.png" class="pictures" alt="">
                    计算机工程系开展开学第一天教..</a>
                  <span>2021-09-01</span>
                </li>
                <li>
                  <a href="#">
                    <img src="../../assets/images/jx3.png" class="pictures" alt="">
                    计算机工程系召开立体式教材项..</a>
                  <span>2020-11-28</span>
                </li>
                <li>
                  <a href="#">
                    <img src="../../assets/images/jx4.png" class="pictures" alt="">
                    计算机工程系举行结对共建研..</a>
                  <span>2020-11-14</span>
                </li>
              </ul>
              <div class="fenyes">
                <i class="tiaoshus">共93条</i>
                <el-pagination
                  class="fenyedao"
                  background
                  layout="prev, pager, next"
                  :total="30"
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
.pictures{
  width: 90px;
}
element.style {
  margin: 0;
  padding: 0;
}
#ymxinwen {
  width: 420px;
}
.jynr {
  width: 420px;
  margin-top: 10px;
}
.jynr h3 {
  font-weight: 400;
  background-image: linear-gradient(to right, #92fe9d 0%, #00c9ff 100%);
  color: white;
  height: 30px;
  line-height: 30px;
  background-color: #f5f5f5;
  border-left: 4px solid #5584B0;
  padding-left: 10px;
}
.ymjywz {
  width: 420px;
  margin-top: 20px;
  margin-left: 2px;
}
.jynr ul{
  width: 410px;
}
.jynr ul li {
  font-size: 14px;
  width: 420px;
  margin-top: 14px;
  margin-left: 5px;
}
.jynr ul li a:hover {
  color: orange;
  text-decoration: underline;
}
.jynr ul li span {
  padding-right: 20px;
  float: right;
  color: #999;
}
.jynr .jydaohang {
  height: 380px;
  position: relative;
  border: 1px solid #e7e7e7;
}
.jynr .fenyes .fenyedao ul {
  width: 120px;
}
.jynr .fenyes .fenyedao {
  width: 200px;
  position: absolute;
  left: 75px;
  bottom: -4px;
}
.tiaoshus {
  display: block;
  position: absolute;
  font-style: normal;
  left: 30px;
  bottom: 16px;
  font-size: 10px;
  color: #999;
}
.jynr .fenyes ul li {
  margin-top: 0px;
  width: 10px;
}

</style>