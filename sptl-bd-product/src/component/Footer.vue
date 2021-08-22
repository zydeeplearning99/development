<template>
 <el-footer height="628px">
   <div class="content">
     <div class="left">
       <div class="logo"></div>
       <div class="address"><span>总部地址：北京市海淀区中关村软件园二期</span><span>西北旺东路10号院东区亚信大厦  100193</span></div>
       <div class="phone"><span>电话:(010)82166688</span><span>电话:(010)82166699</span></div>
       <div class="email">廉洁邮箱：AI_AC@asiainfo.com</div>
     </div>
     <div class="right">
       <div class="col">
         <div class="col-header">产品</div>
         <div class="col-content">
           <ul>
             <li v-for="prod in product.list" ><router-link :to="prod.url">{{prod.name}}</router-link></li>
           </ul>
         </div>
       </div>
       <div class="col">
         <div class="col-header">行业应用</div>
         <div class="col-content">
           <ul>
             <li v-for="app in appGetter.appData"><router-link :to="app.url">{{app.appName}}</router-link></li>
           </ul>
         </div>
       </div>
       <div class="col">
         <div class="col-header">资料中心</div>
         <div class="col-content">
           <ul>
             <li><router-link to="/video">视频中心</router-link></li>
             <li><router-link to="/doc">文档中心</router-link></li>
           </ul>
         </div>
       </div>
     </div>
   </div>
   <div class="bottom">Copy © 2019 All Reserved By 亚信科技</div>
 </el-footer>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Footer',
  components: {
  },
  computed: {
        ...mapGetters(['product', 'appGetter'])
  },
  data () {
    return {
      prodList: [{id:'',name:'大数据基础平台',url:'/product/di'},
          {id:'',name:'数据开发运营平台',url:'/product/do'},
          {id:'',name:'数据探索分析平台',url:'/product/dts'},
          {id:'',name:'知识图谱平台',url:'/product/ak'},
          ],
      appList: ['集中化多租户大数据平台', '移动总部OSS数据共享平台', '重庆燃气集团大数据平台']
    }
  },
}
</script>
<style lang="scss">
.el-footer{
  background: #000;
  padding: 160px 0 0;
  .content{
    display: flex;
    color: #fff;
    font-size: 14px;
    text-align: left;
    width: 1210px;
    margin: 0 auto;
    .left{
      width: 50%;
      flex: 1;
      .logo{
        width: 116px;
        height: 36px;
        background: url('./../assets/img/footer-logo.png');
        margin-bottom: 90px;
      }
      .address{
        margin-bottom: 58px;
      }
      .address, .phone{
         span{
          display: block;
          text-align: left;
          line-height: 14px;
          & + span{
            margin-top: 8px;
          }
        }
      }
      .email{
        margin-top: 8px;
        line-height: 14px;
        text-align: left;
      }
    }
    .right{
      display: flex;
      width: 50%;
      justify-content: space-around;
      .col{
        .col-header{
          font-weight: 600;
          line-height: 14px;
        }
        .col-content{
          margin-top: 14px;
          ul{
            margin: 0;
            padding: 0;
            li{
              list-style: none;
              margin-top: 16px;
              line-height: 14px;
              a{
                color: white;
                text-decoration: none;
              }
            }
          }
        }
      }
    }
  }
  .bottom{
    font-family: Source Han Sans CN;
    font-size: 14px;
    line-height: 21px;
    color: #FFFFFF;
    margin-top: 145px;
  }
}
</style>
