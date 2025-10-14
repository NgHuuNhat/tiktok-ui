import React, { forwardRef, useEffect, useState } from 'react'
import images from '../../assets/images'
import styles from './Image.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

const Image = forwardRef(({ src, className, ...props }: any, ref: any) => {
    return (
        <img className={cx('image', className)} src={src ? src : images.noImage} ref={ref} {...props} />
    )
})

export default Image;
