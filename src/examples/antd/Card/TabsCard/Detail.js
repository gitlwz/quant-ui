import React, { Component } from 'react';
import { Card ,Avatar} from 'quant-ui';

const tabList=[
    {
        key:'person',
        tab:<Avatar shape='square' icon='user'/>
    },
    {
        key:'app',
        tab:'App'
    },
    {
        key:'project',
        tab:'Project'
    }
]

const contentList={
    person:<p>Personal Information</p>,
    app:<p>app content</p>,
    project:<p>project content</p>,
}

class Detail extends Component {
    state={
        key:'person',
    }

    onTabChange= (key,type)=>{
        return this.setState(
            {
                [type]:key
            }
        );
    }
    render() {
        return (
            <Card
            style={{ width: '100%' }}
            title="Card title"
            extra={<a href="#">More</a>}
            tabList={tabList}
            onTabChange={(key) => { this.onTabChange(key, 'key'); }}
            
          >
            {contentList[this.state.key]}
          </Card>
        );
    }
}
export default Detail;