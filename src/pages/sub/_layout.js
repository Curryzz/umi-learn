import React from 'react';

export default function index(props){
    return (
        <div>
            <div>
                <h1>sub页通用</h1>
            </div>
            {props.children}
        </div>
    )
}