import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'mobx-react';
import rootStore from './store'
// 页面
import Login            from './page/login';
import Layout            from './component/Layout';
class App extends React.Component{
    public render(){
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/home" component={ Layout }/>
                    <Route path="/login" component={ Login }/>
                    <Route path="/" exact={true} component={ Layout }/>
                    <Route path="/*"  component={ Layout }/>
                </Switch>
            </BrowserRouter>
        )
    }
}
ReactDOM.render(
    <Provider {...rootStore}>
        <App  />
    </Provider>,
   
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();

