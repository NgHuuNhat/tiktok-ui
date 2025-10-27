import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import styles from './DefaultLayout.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

export default function DefaultLayout({ children }: any) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>
                    {children}
                </div>
            </div>
        </div>
    )
}
