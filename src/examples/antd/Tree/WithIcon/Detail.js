import React, { Component } from 'react';
import { Tree, Icon } from 'quant-ui';


const TreeNode = Tree.TreeNode;
class Detail extends Component {
    render() {
        return (
            <Tree
                showIcon
                defaultExpandedKeys={['0-0-0', '0-0-1']}
                defaultSelectedKeys={['0-0-0', '0-0-1']}
                defaultCheckedKeys={['0-0-0', '0-0-1']}

            >
                <TreeNode title="parent 1" key="0-0" icon={<Icon type="smile-o" />}>
                    <TreeNode title="parent 1-0" key="0-0-0" icon={<Icon type="meh-o" />}>
                        <TreeNode title="leaf" key="0-0-0-0" icon={({ selected }) => (
                            <Icon type={selected ? 'frown' : 'frown-o'} />
                        )} />
                        <TreeNode title="leaf" key="0-0-0-1" icon={({ selected }) => (
                            <Icon type={selected ? 'frown' : 'frown-o'} />
                        )} />
                    </TreeNode>
                </TreeNode>
            </Tree>

        )
    }
}

export default Detail;