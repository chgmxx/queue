import React,{Component} from 'react';
import { Row,Col,Icon } from 'antd';
import Time from '../Time/Time';
import history from './../../history';
export default class GridHeader extends Component{
    render(){
        return(
        <div>
            <Row>
                <Col span={12}></Col>
                <Col span={3}><Time/></Col>
                <Col span={9}></Col>
            </Row>
            <Row>
                <Col span={8}></Col>
                <Col span={2}>
                    <Icon type="left"  style={{color:'orangered',fontSize: 20}} onClick={this.goback()}/>
                </Col>
                <Col span={4} style={{textAlign:'center'}}>
                    <h2>{this.props.name}</h2>
                </Col>
                <Col span={8}></Col>
            </Row>
        </div>
        );
    }

    goback(){
        // history.goBack();
        console.log("返回");
    }
}