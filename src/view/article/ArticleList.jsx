import React, {Fragment} from 'react';
import {withRouter} from 'react-router-dom'
import apis from '@/api/apis';
import {Table,Tag,Space} from 'antd'



class ArticleList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data:[]
        }
    }
    goDetail(v){
        console.log(v,this)
        this.props.history.push({pathname:'/article/articleDetail',state:{id:v}})
    }
    goEditor = (v) => {
        console.log(v,this)
        this.props.history.push({pathname:'/article/articleEditor',state:{id:v}})
    }
    componentDidMount(){
        console.log('apis>>>>>>>>>>>',apis)
        apis.getPublicArticleList().then(res => {
            console.log(res)
            this.setState({
                data:res.data
            })
        })
    }
    render() {
        const columns = [
            {
                title:'名称',
                dataIndex:'articleTitle',
                key:'articleTitle', 
                render: (text,record) => <a onClick={this.goDetail.bind(this,record.articleId)}>{text}</a>
            },
            {
                title:'描述',
                dataIndex:'articleDesc',
                sorter:true,
                key:'articleDesc'
            },
            {
                title:'创建时间',
                dataIndex:'articleCdate',
                sorter:true,
                key:'articleCdate',
            },
            {
                title:'更新时间',
                dataIndex:'articleUdate',
                key:'articleUdate',
            },
            {
                title:'操作',
                dataIndex:'Action',
                key:'action',
                render: (text,record) => (
                    <Space>
                        <a onClick={this.goEditor.bind(this,record.articleId)}>编辑</a>
                        <a>删除</a>
                    </Space>
                )
            }
        ]
        const {data} = this.state
        return(
            <Fragment>
                <div>
                文章列表页面
                </div>
                <Table
                    columns={columns}
                    dataSource={data}
                ></Table>
            </Fragment>
        )
    }
}
export default withRouter(ArticleList)