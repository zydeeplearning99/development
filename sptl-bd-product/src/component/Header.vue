<template>
  <!-- <el-header height="80px" :class="{'is_fixed': isNotFixed}"> -->
  <el-header height="60px" :class="{'is_fixed': isNotFixed}">
    
   <div class="header-content" style="justify-content:flex-start;">
     <div class="allTitle" style="display:flex;width:1300px;justify-content:space-around;align-items: center;">
       <div class="flexleft" style="width:300px;margin-left:50px">
       <div class="left" style="float:left;margin-top:16px"></div>
       <div class="whiteline" style="width:0;height:18px;border: 1px solid rgba(255, 255, 255, 0.3); margin:21px 0px 21px 10px;float:left"></div>
      <span style="display:inline-block;width:114px;height:60px;line-height:60px;font-family: Source Han Sans CN;
      font-style: normal;font-weight: normal;font-size: 16px;float:left;color: rgba(255, 255, 255, 0.85);">亚信大数据</span>
     </div>
       <div class="center2"> 
      <span class="newtitle">首页</span>
      <span class="newtitle">大数据基础平台</span>
      <span class="newtitle">数据中台操作系统</span>
      <span class="newtitle">奥塔知识图谱</span>
      <span class="newtitle">应用案例<i class="el-icon-arrow-down"></i></span>
      <span class="newtitle">视频&文档<i class="el-icon-arrow-down"></i></span>
       </div>
      <div class="titleRight">
        <span>
          产品体验<i class="el-icon-arrow-down"></i>
        </span>
        </div> 
    </div>
     
      
    <!-- <div class="center">
      <router-link to="/">首页</router-link>
      <el-popover
      :visible-arrow="false"
      placement="bottom-start"
      width="100%"
      trigger="hover">
        <div class="childMenuWrapper menu_wrapper_en">
          <div class="left">
            <div class="leftContent">
              <div class="title">AISWare BIGDATA</div>
              <div class="subtitle">企业数字化（数智化）转型使能者</div>
              <div class="description">亚信大数据产品家族是企业数字化转型的绝佳选择，凭借大数据基础平台、开发运营平台、数据探索分析平台、知识图谱平台产品可以帮助企业利用云计算、数据可视化、知识认知等先进技术进行数字化重塑，以应对不断变化的业务需求，为未来做好准备。</div>
            </div>
          </div>
          <div class="right">
            <div class="title">核心产品</div>
            <div class="content">
              <div class="col" v-for="(prod, index) of product.list" :key="prod.id">
                <router-link  :to="prod.url">
                  <div class="col-left"><i :class="`icon-prod${index + 1}`"></i></div>
                  <div class="col-right">
                    <div class="title">{{prod.enName}}</div>
                    <div class="description">{{prod.description}}</div>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <el-button slot="reference">核心产品<i class="el-icon-arrow-down"></i></el-button>
      </el-popover>
      <el-popover
      :visible-arrow="false"
      placement="bottom-start"
      width="100%"
      trigger="hover">
        <div class="childMenuWrapper">
          <div class="left">
             <div class="leftContent">
              <div class="title">AISWare BIGDATA</div>
              <div class="subtitle">企业数字化（数智化）转型使能者</div>
              <div class="description">亚信大数据产品家族是企业数字化转型的绝佳选择，凭借大数据基础平台、开发运营平台、数据探索分析平台、知识图谱平台产品可以帮助企业利用云计算、数据可视化、知识认知等先进技术进行数字化重塑，以应对不断变化的业务需求，为未来做好准备。</div>
            </div>
          </div>
          <div class="right">
            <div class="title">行业应用</div>
            <div class="content">
              <div class="col" v-for="(app, index) of appGetter.appData" :key="app.id">
                <router-link :to="app.url">
                  <div class="col-left"><i :class="{'icon-logo': app.id !== '1', 'icon-fire' : app.id === '1'}"></i></div>
                  <div class="col-right">
                    <div class="title">{{app.appName}}</div>
                    <div class="description">{{app.appComment}}</div>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <el-button slot="reference">行业应用<i class="el-icon-arrow-down"></i></el-button>
      </el-popover>
      <el-popover
      :visible-arrow="false"
      placement="bottom-start"
      width="100%"
      trigger="hover">
        <div class="childMenuWrapper">
          <div class="left">
             <div class="leftContent">
              <div class="title">AISWare BIGDATA</div>
              <div class="subtitle">企业数字化（数智化）转型使能者</div>
              <div class="description">亚信大数据产品家族是企业数字化转型的绝佳选择，凭借大数据基础平台、开发运营平台、数据探索分析平台、知识图谱平台产品可以帮助企业利用云计算、数据可视化、知识认知等先进技术进行数字化重塑，以应对不断变化的业务需求，为未来做好准备。</div>
            </div>
          </div>
          <div class="right">
            <div class="title">资料中心</div>
            <div class="content">
              <div class="col">
                <router-link to="/video">
                  <div class="col-left"><i class="icon-play"></i></div>
                  <div class="col-right">
                    <div class="title">视频中心</div>
                    <div class="description">大数据产品操作教程视频中心。</div>
                  </div>
                </router-link>
              </div>
              <div class="col">
                <router-link to="/doc">
                  <div class="col-left"><i class="icon-list_alt"></i></div>
                  <div class="col-right">
                    <div class="title">文档中心</div>
                    <div class="description">大数据产品介绍、交付与教程文档中心。</div>
                  </div>
                </router-link>
              </div>
            </div>
            </div>
          </div>
        <el-button slot="reference">资料中心<i class="el-icon-arrow-down"></i></el-button>
      </el-popover>
    </div> -->
    
    <!-- <div class="right" >
      <el-popover
      :visible-arrow="false"
      placement="bottom-start"
      width="100%"
      trigger="hover">
        <div class="childMenuWrapper">
          <div class="left">
             <div class="leftContent">
              <div class="title">AISWare BIGDATA</div>
              <div class="subtitle">企业数字化（数智化）转型使能者</div>
              <div class="description">亚信大数据产品家族是企业数字化转型的绝佳选择，凭借大数据基础平台、开发运营平台、数据探索分析平台、知识图谱平台产品可以帮助企业利用云计算、数据可视化、知识认知等先进技术进行数字化重塑，以应对不断变化的业务需求，为未来做好准备。</div>
            </div>
          </div>
          <div class="right">
            <div class="title">立即体验</div>
            <div class="content">
              <div class="col" v-for="(prod, index) of product.list" :key="prod.id" @click="openProd(prod)">
                <div class="col-left"><i :class="`icon-prod${index + 1}`"></i></div>
                <div class="col-right">
                  <div class="title">{{prod.enName}}</div>
                  <div class="description">{{prod.description}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <el-button slot="reference">立即体验<i class="el-icon-arrow-down"></i></el-button>
      </el-popover>
    </div> -->
   </div>
  </el-header>
</template>
<script>
import { mapGetters } from 'vuex'
import { addLog } from "./../api/api";

export default {
  name: 'Header',
  components: {
  },
  computed: {
    ...mapGetters(['product', 'appGetter',"menuGetter",'noRightMess'])
  },
  data() {
    return {
      isNotFixed:false,
      activeIndex: '2-1',
      prodIndex: '1-1',
      menuList: [
        {key: '3', name: '资料中心', children: [
          {key: '3-1', name: '文档中心', url: '/doc'},
          {key: '3-2', name: '视频中心', url: '/video'}
        ]}
      ]
    }
  },
  mounted() {
    window.addEventListener('scroll',this.handleScroll)
  },
  methods: {
    handleScroll() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop // 滚动条偏移量
        let offsetTop = document.querySelector('.el-header').offsetTop;  // 要滚动到顶部吸附的元素的偏移量
        this.isNotFixed = scrollTop > offsetTop ? true : false;  // 如果滚动到顶部了，this.isFixed就为true
    },
     choseItem(prod) {
        if(window.location.hash.indexOf(prod.url) > -1) {
          return;
        }
        this.$router.push({path:prod.url});
    },
    openProd(prod) {
      if(prod.tyButton){
        const token = sessionStorage.getItem('token');
        let params = {};
        params.opTypeId = 'visit';
        params.opTypeName = '访问';
        params.moduleId = prod.name;
        params.moduleName = prod.name;
        params.opObject = prod.name;
        params.opContent= prod.name;
        addLog(params);
        window.open(prod.href + '?token=' + token, '_blank');
      }else{
        this.$alert(this.noRightMess.message, '提示', {
          confirmButtonText: '确定'
        });
      }
        
    },
    addLog(prod){
      let params = {};
      params.opTypeId = 'visit';
      params.opTypeName = '访问';
      params.moduleId = '核心产品';
      params.moduleName = '核心产品';

      params.opObject = prod.name;
      params.opContent=prod.name;
      addLog(params);
    }
  }
}
</script>
<style lang="scss">
  .el-popup-parent--hidden{
    .el-header{
      padding-right: 37px !important;
    }
  }
.el-header{
  background: transparent;
  position: fixed;
  left: 0;
  right: 0;
  z-index: 10;
  // padding-top: 20px;
  &.is_fixed{
    display: none;
  }
  .header-content{
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 1500px;
    margin: 0 auto;
    background-color: #333;
    .left{
    height: 23px;
    width: 104px;
    background-image: url('./../assets/img/header-logo.png');
    background-size: cover;
  }
  .left{
    height: 28px;
    width: 126px;
    background-image: url('./../assets/img/header-logo.png');
    background-size: cover;
  }
  .newtitle{
   font-style: normal;
   font-weight: normal;
   font-size: 16px;
   line-height: 100%;
   color: rgba(255, 255, 255, 0.85);    
  }
  .center2{
    display:flex;
    width:850px;
    justify-content: space-between;
    
  }
  .titleRight{
    width: 250px;
    flex-shrink: 1;
    display: flex;
    justify-content: flex-end;
     font-style: normal;
   font-weight: normal;
   font-size: 16px;
   line-height: 100%;
   color: rgba(255, 255, 255, 0.85); 
  }
  .center{
    display: flex;
    align-items: center;
    & > a{
      font-size: 12px;
      line-height: 14px;
      color: #fff;
      margin-right: 60px;
      text-decoration: none;
      padding: 20px 0;
      border-bottom: 3px solid transparent;
      &:focus, &:hover{
        border-color:#FFFFFF;
      }
    }
      & > span{
       & + span{
         margin-left:40px;
       }
    }
    .el-menu{
      margin-left: 40px;
      &.el-menu--horizontal{
        &.el-menu-demo{
          border: 0;
          background-color:transparent;
          .el-submenu{
            & + .el-submenu{
              margin-left: 40px;
            }
            &.is-active{
              color: #fff;
              border: 0;
            }
            .el-submenu__title{
              color: #fff;
              border: 0;
              font-size: 12px;
              line-height: 12px;
              padding: 0;
              height: 12px;
              &:hover, &:focus{
                background: transparent;
              }
            }
          }
        }
      }
    }
    .el-popover__reference-wrapper{
      .el-button{
        background: transparent;
        border: 0;
        font-weight: 400;
        padding: 20px 0;
        border-radius: 0;
        border-bottom: 3px solid transparent;
        &:focus, &:hover{
          border-color: #FFFFFF;
          i{
            transform: rotate(180deg);
          }
        }
        span{
          font-size: 12px;
          line-height: 100%;
          color: #fff;
        }
        i{
          color: rgba(255, 255, 255, 0.85);
          margin-left: 7px;
        }
      }
    }
  }
  .right{
     .el-popover__reference-wrapper{
      .el-button{
        background: transparent;
        border: 0;
        font-weight: 400;
        padding: 20px 0;
        border-radius: 0;
        border-bottom: 3px solid transparent;
        &:focus, &:hover{
          border-color:#FFFFFF;
          i{
            transform: rotate(180deg);
          }
        }
        span{
          font-size: 12px;
          line-height: 100%;
          color: #fff;
        }
        i{
          color: rgba(255, 255, 255, 0.85);
          margin-left: 7px;
        }
      }
    }
  }
  }
}
.el-popover{
  width: 100%;
  padding: 0;
  box-shadow: none;
  border: 0;
  left: 0px !important;
  &[x-placement^=bottom] {
    margin-top: 24px;
}
  .childMenuWrapper{
    height: 290px;
    display:flex;
    &.menu_wrapper_en{
      .right{
        .content{
          .col{
            .col-right{
              .title{
                font-family: Arial;
              }
            }
          }
        }
      }
    }
    .left{
      width: 30%;
      background: #9198A2;
      padding-top: 79px;
      text-align: left;
      display: flex;
      justify-content: flex-end;
      .leftContent{
        margin-right: 63px;
        width:210px;
        text-align: right;
      }
      .title{
        font-family: Arial;
        font-size: 20px;
        line-height: 23px;
        color: rgba(255, 255, 255, 0.85);
      }
      .subtitle{
        font-family: Microsoft YaHei;
        font-size: 14px;
        line-height: 18px;
        color: rgba(255, 255, 255, 0.85);
        margin: 2px 0 23px;
      }
      .description{
        font-family: Microsoft YaHei;
        font-size: 12px;
        line-height: 130%;
        color: rgba(255, 255, 255, 0.65);
        p{
          margin: 0;
          & + p{
            margin-top: 2px;
          }
        }
      }
    }
    .right{
      right: 70%;
      padding:30px 0 0 49px;
      flex: 1;
      .title{
        font-size: 12px;
        line-height: 100%;
        color: rgba(0, 0, 0, 0.45);
      }
      .content{
        display: flex;
        flex-wrap: wrap;
        padding-top: 30px;
        width: 842px;
        .col{
          width: 421px;
          padding-bottom: 38px;
          display: flex;
          &:hover{
             color: #147BD1;
            .col-right{
              .title{
                color: #147BD1;
              }
            }
          }
          a{
            display: flex;
            text-decoration: none;
            color: #000;
            .col-right{
              .title{
                color: #000;
              }
            }
            &.router-link-active, &:hover{
              color: #147BD1;
              .col-right{
                .title{
                  color: #147BD1;
                }
              }
            }
          }
          .col-left{
            margin-right: 21px;
            padding-top: 5px;
            i{
              font-size: 18px;
            }
          }
          .col-right{
            .title{
              font-size: 16px;
              line-height: 18px;
              margin-bottom: 7px;
              cursor: pointer;
              color: #000;
              a{
                text-decoration: none;
              }
            }
            .description{
              font-size: 12px;
              line-height: 150%;
              color: rgba(0, 0, 0, 0.45);
              width: 309px;
            }
          }
        }
      }
    }
  }
}
.el-menu--horizontal{
  .el-menu {
    .el-menu-item{
      a{
        color: #333;
        text-decoration: none;
      }
      &.is-active, :hover{
        a{
          color: #147BD1;
        }
      }
    }
  }
}
</style>
