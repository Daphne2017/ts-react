// 修改渲染状态(劫持render替换子节点)
// 我们用劫持渲染的方式，来操纵super.render()后的React.element元素，然后配合 createElement , cloneElement , React.Children 等 api,可以灵活操纵，真正的渲染react.element，可以说是偷天换日，不亦乐乎。


import React, {ComponentClass} from "react";
import { Button, Spin } from 'antd';
import {SyncOutlined} from "@ant-design/icons";
class Index extends React.Component{
  render(){
    return <div>
       <ul>
         <li>react</li>
         <li>vue</li>
         <li>Angular</li>
       </ul>
    </div>
  }
}
function HOC (Component:ComponentClass){
  return class Advance extends Component {
    render() {
      const element:any = super.render()
      const otherProps = {
        name:'alien'
      }
      /* 替换 Angular 元素节点 */
      const appendElement = React.createElement('li' ,{} , `hello ,world , my name  is ${ otherProps.name }` )
      const newchild =  React.Children.map(element?.props?.children.props.children,(child,index)=>{
           if(index === 2) return appendElement
           return  child
      }) 
      return  React.cloneElement(element, element.props, newchild)
    }
  }
}
export default HOC(Index)

