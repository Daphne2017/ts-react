import React, { Component,ComponentClass } from 'react';
import {withRouter, RouteComponentProps} from "react-router";
// https://juejin.cn/post/6844903782355042312#heading-26 相关页面复用的例子
export default (role?: string)  => (WrappedComponent: ComponentClass<RouteComponentProps>) => {
    return class extends React.Component<RouteComponentProps> {
        state = {
            permission: false,
        }
        async componentWillMount() {
            // const currentRole = await getCurrentUserRole(); // 获取当前登录人的权限
            const currentRole = "test"
            this.setState({
                permission: currentRole === role,
            });
        }
        render() {
            if (this.state.permission) {
                return <WrappedComponent {...this.props} />;
            } else {
                return (<div>您没有权限查看该页面，请联系管理员！</div>);
            }
        }
    };
}