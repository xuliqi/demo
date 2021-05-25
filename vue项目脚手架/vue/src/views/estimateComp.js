import Vue from 'vue'
import 'view-design/dist/styles/iview.css'

import {
  Card,
  Form,
  FormItem,
  Select,
  Option,
  Input,
  Row,
  Col,
  CheckboxGroup,
  Checkbox,
  RadioGroup,
  Radio,
  Button,
  Icon,
  Message,
  Modal
} from 'view-design'
// iview基础模块
const components = {
  Card,
  Form,
  FormItem,
  Select,
  Option,
  Input,
  Row,
  Col,
  CheckboxGroup,
  Checkbox,
  RadioGroup,
  Radio,
  Button,
  Icon,
  Message,
  Modal
}

const iviewModule = {
  ...components,
}
// 循环注册全局组件
Object.keys(iviewModule).forEach(key => {
  Vue.component(key, iviewModule[key])
})