import React,{Fragment} from 'react';
import api from '@/api/apis'
import '../../markdown.css'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai.css'
import E from 'wangeditor'
import { Card, Form, Input, Switch, Select, Button } from 'antd';
const {Option} = Select

export default class ArticleEditer extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            editorContent:``,
            articleTitle:'',
            articleForm:{
                articleId:'',
                userId:1,
                articleTitle:'',
                articleDesc:'',
                articleContentHtml:'',
                publicPrivate:'',
                isRecommend:'',
                fatherList:'',
                categoryList:'',
                labelList:'',
            }
        }
        this.editer = null
    }
    componentDidMount(){
        const articleId = this.props.location.state.id
        console.log('id',this.props.location.state.id)
        api.articleGetById({articleId}).then(res => {
            console.log('articleGetById',res)
            let {articleId,articleTitle,articleDesc,publicPrivate,isRecommend,articleContentHtml} = res.data
            let myData = Object.assign({},this.state.articleForm,{articleId,articleTitle,articleDesc,publicPrivate,isRecommend,articleContentHtml})
            this.setState({
                articleForm:myData,
                articleTitle:res.data.articleTitle
            })
            this.refs.myform.setFieldsValue({
                articleTitle:res.data.articleTitle,
                articleDesc:res.data.articleDesc,
                publicPrivate:res.data.publicPrivate
            })
            console.log(this.props)
            const elemMenu = this.refs.editorElemMenu;
        const elemBody = this.refs.editorElemBody;
        this.editor = new E(elemMenu, elemBody);
        this.editor.highlight = hljs
        this.editor.config.onchange = html => {
            console.log(html)
            let data = Object.assign({},this.state.articleForm,{articleContentHtml:this.editor.txt.html()})
            this.setState({
                articleForm:data
            })
            console.log(this.state.articleForm)
        }
        this.editor.config.uploadImgShowBase64 = true
        this.editor.create()
        this.editor.txt.html(this.state.articleForm.articleContentHtml)

        })
        document.addEventListener('keydown',this.keyPress)
        
    }
    componentWillUnmount() {
        this.editor=null;
        document.removeEventListener('keydown',this.keyPress)
    }
    keyPress = (e) => {
        console.log(e,e.keyCode == 'S'.charCodeAt(0))
        if(e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)){
            e.preventDefault();
            //your saving code
            console.log('hhhh', this,this.refs.myform.validateFields(),this.refs.myform.getFieldsValue())
            this.refs.myform.validateFields().then(function(){
                console.log('kkkk')
            },function(e){
                console.log('lll',e)
            })
          }
    }
    submitForm = () => {
        this.refs.myform.validateFields().then(function(){
            console.log('kkkk')
        },function(e){
            console.log('lll',e)
        })
    }
    handleCateChange = (v) => {
        console.log('handleCateChange',v)
    }
    handleLabelChange = (v) => {

    }
    onFinish = (v) => {
        console.log(v)
    }
    onFieldsChange = (v,v1) => {
        console.log(v1)
    }
    render() {
        let {articleId,articleTitle,articleDesc,publicPrivate,isRecommend,articleContentHtml} = this.state.articleForm
        console.log('articleTitle',articleTitle)
        return(
            <Fragment>
                <div>
                    <div>{articleTitle}</div>
                    <Form ref="myform" initialValues={{ articleTitle: articleTitle }} name="basic" onFinish={this.onFinish} onFieldsChange={this.onFieldsChange}>
                        <Form.Item label="文章标题" name="articleTitle" rules={[{required:true,message:'请输入文章标题'}]}
                        >
                            <Input  />
                        </Form.Item>
                        <Form.Item label="文章描述" name="articleDesc" rules={[{required:true,message:'请输入文章描述'}]}>
                            <Input.TextArea  />
                        </Form.Item>
                        <Form.Item label="是否私密" name="private">
                            <Switch checkedChildren="私密" unCheckedChildren="公开" />
                        </Form.Item>
                        <Form.Item label="推荐" name="isRecom">
                            <Switch checkedChildren="推荐" unCheckedChildren="普通" />
                        </Form.Item>
                        <Form.Item label="分类" name="category">
                            <Select
                                mode="multiple"
                                placeholder="请选择分类"
                                onChange={this.handleCateChange}
                            >
                                <Option value="1">1</Option>
                                <Option value="2">2</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label="标签" name="label">
                            <Select
                                mode="multiple"
                                placeholder="请选择标签"
                                onChange={this.handleLabelChange}
                            >
                                <Option value="1">1</Option>
                                <Option value="2">2</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit"> 提交</Button>
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
                            <div className="markdown-body"  dangerouslySetInnerHTML={{__html:this.state.articleForm.articleContentHtml}}></div>
                        </div>
                    </div>
                </Card>
            </Fragment>
        )
    }
}