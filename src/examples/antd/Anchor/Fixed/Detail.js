import React,{Component} from 'react';
import {Anchor} from 'quant-ui';

const {Link} =Anchor;

class Detail extends Component{

    render(){
        return (
            <Anchor affix={false}>
                <Link href="#app/antd/DataDisplay/Timeline" title="GoTo Timeline" />
                <Link href="#app/antd/DataDisplay/Table" title="GoTo Table" />
                <Link href="#app/antd/DataDisplay/Calendar" title="GoTo Calendar" />
            </Anchor>
        );
    }
}

export default Detail;