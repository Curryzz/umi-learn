import React from 'react';
import Navlink from 'umi/navlink'
import styles from './index.css'

export default function Index(props){
    return(
        <div>
            <div>
                <Navlink to="/" exact activeClassName={styles.active}>首页</Navlink>
                <Navlink to="/welcome"  activeClassName={styles.active}>欢迎页</Navlink>
                <Navlink to="/login"  activeClassName={styles.active}>登录页</Navlink>
            </div>
            <div>
                {props.children}
            </div>

        </div>
    )
}