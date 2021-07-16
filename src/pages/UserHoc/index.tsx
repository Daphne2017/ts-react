import WithOnChange from 'components/Hoc/WithOnChange';  // 高阶组件使用
const NameInput = props => {
	const {input} = props
	console.log(11111111,input);
	
	return (
		<div>
			<div>抽离state的例子演示</div>
			<input {...props.input} />
		</div>
	);
}
export default WithOnChange(NameInput);