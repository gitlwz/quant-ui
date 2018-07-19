import React, { Component } from 'react';
import { colorPicker} from 'quant-ui';
let { 
	SketchPicker,
    AlphaPicker,
    BlockPicker,
    ChromePicker,
    CirclePicker,
    CompactPicker,
    GithubPicker,
    HuePicker,
    MaterialPicker,
    PhotoshopPicker,
    SliderPicker,
    SwatchesPicker,
	TwitterPicker, 
} = colorPicker;
class Detail extends Component {
	render() {
		return (
			<div>
				<div style={{display: 'inline-block',margin:"20px"}}>
					<SketchPicker/>
				</div>
				<div style={{display: 'inline-block',margin:"20px"}}>
					<AlphaPicker/>
				</div>
				<div style={{display: 'inline-block',margin:"20px"}}>
					<BlockPicker/>
				</div>
				<div style={{display: 'inline-block',margin:"20px"}}>
					<ChromePicker/>
				</div>
				<div style={{display: 'inline-block',margin:"20px"}}>
					<CirclePicker />
				</div>
				<div style={{display: 'inline-block',margin:"20px"}}>
					<CompactPicker />
				</div>
				<div style={{display: 'inline-block',margin:"20px"}}>
					<GithubPicker />
				</div>
				<div style={{display: 'inline-block',margin:"20px"}}>
					<HuePicker />
				</div>
				<div style={{display: 'inline-block',margin:"20px"}}>
					<MaterialPicker />
				</div>
				<div style={{display: 'inline-block',margin:"20px"}}>
					<PhotoshopPicker />
				</div>
				<div style={{width:"200px",display: 'inline-block',margin:"20px"}}>
					<SliderPicker />
				</div>
				<div style={{display: 'inline-block',margin:"20px"}}>
					<SwatchesPicker />
				</div>
				<div style={{display: 'inline-block',margin:"20px"}}>
					<TwitterPicker />
				</div>
			</div>
		);
	}
}
export default Detail;
