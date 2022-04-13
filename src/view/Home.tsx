import React from 'react';
import { useNavigate } from 'react-router-dom';
import tradao from '../assets/tradao.png';
import logo from '../assets/logo_color.png';

function Home(props: any) {

  const router = useNavigate();

  const gotoDetail = () => {
    router('/detail/1');
  }

  return (
    <div className="wrapper-banner">
      <div className="bg-banner">
        <div className="d-flex justify-content-between">
        <div className='txt-header pt-1-5 pl-3 color-dark-333'>Ombee</div>
          <div className='txt-label-25 pt-2 color-dark-333 mr-2'>
            <i className='fa fa-phone custom-icon-35 mr-1'></i>
            +847 6355 7366
          </div>
        </div>
        <div className='pt-3 pl-11'>
          <div className='mt-1 txt-label-20 color-dark-333'>Ombee sẽ mang lại niềm vui cho bạn</div>
          <div className='mt-2 txt-label-100 color-main font-weight-700 d-flex'>
            <div><img src={logo} width="100px" height="100px" /></div>
            <div className='ml-1'>Ombee</div>
          </div>
          <div className='mt-2 txt-label-20 color-dark-333 w-40'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias temporibus
            fugit dignissimos ab obcaecati excepturi aut est nobis odit sapiente porro cumque corrupti, cum recusandae illum impedit nostrum tempora velit.</div>
          <div className='mt-3 txt-label-20 color-dark-333 w-30 d-flex justify-content-between'>
            <div>
              <div className='font-weight-700'>Trà Trái Cây</div>
              <div className='mt-05 color-grey'>20 loại</div>
            </div>
            <div>
              <div className='font-weight-700'>Trà Sữa</div>
              <div className='mt-05 color-grey'>15 loại</div>
            </div>
            <div>
              <div className='font-weight-700'>Coffee</div>
              <div className='mt-05 color-grey'>10 loại</div>
            </div>
          </div>
        </div>
      </div>
      <div className='position-buy-banner pl-11'>
        <div className='btn-buy-banner bg-color-main'>Hãy Đến Với Chúng Tôi</div>
      </div>
      <div className='group-product-hot-banner mt-5 w-35 pl-11 pt-7'>
        <div className="grid-product-hot-banner" onClick={gotoDetail}>
          <img className='image-product-hot-banner' src={tradao}/>
          <div className='text-product-hot-banner d-flex justify-content-between pr-1 pl-1'>
            <div className='font-weight-700'>Trà Đào</div>
            <div className='color-main' style={{ backgroundColor: '#fff', padding: '2px 12px', borderRadius: '20px'}}>Hot</div>
          </div>
        </div>
        <div className="grid-product-hot-banner">
          <img className='image-product-hot-banner' src={tradao}/>
          <div className='text-product-hot-banner d-flex justify-content-between pr-1 pl-1'>
            <div className='font-weight-700'>Trà Đào</div>
            <div className='color-main' style={{ backgroundColor: '#fff', padding: '2px 12px', borderRadius: '20px'}}>Hot</div>
          </div>
        </div>
        <div className="grid-product-hot-banner">
          <img className='image-product-hot-banner' src={tradao}/>
          <div className='text-product-hot-banner d-flex justify-content-between pr-1 pl-1'>
            <div className='font-weight-700'>Trà Đào</div>
            <div className='color-main' style={{ backgroundColor: '#fff', padding: '2px 12px', borderRadius: '20px'}}>Hot</div>
          </div>
        </div>
      </div>
      <div className="image-intro-banner">
        <img src={tradao} alt="" />
      </div>
      <div className='text-intro-banner font-weight-700 color-main'>Ombee</div>
    </div>
  );
}

export default Home;