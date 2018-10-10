import React, { PureComponent } from 'react';
import Button from "../button";
import language from "../language";
import Tooltip from "../tooltip";
import Icon from "../icon";
import request from "../request";
import isArray from "lodash/isArray";
let { Download } = request;
let $ = language.getLanguageData;
class DownLoadButton extends React.Component {
    
    downLoad = () => {
        let { columns } = this.props;
        let entity = {
            entityKey: [],
            headerKey: [],
            styles: [],
            title: this.props.name,
            dicMap: {},
        };
        let options = this.props.options || [];
        if (isArray(columns)) {
            columns.forEach((ele) => {
                if (ele.download !== false && ele.dataIndex !== "index" && ele.dataIndex !== "action") {
                    entity.entityKey.push(ele.dataIndex);
                    entity.headerKey.push(ele.title);
                    if (ele.type == 3 && ele.notranslate !== false || ele.translate === true) {
                        let optionData = options[ele.option] || [];
                        entity.dicMap[ele.dataIndex] = {}
                        optionData.forEach((item) => {
                            entity.dicMap[ele.dataIndex][item.value] = item.name;
                        })
                    }
                }
            })
        }
        Download(this.props.url, this.props.name + ".xls", "excel", entity, this.props.params)
    }
    render() {
        return (
            <span>
                <Button style={{ marginRight: "4px" }} disabled={this.props.disabled || false} onClick={this.downLoad} type="primary" icon="download">{this.props.title || $("导出")}</Button>
                {this.props.tooltip === true ? <Tooltip title={$("可以对导出文件进行新增或修改，然后通过导入功能导入此文件！")}><Icon style={{ color: "#ccc" }} type="question-circle" /> </Tooltip> : null}
            </span>
        );
    }
}
export default DownLoadButton