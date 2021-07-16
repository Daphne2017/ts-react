//定义高阶组件 //放在common公用方法里面
// https://segmentfault.com/a/1190000022112887 高阶组件的使用方式
import React, { Component } from 'react';
import { RouteComponentProps} from "react-router";
export default (WrappedComponent) => {
	return class extends Component<RouteComponentProps> {
		constructor(props) {
			super(props)

			this.handleBack = this.handleBack.bind(this)
		}

		componentDidMount() {
			console.log("componentDidMount");
		}

		//定义可复用的方法
		handleBack(mobile) {
			this.props.history.replace("/")
		}
		postVcode(mobile) {
			// ...
		}
		render() {
			return (
				<div>
					<WrappedComponent handleBack={this.handleBack} {...this.props} />
				</div>
			)
		}
	}
}
