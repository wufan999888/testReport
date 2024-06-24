import axios from './module/axios'; // 引入封装好的axios
import api from "../config/api.js";
// 测试
export const test = () => (axios({ url: api.yesApi + '/?s=SVIP.Swufan999888_MyApi.AGetTestReport&return_data=0&id=1&app_key=8D97B71A9E9BD52F08B8EE0A7FB9A696', method: 'get' }))
