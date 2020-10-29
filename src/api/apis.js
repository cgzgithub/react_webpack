import {request} from './request';

export default request({
    // 获取所有文章列表
    getAllArticleList:{
        url:'/api/article/articleAll'
    },
    // 获取公开文章列表
    getPublicArticleList:{
        url:'/api/article/articleAllPublic'
    },
    // 根据ID获取文章详情
    articleGetById:{
        url:'/api/article/articleGetById'
    },
})