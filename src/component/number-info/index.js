import React from 'react';
import  Icon  from '../icon';
import classNames from 'classnames';

const NumberInfo = ({ theme, title, subTitle, total, subTotal, status, suffix, gap,sap, ...rest }) => (
  <div
    className={classNames('quant-numberInfo', {
      [`quant-numberInfo${theme}`]: theme,
    })}
    {...rest}
  >
    {title && <div className={'quant-numberInfo-numberInfoTitle'} style={sap ? { marginBottom: sap } : null}>{title}</div>}
    {subTitle && <div className={'quant-numberInfo-numberInfoSubTitle'}>{subTitle}</div>}
    <div className={'quant-numberInfo-numberInfoValue'} style={gap ? { marginTop: gap } : null}>
      <span>
        {total}
        {suffix && <em className={'quant-numberInfo-suffix'}>{suffix}</em>}
      </span>
      {(status || subTotal) && (
        <span className={'quant-numberInfo-subTotal'}>
          {subTotal}
          {status && <Icon type={`caret-${status}`} />}
        </span>
      )}
    </div>
  </div>
);

export default NumberInfo;
