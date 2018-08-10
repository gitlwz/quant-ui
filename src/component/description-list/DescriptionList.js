import React from 'react';
import classNames from 'classnames';
import  Row  from '../row';

const DescriptionList = ({
  className,
  title,
  col = 3,
  layout = 'horizontal',
  gutter = 32,
  children,
  size,
  ...restProps
}) => {
  const clsString = classNames('quant-descriptionList', `quant-descriptionList-${layout}`, className, {
    ['quant-descriptionList-small']: size === 'small',
    ['quant-descriptionList-large']: size === 'large',
  });
  const column = col > 4 ? 4 : col;
  return (
    <div className={clsString} {...restProps}>
      {title ? <div className={'quant-descriptionList-title'}>{title}</div> : null}
      <Row gutter={gutter}>
        {React.Children.map(
          children,
          child => (child ? React.cloneElement(child, { column }) : child)
        )}
      </Row>
    </div>
  );
};

export default DescriptionList;
