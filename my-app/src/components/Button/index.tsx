import React from 'react'
import styles from './Button.module.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles)

export default function Button({ to, href, onClick, children, primary, outline, small, large, text, disabled, leftIcon, rightIcon, className, ...props }: any) {
    let Comp: any = 'button';
    const _props: any = {
        onClick,
        ...props
    }

    if (disabled) {
        delete _props.onClick;
    }

    if (to) {
        _props.to = to
        Comp = Link
    } else if (href) {
        _props.href = href
        Comp = 'a'
    }


    const classes = cx('wrapper', className, { primary, outline, small, large, text, disabled, leftIcon, rightIcon })

    return (
        <Comp className={classes} {..._props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    )
}
