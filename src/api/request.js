import axios from 'axios'
import baseConfig from './baseConfig'


const instance = axios.create();

export default instance;

export function request(apis){
    console.log(apis)
    const result = {}
    Object.keys(apis).forEach(key => {
        let currentApi = apis[key];
        // currentApi = {
        //     url:currentApi
        // }
        result[key] = (params={},configs={}) => {
            configs = Object.assign(baseConfig(),configs)
            configs = Object.assign(currentApi,configs)
            if(["post","put","patch"].indexOf(configs.method) > -1){
                configs.data = Object.assign(configs.data || {}, params)
            }else{
                configs.params = Object.assign(configs.params || {}, params);
            }
            return instance(configs).then(res => res.data)
        }
        
    })
    return result;
}