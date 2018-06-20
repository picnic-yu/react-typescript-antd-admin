import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from '../component/Layout';
import Login from '../page/login';
import Register from '../page/login';
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
        'component': table1,
        'path':'/table/table1'
    }
];
const routes = (
  <Switch>
    <Route path="/login" component={Login}/>
    <Route path="/register" component={Register}/>
    <Route path="/" component={Layout}/>
  </Switch>
);

export default routes