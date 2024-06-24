<template>
  <div class="testReport">
    <div class="testReport-title">
      检测报告：{{ dataItem.testReportNum }}
    </div>
    <div class="testReport-content">
      <div class="testReport-content-box">
        <div class="testReport-content-box-title">工程名称</div>
        <div class="testReport-content-box-desc">宁夏中宁换流站至湖南衡阳换流站±800千伏直流线路</div>
      </div>
      <div class="testReport-content-box">
        <div class="testReport-content-box-title">检测项目</div>
        <div class="testReport-content-box-desc">通用项目</div>
      </div>
      <div class="testReport-content-box">
        <div class="testReport-content-box-title">结构部位</div>
        <div class="testReport-content-box-desc">铁塔基础</div>
      </div>
      <div class="testReport-content-box">
        <div class="testReport-content-box-title">检测单位</div>
        <div class="testReport-content-box-desc">陕西省建筑工程质量检测中心有限公司</div>
      </div>
      <div class="testReport-content-box">
        <div class="testReport-content-box-title">委托单位</div>
        <div class="testReport-content-box-desc">国网陕西省电力有限公司</div>
      </div>
      <div class="testReport-content-box">
        <div class="testReport-content-box-title">检测类别</div>
        <div class="testReport-content-box-desc">委托检验</div>
      </div>
      <div class="testReport-content-box">
        <div class="testReport-content-box-title">检测标准</div>
        <div class="testReport-content-box-desc"> </div>
      </div>
      <div class="testReport-content-box">
        <div class="testReport-content-box-title">样品名称</div>
        <div class="testReport-content-box-desc"> </div>
      </div>
      <div class="testReport-content-box">
        <div class="testReport-content-box-title">委托日期</div>
        <div class="testReport-content-box-desc">{{ dataItem.entrustmentDate }}</div>
      </div>
      <div class="testReport-content-box">
        <div class="testReport-content-box-title">报告日期</div>
        <div class="testReport-content-box-desc">{{ dataItem.reportDate }}</div>
      </div>
      <div class="testReport-content-box">
        <div class="testReport-content-box-title">唯一标识</div>
        <div class="testReport-content-box-desc"> </div>
      </div>
      <div class="testReport-content-box">
        <div class="testReport-content-box-title">检测参数</div>
        <div class="testReport-content-box-desc"> </div>
      </div>
      <div class="testReport-content-box">
        <div class="testReport-content-box-title">结论状态</div>
        <div class="testReport-content-box-desc">合格</div>
      </div>
      <div class="testReport-content-box">
        <div class="testReport-content-box-title">检测结论</div>
        <div class="testReport-content-box-desc">合格</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { test } from "@/service"
import { onMounted, reactive } from "vue";
let dataItem = reactive({
  testReportNum: '（2024）0312-1-0546',
  reportDate: '2024-05-16',
  entrustmentDate: '2024-04-15'
})

async function loginTest() {
  const res = await test()
  if (res.ret === 200) {
    dataItem.testReportNum = res.data.item.testReportNum
    dataItem.reportDate = res.data.item.reportDate
    dataItem.entrustmentDate = res.data.item.entrustmentDate
  }
}
onMounted(()=>{
  loginTest()
})
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.testReport {
  min-height: 100vh;
  padding-bottom: 35px;
  background: #efeff4;
  font-family: -apple-system, SF UI Text, Helvetica Neue, Helvetica, Arial, sans-serif;
}
.testReport-title {
  font-size: 17px;
  font-weight: 500;
  background: #f7f7f8;
  padding: 10px 0;
  text-align: center;
  border: .5px solid #C4C4C4;
  border-top: none;
}
.testReport-content {
  background-color: #fff;
  padding-left: 15px;
  margin-top: 35px;
}
.testReport-content-box {
  padding-top: 4px;
  border-bottom: .5px solid #C4C4C4;
}
.testReport-content-box-title {
  font-size: 12px;
}
.testReport-content-box-desc {
  font-size: 17px;
  min-height: 23px;
  font-weight: 400;
  color: #000;
}
</style>
