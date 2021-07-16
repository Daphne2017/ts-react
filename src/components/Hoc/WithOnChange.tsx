import React, { Component } from 'react';
import {withRouter, RouteComponentProps} from "react-router";
interface IState {
	name: string,
}
export default function withOnChange(WrappedComponent) {
	return class extends React.Component<any, IState> {
		constructor(props) {
			super(props);
			this.state = {
				name: '大板栗',
			};
		}
		onChange = (e) => {
			this.setState({
				name: e.target.value,
			});
		}
		render() {
			const newProps = {
				input: {
					value: this.state.name,
					onChange: this.onChange,
				},
			};
			return <WrappedComponent {...this.props} {...newProps} />;
		}
	};
}
