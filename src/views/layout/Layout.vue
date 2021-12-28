<template>
  <Header />
  <div class="main">
    <Sidebar class="sidebar"/>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import Header from './Header.vue'
import Sidebar from './Sidebar.vue'
</script>

<style lang="less" scoped>
.main {
  height: calc(100vh - 60px);
  display: flex;

  .sidebar {
    width: 240px;
    height: 100%;
  }

  .content {
    width: calc(100vw - 240px);
    height: 100%;
  }
}
</style>