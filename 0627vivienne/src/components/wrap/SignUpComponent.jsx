import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router-dom';


export default function SignUpComponent () {

    const [state,setState] = React.useState({
        이메일 : '',
        이름 : '',
        휴대폰:'',
        발송인증번호: '',
        입력인증번호: '',
        비밀번호 : '',
        비밀번호확인: '',
        성별:'',
        생년월일:'',
        약관동의: [],
        약관 : [
            "sms수신",
            "뉴스레터구독",
            "이용약관에 동의합니다.",
            "개인 정보 보호 정책에 동의합니다."
        ],
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
        // 휴대폰 발송인증번호 받기 버튼 디세이블드 
        isHpdisabled: true, // 휴대폰 발송인증번호 받기 버튼 사용불가 (true)
        isHpdisabled2: false, // 휴대폰 인증번호 확인 버튼 사용불가 (true)
        isUserServiceError : false,
        isUserServiceMsg : '' 
    })

    const createRef = React.useRef();
   

    // 이메일 인증 
    const onChangeEmail = (e) => {
        const {value} = e.target;
        let isEmailError = false; 
        let isEmailMsg = '';

        if(value === ''){
            isEmailError = true;
            isEmailMsg = '필수 입력 항목입니다.';
        }
        else if(value !== ''){
            isEmailError = true;
            isEmailMsg = '이메일 형식이 올바르지 않습니다.';
        }
        setState({
            ...state,
            이메일 : value,
            isEmailError : isEmailError,
            isEmailMsg : isEmailMsg
        })
    }

    // 이름 인증 
    const onChangeName = (e) => {
        const {value} = e.target;
        let isNickError = false;
        let isNickMsg = '';

        const regExp1 = /^(.){2,16}$/g;

        if(value === ''){
            isNickError = true;
            isNickMsg = '필수 입력 항목입니다.';
        }
        else if(regExp1.test(value) === false){
            console.log("false");
            isNickError = true;
            isNickMsg = '2자 이상 입력해 주세요.';
        }
        setState({
            ...state,
            이름 : e.target.value,
            isNickError : isNickError,
            isNickMsg : isNickMsg 
        })
    }

    // 비밀번호 

    const onChangePw = (e) => {
        const {value} = e.target;
        let isPwError = false; 
        let isPwMsg = '';
        const regExp1 = /^(.){8,16}$/g;  // 패스워드가 8 ~ 16 사이 
        const regExp2 = /[A-Za-z0-9]+/g;
        const regExp3 = /\s/g; // 공백 포함? 

        if(value === ''){
            isPwError = true; 
            isPwMsg = '필수 입력 항목입니다.'
        }
        else if(regExp1.test(value) === false || regExp2.test(value) === false){
            isPwError = true; 
            isPwMsg = '비밀번호는 영문, 숫자를 포함하여 8자 이상이어야 합니다.'
        }
        else if(regExp3.test(value) === true){
            isPwError = true; 
            isPwMsg = '공백은 사용할 수 없습니다.'
        }
        setState({
            ...state,
            비밀번호 : value, 
            isPwError : isPwError,
            isPwMsg : isPwMsg 
        })
    }

    // 비밀번호 확인 
    const onChangePwOk = (e) => {
        const{value} = e.target;
        let isPw2Error = false;
        let isPw2Msg = '';

        if(value !== state.비밀번호){
            isPw2Error = true;
            isPw2Msg = '비밀번호가 일치하지 않습니다.';
        }
        else {
            isPw2Error = false;
            isPw2Msg = '';
        }
        setState({
            ...state,
            비밀번호확인 : e.target.value,
            isPw2Error : isPw2Error,
            isPw2Msg : isPw2Msg
        })
    }

    const onChangeBirth =(e)=>{
        setState({
            ...state,
            생년월일: e.target.value
        })
        
    }

    // 성별 
    const onChangeGender=(e)=>{
        setState({
            ...state,
            성별: e.target.value
        })
    }

    // 휴대폰번호 
    const onChangeHp=(e)=>{
        const regExp = /[^0-9]/g;
        let 휴대폰 = '';
        let isHpError = false;
        let isHpMsg = '';
        let isHpdisabled = true; 
        const {value} = e.target;

        휴대폰 = value.replace(regExp, '');

        if(휴대폰===''){
            isHpError=true;
            isHpMsg='휴대폰 번호를 입력해 주세요.'
        }
        else {
            isHpMsg=''
            if(휴대폰.length>=1){
                isHpdisabled = false;
            }
            else {
                isHpdisabled = true;
            }
        }

        setState({
            ...state,
            휴대폰: 휴대폰,
            isHpError: isHpError,
            isHpMsg: isHpMsg,
            isHpdisabled: isHpdisabled
        });
    }

    // 휴대폰 발송인증번호 받기 클릭 이벤트
   const onClickHpNum =(e)=>{
        e.preventDefault();
        const regExp = /^01[0-9]{1}[0-9]{3,4}[0-9]{4}$/;
        let num =0; 
        let 발송인증번호 = 0;

        if(regExp.test(state.휴대폰)===false){
            alert('잘못된 휴대폰 번호입니다. 확인 후 다시 시도해 주세요.');
        }
        else {
            // 발송인증번호 전송 타이밍 
            num = Math.floor(Math.random()*900000+100000);

            // 상태관리 변수에 발송인증번호 저장 
            발송인증번호 = num;
            alert(`발송인증번호가 발송되었습니다. ${num}`);
        }
        setState({
            ...state,
            발송인증번호: 발송인증번호 
        })
   }

   // 휴대폰 발송인증번호 확인 입력상자 onChange() 이벤트 
   const onChangeHp2 = (e) =>{
        const {value} = e.target;
        let isHpdisabled2 = true;
        
        if(value.length >=1) {
            isHpdisabled2 = false;
        }
        else {
            isHpdisabled2 = true;
        }
        setState({
            ...state,
            입력인증번호: value,
            isHpdisabled3: isHpdisabled2
        })
   }

   // 휴대폰 발송인증번호 확인 버튼 클릭 이벤트 
   const onClickHpNum2=(e)=>{
        e.preventDefault();
        let confirMsg ='';
        let isHp3 = true;
        let isHpdisabled = false;
        let 발송인증번호 = state.발송인증번호;
        let isHpOk = false;

        if(state.발송인증번호 === Number(state.입력인증번호)){
            confirMsg = "인증에 성공 하였습니다.";
            isHp3 = false;
            발송인증번호 = '';
            isHpdisabled = true;
            isHpOk = true;
        }
        else {
            confirMsg = "잘못된 인증 번호입니다.";
            isHp3 = true;
            발송인증번호 = state.발송인증번호;
            isHpdisabled = false;
        }
        setState({
            ...state,
            isHp3: isHp3,
            발송인증번호: 발송인증번호,
            isHpdisabled: isHpdisabled,
            isHpOk: isHpOk
        })
        alert(confirMsg);
   }

//    "sms수신",
//    "뉴스레터구독",
//    "이용약관에 동의합니다.",
//    "개인 정보 보호 정책에 동의합니다."

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
        if(약관동의.includes('이용약관에 동의합니다.')===false || 약관동의.includes('개인 정보 보호 정책에 동의합니다.')===false){
            isUserServiceError = true;
            isUserServiceMsg = '필수 항목에 동의해주세요.'
        }
        setState({
            ...state,
            약관동의 : 약관동의,
            isUserServiceError : isUserServiceError,
            isUserServiceMsg : isUserServiceMsg
        })
   }

    const onSubmitSignUp = (e) =>{
        e.preventDefault();

        let 약관동의 = '';
        state.약관동의.map((item, idx) => {
            if(idx===state.약관동의.length-1){
                약관동의 += item
            }
            else {
                약관동의 += item + ', '
            }
        })

        const formData = {
           "user_email": state.이메일,
           "user_name":state.이름,
           "user_pw": state.비밀번호,
           "user_gender":state.성별,
           "user_hp":state.휴대폰,
           "user_service":약관동의,
           "user_birth":state.생년월일
        }

        $.ajax({
            url:'http://localhost:8080/vivienne/signup_action.jsp',
            type:'POST',
            data:formData,
            success(res){
                console.log('AJAX 성공!');
                console.log(res);
                console.log(JSON.parse(res));
                window.location.href = '/signin'
            },
            error(err){
                console.log('AJAX 실패' + err);
            }
        })

    }

    return (
        <div id='SignUp'>
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h2>회원가입</h2>
                    </div>
                    <div className="content">
                        <form name='sign_up' id='signUp' method='post' action="" onSubmit={onSubmitSignUp}>
                            <div className="join">
                                <label className={`label_name ${state.isEmailError?'on':''}`} >이메일<i>*</i></label>
                                <input 
                                    type="email" 
                                    className='email_input' 
                                    id='userEmail' 
                                    name='user_email'
                                    placeholder='이메일 주소를 입력하세요.'
                                    onChange={onChangeEmail}
                                />
                            </div>
                            <div className="join">
                                <label className={`label_name ${state.isNickError?'on':''}`} htmlFor="">이름<i>*</i></label>
                                <input 
                                    type="text" 
                                    className='name_input' 
                                    id='userName' 
                                    name='user_name'
                                    placeholder='이름을 입력하세요.'
                                    onChange={onChangeName}
                                />
                                 <p className={`error-msg ${state.isNickError?'on':''}`}>{state.isNickMsg}</p>
                            </div>
                            <div className="join">
                                <label className={`label_name ${state.isPwError?'on':''}`}>비밀번호<i>*</i></label>
                                <input 
                                    type="password" 
                                    className='pw_input1' 
                                    id='userPw' 
                                    name='user_pw'
                                    placeholder='비밀번호를 입력하세요.'
                                    onChange={onChangePw}
                                />
                                <p className={`error-msg ${state.isPwError?'on':''}`}>{state.isPwMsg}</p>
                            </div>
                            <div className="join">
                                <label className={`label_name ${state.isPw2Error?'on':''}`} >비밀번호 확인<i>*</i></label>
                                <input 
                                    type="password" 
                                    className='pw_input1' 
                                    id='userPw2'
                                    name='user_pw2' 
                                    placeholder='비밀번호를 재입력하세요.'
                                    onChange={onChangePwOk}   
                                />
                                <p className={`error-msg ${state.isPw2Error?'on':''}`}>{state.isPw2Msg}</p>
                            </div>
                            <div className="gender">
                                <ul>
                                    <li>
                                        <div>
                                            <label className='label_name'>성별<i>*</i></label>
                                            <select onChange={onChangeGender} type="text" name="user_gender" id="userGender">
                                                <option value="선택안함">선택안함</option>
                                                <option value="남">남</option>
                                                <option value="여">여</option>
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
                                    ref={createRef}
                                />
                            <button className={`hp-num-btn ${state.isHpdisabled?'':' on'}`} onClick={onClickHpNum} disabled={state.isHpdisabled} type='button'>인증번호발송</button>
                            <p className={`error-msg${state.isHpError?' on':''}`}>{state.isHpMsg}</p>
                            </div>

                            {
                                state.발송인증번호!=='' && (
                                    <>
                                    <div className="join">
                                        <label className='label_name' htmlFor="">인증번호<i>*</i></label>
                                        <input 
                                            type="text" 
                                            maxLength={6}
                                            className='hp_ok' 
                                            id='userHpOk'
                                            name='user_hp_ok'
                                            placeholder='인증번호를 입력하세요.'
                                            onChange={onChangeHp2}
                                            value={state.휴대폰발송인증번호}
                                        />
                                    </div>
                                    <button className={`hp-num-btn${state.isHpdisabled2?' on':''}`} onClick={onClickHpNum2} disabled={state.isHpdisabled2}  type='button'>확인</button>
                                    </>
                                )
                            }

                            <div className="join">
                                
                                {/* <p className={`error-msg ${state.isUserServiceError}?'on':''`}>{state.isUserServiceMsg}</p>    */}
                            </div>
                            <div className="join">
                                <label className='label_name'>생년월일<i>*</i>
                                <input 
                                    type="text" 
                                    className='hp_ok' 
                                    id='userBirth'
                                    name='user_birth'
                                    onChange={onChangeBirth}
                                />
                                </label>
                            </div>
                            <div className="service">
                                <ul>
                                    <li><label className={`label_name${state.isUserServiceError?'on':''}`} >정보수신<i>*</i>
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
                                        <label className={`label_name${state.isUserServiceError?'on':''}`} >
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
                                        
                                        <label className={`label_name${state.isUserServiceError?'on':''}`}>
                                            <input 
                                                type="checkbox" 
                                                name='user_service'
                                                id='userService'
                                                value={'이용약관에 동의합니다.'}
                                                checked={state.약관동의.includes('이용약관에 동의합니다.')}
                                                onChange={onChangeUserService}
                                                />이용약관에 동의합니다.
                                        </label>
                                        <label className={`label_name${state.isUserServiceError?'on':''}`}>
                                            <input 
                                                type="checkbox" 
                                                name='user_service'
                                                id='userService1'
                                                value={'개인 정보 보호 정책에 동의합니다.'}
                                                checked={state.약관동의.includes('개인 정보 보호 정책에 동의합니다.')}
                                                onChange={onChangeUserService}
                                                />개인 정보 보호 정책에 동의합니다.
                                        </label>
                                        <p className={`error-msg ${state.isUserServiceError}?'on':''`}>{state.isUserServiceMsg}</p>               
                                    </li>
                                </ul>
                            </div>
                            <button className='hp-num-btn' type='submit'>회원가입</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

