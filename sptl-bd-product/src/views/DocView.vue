<template>
  <div class="view">
    <div class="header">
    </div>
    <div class="info">
      <div class="menu">
        <el-breadcrumb class="breadcrumb" separator="/">
          <el-breadcrumb-item :to="{ path: '/doc' }">{{docInfoGetter.docInfo.productName}}</el-breadcrumb-item>
          <el-breadcrumb-item>{{docInfoGetter.docInfo.name}}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="title">
        <span>{{docInfoGetter.docInfo.fileName}}</span>
      </div>
      <div class="update-time">
        <span>更新时间： {{docInfoGetter.docInfo.updateTime}}</span>
        <span class="download" @click="downloadPDF">下载  <img src="../assets/img/doc/arrow-down.png"/></span>
      </div>
    </div>
    <div class="doc">
      <iframe id="doc-page" :src="'/pdf/web/viewer_basic.html?file=' + filePath" width='100%' height='680px' frameborder='0'>
      </iframe>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { downloadFile, addLog } from "./../api/api";

export default {
  name: "DocView",
  data () {
    return {
      filePath: ''
    }
  },
  computed: {
    ...mapGetters(['docInfoGetter'])
  },
  mounted () {
    let id = this.$route.params.id;
    this.$store.dispatch('queryDocById',{id: id});
    this.filePath = '/docs/' + encodeURI(this.docInfoGetter.docInfo.productName) + '/' + encodeURI(this.docInfoGetter.docInfo.fileName);
    addLog({
      opTypeId: 'visit',
      opTypeName: '访问',
      opObject: this.docInfoGetter.docInfo.name,
      opContent: this.docInfoGetter.docInfo.productName + "/" + this.docInfoGetter.docInfo.fileName,
      moduleId: '文档中心',
      moduleName: '文档中心'
    });
  },
  methods: {
    downloadPDF() {
      addLog({
        opTypeId: 'download',
        opTypeName: '下载',
        opObject: this.docInfoGetter.docInfo.name,
        opContent: this.docInfoGetter.docInfo.productName + "/" + this.docInfoGetter.docInfo.fileName,
        moduleId: '文档中心',
        moduleName: '文档中心'
      });
      downloadFile(this.filePath, this.docInfoGetter.docInfo.fileName);
    }
  }
}
</script>

<style lang="scss">
.view{
  .header{
    height: 80px;
    width: 100%;
    background: #000000;
  }
  .info{
    height: 116px;
    width: 1210px;
    margin: 0 auto;
    padding-top: 28px;
    .title{
      display: table;
      margin-top: 50px;
      span{
        font-family: Arial;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 100%;
        color: #000000;
      }
    }
    .update-time{
      display: flex;
      justify-content: space-between;
      span{
        font-family: PingFang HK;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 100%;
        color: rgba(0, 0, 0, 0.45);
      }
      .download {
        font-family: PingFang SC;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 100%;
        color: #147BD1;
        cursor: pointer;
      }
    }
  }
  .menu{
    & > span{
      font-family: PingFang HK;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 100%;
      color: #147BD1;
    }
  }
  .doc{
    width: 1210px;
    margin: 0 auto;
    iframe{
      margin-bottom: 30px;
    }
  }
}
</style>