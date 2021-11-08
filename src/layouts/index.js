import React from 'react';
import Navlink from 'umi/navlink'
import styles from './index.css'
import Layout from "../components/Layout";
import Menu from '../components/containers/MenuContainer';
import Aside from '../components/Aside'

export default function Index(props){

    console.log(props)
    if (props.location.pathname == "/login"){
        return props.children
    }
    else{
        return(
            <Layout
                header={<Menu/>}
                aside={<Aside/>}
                main={<div className={styles.main}>
                    {props.children}
                </div>}
            />
        )
    }
}