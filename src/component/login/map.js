import React from 'react';
import Input from '../input';
import Icon from '../icon';

const map = {
    UserName: {
        component: Input,
        props: {
            size: 'large',
            prefix: <Icon type="user" className={'quant-login-prefixIcon'} />,
            placeholder: '请输入用户名',
        },
        rules: [
            {
                required: true,
                message: '请输入用户名!',
            },
        ],
    },
    Password: {
        component: Input,
        props: {
            size: 'large',
            prefix: <Icon type="lock" className={'quant-login-prefixIcon'} />,
            type: 'password',
            placeholder: '请输入密码',
        },
        rules: [
            {
                required: true,
                message: '请输入密码!',
            },
        ],
    },
    Mobile: {
        component: Input,
        props: {
            size: 'large',
            prefix: <Icon type="mobile" className={'quant-login-prefixIcon'} />,
            placeholder: 'mobile number',
        },
        rules: [
            {
                required: true,
                message: 'Please enter mobile number!',
            },
            {
                pattern: /^1\d{10}$/,
                message: 'Wrong mobile number format!',
            },
        ],
    },
    Captcha: {
        component: Input,
        props: {
            size: 'large',
            prefix: <Icon type="mail" className={'quant-login-prefixIcon'} />,
            placeholder: 'captcha',
        },
        rules: [
            {
                required: true,
                message: 'Please enter Captcha!',
            },
        ],
    },
};

export default map;
