import React, { Component } from 'react';
import { Upload, Button, Icon, message } from 'quant-ui';
import isArray from "lodash/isArray"
class Detail extends Component {

    state = {
        uploading: false,
    }

    handleUpload = (fileList) => {
        const formData = new FormData();
        fileList.forEach((file) => {
            formData.append('files[]', file);
        });
        this.setState({
            uploading: true,
        });
        console.log("********8", formData, fileList)
        // You can use any AJAX library you like
        // reqwest({
        //   url: '//jsonplaceholder.typicode.com/posts/',
        //   method: 'post',
        //   processData: false,
        //   data: formData,
        //   success: () => {
        //     this.setState({
        //       fileList: [],
        //       uploading: false,
        //     });
        //     message.success('upload successfully.');
        //   },
        //   error: () => {
        //     this.setState({
        //       uploading: false,
        //     });
        //     message.error('upload failed.');
        //   },
        // });
    }

    render() {
        const { uploading } = this.state;
        const props = {
            beforeUpload: (file) => {
                let files = file;
                if (!isArray(file)) {
                    files = [file];
                }
                this.handleUpload(files)
                return false;
            },
            fileList: [],
        };

        return (
            <div>
                <Upload {...props} disabled={uploading}>
                    <Button loading={uploading}>
                        {!uploading && <Icon type="upload" />}{uploading ? 'Uploading' : 'Select File'}
                    </Button>
                </Upload>
            </div>
        );
    }
}
export default Detail;
