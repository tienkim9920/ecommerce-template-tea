import React from 'react';

function Home() {
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
        <div className='pt-3 pl-8'>
          <div className='mt-1 txt-label-20 color-dark-333'>Ombee sẽ mang lại niềm vui cho bạn</div>
          <div className='mt-2 txt-label-100 color-main font-weight-700'>Ombee</div>
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
      <div className='position-buy-banner pl-8'>
        <div className='btn-buy-banner bg-color-main'>Hãy Đến Với Chúng Tôi</div>
      </div>
    </div>
  );
}

export default Home;