<template>
  <div>
    <div   ref="echarts" style="width:3.25rem; height: 2.75rem;"></div>
  </div>
</template>

<script>
const echarts = require("echarts");
export default {
  data() {
    return {
        chart: null,
        option:  {
            title: {
                text: ''
            },
            tooltip: {},
            legend: {
                data:['销量']
            },
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }],
            color: ['#66FF99']
        }
    };
  },
  mounted() {
   this.getPage();//
  },
  methods: {
    getPage() {
        this.chart = echarts.init(this.$refs.echarts);
        // 使用刚指定的配置项和数据显示图表。
        this.chart.setOption(this.option);
      }

  },
  destroyed() {
    window.onresize = null;
  }
};
</script>

<style lang="scss" scoped>
</style>