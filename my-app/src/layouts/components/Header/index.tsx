import React, { useEffect, useState } from 'react'
import styles from './Header.module.scss'
import classNames from 'classnames/bind'
import images from '../../../assets/images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage } from '@fortawesome/free-regular-svg-icons'
import { faCircleQuestion, faCircleXmark, faCloudUpload, faCoins, faEarthAfrica, faEllipsisVertical, faGear, faKeyboard, faMagnifyingGlass, faSignIn, faSignOut, faSpinner, faUpload, faUser } from '@fortawesome/free-solid-svg-icons'
import Tippy from '@tippyjs/react/headless';
import Propper from '../../../components/Propper'
import AccountItem from '../../../components/AccountItem'
import Button from '../../../components/Button'
import Menu from '../../../components/Propper/Menu'
import { Link } from 'react-router-dom'
import { IconUpload } from '../../../components/Icons'
import Image from '../../../components/Image/Image'
import Search from '../Search'

const cx = classNames.bind(styles)

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAfrica} />,
    title: 'Language',
    children: {
      title: 'Language',
      data: [
        {
          type: 'language',
          code: 'en',
          title: 'English'
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt'
        },
        {
          type: 'language',
          code: 'en',
          title: 'English'
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt'
        },
        {
          type: 'language',
          code: 'en',
          title: 'English'
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt'
        },
        {
          type: 'language',
          code: 'en',
          title: 'English'
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt'
        },
        {
          type: 'language',
          code: 'en',
          title: 'English'
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt'
        },
        {
          type: 'language',
          code: 'en',
          title: 'English'
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt'
        },
        {
          type: 'language',
          code: 'en',
          title: 'English'
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt'
        },
        {
          type: 'language',
          code: 'en',
          title: 'English'
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt'
        },
        {
          type: 'language',
          code: 'en',
          title: 'English'
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt'
        },
        {
          type: 'language',
          code: 'en',
          title: 'English'
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt'
        },
        {
          type: 'language',
          code: 'en',
          title: 'English'
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt'
        },
        {
          type: 'language',
          code: 'en',
          title: 'English'
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt'
        },
        {
          type: 'language',
          code: 'en',
          title: 'English'
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt'
        },
        {
          type: 'language',
          code: 'en',
          title: 'English'
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt'
        },
        {
          type: 'language',
          code: 'en',
          title: 'English99'
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt99'
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

const MENU_USER = [
  {
    icon: <FontAwesomeIcon icon={faUser} />,
    title: 'View Profile',
    to: '/profile'
  },
  {
    icon: <FontAwesomeIcon icon={faCoins} />,
    title: 'Get Coin',
    to: '/coin',
    separate: true,
  },
  {
    icon: <FontAwesomeIcon icon={faGear} />,
    title: 'Setting',
    to: '/setting'
  },
  ...MENU_ITEMS,
  {
    icon: <FontAwesomeIcon icon={faSignOut} />,
    title: 'Log out',
    to: '/logout',
    separate: true,
  },
]

export default function Header() {
  // const [searchValue, setSearchValue] = useState('')
  const [currenUser, setCurrenUser] = useState(true)

  // const [searchResult, setSearchResult] = useState<any>([])
  // useEffect(() => {
  //   setTimeout(() => {
  //     setSearchResult([1, 2, 3])
  //   }, 1000)
  // }, [])

  const handleMenuChange = (item: any) => {
    // console.log(item)
    switch (item.type) {
      case 'language':
        //handle change language
        break;
      default:
    }
  }

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <Link to='/' className={cx('logo')}>
          <img src={images.logo} alt="tiktok" />
        </Link>

        {/* search */}
        <Search />


        <div className={cx('action')}>
          {currenUser ? (
            <>
              {/* <h4>Wellcome!</h4>  */}
              <button className={cx('action-btn')}>
                {/* <FontAwesomeIcon icon={faCloudUpload} /> */}
                <IconUpload />
              </button>
              <button className={cx('action-btn')}>
                <FontAwesomeIcon icon={faMessage} />
                <span className={cx('badge')}>1</span>
              </button>
            </>
          ) : (
            <>
              <Button text outline>Upload</Button>
              <Button leftIcon={<FontAwesomeIcon icon={faSignIn} />} primary onClick={() => alert('click')}>Login</Button>
            </>
          )}

          <Menu
            items={currenUser ? MENU_USER : MENU_ITEMS}
            onChange={handleMenuChange}
          >
            {currenUser ? (
              <Image
                // src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSSq-FoDF-DbpqB35H4BHxMHwzDeMYszGQIkgim1D-YNaolwhl_d3QYH_0-b9XdQ0OVdbmmzk8gJ-h4xb6UgJsWCJSSr3j_DKpQlML1TrjF'
                alt="avatar"
                className={cx('avatar')}
              />
            ) : (
              <button className={cx('more-btn')}>
                <FontAwesomeIcon className={cx('icon-btn')} icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>

      </div>
    </header>
  )
}
