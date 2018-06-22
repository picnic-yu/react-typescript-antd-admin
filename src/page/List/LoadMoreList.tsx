import axios from 'axios';
import { List, Avatar, Button, Spin } from 'antd';
import * as React from 'react';
interface Istate  {
    loading: boolean,
    loadingMore: boolean,
    showLoadingMore: boolean,
    data: any
}
const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';
class LoadMoreList extends React.Component<any,Istate> {
    constructor(prop:any){
        super(prop);
        this.state = {
            loading: true,
            loadingMore: false,
            showLoadingMore: true,
            data: [],
        }
    }
    public componentDidMount () {
        this.getData ((res:any) => {
            this.setState({
                loading: false,
                data: res.data.results,
            });
        })
    }
    public getData (callback:any) {
        axios.get(fakeDataUrl).then(function (response) {
            callback(response);
        }).catch(function (error) {
            console.log(error);
        });
    }
    public onLoadMore () {
        this.setState({
            loadingMore: true,
        });
        this.getData((res:any) => {
            const data = this.state.data.concat(res.data.results);
            this.setState({
                data,
                loadingMore: false,
            }, () => {
                window.dispatchEvent(new Event('resize'));
            });
        });
    }
    public render () {
        const { loading, loadingMore, showLoadingMore, data } = this.state;
        const loadMore = showLoadingMore ? (
        <div style={{ textAlign: 'center', marginTop: 12, height: 32, lineHeight: '32px' }}>
            {loadingMore && <Spin />}
            {!loadingMore && <Button onClick={this.onLoadMore.bind(this)}>loading more</Button>}
        </div>
        ) : null;
        return(
            <List
                className="demo-loadmore-list"
                loading={loading}
                itemLayout="horizontal"
                loadMore={loadMore}
                dataSource={data}
                renderItem={(item:any):any => (
                <List.Item actions={[<a>edit</a>, <a>more</a>]}>
                    <List.Item.Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title={<a href="https://ant.design">{item.name.last}</a>}
                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                    />
                    <div>content</div>
                </List.Item>
                )}
            />
        )
    }
}
export default LoadMoreList;
