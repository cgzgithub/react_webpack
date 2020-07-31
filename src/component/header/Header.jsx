import React from 'react';
const styles = require('./Header.module.less')


export default class Header extends React.Component{
    render() {
        return(
            <div className={styles.container}>
                Welcome！
            </div>
        )
    }
}