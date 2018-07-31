import React from 'react';
import  Icon  from '../icon';
import classNames from 'classnames';

const Trend = ({ colorful = true, reverseColor = false, flag, children, className, ...rest }) => {
  const classString = classNames(
    'quant-trendItem',
    {
      ['trendItemGrey']: !colorful,
      ['reverseColor']: reverseColor && colorful,
    },
    className
  );
  return (
    <div {...rest} className={classString} title={typeof children === 'string' ? children : ''}>
      <span className={'value'}>{children}</span>
      {flag && (
        <span className={flag}>
          <Icon type={`caret-${flag}`} />
        </span>
      )}
    </div>
  );
};

export default Trend;
