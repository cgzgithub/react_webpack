import React,{Fragment} from 'react';
import '../../markdown.css'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai.css'
import E from 'wangeditor'
import { Card, Form, Input, Switch } from 'antd';


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
                    <Form>
                        <Form.Item label="文章标题" name="articleTitle" rules={[{required:true,message:'请输入文章标题'}]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="文章描述" name="articleDesc" rules={[{required:true,message:'请输入文章描述'}]}>
                            <Input.TextArea />
                        </Form.Item>
                        <Form.Item label="是否私密" name="private">
                            <Switch checkedChildren="私密" unCheckedChildren="公开" />
                        </Form.Item>
                        <Form.Item label="推荐" name="isRecom">
                            <Switch checkedChildren="推荐" unCheckedChildren="普通" />
                        </Form.Item>
                    </Form>
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