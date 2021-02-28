<template>
  <el-container>
    <el-header class="custom-header"
      ><toolbar @buttonclick="showDrawerMenu = true"></toolbar
    ></el-header>
    <el-container>
      <el-aside width="200px" class="hidden-xs-only custom-aside"
        ><list style="width: 100%" @select="showAndChangeBreadcrumb"></list
      ></el-aside>
      <el-drawer :withHeader="false" v-model="showDrawerMenu" direction="ltr">
        <list style="width: 100%" @select="showAndChangeBreadcrumb"></list>
      </el-drawer>
      <el-container class="custom-container">
        <el-header height="30px" class="custom-container-header">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item v-for="(v, k) in breadcrumbs" :key="k">{{
              v
            }}</el-breadcrumb-item>
          </el-breadcrumb>
        </el-header>
        <el-main class="custom-container-main"
          >Main
          <component :is="component"></component>
        </el-main>
        <el-footer height="40px" class="custom-container-footer"
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
  ElBreadcrumb,
  ElBreadcrumbItem,
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
    ElBreadcrumb: ElBreadcrumb,
    ElBreadcrumbItem: ElBreadcrumbItem,
  },

  data() {
    return {
      showDrawerMenu: false,
      breadcrumbs: ["首页"],
      tempMenu: "",
      component: "Home",
    };
  },

  methods: {
    showAndChangeBreadcrumb(index, indexPath) {
      this.breadcrumbs = new Array();
      if (indexPath[0] != "Home") {
        indexPath.splice(0, 0, "Home");
      }
      indexPath.forEach((v) => {
        this.breadcrumbs.push(this.translate(v));
      });
      this.component = index;
      document.title = `宁职生鲜-${this.translate(index)}`;
    },
    translate(word) {
      const zh = {
        Home: "首页",
        Goods: "商品管理",
        InsertGoods: "新增商品",
        SelectGoods: "查询商品",
        Classification: "分类管理",
        InsertClassification: "新增分类",
        SelectClassification: "查询分类",
        Order: "订单管理",
        SelectOrder: "查询订单",

        Promotion: "促销管理",
        Coupon: "优惠券管理",
        InsertCoupon: "新增优惠券",
        SelectCoupon: "查询优惠券",
        Setting: "设置",
        AdSetting: "广告设置",
        HomePageAds: "首页广告",
        HomePageCarouselMapAds: "首屏轮播广告",
      };

      return zh[word];
    },
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

.custom-header {
  background: #409eff;
  color: white;
}

.custom-aside {
  border-right: solid 1px #e6e6e6;
  background: #fff;
}
.custom-container {
  height: calc(100vh - 60px);
  justify-content: between-space;
}
.custom-container-header {
  margin: 10px;
  background: #fff;
  display: flex;
  align-items: center;
}
.custom-container-main {
  padding: 10px;
  background: #fff;
  margin: 0 10px 10px 10px;
}
.custom-container-footer {
  background: #409eff;
  color: white;
  display: flex;
  align-items: center;
}
</style>
