import React from 'react'
import Header from './Header'
import "./main.css"
import Avatar from './Avatar'


function Main() {
    return (
        <div className='main'>
            <Header />
            <div className="main_back_alt"></div>
            <div className="main_col_alt"></div>
            <div className="main_back">
                <Avatar />
            </div>

        </div>
    )
}

export default Main