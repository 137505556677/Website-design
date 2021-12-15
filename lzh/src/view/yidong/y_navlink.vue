<template>
  <div id="ynavlink">
    <div class="ydaohang">
      <el-row class="tac">
        <el-col>
          <el-menu
            class="el-menu-vertical-demos"
            text-color="#fff"
            background-color="#00c9ff"
            active-text-color="#ffd04b"
          >
            <el-submenu index="1">
              <template slot="title">
                <span>计算机工程系</span>
              </template>
              <el-menu-item-group class="wc">
                <el-menu-item index="1-2" class="wwc">系部首页</el-menu-item>
                <el-menu-item index="1-2" class="wwc"><router-link to="/ymxinwen" class="wi">系部新闻</router-link></el-menu-item>
                <el-menu-item index="1-2" class="wwc"><router-link to="/ymsurvey" class="wi">系部概况</router-link></el-menu-item>
                <el-menu-item index="1-2" class="wwc"><router-link to="/ykeyan" class="wi">科学科研</router-link></el-menu-item>
                <el-menu-item index="1-2" class="wwc">党建工作</el-menu-item>
                <el-menu-item index="1-2" class="wwc">学生工作</el-menu-item>
                <el-menu-item index="1-2" class="wwc">招生就业</el-menu-item>
                <el-menu-item index="1-2" class="wwc"><router-link to="/yjiaoshi" class="wi">教师风采</router-link></el-menu-item>
                <el-menu-item index="1-2" class="wwc">制度建设</el-menu-item>
                <el-menu-item index="1-2" class="wwc">技能竞赛</el-menu-item>
                <el-menu-item index="1-2" class="wwc">学院首页</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-row>
    </div>
    <div>

    </div>
  </div>
</template>

<script>

</script>

<style>
#ynavlink {
  width: 100%;
  height: 100%;
}
#ynavlink .ydaohang {
  margin: 0 auto;
}
#ynavlink .ydaohang .tac{
    width: 426px;
    z-index: 99;
}
#ynavlink .ydaohang .tac .el-menu{
    width: 425px;
}
#ynavlink .ydaohang .tac .wwc{
    width: 425px;
}
#ynavlink .ydaohang .tac .wwc .wi {
  color: white;
}
.el-menu-vertical-demos{
    width: 427px;
}
.el-menu-vertical-demos{
    margin-top: -10px;
}
.el-menu-item-group__title {
    padding: 0px 0 0px 20px;
}
</style>
