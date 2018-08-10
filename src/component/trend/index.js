import React from 'react';
import  Icon  from '../icon';
import classNames from 'classnames';

const Trend = ({ colorful = true, reverseColor = false, flag, children, className, ...rest }) => {
  const classString = classNames(
    'quant-trendItem',
    {
      'quant-trendItem-trendItemGrey': !colorful,
      'quant-trendItem-reverseColor': reverseColor && colorful,
    },
    className
  );
  return (
    <div {...rest} className={classString} title={typeof children === 'string' ? children : ''}>
      <span className={'quant-trendItem-value'}>{children}</span>
      {flag && (
        <span className={`quant-trendItem-${flag}`}>
          <Icon type={`caret-${flag}`} />
        </span>
      )}
    </div>
  );
};

export default Trend;
