<template>
  <div id="ymjiaoshi">
    <yheader></yheader>
    <ynavlink></ynavlink>
    <div class="ymjswz">
      <div class="ymjstop">
        <p>您的位置：<i>系部首页</i>>><i>系部新闻</i></p>
        <div class="yxwnrzt">
                <h3>计算机工程系党总支召开党员学习会议</h3>
                <p class="yxwnrsi">来源：计算机工程系 发布时间：2021-10-20</p>
                <div class="yxwnrcontent">
                    <p class="yangshi">9月30日下午，计算机工程系党总支组织全体党员在北校区校友室召开党员学习会议。会议由学生党支部书记于振华主持。</p>
                    <p class="yangshi">会议共分两个议题。第一议题认真学习了习近平新时代中国特色社会主义思想。第二议题对新修订的《中国共产党普通高等学校基层组织工作条例》进行学习，该《条例》坚持以党章为根本依据，内容更加详实完善，全面规范了高校党组织党建工作，重申了思想政治工作的根本要求，明确了思想政治工作的目标和任务。会后，各党员同志对习近平新思想和《条例》指示精神有了更清楚的认知，学习领悟也更加透彻。</p>
                    <p class="yangshi">周洁文同志要求我系全体老师要认真学习习近平新思想，深入领会《条例》精神，全面掌握《条例》内容，严格遵守和执行《条例》规定，坚定理想追随，立足学用结合，指导工作实践。</p>
                </div>
                <div class="yxwnrimg">
                    <img src="../../assets/images/xwnr.jpg" alt="">
                    <p>撰稿：于振华   审核：蒋南牧</p>
                </div>
                <div class="yxwnrfoot">
                    <p>下一条：计算机工程系深入学习习近平总书记给全国高校黄大年式教师团队代表的回信精神</p>
                </div>
            </div>
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
    yfoot,
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
  height: 300px;
}
#yxwnrmain{
    width: 100%;
    height: 100%;
}
.yxwnrwz{
    width: 425px;
    margin: 0 auto;
}
.yxwnrwz .pink{
    color: #00c9ff;
}
.yxwnrtop {
    margin-top: 5px;
    width: 425px;
    height: 32px;
    padding-bottom: 5px;
    margin-bottom: 5px;
    border-bottom: 1px solid #00c9ff;
}
.yxwnrtop .tio{
    float: left;
    color: #00c9ff;
    font-size: 20px;
}
.yxwnrtop .lefts{
    margin-left: 900px;
}
.yxwnrzt{
    margin: 0 auto;
    text-align: center;
}
.yxwnrzt h3{
    font-size: 28px;
    color: #00c9ff;
}
.yxwnrzt .xwnrsi{
    margin-top: 5px;
    font-size: 15px;
    color: #787878;
}
.yxwnrcontent{
    width: 410px;
    margin: 0 auto;
    margin-top: 28px;
}
.yxwnrcontent .yangshi{
    text-indent: 2em;
    font-size: 20px;
    text-align: left;
    margin-top: 7px;
}
.yxwnrimg{
    margin-top: 25px;
}
.yxwnrimg img{
    width: 400px;
}
.yxwnrfoot{
    text-align: left;
    margin-top: 50px;
    ;margin-bottom: 30px;
}
</style>