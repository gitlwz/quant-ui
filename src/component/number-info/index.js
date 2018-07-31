import React from 'react';
import  Icon  from '../icon';
import classNames from 'classnames';

const NumberInfo = ({ theme, title, subTitle, total, subTotal, status, suffix, gap, ...rest }) => (
  <div
    className={classNames('quant-numberInfo', {
      [`quant-numberInfo${theme}`]: theme,
    })}
    {...rest}
  >
    {title && <div className={'numberInfoTitle'}>{title}</div>}
    {subTitle && <div className={'numberInfoSubTitle'}>{subTitle}</div>}
    <div className={'numberInfoValue'} style={gap ? { marginTop: gap } : null}>
      <span>
        {total}
        {suffix && <em className={'suffix'}>{suffix}</em>}
      </span>
      {(status || subTotal) && (
        <span className={'subTotal'}>
          {subTotal}
          {status && <Icon type={`caret-${status}`} />}
        </span>
      )}
    </div>
  </div>
);

export default NumberInfo;
