<template>
  <div class="sort">
    <div
      class="sort-item"
      v-for="(item, index) in sortList"
      :key="item.key"
      :class="{'selected': sortIndex == index}"
      @click="sortIndex = index">
      {{item.name}}
    </div>
  </div>
  <div class="course">
    <div
      class="course-item"
      v-for="(item, index) in courseList"
      @click="$router.push(`/video/${item.id}`)">
      <img class="course-cover" :src="item.cover" />
      <div class="course-name">{{item.name}}</div>
      <div class="course-author">{{item.author}}</div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { getImageURL  } from 'utils'

const sortList = reactive([
  {
    name: '全部',
    key: 'all'
  },
  {
    name: 'Java',
    key: 'java'
  },
  {
    name: 'Python',
    key: 'python'
  },
  {
    name: 'C++',
    key: 'C++'
  },
  {
    name: 'Goland',
    key: 'Goland'
  }
])

const courseList = reactive([
  {
    id: 1,
    cover: getImageURL('course1.jpg'),
    name: 'Python入门教学',
    author: '张志伟'
  },
  {
    id: 2,
    cover: getImageURL('course2.jpg'),
    name: 'C语言入门教学',
    author: '张志伟'
  },
  {
    id: 3,
    cover: getImageURL('course3.jpg'),
    name: 'C语言入门教学',
    name: 'Java小白入门教学',
    author: '张志伟'
  },
  {
    id: 4,
    cover: getImageURL('course4.jpg'),
    name: 'C语言入门教学',
    name: '数据结构进阶',
    author: '张志伟'
  },
  {
    id: 1,
    cover: getImageURL('course1.jpg'),
    name: 'Python入门教学',
    author: '张志伟'
  },
  {
    id: 2,
    cover: getImageURL('course2.jpg'),
    name: 'C语言入门教学',
    author: '张志伟'
  },
  {
    id: 3,
    cover: getImageURL('course3.jpg'),
    name: 'C语言入门教学',
    name: 'Java小白入门教学',
    author: '张志伟'
  },
  {
    id: 4,
    cover: getImageURL('course4.jpg'),
    name: 'C语言入门教学',
    name: '数据结构进阶',
    author: '张志伟'
  },
  {
    id: 1,
    cover: getImageURL('course1.jpg'),
    name: 'Python入门教学',
    author: '张志伟'
  },
  {
    id: 2,
    cover: getImageURL('course2.jpg'),
    name: 'C语言入门教学',
    author: '张志伟'
  },
  {
    id: 3,
    cover: getImageURL('course3.jpg'),
    name: 'C语言入门教学',
    name: 'Java小白入门教学',
    author: '张志伟'
  },
  {
    id: 4,
    cover: getImageURL('course4.jpg'),
    name: 'C语言入门教学',
    name: '数据结构进阶',
    author: '张志伟'
  }
])

const sortIndex = ref(0)

</script>

<style lang="less" scoped>
.sort {
  display: flex;
  align-items: center;
  padding: 20px 30px;

  .sort-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20px;
    padding: 5px 15px;
    border-radius: 20px;
    border: 1px solid #eee;
    cursor: pointer;
    font-size: 14px;

    &:not(:last-child) {
      margin-right: 15px;
    }

    &.selected {
      background: @theme-color;
      color: white;
      border-color: @theme-color;
    }
  }
}

.course {
  display: flex;
  flex-wrap: wrap;
  padding: 0 30px;

  .course-item {
    width: 280px;
    border-radius: 4px;
    border: 1px solid #eee;
    margin: 0 20px 20px 0;
    cursor: pointer;
    overflow: hidden;

    .course-cover {
      width: 100%;
      height: 160px;
    }
    
    .course-name {
      font-weight: bold;
      font-size: 16px;
      padding: 5px 10px;
    }

    .course-author {
      font-size: 12px;
      color: #666;
      padding: 0 10px 10px 10px;
    }
  }
}
</style>