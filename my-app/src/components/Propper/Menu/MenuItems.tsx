import React from 'react'
import Button from '../../Button'

export default function MenuItems({ data }: any) {

    // console.log('data', data)

    return (
        <div>
            <Button to={data.to} leftIcon={data.icon}>{data.title}</Button>
        </div>
    )
}
