import React from 'react';
import { Button } from 'antd'; 
interface Iprops{
    title:string
    age?:number // 可选性
    parentClick:any
}

interface Istate{
    count:number
    age?:number // 可选性
}
export default class Hello extends React.Component<Iprops,any>{
    public constructor(props:Iprops){
        super(props)  // 可能会有状态值生命在构造函数里边
    }
    // 实现state,声明只读
    public readonly state: Readonly<Istate> = {
        count:1000
    }
    public clickHandler = ()=>{
        this.setState({
            count:2000
        })

    }
    public clickSendMsg = ()=>{
       this.props.parentClick('child msg')
        

    }
    public render(){
        const {title} = this.props
        const {count} = this.state
        return(
            <div>
                <div> hello,{ title }</div>
                <div> hello,{ count }</div>
                <Button  type="primary" onClick={this.clickHandler}>修改state</Button>
                <Button  type="primary" onClick={this.clickSendMsg}>send msg</Button>
            </div>
        )
    }
}