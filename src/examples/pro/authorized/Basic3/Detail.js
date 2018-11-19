import React, { Component } from 'react';
import { Alert, Authorized } from 'quant-ui';
const Authorizeds = Authorized('user');
const noMatch = <Alert message="No permission." type="error" showIcon />;

const havePermission = () => {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve('foo');
        }, 30000);
    });
};
class Detail extends Component {
    render() {
        return (
            <div style={{height:"500px"}}>
                <Authorizeds authority={havePermission} noMatch={noMatch}>
                    <Alert
                        message="Use Function as a parameter passed!"
                        type="success"
                        showIcon
                    />
                </Authorizeds>
            </div>

        );
    }
}
export default Detail;
