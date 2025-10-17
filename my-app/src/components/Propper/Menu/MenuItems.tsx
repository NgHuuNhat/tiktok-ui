import React from 'react'
import styles from './Menu.module.scss'
import classNames from 'classnames/bind'
import Button from '../../Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'


const cx = classNames.bind(styles)

export default function MenuItems({ data, onClick, selectedLanguage }: any) {

    // console.log('data', data)

    return (
        <Button
            className={cx('item', { separate: data.separate })}
            to={data.to} leftIcon={data.icon}
            onClick={onClick}
        >
            {data.title}
            {data.type === 'language' && data.code === selectedLanguage && (
                <FontAwesomeIcon icon={faCheck} className={cx('check-icon')} />
            )}
        </Button>
    )
}
