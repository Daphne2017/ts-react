/**
 * 1.现在进入正题说一下forwardRef，它是react16新增的方法，返回react组件。
 * 一文吃透hoc文章中讲到，由于属性代理的hoc，被包裹一层，所以如果是类组件，是通过ref拿不到原始组件的实例的，不过我们可以通过forWardRef转发ref。
 */

// // 一、强化props与混入props
import { ComponentClass } from "react";
import React, { useRef, useEffect } from 'react';
interface IHocProps {
  age: string;
}
function classHOC(WrapComponent: React.FC) {
  return class Idex extends React.Component<IHocProps> {
    state = {
      name: 'alien'
    }
    componentDidMount() {
      console.log('HOC')
    }
    render() {
      return <WrapComponent {...this.props}  {...this.state} />
    }
  }
}
function WrapIndex(props:any) {
  const { name ,age} = props
  useEffect(() => {
    console.log('index')
  }, [])
  return <div>
    hello,world , my name is {name}, my name is {age},
  </div>
}
const HocIndex = classHOC(WrapIndex)


const Index = () => {
  return <div>
    <HocIndex age={'27'} />
    </div>
}
export default Index




