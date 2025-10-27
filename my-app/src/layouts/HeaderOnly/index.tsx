import React from 'react'
import Header from '../components/Header'

export default function HeaderOnly({ children }: any) {
    return (
        <div className='header-only'>
            <Header />
            <div className='container'>
                <div className='content'>
                    {children}
                </div>
            </div>
        </div>
    )
}
