export default {
    plugins:[
        ["umi-plugin-react",{
            dva:true
        }]
    ],
    routes: [
        {
            path: '/',
            component: '../layouts/index.js',
            exact:false,
            routes:[
                {path:'/',component:'./index',title: "首页",
                    Routes:['./src/router/PrivateRouter']
                },
                {path:'/login',component:'./login',title: "登录页",
                },
                {path:'/student',component:'./student',title: "学生查询",
                },
                {path:'/student/add',component:'./student/add',title: "添加学生",
                }
            ]
        },

    ],
    // proxy:{
    //     "/api":{
    //         target:"http://api.duyiedu.com",
    //         changeOrigin:true
    //     }
    // }
}