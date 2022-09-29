<template>
    <div class="case-num">
        <div class="container">
            <div class="title">
                <span>截至 {{timestampToTime(caseNum.modifyTime)}} 全国数据统计</span>
            </div>
        </div>
        <div class="num">
            <ul class="count">
                <li class="create-item">
                    <div class="create-count">
                        <b>较昨日<em style="color:rgb(247, 76, 49);">{{numZore(caseNum.currentConfirmedIncr)}}</em></b>
                    </div>
                    <strong style="color:rgb(247, 76, 49);">{{caseNum.currentConfirmedCount}}</strong>
                    <span>现存确诊 </span>
                </li>
                <li class="create-item">
                    <div class="create-count">
                        <b>较昨日<em style="color:rgb(247, 130, 7) ;">{{numZore(caseNum.confirmedIncr)}}</em></b>
                    </div>
                    <strong style="color:rgb(247, 130, 7) ;">{{caseNum.confirmedCount}}</strong>
                    <span>累积确诊 </span>
                </li>
                <li class="create-item">
                    <div class="create-count">
                        <b>较昨日<em style="color:rgb(162, 90, 78) ;">{{numZore(caseNum.suspectedIncr)}}</em></b>
                    </div>
                    <strong style="color:rgb(162, 90, 78) ;">{{caseNum.suspectedCount}}</strong>
                    <span>累计境外输入 </span>
                </li>
                <li class="create-item">
                    <div class="create-count">
                        <b>较昨日<em style="color:rgb(174, 33, 44) ;">{{numZore(caseNum.curedIncr)}}</em></b>
                    </div>
                    <strong style="color:rgb(174, 33, 44) ;">{{caseNum.curedCount}}</strong>
                    <span>累计治愈 </span>
                </li>
                <li class="create-item">
                    <div class="create-count">
                        <b>较昨日<em style="color:rgb(93,112,146) ;">{{numZore(caseNum.deadIncr)}}</em></b>
                    </div>
                    <strong style="color:rgb(93,112,146) ;">{{caseNum.deadCount}}</strong>
                    <span>累计死亡 </span>
                </li>
                <li class="create-item">
                    <div class="create-count">
                        <b>较昨日<em style="color:rgb(40, 183, 163) ;">{{numZore(caseNum.seriousIncr)}}</em></b>
                    </div>
                    <strong style="color:rgb(40, 183, 163) ;">{{caseNum.seriousCount}}</strong>
                    <span>现存无症状 </span>
                </li>
            </ul>
        </div>

    </div>
</template>

<script>
export default {
    props: {
        caseNum: {
            type: Object,
            default: () => { return {} }
        },
    },
    methods: {
        //添加-
        numZore(num) {
            return num >= 0 ? `+${num}` : num
        },
        //将时间戳转换成时间
        timestampToTime(timestamp) {
            timestamp = timestamp ? timestamp : null;
            let date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
            let Y = date.getFullYear() + '-';
            let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
            let D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
            let h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
            let m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
            let s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
            return Y + M + D + h + m + s;
        }

    }}
</script>

<style lang="less" scoped>
.case-num {
    padding: 0.16rem;
    background: #fff;
}

.container {
    margin: -0.16rem 0 0;
    font-size: 0.12rem;
}

.title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.08rem 0 0.07rem;
    line-height: 0.24rem;
}

.title span {
    color: #666;
}

.title em {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 0.24rem;
    margin-right: -0.16rem;
    padding: 0 0.08rem;
    color: #666;
    font-style: normal;
    background-color: #f7f7f7;
    border-radius: 0.12rem 0 0 0.12rem;
}

.title em img {
    width: 0.123rem;
    height: 0.123rem;
    margin-right: 0.037rem;
}

.num {
    position: relative;
    text-align: center;
    background: #fff;
}

.num::after {
    position: absolute;
    top: -0.01rem;
    left: -0.01rem;
    display: block;
    width: 200%;
    height: 200%;
    border: 0.01rem solid #ebebeb;
    border-radius: 0.08rem;
    box-shadow: 0 0.04rem 0.12rem 0 rgba(0, 0, 0, 0.05);
    transform: scale(0.5);
    transform-origin: 0 0;
    content: "";
}

.num ul {
    flex-flow: wrap;
    position: relative;
    display: flex;
    margin: 0;
    padding: 0.08rem 0 0.12rem;
}

.num ul li {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    width: 33.3333333%;
    margin: 10px 0;
}

.num ul li .create-item {
    position: relative;
    text-align: center;
}

.num ul li .create-item .create-count {
    display: flex;
    align-items: center;
    height: 0.12rem;
    margin-bottom: 0.02rem;
    color: #666;
    font-weight: 400;
    font-size: 0.09rem;
}

.num ul li .create-item .create-count em {
    font-weight: 400;
    font-style: normal;
}

.num ul li strong {
    margin-bottom: 0.01rem;
    font-weight: 700;
    font-size: 0.2rem;
    line-height: 0.25rem;
}

.num ul li span {
    display: block;
    color: #333;
    font-weight: 700;
    font-size: 0.11rem;
    line-height: 0.15rem;
}
</style>