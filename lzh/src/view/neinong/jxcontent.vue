<template>
  <div id="home">
    <login></login>
    <navlink></navlink>
    <div id="jxnrmain">
        <div class="jxnrwz">
            <div class="jxnrtop">
                <span class="tio">计算机工程系</span>
                <div class="lefts">您的位置：<router-link to="home" class="pink">系部首页</router-link>>><router-link to="jiaoshi" class="pink">教学科研</router-link>>>正文</div>
            </div>
            <div class="jxnrzt">
                <h3>计算机工程系开展开学第一天教学检查</h3>
                <p class="jxnrsi">来源：计算机工程系 发布时间：2021-03-01</p>
                <div class="jxnrcontent">
                    <p class="yangshi">为了进一步加强教学质量管理和教风学风建设，2021年3月1日，新学期开课第一天，计算机工程系教学副主任和系督导对本系教学秩序、课堂教学、学生出勤、教学环境及设备运行情况进行了检查。</p>
                    <p class="yangshi">从检查情况来看，教师们开学前期都做了扎实、细致的准备，所有教师早早进入教室做好上课准备，上课热情饱满，教学秩序良好，教学设备运转正常，授课教材全部到位；学生精神饱满，出勤情况良好，课堂秩序井然，充分展现了计算机系教风、学风建设的新气象，新面貌。接下来计算机系将持续做好教风和学风建设工作，确保教学质量不断提高，学生学习热情不减。</p>
                </div>
                <div class="jxnrimg">
                    <img src="../../assets/images/jxcontent.png" alt="">
                </div>
                <div class="jxnrfoot">
                    <p>上一条：<span class="color">计算机工程系召开考风考纪主题会议</span></p>
                    <br>
                    <p>下一条：<span class="color">计算机工程系召开立体式教材项目研讨会</span></p>
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
#jxnrmain{
    width: 100%;
    height: 100%;
}
.jxnrwz{
    width: 1200px;
    margin: 0 auto;
}
.jxnrwz .pink{
    color: #00c9ff;
}
.jxnrtop {
    margin-top: 5px;
    width: 1200px;
    height: 32px;
    padding-bottom: 5px;
    margin-bottom: 5px;
    border-bottom: 1px solid #00c9ff;
}
.jxnrtop .tio{
    float: left;
    color: #00c9ff;
    font-size: 20px;
}
.jxnrtop .lefts{
    margin-left: 900px;
}
.jxnrzt{
    margin: 0 auto;
    text-align: center;
}
.jxnrzt h3{
    font-size: 28px;
    color: #00c9ff;
}
.jxnrzt .jxnrsi{
    margin-top: 5px;
    font-size: 15px;
    color: #787878;
}
.jxnrcontent{
    width: 1150px;
    margin: 0 auto;
    margin-top: 28px;
}
.jxnrcontent .yangshi{
    text-indent: 2em;
    font-size: 20px;
    text-align: left;
    margin-top: 7px;
}
.jxnrimg{
    margin-top: 25px;
}
.jxnrimg img{
    width: 600px;
}
.jxnrfoot{
    text-align: left;
    margin-top: 50px;
    ;margin-bottom: 30px;
}
</style>
