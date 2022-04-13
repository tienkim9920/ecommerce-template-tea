import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo_color.png';
import tradao from '../assets/tradao.png';

function DetailProduct() {

  const router = useNavigate();

  const [count, setCount] = useState<any>(1);

  const goBack = () => {
    router(-1);
  }

  const downCount = () => {
    if (count === 1){
      return;
    }
    setCount(count - 1);
  }

  const upCount = () => {
    if (count === 20){
      setCount(1);
      return;
    }
    setCount(count + 1);
  }

  return (
    <div className="wrapper-detail-product">
      <div className="bg-banner-detail">
        <div className="d-flex justify-content-between">
          <div className='txt-header pt-1-5 pl-3 color-dark-333' onClick={goBack}>Ombee</div>
          <div className='txt-label-25 pt-2 color-dark-333 mr-2'>
            <i className='fa fa-phone custom-icon-35 mr-1'></i>
            +847 6355 7366
          </div>
        </div>
        <div className="pl-10 pt-5">
          <i className='fa fa-long-arrow-left custom-icon' onClick={goBack}></i>
        </div>
        <div className="pl-10 pt-2">
          <div className='txt-label-80 color-main font-weight-700 d-flex mt-1'>
            <div><img src={logo} width="80px" height="80px" /></div>
            <div className='ml-1'>Trà Đào</div>
          </div>
          <div className='w-50 txt-label-20 mt-2 color-dark-333'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, repellat sequi explicabo dolor consectetur
            quam velit debitis! Voluptate aliquid ullam omnis, voluptatum pariatur obcaecati, blanditiis tempora necessitatibus voluptatibus cupiditate optio?
          </div>
          <div className='mt-3 txt-label-20 color-dark-333 w-30 d-flex justify-content-between'>
            <div>
              <div className='font-weight-700'>Nhỏ</div>
              <div className='mt-05 color-grey'>30.000đ</div>
            </div>
            <div>
              <div className='font-weight-700'>Vừa</div>
              <div className='mt-05 color-grey'>35.000đ</div>
            </div>
            <div>
              <div className='font-weight-700'>Lớn</div>
              <div className='mt-05 color-grey'>40.000đ</div>
            </div>
          </div>
          <div className='mt-3 txt-label-20 color-dark-333 d-flex'>
            <div>Chọn size: </div>
            <label className="group-size ml-3 d-flex">
              <i className='fa fa-dot-circle-o color-main' style={{ fontSize: '32px' }}></i>
              <div className='ml-1 mt-025'>Nhỏ</div>
            </label>
            <label className="group-size ml-3 d-flex">
              <i className='fa fa-circle-o color-main' style={{ fontSize: '32px' }}></i>
              <div className='ml-1 mt-025'>Vừa</div>
            </label>
            <label className="group-size ml-3 d-flex">
              <i className='fa fa-circle-o color-main' style={{ fontSize: '32px' }}></i>
              <div className='ml-1 mt-025'>Lớn</div>
            </label>
          </div>
          <div className='mt-3 txt-label-20 color-dark-333 d-flex'>
            <div className='mt-075'>Số lượng: </div>
            <div className='ml-3 d-flex'>
              <div className='btn-count-detail' onClick={downCount}>
                <i className='fa fa-minus mt-025' style={{ fontSize: '28px', color: 'white' }}></i>
              </div>
              <div className='d-flex justify-content-center' style={{ width: '100px', backgroundColor: '#e2e2e2' }}>
                <div className='mt-075'>{count}</div>
              </div>
              <div className='btn-count-detail' onClick={upCount}>
                <i className='fa fa-plus mt-025' style={{ fontSize: '28px', color: 'white' }}></i>
              </div>
            </div>
          </div>
          <div className='mt-3'>
            <div className='d-flex justify-content-center btn-buy-detail bg-color-main'>
              <i className='fa fa-shopping-bag' style={{ fontSize: '24px'}}></i>
              <div className='ml-1'>Thêm vào giỏ hàng</div>
            </div>
          </div>
        </div>
      </div>
      <div className="image-intro-detail">
        <img src={tradao} />
      </div>
      <div className='text-intro-banner font-weight-700 color-main'>Ombee</div>
    </div>
  );
}

export default DetailProduct;