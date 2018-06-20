import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { childRoutes} from './routers';
// 页面
import Login            from './page/login';
import Layout            from './component/Layout';
class App extends React.Component{
    public render(){
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
        
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/home" component={ Layout }/>
                    <Route path="/login" component={ Login }/>
                    <Route path="/" exact={true} component={ Layout }/>
                    {
                        getRouters(childRoutes)
                    }
                    <Route path="/*"  component={ Login }/>
                </Switch>
            </BrowserRouter>
        )
    }
}
ReactDOM.render(
    <App />,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();

