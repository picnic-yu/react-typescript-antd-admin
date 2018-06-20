
import * as React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const {  Content, Footer, Sider } = Layout;
import { Link, Switch, Route } from 'react-router-dom';
import {routerConfig, childRoutes} from '../../routers'
import CommonHeader from '../Header'
const SubMenu = Menu.SubMenu;
import './index.scss'

class Main extends React.Component {
    public state = {
        collapsed: false,
    };
    public onCollapse = (collapsed: boolean) => {
        this.setState({ collapsed });
    }
    public render() {
        const menuProcess = (nodes:any) :any=> {
           
            return nodes.map((item:any, i:any) => {
                if (item.child.length > 0) {
                    const subMenuItem = menuProcess(item.child)
                    return (
                    <SubMenu
                        key={'sub'+item.key}
                        title={<span><Icon type={item.icon} /><span className="nav-text">{item.name}</span></span>}
                    >
                        {
                            subMenuItem
                        }
                    </SubMenu>
                    )
                } else {
                    return (
                    <Menu.Item key={'menu'+item.key}>
                        {
                        item.url ? <Link to={item.url}>{item.icon && <Icon type={item.icon} />}{item.name}</Link> : <span>{item.icon && <Icon type={item.icon} />}{item.name}</span>
                        }
                    </Menu.Item>
                    )
                }
            });
        }
      
        const menu = menuProcess(routerConfig);
        const matainContent = (arr:any):any => {
            return arr.map((item:any) => {
                return (
                    <Route key={item.path} path={item.path} component={item.component}/>
                )
            });
        }
        const contents = matainContent(childRoutes);
        return (
            <Layout style={{ minHeight: '100vh' }} className='layout'>
                <Sider
                    collapsible = {true}
                    collapsed={this.state.collapsed}
                    onCollapse={this.onCollapse}>
                    <div className="logo"/>>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        {
                            menu
                        }
                    </Menu>
                </Sider>
                <Layout>
                    <CommonHeader />
                    <Content style={{ margin: '0 16px' }}>
                        {/* 面包屑开始 */}
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>
                        {/* 面包屑结束 */}
                        {/* content内容开始 */}
                        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                        <Switch>
                            {
                                contents
                            }
                        </Switch>
                        
                        </div>
                        {/* content内容结束 */}
                    </Content>
                    {/* 底部开始 */}
                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©2016 Created by Ant UED
                    </Footer>
                    {/* 底部结束 */}
                </Layout>
            </Layout>
        );
    }
}

export default Main;