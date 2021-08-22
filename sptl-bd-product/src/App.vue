<template>
  <div id="app">
    <el-container direction="vertical">
      <!-- <Header /> -->
      <el-main>
        <router-view/>
      </el-main>
      <!-- <Footer /> -->
    </el-container>
  </div>
</template>
<script>
import Header from './component/Header';
import Footer from './component/Footer';
import { login } from './api/api';
import { getQueryString } from './assets/js/common';
export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  
  mounted() {
    const token = sessionStorage.getItem('token');
    const code = getQueryString('code');
    const state = getQueryString('state');
    login({token, code , state}).then(res => {
      let resultCode = res.resultCode;
      if (resultCode === '-2') {
        window.location.href = res.bean;
      } else {
        sessionStorage.setItem('token', res.bean.token);
        this.$store.dispatch('setRightMenu',res.beans);
      }
    });
  }
}
</script>
<style lang="scss">
@import "./assets/fonts/style.css";
body{
  margin: 0;
  font-family: PingFang SC, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
::-webkit-scrollbar {/*滚动条整体样式*/
  width: 8px;     /*高宽分别对应横竖滚动条的尺寸*/
  height: 8px;
}
::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
  border-radius: 6px;
  background-color: rgba(196, 196, 196, 0.45);
}
::-webkit-scrollbar-track {/*滚动条里面轨道*/
  background: transparent;
}
#app {
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.el-main{
  padding: 0;
}
</style>
