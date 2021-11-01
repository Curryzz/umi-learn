import React from 'react';



export default function Index(props){
    return(
        <div>
            <div>
                <h1>导航菜单</h1>

            </div>
            {props.children}
            <div><h1>页脚</h1></div>
        </div>
    )
}