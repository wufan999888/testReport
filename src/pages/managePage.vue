<template>
  <div class="manage">
    <div class="manage-code">
      <img :src="src" alt="">
      <button @click="createQrcode">重新生成</button>
    </div>
    <div class="manage-form">
      <div>当前数据</div>
      <div><label>检测报告：</label><input v-model="dataItem.testReportNum" type="text" /></div>
      <div><label>委托日期：</label><input v-model="dataItem.entrustmentDate" type="text" /></div>
      <div><label>报告日期：</label><input v-model="dataItem.reportDate" type="text" /></div>
      <button @click="updateHandle">确认修改</button>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, reactive } from 'vue';
import jrQrcode from 'jr-qrcode';
import { getData, updateData } from '@/service';

let src = ref('')
let lock = false
let dataItem = reactive({
  testReportNum: '',
  reportDate: '',
  entrustmentDate: ''
})
function createQrcode() {
  src.value = jrQrcode.getQrBase64(`https://wufan999888.github.io/testReport/dist/index.html#/testReport?t=${new Date().getTime()}`, { correctLevel: window.QRErrorCorrectLevel.M })
}
async function getDataHandle() {
  const res = await getData()
  if (res.ret === 200) {
    dataItem.testReportNum = res.data.item.testReportNum
    dataItem.reportDate = res.data.item.reportDate
    dataItem.entrustmentDate = res.data.item.entrustmentDate
  }
}
async function updateHandle() {
  if(lock) return alert('请勿频繁更新')
  lock = true
  const res = await updateData(dataItem.testReportNum, dataItem.entrustmentDate, dataItem.reportDate)
  if(res.ret === 200) {
    alert('更新成功')
  }
  setTimeout(() => {
    lock = false
  }, 10000);
}
onMounted(()=>{
  createQrcode()
  getDataHandle()
})
</script>

<style>
.manage {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.manage-code {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.manage-form {
  margin-top: 40px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  line-height: 30px;
  font-size: 16px;
}
button {
  border: none;
  width: 160px;
  padding: 10px 40px;
  border-radius: 4px;
  background: #2970FF;
  color: #FFF;
  margin-top: 10px;
  font-size: 14px;
}
</style>