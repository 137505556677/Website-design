<template>
  <div id="ymjiaoshi">
    <yheader></yheader>
    <ynavlink></ynavlink>
    <div class="ymjswz">
      <div class="ymjstop">
        <p>您的位置：<i>系部首页</i>>><i>教师风采</i></p>
      </div>
      <div class="jsfctp">
        <img src="../../assets/teachers/1.jpg" alt="" class="images">
        <img src="../../assets/teachers/2.jpg" alt="" class="images">
        <img src="../../assets/teachers/3.jpg" alt="" class="images">
        <img src="../../assets/teachers/4.jpg" alt="" class="images">
        <img src="../../assets/teachers/6.jpg" alt="" class="images">
        <img src="../../assets/teachers/7.jpg" alt="" class="images">
        <img src="../../assets/teachers/9.jpg" alt="" class="images">
        <img src="../../assets/teachers/10.jpg" alt="" class="images">
        <img src="../../assets/teachers/11.jpg" alt="" class="images">
        <img src="../../assets/teachers/18.jpg" alt="" class="images">
        <img src="../../assets/teachers/21.jpg" alt="" class="images">
        <img src="../../assets/teachers/26.jpg" alt="" class="images">
        <img src="../../assets/teachers/27.jpg" alt="" class="images">
        <img src="../../assets/teachers/19.jpg" alt="" class="images">
        <img src="../../assets/teachers/30.jpg" alt="" class="images">
      </div>
    </div>
    <yfoot></yfoot>
  </div>
</template>

<script>
import yheader from "@/view/yidong/y_header";
import ynavlink from "@/view/yidong/y_navlink";
import yfoot from "@/view/yidong/y_foot";

export default {
  data() {
    return {
    }
  },
  components: {
    yheader,
    ynavlink,
    yfoot
  },
  methods: {}
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.images{
  width: 420px;
}
element.style {
  margin: 0;
  padding: 0;
}
#ymjiaoshi {
  width: 420px;
}
.ymjswz .ymjstop i {
  font-style: normal;
  color: #008cba;
}
.ymjswz .ymjstop {
  margin-top: 20px;
}
.ymjswz .jsfctp{
  height: 2160px;
}
</style>