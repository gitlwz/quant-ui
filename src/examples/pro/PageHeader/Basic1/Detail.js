import React, { Component } from 'react';
import { PageHeader } from 'quant-ui';
import "./index.less"
const breadcrumbList = [{
    title: '面包屑',
}];

const tabList = [{
    key: '1',
    tab: '页签一',
}, {
    key: '2',
    tab: '页签二',
}, {
    key: '3',
    tab: '页签三',
}];
class Detail extends Component {

    render() {
        return (
            <div>
                <PageHeader
                    className="tabs"
                    title={<div className="title">Title</div>}
                    logo={<div className="logo">logo</div>}
                    action={<div className="action">action</div>}
                    content={<div className="content">content</div>}
                    extraContent={<div className="extraContent">extraContent</div>}
                    breadcrumbList={breadcrumbList}
                    tabList={tabList}
                    tabActiveKey="1"
                />
            </div>

        );
    }
}
export default Detail;
