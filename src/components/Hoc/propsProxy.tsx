/**
 * 1.现在进入正题说一下forwardRef，它是react16新增的方法，返回react组件。
 * 一文吃透hoc文章中讲到，由于属性代理的hoc，被包裹一层，所以如果是类组件，是通过ref拿不到原始组件的实例的，不过我们可以通过forWardRef转发ref。
 */
//  https://juejin.cn/post/6940422320427106335#heading-21 「react进阶」一文吃透React高阶组件(HOC)
// https://juejin.cn/post/6844903782355042312#heading-25 React 中的高阶组件及其应用场景
// https://segmentfault.com/a/1190000022112887 使用场景
 import {ComponentClass} from "react";
 import React,{ useRef,useEffect} from 'react';
 import { withRouter, RouteComponentProps } from "react-router";
 interface IProps {
    forwardedRef:any,
  }
 function HOC(Component:ComponentClass):any{
    class Wrap extends React.Component<IProps>{
       render(){
          const { forwardedRef,...otherprops  } = this.props
          return <Component ref={forwardedRef}  {...otherprops}  />
       }
    }
    return  React.forwardRef((props,ref)=> <Wrap forwardedRef={ref} {...props} /> ) 
  }
  class HelloWorld extends React.Component{
    componentDidMount(){
        console.log(666)
    }
    happy(){
        console.log("happyhappy")
    }
    render(){
      return <div>hello,HOC</div>
    }
  }
  const HocIndex =  HOC(HelloWorld)
  const Index = ()=>{
    const node = useRef<any>(null)
    useEffect(()=>{
       /* 就可以跨层级，捕获到 Index 组件的实例了 */ 
      console.log(node.current)
      console.log(node?.current?.happy())
    },[])
    return <div><HocIndex ref={node}/></div>
  }
  export default Index







