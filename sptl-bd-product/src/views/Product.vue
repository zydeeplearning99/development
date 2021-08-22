<template>
  <div class="product">
    <div :class="'banner-' + currentProduct" class="banner">
      <div class="productTxt">
        <div class="productTitleEN">{{selectedProd.nameEN}}</div>
        <div class="underline"></div>
        <div class="productTitleZH">{{selectedProd.name}}</div>
        <div class="productDesc">{{selectedProd.desc}}</div>
        <div class="buttonDiv">
            <el-button @click="openUrl(selectedProd)" >立即体验</el-button>
            <el-button style="margin-left: 17px" @click="openVideo">观看视频</el-button>
            <el-button style="margin-left: 17px" @click="openDocument(selectedProd)">查看文档</el-button>
            <el-dialog
                    :title="selectedProd.name"
                    :visible.sync="dialogVisible"
                    :before-close="handleClose"
                    width="60%"
            >
                <video id="player" :src="'/video/'+selectedProd.videoUrl" autoplay controls="controls" height="100%" width="100%">
                    your browser does not support the video tag
                </video>
            </el-dialog>
        </div>
      </div>
      <!--<div :class="'styleDiv1-' + currentProduct" class="styleDiv1"></div>-->
    </div>

    <div class="dataosLisence" v-if="currentProduct=='dataos'">
        <div class="lisence-content">
            <div class="lisence-title">
                部署和离线体验DataOS数据中台操作系统，请您先获取license！
            </div>
            <div class="button-group">
                <el-button @click="getLisence()">获取license</el-button>
                <el-button @click="downloadProduct()">下载制品库</el-button>
            </div>
        </div>
    </div>

    <div class="productFun">
      <div class="head">{{selectedProd.sceneName}}</div>
      <div class="funList">
          <el-row :gutter="20">
            <el-col :span="6" v-for="(prod, index) of selectedProd.funList" :key="index">
                <div :class="'item-' + currentProduct" class="grid-content bg-purple item">
                    <el-row :gutter="10">
                        <el-col :span="18">
                            <span class="funName">{{prod.funName}}</span>
                            <span class="funNameEN">{{prod.funNameEN}}</span>
                        </el-col>
                        <el-col :span="6">
                            <!--<div :class="'icon-fun-'+currentProduct + (index + 1)"></div>-->
                            <img :src="require(`./../assets/img/product/icon-fun-${currentProduct+prod.id}.svg`)" :alt="prod.title" :title="prod.title"/>
                        </el-col>
                    </el-row>
                    <el-row :gutter="10">
                        <div class="funDesc">{{prod.funDesc}}</div>
                    </el-row>
                </div>
            </el-col>
          </el-row>
      </div>
    </div>

    <div class="productScenarios">
          <div class="head">应用场景</div>
          <div class="scenariosBody">
              <div style="width: 1224px;">
                  <div class="left">
                      <div :class="{'item': true, 'active': prod.id === scenariosChoose}" v-for="(prod, index) of selectedProd.scenariosList" :key="index" @click="viewScenarios(prod)">
                          <div class="title">{{prod.title}}</div>
                          <div class="content">{{prod.content}}</div>
                      </div>
                  </div>
                  <div  class="right" >
                    <img :src="require(`./../assets/img/product/scenarios-${currentProduct+scenariosChoose}.png`)" :alt="currentProduct+scenariosChoose" :title="currentProduct+scenariosChoose"/>
                  </div>
              </div>
          </div>
    </div>

      <div  :class="'solution-' + currentProduct" class="solution">
          <div style="height: 65px"></div>
          <div class="solutionHead">解决方案</div>
          <div class="solutionBody">
              <div class="item" v-for="(prod, index) of selectedProd.solutionList" :key="index" >
                  <div class="img">
                      <img :src="require(`./../assets/img/product/solution-${currentProduct+prod.id}.png`)"   :alt="prod.title" :title="prod.title" />
                  </div>
                  <div class="title">{{prod.title}}</div>
                  <div class="content">{{prod.content}}</div>
                  <div class="buttonDiv">
                      <el-button>联系我们</el-button>
                  </div>
              </div>
          </div>
      </div>

      <div class="productAdvantage">
          <div class="advantageHead">产品优势</div>
          <div class="advantageBody">
              <div class="item" v-for="(prod, index) of selectedProd.advantageList" :key="index" >
                    <div class="imgDiv"><img :src="require(`./../assets/img/product/advantage-${currentProduct+prod.id}.png`)"   :alt="prod.title" :title="prod.title" /></div>
                    <div class="right">
                        <div class="title">{{prod.title}}</div>
                        <div class="content">{{prod.content}}</div>
                    </div>
              </div>
          </div>
      </div>


      <div class="coreCompetence">
          <div class="coreCompetenceHead">核心能力</div>
          <div class="coreCompetenceBody">
              <div :class="'item-' + currentProduct" class="item" v-for="(prod, index) of selectedProd.coreCompetenceList" :key="index" >
                  <div class="right">
                      <div class="content">
                          <video preload="meta" :src="'/video/'+prod.url" controls="controls" height="100%" width="100%">
                              your browser does not support the video tag
                          </video>
                      </div>
                      <div class="title">{{prod.title}}</div>
                  </div>
              </div>
          </div>
      </div>


      <div  :class="'productTrends-' + currentProduct" class="productTrends">
          <div style="height: 60px"></div>
          <div class="productTrendsHead">产品动态</div>
          <div class="productTrendsBody">
              <div class="item" v-for="(prod, index) of selectedProd.productTrendsList " :key="index" >
                  <div class="time">{{prod.time}}</div>
                  <div class="line"><span class="dot"></span></div>
                 <div class="version" style="color: transparent;">1</div>
                  <div class="version">{{prod.version}}</div>
                  <div class="title">{{prod.title}}</div>
              </div>
              <div class="lastLine"></div>
          </div>
      </div>

      <div :class="'experience-' + currentProduct" class="experience">
          <div style="height: 60px"></div>
          <div class="experienceHead">{{experienceTitle}}</div>
          <div class="experienceBody">
              <div class="buttonDiv">
                  <el-button  @click="openUrl(selectedProd)" >立即体验</el-button>
              </div>
          </div>
      </div>

  </div>
</template>
<script>
    import { mapGetters } from 'vuex';
    import { addLog } from "./../api/api";

    export default {
        name: 'Product',
        data () {
            return {
                scenariosChoose: '1',
                selectedProd: {},
                currentProduct:'dts',
                experienceTitle:'',
                dialogVisible: false
            }
        },
        watch: {
            '$route' (to, from) { //监听路由是否变化
                let toId = to.params.id || to.name;
                if(toId != from.params.id){
                    let id = toId;
                    this.currentProduct = id;
                    this.scenariosChoose = '1';
                    if (id && this.productDataGetter) {
                        this.selectedProd = this.productDataGetter.productData[id];
                        this.experienceTitle = this.selectedProd.experience.title;
                    }
                }
            }
        },
        components: {

        },
        computed: {
            ...mapGetters(['productDataGetter','noRightMess']),
        },
        updated(){
            this.addLogFirst(this.selectedProd);
        },

        mounted () {
            let id = this.$route.params.id || this.$route.name;
            this.currentProduct = id;
            if (id && this.productDataGetter) {
                this.selectedProd = this.productDataGetter.productData[id];
                this.experienceTitle = this.selectedProd.experience.title;
            }
        },

        methods: {
            viewScenarios(prod) {
                this.scenariosChoose = prod.id;
            },
            openUrl(prod){
                if(prod.tyButton){
                    let token = sessionStorage.getItem('token');
                    window.open(prod.href+"?token="+token, '_blank');
                    this.visitAppLog(prod)
                }else{
                    this.$alert(this.noRightMess.message, '提示', {
                        confirmButtonText: '确定'
                    });
                }               
            },
            openDocument(prod){
                let id = this.$route.params.id || this.$route.name;
                this.$router.push({path: `/doc#${id}`});
            },
            handleClose(done) {

                done();
                this.videoPlay();
            },
            openVideo(){
                this.dialogVisible = true  ;
                var player = document.getElementById("player");
                if(player && player.paused) {
                    // player.pause();
                    // this.dialogVisible= false;
                    player.play();
                }
            },
            videoPlay() {
                var player = document.getElementById("player");
                if(player.play) {
                    player.pause();
                    player.currentTime=0;
                    this.dialogVisible= false;
                }else {
                    player.play();
                }
            },
            visitAppLog(prod){
                let params = {};
                // params.objectId = prod.productId;
                // params.objectName = prod.name;
                params.opTypeId = 'visit';
                params.opTypeName = '访问';
                params.moduleId = '核心产品';
                params.moduleName ='核心产品';

                params.opObject = prod.nameEN;
                params.opContent= prod.nameEN;
                addLog(params);
            },
            addLogFirst(prod){
                let params = {};
                params.opTypeId = 'visit';
                params.opTypeName = '访问';
                params.moduleId = '核心产品';
                params.moduleName = '核心产品';

                params.opObject = prod.name;
                params.opContent=prod.name;
                addLog(params);
            },
            getLisence() {
                const token = sessionStorage.getItem('token');
                window.open('/dataos/license/apply?token=' + token, '_blank');
            },
            downloadProduct() {
                const token = sessionStorage.getItem('token');
                window.open('/dataos/dist/get?token=' + token, '_blank');
            }
            // addLog() {
            //     addLog(this.filePath, this.docInfoGetter.docInfo.fileName);
            // }
        }

    }
</script>

<style lang="scss">
    .el-popup-parent--hidden{
        padding-right: 17px !important;
    }
    .el-header{
        right: 17px !important;
    }
  .product{
    overflow-x:hidden;
    .banner-dts{
        background: url('./../assets/img/product/dts.png');
    }
    .banner-di{
      background: url('./../assets/img/product/di.png');
    }
    .banner-dataos{
      background: url('./../assets/img/product/dataos.png');
    }
    .banner-ak{
      background: url('./../assets/img/product/ak.png');
    }
    .banner{
      height: 554px;
      background-size: cover;
      position: relative;
        width: 100%;
      .productTxt{
        position: relative;
        width: 590px;
        height: 292px;
        /*margin-left: 348px;*/
          margin-left: 17.5%;
        top: 159px;
        .productTitleEN{
          position: relative;
          height: 62px;
          /*left: 0.41%;*/
          /*right: 6.2%;*/
          /*top: calc(50% - 62px/2 - 115px);*/
          font-family: Arial Black;
          font-style: normal;
          font-weight: 900;
          font-size: 44px;
          line-height: 62px;
          text-align: left;
          letter-spacing: 1px;
          color: #FFFFFF;
        }
        .underline{
          position: relative;
          position: relative;
          /*margin-left: 8px;*/
          margin-top: 19px;
          background: #FFFFFF;
          width: 40px;
          height: 2px;
        }
        .productTitleZH{
          position: relative;
          height: 28px;
          /*margin-left: 8px;*/
          font-family: PingFang SC;
          font-style: normal;
          font-weight: 500;
          font-size: 20px;
          line-height: 28px;
          letter-spacing: 2px;
          color: #FFFFFF;
          text-align: left;
          margin-top: 27px;
        }
        .productDesc{
          position: relative;
          height: 120px;
          /*margin-left: 8px;*/
          font-family: PingFang SC;
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: 26px;
          color: rgba(255, 255, 255, 0.857381);
          opacity: 0.857381;
          text-align: left;
          margin-top: 5px;
          width: 465px;
        }
        .buttonDiv{
          /*margin-left:8px;*/
          .el-button{
            color: #FFFFFF;
            background: transparent;
            width: 120px;
            height: 36px;
            padding: 0px;
            border-radius: 0px;
            border: 1px solid rgba(255,255,255,0.85);
            /*opacity: 0.85;*/
            float: left;
            span{
              font-family: Source Han Sans CN;
              font-style: normal;
              font-weight: normal;
              font-size: 14px;
              line-height: 21px;
              color: #FFFFFF;
              opacity: 1;
            }
          }
          .el-dialog__wrapper{
              .el-dialog{
                    background:transparent;
                  .el-dialog__header{
                      background:white;
                      .el-dialog__headerbtn{
                          top:23px;
                      }
                  }
                  .el-dialog__body{
                      padding: 0;
                  }
              }
          }
          .el-dialog__footer{
              display: none;
          }
        }

      }


    }
    .productFun{
        margin-top:70px;
        margin-bottom: 10px;
      .head{
        font-family: PingFang SC;
        font-style: normal;
        font-weight: normal;
        font-size: 28px;
        line-height: 39px;
        color: rgba(0, 0, 0, 0.85);
      }
      .funList{
        /*height: 150px;*/
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top:35px;
        .el-row{
            width: 1224px;
        }
        .item-ak{
            height: 225px !important;
        }
        .item{
            width: 284px;
            height: 150px;
            border: 1px solid rgba(0, 0, 0, 0.25);
            margin-top:30px;
            .el-row{
                margin: 10px 0px 0px 22px !important;
                width: auto;
              &:first-child{
                   margin-top: 20px !important;
               }
            }

            .funName{
                display: block;
                text-align: left;
                height: 21px;
                font-size: 14px;
                line-height: 21px;
                color: rgba(0, 0, 0, 0.85);
                font-family: Source Han Sans CN;
            }
            .funNameEN{
                display: block;
                text-align: left;
                height: 14px;
                font-family: Arial;
                font-style: normal;
                font-weight: normal;
                font-size: 12px;
                line-height: 14px;
                color: rgba(0, 0, 0, 0.65);
            }
            .funDesc{
                font-family: Source Han Sans CN;
                /*font-style: normal;*/
                /*font-weight: normal;*/
                width: 75%;
                font-size: 12px;
                line-height: 20px;
                color: rgba(0, 0, 0, 0.65);
                text-align: left;
            }
            .el-col{
                padding: 0px !important;
            }
        }
      }
    }
    .productScenarios{
          margin-top:80px;
          margin-bottom: 10px;
        .head{
            font-family: PingFang SC;
            font-style: normal;
            font-weight: normal;
            font-size: 28px;
            line-height: 39px;
            color: rgba(0, 0, 0, 0.85);
        }
        .scenariosBody{
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top:85px;
            .left{
                width: 285px;
                margin-left: 10px;
                float: left;
                .active{
                    .title{
                        color: #0189FF !important;
                    }
                }
                .item{
                    &:first-child{
                       padding-top: 0px !important;
                     }
                    text-align: left;
                    border-bottom:1px solid rgba(0, 0, 0, 0.253415);
                    padding: 26px 0px 30px 0px;
                    .title{
                        cursor: pointer;
                        font-family: Source Han Sans CN;
                        font-style: normal;
                        font-weight: normal;
                        font-size: 14px;
                        line-height: 21px;
                        color: rgba(0, 0, 0, 0.85);
                        &.active, &:hover{
                             /*box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.15);*/
                             color: #0189FF;
                         }
                    }

                    .content{
                        font-family: Source Han Sans CN;
                        font-style: normal;
                        font-weight: normal;
                        font-size: 12px;
                        line-height: 20px;
                        color: rgba(0, 0, 0, 0.852355);
                    }
                }
            }
            .right{
                float: left;
                width:830px;
                /*max-width:830px;*/
                /*height: 583px;*/
                margin-left: 80px;
                img{
                    width: 100%;
                    height: 100%;
                }
            }

        }
    }

    .solution{

        height: 535px;
        margin: 70px 0 10px 0;
        background: url('./../assets/img/product/solution-bg.png');
        /*padding-top: 65px;*/
        .solutionHead{
            font-family: PingFang SC;
            font-style: normal;
            font-weight: normal;
            font-size: 28px;
            line-height: 39px;
            color: #FFFFFF;
            /*margin-top: 70px;*/
        }
        .solutionBody{
            width:1100px;
            height:341px;
            background: #FFFFFF;
            margin: 55px auto 0 auto;
            display: flex;
            .item{
                height: 270px;
                width:366px;
                margin: 46px 0 25px 0;
                border-left: 1px solid rgba(0, 0, 0, 0.09);
                .title{
                    font-family: Source Han Sans CN;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 14px;
                    line-height: 21px;
                    color: #000000;
                    mix-blend-mode: normal;
                    opacity: 0.85;
                    margin-top: 15px;
                }
                .content{
                    text-align: left;
                    font-family: Source Han Sans CN;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 12px;
                    line-height: 22px;
                    color: rgba(0, 0, 0, 0.648793);
                    width: 265px;
                    height: 120px;
                    margin: 12px auto 0 auto;

                }
                .buttonDiv{
                  .el-button{
                      color: #FFFFFF;
                      background: transparent;
                      width: 120px;
                      height: 36px;
                      padding: 0px;
                      border-radius: 0px;
                      border: 1px solid rgba(0, 0, 0, 0.254671);;
                      opacity: 0.85;
                      float: left;
                      margin:15px 0 0 127px;
                      cursor: default;
                  span{
                      font-family: Source Han Sans CN;
                      font-style: normal;
                      font-weight: normal;
                      font-size: 14px;
                      line-height: 21px;
                      color: rgba(0, 0, 0, 0.845444);;
                      opacity: 1;
                  }
                  }
                }
            }
        }
    }


    .productAdvantage{
        margin-top:70px;
        margin-bottom: 10px;
        .advantageHead{
            font-family: PingFang SC;
            font-style: normal;
            font-weight: normal;
            font-size: 28px;
            line-height: 39px;
            color: rgba(0, 0, 0, 0.85);
        }
        .advantageBody{
            display: block;
            align-items: center;
            justify-content: center;
            width:1224px;
            margin:65px auto 0 auto;
            height: 300px;
            .item{
                height:150px;
                width: 33%;
                display: block;
                float: left;
                .imgDiv{
                    height: 100%;
                    width: 35%;
                    float: left;
                    img{
                        margin-top: 5px;
                    }
                }
                .right{
                    height: 100%;
                    width: 65%;
                    float: left;
                    .title{
                        text-align: left;
                        font-family: Source Han Sans CN;
                        font-style: normal;
                        font-weight: normal;
                        font-size: 14px;
                        line-height: 21px;
                        color: #0189FF;
                    }
                    .content{
                        text-align: left;
                        margin-top: 10px;
                        font-family: Source Han Sans CN;
                        font-style: normal;
                        font-weight: normal;
                        font-size: 12px;
                        line-height: 22px;
                        color: rgba(0, 0, 0, 0.648793);
                    }
                }
            }
        }
    }
    .coreCompetence{
        margin-top:50px;
        margin-bottom: 10px;
      .coreCompetenceHead{
          font-family: PingFang SC;
          font-style: normal;
          font-weight: normal;
          font-size: 28px;
          line-height: 39px;
          color: rgba(0, 0, 0, 0.85);
      }
      .coreCompetenceBody{
          display: block;
          align-items: center;
          justify-content: center;
          width:1224px;
          height:265px;
          margin:65px auto 0 auto;
          .item-ak{
              width:280px !important;
          }
          .item{
              height:150px;
              width: 380px;
              display: block;
              float: left;
              margin:0 15px 0 15px;
              .right{
                  border: 0.96px solid rgba(0, 0, 0, 0.247432);
              }
              &:first-child{
                    margin-left: 0px !important;
               }
              &:last-child{
                   margin-right: 0px !important;
               }
              .title{
                  margin:4px 0px 6px 10px;
                  font-family: PingFang SC;
                  font-style: normal;
                  font-weight: normal;
                  font-size: 14px;
                  line-height: 20px;
                  color: #000000;
                  mix-blend-mode: normal;
                  opacity: 0.85;
                  text-align: left;
              }
          }
      }
    }


    .productTrends{
        margin-top:70px;
        background: url('./../assets/img/product/product-trends.png');
        /*margin-bottom: 10px;*/
        height:396px;
        .productTrendsHead{
            font-family: PingFang SC;
            font-style: normal;
            font-weight: normal;
            font-size: 28px;
            line-height: 39px;
            color: #FFFFFF;
        }
        .productTrendsBody{
            width:1400px;
            margin:60px auto 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
            .item{
                display: block;
                float: left;
                width:240px;
                height:200px;
                .time{
                    font-family: PingFang SC;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 14px;
                    line-height: 14px;
                    color: rgba(255, 255, 255, 0.85);
                    opacity: 0.85;
                }
                .line{
                    height: 2.5px;
                    margin-top: 30px;
                    background: linear-gradient(90deg, rgba(51, 86, 255, 0.0001) 0%, #2B97FF 49.17%, rgba(35, 100, 255, 0.8069) 97.63%);
                    width: 240px;
                    height: 5px;
                    border-radius: 2.5px;
                    margin-left: -110px;
                    .dot{
                        display: block;
                        width: 8px;
                        height: 8px;
                        background: #FFFFFF;
                        border: 3px solid #234AA0;
                        border-radius: 50%;
                        float: right;
                        margin-top: -4px;
                    }
                }
                &:first-child{
                    .line{
                        background: linear-gradient(90deg, rgba(51, 86, 255, 0.0001) 0%, rgba(35, 100, 255, 0.459003) 97.63%) !important;
                        width: 220px !important;
                        margin-left: -96px !important;
                    }
                }
              /*  &:nth-child(5){
                  .line{
                      background: linear-gradient(90deg, rgba(51, 86, 255, 0.0001) 0%, #8C2BFF 49.17%, #EB6F51 97.63%);
                      .dot{
                          border: 3px solid #F8715D !important;
                      }
                  }
                }*/
                  &:nth-last-child(2){
                      .line{
                          background: linear-gradient(90deg, rgba(51, 86, 255, 0.0001) 0%, #8C2BFF 49.17%, #EB6F51 97.63%);
                      .dot{
                              border: 3px solid #F8715D !important;
                          }
                      }
                  }
                .version{
                    font-family: PingFang SC;
                    font-style: normal;
                    font-weight: 600;
                    font-size: 14px;
                    line-height: 130%;
                    text-align: center;
                    color: rgba(255, 255, 255, 0.85);
                    opacity: 0.85;
                }
                .title{
                    font-family: PingFang SC;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 14px;
                    line-height: 130%;
                    text-align: center;
                    color: rgba(255, 255, 255, 0.85);
                    opacity: 0.85;
                    width: 200px;
                    margin: 20px auto 0 auto;
                }
            }
            .lastLine{
                width: 150px;
                height: 5px;
                background: linear-gradient(90deg, rgba(255, 255, 255, 0.101972) 30.77%, rgba(255, 255, 255, 0.0001) 97.63%);
                border-radius: 2.5px;
                margin-left: -111px;
                margin-top: -107px;
            }

        }
    }

.experience{
    height: 223px;
    background: url('./../assets/img/product/experience.png');
    .experienceHead{
        font-family: Source Han Sans CN;
        font-style: normal;
        font-weight: normal;
        font-size: 28px;
        line-height: 42px;
        color: #FFFFFF;
        /*margin-top: 66px;*/
    }
    .experienceBody{
        display: flex;
        align-items: center;
        justify-content: center;
        .buttonDiv{
        .el-button{
            color: #FFFFFF;
            /*background: transparent;*/
            width: 120px;
            height: 36px;
            padding: 0px;
            border-radius: 0px;
            border: 1px solid rgba(255, 255, 255, 0.199847);;
            background: rgba(255, 255, 255, 0.199847);
            /*opacity: 0.85;*/
            float: left;
            margin-top: 25px;

            span{
                font-family: Source Han Sans CN;
                font-style: normal;
                font-weight: normal;
                font-size: 14px;
                line-height: 21px;
                color: #FFFFFF;
                opacity: 1;
            }
        }
        }


    }
}
    .dataosLisence {
        background-image: url(./../assets/img/product/lisence-bg.png);
        background-repeat: no-repeat;
        background-position-x: 545px;
        background-color: #235AF5;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 30px 0;
        .lisence-content {
            width: 1224px;
            display: flex;
            justify-content: space-between;
            .lisence-title {
                font-family: Source Han Sans CN;
                color: #FFFFFF;
                line-height: 40px;
                font-size: 27px;
                font-weight: lighter;
            }
            .el-button{
                color: #FFFFFF;
                background: transparent;
                width: 120px;
                height: 36px;
                padding: 0px;
                border-radius: 0px;
                border: 1px solid rgba(255,255,255,0.85);
                opacity: 0.85;
                margin-left: 30px;
                float: left;
                span{
                font-family: Source Han Sans CN;
                font-style: normal;
                font-weight: normal;
                font-size: 14px;
                line-height: 21px;
                color: #FFFFFF;
                opacity: 1;
                }
            }
        }
    }
  }

</style>
