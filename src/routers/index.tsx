import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from 'src/component/Layout';
import Login from 'src/page/login';
import hello from 'src/page/hello';

import table from 'src/page/table/table1';
import table2 from 'src/page/table/table2';
import table1 from 'src/page/table/table1';
import PopconfirmComponent from 'src/page/Popconfirm';
import Transfer from 'src/page/Transfer';
import TimelineComponent from 'src/page/Timeline';
export const routerConfig = [
    {
        child: [
            {
                child: [

                ],
                icon:'mail',
                key:'table1',
                name:'table1',
                url:'/table/table1'
            }
        ],
        icon:'mail',
        key:'table',
        name:'table',
        url:'/table'
    },
    {
        child: [
            
        ],
        icon:'mail',
        key:'hello',
        name:'hello',
        url:'/hello'
    },
    {
        child: [
            
        ],
        icon:'mail',
        key:'/Timeline',
        name:'时间轴管理',
        url:'/Timeline'
    },
    {
        child: [
            {
                child: [

                ],
                icon:'mail',
                key:'Transfer',
                name:'穿梭框',
                url:'/Transfer'
            }
        ],
        icon:'mail',
        key:'/Transfer',
        name:'穿梭框管理',
        url:'/Transfer'
    },
    {
        child: [
            {
                child: [

                ],
                icon:'mail',
                key:'PopconfirmComponent',
                name:'气泡确认框',
                url:'/PopconfirmComponent'
            }
        ],
        icon:'mail',
        key:'/Popconfirm',
        name:'气泡管理',
        url:'/Popconfirm'
    }
]
export const childRoutes = [
    {
      'component': hello,
      'path':'/hello'
    },
    {
        'component': Transfer,
        'path':'/Transfer'
    },
    {
        'component': TimelineComponent,
        'path':'/Timeline'
    },
    {
        'component': PopconfirmComponent,
        'path':'/PopconfirmComponent'
    },
    {
        'component': table,
        'path':'/table'
    },
    {
        'component': table2,
        'path':'/table2'
    },
    {
        'component': Login,
        'path':'/login'
    },
    {
        'component': table1,
        'path':'/table/table1'
    }
];
const getRouters = (routers:any):any => {
    return routers.map((item:any)=> {
        if(item.path === 'login'){
            return (
                <Route key={item.path} path="/login" component={ Layout }/>
            )
        }else{
            return (
                <Route key={item.path} path={item.path} component={ Layout }/>
            )
        }
    })
}

const routes = (
    <Switch>
        {
            getRouters(childRoutes)
        }
    </Switch>
);
export default routes