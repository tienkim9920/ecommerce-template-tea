import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import tradao from '../assets/tradao.png';
import logo from '../assets/logo_color.png';
import ButtonIcon from '../component/ButtonIcon';
import CategorySize from '../component/CategorySize';
import Footer from '../component/Footer';

function Home(props: any) {

  const router = useNavigate();

  const gotoDetail = () => {
    router('/detail/1');
  }

  const [categoryTemp, setCategoryTemp] = useState<any>([
    {
      id: 1,
      name: 'Trà Trái Cây',
      countProduct: '20 loại',
    },
    {
      id: 2,
      name: 'Trà Sữa',
      countProduct: '15 loại',
    },
    {
      id: 3,
      name: 'Coffee',
      countProduct: '10 loại',
    },
  ]);

  const [sizeTemp, setSizeTemp] = useState<any>([
    {
      id: 1,
      name: 'Nhỏ',
      countProduct: '30.000đ',
    },
    {
      id: 2,
      name: 'Vừa',
      countProduct: '35.000đ',
    },
    {
      id: 3,
      name: 'Lớn',
      countProduct: '40.000đ',
    },
  ]);

  return (
    <div className="wrapper-banner">
      <div className="bg-banner">
        <div className="d-flex justify-content-between">
          <div className='txt-header pt-1-5 pl-3 color-dark-333'>Ombee</div>
          <div className='d-flex txt-label-25 pt-2 color-dark-333 mr-2'>
            <i className='fa fa-phone custom-icon-35'></i>
            <div>+847 6355 7366</div>
          </div>
        </div>
        <div className='pt-1 pl-9'>
          <div className='txt-label-20 color-dark-333'>Ombee sẽ mang lại niềm vui cho bạn</div>
          <div className='mt-2 txt-label-70 color-main font-weight-700 d-flex'>
            <div><img src={logo} className='logo-title-banner-home' /></div>
            <div className='ml-1'>Ombee</div>
          </div>
          <div className='mt-1 txt-label-18 color-dark-333 w-70'>Ombee của chúng tôi sẽ phục vụ bạn mọi lúc mọi nơi và mang
          lại cho bạn một cảm giác rất mới lạ với những hương vị trà sữa khác nhau.</div>
          <CategorySize data={categoryTemp} width={35} category={'product'} />
        </div>
      </div>
      <div className='position-buy-banner pl-9'>
        <div className='btn-buy-banner bg-color-main'>Hãy Đến Với Chúng Tôi</div>
      </div>
      <div className='group-product-hot-banner w-40 pl-9 pt-6'>
        <div className="grid-product-hot-banner" onClick={gotoDetail}>
          <img className='image-product-hot-banner' src={tradao} />
          <div className='text-product-hot-banner d-flex justify-content-between pr-1 pl-1'>
            <div className='font-weight-700'>Trà Đào</div>
            <div className='color-main' style={{ backgroundColor: '#fff', padding: '2px 12px', borderRadius: '20px' }}>Hot</div>
          </div>
        </div>
        <div className="grid-product-hot-banner">
          <img className='image-product-hot-banner' src={tradao} />
          <div className='text-product-hot-banner d-flex justify-content-between pr-1 pl-1'>
            <div className='font-weight-700'>Trà Đào</div>
            <div className='color-main' style={{ backgroundColor: '#fff', padding: '2px 12px', borderRadius: '20px' }}>Hot</div>
          </div>
        </div>
        <div className="grid-product-hot-banner">
          <img className='image-product-hot-banner' src={tradao} />
          <div className='text-product-hot-banner d-flex justify-content-between pr-1 pl-1'>
            <div className='font-weight-700'>Trà Đào</div>
            <div className='color-main' style={{ backgroundColor: '#fff', padding: '2px 12px', borderRadius: '20px' }}>Hot</div>
          </div>
        </div>
      </div>
      <div className="image-intro-banner">
        <img src={tradao} />
      </div>
      <div className="bg-image-reason mt-5 pl-6 pr-6 pt-3 pb-3">
        <div className='txt-label-20 text-center' style={{ fontStyle: 'italic' }}>
          <h2>Tại sao chọn <span className='color-main'>Ombee</span></h2>
        </div>
        <div className="d-flex justify-content-center mt-3">
            <div className="text-center">
              <img className="w-30" src="//theme.hstatic.net/200000232135/1000682292/14/img_item_support_home_1.png?v=274" alt="Giao hàng nhanh chóng" />
              <div className="support-text">
                <h2>Giao hàng nhanh chóng</h2>
                <span>Giao hàng từ 15-20 phút kể từ lúc đặt hàng</span>
              </div>
            </div>
            <div className="text-center">
              <img className="w-30" src="//theme.hstatic.net/200000232135/1000682292/14/img_item_support_home_2.png?v=274" alt="Sản phẩm chất lượng" />
              <div className="support-text">
                <h2>Sản phẩm chất lượng</h2>
                <span>Đóng gói cẩn thận, gọn gàng khi đến tay khách hàng</span>
              </div>
            </div>
            <div className="text-center">
              <img className="w-30" src="//theme.hstatic.net/200000232135/1000682292/14/img_item_support_home_3.png?v=274" alt="Hỗ trợ 24/7" />
              <div className="support-text">
                <h2>Hỗ trợ 24/7</h2>
                <span>Hỗ trợ và lắng nghe ý kiến khác hàng</span>
              </div>
            </div>
        </div>
      </div>
      <div className='grid-group-products mt-3 pl-9 pr-9'>
        <div className="group-products-left border-top-right d-flex justify-content-center">
          <img className='mt-3' src={tradao} width="90%" height="85%" />
        </div>
        <div className="group-products-right margin-gridText-text-left">
          <div className='txt-label-40 color-dark-333'>Trà Đào</div>
          <div className="txt-label-18 mt-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem aut libero dicta eligendi debitis beatae possimus?
            Unde fuga autem, vel aspernatur quo, soluta quisquam, exercitationem in dignissimos porro doloremque rem.
          </div>
          <CategorySize data={sizeTemp} width={80} category={'product'} />
          <div className='mt-2'>
            <ButtonIcon width="70" text="Xem chi tiết" icon="fa fa-eye" />
          </div>
        </div>
      </div>
      <div className='grid-group-products mt-3 pl-9 pr-9'>
        <div className="group-products-right margin-gridText-text-right">
          <div className='txt-label-40 color-dark-333'>Trà Đào</div>
          <div className="txt-label-18 mt-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem aut libero dicta eligendi debitis beatae possimus?
            Unde fuga autem, vel aspernatur quo, soluta quisquam, exercitationem in dignissimos porro doloremque rem.
          </div>
          <CategorySize data={sizeTemp} width={80} category={'product'} />
          <div className='txt-label-18 mt-2'>
            <ButtonIcon width="70" text="Xem chi tiết" icon="fa fa-eye" />
          </div>
        </div>
        <div className="group-products-left border-top-left d-flex justify-content-center">
          <img className='mt-3' src={tradao} width="90%" height="85%" />
        </div>
      </div>
      <div className='grid-group-products mt-3 pl-9 pr-9'>
        <div className="group-products-left border-top-right d-flex justify-content-center">
          <img className='mt-3' src={tradao} width="90%" height="85%" />
        </div>
        <div className="group-products-right margin-gridText-text-left">
          <div className='txt-label-40 color-dark-333'>Trà Đào</div>
          <div className="txt-label-18 mt-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem aut libero dicta eligendi debitis beatae possimus?
            Unde fuga autem, vel aspernatur quo, soluta quisquam, exercitationem in dignissimos porro doloremque rem.
          </div>
          <CategorySize data={sizeTemp} width={80} category={'product'} />
          <div className='mt-2'>
            <ButtonIcon width="70" text="Xem chi tiết" icon="fa fa-eye" />
          </div>
        </div>
      </div>
      <div className='bg-about-product'>
        <div className='pt-3 txt-label-60 color-main font-weight-700 d-flex justify-content-center'>
          <div><img src={logo} width="80px" height="90px" /></div>
          <div className='mt-1 ml-1'>Ombee</div>
        </div>
        <div className='mt-2 txt-label-40 color-dark-333 d-flex justify-content-center'>Phục vụ toàn thành phố Quy Nhơn</div>
        <div className='mt-2 d-flex justify-content-center'>
          <div className='mt-3 txt-label-20 color-dark-333 w-50 d-flex justify-content-between'>
            <div className='text-center'>
              <div className='txt-label-50 font-weight-700'>1000+</div>
              <div className='mt-05 color-grey'>Khách hàng</div>
            </div>
            <div className='text-center'>
              <div className='txt-label-50 font-weight-700'>2000+</div>
              <div className='mt-05 color-grey text-center'>Lượt tìm kiếm hàng tháng</div>
            </div>
            <div className='text-center'>
              <div className='txt-label-50 font-weight-700'>3000+</div>
              <div className='mt-05 color-grey'>Theo dõi Fanpage</div>
            </div>
          </div>
        </div>
      </div>
      <div className='text-intro-banner font-weight-700 color-main'>Ombee</div>
      <Footer />
    </div>
  );
}

export default Home;