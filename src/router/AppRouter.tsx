import React from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom'
import App from '../App'
import Root from '../pages/Root'
import Account from '../pages/Account'
import Number from '../pages/Number'
import Form from '../pages/Form'
import UserHoc from '../pages/UserHoc'
import HocPropsProxy from '../components/Hoc/propsProxy'
import HocPropsProxy1 from '../components/Hoc/propsProxy1'
import HocPropsProxy2 from '../components/Hoc/propsProxy2'
import HocPropsProxy3 from '../components/Hoc/propsProxy3'
export default class AppRouter extends React.Component {
	public constructor(props: any) {
		super(props)  // 可能会有状态值生命在构造函数里边
	}
	public render() {
		return (
			<HashRouter>
				<Root>
					<Switch>
						<Route exact path="/" render={() => <App />} />
						<Route exact path="/number" render={() => <Number />} />
						<Route exact path="/account" render={() => <Account />} />
						<Route exact path="/form" render={() => <Form />} />
						<Route exact path="/hoc/propsProxy" render={() => <HocPropsProxy />} />
						<Route exact path="/hoc/propsProxy1" render={() => <HocPropsProxy1 />} />
						<Route exact path="/hoc/propsProxy2" render={() => <HocPropsProxy2 />} />
						<Route exact path="/hoc/propsProxy3" render={() => <HocPropsProxy3 />} />
						<Route exact path="/hoc/input" render={() => <UserHoc />} />
						{/* 使用以下的方法会报错
								Warning: You should not use <Route component> and <Route render> in the same route; <Route render> will be ignored
						*/}
						{/* <Route exact path="/" component={App}> </Route> */}
					</Switch>
				</Root>

			</HashRouter>
		)
	}
}
