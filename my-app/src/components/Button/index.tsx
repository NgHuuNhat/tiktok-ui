import React from 'react'
import styles from './Button.module.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles)

export default function Button({ to, href, onClick, children, primary, outline, small, large, text, disabled, leftIcon, rightIcon, ...passProps }: any) {
    let Comp: any = 'button';
    const props: any = {
        onClick,
        ...passProps
    }

    if (disabled) {
        delete props.onClick;
    }

    if (to) {
        props.to = to
        Comp = Link
    } else if (href) {
        props.href = href
        Comp = 'a'
    }


    const classes = cx('wrapper', { primary, outline, small, large, text, disabled, leftIcon, rightIcon })

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    )
}
