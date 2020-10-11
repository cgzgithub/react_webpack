import React from 'react'
import {Layout,Breadcrumb} from 'antd'
import {BrowserRouter as Router, withRouter, Route, Switch} from "react-router-dom";
import AsyncComponent from "@/router/AsyncComponent";
const Home = AsyncComponent(() => import("@/view/home/Home"))
const ArticleList = AsyncComponent(() => import("@/view/article/ArticleList"))
const ArticleDetail = AsyncComponent(() => import("@/view/article/ArticleDetail"))
const ArticleEditer = AsyncComponent(() => import("@/view/editer/ArticleEditer"))
const CategoryManager = AsyncComponent(() => import("@/view/manager/CategoryManager"))
const LabelManager = AsyncComponent(() => import("@/view/manager/LabelManager"))
const UserManager = AsyncComponent(() => import("@/view/manager/UserManager"))
const Login = AsyncComponent(() => import("@/view/login/Login"))
const {Content} = Layout

class MainView extends React.Component{
    Breadcrumbs = function(){
       let {state} = this.props.location;
       console.log(this.props.location)
       if(state && (typeof (state) == 'string')) {
           document.title = `${state}-尘果知`
        //    if(state === "首页"){
        //        return ""
        //    }
           return <Breadcrumb.Item>{state}</Breadcrumb.Item>
       }else if(state && state.length > 0){
           document.title = `${state[state.length-1]}-尘果知`
           return state.map(item => {
               return <Breadcrumb.Item key={item}>{item}</Breadcrumb.Item>
           })
       }
       return ""
    }
    render(){
        return (
            <Content>
                <div>
                    <Breadcrumb style={{margin:'15px',fontSize:'15px'}}>
                        {this.Breadcrumbs()}
                    </Breadcrumb>
                </div>
                <div style={{padding:'15px'}}>
                    <Switch>
                        <Route path='/home' component={Home}></Route>
                        <Route path='/editer/blog' component={ArticleEditer}></Route>
                        <Route path='/editer/record' component={ArticleEditer}></Route>
                        <Route path='/editer/article' component={ArticleEditer}></Route>
                        <Route path='/article/articleDetail' component={ArticleDetail}></Route>
                        <Route path='/article/allList' component={ArticleList}></Route>
                        <Route path='/article/blogList' component={ArticleList}></Route>
                        <Route path='/article/recordList' component={ArticleList}></Route>
                        <Route path='/article/artilceList' component={ArticleList}></Route>
                        <Route path='/manager/category' component={CategoryManager}></Route>
                        <Route path='/manager/label' component={LabelManager}></Route>
                        <Route path='/manager/user' component={UserManager}></Route>
                    </Switch>
                </div>
            </Content>
        )
    }
}
export default withRouter(MainView)