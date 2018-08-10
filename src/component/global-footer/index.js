import React from 'react';
import classNames from 'classnames';

const GlobalFooter = ({ className, links, copyright }) => {
  const clsString = classNames('quant-globalFooter', className);
  return (
    <div className={clsString}>
      {links && (
        <div className={'quant-globalFooter-links'}>
          {links.map(link => (
            <a key={link.key} target={link.blankTarget ? '_blank' : '_self'} href={link.href}>
              {link.title}
            </a>
          ))}
        </div>
      )}
      {copyright && <div className={'quant-globalFooter-copyright'}>{copyright}</div>}
    </div>
  );
};

export default GlobalFooter;
