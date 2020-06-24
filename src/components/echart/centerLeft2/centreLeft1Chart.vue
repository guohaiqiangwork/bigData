<template>
  <div>
    <div id="centreLeft1Chart" style="width:5.25rem; height: 2.75rem;"></div>
  </div>
</template>

<script>
const echarts = require("echarts");
export default {
  data() {
    return {};
  },
  mounted() {
    this.drawPie();
  },
  methods: {
    drawPie(sidebar) {
      // 基于准备好的dom，初始化echarts实例
      let myChartPieLeft = echarts.init(
        document.getElementById("centreLeft1Chart")
      );
      //  ----------------------------------------------------------------

      myChartPieLeft.setOption({
        // title: {
        //   text: "成果输出",
        //   left: "center",
        //   textStyle: {
        //     fontSize: 10
        //   }
        // },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          type: "scroll",
          orient: "vertical",
          right: 3,
          top: 20,
          bottom: 20,
          borderRadius: 10,
          itemWidth: 5, // 图例标记的图形宽度
          itemHeight: 5
        },
        //文本标签
        label: {
          show: true, // 默认 false
          position: "outline", // 标签的位置 'outside', 'inside', 'inner'同'inside', 'center'
          color: "#fff", // 文字的颜色
          fontSize: 10, // 文字的字体大小
          fontWeight: 500, // 文字字体的粗细
          // 提示框浮层内容格式器，支持字符串模板和回调函数两种形式
          // 饼图、仪表盘、漏斗图: {a}（系列名称），{b}（数据项名称），{c}（数值）, {d}（百分比）
          formatter: "{c}"
        },

        series: [
          {
            name: "成果输出",
            type: "pie",
            radius: "55%",
            center: ["20%", "50%"],
            data: [
              // 数据数组，name 为数据项名称，value 为数据项值
              { value: 235, name: "数据源分析报告" },
              { value: 274, name: "数据分析结果验证报告" },
              { value: 310, name: "阶段汇总分析报告" },
              { value: 335, name: "数据产品生产报告" }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      });
      // -----------------------------------------------------------------
      // 响应式变化
      window.addEventListener("resize", () => myChartPieLeft.resize(), false);
      //侧边栏变化
      if (sidebar) {
        myChartPieLeft.resize();
      }
    }
  },
  destroyed() {
    window.onresize = null;
  }
};
</script>

<style lang="scss" scoped>
</style>