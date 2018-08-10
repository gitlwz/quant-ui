import React from 'react';
import classNames from 'classnames';
import  Icon  from '../icon';

export default function Result({
  className,
  type,
  title,
  description,
  extra,
  actions,
  ...restProps
}) {
  const iconMap = {
    error: <Icon className={'quant-result-error'} type="close-circle" />,
    success: <Icon className={'quant-result-success'} type="check-circle" />,
  };
  const clsString = classNames('quant-result', className);
  return (
    <div className={clsString} {...restProps}>
      <div className={'quant-result-icon'}>{iconMap[type]}</div>
      <div className={'quant-result-title'}>{title}</div>
      {description && <div className={'quant-result-description'}>{description}</div>}
      {extra && <div className={'quant-result-extra'}>{extra}</div>}
      {actions && <div className={'quant-result-actions'}>{actions}</div>}
    </div>
  );
}
