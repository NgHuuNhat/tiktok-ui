import React, { useEffect, useState } from 'react'
import styles from './Header.module.scss'
import classNames from 'classnames/bind'
import images from '../../../../assets/images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleQuestion, faCircleXmark, faEarthAfrica, faEllipsisVertical, faKeyboard, faMagnifyingGlass, faSignIn, faSpinner } from '@fortawesome/free-solid-svg-icons'
import Tippy from '@tippyjs/react/headless';
import Propper from '../../../Propper'
import AccountItem from '../../../AccountItem'
import Button from '../../../Button'
import Menu from '../../../Propper/Menu'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAfrica} />,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          code: 'en',
          title: 'English'
        },
        {
          code: 'vi',
          title: 'Tiếng Việt'
        },
      ]
    }
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'Feedback and help',
    to: '/feedback'
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Keyboard shortcuts'
  }
]

export default function Header() {
  const [searchValue, setSearchValue] = useState('')

  // const [searchResult, setSearchResult] = useState<any>([])
  // useEffect(() => {
  //   setTimeout(() => {
  //     setSearchResult([1, 2, 3])
  //   }, 1000)
  // }, [])

  const handleMenuChange = (item:any) => {
    console.log(item)
  }

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <Link to='/' className={cx('logo')}>
          <img src={images.logo} alt="tiktok" />
        </Link>

        <Tippy
          interactive
          appendTo={document.body}
          trigger="manual"
          visible={searchValue.trim().length > 0}
          render={attrs => (
            <div className={cx('search-result')} tabIndex={-1} {...attrs}>
              <Propper>
                <h4 className={cx('search-label')}>
                  Acounts
                </h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </Propper>
            </div>
          )}
        >
          <div className={cx('search')}>
            <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} type="text" placeholder='Search accounts and videos' spellCheck={false} />
            {searchValue && (
              <button type='button' className={cx('clear')} onClick={() => setSearchValue('')}>
                <FontAwesomeIcon icon={faCircleXmark} />
              </button>
            )}
            {/* <button className={cx('clear')}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button> */}
            {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}
            <button className={cx('search-btn')}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>

        <div className={cx('action')}>
          <Button text>Upload</Button>
          <Button leftIcon={<FontAwesomeIcon icon={faSignIn} />} primary onClick={() => alert('click')}>Login</Button>

          <Menu
            items={MENU_ITEMS}
            onChange={handleMenuChange}
          >
            <button className={cx('more-btn')}>
              <FontAwesomeIcon className={cx('icon-btn')} icon={faEllipsisVertical} />
            </button>
          </Menu>

        </div>

      </div>
    </header>
  )
}
