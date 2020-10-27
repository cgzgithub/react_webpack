import React, {Fragment} from 'react';
import hljs from 'highlight.js'

import '../../markdown.css'
import 'highlight.js/styles/monokai.css'
// import E from 'wangeditor'
import api from '@/api/apis';

export default class ArticleDetail extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            articleContent:''
        }
        this.editor = null
    }
    componentDidMount(){
        // const elemBody = this.refs.content;
        // this.editor = new E(elemBody);
        // this.editor.highlight = hljs
        // this.editor.config.onchange = html => {
        //     console.log(html)
        //     this.setState({
        //         editorContent: this.editor.txt.html()
        //     })
        // }
        // this.editor.config.uploadImgShowBase64 = true
        // this.editor.create()
        
        console.log(this.props.location.query)
        const articleId = this.props.location.query.id
        api.articleGetById({'articleId':articleId}).then(res => {
            console.log(res.data.articleContentHtml)
            this.setState({
                articleContent:res.data.articleContentHtml
            })
            // this.editor.txt.html(res.data.articleContentHtml)
        })
    }
    render() {
        return(
            <Fragment>
                <div>
                    文章详情页面
                </div>
                <div className="markdown-body" dangerouslySetInnerHTML={{__html:this.state.articleContent}}></div>
                {/* <div style={{minHeight:'400px'}} ref="content"></div> */}
            </Fragment>
        )
    }
}