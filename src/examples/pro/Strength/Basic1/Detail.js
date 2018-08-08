import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox,Strength } from 'quant-ui';
import './style.less'
const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            userNameStrength:null
        }
    }
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
			}
		});
	}

	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<Form onSubmit={this.handleSubmit} className="login-form">
				<FormItem>
					{getFieldDecorator('userName', {
						rules: [{ required: true, message: 'Please input your username!' }],
					})(
                        <div>
						    <Input onChange={(e)=>this.setState({userNameStrength:e.target.value})} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                            <Strength value={this.state.userNameStrength}/>
                        </div>
					)}
				</FormItem>
				<FormItem>
					{getFieldDecorator('password', {
						rules: [{ required: true, message: 'Please input your Password!' }],
					})(
						<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
					)}
				</FormItem>
				<FormItem>
					{getFieldDecorator('remember', {
						valuePropName: 'checked',
						initialValue: true,
					})(
						<Checkbox>Remember me</Checkbox>
					)}
					<a className="login-form-forgot" href="">Forgot password</a>
					<br /><br />
					<Button type="primary" htmlType="submit" className="login-form-button">
						Log in
          			</Button>
					&nbsp;Or <a href="">register now!</a>
				</FormItem>
			</Form>
		);
	}
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);
class Detail extends Component {
	render() {
		return (
			<WrappedNormalLoginForm />
		);
	}
}
export default Detail;
