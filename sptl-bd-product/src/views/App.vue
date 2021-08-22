<template>
  <div class="app">
    <div class="banner">
      <div class="banner-border">
        <div class="banner-content" :class="'banner-' + selectedApp.id">
          <div class="banner-introduce">{{ selectedApp.title }}</div>
        </div>
      </div>
    </div>
    <div class="content">
      <el-row type="flex" justify="left">
        <el-col :span="4" :xl="7">
          <div class="title-nav"></div>
        </el-col>
        <el-col :span="12" :xl="6">
          <div class="title">{{ selectedApp.appName }}</div>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="16" :xl="10">
          <div class="introduce" v-html="selectedApp.appDesc">
            {{ selectedApp.appDesc }}
          </div>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="2">
          <div class="core-title">核心价值</div>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center" style="margin-top:110px;">
        <el-col
          :span="6"
          :xl="4"
          v-for="(item, index) of selectedApp.coreValue"
          :key="index"
        >
          <div class="core-detail">
            <div :class="'detail-icon-' + (index + 1)"></div>
            <div class="detail-title">{{ item.coreTitle }}</div>
            <div class="detail-content">{{ item.coreDesc }}</div>
          </div>
          <div class="detail-split" v-if="index !== 0"></div>
        </el-col>
      </el-row>
      <el-row style="margin-top:80px;">
        <el-col :span="24" justify="center">
          <!-- <div class="system-design"></div> -->
          <img
            :src="require(`./../assets/img/app/design-${id}.svg`)"
            :alt="selectedApp.title"
            class="system-design"
          />
        </el-col>
      </el-row>
      <div class="related-product">
        <div class="nav-title">相关产品</div>
        <div v-for="(item, index) of selectedApp.relateProduct" :key="index" class="item">
          <div class="video-wrapper">
            <video
              preload="meta"
              :src="item.videoUrl"
              controls="controls"
              height="100%"
              width="100%"
            >
              your browser does not support the video tag
            </video>
          </div>
           <div class="product-content">
            <div class="product-desc">
              <div class="product-title">{{ item.prodTitle }}</div>
              <div class="product-summary">{{ item.prodDesc }}</div>
              <div class="proudct-experience">
                <p class="text">
                  <!-- <el-link :underline="false" :href="item.prodUrl" target="_blank">立即体验</el-link> -->
                  <el-link
                    :underline="false"
                    @click="openUrl(item)"
                    target="javascript:void(0);"
                    
                    >立即体验</el-link
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="summary">
        <el-row justify="center" type="flex">
          <el-col
            :span="6"
            :xl="5"
            v-for="(item, index) of selectedApp.useSummary"
            :key="index"
          >
            <div class="summary-content">
              <div class="summary-count">{{ item.count }}</div>
              <!-- <div class="summary-unit">{{ item.unit }}</div> -->
              <div class="summary-desc">{{ item.desc }}</div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from "vuex";
import { addLog } from "./../api/api";

export default {
  name: "App",
  data() {
    return {
      selectedApp: {},
      id: "1",
    };
  },
  components: {},
  computed: {
    ...mapGetters(["appGetter",'noRightMess']),
  },
  updated(){
      this.visitAppLog(this.selectedApp);
  },
  mounted() {
    let id = this.$route.params.id;
    if (id && this.appGetter) {
      console.log(this.appGetter.appData);
      this.selectedApp = this.appGetter.appData[id];
      this.id = id;
    }
  },
  watch: {
    $route() {
      let id = this.$route.params.id;
      if (id && this.appGetter) {
        this.selectedApp = this.appGetter.appData[id];
        this.id = id;
      }
    },
  },
  methods: {
    openUrl(item) {
      if(item.tyButton){
          let token = sessionStorage.getItem("token");
          window.open(item.prodUrl + "?token=" + token, "_blank");
          this.visitAppLog(item);
      }else{
          this.$alert(this.noRightMess.message, '提示', {
          confirmButtonText: '确定'
        });
      }
      
    },
    visitAppLog(prod) {
      let params = {};
      params.opTypeId = "visit";
      params.opTypeName = "访问";
      params.moduleId = "行业应用";
      params.moduleName = "行业应用";

      params.opObject = prod.prodTitle ? prod.prodTitle : prod.appName;
      params.opContent = prod.prodTitle ? prod.prodTitle : prod.appName;
      addLog(params);
    },
  },
};
</script>
<style lang="scss">
.app {
  .banner {
    width: 100%;
    background: gradient(
      90.17deg,
      rgba(0, 0, 0, 0.45) 0.15%,
      rgba(6, 6, 6, 0.369311) 31.34%,
      rgba(21, 21, 21, 0.153) 100.33%
    );

    height: 580px;
    .banner-border {
      width: 100%;
      height: 580px;
      z-index: 0;
      //background: url("./../assets/img/app/banner-border.png");
      background: #001738;
      .banner-content {
        width: 100%;
        height: 100%;
        background-size: cover;
        //opacity: 0.9;
        z-index: -1;
      }
    }

    .banner-1 {
      background: url("./../assets/img/app/aviation_1.png");
    }
    .banner-2 {
      background: url("./../assets/img/app/aviation_2.png");
    }
    .banner-3 {
      background: url("./../assets/img/app/aviation_2.png");
    }
    .banner-introduce {
      width: 100%;
      height: 80px;
      font-family: PingFang SC;
      font-style: normal;
      font-weight: 500;
      font-size: 80px;
      line-height: 100%;
      // margin-left: auto;
      // margin-right: auto;
      padding-top: 250px;
      /* identical to box height, or 80px */
      color: rgba(255, 255, 255, 0.85);
      text-align: center;
    }
  }

  .content {
    width: 100%;
    min-height: 500px;
    margin-top: 76px;
    overflow-x: hidden;

    .title-nav {
      width: 88px;
      height: 12px;
      background: linear-gradient(269.2deg, #095cab 0.4%, #147bd1 94.96%);
      border-radius: 8px;
      margin-top: 12px;
      float: right;
    }
    .title {
      width: 100%;
      height: 36px;
      text-align: left;
      font-family: PingFang SC;
      font-style: normal;
      font-weight: 500;
      font-size: 36px;
      line-height: 100%;
      /* identical to box height, or 36px */
      color: #000000;
      margin-left: 24px;
    }

    .introduce {
      min-height: 80px;
      margin-top: 24px;
      text-align: left;
      font-family: PingFang SC;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 160%;
      /* or 22px */
      color: rgba(0, 0, 0, 0.65);
      margin-left: 24px;
    }
    .core-title {
      width: 128px;
      height: 32px;
      font-family: PingFang SC;
      font-style: normal;
      font-weight: normal;
      font-size: 32px;
      line-height: 100%;
      /* identical to box height, or 32px */
      color: #000000;
      margin-top: 34px;
    }
    .core-detail {
      //min-height: 300px;
      width: 100%;

      .detail-icon-1 {
        width: 48px;
        height: 48px;
        margin: auto;
        background-image: url("./../assets/img/app/stream.png");
      }
      .detail-icon-2 {
        width: 48px;
        height: 48px;
        margin: auto;
        background-image: url("./../assets/img/app/grain.png");
      }
      .detail-icon-3 {
        width: 48px;
        height: 48px;
        margin: auto;
        background-image: url("./../assets/img/app/device_hub.png");
      }
      .detail-title {
        width: 100%;
        height: 20px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 34px;
        font-family: PingFang SC;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 100%;
        /* identical to box height, or 20px */
        color: #000000;
      }
      .detail-content {
        width: 198px;
        height: 63px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 24px;
        font-family: PingFang SC;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 150%;
        /* or 21px */
        color: rgba(0, 0, 0, 0.65);
        text-align: left;
      }
    }
    .detail-split {
      position: relative;
      top: -30px;
      left: -40px;
      width: 72px;
      height: 0px;
      border: 1px solid rgba(0, 0, 0, 0.09);
      transform: rotate(90deg);
    }
    .system-design {
      width: 1138px;
      height: 708px;
      margin-left: auto;
      margin-right: auto;
      //background-image: url("./../assets/img/app/aviation-design.png");
      background-repeat: no-repeat;
    }
    .related-product {
      min-height: 760px;
      background: #25232b;
      padding-bottom: 116px;
      margin-top: 86px;

      .nav-title {
        font-size: 32px;
        line-height: 100%;
        color: #ffffff;
        text-align: center;
        padding: 36px 0 120px;
      }
      .item{
        display: flex;
        justify-content: center;
        & + .item{
          margin-top: 60px;
        }
        .video-wrapper{
          width: 480px;
          height: 240px;
          background-size: cover;
          margin-right: 121px;
          video{
            height: 100%;
            width: 100%;
          }
        }
      }
      .product-content {
        .product-vedio {
          width: 100%;
          height: 200px;
          background-image: url("./../assets/img/app/product-video-1.png");
        }
        .product-desc {
          text-align: left;
          width: 100%;
          height: 100%;
          .product-title {
            width: 100%;
            height: 24px;
            //margin-top: 20px;
            font-family: PingFang SC;
            font-style: normal;
            font-size: 14px;
            line-height: 100%;
            /* identical to box height, or 24px */
            color: #ffffff;
          }
          .product-summary {
            width: 534px;
            height: 42px;
            font-family: PingFang SC;
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 150%;
            /* or 24px */
            color: rgba(255, 255, 255, 0.85);
            margin-top: 24px;
          }
          .proudct-experience {
            width: 104px;
            height: 32px;
            text-align: center;
            vertical-align: middle;
            background: #0189ff;
            margin-top: 118px;
            .text {
              width: 48px;
              height: 12px;
              font-family: PingFang SC;
              font-style: normal;
              font-weight: normal;
              font-size: 12px;
              line-height: 100%;
              padding: 10px 0px;
              /* identical to box height, or 12px */
              color: #ffffff;
              margin: 10px 28px;
              a {
                font-size: 12px;
                color: #ffffff;
              }
            }
          }
        }
      }
    }
    .summary {
      width: 100%;
      height: 180px;
      background-image: url("./../assets/img/app/summary-bg.png");
      z-index: 0;

      text-align: center;
      .el-row {
        background: linear-gradient(269.46deg, #147bd1 0%, #095cab 101.94%);
        height: 100%;
        z-index: -1;
      }
      .summary-content {
        width: 100%;
        margin-top: 40px;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        .summary-count {
          width: 100%;
          height: 56px;
          font-family: PingFang SC;
          font-style: normal;
          font-weight: normal;
          font-size: 36px;
          line-height: 100%;
          /* identical to box height, or 36px */
          color: #ffffff;
          float: left;
        }
        .summary-desc {
          width: 100%;
          height: 24px;
          font-family: PingFang SC;
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 100%;
          /* identical to box height, or 24px */
          color: #ffffff;
          float: left;
          text-align: center;
          margin-top: 24px;
        }
      }
    }
  }
}
</style>
