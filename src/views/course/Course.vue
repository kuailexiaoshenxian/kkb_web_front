<template>
  <div class="course-container">
    <div class="course">
      <img class="course-cover" :src="getImageURL(`course${id}.jpg`)">
      <div class="course-info">
        <div class="course-name">Python入门教学</div>
        <div class="course-author">张志伟</div>
        <div class="rate">
          <div class="rate-num">{{courseRate}}</div>
          <div>
            <el-rate v-model="courseRate" disabled></el-rate>
            <div class="rate-people">
              已有{{ratePeople}}人评价
            </div>
          </div>
        </div>
        <div class="rate-detail">
          <div
            class="rate-detail-item"
            v-for="(item, index) in rateDetails">
            <div class="rate-count">{{item.rate}}</div>
            <div class="rate-percentage">
              <div class="rate-percentage-progress" :style="{'width': (item.value * 150) + 'px'}"></div>
              <div class="rate-count">{{item.value * 100 + '%'}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="course-introduction">
      <div class="course-introduction-title">课程简介</div>
      <div class="course-introduction-content">
        {{courseIntroduction}}
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { getImageURL  } from 'utils'
import { ElRate } from 'element-plus'
import { ref, reactive } from 'vue'

const route = useRoute()
const { id } = route.params

const courseRate = ref(4.5)
const ratePeople = ref(45381)
const rateDetails = reactive([
  {
    rate: '5星',
    value: 0.6
  },
  {
    rate: '4星',
    value: 0.2
  },
  {
    rate: '3星',
    value: 0.1
  },
  {
    rate: '2星',
    value: 0.06
  },
  {
    rate: '1星',
    value: 0.04
  }
])
const courseIntroduction = ref('Kenneeth Lane Thompson为了方便的玩自己编写的游戏程序，用汇编语言写了UNIX操作系统，又为了更方便的写这个UNIX而创造了C。创造在游戏中产生，业绩在创造中成就！从此，C便一发不可收拾，独领风骚！当计算遇上了困惑，当编程选择了C，当面向问题的计算机程序设计加入了优秀团队，就是这门课程！')
</script>

<style lang="less" scoped>
.course-container {
  width: 1000px;
  margin: 30px auto;
}

.course {
  display: flex;

  .course-cover {
    width: 360px;
    height: 200px;
  }

  .course-info {
    margin-left: 30px;

    .course-name {
      font-weight: bold;
      font-size: 24px;
    }

    .course-author {
      font-size: 14px;
      color: #666;
      margin-top: 5px;
      margin-bottom: 10px;
    }
  }

  .rate {
    display: flex;
    
    .rate-num {
      font-size: 32px;
      font-weight: bold;
      margin-right: 10px;
    }

    .rate-people {
      font-size: 12px;
      color: #666;
      padding-left: 2px;
    }

    :deep(.el-rate__icon) {
      margin-right: 3px;
    }
  }

  .rate-detail {
    .rate-detail-item {
      display: flex;
      margin-bottom: 2px;

      .rate-count {
        font-size: 12px;
        color: #999;
        margin-right: 5px;
      }

      .rate-percentage {
        width: 150px;
        display: flex;
        align-items: center;
      }
      
      .rate-percentage-progress {
        background: #ffd596;
        height: 12px;
        margin-right: 5px;
      }
    }
  }
}

.course-introduction {
  margin-top: 30px;

  .course-introduction-title {
    font-weight: bold;
    font-size: 18px;
  }

  .course-introduction-content {
    color: #333;
    font-size: 14px;
    margin-top: 10px;
    line-height: 1.5;
  }
}
</style>