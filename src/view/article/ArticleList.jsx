import React, {Fragment} from 'react';
import apis from '@/api/apis';

export default class ArticleList extends React.Component{
    componentDidMount(){
        console.log('apis>>>>>>>>>>>',apis)
        apis.getPublicArticleList().then(res => {
            console.log(res)
        })
    }
    render() {
        return(
            <Fragment>
                <div>
                文章列表页面
                </div>
                <div>
                    
                </div>
            </Fragment>
        )
    }
}