import * as React from 'react'

import { Layout, Row, Col, Icon, Badge, Menu, Dropdown, Avatar } from 'antd'
import './index.scss'
import { Link } from 'react-router-dom'

const { Header } = Layout;

class CommonHeader extends React.Component {

    public render () {
        const menu = (
            <Menu>
                <Menu.Item>
                选项1
                </Menu.Item>
                <Menu.Item>
                选项2
                </Menu.Item>
                <Menu.Item>
                <a >注销</a>
                </Menu.Item>
            </Menu>
        );

        // const content = (
        //     <div>
        //         <p>Content</p>
        //         <p>Content</p>
        //         <p>Content</p>
        //         <p>Content</p>
        //         <p>Content</p>
        //     </div>
        // );

        return (
            <Header style={{ background: '#fff', padding: 0 , position: 'fixed', zIndex: 1, width: '100%'}}>
                <Row type="flex" justify="end" align="middle">
                    <Col span={3}>
                        <Badge className="header-icon" count={5}>
                            <Link to="/mailbox">
                                <Icon type="mail" />
                            </Link>
                        </Badge>
                        {/* <Popover content={content} title="Title" trigger="click">
                            <Badge className="header-icon" dot>
                                <a href="#">
                                    <Icon type="notification" />
                                </a>
                            </Badge>
                        </Popover> */}
                    </Col>
                    <Col span={3}>
                        <Dropdown overlay={menu}>
                            <a className="ant-dropdown-link" href="#">
                                <Avatar style={{ verticalAlign: 'middle'}}>chen</Avatar> <Icon type="down" />
                            </a>
                        </Dropdown>
                    </Col>
                </Row>
            </Header>
        )
    }
}

export default CommonHeader;