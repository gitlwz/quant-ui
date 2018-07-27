import React, { Component } from 'react';
import { Tree, Icon } from 'quant-ui';


const TreeNode = Tree.TreeNode;

class Detail extends Component {

    render() {

        return (
            <Tree
                showLine
                defaultExpandedKeys={['0-0-0']}
            >
                <TreeNode title="parent 1" key="0-0">
                    <TreeNode title="parent 1-0" key="0-0-0">
                        <TreeNode title="leaf" key="0-0-0-0" />
                        <TreeNode title="leaf" key="0-0-0-1" />
                        <TreeNode title="leaf" key="0-0-0-2" />
                    </TreeNode>
                    <TreeNode title="parent 1-1" key="0-0-1">
                        <TreeNode title="leaf" key="0-0-1-0" />
                    </TreeNode>
                    <TreeNode title="parent 1-2" key="0-0-2">
                        <TreeNode title="leaf" key="0-0-2-0" />
                        <TreeNode title="leaf" key="0-0-2-1" />
                    </TreeNode>
                </TreeNode>
            </Tree>
        );
    }
}

export default Detail;