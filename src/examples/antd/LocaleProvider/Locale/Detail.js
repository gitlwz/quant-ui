import React, { Component } from 'react';
import { Pagination, LocaleProvider } from 'quant-ui';
import zhCN from 'antd/lib/locale-provider/zh_CN';

class Detail extends Component {

    render() {
        return (
            <LocaleProvider locale={zhCN}>
                <div>
                    <Pagination defaultCurrent={1} total={50} showSizeChanger />
                </div>
            </LocaleProvider>

        );
    }
}

export default Detail;