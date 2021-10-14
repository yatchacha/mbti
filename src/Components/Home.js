import React, { useState } from 'react';
import TemplateHeader from './Template/Header.js';
import TemplateFooter from './Template/Footer.js';
import Mbti from './Mbti.js';
import axios from 'axios';
import '../Style/Home.css';

const Home = () => {
  /**
   * 참고 : https://velog.io/@mgk8609/React%EC%97%90%EC%84%9C-Axios-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0
   */

  const [users, setUsers] = useState(null);
  const loadUsers = async () => {
    axios
      .get('http://api.yatchacha.com/mbti/user')
      .then((Response)=>{
        if (Response.data.result === 'success') {
          result = Response.data.data[0].data;
        }
      })
      .then(() => {
        console.log('dd');
        console.log(result);
        // setUsers(result)
      })
  }
  // let resultData = ;
  
  console.log(users);
  // console.log(users);
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