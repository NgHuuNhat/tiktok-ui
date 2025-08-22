import React, { useEffect, useState } from 'react'
import styles from './Header.module.scss'
import classNames from 'classnames/bind'
import images from '../../../../assets/images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons'
import Tippy from '@tippyjs/react/headless';
import Propper from '../../../Propper'
import AccountItem from '../../../AccountItem'

const cx = classNames.bind(styles)

export default function Header() {
  const [searchResult, setSearchResult] = useState<any>([])

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1, 2, 3])
    }, 1000)
  }, [])

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={images.logo} alt="tiktok" />
        </div>
        <Tippy
          interactive
          appendTo={document.body}
          visible={searchResult.length > 0}
          render={attrs => (
            <div className={cx('search-result')} tabIndex={-1} {...attrs}>
              <Propper>
                <h4 className={cx('search-label')}>
                  Acounts
                </h4>
                <AccountItem/>
                <AccountItem/>
                <AccountItem/>
                <AccountItem/>
              </Propper>
            </div>
          )}
        >
          <div className={cx('search')}>
            <input type="text" placeholder='Search accounts and videos' spellCheck={false} />
            <button className={cx('clear')}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
            <button className={cx('search-btn')}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>
        <div className={cx('action')}>action</div>
      </div>
    </header>
  )
}
