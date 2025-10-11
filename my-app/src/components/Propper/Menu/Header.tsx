import React from 'react'
import classNames from 'classnames/bind'
import styles from './Menu.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

const cx = classNames.bind(styles)

export default function Header({ title, onBack }: any) {
    return (
        <header className={cx('header')}>
            <button className={cx('back-btn')} onClick={onBack}>
                <FontAwesomeIcon icon={faChevronLeft}/>
                <h4 className={cx('header-title')}>{title}</h4>
            </button>
        </header>
    )
}
