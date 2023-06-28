import React from 'react';

export default function TopModalComponent() {
    return (
        <div id='topModal'>
            <div className="container">
                <div className="slide-container">
                    <div className="slide-view">
                        <ul className="slide-wrap">
                            <li className="slide slide1_1">
                                <h1>
                                    <a href="!#">신규가입 1만원 감사 쿠폰 증정</a>
                                </h1>
                            </li>
                            <li className="slide slide1_2">
                                <h2>
                                    <a href="!#">전상품 무료배송 & 무료 선물 포장재 제공 서비스</a>
                                   
                                </h2>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="page-btn-box">
                    <span><a href="!#" className='page-btn blind on'>1</a></span>
                    <span><a href="!#" className='page-btn blind '>2</a></span>
                </div>
               
            </div>
        </div>
    );
};