import React from 'react';
import Tooltip from '../tooltip';
import Avatar from '../avatar';
import classNames from 'classnames';


const AvatarList = ({ children, size, ...other }) => {
  const childrenWithProps = React.Children.map(children, child =>
    React.cloneElement(child, {
      size,
    })
  );

  return (
    <div {...other} className={'quant-avatarList'}>
      <ul> {childrenWithProps} </ul>
    </div>
  );
};

const Item = ({ src, size, tips, onClick = () => {} }) => {
  const cls = classNames('quant-avatarItem', {
    ['quant-avatarItemLarge']: size === 'large',
    ['quant-avatarItemSmall']: size === 'small',
    ['quant-avatarItemMini']: size === 'mini',
  });

  return (
    <li className={cls} onClick={onClick}>
      {tips ? (
        <Tooltip title={tips}>
          <Avatar src={src} size={size} style={{ cursor: 'pointer' }} />
        </Tooltip>
      ) : (
        <Avatar src={src} size={size} />
      )}
    </li>
  );
};

AvatarList.Item = Item;

export default AvatarList;
