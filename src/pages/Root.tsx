import { withRouter, RouteComponentProps } from "react-router";
import { ReactElement, useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import './Root.less';
interface IState {
	path: string;
	name: string,
	id: number,
}
function Root(props: RouteComponentProps & { children: ReactElement }) {
	const [menuList, setMenuList] = useState<IState[]>([]);
	useEffect(() => {
		setMenuList([
			{
				path: '/number',
				name: 'number自增自减',
				id: 1
		  },
			{
				path: '/account',
				name: 'account日常账目表',
				id: 2
		  },
			{
				path: '/form',
				name: 'form表单',
				id: 3
		  },
		])
	}, []);
	return (<div className="root">
		<div className="menu">
			<ul>
				{
					menuList && menuList.length > 0 ? menuList.map((item: IState, index: number) => {
						return (
							<li key={item.id}>
								<NavLink activeClassName="selected" to={item.path}>{item.name}</NavLink>
							</li>
						)
					}) : '暂无数据'
				}
			</ul>

		</div>
		<div className="content">
			{props.children}
		</div>

	</div>)
}

export default withRouter(Root);