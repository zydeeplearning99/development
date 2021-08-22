<template>
  <div class="doc">
    <div class="banner">
      <div class="banner-cover">
        <span class="banner-title">文档中心</span>
        <a href="#dataos">测试</a>
      </div>
      <div class="banner-image">
      </div>
    </div>
    <div class="content">
      <div class="search">
        <el-input class="search-input" prefix-icon="el-icon-search" v-model="searchValue" placeholder="请输入文档名称搜索"></el-input>
      </div>
      <div class="main">
        <div class="row">
          <div class="data-doc data-infrastructure" id="di">
            <div class="title">
              <span>Data Infrastructure</span>
            </div>
            <div class="docs">
              <div v-for="index of 2" :key="index" class="column">
                <ul>
                  <li v-for="doc of docGetter.list.dataInfrastructure.filter(item => {return item.name.indexOf(searchValue) > -1}).slice((index - 1) * 9, index * 9)" :key="doc.id">
                    <router-link :to="`/docView/${doc.id}`">{{doc.name}}</router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="data-doc data-os" id="dataos">
            <div class="title">
              <span>Data OS</span>
            </div>
            <div class="docs">
              <div v-for="index of 2" :key="index" class="column">
                <ul>
                  <li v-for="doc of docGetter.list.dataOS.filter(item => {return item.name.indexOf(searchValue) > -1}).slice((index - 1) * 9, index * 9)" :key="doc.id">
                    <router-link :to="`/docView/${doc.id}`" v-if="doc.fileName">{{doc.name}}</router-link>
                    <span v-if="!doc.fileName" @click="openFileUrl(doc)">{{doc.name}}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="row" style="margin-top: 10px">
          <div class="data-doc data-discovery" id="dts">
            <div class="title">
              <span>Data Discovery</span>
            </div>
            <div class="docs">
              <div v-for="index of 2" :key="index" class="column">
                <ul>
                  <li v-for="doc of docGetter.list.dataDiscovery.filter(item => {return item.name.indexOf(searchValue) > -1}).slice((index - 1) * 9, index * 9)" :key="doc.id">
                    <router-link :to="`/docView/${doc.id}`">{{doc.name}}</router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="data-doc data-kg"  id="ak">
            <div class="title">
              <span>AISWare KG</span>
            </div>
            <div class="docs">
              <div v-for="index of 2" :key="index" class="column">
                <ul>
                  <li v-for="doc of docGetter.list.dataKG.filter(item => {return item.name.indexOf(searchValue) > -1}).slice((index - 1) * 9, index * 9)" :key="doc.id">
                    <router-link :to="`/docView/${doc.id}`">{{doc.name}}</router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="space">
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import {addLog} from "./../api/api";

export default {
  name: "Doc",
  data() {
    return {
      searchValue: ""
    }
  },
  computed: {
    ...mapGetters(['docGetter'])
  },
  methods: {
    openFileUrl(doc) {
      window.open(doc.url);
    },
    pos() {
      if (!window.location.hash) {
        return;
      }
      setTimeout(() => {
        document.querySelector(window.location.hash).scrollIntoView();
      });
    }
  },
  mounted() {
    addLog({
      opTypeId: 'visit',
      opTypeName: '访问',
      opObject: '文档中心',
      opContent: '文档中心',
      moduleId: '资料中心',
      moduleName: '资料中心'
    });
    this.pos();
  }
}
</script>

<style lang="scss">
.doc{
  background: #FAFAFA;
  .banner{
    height: 580px;
    .banner-cover{
      position: absolute;
      left: 0px;
      top: 0px;
      width: 100%;
      height: 580px;
      z-index: 2;
      background: linear-gradient(180deg, rgba(13, 13, 13, 0.6) 0%, rgba(13, 13, 13, 0.36) 100%);
      .banner-title{
        line-height: 580px;
        font-family: PingFang SC;
        font-style: normal;
        font-weight: 500;
        font-size: 80px;
        color: rgba(255, 255, 255, 0.85);
      }
    }
    .banner-image{
      position: absolute;
      left: 0px;
      top: 0px;
      width: 100%;
      height: 580px;
      z-index: 1;
      background-image: url("../assets/img/doc/doc-banner.png");
    }
  }
  .content{
    margin: 0 auto;
    width: 1210px;
    .search{
      margin-top: 25px;
      .search-input{
        width: 500px;
        height: 40px;
        display: inherit;
        .el-input__inner{
          background: #FAFAFA;
          border: 1px solid rgba(0, 0, 0, 0.09);
          box-sizing: border-box;
          border-radius: 20px;
        }
      }
    }
    .main{
      margin-top: 20px;
      .row{
        display: flex;
        justify-content: space-between;
        .data-doc{
          width: 597px;
          height: 478px;
          background: #FFFFFF;
          .title{
            width: 597px;
            height: 130px;
            background: linear-gradient(180deg, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0) 100%);
            opacity: 0.9;
            span{
              float: right;
              padding-right: 20px;
              padding-top: 51px;
              font-family: Arial;
              font-style: normal;
              font-weight: bold;
              font-size: 28px;
              line-height: 100%;
              color: #FFFFFF;
            }
          }
          .docs{
            height: calc(100% - 170px);
            padding: 20px 0px;
            display: flex;
            justify-content: space-between;
            .column{
              width: 50%;
              height: 100%;
              &:not(:last-child){
                border-right: 1px solid rgba(0, 0, 0, 0.06);
              }
              ul{
                padding-inline-start: 27px;
                margin-block-start: 0px;
                margin-block-end: 0px;
                li{
                  list-style-type:none;
                  text-align: left;
                  font-family: PingFang SC;
                  font-style: normal;
                  font-weight: normal;
                  font-size: 14px;
                  line-height: 33px;
                  a{
                    text-decoration:none;
                    color: rgba(0, 0, 0, 0.85);
                  }
                  span {
                    cursor: pointer;
                  }
                }
              }
            }
          }
        }
        .data-infrastructure{
          .title{
            background-image: url("../assets/img/doc/doc-product.png");
          }
        }
        .data-os{
          .title{
            background-image: url("../assets/img/doc/doc-product.png");
          }
        }
        .data-discovery{
          .title{
            background-image: url("../assets/img/doc/doc-product.png");
          }
        }
        .data-kg{
          .title{
            background-image: url("../assets/img/doc/doc-product.png");
          }
        }
      }
    }
  }
  .space{
    height: 226px;
  }
}
</style>