import React from 'react';
import Header from "@/component/header/Header";
import LeftMenu from "@/component/leftMenu/LeftMenu";
import {HashRouter as Router, Route, Switch} from "react-router-dom";
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
                    <Router>
                        <div>
                            <Switch>
                                <Route path="/" exact component={Home} />
                                <Route path="/service" component={Service} />
                                <Route path="/about" component={About} />
                            </Switch>
                        </div>
                    </Router>
                </div>
            </div>
        )
    }
}