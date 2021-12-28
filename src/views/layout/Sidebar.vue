<template>
  <div>
    <el-menu default-active="1">
      <el-menu-item index="1">
        <el-icon><home-filled /></el-icon>
        <span>主页</span>
      </el-menu-item>
      <el-sub-menu index="2">
        <template #title>
          <el-icon><management /></el-icon>
          <span>视频类别</span>
        </template>
        <el-menu-item index="2-1">数据结构</el-menu-item>
        <el-menu-item index="2-2">计算机原理</el-menu-item>
        <el-menu-item index="2-3">JAVA课程</el-menu-item>
      </el-sub-menu>
      <el-menu-item index="3">
        <el-icon><collection /></el-icon>
        <span>我的收藏</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script setup>
import { ElMenu, ElMenuItem } from 'element-plus'
import { HomeFilled, Management, Collection } from '@element-plus/icons-vue'
import { reactive } from 'vue'

const menus = reactive({

})

</script>

<style lang="less" scoped>
.el-menu {
  height: 100%;
}
</style>