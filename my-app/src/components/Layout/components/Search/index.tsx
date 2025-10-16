import Tippy from '@tippyjs/react'
import React, { useState } from 'react'
import Propper from '../../../Propper'
import AccountItem from '../../../AccountItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import styles from './Search.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

export default function Search() {
    const [searchValue, setSearchValue] = useState('')

    return (
        <div>
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
        </div>
    )
}
