import React, { Component } from 'react';
import { PageHeader } from 'quant-ui';
const breadcrumbList = [{
    title: '一级菜单',
    href: '/',
}, {
    title: '二级菜单',
    href: '/',
}, {
    title: '三级菜单',
}];

class Detail extends Component {

    render() {
        return (
            <div>
                <PageHeader title="页面标题" breadcrumbList={breadcrumbList} />
            </div>

        );
    }
}
export default Detail;
