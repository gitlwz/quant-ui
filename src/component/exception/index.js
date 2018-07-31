import React, { createElement } from 'react';
import classNames from 'classnames';
import Button from '../button';
import config from './typeConfig';

const Exception = ({ className, linkElement = 'a', type, title, desc, img, actions, ...rest }) => {
  const pageType = type in config ? type : '404';
  const clsString = classNames('quant-exception', className);
  return (
    <div className={clsString} {...rest}>
      <div className={'quant-imgBlock'}>
        <div
          className={'quant-imgEle'}
          style={{ backgroundImage: `url(${img || config[pageType].img})` }}
        />
      </div>
      <div className={'quant-content'}>
        <h1>{title || config[pageType].title}</h1>
        <div className={'quant-desc'}>{desc || config[pageType].desc}</div>
        <div className={'quant-actions'}>
          {actions ||
            createElement(
              linkElement,
              {
                to: '/',
                href: '/',
              },
              <Button type="primary">返回首页</Button>
            )}
        </div>
      </div>
    </div>
  );
};

export default Exception;
