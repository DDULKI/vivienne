import React from 'react';
import './scss/notice_write.scss'

export default function NoticeWriteFormPageComponent() {

    const [state, setState] = React.useState({
        subject:'',
        contents:''
    })

    // 비구조화
    const {subject, contents} = state;

    const onSubmitWrite = (e)=>{
        e.preventDefault();
        // axios()
    }
    
    const onChangeSubject =(e)=>{
        setState({
            ...state,
            subject: e.target.value
        })
       
    }

    const onChangeContents =(e)=>{
        setState({
            ...state,
            contents: e.target.value
        })


        
    }
    return (
        <div id='noticeWrite'>
            <div className="container">
                <div className="gap">
                <div className="content">
                    <form action="" onSubmit={onSubmitWrite}>
                        <div className="top">
                                <div className="online-box">
                                    <ul>
                                        <li><h2 className='notice-title'>온라인 고객센터</h2></li>
                                        <li><h4 className='small-hand-writing'>비비안웨스트우드 공식스토어 고객센터입니다.</h4></li>
                                        <li><h4 className='small-hand-writing'>온라인판매 서비스에 대해서 궁금하신 사항을 질문하시면 신속하게 답변드리겠습니다. </h4></li>
                                    </ul>
                                </div>
                                <div className="cs-box">
                                    <ul>
                                        <li>
                                            <faHandHeart/>
                                            <h2 className='notice-title'>고객센터 : 1899-6407</h2>
                                        </li>
                                        <li><h4 className='small-hand-writing'>월요일 ~ 금요일 10:00 ~ 18:00</h4></li>
                                        <li><h4 className='small-hand-writing'>점심시간 12:30 ~ 13:30</h4></li>
                                    </ul>
                                </div>
                                <div className="cs-bottom-box">
                                    <ul>
                                        <li><h4 className='small-hand-writing'>시계 고객센터는 별도운영 031-737-4626</h4></li>
                                        <li><h4 className='small-hand-writing'>*선글라스의 경우 모든 상담업무가 불가.(수입품목에 해당하지 않음)</h4></li>
                                    </ul>
                                </div>
                        </div>
                        <div className="bottom">
                                <div className="left">
                                    <ul>
                                        <li><a href="!#">Home</a></li>
                                        <li><a href="!#">회원정보</a></li>
                                        <li><a href="!#">1:1문의</a></li>
                                        <li><a href="!#">공지사항</a></li>
                                        <li><a href="!#">주소록</a></li>
                                        <li><a href="!#">주문배송 조회</a></li>
                                        <li><a href="!#">마일리지</a></li>
                                        <li><a href="!#">쿠폰</a></li>
                                        <li><a href="!#">위시리스트</a></li>
                                    </ul>
                                </div>
                            <div className="right">
                                <div className="title">
                                    <h2>1:1문의</h2>
                                </div>
                                <div className="notice-box">
                                <ul>
                                    <li>
                                        <label htmlFor="subject">제목<i>*</i></label>
                                        <input 
                                            onChange={onChangeSubject}
                                            type="text" 
                                            name='subject' 
                                            id='subject' 
                                            value={subject} 
                                            placeholder='제목을 입력해 주세요.'
                                        />
                                    </li>
                                    <li>
                                        <label htmlFor="contents">내용<i>*</i></label>
                                        <textarea 
                                            onChange={onChangeContents}
                                            name="contents" 
                                            id="contents"
                                            value={contents} 
                                        >
                                        </textarea>
                                    </li>
                                </ul>
                                </div>
                                <div className="btn-box">
                                    <button ><a href="!#">문의하기</a></button>
                                    <button ><a href="!#">취소</a></button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                </div>
            </div>
        </div>
    );
};

