import React, { Component } from 'react';
import { Form ,Input,Col} from 'quant-ui';
const FormItem = Form.Item;
class Detail extends Component {
	constructor(props){
		super(props)
		this.state = {
			value:""
		}
	}
	onChange = (e) =>{
		this.setState({
			value:e.target.value
		})
	}
	render() {
        const {getFieldDecorator } = this.props.form;
		return (
			<Form >
                        <FormItem
                            label="子网名称"
                            hasFeedback
                        >
                            {
                                getFieldDecorator('label', {
                                    rules: [{ required: true, message: '子网名称不能为空!' }]
                                })(
                                    <Input placeholder='请输入子网名称'></Input>
                                    )
                            }
                        </FormItem>
                        <FormItem
                            label="子网IP"
                            hasFeedback
                        >
                            <Col span="18">
                                <Col span="5"><Input defaultValue={10}></Input></Col>
                                <Col span="5" offset="1"><Input defaultValue={199}></Input></Col>
                                <Col span="5" offset="1"><Input defaultValue={0}></Input></Col>
                                <Col span="5" offset="1"><Input defaultValue={0}></Input></Col>
                                <Col span="1"></Col>
                            </Col>
                            <Col span="1">/</Col>
                            <Col span="4" offset="1"><Input defaultValue={0}></Input></Col>
                        </FormItem>
                    </Form>
		);
	}
}
export default Form.create()(Detail);
