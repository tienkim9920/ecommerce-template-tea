import React, { useState } from 'react';
function Pagination() {
    return (
        <nav className="pagination-outer" aria-label="Page navigation">
            <ul className="pagination">
                <li className="page-item">
                    <a href="#" className="page-link" aria-label="Previous">
                        <span aria-hidden="true">«</span>
                    </a>
                </li>
                <li className="page-item"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item active"><a className="page-link" href="#">3</a></li>
                <li className="page-item"><a className="page-link" href="#">4</a></li>
                <li className="page-item"><a className="page-link" href="#">5</a></li>
                <li className="page-item">
                    <a href="#" className="page-link" aria-label="Next">
                        <span aria-hidden="true">»</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Pagination;