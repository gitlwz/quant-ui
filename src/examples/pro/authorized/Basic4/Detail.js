import React, { Component } from 'react';
import { Alert, Authorized } from 'quant-ui';
const Authorizeds = Authorized();
const { check } = Authorizeds;
const noAuthorized = <Alert message="No permission." type="error" showIcon />;
const hasAuthorized = <Alert message="Use Function as a parameter passed!" type="success" showIcon />;
const havePermission = () => {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve('foo');
        }, 3000);
    });
};
class Detail extends Component {
    render() {
        return (
            <div>
                {check(havePermission, hasAuthorized, noAuthorized)}
            </div>

        );
    }
}
export default Detail;
