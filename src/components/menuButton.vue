<template>
  <el-button class="custom" @click="handler">
    <div class="con" >
      <span :class="['line_container', { close: close }]">
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
      </span>
    </div>
  </el-button>
</template>
<script>
import { ElButton } from "element-plus";

export default {
  name: "menuButton",
  components: {
    ElButton: ElButton,
  },
  props: {
    close: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handler() {
      this.$emit("click");
    },
  },
};
</script>
<style scoped>
.con {
  display: flex;
  justify-content: center;
  justify-items: center;
  align-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
}
.line_container {
  position: relative;
  width: 100%;
  height: 100￥;
  display: block;
  min-width: 30px;
  min-height: 30px;
  -o-box-sizing: border-box;
  -ms-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.line {
  position: absolute;
  width: 30px;
  height: 5px;
  background: rgba(0, 0, 0, 0.5);
  margin: 0;
  padding: 0;
  left: 0;
  line-height: 0;
  -o-transition: left center;
  -ms-transition: left center;
  -moz-transition: left center;
  -webkit-transition: left center;
  transition: all 0.5s linear;
  border-radius: 10px;
}
.line:first-child {
  top: 3px;
  -o-transform-origin: left center;
  -ms-transform-origin: left center;
  -moz-transform-origin: left center;
  -webkit-transform-origin: left center;
  transform-origin: left center;
}
.line:nth-child(2) {
  top: 13px;
}
.line:last-child {
  top: 23px;
  -o-transform-origin: left center;
  -ms-transform-origin: left center;
  -moz-transform-origin: left center;
  -webkit-transform-origin: left center;
  transform-origin: left center;
}
.custom {
  padding: 12px;
  width: 30px;
  -o-box-sizing: content-box;
  -ms-box-sizing: content-box;
  -moz-box-sizing: content-box;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
  height: 30px;
  min-height: 30px;
  background: #409EFF;
}
.close > .line:first-child {
  -o-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  left: 2px;
  top: 0px;
  width: 36px;
}
.close > .line:nth-child(2) {
  opacity: 0;
}
.close > .line:last-child {
  -o-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  left: 2px;
  top: 25px;
  width: 36px;
}
</style>