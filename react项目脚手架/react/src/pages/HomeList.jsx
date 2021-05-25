import React, { Component } from 'react';
import { connect } from "dva"
import { WhiteSpace, WingBlank, Toast, Button } from 'antd-mobile';

import '../style/homelist.scss'

class HomeList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
            <div style={{ height: "100%", position: "relative"}}>
                首页列表页
                <br/>
                <Button size="small" inline type="primary" onClick={()=>{this.props.history.push('/HomeList/test')}}>点击跳转子组件</Button>
                <div>
                    {/* 子组件 */}
                    {this.props.children}
                </div>
            </div>
        );
    }

    componentDidMount() {
        document.title = "demo"
    }

}

const mapStateToProps = ({ myModel }) => ({ myModel })
export default connect(mapStateToProps)(HomeList);