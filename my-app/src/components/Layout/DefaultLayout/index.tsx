import React from 'react'
import Sidebar from './Sidebar'
import Header from '../components/Header'

export default function DefaultLayout({ children }: any) {
    return (
        <div>
            <Header />
            <div className='container'>
                <Sidebar />
                <div className='content'>
                    {children}
                </div>
            </div>
        </div>
    )
}
