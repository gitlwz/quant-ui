import React, { Component } from 'react';
import { Form, Button ,IpInput} from 'quant-ui';
const FormItem = Form.Item;

class Detail extends Component {
    handleConfirmPassword = (rule, value, callback) => {
        if (!value || value.value1 == "" || value.value2 == "" || value.value3 == "" || value.value4 == "") {
            callback("请输入完整的ip地址")
        }
        callback()
    }
    validateFields = () => {
        const { validateFields } = this.props.form;
        validateFields((error, values) => {
            if (!!error) {
                return
            }
            let rega = /^(25[0-5]|2[0-4]\d|[0-1]?\d?\d)(\.(25[0-5]|2[0-4]\d|[0-1]?\d?\d)){3}$/
            let ip = values.price.value1+"."+values.price.value2+"."+values.price.value3+"."+values.price.value4;
            if (!rega.test(ip)) {
                this.props.form.setFields({
                    "price": {
                        value: values.price,
                        errors: [new Error('请输入正确格式的IP地址')],
                    },
                });
            }
        })
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Button onClick={this.validateFields}>校验</Button>
                <Form >
                    <FormItem
                        label="子网地址"
                    >
                        {getFieldDecorator('price', {
                            rules: [{
                                validator: this.handleConfirmPassword
                            }]
                        })(<IpInput />)}
                    </FormItem>
                </Form>
            </div>

        );
    }
}
export default Form.create()(Detail);
