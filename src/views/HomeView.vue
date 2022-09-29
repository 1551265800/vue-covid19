<template>
  <div class="home">
    <Header></Header>
    <Covid19Info></Covid19Info>
    <CaseNum :caseNum="caseNum"></CaseNum>
    <Map></Map>
  </div>
</template>

<script>
import Heradr from '../components/Header.vue';
import Header from '../components/Header.vue';
import Covid19Info from '@/components/Covid19-info.vue';
import CaseNum from '@/components/CaseNum.vue';
import api from '../api/index'
import Map from '@/components/Map.vue';
export default {

  components: {
    Heradr,
    Header,
    Covid19Info,
    CaseNum,
    Map
},
  data() {
    return {
      caseNum: {}
    }
  },
  mounted() {
    //疫情信息数据
    api.getNocv({
     // key: "3db611fc1b2a83da29358251615e13d9"
    }).then(res => {
      res = res.data
      if (res.code === 200) {
        this.caseNum = {
          currentConfirmedCount: res.newslist[0].desc.currentConfirmedCount,//现存确诊人数
          confirmedCount:res.newslist[0].desc.confirmedCount,//累计确诊人数
          suspectedCount: res.newslist[0].desc.suspectedCount,//累计境外输入人数
          curedCount: res.newslist[0].desc.curedCount,//	累计治愈人数
          deadCount: res.newslist[0].desc.deadCount,//累计死亡人数
          seriousCount: res.newslist[0].desc.seriousCount,//现存无症状人数
          suspectedIncr: res.newslist[0].desc.suspectedIncr,//新增境外输入人数
          currentConfirmedIncr: res.newslist[0].desc.currentConfirmedIncr,//相比昨天现存确诊人数
          confirmedIncr: res.newslist[0].desc.confirmedIncr,//相比昨天累计确诊人数
          curedIncr: res.newslist[0].desc.curedIncr,//相比昨天新增治愈人数
          deadIncr: res.newslist[0].desc.deadIncr,//相比昨天新增死亡人数
          seriousIncr: res.newslist[0].desc.seriousIncr,//	相比昨天现存无症状人数
          yesterdayConfirmedCountIncr: res.newslist[0].desc.yesterdayConfirmedCountIncr,//相比昨天新增累计确诊人数
          yesterdaySuspectedCountIncr: res.newslist[0].desc.yesterdaySuspectedCountIncr,//相比昨天境外输入确诊人数
          highDangerCount: res.newslist[0].desc.highDangerCount,//国内高风险地区个数
          midDangerCount: res.newslist[0].desc.midDangerCount,//国内中风险地区个数
          modifyTime: res.newslist[0].desc.modifyTime //时间戳
        }
      }
    }).catch(error => {
      console.log(error);
    })
  }
}
</script>
