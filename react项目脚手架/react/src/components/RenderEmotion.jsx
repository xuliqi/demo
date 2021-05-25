/*
 * @Author: xuliqi
 * @Date: 2020-11-06 12:01:44
 * @Description: 渲染表情包的组件  用法：<RenderEmotion content={this.state.content}/>
 */
import React, { Component } from 'react';
import "./emotion.scss"
class RenderEmotion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: ['微笑', '撇嘴', '色', '发呆', '得意', '流泪', '害羞', '闭嘴', '睡', '大哭', '尴尬', '发怒', '调皮', '呲牙', '惊讶', '难过', '酷', '冷汗',
                '抓狂', '吐', '偷笑', '可爱', '白眼', '傲慢', '饥饿', '困', '惊恐', '流汗', '憨笑', '大兵', '奋斗', '咒骂', '疑问', '嘘', '晕', '折磨', '衰', '骷髅',
                '敲打', '再见', '擦汗', '抠鼻', '鼓掌', '糗大了', '坏笑', '左哼哼', '右哼哼', '哈欠', '鄙视', '委屈', '快哭了', '阴险', '亲亲', '吓', '可怜', '菜刀',
                '西瓜', '啤酒', '篮球', '乒乓', '咖啡', '饭', '猪头', '玫瑰', '凋谢', '示爱', '爱心', '心碎', '蛋糕', '闪电', '炸弹', '刀', '足球', '瓢虫', '便便',
                '月亮', '太阳', '礼物', '拥抱', '强', '弱', '握手', '胜利', '抱拳', '勾引', '拳头', '差劲', '爱你', 'NO', 'OK', '爱情', '飞吻', '跳跳', '发抖',
                '怄火', '转圈', '磕头', '回头', '跳绳', '挥手', '激动', '街舞', '献吻', '左太极', '右太极']
        }
    }
    render() {
        const { content } = this.props
        return (
            <div dangerouslySetInnerHTML={{ __html: content.replace(/\[\^\^.*?\^\^\]/gi, this.emotion.bind(this)) }}></div>
        );
    }
    emotion(res) {
        let word = res.replace(/\[\^\^|\^\^\]/gi, '')
        let index = this.state.list.indexOf(word)
        return `<img src="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/${index}.gif" style="vertical-align:middle;" />`
    }
}

export default RenderEmotion;