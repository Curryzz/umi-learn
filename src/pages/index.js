
import React, {Component} from 'react';
import {getAllStudents } from '@/services/student'
class Index extends Component {
    render() {
        getAllStudents().then(res =>{
            console.log(res)
        })

        // console.log(this.props)
        return (
            <div>
                首页
            </div>
        );
    }
}

export default Index;