import React from 'react'
import styles from './Menu.module.scss'
import classNames from 'classnames/bind'
import Button from '../../Button'


const cx = classNames.bind(styles)

export default function MenuItems({ data, onClick }: any) {

    // console.log('data', data)

    return (
        <Button
            className={cx('item')}
            to={data.to} leftIcon={data.icon}
            onClick={onClick}
        >
            {data.title}
        </Button>
    )
}
