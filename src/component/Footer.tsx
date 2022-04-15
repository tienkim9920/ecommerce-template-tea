import React from 'react';
import logo from '../assets/logo_color.png';

function Footer() {
    return (
        <div className="wrapper-footer">
            <div className="d-flex justify-content-evenly">
                <div>
                    <h2 className="footer-title">Giới thiệu</h2>
                    <span>Đây là cửa hàng trà sữa chuyên phục vụ khách hàng trong TP. Quy Nhơn</span>
                    <div className="pt-3">
                        <img style={{ width: '180px' }} src="//theme.hstatic.net/200000232135/1000682292/14/logo_bct.png?v=274" alt="Bộ Công Thương" />
                    </div>
                </div>
                <div className="lienket">
                    <h2 className="footer-title">Liên kết</h2>
                    <li>Trang chủ</li>
                    <li>Sản phẩm</li>
                </div>
                <div className="lienhe">
                    <h2 className="footer-title">Thông tin liên hệ</h2>
                    <li className='d-flex mt-1'><i className="fa fa-map-marker txt-label-30"></i><div className='ml-1'>16 Nguyễn Nghiêm, Phương Quang Trung, TP.Quy Nhơn</div></li>
                    <li className='d-flex mt-1'><i className="fa fa-phone txt-label-30"></i><div className='ml-1'>+847 6355 7366</div></li>
                    <li className='d-flex mt-1'><i className="fa fa-location-arrow txt-label-30"></i><div className='ml-1'>tienkim9920@gmail.com</div></li>
                </div>
                <div className="fanpage">
                    <h2 className="footer-title">Fanpage</h2>
                    <div>
                        <a className='txt-label-50'>Ombee</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;