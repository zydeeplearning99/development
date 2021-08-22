/**
 * 引入fetch、baseUrl
 * @param params
 * @returns {*}
 */
import {post, downloadGet} from '../apiConfig/index'

/**
 * 用户登陆接口
 * @param params
 * @returns {Promise | Promise<unknown>}
 */
export function login (params) {
  return post(`/portal/sso/asiaInfoLogin?code=${params.code}&state=${params.state}`, params);
}

/**
 * 日志记录接口
 * @param params
 * @returns {Promise | Promise<unknown>}
 */
export function addLog (params) {
  return post('/portal/log/addReportLog', params);
}
/**
 * 下载文件
 */
export const downloadFile = (url, name) => {
  downloadGet(url, {}).then(data => {
    if (!data) {
      this.$message.error('下载内容为空');
      return;
    }
    let url = window.URL.createObjectURL(new Blob([data]));
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveOrOpenBlob(new Blob([data]), name);
    } else {
      let link = document.createElement('a');
      link.style.display = 'none';
      link.href = url;
      link.setAttribute('download',  name);
      document.body.appendChild(link);
      link.click();
      //释放URL对象所占资源
      window.URL.revokeObjectURL(url);
      //用完即删
      document.body.removeChild(link);
    }
  }).catch(err => {
    console.log('err: ', err);
  })
}