<template>
  <div id="app">
	<router-view/>
  </div>
</template>

<script>
import Main from './view/Main.vue'

export default {
  name: 'App',
  components: {
    Main,
  },
  methods: {
    _isMobile() {
      let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
      return flag;
    }
  },
  mounted() {
    if (this._isMobile()) {
      this.$router.replace('/y_main');
    } else {
      this.$router.replace('/main');
    }
  }
}
</script>

<style>

</style>
