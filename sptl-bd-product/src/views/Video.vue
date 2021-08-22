<template>
<div class="videoWrapper">
  <div class="banner">
    <div class="title">视频中心</div>
  </div>
  <div class="content">
     <el-tabs v-model="activeName">
      <el-tab-pane label="Data Discovery" name="1" key="1">
        <div class="videoList">
          <el-row :gutter="30">
            <el-col :span="8">
              <div class="item">
                <div class="item-top">
                  <video src="/video/dts/1.mp4" controls="controls" height="100%" width="100%" preload="meta">
                    your browser does not support the video tag
                  </video>
                </div>
                <div class="item-bottom">
                  <div class="title">为企业快速构建BI报表系统</div>
                </div>
              </div>
            </el-col>
             <el-col :span="8">
              <div class="item">
                <div class="item-top">
                  <video src="/video/dts/2.mp4" controls="controls" height="100%" width="100%" preload="meta">
                    your browser does not support the video tag
                  </video>
                </div>
                <div class="item-bottom">
                  <div class="title">支撑业务人员DIY取数需求</div>
                </div>
              </div>
            </el-col>
             <el-col :span="8">
              <div class="item">
                <div class="item-top">
                  <video src="/video/dts/3.mp4" controls="controls" height="100%" width="100%" preload="meta">
                    your browser does not support the video tag
                  </video>
                </div>
                <div class="item-bottom">
                  <div class="title">制作季度年度报告</div>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-tab-pane>
       <el-tab-pane label="Data Infrastructure" name="2" key="2">
        <div class="videoList">
          <el-row>
            <el-col :span="8">
              <div class="item">
                <div class="item-top">
                  <video src="/video/di/1.mp4" controls="controls" height="100%" width="100%" preload="meta">
                    your browser does not support the video tag
                  </video>
                </div>
                <div class="item-bottom">
                  <div class="title">集群管控：大数据多租户管理能力</div>
                </div>
              </div>
            </el-col>
             <el-col :span="8">
              <div class="item">
                <div class="item-top">
                  <video src="/video/di/2.mp4" controls="controls" height="100%" width="100%" preload="meta">
                    your browser does not support the video tag
                  </video>
                </div>
                <div class="item-bottom">
                  <div class="title">流处理：批流融合计算</div>
                </div>
              </div>
            </el-col>
             <el-col :span="8">
              <div class="item">
                <div class="item-top">
                  <video src="/video/di/3.mp4" controls="controls" height="100%" width="100%" preload="meta">
                    your browser does not support the video tag
                  </video>
                </div>
                <div class="item-bottom">
                  <div class="title">集群洞察：大数据平台故障诊断</div>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="item">
                <div class="item-top">
                  <video src="/video/di/4.mp4" controls="controls" height="100%" width="100%" preload="meta">
                    your browser does not support the video tag
                  </video>
                </div>
                <div class="item-bottom">
                  <div class="title">集群洞察-大数据平台运维监控</div>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-tab-pane>
       <el-tab-pane label="Data OS" name="3" key="3">
        <div class="videoList">
          <el-row>
            <el-col :span="8">
              <div class="item">
                <div class="item-top">
                  <video src="/video/do/1.mov" controls="controls" height="100%" width="100%" preload="meta">
                    your browser does not support the video tag
                  </video>
                </div>
                <div class="item-bottom">
                  <div class="title">数据可视化开发</div>
                </div>
              </div>
            </el-col>
             <el-col :span="8">
              <div class="item">
                <div class="item-top">
                  <video src="/video/do/2.mov" controls="controls" height="100%" width="100%" preload="meta">
                    your browser does not support the video tag
                  </video>
                </div>
                <div class="item-bottom">
                  <div class="title">自驱动数据治理</div>
                </div>
              </div>
            </el-col>
             <el-col :span="8">
              <div class="item">
                <div class="item-top">
                  <video src="/video/do/3.mov" controls="controls" height="100%" width="100%" preload="meta">
                    your browser does not support the video tag
                  </video>
                </div>
                <div class="item-bottom">
                  <div class="title">数据开放</div>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-tab-pane>
      <el-tab-pane label="AISWare KG" name="4" key="4">
        <div class="videoList">
          <el-row>
            <el-col :span="8">
              <div class="item">
                <div class="item-top">
                  <video src="/video/ak/1.mp4" controls="controls" height="100%" width="100%" preload="meta">
                    your browser does not support the video tag
                  </video>
                </div>
                <div class="item-bottom">
                  <div class="title">配置图谱数据来源信息</div>
                </div>
              </div>
            </el-col>
             <el-col :span="8">
              <div class="item">
                <div class="item-top">
                  <video src="/video/ak/2.mp4" controls="controls" height="100%" width="100%" preload="meta">
                    your browser does not support the video tag
                  </video>
                </div>
                <div class="item-bottom">
                  <div class="title">可视化创建本体模型</div>
                </div>
              </div>
            </el-col>
             <el-col :span="8">
              <div class="item">
                <div class="item-top">
                  <video src="/video/ak/3.mp4" controls="controls" height="100%" width="100%">
                    your browser does not support the video tag
                  </video>
                </div>
                <div class="item-bottom">
                  <div class="title">图谱流水线编排</div>
                </div>
              </div>
            </el-col>
             <el-col :span="8">
              <div class="item">
                <div class="item-top">
                  <video src="/video/ak/4.mp4" controls="controls" height="100%" width="100%" preload="meta">
                    your browser does not support the video tag
                  </video>
                </div>
                <div class="item-bottom">
                  <div class="title">图谱查询与可视化浏览</div>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</div></template>
<script>
    import { mapGetters } from 'vuex'
    import {addLog} from "@/api/api";

    export default {
      name: 'Video',
      data () {
        return {
          activeName: '1'
        }
      },
      components: {

      },
      computed: {
        ...mapGetters(['product', 'videoGetter'])
      },
      mounted () {
        addLog({
          opTypeId: 'visit',
          opTypeName: '访问',
          opObject: '视频中心',
          opContent: '视频中心',
          moduleId: '资料中心',
          moduleName: '资料中心'
        });
      },
      methods: {
      },
    }
</script>

<style lang="scss">
.videoWrapper{
  .banner{
    background-size: cover;
    padding: 250px 0;
    background: url('./../assets/img/video/banner.png'), linear-gradient(180deg, rgba(13, 13, 13, 0.6) 0%, rgba(13, 13, 13, 0.36) 100%);
    background-blend-mode: luminosity;
     .title{
      font-weight: 500;
      font-size: 80px;
      line-height: 100%;
      color: rgba(255, 255, 255, 0.85);
    }
  }
  .content{
    width: 1212px;
    margin: 0 auto;
    padding: 92px 0;
    .el-tabs{
      .el-tabs__header{
        margin: 0;
        .el-tabs__nav-wrap{
          &:after{
            height: 0;
          }
          .el-tabs__nav-scroll{
            .el-tabs__nav{
              .el-tabs__active-bar{
                height: 0;
              }
              .el-tabs__item{
                font-family: Arial;
                font-size: 28px;
                line-height: 100%;
                color: rgba(0, 0, 0, 0.85);
                padding: 22px 0px;
                height: auto;
                border: 2px solid transparent;
                width: 290px;
                & + .el-tabs__item{
                  margin-left: 10px;
                }
                &.is-active, &:hover{
                  border-color: #147BD1;
                  box-sizing: border-box;
                  color: #147BD1;
                  font-weight: bold;
                }
              }
            }
          }
        }
      }
      .el-tabs__content{
        margin-top: 64px;
        .el-tab-pane{
          .videoList{
            .el-row{
              .el-col{
                .item{
                  margin-top: 64px;
                  .item-top{
                    width: 384px;
                    height: 216px;
                    video{
                      object-fit: fill; //消除留白
                    }
                  }
                  .item-bottom{
                    width: 368px;
                    font-size: 14px;
                    line-height: 21px;
                    color: rgba(0, 0, 0, 0.85);
                    mix-blend-mode: normal;
                    padding: 17px 0 9px 14px;
                    border: 0.96px solid rgba(0, 0, 0, 0.247432);
                    border-top: 0;
                    text-align: left;
                    .goodList{
                      ul{
                        padding-top: 16px;
                        padding-left: 0;
                        margin: 0 0 0 15px;
                        li{
                          font-size: 12px;
                          line-height: 100%;
                          color: #000;
                          & + li{
                            margin-top: 16px;
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          .page{
            margin: 150px 0 110px;
            .el-pagination{
              text-align: right;
              .btn-prev, .btn-next{
                width: 32px;
                height: 32px;
                border-radius: 4px;
                border: 1px solid rgba(0, 0, 0, 0.15);
                padding: 0;
                color: rgba(0, 0, 0,0.65);
              }
              .btn-prev{
                margin-right: 14px;
              }
              .btn-next{
                margin-left: 8px;
              }
              .el-pagination__jump{
                margin-left: 16px;
                font-size: 14px;
                color: rgba(0,0, 0,.65);
                line-height: 22px;
                .el-input{
                  width: 28px;
                  height: 32px;
                  padding: 0;
                  margin: 0 8px;
                  .el-input__inner{
                    border: 1px solid rgba(0, 0, 0, 0.15);
                    border-radius: 4px;
                    height: 32px;
                  }
                }
              }
              .el-pager{
                .number{
                  mix-blend-mode: normal;
                  opacity: 0.65;
                  border: 1px solid rgba(0, 0, 0, 0.15);
                  box-sizing: border-box;
                  border-radius: 3px;
                  font-size: 14px;
                  line-height: 32px;
                  text-align: center;
                  color: rgba(0, 0, 0, 0.65);
                  width: 32px;
                  height: 32px;
                  padding: 0;
                  & + .number{
                    margin-left: 8px;
                  }
                  &.active{
                    color: #147BD1;
                  }
                }
                .el-icon{
                  &.more{
                    mix-blend-mode: normal;
                    color: rgba(0, 0, 0, 0.25)
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>