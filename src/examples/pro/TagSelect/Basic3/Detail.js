import React, { Component } from 'react';
import { Button, TagSelect } from 'quant-ui';

class Demo extends React.Component {
    state = {
        value: ['cat1'],
    };
    handleFormSubmit = value => {
        this.setState({
            value,
        });
    };
    checkAll = () => {
        this.setState({
            value: ['cat1', 'cat2', 'cat3', 'cat4', 'cat5', 'cat6'],
        });
    };
    render() {
        return (
            <div>
                <Button onClick={this.checkAll}>全部</Button>
                <div
                    style={{
                        padding: 16,
                    }}
                >
                    <TagSelect hideCheckAll={true} value={this.state.value} onChange={this.handleFormSubmit}>
                        <TagSelect.Option value="cat1">类目一</TagSelect.Option>
                        <TagSelect.Option value="cat2">类目二</TagSelect.Option>
                        <TagSelect.Option value="cat3">类目三</TagSelect.Option>
                        <TagSelect.Option value="cat4">类目四</TagSelect.Option>
                        <TagSelect.Option value="cat5">类目五</TagSelect.Option>
                        <TagSelect.Option value="cat6">类目六</TagSelect.Option>
                    </TagSelect>
                </div>
            </div>
        );
    }
}

export default Demo;
