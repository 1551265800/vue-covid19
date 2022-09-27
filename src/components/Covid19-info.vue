<template>
    <div class="info">
        <p class="title">
            <i></i>
            病毒信息
        </p>
        <div class="content">
            <p v-html="covid19Info.info1"></p>
            <p>{{covid19Info.info2}}</p>
            <p>{{covid19Info.info3}}</p>
            
        </div>
    </div>
</template>

<script>
    import api from '../api/index'
    export default {
        data() {
            return {
                covid19Info: {
                    info1:"新型冠状病毒肺炎:（Corona Virus Disease 2019，COVID-19），简称“新冠肺炎”，世界卫生组织命名为“2019冠状病毒病”，是指2019新型冠状病毒感染导致的肺炎。",
                    info2:"传播途径:可以确定的新冠肺炎传播途径主要为直接传播、气溶胶传播和接触传播。",
                    info3:"发病特征:根据现有病例资料，新型冠状病毒肺炎以发热、干咳、乏力等为主要表现，少数患者伴有鼻塞、流涕、腹泻等上呼吸道和消化道症状。重症病例多在1周后出现呼吸困难，严重者快速进展为急性呼吸窘迫综合征、脓毒症休克、难以纠正的代谢性酸中毒和出凝血功能障碍及多器官功能衰竭等。"
                }
            }
        },
        mounted(){
            //疫情信息数据
            /* api.getNocv({
                key:"62e34ad34025d5d5127135efa58d4ca8"
            }).then(res=>{
                if (res.status === 200) {
                    this.covid19Info = {

                    }
                }
            }).catch(error=>{
                console.log(error);
            }) */
        }
    }
</script>

<style lang="less" scoped>
 .info{
    padding: 0.16rem;
    background-color: #fff;
    border: 1px solid #f1f1f1;
    .title{
        font-size: 0.17rem;
        i{
            display: inline-block;
            width: 0.04rem;
            height: 0.16rem;
            margin-right: 0.03rem;
            vertical-align: middle;
            background-color: #4169e2;
        }
    }
    .content{
        padding: 0.06rem 0.16rem;
        p{
            font-size: 13px;
            margin: 5px auto;
        }
    }
 }
</style>