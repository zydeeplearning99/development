<template>
  <div class="home">
    <div class="bannerCarousel">
      <el-carousel height="564px">
        <el-carousel-item arrow="never">
          <div class="content content1">
            <div class="title">数据驱动企业数字化转型</div>
            <div class="subtitle">AISWare  BigData 亚信大数据产品线</div>
            <div class="description">亚信大数据产品家族是数据驱动企业数字化转型的绝佳选择。凭借DataInfra、DataOS、DataDiscovery、Onta KG产品帮助企业充分利用云计算、数据可视化、知识认知等先进技术，全面发挥数据生产要素作用，驱动企业数字化转型与创新发展。</div>
            <div class="viewBtn"><router-link to="/doc" class="link-btn">了解更多</router-link></div>
          </div>
         </el-carousel-item>
        <el-carousel-item>
          <div class="content content2">
            <div class="title">人人都能成为数据分析专家</div>
            <div class="subtitle">AISWare DataDiscovery 数据探索分析平台</div>
            <div class="description">数据探索分析平台（AISWare Data Discovery）是亚信深耕电信行业多年独立研发的集数据指标体系创建、海量数据自助分析、多维多指标交叉分析、多端可视化展现的全能型商务智能解决方案。</div>
            <div class="viewBtn"><router-link to="/product/di" class="link-btn">查看详情</router-link></div>
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="content content3">
            <div class="title">海量数据基石，绽放数据之美</div>
            <div class="subtitle">AISWare DataInfrastructure 大数据基础平台</div>
            <div class="description">亚信数据基础平台（AISWare DataInfrastructure），提供完整的Hadoop技术生态环境，为企业提供大数据的存储、计算及分析能力，提供管理、监控、优化一体化的大数据基础平台，并提供专业的大数据服务、运维、咨询，协助客户打造企业级低成本、高效，稳定、安全的大数据技术平台。</div>
            <div class="viewBtn"><router-link to="/product/do" class="link-btn">查看详情</router-link></div>
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="content content4">
            <div class="title">盘点数据资产，构建生态运营</div>
            <div class="subtitle">AISWare DataOS 数据开发运营平台</div>
            <div class="description">以数据融合为基础、以智慧运营为衔接、以赋能生产执行为重点打造的数据中台。深化跨域数据整合并沉淀公共的数据能力实现数据的分层与水平解耦，同时贯通数据处理、治理、安全、运营等多种能力实现数据资产的全生命周期支撑，并进一步提供专业化的数据资产“管家”服务。</div>
            <div class="viewBtn"><router-link to="/product/dts" class="link-btn">查看详情</router-link></div>
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="content content5">
            <div class="title">呈现知识世界，唤醒认知智能</div>
            <div class="subtitle">AISWare KG 知识图谱平台</div>
            <div class="description">亚信知识图谱（AISWare Knowledge Graph）是一站式知识图谱构建平台，提供本体设计、信息抽取、知识映射、多源融合、推理计算等功能。同时，针对下游应用，提供知识图谱发布、查询、可视化等便捷的接口及服务。</div>
            <div class="viewBtn"><router-link to="/product/ak" class="link-btn">查看详情</router-link></div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
   <!-- <div class="banner">
     <div class="styleDiv1"></div>
     <div class="styleDiv2"></div>
     <div class="styleDiv3"><div class="styleDiv4"><div class="styleDiv5"></div></div> </div>
     <div class="content">
       <div class="title">AISWare BIGDATA</div>
       <div class="description">涵盖大数据基础设施和大数据应用在内的丰富产品及服务，助力客户快速构建企业级数据架构，获取数据时代核心竞争优势。</div>
     </div>
   </div> -->

   <div class="fullStack" style="width:100%;height:840px;background-color:grey;">
     <div class="stackTitle" style="width:100%;height:200px;display:flex;justify-content:center;align-items:center;">
       <span>大数据全栈能力</span>
     </div>
     <div class="stackContext" style="margin-left:355px;height:547px;background-color:red;">
       <div class="stackOptions" style="width:134px;height:100%;background-color:blue;display:flex;flex-direction:column;justify-content:space-between;align-items:center">
         <div class="option">
           <span>
             
           </span>

         </div>
         <div class="option">
         </div>
         <div class="option">
         </div>
         <div class="option">
         </div>

       </div>
     </div>

   </div>


   <div class="prodOverview">
     <div class="title">产品体系</div>
     <div class="content">
       <img src="@/assets/img/home/prod_overview.svg"  alt="产品体系" title="产品体系"/>
     </div>
   </div>
   <div class="prodcutWrapper">
     <div class="prodTypeList">
       <div :class="{'item': true, 'active': prod.id === selectedProd.id}" v-for="(prod, index) of product.list" :key="index" @click="viewProd(prod)">
         <span :class="'icon-prod' + (index + 1)"></span>
         <span class="enName">{{prod.enName}}</span>
         <span class="name">{{prod.name}}</span>
        </div>
     </div>
     <div class="prodDetail">
       <div class="description">{{selectedProd.description}}</div>
       <div class="goodnessWrapper">
        <div class="goodContent">
           <div class="left">
           <div class="title">{{selectedProd.name}}优势</div>
           <div class="content">
             <div class="item" :key="good.id" v-for="good of selectedProd.goodnessList">
               <i class="el-icon-circle-check"></i><span><span class="name">{{good.name}}</span>：<span class="description">{{good.description}}</span></span>
             </div>
           </div>
           <div class="toolbar" >
             <el-button @click="openProd(selectedProd)">立即体验</el-button>
           </div>
         </div>
         <div class="right">
           <img :src="require(`./../assets/img/home/${selectedProd.picture}`)"   :alt="selectedProd.name" :title="selectedProd.name" />
         </div>
        </div>
       </div>
       <div class="docsWrapper">
        <el-row>
          <el-col :span="24 / selectedProd.docs.length" v-for="(doc, index) of selectedProd.docs" :key="index">
            <div class="name">{{doc.name}}</div>
            <div class="btn" @click="download(doc)">下载<i class="el-icon-bottom"></i></div>
          </el-col>
        </el-row>
       </div>
     </div>
   </div>
   <div class="newsWrapper">
     <div class="title">视频动态</div>
     <div class="content">
       <ul>
         <li>
          <video src="/video/di/home.mp4" ref="videoPlayer_di" controls="controls" height="100%" width="100%" preload="meta" poster="@/assets/img/home/video_cover1.png" ></video>
          </video>
          <i class="play-btn el-icon-video-play" v-show="!isPlay_di" @click="playVideo('di')"></i>
          <div class="name" v-show="!isPlay_di">Data Infrastructure</div>
         </li>
         <li>
           <video src="/video/do/home.mp4" ref="videoPlayer_do" controls="controls" height="100%" width="100%" preload="meta" poster="@/assets/img/home/video_cover2.png">
          </video>
          <i class="play-btn el-icon-video-play" v-show="!isPlay_do" @click="playVideo('do')"></i>
          <div class="name" v-show="!isPlay_do">Data OS</div>
         </li>
         <li>
           <video src="/video/dts/home.mp4" ref="videoPlayer_dts" controls="controls" height="100%" width="100%" preload="meta" poster="@/assets/img/home/video_cover3.png">
          </video>
          <i class="play-btn el-icon-video-play" v-show="!isPlay_dts" @click="playVideo('dts')"></i>
          <div class="name" v-show="!isPlay_dts">Data Discovery</div>
         </li>
         <li>
           <video src="/video/ak/home.mp4" ref="videoPlayer_ak" controls="controls" height="100%" width="100%" preload="meta" poster="@/assets/img/home/video_cover4.png" >
          </video>
          <i class="play-btn el-icon-video-play" v-show="!isPlay_ak" @click="playVideo('ak')"></i>
          <div class="name" v-show="!isPlay_ak">Data KG</div>
         </li>
       </ul>
     </div>
   </div>
   <div class="midBannerWrapper">
     <div class="left">
       <div class="subtitle">AISWare BIGDATA</div>
       <div class="title">企业数字化（数智化）转型使能者</div>
     </div>
     <div class="right">
        <router-link to="/app/1" class="link-btn app-link">行业应用</router-link>
        <router-link to="/doc" class="link-btn">发现更多</router-link>
     </div>
   </div>
   <div class="appWrapper">
     <div class="content">
       <div class="title">行业应用&案例</div>
       <div class="list">
         <div  class="item">
           <div class="tag">电信行业</div>
           <div class="top">
           </div>
           <div class="bottom">亚信科技作为中国领先的电信大数据产品及解决方案提供商，为中国移动、中国联通、中国电信、中国广电提供了覆盖BMO域的大数据解决方案，涵盖了数据治理、数据合作运营、数字化营销、客户体验提升等多个领域，覆盖通信用户数量超过22亿。</div>
         </div>
         <div  class="item">
           <div class="tag">政府与公共服务</div>
           <div class="top">
           </div>
           <div class="bottom">亚信科技致力于政府及公用事业的数据化转型，打通政府、社会数据资源，提升城市治理、民生服务水平，为市民提供更加优质的服务。已为10+行业标杆客户在智慧城市、法院数据治理、燃气等方面构建了行业解决方案，打造了众多创新应用场景。</div>
         </div>
         <div  class="item">
           <div class="tag">金融行业</div>
           <div class="top">
           </div>
           <div class="bottom">亚信科技通过系统平台支撑能力和咨询规划能力，采用人工智能、大数据、云计算技术，为银行、保险、证券等金融单位提供先进的金融行业IT解决方案，涉及数据资产管理、CRM、大数据运营等。</div>
         </div>
       </div>
       <div class="carsoule">
         <el-carousel height="636px">
          <el-carousel-item>
           <div class="item item1">
              <div class="title">集中化多租户大数据平台</div>
              <div class="description">集中化多租户大数据平台方案以“集中化”为建设引领，顺应技术发展，构建丰富服务组件、多集群统一管控、平台运营高效、数据安全可控的集中化多租户大数据平台，实现平台能力、数据服务能力、共性工具能力、系统运维能力的统一建设、统一管控，面向内外部租户提供全面敏捷的储算、工具、数据等大数据服务能力。</div>
              <div class="viewBtn"><router-link to="/app/2" class="router-link">查看详情</router-link></div>
           </div>
          </el-carousel-item>
          <el-carousel-item>
           <div class="item item2">
              <div class="title">移动总部OSS数据共享平台</div>
              <div class="description">移动总部OSS数据共享平台方案以大数据平台为基础，通过全面的数据治理和数据管控能力，构建面向集团网络部的业务数据管理、网管业务数据支撑、业务专题分析及网络通用数据服务和数据供给能力，通过数据订阅和数据共享服务支撑上层各项网管应用和专题应用。</div>
              <div class="viewBtn"><router-link to="/app/3" class="router-link">查看详情</router-link></div>
           </div>
          </el-carousel-item>
          <el-carousel-item>
           <div class="item item3">
              <div class="title">重庆燃气集团大数据平台</div>
              <div class="description">基于物联网、大数据、云计算、信息系统等“互联网+”技术，配合最新服务理念，以达到实现燃气用量数据分析、燃气管网安全检测、燃气工程监督管理、燃气应急智慧调度等目标，最终实现“一键、自动、信息、预警、安全、远程、体验”等智慧应用。助力行业信息化建设，随着信息化应用水平提高，可降低成本、提高利润、节省人力、最大效能，从而提升企业核心竞争能力。</div>
              <div class="viewBtn"><router-link to="/app/1" class="router-link">查看详情</router-link></div>
           </div>
          </el-carousel-item>
        </el-carousel>
       </div>
     </div>
   </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { downloadFile, addLog } from '@/api/api';

export default {
  name: 'Home',
  data() {
    return {
      selectedProd: {id: '', description: '', goodnessList: [], docs: [], picture: 'prod1.png'},
      isPlay_di: false,
      isPlay_do: false,
      isPlay_dts: false,
      isPlay_ak: false
    }
  },
  computed: {
    ...mapGetters(['product','noRightMess'])
  },
  mounted () {
    addLog({
      opTypeId: 'visit',
      opTypeName: '访问',
      opObject: '首页',
      opContent: '首页',
      moduleId: '首页',
      moduleName: '首页'
    });
    if (this.product.list.length > 0) {
      this.selectedProd = this.product.list[0];
    }
  },
  methods: {
    viewProd(prod) {
      this.selectedProd = prod;
    },
    openProd(prod) {
      if(prod.tyButton){
        const token = sessionStorage.getItem('token');
        addLog({
          opTypeId: 'visit',
          opTypeName: '访问',
          opObject: prod.name,
          opContent: prod.name,
          moduleId: prod.name,
          moduleName: prod.name
        });
        window.open(prod.href + '?token=' + token, '_blank');
      }else{
          this.$alert(this.noRightMess.message, '提示', {
            confirmButtonText: '确定'
          });
      }
      
    },
    download(doc) {
      addLog({
        opTypeId: 'download',
        opTypeName: '下载',
        opObject: doc.name,
        opContent: doc.url,
        moduleId: '首页',
        moduleName: '首页'
      });
      downloadFile('/docs/' + encodeURI(doc.url), doc.name + '.pdf');
    },
    playVideo(type) {
      let video = this.$refs['videoPlayer_' + type];
      video.play();
      this['isPlay_' + type] = !video.paused;
    }
  }
}
</script>
<style lang="scss">
.home{
  .bannerCarousel{
    .el-carousel{
      .el-carousel__container{
        .el-carousel__item{
          .content{
            box-sizing: border-box;
            height: 100%;
            padding-top: 152px;
            text-align: left;
            padding-left: 10%;
            .title{
              font-family: Microsoft YaHei;
              font-weight: bold;
              font-size: 44px;
              line-height: 58px;
              color: rgba(255, 255, 255, 0.85);
            }
            .subtitle{
              font-family: Arial;
              font-weight: normal;
              font-size: 20px;
              line-height: 23px;
              color: rgba(255, 255, 255, 0.85);
              margin: 14px 0 10px;
            }
            .description{
              font-family: Microsoft YaHei;
              font-size: 14px;
              line-height: 24px;
              color: #FFFFFF;
              height: 120px;
              width: 474px;
            }
            .viewBtn{
              margin-top: 13px;
              .link-btn{
                display: inline-block;
                height: 40px;
                font-size: 14px;
                line-height: 38px;
                border-radius: 2px;
                padding-left: 32px;
                padding-right: 32px;
                border: 1px solid rgba(255, 255, 255, 0.65);
                color: rgba(255, 255, 255, 0.65);
                text-decoration: none;
                &:hover{
                  text-decoration: none;
                }
              }
            }
          }
          .content1{
            background: url('./../assets/img/home/banner插画.png');
            background-size: 100% 100%;
          }
          .content2{
            background: url('./../assets/img/home/矩形.png');
            background-size: 100% 100%;
          }
          .content3{
            background: url('./../assets/img/home/Group 284.png');
            background-size: 100% 100%;
          }
          .content4{
            background: url('./../assets/img/home/Group 285.png');
            background-size: 100% 100%;
          }
          .content5{
            background: url('./../assets/img/home/Group 286.png');
            background-size: 100% 100%;
          }
        }
      }
    }
  }
  //---------
  .stackOptions .option{
    width:124px;
    height: 130px;
    background: rgba(35, 90, 245, 0.06);
  }

  .banner{
    height: 718px;
    background: linear-gradient(180deg, #596572 0%, #0E0F24 100%);
    position: relative;
    padding-top: 152px;
    & > div{
      position: absolute;
    }
    .styleDiv1{
      width: 75%;
      height: 619px;
      background: rgba(16, 16, 16, 0.2);
      margin: 0 12.5%;
    }
    .styleDiv2{
      width: 80%;
      height: 619px;
      background: rgba(16, 16, 16, 0.2);
      margin: 34px 10% 0;
    }
    .styleDiv3{
      width: calc(86% - 24px);
      height: 610px;
      background: #0C0C0C;
      margin: 68px 7% 0;
      padding: 40px 12px 0;
       .styleDiv4{
        background-image: url('./../assets/img/home/banner-border.png');
        background-size: 100% 100%;
        width: 100%;
        height: 100%;
        position: relative;
        .styleDiv5{
          position: absolute;
          background-image: url('./../assets/img/home/banner-content.png');
          background-size: 100% 100%;
          height: 528px;
          left: 27px;
          top: 82px;
          right:236px; 
        }
      }
    }
    .content{
      text-align: center;
      padding-top: 44px;
      left: 0;
      right: 0;
      z-index: 9;
      .title{
        color: rgba(255, 255, 255, 0.85);
        font-size: 80px;
        line-height: 92px;
      }
      .description{
       font-size: 16px;
       line-height: 120%;
       color: rgba(255, 255, 255, 0.65);
       width: 485px;
       margin: 16px auto 0;
      }
    }
  }
  .prodOverview{
    .title{
      padding-top: 44px;
      font-size: 28px;
      line-height: 100%;
      color: rgba(0,0, 0, .85);
    }
    .content{
      text-align: center;
      padding: 24px 0 19px;
      // img{
      //   // width: 1612px;
      //   // height: 625px;
      // }
    }
  }
  .prodcutWrapper{
    .prodTypeList{
      height: 160px;
      display: flex;
      align-items: center;
      justify-content: center;
      .item{
        width: 300px;
        background: #FFFFFF;
        padding: 46px 0 22px;
        text-align: center;
        color: #000;
        margin: 0 3px;
        cursor: pointer;
        & > span{
          display: block;
          &:first-child{
          color: #323232;
          font-size: 27px;
          margin-bottom: 27px;
        }
        }
        &.active, &:hover{
          box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.15);
        }
        .enName{
          font-family: Arial;
          font-size: 16px;
          line-height: 18px;
        }
        .name{
          font-size: 14px;
          line-height: 20px;
        }
      }
    }
    .prodDetail{
      padding-top: 58px;
      .description{
        font-size: 24px;
        line-height: 100%;
        color: rgba(0, 0, 0, 0.85);
      }
      .goodnessWrapper{
        margin-top: 18px;
        background-image: url('./../assets/img/home/good_bg.png');
        background-size: cover;
        height: 531px;
        padding-top: 29px;
        .goodContent{
          display: flex;
          justify-content: center;
          width: 1210px;
          margin: 0 auto;
          border-bottom: 1px solid rgba(0, 0, 0, 0.15);
          padding-bottom: 74px;
        }
        .left{
          width: 490px;
          color: rgba(0, 0, 0, 0.85);
          position: relative;
          padding-top: 10px;
          .title{
            font-weight: 600;
            font-size: 24px;
            line-height: 100%;
            text-align: left;     
          }
          .content{
            padding-top: 26px;
            height: 349px;
            .item{
              display: flex;
              & + .item{
                margin-top: 20px;
              }
              i{
                color: rgba(9, 92, 171, 0.35);
                font-size: 16px;
                margin-right: 14px;
              }
              span{
                font-size: 12px;
                line-height: 150%;
                text-align: left;
                .name{
                  font-weight: 600;
                }
              }
            }
          }
          .toolbar{
            padding-left: 30px;
            text-align: left;
            .el-button{
              width: 104px;
              height: 32px;
              background: #147BD1;
              font-size: 12px;
              line-height: 32px;
              color: #FFFFFF;
              text-align: center;
              border: 0;
              padding: 0;
            }
          }
        }
        .right{
          margin-left: 32px;
          width: 613px;
          height: 431px;
          background: #F7F7F7;
          padding: 10px 9px 7px 8px;
          img{
            width: 100%;
            height: 100%;
          }
        }
      }
      .docsWrapper{
        width: 964px;
        margin: 0 auto;
        padding-top: 27px;
        .el-row{
          .el-col{
            text-align: left;
            .name{
              font-size: 12px;
              line-height: 100%;
              color: rgba(0, 0, 0, 0.65);
            }
            .btn{
              margin-top: 21px;
              font-size: 12px;
              line-height: 100%;
              color: #147BD1;
              cursor: pointer;
              i{
                margin-left: 3px;
              }
            }
          }
        }
      }
    }
  }
  .newsWrapper{
    margin-top: 115px;
    height: 586px;
    background-image: url('./../assets/img/home/news_bg.png');
    background-color: #14162A;
    background-size: cover;
    padding:42px 0 52px;
    .title{
      font-size: 28px;
      line-height: 100%;
      color: #FFFFFF;
    }
    .content{
      padding-top: 6px;
      ul{
        margin: 0;
        padding: 0;
        width: 1098px;
        margin: 0 auto;
        li{
          list-style: none;
          float: left;
          width: 480px;
          height: 240px;
          margin-top: 36px;
          position: relative;
          &:hover{
            i{
              &.pause-btn{
                display: block;
              }
            }
          }
          & > i{
            font-size: 72px;
            color: #fff;
            position: absolute;
            left: 50%;
            top: 50%;
            margin-left: -36px;
            margin-top: -36px;
            z-index: 9999;
            cursor: pointer;
            &.pause-btn{
              display: none;
            }
          }
          .name{
            position: absolute;
            left: 12px;
            bottom: 12px;
            font-family: Arial;
            font-size: 14px;
            line-height: 100%;
            color: #FFFFFF;
          }
          &:nth-child(even) {
            margin-left: 138px;
          }
           &:nth-child(2){
             .item{
                background-image: url('./../assets/img/home/video_cover2.png');
             }
            }
            &:nth-child(3){
              .item{
                background-image: url('./../assets/img/home/video_cover3.png');
             }
            }
            &:nth-child(4){
            .item{
              background-image: url('./../assets/img/home/video_cover4.png');
             }
            }
          .item{
            width: 480px;
            height: 240px;
            background-image: url('./../assets/img/home/video_cover1.png');
            cursor: pointer;
            .center{
              padding-top: 84px;
              span{
                font-size: 72px;
                color: rgba(255, 255, 255, 0.65);
              }
            }
            .name{
              font-size: 14px;
              line-height: 100%;
              color: #fff;
              text-align: left;
              padding: 49px 12px 12px;
            }
          }
        }
      }
    }
  }
  .midBannerWrapper{
    height: 240px;
    background-image: url('./../assets/img/home/mid-banner.png');
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .left{
      color: rgba(255, 255, 255, 0.85);
      .subtitle{
        font-weight: bold;
        font-size: 48px;
        line-height: 55px;
      }
      .title{
        font-size: 24px;
        line-height: 34px;
      }
    }
    .right{
      .link-btn{
        width: 184px;
        height: 56px;
        font-size: 20px;
        line-height: 100%;
        color: #FFFFFF;
        background: transparent;
        border-radius: 0;
        border: 1px solid #FFFFFF;
        display: inline-block;
        text-decoration: none;
        line-height: 56px;
        & + .link-btn{
          margin-left: 56px;
        }
        &.app-link{
          background: #147BD1;
          border-color: #147BD1;
        }
      }
    }
  }
  .appWrapper{
    .content{
      .title{
        font-size: 28px;
        line-height: 100%;
        color: #000;
        margin: 72px 0;
      }
      .list{
        display: flex;
        width: 1210px;
        margin: 0 auto;
        .item{
          width: 384px;
          position: relative;
          & + .item{
            margin-left: 29px;
          }
          &:nth-child(2){
            .top{
              background-image: url('./../assets/img/home/app2.png');
            }
            .tag{
              width: 108px;
              background-image: url('./../assets/img/home/tag_bg2.png');
            }
          }
          &:nth-child(3){
            .top{
              background-image: url('./../assets/img/home/app3.png');
            }
          }
          .tag{
            position: absolute;
            width: 80px;
            height: 24px;
            top: 27px;
            font-size: 12px;
            line-height:24px;
            text-align: left;
            color: #fff;
            background-image: url('./../assets/img/home/tag_bg.png');
            padding-left: 16px;
          }
          .top{
            height: 184px;
            width: 100%;
            background-image: url('./../assets/img/home/app1.png');
            background-blend-mode: luminosity;
            background-color: #E5E5E5;
          }
          .bottom{
            border: 1px solid #DBDBDB;
            box-sizing: border-box;
            font-size: 16px;
            line-height: 150%;
            color: rgba(0, 0, 0, 0.85);
            padding: 24px;
            text-align: left;
            height: 196px;
          }
        }
      }
      .carsoule{
        height: 636px;
        width: 1208px;
        margin: 56px auto 108px;
        color: rgba(0, 0, 0, 0.85);
        .el-carousel__item{
          .item{
            background-image: url('./../assets/img/home/carousel1.png');
            background-color: #E5E5E5;
            height: 100%;
            padding:  78px 0 0 103px;
            background-blend-mode: luminosity;
            &.item2{
              background-image: url('./../assets/img/home/carousel2.png');
            }
            &.item3{
              background-image: url('./../assets/img/home/carousel3.png');
            }
          }
        }
        .el-carousel__indicators{
          &.el-carousel__indicators--horizontal{
            bottom: 20px;
          }
          .el-carousel__indicator{
            padding: 0;
            .el-carousel__button{
              width: 10px;
              height: 10px;
              border-radius: 10px;
              background: #fff;
            }
            & + .el-carousel__indicator{
              margin-left: 16px;
            }
          }
        }
        .title{
          font-weight: 600;
          font-size: 24px;
          line-height: 100%;
          margin: 0 0 32px 0;
          text-align: left;
        }
        .description{
          font-size: 16px;
          line-height: 150%;
          width: 507px;
          text-align: left;
        }
        .viewBtn{
          position: absolute;
          left: 103px;
          bottom: 132px;
          .router-link{
            width: 104px;
            height: 32px;
            background: #147BD1;
            font-size: 12px;
            color: #fff;
            line-height: 32px;
            text-decoration:none;
            display:block;
          }
          .el-link--inner{
            width: 104px;
            height: 32px;
            background: #147BD1;
            font-size: 12px;
            color: #fff;
            line-height: 32px;
            vertical-align: middle;
          }
        }
      }
    }
  }
  video{
    position: relative;
    object-fit: fill; //消除留白
    &::-webkit-media-controls-enclosure{
      display: none
    }
    // &::-webkit-media-controls-play-button {
    //   display: none;
    // }
    &:hover{
      &::-webkit-media-controls-enclosure{
        display: flex;
      }
    }
    &:focus{
      outline: none;
    }
  }
}
</style>
