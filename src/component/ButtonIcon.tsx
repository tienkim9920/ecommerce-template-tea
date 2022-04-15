import React from 'react';

function ButtonIcon(props: any) {

    const { width, text, icon } = props;

    return (
        <div className='d-flex justify-content-center btn-buy-detail bg-color-main' style={{ width: `${width}%`}}>
            <i className={icon} style={{ fontSize: '24px' }}></i>
            <div className='ml-1'>{text}</div>
        </div>
    );
}

export default ButtonIcon;