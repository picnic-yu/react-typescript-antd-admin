import * as React from 'react';
import { Transfer } from 'antd';
// interface Iprop {
//     name?:any
// }
interface Istate {
    mockData:any,
    targetKeys:any
}
class TransferComponent extends React.Component<any,Istate> {
    constructor (prop:any) {
        super(prop);
        this.state = {
            mockData:[],
            targetKeys:[]
        }
    }
    public componentDidMount() {
        this.getMock();
    }
    public getMock() {
        const targetKeys = [];
        const mockData = [];
        for (let i = 0; i < 20; i++) {
            const data = {
                key: i,
                title: '内容' + (i + 1),
                description: '内容' + (i + 1) + '的描述',
                chosen: Math.random() * 2 > 1
            };
            if (data.chosen) {
                targetKeys.push(data.key);
            }
            mockData.push(data);
        }
        this.setState({ mockData, targetKeys });
    }
    public handleChange(targetKeys:any):any {
        this.setState({ targetKeys });
    }
    
    public render () {
        return (
            <Transfer
                dataSource={this.state.mockData}
                showSearch={false}
                listStyle={{
                    width: 250,
                    height: 300,
                }}
                operations={['向右操作文案', '向左操作文案']}
                targetKeys={this.state.targetKeys}
                onChange={this.handleChange.bind(this)}
                render={item => item.title}
             />
        );
    }
}
export default TransferComponent;