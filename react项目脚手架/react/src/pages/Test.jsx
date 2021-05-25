import React, { Component } from 'react';
import { connect } from "dva"
import { WhiteSpace, WingBlank, Toast, Button } from 'antd-mobile';


class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                我是子组件
            </div>
        );
    }

    componentDidMount() {
        document.title = "demo"

    }

 


}

const mapStateToProps = ({ myModel }) => ({ myModel })
export default connect(mapStateToProps)(Test);