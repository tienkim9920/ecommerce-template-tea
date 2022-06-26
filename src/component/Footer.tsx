import React from 'react';

function Footer() {
    return (
        <div className="wrapper-footer pt-3 pb-3 pr-9 pl-9">
            <div className="group-footer">
                <div>
                    <h2 className="footer-title txt-label-25">Giới thiệu</h2>
                    <div className='txt-label-18'>Đây là cửa hàng trà sữa chuyên phục vụ</div>
                    <div className='txt-label-18'>khách hàng trong TP. Quy Nhơn</div>
                    <div className="pt-3">
                        <img style={{ width: '180px' }} src="//theme.hstatic.net/200000232135/1000682292/14/logo_bct.png?v=274" alt="Bộ Công Thương" />
                    </div>
                </div>
                <div className="lienket">
                    <h2 className="footer-title txt-label-25">Liên kết</h2>
                    <li className='txt-label-18'>Trang chủ</li>
                    <li className='txt-label-18'>Sản phẩm</li>
                </div>
                <div className="lienhe">
                    <h2 className="footer-title txt-label-25">Thông tin liên hệ</h2>
                    <li className='d-flex mt-1'>
                        <i className="fa fa-map-marker txt-label-18"></i>
                        <div className='ml-1 txt-label-18'>16 Nguyễn Nghiêm, TP. Quy Nhơn</div>
                    </li>
                    <li className='d-flex mt-1'><i className="fa fa-phone txt-label-18"></i><div className='ml-1 txt-label-18'>+847 6355 7366</div></li>
                    <li className='d-flex mt-1'><i className="fa fa-location-arrow txt-label-18"></i><div className='ml-1 txt-label-18'>tienkim9920@gmail.com</div></li>
                </div>
                <div className="fanpage">
                    <h2 className="footer-title txt-label-25">Fanpage</h2>
                    <div>
                        <a className='txt-label-18'>Ombee</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;