<template>
  <div style="display:flex;align-items:center;height:30%">
    <el-avatar style="margin-right:.5rem;"> user </el-avatar>
    <el-dropdown :hide-on-click="false">
      <span class="el-dropdown-link">
        用户<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>修改用户信息</el-dropdown-item>
          <el-dropdown-item>登出</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>
<script>
import {
  ElAvatar,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
} from "element-plus";

export default {
  name: "userInfo",
  components: {
    elAvatar: ElAvatar,
    elDropdown: ElDropdown,
    elDropdownMenu: ElDropdownMenu,
    elDropdownItem: ElDropdownItem,
  },
};
</script>
