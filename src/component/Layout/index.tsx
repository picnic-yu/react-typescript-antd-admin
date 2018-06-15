
import * as React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
import { Link } from 'react-router-dom'
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
        return (
            <Layout style={{ minHeight: '100vh' }} className='layout'>
                <Sider
                    collapsible = {true}
                    collapsed={this.state.collapsed}
                    onCollapse={this.onCollapse}>
                    <div className="logo"/>>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1">
                            <Icon type="pie-chart" />
                            <span>Option 1</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to="/home">
                                <Icon type="desktop" />
                                <span>Option 2</span>
                            </Link>
                            
                        </Menu.Item>
                        <SubMenu
                            key="sub1"
                            title={<span><Icon type="user" /><span>User</span></span>}
                        >
                            <Menu.Item key="3">Tom</Menu.Item>
                            <Menu.Item key="4">Bill</Menu.Item>
                            <Menu.Item key="5">Alex</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub2"
                            title={<span><Icon type="team" /><span>Team</span></span>}>
                            <Menu.Item key="6">Team 1</Menu.Item>
                            <Menu.Item key="8">Team 2</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="9">
                            <Icon type="file" />
                            <span>File</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }} />
                    <Content style={{ margin: '0 16px' }}>
                        {/* 面包屑开始 */}
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>
                        {/* 面包屑结束 */}
                        {/* content内容开始 */}
                        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                            Bill is a cat.
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