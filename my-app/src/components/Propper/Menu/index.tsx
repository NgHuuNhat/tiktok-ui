import React from 'react'
import styles from './Menu.module.scss'
import classNames from 'classnames/bind'
import Tippy from '@tippyjs/react/headless';
import Propper from '..';
import AccountItem from '../../AccountItem';

const cx = classNames.bind(styles)

export default function Menu({ children }: any) {
  return (
    <Tippy
      interactive
      appendTo={document.body}
      // visible
      placement='bottom-end'
      render={attrs => (
        <div className={cx('menu-items')} tabIndex={-1} {...attrs}>
          <Propper>
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
          </Propper>
        </div>
      )}
    >
      {children}
    </Tippy>
  )
}
