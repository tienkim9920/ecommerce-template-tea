import React, { useState } from 'react';

function Header() {

    const [navbar, setNavbar] = useState<any>(false);

    return (
        <div className="wrapper-header">
            <div>
                <div className='mt-2'>
                    <div className='bars-icon' onClick={() => setNavbar(!navbar)}>
                        <i className={navbar ? 'fa fa-bars absolute custom-icon hide' : 'fa fa-bars absolute custom-icon show'}></i>
                        <i className={navbar ? 'fa fa-times absolute custom-icon show' : 'fa fa-times absolute custom-icon hide'}></i>
                    </div>

                </div>
                <div style={{ height: '300px' }}></div>
                <div className={navbar ? 'navbar-laptop show' : ' navbar-laptop hide'}>
                    <div className='hover-icon-navbar'><i className='fa fa-home custom-icon'></i></div>
                    <div className='hover-icon-navbar mt-3'><i className='fa fa-coffee custom-icon'></i></div>
                    <div className='hover-icon-navbar mt-3'><i className='fa fa-shopping-bag custom-icon'></i></div>
                    <div className='hover-icon-navbar mt-3'><i className='fa fa-rocket custom-icon'></i></div>
                </div>
            </div>
        </div>
    );
}

export default Header;