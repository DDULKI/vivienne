import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
import $ from 'jquery';


export default function UpdateComponent () {

    const [state, setState] = React.useState({
        이메일: '',
        이름:'',
        비밀번호:'',
        비밀번호확인:'',
        성별:'',
        휴대폰:'',
        약관동의:[],
        약관: [
            "sms수신",
            "뉴스레터구독"
        ],
        생년월일:'',
        isLogin: false,
        isEmailError : false,
        isEmailMsg : '',
        isNickError : false,
        isNickMsg: '',
        isPwError : false,
        isPwMsg : '',
        isPw2Error : false, 
        isPw2Msg : '',
        isHpError: false,
        isHpMsg: '',
        isUserServiceError : false,
        isUserServiceMsg : '' 

    })

    // 이메일 
    const onChangeEmail = (e) => {
        const {value} = e.target;
        setState({
            ...state,
            이메일 : value
        })
    }
    const onChangeName = (e) => {
        const {value} = e.target;
        setState({
            ...state,
            이름: value
        })
      };

    //생년월일 
    const onChangeBirth = (e) => {
        const {value} = e.target;
        setState({
        ...state,
        생년월일 :value
        })
    }

    // 성별 
    const onChangeGender = (e) => {
        const {value} = e.target;
        setState({
          ...state,
          성별 : value
        })
    }
    
    // 비밀번호변경
    const onChangePw = (e) => {
        setState({
            ...state,
            비밀번호 : e.target.value
        })
    }

    // // 비밀번호확인 
    const onChangePwOk = (e) => {
        setState({
            ...state,
            비밀번호확인 : e.target.value
        })
    }
    
    const onChangeHp =(e)=>{
        setState({
            ...state,
            휴대폰: e.target.value
        })
    }

    // 수정 확인  클릭 
    // const onClickSubmit=(e)=>{
    //     window.location.pathname = '/';
    // }

    const getUserData = () => {
        const user_email = sessionStorage.getItem('user_email');
        const form_data = {
            "user_email" : user_email
        }

        $.ajax({
            url: 'http://localhost:8080/vivienne/update_getJoin_action.jsp',
            type: 'POST',
            data: form_data,
            dataType: 'json',
            success(res) {
                console.log('AJAX 성공');
                console.log(res.result);
            
                 // 세션에 값을 저장
                sessionStorage.setItem('user_email', res.result.이메일);

                setState({
                    ...state,
                    이메일 : res.result.이메일,
                    이름: res.result.이름,
                    비밀번호: res.result.비밀번호==="null"?'':res.result.비밀번호,
                    비밀번호확인: res.result.비밀번호확인==="null"?'':res.result.비밀번호확인,
                    성별 : res.result.성별==="null"?'':res.result.성별,
                    휴대폰: res.result.휴대폰==="null"?'':res.result.휴대폰,
                    약관동의: res.result.약관동의 ? res.result.약관동의.split(',').map(item => item.trim()) : [],
                    생년월일: res.result.생년월일
                   
                });
            },
            error(err){
                console.log('AJAX 실패!' + err);
            }
        });
    }

    React.useEffect(()=>{
        getUserData();
    },[])

    const onChangeUserService = (e) => {
        let isUserServiceError = false;
        let isUserServiceMsg = '';
        let 약관동의 = [];
        if(e.target.checked === true) {
            if(e.target.value === 'sms수신' && state.약관동의.includes('뉴스레터구독')===true){
                약관동의 = [...state.약관동의, 'sms수신'];                
            }
            else if(e.target.value === '뉴스레터구독' && state.약관동의.includes('sms수신') === true){
                약관동의 = [...state.약관동의, '뉴스레터구독'];
            }
            else if(e.target.value === 'sms수신' && state.약관동의.includes('뉴스레터구독') ===false){
                약관동의 = [...state.약관동의, 'sms수신', '뉴스레터구독'];
            }
            else if(e.target.value === '뉴스레터구독' && state.약관동의.includes('sms수신')===false) {
                약관동의 = [...state.약관동의, '뉴스레터구독', 'sms수신']
            }
            else {
                약관동의 = [...state.약관동의, e.target.value];
            }
        }
        else {
            if(e.target.value === 'sms수신'){
                약관동의 = state.약관동의.filter((item)=> item !== e.target.value && item !== '뉴스레터구독')
            }
            else {
                약관동의 = state.약관동의.filter((item)=> item !== e.target.value);
            }
        }

        setState(prevState => ({
            ...prevState,
            약관동의: 약관동의, // 배열로 업데이트
            isUserServiceError: isUserServiceError,
            isUserServiceMsg: isUserServiceMsg
          }));
   }

    const onSubmitUpdate =(e)=>{
        e.preventDefault();

        let 약관동의 = state.약관동의.join(', '); // 배열을 문자열로 변환
     

        const formData = {
            "user_email": state.이메일,
            "user_name": state.이름,
            "user_pw": state.비밀번호,
            "user_gender" : state.성별,
            "user_hp" : state.휴대폰,
            "user_service" : 약관동의,
            "user_birth" : state.생년월일
        }

        $.ajax({
            url: 'http://localhost:8080/vivienne/update_action.jsp',
            type: 'POST',
            data:formData,
            success(res){
                console.log('AJAX 성공!');
                console.log(res);
                console.log(JSON.parse(res));
                alert('회원 정보가 성공적으로 바뀌었습니다.');
                window.location.href='/mypage';
            },
            error(err){
                console.log('AJAX 실패!' + err);
            }
        });
    }

    return (
        <div id='SignUp'>
        <div className="container">
            <div className="gap">
                <div className="title">
                    <h2>회원정보 수정</h2>
                </div>
                <div className="content">
                    <form name='update_form' id='updateForm' action="" onSubmit={onSubmitUpdate}>
                        <div className="join">
                            <label className='label_name' htmlFor="">이메일<i>*</i></label>
                            <input 
                                type="email" 
                                className='email_input' 
                                id='userEmail' 
                                name='user_email'
                                onChange={onChangeEmail}
                                value={state.이메일}
                                disabled={true}
                            />
                             <p>이메일을 변경하시려면 운영자에게 메일을 보내주세요.</p>
                        </div>
                        <div className="join">
                            <label className='label_name' htmlFor="">이름<i>*</i></label>
                            <input 
                                type="text" 
                                className='name_input' 
                                id='userName' 
                                name='user_name'
                                onChange={onChangeName}
                                value={state.이름}
                                disabled={true}
                            />
                        </div>
                        <div className="join">
                            <label className='label_name'>비밀번호<i>*</i></label>
                            <input 
                                type="password" 
                                className='pw_input1' 
                                id='userPw' 
                                name='user_pw'
                                placeholder='비밀번호를 입력하세요.'
                                onChange={onChangePw}
                                value={state.비밀번호}
                            />
                        </div>
                        <div className="join">
                            <label className='label_name' >비밀번호 확인<i>*</i></label>
                            <input 
                                type="password" 
                                className='pw_input1' 
                                id='userPw2'
                                name='user_pw2' 
                                placeholder='비밀번호를 재입력하세요.'
                                onChange={onChangePwOk}
                            />
                        </div>
                        <div className="gender">
                            <ul>
                                <li>
                                    <div>
                                        <label className='label_name'>성별<i>*</i></label>
                                        <select onChange={onChangeGender} type="text" name="user_gender" id="userGender">
                                            <option value="선택안함">선택안함</option>
                                            <option checked={state.성별 === "남"} value="남">남</option>
                                            <option checked={state.성별 === "여"} value="여">여</option>
                                        </select>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="join">
                            <label className='label_name' htmlFor="">휴대폰번호<i>*</i></label>
                            <input 
                                type="text" 
                                className='hp' 
                                id='userHp' 
                                name='user_hp'
                                placeholder='번호를 입력하세요.'
                                onChange={onChangeHp}
                                value={state.휴대폰}
                            />
                        </div>
                        <div className="join">
                            <label className='label_name'>생년월일<i>*</i>
                            <input 
                                type="text" 
                                className='hp_ok' 
                                id='userBirth'
                                name='user_birth'
                                onChange={onChangeBirth}
                                value={state.생년월일}
                                disabled={true}
                            />
                            </label>
                        </div>
                        <div className="service">
                            <ul>
                                <li><label className='label_name'>정보수신<i>*</i>
                                    <input 
                                        type="checkbox" 
                                        className='check' 
                                        id='userService'
                                        name='user_service'
                                        value={'sms수신'}
                                        checked={state.약관동의.includes('sms수신')}
                                        onChange={onChangeUserService}
                                        /> sms수신
                                    </label>
                                    <label className='label_name'>
                                    <input 
                                        type="checkbox" 
                                        className='check' 
                                        id='userService'
                                        name='user_service'
                                        value={'뉴스레터구독'}
                                        checked={state.약관동의.includes('뉴스레터구독')}
                                        onChange={onChangeUserService}
                                        /> 뉴스레터구독
                                    </label>
                                </li>
                            </ul>
                        </div>
                        <div className="button-box">
                            <button className='hp-num-btn' type='submit'>확인</button>
                            <button className='hp-num-btn' type='submit'>회원탈퇴</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
};

