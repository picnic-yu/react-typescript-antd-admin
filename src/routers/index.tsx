import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from '../component/Layout';
import Login from '../page/login';
import hello from '../page/hello';

import table from '../page/table/table1';
import table2 from '../page/table/table2';
import table1 from '../page/table/table1';

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
    }
]
export const childRoutes = [
    {
      'component': hello,
      'path':'/hello'
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