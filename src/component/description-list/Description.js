import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import  Col  from '../col';
import responsive from './responsive';

const Description = ({ term, column, className, children, ...restProps }) => {
  const clsString = classNames('quant-descriptionList-description', className);
  return (
    <Col className={clsString} {...responsive[column]} {...restProps}>
      {term && <div className={'quant-descriptionList-term'}>{term}</div>}
      {children !== null &&
        children !== undefined && <div className={'quant-descriptionList-detail'}>{children}</div>}
    </Col>
  );
};

Description.defaultProps = {
  term: '',
};

Description.propTypes = {
  term: PropTypes.node,
};

export default Description;
