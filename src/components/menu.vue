<template>
  <el-menu default-active="2" :unique-opened="true">
    <el-menu-item index="Home">
      <template #title>首页</template>
    </el-menu-item>
    <el-submenu index="Goods">
      <template #title>商品管理</template>
      <el-menu-item index="InsertGoods">新增商品</el-menu-item>
      <el-menu-item index="SelectGoods">查询商品</el-menu-item>
    </el-submenu>
    <el-submenu index="Classification">
      <template #title>分类管理</template>
      <el-menu-item index="InsertClassification">新增分类</el-menu-item>
      <el-menu-item index="SelectClassification">查询分类</el-menu-item>
    </el-submenu>
    <el-submenu index="Order">
      <template #title>订单管理</template>
      <el-menu-item index="SelectOrder">查询订单</el-menu-item>
    </el-submenu>
    <el-submenu index="Promotion">
      <template #title>促销管理</template>
      <el-submenu index="Coupon">
        <template #title>优惠券管理</template>
        <el-menu-item index="InsertCoupon">新增优惠券</el-menu-item>
        <el-menu-item index="SelectCoupon">查询优惠券</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-submenu index="Setting">
      <template #title>设置</template>
      <el-submenu index="AdSetting">
        <template #title>广告设置</template>
        <el-menu-item index="HomePageAds">首页广告</el-menu-item>
        <el-menu-item index="HomePageCarouselMapAds"
          >首页轮播图广告</el-menu-item
        >
      </el-submenu>
    </el-submenu>
  </el-menu>
</template>
<script>
import { ElMenu, ElMenuItem, ElSubmenu } from "element-plus";
export default {
  name: "list",
  components: {
    ElMenu: ElMenu,
    ElMenuItem: ElMenuItem,
    ElSubmenu: ElSubmenu,
  },
};
</script>
