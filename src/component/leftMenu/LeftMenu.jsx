import React from 'react';
import {Menu, Button} from 'antd'
import { Link, withRouter } from "react-router-dom";
import {menuData} from '@/router/route.js'
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';
const styles = require('./LeftMenu.module.less')

const { SubMenu } = Menu;
class Leftmenu extends React.Component{
    state = {
      collapsed: false
    }
    toggleCollapsed = () => {
      this.setState({
        collapsed:!this.state.collapsed
      })
    }
    menuTag = function deep(menuData){
      if(menuData && menuData.length > 0){
        return menuData.map(item => {
          if(item.children && item.children.length > 0){
            return (<SubMenu key={item.path} title={item.title} icon={item.icon}>
              {deep(item.children)}
            </SubMenu>)
          }
          return (<Menu.Item key={item.path} icon={item.icon}>
            <Link to={{pathname:item.path,state:item.cont?item.cont:item.title}}>{item.title}</Link>
          </Menu.Item>)
        })
      }
    }
    render() {
      let defaultSelectedKeys = this.props.location.pathname
      console.log(defaultSelectedKeys)
        return(
          <div className={styles.container}>
            <Button type="primary" onClick={this.toggleCollapsed} style={{marginBottom:16}}>
              {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
            </Button>
          <Menu
          inlineCollapsed={this.state.collapsed}
          defaultSelectedKeys={[defaultSelectedKeys]}
          mode="inline"
          theme="light"
           >
             {this.menuTag(menuData)}
          </Menu>
        </div>

        )
    }
}
export default withRouter(Leftmenu)