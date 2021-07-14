import React from 'react';
import {Route,HashRouter,Switch} from 'react-router-dom'
import App from '../App'
import Account from '../pages/account'
export default class AppRouter extends React.Component{
    public constructor(props:any){
        super(props)  // 可能会有状态值生命在构造函数里边
    }
    public render(){
        return(
            <HashRouter>
                <Switch>
                <Route  exact path="/"  render={() => <App />} />
                <Route  exact path="/account"  render={() => <Account />} />
                {/* 使用以下的方法会报错
                    Warning: You should not use <Route component> and <Route render> in the same route; <Route render> will be ignored
                */}
                    {/* <Route exact path="/" component={App}> </Route> */} 
                </Switch>
            </HashRouter>
        )
    }
}
