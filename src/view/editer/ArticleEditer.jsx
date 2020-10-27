import React,{Fragment} from 'react';
import '../../markdown.css'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai.css'
import E from 'wangeditor'
import { Card } from 'antd';


export default class ArticleEditer extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            editorContent:``
        }
        this.editer = null
    }
    componentDidMount(){
        const elemMenu = this.refs.editorElemMenu;
        const elemBody = this.refs.editorElemBody;
        this.editor = new E(elemMenu, elemBody);
        this.editor.highlight = hljs
        this.editor.config.onchange = html => {
            console.log(html)
            this.setState({
                editorContent: this.editor.txt.html()
            })
        }
        this.editor.config.uploadImgShowBase64 = true
        this.editor.create()
        this.editor.txt.html(this.state.editorContent)
    }
    componentWillUnmount() {
        this.editor=null;
    }
    render() {
        return(
            <Fragment>
                <div>
                    
                </div>
                <Card title="富文本内容区">
                    
                    <div style={{display:"flex"}}>
                        <div style={{width:"50%"}}>
                            <div ref="editorElemMenu"></div>
                            <div className="markdown-body" style={{
                            minHeight: 400,
                            borderRight: "1px solid #ccc",
                        }} ref="editorElemBody"></div>
                        </div>
                        <div style={{paddingLeft:"10px"}}>
                            <div style={{fontWeight:'bold',paddingTop:"10px"}}>效果预览</div>
                            <div className="markdown-body"  dangerouslySetInnerHTML={{__html:this.state.editorContent}}></div>
                        </div>
                    </div>
                </Card>
            </Fragment>
        )
    }
}