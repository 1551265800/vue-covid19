import echars from "echarts"

const install = function (Vue) {
    //Object.defineProperties() 方法直接在一个对象上定义新的属性或修改现有属性，并返回该对象。
    Object.defineProperties(Vue.prototype, {
        $chars: {
            get() {
                return {
                    //方法
                    chinaMap: function (id,data) {
                        var chartDom = document.getElementById(id);
                        var mychart = echars.init(chartDom);
                        var option = {
                            /* title: {
                                text: '省份地图',
                                subtext: 'Data from Wikipedia',
                                sublink:
                                  'http://zh.wikipedia.org/wiki/%E9%A6%99%E6%B8%AF%E8%A1%8C%E6%94%BF%E5%8D%80%E5%8A%83#cite_note-12'
                              }, */
                            tooltip: {
                                triggerOn: "click", // 事件类型
                                enterable: true, // 鼠标是否允许滑入悬浮框中
                                formatter(data) {
                                    return data.name + "<br>" +"病例："+data.value
                                }
                            },

                            //图例
                            visualMap: {
                                //匹配数据
                                pieces:[
                                    {min:0,max:0,color:"#fff"},
                                    {min:1,max:10,color:"#fdfdcf"},
                                    {min:10,max:100,color:"#fe9e83"},
                                    {min:100,max:1000,color:"#e55a4e"},
                                    {min:1000,color:"#4f070d"},
                            ],
                                type:"piecewise",
                                realtime: false,
                                calculable: true,
                                /* inRange: {
                                  color: ['lightskyblue', 'yellow', 'orangered']
                                } */
                              },
                            series:[{
                                name:"中国地图",
                                type:"map",
                                map:"china",
                                roam:false,
                                zoom:1.2,//放大比例
                                label:{
                                    normal:{
                                        show:true,  // 是否允许地图显示文字
                                        textStyle:{   // 配置字体样式
                                            fontSize:7 
                                        }
                                    }
                                },
                                //地图样式
                                itemStyle:{
                                    normal:{
                                        areaColor:"rgba(0,255,236,0)",
                                        borderColor:"rgba(0,0,0,0.2)"
                                    },
                                    emphasis:{
                                        areaColor:"rgba(255,180,0,0.8)",
                                        shadowOffsetX:0,
                                        shadowOffsetY:0,
                                        shadowBlur:20,
                                        borderWidth:0
                                    }
                                },
                                data
                            },]

                        };
                        mychart.setOption(option);
                    }
                }
            }
        }
    })
}
export default install