import React from 'react';

function CategorySize(props: any) {

    const { data, width, category } = props;

    return (
        <div className={`mt-3 txt-label-20 color-dark-333 w-${width} d-flex justify-content-between`}>
            {
                category === 'size' ? data.map((item: any) => (
                    <div key={item.id}>
                        <div className='font-weight-700'>{item.name}</div>
                        <div className='mt-05 color-grey'>{item.price}</div>
                    </div>
                )) : data.map((item: any) => (
                    <div key={item.id}>
                        <div className='font-weight-700'>{item.name}</div>
                        <div className='mt-05 color-grey'>{item.countProduct}</div>
                    </div>
                ))
            }
        </div>
    );
}

export default CategorySize;