<template>
    <div>
        <login></login>
		<navlink></navlink>
        <div id="jsmain">
            <div class="jsmainwz">
                <div class="jsmtop">
                    <p>您的位置：<router-link to="home" class="pink">系部首页</router-link>>><router-link to="jiaoshi" class="pink">教师风采</router-link></p>
                </div>
                <div class="jsmnr">
                    <img src="../assets/teachers/1.jpg" alt="" class="imagess">
                    <img src="../assets/teachers/2.jpg" alt="" class="imagess">
                    <img src="../assets/teachers/3.jpg" alt="" class="imagess">
                    <img src="../assets/teachers/4.jpg" alt="" class="imagess">
                    <img src="../assets/teachers/6.jpg" alt="" class="imagess">
                    <img src="../assets/teachers/7.jpg" alt="" class="imagess">
                    <img src="../assets/teachers/9.jpg" alt="" class="imagess">
                    <img src="../assets/teachers/10.jpg" alt="" class="imagess">
                    <img src="../assets/teachers/11.jpg" alt="" class="imagess">
                    <img src="../assets/teachers/18.jpg" alt="" class="imagess">
                    <img src="../assets/teachers/21.jpg" alt="" class="imagess">
                    <img src="../assets/teachers/26.jpg" alt="" class="imagess">
                    <img src="../assets/teachers/27.jpg" alt="" class="imagess">
                    <img src="../assets/teachers/19.jpg" alt="" class="imagess">
                    <img src="../assets/teachers/30.jpg" alt="" class="imagess">
                </div>
            </div>
        </div>
		<footermain></footermain>
    </div>
</template>

<script>
import login from '@/view/Login'
import navlink from '@/view/Navlink'
import footermain from '@/view/FooterMain'
export default {
  data() {
    return {
        bannerHeight: 640,
    }
  },
  components: {
      login,
      navlink,
      footermain
  },
  methods: {
  },
};
</script>

<style>
#jsmain{
    width: 100%;
    background-color: rgb(245, 245, 245);
}
.jsmainwz{
    width: 1200px;
    height: 735px;
    margin: 0 auto;
    position: relative;
}
#jsmain .jsmainwz .jsmtop{
    padding-top: 10px;
    margin-bottom: 8px;
}
#jsmain .jsmainwz .jsmtop .pink{
    color: #00c9ff;
}
.imagess{
    width: 400px;
}
</style>