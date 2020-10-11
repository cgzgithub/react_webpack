import React from 'react';
import Header from "@/component/header/Header";
import LeftMenu from "@/component/leftMenu/LeftMenu";
import MainView from "./MainView";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import AsyncComponent from "@/router/AsyncComponent";
const Home = AsyncComponent(() => import("@/view/home/Home"))
const About = AsyncComponent(() => import("@/view/about/About"))
const Service = AsyncComponent(() => import("@/view/service/Service"))
// import Service from "@/view/service/Service";
const styles = require('./Layout.module.less')
export default class Layout extends React.Component{
    render() {
        return(
            <div className={styles.layoutContainer}>
                <Header />
                <div className={styles.layoutBody}>
                    <LeftMenu />
                    <MainView />
                </div>
            </div>
        )
    }
}