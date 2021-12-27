<template>
  <div class="header">
    <div class="title">KKB 搜课吧</div>
    <ElInput class="search" placeholder="请输入搜索关键字"/>
  </div>
</template>

<script setup>
import { ElInput } from 'element-plus'
</script>

<style lang="less">
.header {
  height: 60px;
  border-bottom: 1px solid #eee;
  padding: 0 40px;
  display: flex;
  align-items: center;

  .title {
    height: 60px;
    display: flex;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
  }

  .search {
    width: 500px;
    margin: 0 auto;
  }
}
</style>