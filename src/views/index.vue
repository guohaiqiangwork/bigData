<template>
  <div id="index">
    <dv-full-screen-container class="bg">
      <dv-loading v-if="loading">Loading...</dv-loading>
      <div v-else class="host-body">
        <div class="d-flex jc-center">
          <dv-decoration-10 style="width:33.3%;height:.0625rem;" />
          <div class="d-flex jc-center">
            <dv-decoration-8 :color="['#568aea', '#000000']" style="width:2.5rem;height:.625rem;" />
            <div class="title">
              <span class="title-text">大数据可视化平台</span>
              <dv-decoration-6
                class="title-bototm"
                :reverse="true"
                :color="['#50e3c2', '#67a1e5']"
                style="width:3.125rem;height:.1rem;"
              />
            </div>
            <dv-decoration-8
              :reverse="true"
              :color="['#568aea', '#000000']"
              style="width:2.5rem;height:.625rem;"
            />
          </div>
          <dv-decoration-10 style="width:33.3%;height:.0625rem; transform: rotateY(180deg);" />
        </div>

        <!-- 第二行 -->
        <div class="d-flex jc-between px-2">
          <div class="d-flex" style="width: 40%">
            <div
              class="react-right ml-4"
              style="width: 6.25rem; text-align: left;background-color: #0f1325;"
            >
              <span class="react-before"></span>
              <span class="text">数据分析1</span>
            </div>
            <div class="react-right ml-3" style="background-color: #0f1325;">
              <span class="text colorBlue">数据分析2</span>
            </div>
          </div>
          <div style="width: 40%" class="d-flex">
            <div class="react-left bg-color-blue mr-3">
              <span class="text fw-b">用户</span>
            </div>
            <div
              class="react-left mr-4"
              style="width: 6.25rem; background-color: #0f1325; text-align: right;"
            >
              <span class="react-after"></span>
              <span class="text">{{gettime}}</span>
            </div>
          </div>
        </div>

        <div class="body-box">
         
          <div class="content-box">
            <div>
              <dv-border-box-12>
                <centerLeft1 />
              </dv-border-box-12>
            </div>

            <!-- 中间 -->
            <div>
              <dv-border-box-12>
               <center></center>
              </dv-border-box-12>
            </div>
            <div>
              <dv-border-box-13>
                <centerRight1 />
              </dv-border-box-13>
            </div>
          </div>

           <!-- 第四行数据 -->
          <div class="bototm-box">
            <dv-border-box-12>
               <dv-active-ring-chart :config="data" style="width:200px;height:200px" />
                <bottomLeft />
            </dv-border-box-12>

            <dv-border-box-13>
 <bottomLeft />
            </dv-border-box-13>
            
            <dv-border-box-1>
                <dv-active-ring-chart :config="data" style="width:200px;height:200px" />
                <!-- <bottomRight /> -->
            </dv-border-box-1>
            <!-- <dv-border-box-13>
              <bottomLeft />
            </dv-border-box-13>
            <dv-border-box-12>
              <bottomRight />
            </dv-border-box-12> -->
          </div>
      
        </div>
      </div>
    </dv-full-screen-container>
  </div>
</template>

<script>
import centerLeft1 from "./centerLeft1";
import centerRight1 from "./centerRight1";
import center from './center';
import bottomLeft from "./bottomLeft";
import bottomRight from "./bottomRight";
export default {
  data() {
    return {
      loading: true,
      gettime: "" ,//当前时间
      option:[
    {
      name: '周口',
      value: 55
    },
    {
      name: '南阳',
      value: 120
    },
    {
      name: '西峡',
      value: 78
    },
    {
      name: '驻马店',
      value: 66
    },
    {
      name: '新乡',
      value: 80
    }
  ]
    };
  },
  components: {
    centerLeft1,

    centerRight1,
    center,

    bottomLeft,
    bottomRight
  },
  mounted() {
    this.cancelLoading();

    this.created();
  },
  methods: {
    cancelLoading() {
      setTimeout(() => {
        this.loading = false;
      }, 2000);
    },

    // 获取当前时间
    getTime: function() {
      var _this = this;
      let yy = new Date().getFullYear();
      var mm =
        new Date().getMonth() < 10
          ? "0" + (new Date().getMonth() + 1)
          : new Date().getMonth() + 1;
      var dd =
        new Date().getDate() < 10
          ? "0" + new Date().getDate()
          : new Date().getDate();
      let hh = new Date().getHours();
      let mf =
        new Date().getMinutes() < 10
          ? "0" + new Date().getMinutes()
          : new Date().getMinutes();
      let ss =
        new Date().getSeconds() < 10
          ? "0" + new Date().getSeconds()
          : new Date().getSeconds();
      _this.gettime =
        yy + "年" + mm + "月" + dd + "日" + hh + ":" + mf + ":" + ss;
    },
    currentTime() {
      setInterval(this.getTime, 500);
    },
    created() {
      this.currentTime();
    }
  }
};
</script>

<style lang="scss">
@import "../assets/scss/index.scss";
</style>