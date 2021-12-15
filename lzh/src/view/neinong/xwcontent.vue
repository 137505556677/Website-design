<template>
  <div id="home">
    <login></login>
    <navlink></navlink>
    <div id="xwnrmain">
        <div class="xwnrwz">
            <div class="xwnrtop">
                <span class="tio">计算机工程系</span>
                <div class="lefts">您的位置：<router-link to="home" class="pink">系部首页</router-link>>><router-link to="jiaoshi" class="pink">系部新闻</router-link>>>正文</div>
            </div>
            <div class="xwnrzt">
                <h3>计算机工程系党总支召开党员学习会议</h3>
                <p class="xwnrsi">来源：计算机工程系 发布时间：2021-10-20</p>
                <div class="xwnrcontent">
                    <p class="yangshi">9月30日下午，计算机工程系党总支组织全体党员在北校区校友室召开党员学习会议。会议由学生党支部书记于振华主持。</p>
                    <p class="yangshi">会议共分两个议题。第一议题认真学习了习近平新时代中国特色社会主义思想。第二议题对新修订的《中国共产党普通高等学校基层组织工作条例》进行学习，该《条例》坚持以党章为根本依据，内容更加详实完善，全面规范了高校党组织党建工作，重申了思想政治工作的根本要求，明确了思想政治工作的目标和任务。会后，各党员同志对习近平新思想和《条例》指示精神有了更清楚的认知，学习领悟也更加透彻。</p>
                    <p class="yangshi">周洁文同志要求我系全体老师要认真学习习近平新思想，深入领会《条例》精神，全面掌握《条例》内容，严格遵守和执行《条例》规定，坚定理想追随，立足学用结合，指导工作实践。</p>
                </div>
                <div class="xwnrimg">
                    <img src="../../assets/images/xwnr.jpg" alt="">
                    <p>撰稿：于振华   审核：蒋南牧</p>
                </div>
                <div class="xwnrfoot">
                    <p>下一条：计算机工程系深入学习习近平总书记给全国高校黄大年式教师团队代表的回信精神</p>
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
#xwnrmain{
    width: 100%;
    height: 100%;
}
.xwnrwz{
    width: 1200px;
    margin: 0 auto;
}
.xwnrwz .pink{
    color: #00c9ff;
}
.xwnrtop {
    margin-top: 5px;
    width: 1200px;
    height: 32px;
    padding-bottom: 5px;
    margin-bottom: 5px;
    border-bottom: 1px solid #00c9ff;
}
.xwnrtop .tio{
    float: left;
    color: #00c9ff;
    font-size: 20px;
}
.xwnrtop .lefts{
    margin-left: 900px;
}
.xwnrzt{
    margin: 0 auto;
    text-align: center;
}
.xwnrzt h3{
    font-size: 28px;
    color: #00c9ff;
}
.xwnrzt .xwnrsi{
    margin-top: 5px;
    font-size: 15px;
    color: #787878;
}
.xwnrcontent{
    width: 1150px;
    margin: 0 auto;
    margin-top: 28px;
}
.xwnrcontent .yangshi{
    text-indent: 2em;
    font-size: 20px;
    text-align: left;
    margin-top: 7px;
}
.xwnrimg{
    margin-top: 25px;
}
.xwnrimg img{
    width: 600px;
}
.xwnrfoot{
    text-align: left;
    margin-top: 50px;
    ;margin-bottom: 30px;
}
</style>
