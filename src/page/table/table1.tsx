import * as React from 'react';
import { Table, Icon } from 'antd';

const columns = [{
    dataIndex: 'name',
    key: 'name',
    render(text:any) :any{
        return <a href="#">{text}</a>;
    },
    title: '姓名'
}, {
    dataIndex: 'age',
    key: 'age',
    title: '年龄'
}, {
    dataIndex: 'address',
    key: 'address',
    title: '住址'
}, {
    key: 'operation',
    render(text:any, record:any):any {
        return (
            <span>
                <a href="#">操作一{record.name}</a>
                >
                <a href="#">操作二</a>
                
                <a href="#" className="ant-dropdown-link">
                更多 <Icon type="down" />
                </a>
            </span>
        );
    },
    title: '操作'
}];
const data = [{
    key: '1',
    address: '西湖区湖底公园1号',
    age: 32,
    
    name: '胡彦斌'
    
}, {
    
    address: '西湖区湖底公园1号',
    age: 42,
    key: '2',
    name: '胡彦祖'
    
}, {
    
    address: '西湖区湖底公园1号',
    age: 32,
    key: '3',
    name: '李大嘴'
}];

class Table1 extends React.Component {
    public render() {
        return (
            <div>
                <Table columns={columns} dataSource={data}  />
            </div>
        );
    }
}

export default Table1;