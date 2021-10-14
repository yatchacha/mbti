import React, { useState } from 'react';
import TemplateHeader from './Template/Header.js';
import TemplateFooter from './Template/Footer.js';
import Mbti from './Mbti.js';
import axios from 'axios';
import '../Style/Home.css';

const Home = () => {

  const fetchData = axios.get('http://api.yatchacha.com/mbti/user')
  .then((Response)=>{
    if (Response.data.result === 'success') {
      console.log('success');
    } else {
      console.log('fail');
    }
    console.log(Response.data);
  }).catch((Error)=>{
    console.log(Error);
  });

  function loadData() {

  }

  return (
    <div className="totalWrapper">
      <TemplateHeader />
      <div className="wrapperOuter">
        <div className="mbtiWrapper">
          <Mbti mbti="ISTJ" />
          <Mbti mbti="ISFJ" />
          <Mbti mbti="INFJ" />
          <Mbti mbti="INTJ" />
        </div>
        <div className="mbtiWrapper">
          <Mbti mbti="ISTP" />
          <Mbti mbti="ISFP" />
          <Mbti mbti="INFP" />
          <Mbti mbti="INTP" />
        </div>
        <div className="mbtiWrapper">
          <Mbti mbti="ESTP" />
          <Mbti mbti="ESFP" />
          <Mbti mbti="ENFP" />
          <Mbti mbti="ENTP" />
        </div>
        <div className="mbtiWrapper">
          <Mbti mbti="ESTJ" />
          <Mbti mbti="ESFJ" />
          <Mbti mbti="ENFJ" />
          <Mbti mbti="ENTJ" />
        </div>
      </div>
      <TemplateFooter />
    </div>
  );
}

export default Home;