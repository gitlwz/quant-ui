import React, { Component } from 'react';

class EditableTable extends React.Component {
    constructor(props) {
        super(props);
       
    }
    render() {

        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

class EditableTable22 extends React.Component {
    constructor(props) {
        super(props);
       
    }
    render() {

        return (
            <EditableTable >
                123
            </EditableTable>
        );
    }
}
export default EditableTable22;
