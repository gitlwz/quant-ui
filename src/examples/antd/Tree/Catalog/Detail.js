import React, { Component } from 'react';
import { Tree } from 'quant-ui';


const TreeNode = Tree.TreeNode;
const DirectoryTree = Tree.DirectoryTree;
class Detail extends Component {
    render() {
        return (
            <DirectoryTree
                multiple
                defaultExpandAll
                
            >
                <TreeNode title="parent 0" key="0-0">
                    <TreeNode title="leaf 0-0" key="0-0-0" isLeaf />
                    <TreeNode title="leaf 0-1" key="0-0-1" isLeaf />
                </TreeNode>
                <TreeNode title="parent 1" key="0-1">
                    <TreeNode title="leaf 1-0" key="0-1-0" isLeaf />
                    <TreeNode title="leaf 1-1" key="0-1-1" isLeaf />
                </TreeNode>
            </DirectoryTree>

        )
    }
}

export default Detail;