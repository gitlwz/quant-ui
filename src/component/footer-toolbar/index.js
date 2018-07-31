import React, { Component } from 'react';
import classNames from 'classnames';

export default class FooterToolbar extends Component {
  render() {
    const { children, className, extra, ...restProps } = this.props;
    return (
      <div className={classNames(className, 'quant-footer-toolbar')} {...restProps}>
        <div className={'left'}>{extra}</div>
        <div className={'right'}>{children}</div>
      </div>
    );
  }
}
