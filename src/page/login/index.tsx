import * as React from 'react';
import { Form, Icon, Input, Button } from 'antd';
import {FormComponentProps} from 'antd/lib/form/Form';
import { Row, Col } from 'antd';
import './index.scss'
const FormItem = Form.Item;
interface IAppProps {
    form?: any,
    history?:any
}
class NormalLoginForm extends React.Component <IAppProps & FormComponentProps>{
    public handleSubmit = (e:any) => {
        e.preventDefault();
        this.props.form.validateFields((err:any, values:any) => {
            if (values.userName === 'chen' && values.password === 'admin') {
                this.props.history.push('/home'); 
            } else {
                alert('登陆失败');
            }
        });
    }
    public render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Row type="flex" justify="space-around" align="middle">
                <Col span={4}>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <FormItem>
                            {getFieldDecorator('userName', {
                                rules: [{ required: true, message: 'Please input your username!' }],
                            })(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名chen" />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your Password!' }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码admin" />
                            )}
                        </FormItem>
                        <FormItem>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登陆
                            </Button>
                        </FormItem>
                    </Form>
                </Col>               
            </Row>
        );
    }
}

const Login = Form.create<IAppProps>()(NormalLoginForm);
export default Login;