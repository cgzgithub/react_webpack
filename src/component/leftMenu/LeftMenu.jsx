import React from 'react';
import {Menu, Button} from 'antd'
import { Link, withRouter } from "react-router-dom";
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
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            <Link to="/">Navigation One</Link>
          </Menu.Item>
          <Menu.Item key="/service" icon={<MailOutlined />} >
          <Link to="/service">Navigation Two</Link>
          </Menu.Item>
          <SubMenu key="sub1" icon={<DesktopOutlined />}  title="Navigation Two">
            <Menu.Item key="3" icon={<DesktopOutlined />}>Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
            <SubMenu key="sub12" icon={<DesktopOutlined />} title="Submenu">
              <Menu.Item key="56">Option 5</Menu.Item>
              <Menu.Item key="65">Option 6</Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu key="sub2" icon={<ContainerOutlined />}  title="Navigation Three">
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
          </SubMenu>
        </Menu>
        </div>

        )
    }
}
export default withRouter(Leftmenu)