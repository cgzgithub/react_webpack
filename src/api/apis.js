import {request} from './request';

export default request({
    getAllArticleList:{
        url:'/api/article/articleAll'
    },
    getPublicArticleList:{
        url:'/api/article/articleAllPublic'
    }
})