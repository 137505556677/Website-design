<template>
  <div id="m_home">
    <yheader></yheader>
    <ynavlink class="ynavlink"></ynavlink>
    <ybanner class="bannerwz"></ybanner>
    <yxinwen></yxinwen>
    <yxibu class="yxibu"></yxibu>
    <ygonggao class="ygonggao"></ygonggao>
    <yjiuye></yjiuye>
    <yfoot></yfoot>
  </div>
</template>

<script>
import yheader from '@/view/yidong/y_header'
import ynavlink from '@/view/yidong/y_navlink'
import ybanner from '@/view/yidong/y_banner'
import yxinwen from '@/view/yidong/y_xinwen'
import yxibu from '@/view/yidong/y_xibu'
import ygonggao from '@/view/yidong/y_gonggao'
import yjiuye from '@/view/yidong/y_jiuye'
import yfoot from '@/view/yidong/y_foot'

export default {
		data() {
			return {};
		},
		components:{
			yheader,
            ynavlink,
            ybanner,
            yxinwen,
            yxibu,
            ygonggao,
            yjiuye,
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
.bannerwz{
    margin-top: 16px;
}
.ynavlink{
    z-index: 999;
}
.yxibu{
  margin-top: 10px;
}
.ygonggao{
  margin-top: 10px;
}
</style>