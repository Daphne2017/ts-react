import * as React from 'react';
import { ComponentClass,FC } from "react";
import { Result } from "antd";
import {withRouter, RouteComponentProps} from "react-router";
type State = {
	hasError: boolean,
}

const defaultPlaceholder = <Result status="error"
	title="页面发生错误"
	subTitle="请联系工程师并描述错误" />;

const ErrorBoundary = (placeholder?: React.ReactNode) => (Component: ComponentClass<RouteComponentProps> | FC<RouteComponentProps>): any => {
	return class ErrorBoundaryContainer extends React.PureComponent<RouteComponentProps, State> {
		public static getDerivedStateFromError(error: Error) {
			return {
				hasError: true
			}
		}

		public state: State = {
			hasError: false,
		};

		public render() {
			if (this.state.hasError) {
				return placeholder || defaultPlaceholder;
			}
			return <Component {...this.props} />
		}
	}
};

export default ErrorBoundary;
