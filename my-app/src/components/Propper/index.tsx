import React from 'react'
import styles from './Propper.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

export default function Propper({ children }: any) {
    return (
        <div className={cx('propper')}>
            {children}
        </div>
    )
}
