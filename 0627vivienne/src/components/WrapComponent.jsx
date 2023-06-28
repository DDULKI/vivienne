import React from 'react';
import {HashRouter, BrowserRouter, Routes, Route}  from 'react-router-dom';
import TopModalComponent from './wrap/TopModalComponent';
import MainComponent from './wrap/MainComponent';
import SignUpComponent from './wrap/SignUpComponent';
import FooterComponent from './wrap/FooterComponent';
import SigninComponent from './wrap/SigninComponent';
import MypageComponent from './wrap/mypage/MypageComponent';
import UpdateComponent from './wrap/mypage/UpdateComponent';
import NoticeComponent from './wrap/my_sub_bbs/NoticeComponent';
import NoticeWriteFormPageComponent from './wrap/my_sub_bbs/NoticeWriteFormPageComponent';
import MypageHomeComponent from './wrap/mypage/MypageHomeComponent';

export default function WrapComponent(){


    return (
        <div id="wrap">
            <TopModalComponent/>
            <HashRouter>
                <Routes>
                    <Route path='/*' element={<MainComponent/>}/>
                    <Route path='/signup' element={<SignUpComponent/>}/>
                    <Route path='/signin' element={<SigninComponent/>}/>
                    <Route path='/update' element={<UpdateComponent/>}/>
                    <Route path='/mypage' element={<MypageComponent/>}/>
                    <Route path='/notice' element={<NoticeComponent/>}/>
                    <Route path='/notice_form' element={<NoticeWriteFormPageComponent/>}/>
                    <Route path='/mypage_home' element={<MypageHomeComponent/>}/>
                </Routes>
            </HashRouter>
            <FooterComponent/>
            
        </div>
    );
};