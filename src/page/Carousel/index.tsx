import * as React from 'react';
import { Carousel } from 'antd';
import './index.scss'
class CarouselComponent extends React.Component {
    public render () {
        return(
            <Carousel autoplay={true}>
                <div><h3>1</h3></div>
                <div><h3>2</h3></div>
                <div><h3>3</h3></div>
                <div><h3>4</h3></div>
            </Carousel>
        )
    }
}
export default CarouselComponent;