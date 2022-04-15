import React, { useState } from 'react';
import bgBanner from '../assets/bg-product-green-tea.jpg';
import logo from '../assets/logo_color.png';
import tradao from '../assets/tradao.png';
import Footer from '../component/Footer';
import Pagination from '../component/Pagination';

const TRASUA = 'TRASUA';
const TRATRAICAY = 'TRATRAICAY';
const COFFEE = 'COFFEE';

function Product() {

    const [category, setCategory] = useState<any>(TRASUA);

    const CHANGE_CATEGORY = (category: string) => {
        if (category === TRASUA) {
            return 'active-line-product';
        } else if (category === TRATRAICAY) {
            return 'active-line-product move-center-line'
        } else {
            return 'active-line-product move-right-line';
        }
    }

    return (
        <div className="wrapper-product">
            <div className="bg-banner-product">
                <div className="d-flex justify-content-between">
                    <div className='txt-header pt-1-5 pl-3 color-dark-333'>Ombee</div>
                    <div className='txt-label-25 pt-2 color-dark-333 mr-2'>
                        <i className='fa fa-phone custom-icon-35 mr-1'></i>
                        +847 6355 7366
                    </div>
                </div>
                <div className="pl-10 pt-2 img-banner-product">
                    <img src={bgBanner} />
                    <div className='group-information-banner-product'>
                        <div className="bg-information-banner-product">
                            <div className="p-2 color-main">
                                <div className='txt-label-50 font-weight-700'>Hãy cùng đồng hành với Ombee</div>
                                <div className='color-dark-333 mt-2' style={{ letterSpacing: '1px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi pariatur quo, officia, praesentium
                                    fuga possimus adipisci necessitatibus beatae odio veniam, perspiciatis dicta quaerat a modi ex eius sed aliquid non!</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-intro-banner-50 font-weight-700 color-second'>Ombee</div>

            <div className="mt-4">
                <div className='pt-2 txt-label-60 color-main font-weight-700 d-flex justify-content-center'>
                    <div><img src={logo} width="80px" height="80px" /></div>
                    <div className='ml-1'>Sản phẩm</div>
                </div>
                <div>
                    <div className="mt-3 d-flex justify-content-center color-dark-333">
                        <div className="txt-label-30 pl-5 pr-5 pb-1 cursor-pointer" onClick={() => setCategory(TRASUA)}>Trà Sữa</div>
                        <div className="txt-label-30 pl-5 pr-5 pb-1 cursor-pointer" onClick={() => setCategory(TRATRAICAY)}>Trà Trái Cây</div>
                        <div className="txt-label-30 pl-5 pr-5 pb-1 cursor-pointer" onClick={() => setCategory(COFFEE)}>Coffee</div>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <div className={CHANGE_CATEGORY(category)}></div>
                    </div>
                </div>
            </div>

            <div className="grid-page-products">
                <div className='box-page-product mt-9'>
                    <div className='pb-3 pl-3 pr-3'>
                        <div className='txt-label-30'>Trà Đào</div>
                        <div className='txt-label-20 mt-1'>30.000đ</div>
                    </div>
                    <div className='pos-image-page-product'><img src={tradao} width="300px" alt="" /></div>
                </div>
                <div className='box-page-product mt-9'>
                    <div className='pb-3 pl-3 pr-3'>
                        <div className='txt-label-30'>Trà Đào</div>
                        <div className='txt-label-20 mt-1'>30.000đ</div>
                    </div>
                    <div className='pos-image-page-product'><img src={tradao} width="300px" alt="" /></div>
                </div>
                <div className='box-page-product mt-9'>
                    <div className='pb-3 pl-3 pr-3'>
                        <div className='txt-label-30'>Trà Đào</div>
                        <div className='txt-label-20 mt-1'>30.000đ</div>
                    </div>
                    <div className='pos-image-page-product'><img src={tradao} width="300px" alt="" /></div>
                </div>
                <div className='box-page-product mt-9'>
                    <div className='pb-3 pl-3 pr-3'>
                        <div className='txt-label-30'>Trà Đào</div>
                        <div className='txt-label-20 mt-1'>30.000đ</div>
                    </div>
                    <div className='pos-image-page-product'><img src={tradao} width="300px" alt="" /></div>
                </div>
                <div className='box-page-product mt-9'>
                    <div className='pb-3 pl-3 pr-3'>
                        <div className='txt-label-30'>Trà Đào</div>
                        <div className='txt-label-20 mt-1'>30.000đ</div>
                    </div>
                    <div className='pos-image-page-product'><img src={tradao} width="300px" alt="" /></div>
                </div>
                <div className='box-page-product mt-9'>
                    <div className='pb-3 pl-3 pr-3'>
                        <div className='txt-label-30'>Trà Đào</div>
                        <div className='txt-label-20 mt-1'>30.000đ</div>
                    </div>
                    <div className='pos-image-page-product'><img src={tradao} width="300px" alt="" /></div>
                </div>
                <div className='box-page-product mt-9'>
                    <div className='pb-3 pl-3 pr-3'>
                        <div className='txt-label-30'>Trà Đào</div>
                        <div className='txt-label-20 mt-1'>30.000đ</div>
                    </div>
                    <div className='pos-image-page-product'><img src={tradao} width="300px" alt="" /></div>
                </div>
                <div className='box-page-product mt-9'>
                    <div className='pb-3 pl-3 pr-3'>
                        <div className='txt-label-30'>Trà Đào</div>
                        <div className='txt-label-20 mt-1'>30.000đ</div>
                    </div>
                    <div className='pos-image-page-product'><img src={tradao} width="300px" alt="" /></div>
                </div>
                <div className='box-page-product mt-9'>
                    <div className='pb-3 pl-3 pr-3'>
                        <div className='txt-label-30'>Trà Đào</div>
                        <div className='txt-label-20 mt-1'>30.000đ</div>
                    </div>
                    <div className='pos-image-page-product'><img src={tradao} width="300px" alt="" /></div>
                </div>
            </div>
            {/* <div className='mt-4'>
                <Pagination />
            </div> */}
            <Footer />
        </div>
    );
}

export default Product;