<template>
    <div>
        <p class="title"><i></i>疫情地图</p>
        <div class="map" id="map"></div>
    </div>
</template>

<script>
import api from "../api/index"
export default {
    data() {
        return {
            allCitys: []
        }
    },
    mounted() {
        api.getCityNocv().then(res => {
            var allCitys = [];
            if (res.data.codeid != 10018) {
                for (let i = 0; i < res.data.retdata.lenth; i++) {
                    var temp = {
                        name: res.data.retdata[i].xArea,
                        value: res.data.retdata[i].curConfirm
                    }
                    this.allCitys.push(temp)
                }
            } else {
                this.allCitys = [
                    { name: "台湾", value: 28743 },
                    { name: "香港", value: 516 },
                    { name: "四川", value: 62 },
                    { name: "贵州", value: 44 },
                    { name: "广东", value: 26 },
                    { name: "黑龙江", value: 21 },
                    { name: "上海", value: 18 },
                    { name: "福建", value: 13 },
                    { name: "北京", value: 12 },
                    { name: "西藏", value: 11 },
                    { name: "云南", value: 9 },
                    { name: "天津", value: 7 },
                    { name: "山东", value: 3 },
                ]
                console.log(this.allCitys);
                this.$chars.chinaMap("map",this.allCitys)
            }

        }).catch(err => {
            console.log(err);
        })
        this.$chars.chinaMap("map",this.allCitys)
    }
}
</script>

<style lang="less" scoped>
.map {
    width: 350px;
    height: 400px;
}


.title {
    border-top: 0.005rem solid #ebebeb;
    border-bottom: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    height: 0.44rem;
    padding: 0 0.16rem;
    font-weight: 500;
    font-size: 0.17rem;
    line-height: 0.44rem;
    background: #fff;
}

.title::before {
    content: "";
    width: 5px;
    height: 20px;
    background: #4169e2;
    margin-right: 10px;
}
</style>