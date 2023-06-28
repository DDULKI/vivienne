import React from 'react';

import {Link,useLocation} from 'react-router-dom';
import './scss/signin.scss'
import $ from 'jquery';


export default function SigninComponent(){

    const location = useLocation();

    const [state, setState] = React.useState({
        이메일 : '',
        비밀번호 : ''
    })

    // 이메일 인증 
    const onChangeEmail = (e) => {
        const {value} = e.target;
        setState({
            ...state,
            이메일 : value
            
        })
    }

    const onChangePw = (e) => {
        const {value} = e.target;
        
        setState({
            ...state,
            비밀번호 : value
          
        })
    }

    const onSubmitSignin =(e)=>{
        e.preventDefault();
        const formData ={
            "user_email" : state.이메일,
            "user_pw":state.비밀번호
        }

        $.ajax({
            url: 'http://localhost:8080/vivienne/signin_action.jsp',
            type: 'POST',
            data:formData,
            dataType: 'json',
            success(res){
                console.log('AJAX 성공!');
                console.log(res.result);
                if(res.result === '1'){
                    // session에 이메일 저장 
                    sessionStorage.setItem('user_email', state.이메일);
                    // main으로 이동 
                    window.location.href='/';
                }
                else if(res.result === '0'){
                    alert('비밀번호를 확인해 주세요!');
                }
                else {
                    alert('이메일을 확인해 주세요!');
                }
            },
            error(err){
                console.log('AJAX 실패!' + err);
            }
        })
    }

    return (
        
        <div id='signin'>
            <div className="container">
                <div className="content">
                    <form action="" id='login-form' className='vivienne-login-form' onSubmit={onSubmitSignin}>
                        <div className="left">
                        <ul>
                            <li><h3 className='title1'>처음신가요?</h3></li>
                            <li><p className='title2'>비비안웨스트우드 회원으로 가입하시면, 빠르고 편리하게 이용하실 수 있습니다.</p></li>
                        </ul>
                        <button><Link to='/signup' className={location.pathname==='/signup'?'on':''} >회원가입</Link></button>
                        </div>
                        <div className="right">
                            <ul>
                                <li><h3 className='title1'>로그인</h3></li>
                                <li><p className='title2'>로그인을 위해 이메일주소와 비밀번호를 입력해 주십시오.</p></li>
                            </ul>
                            <div className="login-box">
                                <ul>
                                    <li>
                                        <input 
                                            className='email' 
                                            type="email" 
                                            name='user_email' 
                                            id='userEmail' 
                                            placeholder='Email*' 
                                            onChange={onChangeEmail}
                                        />
                                    </li>
                                    <li>
                                        <input 
                                            className='email' 
                                            type="password" 
                                            name='user_pw' 
                                            id='userPw' 
                                            placeholder='Password*' 
                                            onChange={onChangePw}
                                        />
                                    </li>
                                </ul>

                            </div>
                            <div className="right-bottom">
                                <label htmlFor="">
                                    <input type="checkbox" name='stay_logged_in'id='stayLoggedIn'/>로그인 상태 유지
                                </label>
                            </div>
                            <div className="btn-box">
                                <button type='submit'>로그인</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

