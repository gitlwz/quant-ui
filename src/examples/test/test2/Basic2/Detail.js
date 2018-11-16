import React, { Component } from 'react';
import { Number, Form } from 'quant-ui';

const FormItem = Form.Item;

class Detail extends Component {
    btnclick = () => {
        const { getFieldValue, setFieldsValue } = this.props.form;
        console.log("777", getFieldValue("userName"))

        setFieldsValue({
            userName: 111
        })
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <button onClick={this.btnclick}>获取</button>
                <Form >
                    <FormItem>
                        {getFieldDecorator('userName', {
                            initialValue: "22222",
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Number addonAfter="元" minus={false} precision={10} zeroFilling={true} />
                        )}
                    </FormItem>
                </Form>
            </div>
        );
    }
}
export default Form.create()(Detail);
