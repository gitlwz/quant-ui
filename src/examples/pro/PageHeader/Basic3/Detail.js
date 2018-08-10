import React, { Component } from 'react';
import { PageHeader } from 'quant-ui';
import "./index.less";
const content = (
    <div>
        <p>段落示意：蚂蚁金服务设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。</p>
        <div className="link">
            <a>
                <img alt="" src="https://gw.alipayobjects.com/zos/rmsportal/MjEImQtenlyueSmVEfUD.svg" /> 快速开始
            </a>
            <a>
                <img alt="" src="https://gw.alipayobjects.com/zos/rmsportal/NbuDUAuBlIApFuDvWiND.svg" /> 产品简介
            </a>
            <a>
                <img alt="" src="https://gw.alipayobjects.com/zos/rmsportal/ohOEPSYdDTNnyMbGuyLb.svg" /> 产品文档
            </a>
        </div>
    </div>
);

const extra = (
    <div className="imgContainer">
        <img style={{ width: '100%' }} alt="" src="https://gw.alipayobjects.com/zos/rmsportal/RzwpdLnhmvDJToTdfDPe.png" />
    </div>
);

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
            <div className="pageHeader-demo">
                <PageHeader
                    title="这是一个标题"
                    content={content}
                    extraContent={extra}
                    breadcrumbList={breadcrumbList}
                />
            </div>

        );
    }
}
export default Detail;
