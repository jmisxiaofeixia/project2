import React from 'react'
// 导入此页面的样式
import './index.css'
import * as request from '../../request'
import { withRouter } from 'react-router-dom'

/**
 * 此类继承自React.Component，此类即为一个页面（此页面具体的渲染内容即为类中`render`方法的返回值）。我们所谓的`页面`和`组件`在代码上都是组件，只是我们的人为定义而已。
 */
class LoginPage extends React.Component {

	/**
	 * 构造函数，此处能直接给`this.state`赋值并且会起作用。项目运行过程中直接给`this.state`赋值都不会使页面重新渲染（只能通过`this.setState`更改值使页面重新渲染）。
	 * @param {*} props 
	 */
	constructor(props) {
		// 调用父类的构造函数
		super(props)
		this.state = {
			loginInfo: '暂未登录',
			username: 'hello',
			password: 'world'
		}
	}

	/**
	 * 此函数代码中，`await` 代表你需要等到await后面的异步函数执行完毕时再继续执行下面的代码
	 * 注意，当函数为async开头时，说明函数是异步函数。异步函数被调用时，代码不会等待它执行完毕，会直接执行接下来的代码。比如：
	 * 	async function() {
	 * 		console.log(1)
	 * 		异步函数(参数1， 参数2)
	 * 		console.log(2)
	 * }
	 *	以上代码会直接输出1，2。即使异步函数中存在让程序随眠的代码。
	 *	如果我们使用`await 异步函数(参数1， 参数2)`，则，如果异步函数中有睡眠，程序会先输出1，睡眠之后输出2
	 *	注意，只有在异步函数才能使用await
	 */
	async handleLogin() {
		let stringResponse = await request.loginExample({ username: this.state.username, password: this.state.password }, this.props.history)
		this.setState({
			loginInfo: stringResponse.message,
		})
	}

	/**
	 * render函数继承自父类。其返回的值（只能是类似于HTML的代码片段，如下return的值）即为此类（此页面）的渲染内容。这种将HTML的代码嵌入js文件中的技术称为JSX技术。
	 */
	render() {
		return (
			// 下一行代码使用了`./index.css`中的class，即`.loginInfoPad`
			<div className='loginInfoPad'>
				{this.state.loginInfo}
				<input model={this.state.username}></input>
				<input model={this.state.password}></input>
				<button onClick={() => this.handleLogin()}>登录</button>
			</div>
		)
	}
}

export default withRouter(LoginPage)