import React from 'react'
import { IoSearchCircleOutline } from "react-icons/io5";

export default function Header() {
    return (<>
        <header>

            <div className='header-top'>
                <div className="container">
                    <div className='d-flex justify-content-between'>
                        <div>
                            <a className='brand' href="/">My blog</a>
                        </div>
                        <div>
                            <div className='search-btn'>
                                <IoSearchCircleOutline />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='header-bottom'>
                <div className="container">
                    <nav>
                        <ul>
                            <li><a href="/">Nuur</a></li>
                            <li><a href="/">soyl</a></li>
                            <li><a href="/">urlag</a></li>
                            <li><a href="/">niigem</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    </>

    )
}
