<template>
  <div id="yxinwen">
    <div class="yxwwc">
      <el-tabs v-model="activeName" class="wenxins">
        <el-tab-pane label="图片新闻" name="first" class="tupians">
          <el-carousel
            :interval="5000"
            arrow="always"
            :height="bannerHeight + 'px'"
            style="margin: 10px; margin-top: 18px"
          >
            <el-carousel-item v-for="item in image" :key="item.image">
              <el-row :gutter="15">
                <el-col
                  :xs="24"
                  :sm="24"
                  :md="24"
                  :lg="24"
                  :xl="24"
                  class="one"
                >
                  <img
                    ref="bannerHeight"
                    :src="item.url"
                    alt=""
                    @load="imgLoad"
                    style="width: 100%"
                  />
                </el-col>
              </el-row>
            </el-carousel-item>
          </el-carousel>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "first",
      image: [
        { url: require("../../assets/images/xinwen1.png") },
        { url: require("../../assets/images/xinwen2.png") },
        { url: require("../../assets/images/xinwen3.png") },
        { url: require("../../assets/images/xinwen4.jpg") },
      ],
      bannerHeight: "",
    };
  },
  components: {},
  mounted() {
    this.imgLoad();
    window.addEventListener(
      "resize",
      () => {
        this.bannerHeight = this.$refs.bannerHeight[0].height;
        this.imgLoad();
      },
      false
    );
  },
  methods: {
    imgLoad() {
      this.$nextTick(() => {
        this.bannerHeight = this.$refs.bannerHeight[0].height;
        var testH = document.getElementById("div");
        testH.style.height = this.bannerHeight + "px";
      });
    },
  },
};
</script>

<style>
#ynavlink {
  width: 100%;
  height: 100%;
  background-color: #3c5a7e;
}
#ynavlink .ydaohang {
  margin: 0 auto;
}
#ynavlink .ydaohang .tac {
  width: 426px;
  z-index: 99;
}
.el-menu-vertical-demo {
  width: 427px;
}
.el-menu-vertical-demo {
  margin-top: -10px;
}
.el-menu-item-group__title {
  padding: 0px 0 0px 20px;
}
.yxwwc {
  width: 400px;
  height: 290px;
}
.yxwwc .tupians{
  width: 424px;
  height: 210px;
  margin-top: -10px;
}
.yxwwc .wenxins{
  float: left;
  width: 424px;
  height: 290px;
  margin-bottom: 10px;
}
</style>
