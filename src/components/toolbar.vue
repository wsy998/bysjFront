<template>
  <el-row type="flex" justify="center" align="middle">
    <el-col :span="24">
      <div class="container">
        <menu-button
          @mouseenter="close = !close"
          @mouseleave="close = !close"
          @click="handler"
          :close="close"
          class="hidden-sm-and-up"
        ></menu-button>
        <h1>宁职生鲜</h1>
        <user-info></user-info>
      </div>
    </el-col>
  </el-row>
</template>
<script>
import { ElRow, ElCol } from "element-plus";
import menuButton from "@/components/menuButton.vue";
import userInfo from "@/components/userInfo.vue";
export default {
  name: "toolbar",
  components: {
    menuButton: menuButton,
    ElRow: ElRow,
    ElCol: ElCol,
    UserInfo: userInfo,
  },
  data() {
    return {
      close: false,
    };
  },
  methods: {
    handler() {
      this.$emit("buttonclick");
    },
  },
};
</script>
<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
}
</style>