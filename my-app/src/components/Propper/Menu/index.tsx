import React from 'react'
import styles from './Menu.module.scss'
import classNames from 'classnames/bind'
import Tippy from '@tippyjs/react/headless';
import Propper from '..';
import AccountItem from '../../AccountItem';
import MenuItems from './MenuItems';

const cx = classNames.bind(styles)

export default function Menu({ children, items }: any) {

  // console.log('items',items)

  const renderItems = () => {
    return items.map((item: any, index: any) => (
      <MenuItems key={index} data={item} />
    ))
  }

  return (
    <Tippy
      interactive
      appendTo={document.body}
      // visible
      placement='bottom-end'
      render={attrs => (
        <div className={cx('menu-items')} tabIndex={-1} {...attrs}>
          <Propper className={cx('menu-popper')}>
            {renderItems()}
          </Propper>
        </div>
      )}
    >
      {children}
    </Tippy>
  )
}
