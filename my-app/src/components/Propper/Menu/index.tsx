import React, { useState } from 'react'
import styles from './Menu.module.scss'
import classNames from 'classnames/bind'
import Tippy from '@tippyjs/react/headless';
import Propper from '..';
import AccountItem from '../../AccountItem';
import MenuItems from './MenuItems';
import Header from './Header';

const cx = classNames.bind(styles)

export default function Menu({ children, items, onChange }: any) {
  const [history, setHistory] = useState([{ data: items }]); // lưu lịch sử menu
  const current = history[history.length - 1]; // cấp hiện tại

  const renderItems = () => {
    return current.data.map((item: any, index: number) => {
      const isParent = !!item.children;

      return (
        <MenuItems
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              // ✅ chuyển vào cấp con: item.children.data
              setHistory((prev) => [...prev, item.children]);
            } else {
              onChange(item)
            }
          }}
        />
      );
    });
  };

  return (
    <Tippy
      interactive
      appendTo={document.body}
      // visible
      trigger="click"
      onHide={() => setHistory([{ data: items }])} 
      placement='bottom-end'
      render={attrs => (
        <div className={cx('menu-items')} tabIndex={-1} {...attrs}>
          <Propper className={cx('menu-popper')}>
            {/* <Header title='Language' /> */}
            {/* Header hiển thị khi vào cấp con */}
            {history.length > 1 && (
              <Header
                title='Language'
                onBack={() => setHistory((prev) => prev.slice(0, prev.length - 1))}
              />
            )}
            {renderItems()}
          </Propper>
        </div>
      )}
    >
      {children}
    </Tippy>
  )
}
