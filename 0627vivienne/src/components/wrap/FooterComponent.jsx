import React from 'react';
import { useState, useEffect } from 'react';

export default function FooterComponent(){


    

    return (
        <footer id="footer">
            <div className="row1">
                <div className="container">
                        <div className="content">
                            <div className="left">
                                <ul>
                                    <li><a href="!#"><h3>고객센터</h3></a></li>
                                    <li><a href="!#"><h3>배송안내</h3></a></li>
                                    <li><a href="!#"><h3>반품 및 교환</h3></a></li>
                                    <li><a href="!#"><h3>배송조회</h3></a></li>
                                    <li><a href="!#"><h3>1:1문의하기</h3></a></li>
                                    <li><a href="!#"><h3>공지사항</h3></a></li>
                                    <li><a href="!#"><h3>F & Q</h3></a></li>
                                    <li><a href="!#"><h3>매장안내</h3></a></li>
                                </ul>
                            </div>
                            <div className="right">
                                <ul>
                                    <li>
                                        <div className="news">
                                            <label htmlFor="userNews">뉴스레터 구독</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="email">
                                            <input type="email" name='user_email' id='userEmail' placeholder='E-MAIL 주소*' maxLength={"50"}/> <span><button>구독하기<i>*</i></button></span> 
                                        </div>
                                    </li>
                                    <li>
                                        <div className="service">
                                            <label>
                                                <input type="checkbox" name='user_service_1' id='userService1' /><span>개인정보 수집 및 이용에 동의합니다.*</span>
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="gender">
                                            <label><input type="radio" name='user_gender' id='userFemale' /> WOMAN</label>
                                            <label><input type="radio" name='user_gender' id='userMale' /> MAN</label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="service2">
                                            <a href="!#">개인정보취급방침</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="find_us_on">
                                            <p>FIND US ON:</p>
                                            {/* <ul className="l-footer_social-list">
                                                <li className="l-footer_social-item">
                                                    <a className="" href="https://www.instagram.com/" target="_blank">
                                                        <InstagramLogo />
                                                    </a>
                                                </li>
                                                <li className="l-footer_social-item">
                                                    <a className="l-footer_social-link" href="https://www.facebook.com/" target="_blank">
                                                        <FacebookLogo />
                                                    </a>
                                                </li>
                                            </ul> */}
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                </div>
            </div>
            <div className="row2">
                <div className="container">
                    <div className="content">
                        <p>
                            지인터내셔날(주)<i>|</i> 서울특별시 강남구 논현로133길 13, 2층(논현동,권훈빌딩) <i>|</i>
                            사업자 등록번호 211-88-72607 <i>|</i> 통신판매업신고번호 : 제 2015-서울강남-01560호<br/>
                            대표:정철하 <i>|</i> 고객센터:1899-6407 <i>|</i> FAX:02-3015-6449 <i>|</i> 개인정보책임자:정철하
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};