import React, { Component } from 'react';
import { Upload, Button, Icon, message  } from 'quant-ui';
import isArray from "lodash/isArray"
class Detail extends Component {
    
    componentDidMount = () => {
        var _url = window.URL.createObjectURL(`https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=4113980303,4174240654&fm=173&app=25&f=JPEG?w=630&h=290&s=C7D2798DDDFA37802C95C11D010070C3`);
        var a = document.createElement('a');
        a.href = _url;
        a.download = ""
        a.click();
        window.URL.revokeObjectURL(_url);
    }
      render() {
        
        return (
            <div>
                3333333333
            </div>
        );
      }
}
export default Detail;
