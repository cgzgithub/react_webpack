export default () => {
    const baseConfig = {
        method:'post',
        baseUrl:'https://cgzbg.cn:8080',
        timeout:1000*60,
        data:{
            token:''
        },
        headers:{}
    }
    return baseConfig
}