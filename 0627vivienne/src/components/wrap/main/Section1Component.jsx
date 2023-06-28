import React from 'react';
import $ from 'jquery';
import { Link, useLocation } from 'react-router-dom';



export default function Section1Component(){

    const [state, setState] = React.useState({
        isLogin : false,
        이름:''
    });
    


    const location = useLocation();

    React.useEffect(()=>{
        const stored_email = sessionStorage.getItem('user_email');
        let isLogin = false;

        // 로그인이 된 상태
        if(stored_email !== null){
            isLogin = true;
        }
        // 로그인이 안된 상태 
        else {
            isLogin = false;
        }
        setState({
            ...state,
            isLogin :isLogin, 
        })
    },[])

    const onClickLogout = (e) =>{
        e.preventDefault();
        sessionStorage.removeItem('user_email');
        setState({
            ...state,
            isLogin: false
        })
        window.location.href="/";
    }

    const getUserData = async () => {
        try {

            const user_email = sessionStorage.getItem('user_email');
            const form_data = {
                "user_email": user_email 
            };
        
            
        const res = await $.ajax ({
            url :'http://localhost:8080/vivienne/update_getJoin_action.jsp',
            type: 'POST',
            data: form_data,
            dataType: 'json'
        })
        console.log('AJAX 성공!');
        console.log(res.result);// 결과 데이터 출력 
           
        setState((prevState) => ({
            ...prevState,
            이름: res.result.이름 === "null" ? '' : res.result.이름
          }));
        } catch (err) {
            console.log('AJAX 실패' + err);
        }
        
    }

    React.useEffect(()=>{
        getUserData();
    },[])


    // React.useEffect(()=>{
    //     // 헤더영역에 .right의 위에서 .right의 offset().top 포지션 스크롤탑값이 도달시 
    //     // .left, .center 에 on 클래스를 추가해라
    //     // const rightTop = $('#section1 .right').offset().top
    //     $(window).scroll(function(){

    //         // console.log(rightTop);
    //         // console.log($(window).scrollTop());
    //         if($(window).scrollTop()>=rightTop){
    //             $('#section1 .left, #secition1 .center').addClass('on');
    //         }
    //         else {
    //             $('#section1 .left, #section1 .center').removeClass('on');
    //         }
    //     });

    // },[]);

    return (
        <section id="section1">
            <div className="container">
                <div className="gap">
                    <div className="content">
                        <div className="left">
                            <ul>
                                <li><h4>신상품</h4></li>
                                <li><h4>여성</h4></li>
                                <li><h4>남성</h4></li>
                                <li><h4>선물</h4></li>
                                <li><h4>SALE</h4></li>
                                <li><h4>COLLECTIONS</h4></li>
                            </ul>
                        </div>
                        <div className="center">
                            <a href="!#" title="HOME"><img src="./img/logo.svg" alt="" /></a>
                        </div>
                        <div className="title">
                            <ul>
                                <li><h2>THE NEW COLLECTION</h2></li>
                                <li><a href="!#" title="HOME"><img src="./img/curve-shop-woman.svg" alt="" /></a></li>
                            </ul>
                        </div> 
                        {
                            state.isLogin && (
                            <div className="right">
                                <ul>
                                    <li><span class="material-symbols-outlined" type="search" placeholder="검색" >search</span></li>
                                    <li><h4>배송조회</h4></li>
                                    <li>
                                        <Link to="/mypage" className={location.pathname === '/mypage' ? 'on' : ''}>
                                        {state.user_email} <a href="!#">{state.이름}</a> 개인정보
                                        </Link>
                                    </li>
                                    <li><a href="!#" onClick={onClickLogout}>로그아웃</a></li>
                                    <li><h4>쇼핑백 </h4></li>
                                </ul>
                            </div>
                            )
                        }
                        {

                            !state.isLogin && (
                            <div className="right">
                                <ul>
                                    <li><span class="material-symbols-outlined" type="search" placeholder="검색" >search</span></li>
                                    <li><h4>배송조회</h4></li>
                                    <li>
                                        <Link to="/signin" className={location.pathname==='/signin'?'on':''}>로그인</Link>
                                    </li>
                                    <li>
                                        <Link to="/signup" className={location.pathname==='/signup'?'on':''} >회원가입</Link>
                                    </li>
                                    <li><h4>쇼핑백 </h4></li>
                                </ul>
                            </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};