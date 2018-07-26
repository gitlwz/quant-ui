import React, { Component } from 'react';
import { Tag } from 'quant-ui';
import { width } from 'window-size';

const CheckableTag = Tag.CheckableTag;
const tagsFromServer = ['Movies', 'Books', 'Music', 'Sports'];

class Detail extends Component {
    state = { selectedTags: [] };

    handleChange = (tag, checked) => {
        const { selectedTags } = this.state;
        const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter(t => t !== tag);
        this.setState({ selectedTags: nextSelectedTags });
    }
    render() {
        const { selectedTags } = this.state;
        return (
            <div>
                <h6 style={{ marginRight: 8, display: 'inline' }}>Categories:</h6>
                {tagsFromServer.map(tag => (
                    <CheckableTag
                        key={tag}
                        checked={selectedTags.indexOf(tag) > -1}
                        onChange={checked => this.handleChange(tag, checked)}
                    >
                        {tag}
                    </CheckableTag>
                ))}
                <br/><br/>
                <p>you are interested in {selectedTags.map((elem)=>(<span style={{marginRight:5,border:'1px solid', padding:5}}>{elem}</span>))}</p>
            </div>
        )
    }
}


export default Detail;

