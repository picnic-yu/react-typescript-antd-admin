import * as React from 'react';
import { Timeline, Icon } from 'antd';
class TimelineComponent extends React.Component {
    public render () {
        return(
            <Timeline>
                <Timeline.Item>2018-06-01商品已经打包出货，发往上海中转站</Timeline.Item>
                <Timeline.Item>2018-06-02 商品已经到达上海中转站，下站发往苏州</Timeline.Item>
                <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />} color="red">
                    2018-06-02 商品已经到达苏州分拨中心，下站发往苏州建屋大厦
                </Timeline.Item>
                <Timeline.Item>2018-06-03商品已经签收</Timeline.Item>
            </Timeline>
        )
    }
}
export default TimelineComponent;