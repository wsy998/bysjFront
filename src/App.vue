<template>
  <el-container>
    <el-header style="background:#409EFF;color:white"
      ><toolbar @buttonclick="showDrawerMenu = true"></toolbar
    ></el-header>
    <el-container>
      <el-aside
        width="200px"
        class="hidden-xs-only"
        style="border-right: solid 1px #e6e6e6;background:#fff"
        ><list></list
      ></el-aside>
      <el-drawer
        :withHeader="false"
        v-model="showDrawerMenu"
        direction="ltr"
        style="width: 200px;"
      >
        <list style="width: 100%;"></list>
      </el-drawer>

      <el-container
        style="height:calc(100vh - 60px);justify-content:between-space;"
      >
        <el-header height="30px" style="margin:10px;background:#fff">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item>首页</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
          </el-breadcrumb>
        </el-header>
        <el-main style="padding:10px;background:#fff;margin:0 10px 10px 10px;"
          >Main</el-main
        >
        <el-footer height="40px" style="background:#409EFF;color:white"
          >版权归王澍洋所有，仅用于演示</el-footer
        >
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import toolbar from "@/components/toolbar.vue";
import menu from "@/components/menu.vue";
import {
  ElContainer,
  ElHeader,
  ElAside,
  ElMain,
  ElFooter,
  ElDrawer,
  ElBreadcrumb,ElBreadcrumbItem
} from "element-plus";

export default {
  name: "App",
  components: {
    Toolbar: toolbar,
    ElContainer: ElContainer,
    ElHeader: ElHeader,
    ElAside: ElAside,
    ElMain: ElMain,
    ElFooter: ElFooter,
    List: menu,
    ElDrawer: ElDrawer,
    ElBreadcrumb:ElBreadcrumb,
    ElBreadcrumbItem:ElBreadcrumbItem
  },
  data() {
    return {
      showDrawerMenu: false,
    };
  },
};
</script>

<style scoped>
.workSpace {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: calc(100% - 70px);
}
</style>
