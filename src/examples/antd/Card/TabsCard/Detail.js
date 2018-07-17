import React, { Component } from 'react';
import { Card } from 'quant-ui';

const tabList=[
    {
        key:'article',
        tab:'Article'
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
    article:<p>article content</p>,
    app:<p>app content</p>,
    project:<p>project content</p>,
}

class Detail extends Component {
    state={
        key:'article',
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